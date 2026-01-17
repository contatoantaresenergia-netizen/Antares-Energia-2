import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* O Outlet é onde as páginas (Home, Sobre, etc) aparecem */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
