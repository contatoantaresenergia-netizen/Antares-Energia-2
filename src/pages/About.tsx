import React from 'react';
import { Target, Heart, Zap, Award } from 'lucide-react';
import { Logo } from '../components/Logo';

export const About: React.FC = () => {
  return (
    /* AJUSTE: pt-40 para alinhar com o Header fixo */
    <div className="pt-40 pb-12 min-h-screen bg-white">
      
      {/* HEADER DA PÁGINA (HERO) */}
      <div className="bg-antares-dark py-24 mb-20 relative overflow-hidden">
        {/* Background decorativo sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-antares-cyan/5 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 animate-fade-up">
          <Logo className="h-16 md:h-24 w-auto mx-auto mb-10" />
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Nossa <span className="text-antares-cyan">História</span>
          </h1>
          <div className="w-20 h-1 bg-antares-cyan mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Combinando engenharia de precisão com o compromisso inegociável de transformar o futuro da energia no Brasil.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* CONTEÚDO PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-antares-dark mb-8 leading-tight">
              Liderando a <br /> revolução solar
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Fundada com a missão de tornar a energia limpa acessível e esteticamente agradável, a Antares Energia se destaca no mercado brasileiro pela atenção obsessiva aos detalhes técnicos.
            </p>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Não vendemos apenas equipamentos; entregamos liberdade. Nossa engenharia é inspirada nos mais altos padrões globais, garantindo que sua instalação seja tão eficiente quanto duradoura.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-10">
              <div>
                <span className="block text-5xl font-black text-antares-cyan mb-2">2018</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Ano de Fundação</span>
              </div>
              <div>
                <span className="block text-5xl font-black text-antares-cyan mb-2">SP/PE</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Sedes de Atuação</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Moldura Decorativa */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-antares-cyan/30 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=800&auto=format&fit=crop" 
              alt="Engenharia Antares" 
              className="w-full h-auto shadow-2xl rounded-sm" 
            />
          </div>
        </div>

        {/* VALORES - Grid Estilizado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-32 shadow-2xl">
          <div className="bg-antares-dark p-12 text-white border-b md:border-b-0 md:border-r border-white/5 transition-colors hover:bg-antares-dark/95">
            <Target className="w-12 h-12 text-antares-cyan mb-8" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Missão</h3>
            <p className="text-gray-400 leading-relaxed">Acelerar a transição energética através de soluções premium, confiáveis e que gerem impacto econômico real.</p>
          </div>
          <div className="bg-antares-cyan p-12 text-antares-dark">
            <Heart className="w-12 h-12 text-antares-dark mb-8" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Valores</h3>
            <p className="font-medium leading-relaxed">Transparência total em cada kWh gerado, segurança técnica inquestionável e foco na experiência do cliente.</p>
          </div>
          <div className="bg-antares-dark p-12 text-white transition-colors hover:bg-antares-dark/95">
            <Award className="w-12 h-12 text-antares-cyan mb-8" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Visão</h3>
            <p className="text-gray-400 leading-relaxed">Ser o padrão ouro em instalação fotovoltaica e pós-venda especializado em todo o território nacional.</p>
          </div>
        </div>

        {/* DNA SECTION */}
        <div className="relative mb-24 h-[600px] overflow-hidden group rounded-sm shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1920&auto=format&fit=crop" 
            alt="Excelência Antares" 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-antares-dark via-antares-dark/80 to-transparent flex items-center p-8 md:p-20">
            <div className="max-w-2xl">
              <span className="text-antares-cyan font-black tracking-[0.4em] uppercase mb-6 block text-xs">Nosso DNA Técnico</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">Excelência em cada detalhe.</h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Cada parafuso, cada conexão e cada ângulo de inclinação é calculado para extrair o máximo de performance. Não aceitamos o comum; buscamos a perfeição técnica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
