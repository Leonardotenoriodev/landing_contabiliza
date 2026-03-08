import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Calculator } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-primary-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-100/30 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="relative z-10 container-width section-padding py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200">
              <Heart className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-gray-700">Especialistas em Psicologia</span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Contabilidade
            <span className="block gradient-text">Digital Especializada</span>
            <span className="block text-gray-800">para Psicólogos</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Simplifique sua vida financeira com nossa solução completa. 
            Cuidamos da sua contabilidade para que você possa focar no que realmente importa: 
            <span className="text-primary-600 font-semibold"> seus pacientes</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold">
              <a href="https://wa.me/message/LIZKZRGRXQFNF1" target="_blank" rel="noopener noreferrer">
                Começar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-300 text-primary-700 hover:bg-primary-50 px-8 py-4 text-lg">
              <a href="https://wa.me/message/LIZKZRGRXQFNF1" target="_blank" rel="noopener noreferrer">
                Agendar Consultoria
              </a>
            </Button>
          </div>
          
          {/* Features icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-primary-200/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                <Calculator className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Gestão Completa</h3>
              <p className="text-sm text-gray-600 text-center">Declarações, impostos e muito mais</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-primary-200/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">100% Seguro</h3>
              <p className="text-sm text-gray-600 text-center">Dados protegidos e criptografados</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-primary-200/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                <Heart className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Foco no Paciente</h3>
              <p className="text-sm text-gray-600 text-center">Mais tempo para o que importa</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;