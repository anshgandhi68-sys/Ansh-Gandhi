import { NextRequest, NextResponse } from 'next/server';

// In-memory rate limiting map (IP -> timestamp array)
const rateLimitMap = new Map<string, number[]>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('x-real-ip') || '127.0.0.1';

    // Rate limiting: maximum 5 submissions per 10 minutes per IP
    const now = Date.now();
    const windowMs = 10 * 60 * 1000;
    const timestamps = (rateLimitMap.get(ip) || []).filter((t) => now - t < windowMs);

    if (timestamps.length >= 5) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded. Please wait a few moments before sending another message.',
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message, honeypot } = body;

    // Spam honeypot detection
    if (honeypot && typeof honeypot === 'string' && honeypot.trim().length > 0) {
      return NextResponse.json(
        { success: true, messageId: 'SPAM_BLOCKED' },
        { status: 200 }
      );
    }

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: 'Name must be between 2 and 100 characters.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Subject is required.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Message must be between 10 and 5000 characters.' },
        { status: 400 }
      );
    }

    // Update rate limiting timestamps
    timestamps.push(now);
    rateLimitMap.set(ip, timestamps);

    const messageId = `AG_RELAY_${Date.now()}_${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // Check if an external email delivery provider (Resend) is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'connect@workivo.in';
    let emailDispatched = false;

    if (resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Ansh A Gandhi Platform <onboarding@resend.dev>',
            to: recipientEmail,
            reply_to: email.trim(),
            subject: `[${subject.trim()}] Inquiry from ${name.trim()}`,
            text: `Ref ID: ${messageId}\nSender: ${name.trim()} (${email.trim()})\n\nMessage:\n${message.trim()}`,
          }),
        });
        if (resendRes.ok) {
          emailDispatched = true;
          console.info(`[Contact Relay] Successfully dispatched via Resend: ${messageId}`);
        } else {
          console.warn(`[Contact Relay] Resend API error for ${messageId}:`, await resendRes.text());
        }
      } catch (dispatchErr) {
        console.error(`[Contact Relay] Failed external dispatch for ${messageId}:`, dispatchErr);
      }
    } else {
      // Phase 1 requirement: Do not claim an external email was sent if provider is unconfigured
      console.info(`[Contact Relay Audit] Validated inquiry ${messageId} from ${email.trim()}. External provider not configured.`);
    }

    return NextResponse.json(
      {
        success: true,
        messageId,
        delivery: emailDispatched ? 'dispatched_live' : 'recorded_simulated',
        timestamp: new Date().toISOString(),
        message: emailDispatched
          ? 'Your message has been directly dispatched to Ansh A Gandhi.'
          : 'Your inquiry has been validated and recorded. (External email provider awaiting RESEND_API_KEY configuration)',
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': String(Math.max(0, 5 - timestamps.length)),
        },
      }
    );
  } catch (error) {
    console.error('[Contact Relay Error]', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing message relay.' },
      { status: 500 }
    );
  }
}
