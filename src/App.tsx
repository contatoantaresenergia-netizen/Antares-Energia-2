import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <div className="app-container">
      <header>
        <nav>
          {/* Use Link em vez de <a href> para evitar recarregar a página */}
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </header>

      <main>
        {/* Aqui é onde as páginas (Home, About, etc) serão injetadas */}
        <Outlet />
      </main>

      <footer>
        <p>© 2024 Meu Projeto - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};
