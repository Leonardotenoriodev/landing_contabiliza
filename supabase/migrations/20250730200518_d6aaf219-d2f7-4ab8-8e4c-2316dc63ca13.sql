-- Fix the security warnings by setting proper search_path
CREATE OR REPLACE FUNCTION public.handle_contact_submission()
RETURNS TRIGGER AS $$
BEGIN
  NEW.submitted_at = now();
  NEW.created_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.created_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;