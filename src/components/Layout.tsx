import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Mail, Phone, MapPin, ChevronRight, MessageCircle, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { Chatbot } from './Chatbot';

export const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-antares-dark text-antares-white selection:bg-antares-cyan selection:text-antares-dark">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ${
          isScrolled ? 'bg-antares-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="relative z-[110]">
            <Logo variant="white" className="h-10 md:h-11 w-auto" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 hover:text-antares-cyan ${
                  location.pathname === link.path ? 'text-antares-cyan' : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contato"
              className="px-8 py-3 bg-white text-antares-dark font-black text-[10px] uppercase tracking-[0.2em] hover:bg-antares-cyan transition-all duration-500 rounded-sm"
            >
              Simular Agora
            </Link>
          </div>

          <button
            className="md:hidden text-white relative z-[110]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-antares-dark z-[105] flex flex-col items-center justify-center space-y-8 transition-all duration-700 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-4xl font-heading font-black text-white hover:text-antares-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Chatbot />

      <footer className="bg-antares-dark text-white pt-40 pb-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
            
            <div className="md:col-span-5">
              <Logo variant="white" className="h-12 w-auto mb-10" />
              <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm mb-12">
                A Antares Energia redefine os padrões de engenharia solar no Brasil, entregando independência através de tecnologia Tier-1.
              </p>
              {/* Ajustado: Somente Instagram e Facebook */}
              <div className="flex space-x-6">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-antares-cyan hover:text-antares-dark transition-all duration-500"><Instagram size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-antares-cyan hover:text-antares-dark transition-all duration-500"><Facebook size={20} /></a>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-antares-cyan font-bold uppercase tracking-[0.3em] text-[10px] mb-10">Explorar</h4>
              <ul className="space-y-6">
                <li><Link to="/sobre" className="text-gray-400 hover:text-white transition-colors flex items-center group">Sobre a Companhia</Link></li>
                <li><Link to="/servicos" className="text-gray-400 hover:text-white transition-colors flex items-center group">Soluções Corporativas</Link></li>
                <li><Link to="/projetos" className="text-gray-400 hover:text-white transition-colors flex items-center group">Estudos de Caso</Link></li>
                <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors flex items-center group">Central de Vendas</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-antares-cyan font-bold uppercase tracking-[0.3em] text-[10px] mb-10">Unidades Ativas</h4>
              <div className="space-y-8">
                <div>
                   <p className="text-white font-bold mb-2 uppercase tracking-widest text-xs">SÃO PAULO</p>
                   <p className="text-gray-500 text-sm font-light">Av. Rodolfo Kivitz, 2625 - Nova Odessa<br/>(19) 99616-2688</p>
                </div>
                <div>
                   <p className="text-white font-bold mb-2 uppercase tracking-widest text-xs">PERNAMBUCO</p>
                   <p className="text-gray-500 text-sm font-light">Atendimento Consultivo Regional<br/>(81) 98110-2688</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-700 font-bold uppercase tracking-[0.3em] border-t border-white/5 pt-12">
            <p>&copy; {new Date().getFullYear()} Antares Energia S.A. Todos os direitos reservados.</p>
            <div className="flex space-x-12 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Quality Assurance</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
