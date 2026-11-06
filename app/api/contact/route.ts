import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// In-memory rate limiting fallback map (IP -> timestamp array)
const inMemoryRateLimitMap = new Map<string, number[]>();

// Helper to extract reliable client IP
function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIp = req.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  const cfConnectingIp = req.headers.get('cf-connecting-ip');
  if (cfConnectingIp) {
    return cfConnectingIp.trim();
  }
  return '127.0.0.1';
}

export async function POST(req: NextRequest) {
  try {
    // 1. Payload size check (reject payloads > 32KB)
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > 32768) {
      return NextResponse.json(
        {
          success: false,
          deliveryStatus: 'INVALID_INPUT',
          error: 'Payload size exceeds 32KB limit.',
        },
        { status: 413 }
      );
    }

    const ip = getClientIp(req);

    // 2. Rate Limiting Check (Upstash Redis distributed rate-limiter with in-memory fallback)
    const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
    const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;
    let rateLimiterType = 'in_memory_fallback';
    let remainingRequests = 5;

    if (upstashUrl && upstashToken) {
      try {
        const redis = new Redis({
          url: upstashUrl,
          token: upstashToken,
        });
        const ratelimit = new Ratelimit({
          redis,
          limiter: Ratelimit.slidingWindow(5, '10 m'),
          analytics: false,
          prefix: 'ag_contact_rl',
        });
        const { success, remaining } = await ratelimit.limit(ip);
        rateLimiterType = 'upstash_redis';
        remainingRequests = remaining;

        if (!success) {
          return NextResponse.json(
            {
              success: false,
              deliveryStatus: 'RATE_LIMIT_EXCEEDED',
              error: 'Rate limit exceeded (5 inquiries per 10 minutes). Please wait before submitting again.',
            },
            {
              status: 429,
              headers: {
                'X-RateLimit-Limit': '5',
                'X-RateLimit-Remaining': '0',
                'X-RateLimit-Provider': rateLimiterType,
              },
            }
          );
        }
      } catch (redisErr) {
        // Fall back to in-memory rate limiting if Upstash unreachable
        console.warn('[Contact Relay] Upstash check failed, falling back to in-memory store.');
      }
    }

    if (rateLimiterType === 'in_memory_fallback') {
      const now = Date.now();
      const windowMs = 10 * 60 * 1000;
      const timestamps = (inMemoryRateLimitMap.get(ip) || []).filter((t) => now - t < windowMs);

      if (timestamps.length >= 5) {
        return NextResponse.json(
          {
            success: false,
            deliveryStatus: 'RATE_LIMIT_EXCEEDED',
            error: 'Rate limit exceeded (5 inquiries per 10 minutes). Please wait before submitting again.',
          },
          {
            status: 429,
            headers: {
              'X-RateLimit-Limit': '5',
              'X-RateLimit-Remaining': '0',
              'X-RateLimit-Provider': rateLimiterType,
            },
          }
        );
      }

      timestamps.push(now);
      inMemoryRateLimitMap.set(ip, timestamps);
      remainingRequests = Math.max(0, 5 - timestamps.length);
    }

    // 3. Body Parsing & Honeypot Check
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          deliveryStatus: 'INVALID_INPUT',
          error: 'Invalid JSON payload structure.',
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message, honeypot, _gotcha } = body || {};

    // Spam honeypot trap
    const trap = honeypot || _gotcha;
    if (trap && typeof trap === 'string' && trap.trim().length > 0) {
      return NextResponse.json(
        {
          success: true,
          deliveryStatus: 'SPAM_BLOCKED',
          messageId: 'SPAM_TRAPPED',
        },
        { status: 200 }
      );
    }

    // 4. Strict Input Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 80) {
      return NextResponse.json(
        {
          success: false,
          deliveryStatus: 'INVALID_INPUT',
          error: 'Name must be between 2 and 80 characters.',
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!email || typeof email !== 'string' || email.trim().length < 5 || email.trim().length > 100 || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          deliveryStatus: 'INVALID_INPUT',
          error: 'Please provide a valid professional email address.',
        },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 2 || subject.trim().length > 150) {
      return NextResponse.json(
        {
          success: false,
          deliveryStatus: 'INVALID_INPUT',
          error: 'Subject must be between 2 and 150 characters.',
        },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 2500) {
      return NextResponse.json(
        {
          success: false,
          deliveryStatus: 'INVALID_INPUT',
          error: 'Message must be between 10 and 2500 characters.',
        },
        { status: 400 }
      );
    }

    const messageId = `AG_${Date.now()}_${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    // 5. Email Dispatch via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Ansh Gandhi Platform <connect@workivo.in>';
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'connect@workivo.in';

    let deliveryStatus: 'EMAIL_DISPATCHED' | 'DELIVERY_NOT_CONFIGURED' | 'DELIVERY_FAILED' = 'DELIVERY_NOT_CONFIGURED';
    let providerMessageId: string | null = null;
    let providerErrorMessage: string | null = null;

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const sendResult = await resend.emails.send({
          from: fromEmail,
          to: recipientEmail,
          replyTo: cleanEmail,
          subject: `[${cleanSubject}] Inquiry from ${cleanName}`,
          text: `Audit ID: ${messageId}\nSender: ${cleanName} <${cleanEmail}>\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}`,
        });

        if (sendResult.data && sendResult.data.id) {
          deliveryStatus = 'EMAIL_DISPATCHED';
          providerMessageId = sendResult.data.id;
        } else if (sendResult.error) {
          deliveryStatus = 'DELIVERY_FAILED';
          providerErrorMessage = sendResult.error.message || 'Resend rejected the request.';
        }
      } catch (err: unknown) {
        deliveryStatus = 'DELIVERY_FAILED';
        providerErrorMessage = err instanceof Error ? err.message : 'Unknown dispatch error';
      }
    } else {
      deliveryStatus = 'DELIVERY_NOT_CONFIGURED';
    }

    // 6. Durable Storage via Supabase (if configured)
    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    let durableStorageStatus: 'persisted' | 'not_configured' | 'error' = 'not_configured';

    if (supabaseUrl && supabaseServiceKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        const { error: dbError } = await supabase.from('contact_submissions').insert([
          {
            name: cleanName,
            email: cleanEmail,
            subject: cleanSubject,
            message: cleanMessage,
            status: deliveryStatus,
            provider_message_id: providerMessageId,
            created_at: new Date().toISOString(),
          },
        ]);

        if (!dbError) {
          durableStorageStatus = 'persisted';
        } else {
          durableStorageStatus = 'error';
        }
      } catch {
        durableStorageStatus = 'error';
      }
    }

    // Security/Privacy rule: Do NOT log personal message text to stdout
    console.info(`[Contact Audit] Ref: ${messageId} | Status: ${deliveryStatus} | DB: ${durableStorageStatus} | Limiter: ${rateLimiterType}`);

    // 7. Structured Response Delivery
    if (deliveryStatus === 'EMAIL_DISPATCHED') {
      return NextResponse.json(
        {
          success: true,
          deliveryStatus,
          messageId,
          providerMessageId,
          durableStorage: durableStorageStatus,
          message: 'Your inquiry has been successfully dispatched to Ansh Gandhi.',
        },
        {
          status: 200,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': String(remainingRequests),
            'X-RateLimit-Provider': rateLimiterType,
          },
        }
      );
    }

    if (deliveryStatus === 'DELIVERY_NOT_CONFIGURED') {
      return NextResponse.json(
        {
          success: true,
          deliveryStatus,
          messageId,
          durableStorage: durableStorageStatus,
          message:
            'Inquiry validated and audit reference created. Automated Resend forwarding is awaiting RESEND_API_KEY environment setup. Use the direct email button below to contact Ansh Gandhi immediately.',
        },
        {
          status: 200,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': String(remainingRequests),
            'X-RateLimit-Provider': rateLimiterType,
          },
        }
      );
    }

    // DELIVERY_FAILED
    return NextResponse.json(
      {
        success: false,
        deliveryStatus: 'DELIVERY_FAILED',
        messageId,
        error: `Delivery provider was unable to dispatch the email (${providerErrorMessage || 'check RESEND_API_KEY / verified domain'}). Please use the direct email button.`,
      },
      {
        status: 502,
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': String(remainingRequests),
          'X-RateLimit-Provider': rateLimiterType,
        },
      }
    );
  } catch (error) {
    console.error('[Contact Handler Error]', error instanceof Error ? error.message : 'Unknown');
    return NextResponse.json(
      {
        success: false,
        deliveryStatus: 'DELIVERY_FAILED',
        error: 'Internal server error while processing message request.',
      },
      { status: 500 }
    );
  }
}
