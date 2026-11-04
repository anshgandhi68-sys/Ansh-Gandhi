'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { socialLinks, contactDetails } from '@/data/social-links';

type DeliveryStatus = 'EMAIL_DISPATCHED' | 'DELIVERY_NOT_CONFIGURED' | null;

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Venture & Collaboration',
    message: '',
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<DeliveryStatus>(null);
  const [submittedMessageId, setSubmittedMessageId] = useState<string | null>(null);
  const [providerMessageId, setProviderMessageId] = useState<string | null>(null);
  const [durableStorage, setDurableStorage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side quick checks
    if (!formState.name.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!formState.email.trim() || !formState.email.includes('@')) {
      setErrorMessage('Please provide a valid professional email address.');
      return;
    }
    if (formState.message.trim().length < 10) {
      setErrorMessage('Message must contain at least 10 characters.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || 'Failed to dispatch message relay. Please try again or email directly.');
      } else {
        setSubmissionStatus(data.deliveryStatus);
        setSubmittedMessageId(data.messageId);
        setProviderMessageId(data.providerMessageId || null);
        setDurableStorage(data.durableStorage || null);
      }
    } catch {
      setErrorMessage('Network error communicating with contact relay server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-kelp text-butter relative overflow-hidden">
      {/* Background orbital graphic */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-32 -translate-y-1/2 w-96 h-96 sm:w-[500px] sm:h-[500px] border border-butter/15 rounded-full pointer-events-none animate-spin-slow"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-16 -translate-y-1/2 w-72 h-72 sm:w-[380px] sm:h-[380px] border border-dashed border-lemon/20 rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-lemon" />
          <span className="text-xs font-mono uppercase tracking-widest text-butter/70">
            08 / Direct Engagement
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Context & Verified Profiles (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-butter uppercase leading-[0.95]">
              HAVE SOMETHING <br />
              <span className="text-lemon">INTERESTING</span> <br />
              IN MIND?
            </h2>

            <p className="text-base sm:text-lg text-butter/85 leading-relaxed font-normal max-w-lg">
              For startup conversations, technology collaboration, research discussions and professional opportunities.
            </p>

            {/* Email Direct Access Card */}
            <div className="p-6 bg-white/5 border border-butter/15 rounded-3xl backdrop-blur-sm space-y-3 max-w-lg notched-box-full">
              <span className="text-[11px] font-mono uppercase tracking-widest text-butter/60 block">
                Primary Direct Inquiries
              </span>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="text-lg sm:text-xl font-mono font-medium text-lemon">
                  {contactDetails.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-butter/15 hover:bg-butter/25 text-xs font-mono uppercase tracking-wider text-butter transition-colors"
                >
                  <Icon
                    icon={copied ? 'solar:check-circle-bold' : 'solar:copy-bold'}
                    className="w-3.5 h-3.5 text-lemon"
                  />
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
                </button>
              </div>
              <p className="text-xs text-butter/70 font-normal leading-relaxed pt-1">
                {contactDetails.availability}
              </p>
            </div>

            {/* Verified Public Profiles Card */}
            <div className="space-y-3 max-w-lg">
              <span className="text-[11px] font-mono uppercase tracking-widest text-butter/60 block">
                Verified Public Profiles
              </span>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 bg-white/5 hover:bg-white/10 border border-butter/10 rounded-2xl transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-butter/10 flex items-center justify-center text-lemon group-hover:scale-110 transition-transform">
                      <Icon icon={link.icon} className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-xs font-semibold text-butter block truncate">
                        {link.name}
                      </span>
                      <span className="text-[11px] font-mono text-butter/50 block truncate">
                        {link.handle}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Operational Location & Timezone */}
            <div className="flex items-center gap-6 pt-2 text-xs font-mono text-butter/60">
              <span className="flex items-center gap-1.5">
                <Icon icon="solar:map-point-bold" className="w-3.5 h-3.5 text-lemon" />
                {contactDetails.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon icon="solar:clock-circle-bold" className="w-3.5 h-3.5 text-lemon" />
                {contactDetails.timezone}
              </span>
            </div>
          </div>

          {/* Right Column: Functional Engagement Form (6 cols) */}
          <div className="lg:col-span-6 bg-white/10 border border-butter/20 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-md notched-box-full">
            <div className="border-b border-butter/15 pb-4 mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-medium text-butter tracking-tight">Initiate Conversation</h3>
                <p className="text-xs text-butter/60 font-mono mt-0.5">Validated Direct Message Relay</p>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-lemon animate-ping" />
            </div>

            {submittedMessageId ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-lemon/20 text-lemon flex items-center justify-center mx-auto">
                  <Icon
                    icon={submissionStatus === 'EMAIL_DISPATCHED' ? 'solar:letter-bold' : 'solar:shield-check-bold'}
                    className="w-8 h-8"
                  />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-butter/20 text-[10px] font-mono uppercase tracking-widest text-lemon">
                  <span className="w-1.5 h-1.5 rounded-full bg-lemon animate-pulse" />
                  {submissionStatus === 'EMAIL_DISPATCHED' ? 'EMAIL DISPATCHED' : 'DELIVERY NOT CONFIGURED'}
                </div>

                <h4 className="text-2xl font-medium text-butter tracking-tight">
                  {submissionStatus === 'EMAIL_DISPATCHED'
                    ? 'Message Dispatched Directly'
                    : 'Inquiry Validated & Logged'}
                </h4>

                <p className="text-xs sm:text-sm text-butter/80 max-w-sm mx-auto leading-relaxed">
                  {submissionStatus === 'EMAIL_DISPATCHED'
                    ? 'Your message was successfully dispatched via verified Resend forwarding to Ansh Gandhi.'
                    : 'Your inquiry has passed security validation and is recorded. Automated Resend forwarding requires RESEND_API_KEY environment setup. Launch your mail client below to contact Ansh immediately.'}
                </p>

                <div className="space-y-1.5 p-3.5 bg-white/5 border border-butter/15 rounded-xl font-mono text-[11px] text-lemon max-w-xs mx-auto text-left">
                  <div className="flex justify-between">
                    <span className="text-butter/50">Audit Ref:</span>
                    <span className="font-semibold">{submittedMessageId}</span>
                  </div>
                  {providerMessageId && (
                    <div className="flex justify-between">
                      <span className="text-butter/50">Resend ID:</span>
                      <span className="truncate max-w-[140px]">{providerMessageId}</span>
                    </div>
                  )}
                  {durableStorage && (
                    <div className="flex justify-between">
                      <span className="text-butter/50">Storage:</span>
                      <span className="capitalize">{durableStorage}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`mailto:${contactDetails.email}?subject=${encodeURIComponent(`[${formState.subject}] Inquiry from ${formState.name}`)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nRef: ${submittedMessageId}\n\nMessage:\n${formState.message}`)}`}
                    className="px-4 py-2.5 rounded-full bg-lemon text-ink font-semibold text-xs uppercase tracking-wider hover:bg-butter transition-colors inline-flex items-center gap-1.5 shadow-md"
                  >
                    <span>Direct Email Client</span>
                    <Icon icon="solar:letter-bold" className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedMessageId(null);
                      setSubmissionStatus(null);
                      setProviderMessageId(null);
                      setFormState({ name: '', email: '', subject: 'Venture & Collaboration', message: '', honeypot: '' });
                    }}
                    className="px-4 py-2.5 rounded-full border border-butter/30 text-xs font-mono uppercase tracking-wider text-butter hover:bg-butter/10 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 bg-coral/20 border border-coral/40 rounded-xl text-xs text-butter flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Icon icon="solar:danger-triangle-bold" className="w-4 h-4 text-coral shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                    <a
                      href={`mailto:${contactDetails.email}?subject=${encodeURIComponent(`[${formState.subject}] Inquiring directly`)}`}
                      className="text-[11px] font-mono underline text-lemon shrink-0 hover:text-butter"
                    >
                      Email Directly
                    </a>
                  </div>
                )}

                {/* Honeypot field (hidden from genuine users) */}
                <div aria-hidden="true" className="hidden">
                  <label htmlFor="hp_field">Do not fill</label>
                  <input
                    id="hp_field"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formState.honeypot}
                    onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-butter/70 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Founder, Investor, or Collaborator"
                    className="w-full px-4 py-3 bg-white/5 border border-butter/20 rounded-xl text-butter placeholder-butter/40 text-sm focus:outline-none focus:border-lemon transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-butter/70 mb-1.5">
                    Professional Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3 bg-white/5 border border-butter/20 rounded-xl text-butter placeholder-butter/40 text-sm focus:outline-none focus:border-lemon transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-widest text-butter/70 mb-1.5">
                    Discussion Domain
                  </label>
                  <select
                    id="subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-ink/50 border border-butter/20 rounded-xl text-butter text-sm focus:outline-none focus:border-lemon transition-colors"
                  >
                    <option value="Venture & Collaboration">Venture &amp; Collaboration</option>
                    <option value="Workivo Discussion">Workivo Marketplace Discussion</option>
                    <option value="Technology & AI Architecture">Technology &amp; AI Architecture</option>
                    <option value="Research & Theoretical Inquiries">Research &amp; Theoretical Inquiries</option>
                    <option value="General Professional Connection">General Professional Connection</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-butter/70 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Share context on what you are building or exploring..."
                    className="w-full px-4 py-3 bg-white/5 border border-butter/20 rounded-xl text-butter placeholder-butter/40 text-sm focus:outline-none focus:border-lemon transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-butter text-ink hover:bg-lemon font-medium rounded-xl text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 shadow-md group disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Relaying Message...' : 'Dispatch Message'}</span>
                  <Icon
                    icon="solar:arrow-right-up-linear"
                    className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </button>
              </form>
            )}

            <div className="mt-4 pt-4 border-t border-butter/10 flex items-center justify-between text-[11px] font-mono text-butter/50">
              <span>Direct Encrypted Relay</span>
              <span>Zero Spam Tolerance</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
