-- Create a function to handle new contact submissions
CREATE OR REPLACE FUNCTION notify_new_contact()
RETURNS trigger AS $$
BEGIN
  -- Call the edge function to send email
  PERFORM
    net.http_post(
      url := 'https://qjarlezhtmcxkmextvtv.supabase.co/functions/v1/send-contact-notification',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqYXJsZXpodG1jeGttZXh0dnR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxNDQ5MDEsImV4cCI6MjA2ODcyMDkwMX0.kOhLD5jzF1xm5tu7nrtbWbO34c_86WX0geQVQxravi0'
      ),
      body := jsonb_build_object(
        'contact_data', row_to_json(NEW)
      )
    );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to call the function on new contact submissions
CREATE TRIGGER on_contact_submission_created
  AFTER INSERT ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact();