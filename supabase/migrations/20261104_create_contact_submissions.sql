-- =========================================================================
-- Supabase Migration: contact_submissions with Row Level Security (RLS)
-- Target Platform: Ansh Gandhi Official Website
-- Description: Stores contact inquiries securely with server-side privileges.
-- =========================================================================

CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(80) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) NOT NULL, -- 'EMAIL_DISPATCHED', 'DELIVERY_NOT_CONFIGURED', 'DELIVERY_FAILED'
    provider_message_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Service Role Policy: Full access for server-side API handler
CREATE POLICY "Service Role Full Access"
    ON public.contact_submissions
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Disallow public anonymous and authenticated client read/write access
REVOKE ALL ON public.contact_submissions FROM anon;
REVOKE ALL ON public.contact_submissions FROM authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

-- Index for efficient querying by status and date
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
