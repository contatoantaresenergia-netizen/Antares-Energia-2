import React, { useState } from 'react';
import { MessageCircle, X, MapPin, ChevronRight } from 'lucide-react';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const unidades = [
    {
      estado: "SÃO PAULO",
      cidade: "Nova Odessa",
      whatsapp: "5519996162688",
      display: "(19) 99616-2688"
    },
    {
      estado: "PERNAMBUCO",
      cidade: "Camaragibe",
      whatsapp: "5581981102688",
      display: "(81) 98110-2688"
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[999] font-sans">
      {/* Botão Flutuante Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-antares-cyan text-antares-dark rounded-full shadow-[0_10px_40px_rgba(0,209,255,0.4)] flex items-center justify-center hover:scale-110 transition-all duration-500 group"
      >
        {isOpen ? <X size={32} /> : <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />}
      </button>

      {/* Janela do Chatbot Estilo 'Casa do Óleo' */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] bg-antares-dark border border-antares-cyan/20 rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-10 duration-500">
          
          {/* Header Amarelo/Ciano conforme o exemplo */}
          <div className="bg-antares-cyan p-8 text-antares-dark">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">⚡</span>
              <h3 className="font-black uppercase tracking-tighter text-xl">Antares Energia</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-bold leading-tight">✓ Engenharia de Precisão</p>
              <p className="text-sm font-bold leading-tight">✓ Gestão de Ativos Solar</p>
              <p className="text-sm font-bold leading-tight">✓ Atendimento Especializado</p>
            </div>
            
            <p className="mt-6 text-[13px] font-black leading-tight bg-black/10 p-3 rounded-lg">
              📍 Escolha a unidade mais próxima para atendimento imediato:
            </p>
          </div>

          {/* Opções de Unidades/Lojas */}
          <div className="p-5 space-y-3 bg-antares-dark/50 backdrop-blur-xl">
            {unidades.map((loc, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${loc.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-antares-cyan/10 hover:border-antares-cyan/40 transition-all group"
              >
                <div className="flex items-center">
                  <MapPin className="text-antares-cyan mr-4 shrink-0" size={24} />
                  <div>
                    <p className="text-white font-bold text-lg leading-none mb-1">{loc.cidade}</p>
                    <p className="text-gray-500 text-xs font-bold tracking-widest">{loc.display}</p>
                  </div>
                </div>
                <ChevronRight className="text-white/20 group-hover:text-antares-cyan group-hover:translate-x-2 transition-all" size={20} />
              </a>
            ))}
          </div>

          {/* Rodapé do Chat */}
          <div className="p-4 text-center border-t border-white/5 bg-black/40">
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
              🔋 Antares - Gerando Independência
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
