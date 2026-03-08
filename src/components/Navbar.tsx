
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/message/LIZKZRGRXQFNF1";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container-width section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/lovable-uploads/babe957e-4ca5-44ee-b893-965475b63ee5.png" alt="Contabiliza.Psi" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#servicos" className="text-gray-700 hover:text-primary-600 transition-colors">
              Serviços
            </a>
            <a href="/#precos" className="text-gray-700 hover:text-primary-600 transition-colors">
              Planos
            </a>
            <a href="/#trocar-contador" className="text-gray-700 hover:text-primary-600 transition-colors">
              Trocar de Contador
            </a>
            <a href="/#faq" className="text-gray-700 hover:text-primary-600 transition-colors">
              FAQ
            </a>
            <a href="/#depoimentos" className="text-gray-700 hover:text-primary-600 transition-colors">
              Depoimentos
            </a>
            <Link to="/contato" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contato
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-gray-700 hover:text-primary-600">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-gray-200 transition-all duration-500 ease-in-out animate-fade-in">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="/#servicos" onClick={closeMenu} className="text-gray-700 hover:text-primary-600 transition-colors">
                Serviços
              </a>
              <a href="/#precos" onClick={closeMenu} className="text-gray-700 hover:text-primary-600 transition-colors">
                Planos
              </a>
              <a href="/#trocar-contador" onClick={closeMenu} className="text-gray-700 hover:text-primary-600 transition-colors">
                Trocar de Contador
              </a>
              <a href="/#faq" onClick={closeMenu} className="text-gray-700 hover:text-primary-600 transition-colors">
                FAQ
              </a>
              <a href="/#depoimentos" onClick={closeMenu} className="text-gray-700 hover:text-primary-600 transition-colors">
                Depoimentos
              </a>
              <Link to="/contato" onClick={closeMenu} className="text-gray-700 hover:text-primary-600 transition-colors">
                Contato
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button asChild className="bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/25">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Começar Agora
                  </a>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};

export default Navbar;
