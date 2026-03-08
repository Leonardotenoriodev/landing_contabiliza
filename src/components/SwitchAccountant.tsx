import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Users, Clock, Shield, FileText } from "lucide-react";
const SwitchAccountant = () => {
  const benefits = [{
    icon: Clock,
    title: "Processo Rápido",
    description: "Transferência completa em até 7 dias úteis"
  }, {
    icon: Shield,
    title: "Sem Burocracia",
    description: "Cuidamos de toda a documentação necessária"
  }, {
    icon: FileText,
    title: "Histórico Preservado",
    description: "Mantemos todo seu histórico contábil organizado"
  }, {
    icon: Users,
    title: "Suporte Dedicado",
    description: "Equipe especializada durante toda a migração"
  }];
  const steps = ["Análise da sua situação atual", "Solicitação de documentos ao contador anterior", "Revisão e organização dos dados", "Migração completa para nossos sistemas", "Início do atendimento especializado"];
  return <section id="trocar-contador" className="py-24 bg-gradient-to-br from-primary-50 via-white to-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Migração Facilitada
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-800">Trocar de Contador</span>
            <span className="block gradient-text">Nunca Foi Tão Fácil</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Está insatisfeito com seu contador atual? Fazemos toda a migração sem complicações.
            <span className="block mt-2 text-primary-600 font-semibold">
              Zero stress • Processo 100% digital • Suporte completo
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Por que escolher a Contabiliza.Psi?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-200 transition-colors">
                        <benefit.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          <div className="animate-on-scroll">
            <Card className="border-primary-200 shadow-xl">
              <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
                <CardTitle className="text-2xl">Como Funciona a Migração</CardTitle>
                <CardDescription className="text-primary-100">
                  Processo simples em 5 etapas
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {steps.map((step, index) => <div key={index} className="flex items-start gap-4">
                      <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">{step}</p>
                      </div>
                    </div>)}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/25 py-3 font-semibold"
                    onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de iniciar a migração gratuita da minha contabilidade para a Contabiliza.Psi', '_blank')}
                  >
                    Iniciar Migração Gratuita
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center animate-on-scroll">
          
        </div>
      </div>
    </section>;
};
export default SwitchAccountant;