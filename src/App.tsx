import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, Linkedin } from 'lucide-react';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-antares-dark flex flex-col">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-antares-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo provisório (Texto) para não dar erro de arquivo ausente */}
          <Link to="/" className="text-white font-black text-2xl tracking-tighter">
            ANTARES<span className="text-antares-cyan">ENERGIA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className="text-gray-400 hover:text-antares-cyan transition-colors text-xs font-black uppercase tracking-widest">Início</Link>
            <Link to="/servicos" className="text-gray-400 hover:text-antares-cyan transition-colors text-xs font-black uppercase tracking-widest">Serviços</Link>
            <Link to="/projetos" className="text-gray-400 hover:text-antares-cyan transition-colors text-xs font-black uppercase tracking-widest">Projetos</Link>
            <Link to="/contato" className="px-8 py-3 bg-antares-cyan text-antares-dark text-xs font-black uppercase tracking-widest hover:bg-white transition-all rounded-sm">Contato</Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Conteúdo da Página */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer Simples */}
      <footer className="bg-antares-dark border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-xs font-black uppercase tracking-[0.5em]">
            © 2026 Antares Energia - Engenharia de Alta Performance
          </p>
        </div>
      </footer>
    </div>
  );
};
