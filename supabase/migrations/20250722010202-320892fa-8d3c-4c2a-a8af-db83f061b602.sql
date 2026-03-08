-- Create newsletter_emails table
CREATE TABLE public.newsletter_emails (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.newsletter_emails ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert emails (public newsletter signup)
CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.newsletter_emails 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent reading emails (privacy)
CREATE POLICY "Newsletter emails are private" 
ON public.newsletter_emails 
FOR SELECT 
USING (false);

-- Create index for better performance
CREATE INDEX idx_newsletter_emails_email ON public.newsletter_emails(email);
CREATE INDEX idx_newsletter_emails_subscribed_at ON public.newsletter_emails(subscribed_at DESC);