
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const whatsappLink = "https://wa.me/message/LIZKZRGRXQFNF1";
  
  const faqs = [
    {
      question: "Vocês atendem psicólogos de todo o Brasil?",
      answer: "Sim! Atendemos psicólogos em todo o Brasil com nosso atendimento 100% digital, oferecendo comodidade e acesso aos nossos serviços especializados de onde você estiver."
    },
    {
      question: "Como funciona o suporte? Vocês respondem rápido?",
      answer: "Nosso atendimento é um diferencial! Garantimos respostas em menos de 1 hora (horário comercial) via WhatsApp/e-mail. Além disso, os planos incluem consultorias online mensais com um contador:\n\n• Psi Autônomo: Suporte ágil e 1 consultoria/mês.\n• Psi Essencial PJ: Suporte prioritário e até 2 consultorias/mês.\n• Psi Completo PJ: Suporte dedicado, respostas imediatas e até 5 consultorias/mês."
    },
    {
      question: "Preciso ter CNPJ para contratar os serviços PJ?",
      answer: "Não necessariamente. Podemos ajudar na abertura do seu CNPJ. Se você é autônomo, oferecemos consultoria para avaliar a migração para PJ."
    },
    {
      question: "Vocês fazem a declaração do Imposto de Renda?",
      answer: "Sim, realizamos. A Declaração de IRPF é um serviço adicional que está incluso apenas no Plano Psi Completo PJ."
    },
    {
      question: "Como vocês garantem a segurança dos meus dados?",
      answer: "A segurança dos seus dados é prioridade. Usamos criptografia, seguimos a LGPD à risca, e seus documentos ficam em servidores seguros com backup. Suas informações nunca são compartilhadas."
    },
    {
      question: "Posso cancelar o serviço quando quiser?",
      answer: "Sim, não há fidelidade. Cancele a qualquer momento com 30 dias de antecedência. Entregamos toda sua documentação organizada para facilitar a transição."
    },
    {
      question: "Como funciona o pagamento dos planos?",
      answer: "A fatura é enviada por e-mail/WhatsApp, com opção de pagamento via boleto ou PIX direto na fatura."
    },
    {
      question: "Vocês auxiliam com questões do Conselho de Psicologia (CRP)?",
      answer: "Sim. Auxiliamos especificamente com os cadastros e atualizações de documentações junto ao CRP relacionados à sua atuação como autônomo(a) ou Pessoa Jurídica, do ponto de vista da regularidade da sua empresa ou atuação individual."
    },
    {
      question: "Como funciona o processo de abertura de CNPJ com vocês?",
      answer: "Oferecemos a Abertura de CNPJ como serviço à parte. Inclui consultoria inicial, auxílio com documentos, protocolo nos órgãos e acompanhamento até a liberação do seu CNPJ. Processo ágil e sem burocracia."
    },
    {
      question: "Se minha clínica crescer, posso mudar de plano?",
      answer: "Sim! Nossos planos são flexíveis. Se suas necessidades mudarem, analisamos juntos e ajustamos você para o plano mais adequado e vantajoso."
    },
    {
      question: "Como faço para contratar a CONTABILIZA PSI?",
      answer: "Entre em contato pelo nosso site, WhatsApp ou e-mail. Agendaremos uma conversa para entender suas necessidades, definir o melhor plano e iniciar nosso processo de onboarding. Simples assim!"
    },
    {
      question: "Posso abrir minha empresa em um endereço residencial?",
      answer: "Sim, é possível abrir uma empresa prestadora de serviços em um endereço residencial. No entanto, é importante considerar que utilizar sua residência como domicílio fiscal pode acarretar alguns desafios. Embora seja uma ocorrência rara, alguns municípios podem fiscalizar e reclassificar seu IPTU de residencial para comercial, o que resultaria em um aumento significativo do valor.\n\nPara evitar complicações fiscais, oferecemos alternativas como o uso de espaços de coworking, que são isentos de problemas fiscais para sua empresa. Com essa solução, nossos clientes podem aproveitar uma mensalidade abaixo do mercado e desfrutar de todos os benefícios associados ao uso do endereço fiscal. Saiba mais com nossa equipe 🙂."
    },
    {
      question: "Quais as vantagens de abrir minha empresa em um endereço fiscal de coworking?",
      answer: "Utilizar um endereço fiscal de coworking oferece diversas vantagens. Ter um endereço comercial ajuda a projetar uma imagem mais profissional, aumentando a confiança de clientes e parceiros.\n\nAqui na Contabiliza PSI, nossa solução é oferecida a um valor competitivo, abaixo do mercado. Para saber mais sobre como podemos auxiliar no crescimento da sua empresa com custos reduzidos e mais benefícios, entre em contato com nossa equipe."
    },
    {
      question: "Quais documentos são necessários e onde devo enviá-los para a abertura da minha PJ?",
      answer: "Para abrir sua Pessoa Jurídica, você precisará fornecer alguns documentos pessoais e informações específicas. Estes incluem seu nome completo, CPF, contato, detalhes profissionais e residenciais, entre outros requisitos pertinentes ao seu estado civil e regime de bens. Além disso, precisaremos de detalhes sobre o local da empresa, como o IPTU e a inscrição imobiliária. O restante deixa com a gente!"
    },
    {
      question: "Quais taxas além dos impostos devo pagar?",
      answer: "Após abertura da sua empresa, você terá algumas taxas anuais além dos impostos mensais, incluindo as taxas do Conselho Regional de Psicologia, a Taxa de Fiscalização de Estabelecimento Municipal e a renovação do Certificado Digital para a pessoa jurídica. Os valores podem variar de acordo com a localização da sua PJ. Se tiver dúvidas, nossa equipe está pronta para ajudar!"
    },
    {
      question: "A Contabiliza PSI possui assessoria contábil?",
      answer: "Sim, oferecemos uma assessoria contábil completa. Nossa equipe está preparada para dar todo o suporte necessário, não apenas na abertura da sua empresa, mas também em qualquer dúvida que você possa ter sobre a gestão contábil da sua empresa. Estamos aqui para ajudar em cada etapa."
    },
    {
      question: "Qual a diferença de receber como pessoa física e pessoa jurídica?",
      answer: "Optar por receber como pessoa jurídica (PJ) é geralmente mais benéfico do que como pessoa física (PF). Como PF, a taxa de imposto sobre seus rendimentos pode ser de até 27,5%. Por outro lado, como PJ, a taxa de imposto pode variar, mas frequentemente fica na faixa de 6%, dependendo do regime tributário escolhido e da estrutura de sua empresa. Isso não só representa uma economia significativa em impostos, mas também organiza melhor sua gestão financeira, permitindo pagamentos de impostos de forma regular e planejada."
    },
    {
      question: "Por que preciso de certificado digital?",
      answer: "O certificado digital (e-CNPJ) funciona como a assinatura eletrônica da sua empresa, essencial para a segurança e autenticidade das transações online. Ele é obrigatório porque permite que os setores de contabilidade enviem informações fiscais e previdenciárias ao governo de forma digital. Sem esse certificado, não é possível cumprir com essas obrigações legais, e a empresa pode ser multada por não enviar as declarações necessárias."
    },
    {
      question: "Preciso fazer o Imposto de Renda da minha empresa?",
      answer: "Sim, o Imposto de Renda Pessoa Jurídica (IRPJ) é necessário, mas você não precisa se preocupar com a entrega. Nosso setor de contabilidade cuida de tudo para você, anualmente e sem custo adicional. Esta obrigação já está inclusa nos serviços que oferecemos, garantindo que tudo seja feito corretamente e sem estresse."
    },
    {
      question: "Preciso pagar o INSS?",
      answer: "Nós recomendamos que sim, é necessário que todo sócio administrador e cotista de uma empresa pague o INSS, que é parte do pró-labore (salário dos sócios). Embora não exista uma lei que torne essa contribuição obrigatória, ela é crucial para garantir seus direitos previdenciários, como aposentadoria e auxílio em caso de doença.\n\nPagar o INSS também reduz os impostos da sua empresa. Com esse pagamento, a taxa de imposto sobre a empresa pode ser de apenas 6%. Sem ele, essa taxa sobe para 15,5%, aumentando bastante o que sua empresa precisa pagar em impostos."
    },
    {
      question: "Quais as obrigações da Pessoa Jurídica?",
      answer: "Como pessoa jurídica, você tem várias responsabilidades fiscais e contábeis, incluindo a emissão de notas fiscais, o pagamento de tributos, e o envio de informações para órgãos governamentais. É essencial contar com o apoio de um profissional ou empresa de contabilidade para garantir a correta análise dos dados fiscais e a apuração dos impostos. Na Contabiliza PSi, cuidamos de toda a contabilidade necessária para a sua empresa, proporcionando suporte completo para que você possa se concentrar no que realmente importa, seus pacientes!"
    },
    {
      question: "Devo realizar o vínculo da minha empresa com o Conselho Regional de Psicologia?",
      answer: "Sim, é essencial vincular sua empresa ao Conselho Regional de Psicologia (CRP). Sem esse vínculo, o CRP pode realizar auditorias na sua empresa e aplicar cobranças retroativas pelo tempo em que o registro não foi efetuado. Além disso, a vinculação é uma exigência legal tanto para psicólogos quanto para empresas, garantindo que você esteja em conformidade com as leis e regulamentações que regem a prática clínica. Isso evita penalidades e garante a integridade legal de suas atividades."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Perguntas Frequentes
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-800">Tire Todas as</span>
            <span className="block gradient-text">Suas Dúvidas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Compilamos as principais dúvidas dos psicólogos sobre contabilidade e nossos serviços.
            <span className="block mt-2 text-gray-700 font-medium">
              Não encontrou sua pergunta? Fale conosco!
            </span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-gray-200 animate-on-scroll">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg px-6 hover:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left py-6 hover:no-underline">
                      <span className="font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pt-2">
                      <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-primary-50 to-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <MessageCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nossa equipe está pronta para esclarecer qualquer questão específica sobre seu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                variant="outline" 
                className="border-primary-300 text-primary-700 hover:bg-primary-50 px-6 py-3 font-semibold"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Enviar Pergunta por E-mail
                </a>
              </Button>
              <Button 
                asChild
                className="bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/25 px-6 py-3 font-semibold"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Conversar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
