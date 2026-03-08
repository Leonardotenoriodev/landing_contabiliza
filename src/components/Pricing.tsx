
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Sparkles } from "lucide-react";

const Pricing = () => {
  const whatsappLink = "https://wa.me/message/LIZKZRGRXQFNF1";
  
  const plans = [{
    name: "Plano Psi Autônomo",
    price: "R$ 199",
    period: "/mês",
    description: "Ideal para psicólogos que trabalham de forma independente",
    badge: null,
    features: ["Livro Caixa Mensal (receitas/despesas)", "Emissão de Recibos para Pacientes", "Apuração Mensal do Carnê-Leão", "Guia Carnê-Leão (emissão e envio)", "Guia INSS Autônomo (elaboração, emissão e envio)", "Suporte Básico (e-mail/WhatsApp)", "Análise Tributária Semestral (viabilidade PJ)", "1 Consultoria Online Mensal (1h)"],
    cta: "Quero Este Plano",
    highlighted: false,
    color: "border-gray-200 hover:border-primary-300"
  }, {
    name: "Plano Psi Essencial PJ",
    price: "R$ 399",
    period: "/mês",
    description: "Para consultórios pequenos com até 2 profissionais",
    badge: "Mais Popular",
    features: ["Escrituração Contábil Mensal (Simples Nacional)", "Apuração de Impostos Mensais (Simples Nacional - DAS)", "Emissão de Guias de Impostos (envio DAS)", "Gestão do Pró-labore dos Sócios (cálculo, recibos, guias INSS)", "Emissão de até 30 Notas Fiscais/mês", "Declarações Obrigatórias Mensais e Anuais (federais, estaduais, municipais)", "DMED Anual", "Distribuição de Lucros Isentos", "Suporte Prioritário (e-mail/WhatsApp)", "Até 2 Consultorias Online Mensais (1h cada)"],
    cta: "Contratar Agora",
    highlighted: true,
    color: "border-primary-500 ring-2 ring-primary-200"
  }, {
    name: "Plano Psi Completo PJ",
    price: "R$ 699",
    period: "/mês",
    description: "Solução completa para clínicas e centros de psicologia",
    badge: "Premium",
    features: ["Todos os serviços do Plano Psi Essencial PJ, mais:", "Emissão de Notas Fiscais Ilimitadas/mês", "Gestão de Folha de Pagamento (até 5 funcionários: holerites, guias INSS/FGTS, eSocial)", "Relatórios Contábeis Gerenciais (Balancete, DRE)", "Distribuição de Lucros Planejada e Detalhada", "Emissão de CNDs (quando solicitado)", "Assessoria em Alterações Contratuais Simples", "Planejamento Tributário Anual Personalizado", "IRPF do Sócio Principal (elaboração e entrega)", "Suporte Dedicado e Imediato", "Até 5 Consultorias Online Mensais (1h cada - dúvidas e planejamento estratégico)"],
    cta: "Fale com um Especialista",
    highlighted: false,
    color: "border-purple-200 hover:border-purple-300"
  }];
  
  return <section id="precos" className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      <div className="container-width section-padding">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Preços Transparentes
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-800">Planos que</span>
            <span className="block gradient-text">Cabem no Seu Bolso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Escolha o plano ideal para o seu momento profissional. 
            <span className="block mt-2 text-primary-600 font-semibold">Suporte Especializado Incluso</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => <Card key={index} className={`relative transition-all duration-500 hover:shadow-2xl animate-on-scroll group ${plan.highlighted ? 'scale-105 shadow-xl bg-white transform hover:scale-110' : 'hover:scale-105 bg-white'} ${plan.color}`} style={{
          animationDelay: `${index * 0.15}s`
        }}>
              {plan.badge && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className={`${plan.highlighted ? 'bg-gradient-primary text-white' : 'bg-purple-600 text-white'} px-4 py-1.5 text-sm font-semibold shadow-lg`}>
                    <Star className="w-3 h-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>}
              
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-800 mb-3">
                  {plan.name}
                </CardTitle>
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-gray-600 text-lg font-medium">{plan.period}</span>
                  </div>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button 
                  asChild 
                  className={`w-full mb-8 py-4 font-semibold text-base transition-all duration-300 group-hover:shadow-lg ${plan.highlighted ? 'bg-gradient-primary hover:shadow-xl hover:shadow-primary-500/30 transform hover:scale-105 text-white' : plan.badge === 'Premium' ? 'bg-purple-600 hover:bg-purple-700 text-white hover:shadow-xl' : 'bg-gray-800 hover:bg-gray-900 text-white hover:shadow-xl'}`}
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <div className="space-y-1 mb-4">
                  <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                    O que está incluído:
                  </h4>
                </div>
                
                <ul className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
                  {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start group/item">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        {feature}
                      </span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center animate-on-scroll">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6 text-lg">
              Não tem certeza qual plano escolher? 
              <span className="block mt-2 text-gray-800 font-medium">
                Nossa equipe está pronta para te ajudar a encontrar a solução perfeita!
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="outline" 
                className="border-primary-300 text-primary-700 hover:bg-primary-50 px-6 py-3 font-semibold"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Fale com nosso time comercial
                </a>
              </Button>
              <Button 
                asChild 
                className="bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/25 px-6 py-3 font-semibold"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Agendar consultoria gratuita
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Pricing;
