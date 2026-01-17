import React from 'react';
import { Outlet } from 'react-router-dom';
// Importe o seu componente de navegação aqui (ajuste o nome se for Header ou Navbar)
import { Hero } from './Hero'; 

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* O Header deve ficar aqui para aparecer em todas as páginas */}
      <header>
         {/* Se você tiver um componente <Navbar />, coloque-o aqui */}
      </header>
      
      <main>
        <Outlet /> {/* As páginas aparecem aqui */}
      </main>

      {/* Se quiser um Footer fixo, coloque-o aqui embaixo */}
    </div>
  );
};
