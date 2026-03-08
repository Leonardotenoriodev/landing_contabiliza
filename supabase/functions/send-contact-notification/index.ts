import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactData {
  full_name: string;
  whatsapp: string;
  email: string;
  current_situation: string;
  message?: string;
  submitted_at: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { contact_data }: { contact_data: ContactData } = await req.json();
    
    console.log("Sending contact notification email for:", contact_data.full_name);

    const emailResponse = await resend.emails.send({
      from: "ContabilizaPsi <noreply@contabilizapsi.com.br>",
      to: ["contato@contabilizapsi.com.br"],
      subject: `Novo contato: ${contact_data.full_name}`,
      html: `
        <h2>Novo contato recebido!</h2>
        <p><strong>Nome:</strong> ${contact_data.full_name}</p>
        <p><strong>WhatsApp:</strong> ${contact_data.whatsapp}</p>
        <p><strong>Email:</strong> ${contact_data.email}</p>
        <p><strong>Situação Atual:</strong> ${contact_data.current_situation}</p>
        ${contact_data.message ? `<p><strong>Mensagem:</strong><br>${contact_data.message}</p>` : ''}
        <p><strong>Data/Hora:</strong> ${new Date(contact_data.submitted_at).toLocaleString('pt-BR')}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending contact notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);