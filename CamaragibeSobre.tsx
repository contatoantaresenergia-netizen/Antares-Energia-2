import React from 'react';
import { Target, Heart, Zap, Award } from 'lucide-react';

export const CamaragibeSobre: React.FC = () => {
  return (
    <div className="pt-40 pb-12 min-h-screen bg-white">
      
      {/* HEADER DA PÁGINA (HERO) */}
      <div className="bg-black py-24 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          {/* Logo removido para o build passar */}
          <div className="text-blue-400 font-black text-4xl mb-10 tracking-tighter">ANTARES ENERGIA</div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nossa <span className="text-blue-400">História em Camaragibe</span>
          </h1>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Combinando engenharia de precisão com o compromisso inegociável de transformar o futuro da energia em Camaragibe e região metropolitana.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 leading-tight">
              Liderando a <br /> revolução solar em Camaragibe
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Fundada com a missão de tornar a energia limpa acessível e confiável, a Antares Energia se destaca pela atenção obsessiva aos detalhes técnicos.
            </p>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Não vendemos apenas equipamentos; entregamos liberdade e segurança energética. Nossa engenharia segue os mais altos padrões de qualidade.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-10">
              <div>
                <span className="block text-5xl font-black text-blue-400 mb-2">2011</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Ano de Fundação</span>
              </div>
              <div>
                <span className="block text-5xl font-black text-blue-400 mb-2">PE</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Atuação em Camaragibe</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-blue-400/30 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=800&auto=format&fit=crop" 
              alt="Engenharia Antares" 
              className="w-full h-auto shadow-2xl rounded-sm" 
            />
          </div>
        </div>

        {/* VALORES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-32 shadow-2xl">
          <div className="bg-black p-12 text-white border-b md:border-b-0 md:border-r border-white/5">
            <Target className="w-12 h-12 text-blue-400 mb-8" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Missão</h3>
            <p className="text-gray-400 leading-relaxed">Acelerar a transição energética com soluções confiáveis e técnicas.</p>
          </div>
          <div className="bg-blue-400 p-12 text-black">
            <Heart className="w-12 h-12 text-black mb-8" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Valores</h3>
            <p className="font-medium leading-relaxed">Transparência total em cada kWh gerado e segurança técnica.</p>
          </div>
          <div className="bg-black p-12 text-white">
            <Award className="w-12 h-12 text-blue-400 mb-8" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Visão</h3>
            <p className="text-gray-400 leading-relaxed">Ser referência em engenharia energética em Camaragibe e região.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
