import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Logo } from './Logo';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      <button onClick={() => setIsOpen(!isOpen)} className="bg-antares-cyan p-4 rounded-full">
        {isOpen ? <X /> : <MessageCircle />}
      </button>
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-antares-dark border border-white/10 rounded-xl p-4">
          <Logo variant="white" className="h-6 w-auto" />
          <p className="mt-4">Olá! Como podemos ajudar?</p>
        </div>
      )}
    </div>
  );
};
