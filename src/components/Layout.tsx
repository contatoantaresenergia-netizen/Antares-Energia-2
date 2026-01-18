// 1. No topo, importe o Chatbot
import { Chatbot } from './Chatbot';

export const Layout: React.FC = () => {
  // ... resto do seu código do Layout ...

  return (
    <div className="min-h-screen bg-antares-dark flex flex-col">
      {/* ... sua Navbar e Main ... */}

      {/* 2. Adicione o Chatbot aqui antes de fechar a div principal */}
      <Chatbot />

      {/* ... seu Footer ... */}
    </div>
  );
};
