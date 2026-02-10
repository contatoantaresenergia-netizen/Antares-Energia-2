import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

// Comentei estes dois para garantir que o site carregue mesmo se eles estiverem com erro
// import { Logo } from './Logo';
// import { Chatbot } from './Chatbot';

export const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isCamaragibe = location.pathname.startsWith('/camaragibe');

  const navLinks = isCamaragibe ? [
    { name: 'Início', path: '/camaragibe' },
    { name: 'Sobre', path: '/camaragibe/sobre' },
    { name: 'Serviços', path: '/camaragibe/servicos' },
    { name: 'Projetos', path: '/camaragibe/projetos' },
    { name: 'Contato', path: '/camaragibe/contato' },
  ] : [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Contato', path: '/contato' },
  ];

  const primaryPath = isCamaragibe ? '/camaragibe' : '/';

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-[100] transition-all ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to={primaryPath} className="text-2xl font-bold tracking-tighter">
            ANTARES ENERGIA
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-[10px] uppercase tracking-widest hover:text-cyan-400 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* CONTEÚDO DAS PÁGINAS */}
      <main className="flex-grow">
        <Outlet /> 
      </main>

      {/* Footer Simples */}
      <footer className="bg-slate-950 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Antares Energia. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
