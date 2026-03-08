
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const slides = [
    {
      type: "testimonial",
      content: {
        stars: 5,
        testimonial: "Quero agradecer e destacar minha gratidão ao Leonardo por sua atuação. Com sua ajuda, consegui organizar minha vida financeira de forma eficiente, tanto no âmbito pessoal como no profissional. Sua comunicação é clara e sua disponibilidade é sem sombra de dúvidas um diferencial. Recomendo!",
        signature: "Camila Gois, Psicóloga"
      }
    },
    {
      type: "testimonial",
      content: {
        stars: 5,
        testimonial: "A empresa transmite muita confiança. Sempre tive a melhor solução com as explicações necessárias e claras pra que eu me sentisse segura em tomar minhas decisões. Sempre recebo o suporte e os prazos são sempre respeitados. Recomendo de olhos fechados.",
        signature: "Roseane Rocha, Psicóloga"
      }
    },
    {
      type: "testimonial",
      content: {
        stars: 5,
        testimonial: "Muito satisfeita e feliz por ter encontrado a Contabiliza Psi, já indiquei para várias colegas e sigo indicando!! Obrigada pela ética e transparência",
        signature: "Thamires Saturnino, Psicóloga"
      }
    },
    {
      type: "testimonial",
      content: {
        stars: 5,
        testimonial: "Procurei a Contabiliza Psi para iniciar o ano regular diante da obrigatoriedade do Receita Saúde, e o Leonardo me orientou em tudo o que foi necessário, sobre as melhores e corretas escolhas. Com muita paciência inclusive, pois não entendo nada de burocracias contábeis. Abri minha empresa, e mensalmente sigo recebendo o apoio do Leonardo, tirando dúvidas, e tirando da minha frente a parte burocrática e assim eu tenho tempo para me dedicar exclusivamente pra Psicologia. Recomendo muito seu trabalho.",
        signature: "Marina Rajabally, Psicóloga"
      }
    },
    {
      type: "testimonial",
      content: {
        stars: 5,
        testimonial: "Sempre tive restrição em contatar um contador por achar que dava conta de todas a parte burocrática, vi o quando é necessário para melhor andamento de toda parte burocrática e administrativa. Adorei desde do contato inicial, a paciência em explicar cada detalhe e cada processo a ser efeito e a excelência de atendimento e rapidez quando é requisitado. Confiança total no trabalho e super indico para outros amigos e profissionais.",
        signature: "Marcia Ruas, Psicóloga"
      }
    },
    {
      type: "testimonial",
      content: {
        stars: 5,
        testimonial: "Boa tarde Leonardo! Muito obrigada pelas explicações, estou mais tranquila que meu problema foi resolvido. Com toda certeza vou indicar mais psis!",
        signature: "Ariadne Moraes, Empresária"
      }
    },
    {
      type: "testimonial",
      content: {
        stars: 5,
        testimonial: "Acho seu trabalho extremamente essencial para profissionais autônomos e PJ, está fazendo grande diferença na minha vida profissional. Agradeço também toda disponibilidade e assistência sempre muito rápida e clara, isso ajuda muito a facilitar todos esses processos burocráticos 🙏🏼",
        signature: "Lecticia Vichi, Psicóloga"
      }
    },
    {
      type: "founder",
      content: {
        title: "Um Contador Especialista ao seu Lado",
        text: "Olá, eu sou Leonardo, fundador da CONTABILIZA PSI. Com 6 anos de experiência e especialização na área da saúde, minha missão é desmistificar a contabilidade para psicólogos. Conte comigo para uma parceria transparente e focada no crescimento do seu consultório.",
        signature: "Leonardo Tenório Pereira, CRC-SP 351015/O-8, Contador e Fundador"
      }
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gray-800">Nosso Compromisso</span>
            <span className="block gradient-text">com Psicólogos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A CONTABILIZA PSI nasceu de um propósito claro: oferecer uma contabilidade que realmente entende a rotina e os desafios dos psicólogos. Minha experiência na área da saúde me permite criar soluções que vão além dos números, trazendo paz de espírito para que você possa focar no que mais importa: seus pacientes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-on-scroll">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <Card className="border-gray-200 bg-white shadow-lg">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col items-center gap-8">
                        {/* Conteúdo */}
                        <div className="flex-1 text-center">
                          {slide.type === "testimonial" ? (
                            <>
                              {/* Estrelas */}
                              <div className="flex justify-center mb-4">
                                {[...Array(slide.content.stars)].map((_, i) => (
                                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              
                              {/* Depoimento */}
                              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                                "{slide.content.testimonial}"
                              </blockquote>
                              
                              {/* Assinatura */}
                              <p className="font-semibold text-gray-800">
                                {slide.content.signature}
                              </p>
                            </>
                          ) : (
                            <>
                              {/* Título */}
                              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {slide.content.title}
                              </h3>
                              
                              {/* Texto */}
                              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                {slide.content.text}
                              </p>
                              
                              {/* Assinatura */}
                              <p className="font-semibold text-primary-700">
                                {slide.content.signature}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navegação do carrossel */}
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <div className="bg-gradient-soft rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pronto para transformar a gestão do seu consultório?
            </h3>
            <p className="text-gray-600 mb-6">
              Junte-se aos psicólogos que já descobriram a tranquilidade de ter uma contabilidade especializada e humanizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105 px-8 py-3">
                Começar Agora
              </Button>
              <Button variant="outline" className="border-primary-300 text-primary-700 hover:bg-primary-50 px-8 py-3">
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
