import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location]);

  // GTM inicialização
  useEffect(() => {
    if (!window.dataLayer) window.dataLayer = [];
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-5ZL7CVQS';
    document.head.appendChild(gtmScript);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-antares-dark text-white">
      <nav className={`fixed w-full z-50 ${isScrolled ? 'bg-antares-dark/80 backdrop-blur py-4' : 'bg-transparent py-8'} transition-all`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/"><Logo variant="white" className="h-10" /></Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="uppercase text-sm font-bold hover:text-antares-cyan">
                {link.name}
              </Link>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-antares-dark flex flex-col items-center justify-center space-y-8 text-white">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-2xl" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow"><Outlet /></main>

      <footer className="bg-antares-dark text-gray-400 py-12 text-center text-sm">
        © {new Date().getFullYear()} Antares Energia S.A. Todos os direitos reservados.
      </footer>
    </div>
  );
};
