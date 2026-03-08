import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Erro",
        description: "Por favor, digite um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_emails')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // unique violation
          toast({
            title: "E-mail já cadastrado",
            description: "Este e-mail já está inscrito na nossa newsletter!",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "E-mail enviado com sucesso!",
          description: "Obrigado por se inscrever na nossa newsletter. Você receberá nossas dicas em breve!",
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Erro ao inscrever email:', error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao processar sua inscrição. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-800">
      <div className="container-width section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Gestão e Finanças para Psicólogos
          </h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Receba dicas práticas sobre gestão financeira e atualizações importantes sobre legislação para psicólogos.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Digite seu melhor e-mail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-primary-500 flex-1" 
              required
            />
            <Button 
              type="submit"
              disabled={isLoading}
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 whitespace-nowrap"
            >
              {isLoading ? "Enviando..." : "Receber Dicas"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;