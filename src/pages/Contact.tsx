
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

interface ContactFormData {
  full_name: string;
  whatsapp: string;
  email: string;
  current_situation: string;
  message?: string;
}

const Contact = () => {
  const whatsappLink = "https://wa.me/message/LIZKZRGRXQFNF1";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "cfb1672d-8cab-4c0b-b8f1-c332fb51d6ec", // Substitua por sua access key do Web3Forms
          subject: "Novo contato pelo site Contabiliza.Psi",
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Recebemos seu contato e em breve entraremos em contato com você.",
        });
        reset();
      } else {
        throw new Error(result.message || "Erro no envio");
      }
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente mais tarde ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-800">Entre em</span>
              <span className="block gradient-text">Contato</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para esclarecer suas dúvidas e ajudar você a escolher
              a melhor solução contábil para sua prática psicológica.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Envie sua Mensagem
                  </CardTitle>
                  <p className="text-gray-600">
                    Preencha o formulário e entraremos em contato em até 1 hora.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo
                        </label>
                        <Input
                          placeholder="Seu nome completo"
                          {...register("full_name", { required: "Nome é obrigatório" })}
                        />
                        {errors.full_name && (
                          <p className="text-sm text-red-600 mt-1">{errors.full_name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          WhatsApp
                        </label>
                        <Input
                          placeholder="(11) 99999-9999"
                          maxLength={15}
                          {...register("whatsapp", { required: "WhatsApp é obrigatório" })}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, "");
                            if (value.length > 11) {
                              value = value.substring(0, 11);
                            }
                            if (value.length <= 11) {
                              value = value
                                .replace(/^(\d{2})(\d)/g, "($1) $2")
                                .replace(/(\d)(\d{4})$/, "$1-$2");
                            }
                            e.target.value = value;
                            register("whatsapp").onChange(e);
                          }}
                        />
                        {errors.whatsapp && (
                          <p className="text-sm text-red-600 mt-1">{errors.whatsapp.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <Input
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        {...register("email", {
                          required: "E-mail é obrigatório",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "E-mail inválido"
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Situação Atual
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        {...register("current_situation", { required: "Situação é obrigatória" })}
                      >
                        <option value="">Selecione sua situação</option>
                        <option value="Sou autônomo">Sou autônomo</option>
                        <option value="Tenho CNPJ mas preciso trocar de contador">Tenho CNPJ mas preciso trocar de contador</option>
                        <option value="Quero abrir CNPJ">Quero abrir CNPJ</option>
                        <option value="Tenho clínica com funcionários">Tenho clínica com funcionários</option>
                        <option value="Outro">Outro</option>
                      </select>
                      {errors.current_situation && (
                        <p className="text-sm text-red-600 mt-1">{errors.current_situation.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem
                      </label>
                      <Textarea
                        placeholder="Conte-nos mais sobre suas necessidades..."
                        rows={4}
                        {...register("message")}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/25"
                      disabled={isSubmitting}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Fale Conosco Agora
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Nossa equipe especializada está pronta para atender você.
                  Escolha o canal que preferir para falar conosco.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-primary-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
                        <p className="text-gray-600 text-sm">Entre em contato!</p>
                      </div>
                      <Button asChild className="bg-green-600 hover:bg-green-700">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                          Conversar
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">E-mail</h3>
                        <p className="text-gray-600 text-sm">contato@contabilizapsi.com.br</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">Telefone</h3>
                        <p className="text-gray-600 text-sm">(13) 99749-1518</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">Horário de Atendimento</h3>
                        <p className="text-gray-600 text-sm">
                          Segunda a Sexta: 9h às 18h
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
