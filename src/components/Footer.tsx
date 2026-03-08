
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img
                  alt="Contabiliza.Psi"
                  className="h-10 w-auto"
                  src="/lovable-uploads/41a9f60b-0118-4ea8-a508-a73684f62f4c.png"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Sua contabilidade, nossa especialidade. Cuidamos dos números para você focar no que realmente importa.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary-400 hover:bg-gray-800">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary-400 hover:bg-gray-800">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary-400 hover:bg-gray-800">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary-400 hover:bg-gray-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.03 1.506 5.709L0 24l6.573-1.724c1.595.874 3.406 1.371 5.44 1.371 6.622 0 11.989-5.367 11.989-11.987C23.973 5.368 18.639.001 12.017.001zM12.017 21.989c-1.844 0-3.564-.47-5.083-1.318l-.364-.216-3.797.993.993-3.62-.237-.378c-.924-1.468-1.414-3.166-1.414-4.948 0-5.555 4.522-10.077 10.077-10.077 2.692 0 5.22 1.049 7.113 2.943 1.893 1.893 2.943 4.42 2.943 7.113-.001 5.556-4.523 10.078-10.078 10.078z" />
                    <path d="M9.229 7.471c-.208-.464-.427-.473-.625-.48-.162-.006-.347-.005-.533-.005-.185 0-.486.07-.741.348-.255.279-.973.951-.973 2.32 0 1.369.996 2.693 1.135 2.878.139.185 1.959 2.99 4.747 4.195.663.287 1.181.458 1.585.587.666.212 1.272.182 1.751.11.534-.08 1.642-.671 1.873-1.318.231-.647.231-1.203.162-1.318-.07-.116-.255-.185-.533-.324-.279-.139-1.651-.814-1.907-.907-.255-.093-.441-.139-.626.139-.186.279-.718.907-.881 1.094-.162.185-.324.208-.602.069-.279-.139-1.176-.433-2.24-1.383-.828-.739-1.388-1.651-1.551-1.93-.162-.279-.017-.43.122-.568.125-.124.279-.324.418-.486.139-.162.185-.279.279-.464.093-.185.046-.348-.023-.486-.07-.139-.626-1.508-.858-2.065z" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Serviços</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Abertura de Empresa</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Contabilidade para Psicólogos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Gestão de Folha de Pagamento</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Imposto de Renda (IRPF)</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Planejamento Tributário</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Suporte</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">FAQ (Perguntas Frequentes)</a></li>
                <li><a href="/contato" className="text-gray-400 hover:text-primary-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-3 text-primary-400" />
                  <span>contato@contabilizapsi.com.br</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-3 text-primary-400" />
                  <span>(13) 99749-1518</span>
                </div>
                <div className="flex items-start text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 text-primary-400 mt-1 flex-shrink-0" />
                  <span>Av. Ana Costa 61 CXPST 1220<br />Gonzaga, Santos-SP</span>
                </div>
                <div className="flex items-start text-gray-400">
                  <div className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-sm mt-1">CNPJ: 65.538.417/0001-58</span>
                </div>
              </div>

              <div className="mt-6">
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.703" />
                  </svg>
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-width section-padding">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Contabiliza.Psi. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
