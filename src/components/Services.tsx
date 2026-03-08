
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Calculator, TrendingUp, Clock, Users, Video, RefreshCw } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Análise Tributária",
      description: "Análise completa da sua situação tributária para otimizar impostos e garantir conformidade legal.",
      features: ["Escolha do regime tributário", "Atuação como PF/PJ", "Otimização de impostos"]
    },
    {
      icon: FileText,
      title: "Emissão de Notas Fiscais",
      description: "Gestão completa da emissão de notas fiscais para psicólogos autônomos e clínicas.",
      features: ["Emissão automatizada", "Controle de numeração", "Envio por email/WhatsApp"]
    },
    {
      icon: Clock,
      title: "Obrigações Mensais e Anuais",
      description: "Cuidamos de todas as obrigações para que você foque nos seus pacientes.",
      features: ["DAS - Simples Nacional", "DEFIS", "DMED, entre outros"]
    },
    {
      icon: Users,
      title: "Consultório/Clínicas",
      description: "Mantemos todos os cadastros, registros e liberações em dia para garantir que seu consultório/clínica funcione sem preocupações.",
      features: ["Folha de pagamento", "Alvarás e Liberações", "Atualização/Cadastro CRP"]
    },
    {
      icon: Video,
      title: "Reunião com Contador",
      description: "Acompanhamento contínuo com um contador dedicado para tirar dúvidas e orientar suas decisões com mais segurança.",
      features: ["Orientação personalizada", "Tomada de decisões seguras", "Agilidade no suporte"]
    },
    {
      icon: TrendingUp,
      title: "Consultoria Financeira",
      description: "Análise financeira detalhada para maximizar seus resultados profissionais.",
      features: ["Análise de rentabilidade", "Controle de fluxo de caixa", "Projeções financeiras"]
    },
    {
      icon: RefreshCw,
      title: "Mudança de Contabilidade",
      description: "Transferência completa e segura da sua contabilidade para nossa equipe especializada.",
      features: ["Migração sem complicações", "Análise da situação atual", "Suporte na transição"]
    },
    {
      icon: FileText,
      title: "Declaração de Imposto de Renda",
      description: "Elaboração completa da sua declaração de IR, garantindo máxima restituição e conformidade.",
      features: ["Feita por especialista", "Revisão especializada", "Suporte até a restituição"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Serviços Especializados</span>
            <span className="block text-gray-800">para Psicólogos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Liberte-se da burocracia contábil. Oferecemos um portfólio completo de serviços especializados para que psicólogos possam focar exclusivamente em seus pacientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-primary-300 animate-on-scroll"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
