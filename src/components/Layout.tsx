import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Removemos a importação do Hero daqui para o build passar agora */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
