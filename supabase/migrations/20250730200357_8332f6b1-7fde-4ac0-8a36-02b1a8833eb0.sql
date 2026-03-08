-- Remove the problematic trigger and function that uses net schema
DROP TRIGGER IF EXISTS on_contact_submission_created ON public.contact_submissions;
DROP FUNCTION IF EXISTS public.notify_new_contact();

-- Create a simpler trigger that just updates timestamps
CREATE OR REPLACE FUNCTION public.handle_contact_submission()
RETURNS TRIGGER AS $$
BEGIN
  NEW.submitted_at = now();
  NEW.created_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for the contact submissions
CREATE TRIGGER on_contact_submission_insert
  BEFORE INSERT ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_contact_submission();