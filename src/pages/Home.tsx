import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  Calculator,
  ShieldCheck,
  TrendingUp,
  Activity,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-2.jpeg", 
    "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1920&auto=format&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const [billValue, setBillValue] = useState(850);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const efficiencyIndex = 0.92;
  const monthlyImpact = billValue * efficiencyIndex;
  const annualPerformance = (monthlyImpact * 12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const assetValuation = (monthlyImpact * 12 * 25 * 1.15).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const faqData = [
    {
      question: "Quantos KW tem um sistema solar comercial?",
      answer: "A potência de um sistema comercial é variável, geralmente iniciando em 50 kWp para pequenas empresas e podendo ultrapassar 1 MWp em grandes complexos industriais."
    },
    {
      question: "Qual é o maior painel solar comercial?",
      answer: "Atualmente, os maiores módulos utilizam células de alta eficiência que entregam entre 600W e 700W+ de potência nominal."
    },
    {
      question: "As centrais fotovoltaicas flutuantes são seguras?",
      answer: "Sim, são extremamente seguras. Utilizam flutuantes de polietileno de alta densidade e sistemas de ancoragem redundantes."
    },
    {
      question: "Posso monitorizar o desempenho do meu sistema solar comercial?",
      answer: "Sim. Implementamos monitoramento digital completo que permite acompanhar em tempo real a geração via aplicativo."
    },
    {
      question: "Qual é a dimensão de um sistema solar de 100 kW?",
      answer: "Um sistema de 100 kW ocupa aproximadamente 500m² a 650m², dependendo da tecnologia dos painéis."
    },
    {
      question: "Que tamanho de sistema solar comercial é adequado para a minha empresa?",
      answer: "O dimensionamento ideal é determinado pelo seu histórico de consumo e disponibilidade de área."
    },
    {
      question: "Existe uma garantia para os painéis solares comerciais?",
      answer: "Sim. Trabalhamos com equipamentos que oferecem garantias de até 25 anos de performance linear."
    },
    {
      question: "Existe algum parâmetro de módulo especializado para os sistemas da Antares?",
      answer: "Sim. Nossos sistemas utilizam módulos com alta resistência mecânica e coeficientes de temperatura otimizados."
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION - BOTÕES COM LINKS CONFIGURADOS */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-antares-dark pt-[180px] md:pt-[240px] pb-32">
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img src={img} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-r from-antares-dark via-antares-dark/60 to-transparent"></div>
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-left">
          <article className="max-w-5xl">
            <header className="flex items-center space-x-6 mb-8">
              <span className="h-[2px] w-24 bg-antares-cyan"></span>
              <span className="text-antares-cyan text-[11px] font-black tracking-[0.5em] uppercase">Engenharia de Energia Integrada</span>
            </header>

            <h1 className="hero-title font-heading font-extrabold text-white mb-12">
              Arquitetura de <br/>
              <span className="text-gradient">Alta Performance.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-14 font-light max-w-2xl leading-relaxed">
              Engenharia de precisão que integra diagnóstico estratégico, gestão de ativos e soluções energéticas sob medida.
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
              {/* Ajustado para âncora interna evitando erro 404 */}
              <a 
                href="#contato" 
                className="px-14 py-6 bg-antares-cyan text-antares-dark font-black uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 rounded-sm shadow-[0_20px_60px_rgba(0,209,255,0.4)] text-center text-[12px]"
              >
                Solicitar Diagnóstico
              </a>
              <a 
                href="https://wa.me/5519996162688"
                target="_blank"
                rel="noopener noreferrer"
                className="px-14 py-6 border-2 border-white/20 text-white font-black uppercase tracking-[0.2em] hover:border-white/60 hover:bg-white/5 transition-all duration-500 backdrop-blur-md rounded-sm flex items-center justify-center group text-[12px]"
              >
                Consultoria Executiva <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* 2. STATS - AJUSTADO PARA ELEGÂNCIA CONFORME PRINT */}
      <section className="bg-antares-dark py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: "500+", label: "Usinas Instaladas" },
              { val: "15MW", label: "Potência Total" },
              { val: "98%", label: "Eficiência Média" },
              { val: "R$ 20M", label: "Economia Gerada" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <p className={`text-4xl md:text-5xl font-black mb-4 tracking-tighter ${i%2===0 ? 'text-antares-cyan' : 'text-white'}`}>
                  {stat.val}
                </p>
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* 3. FAQ SECTION - CONFORME PRINT ENVIADO */}
      <section className="py-48 bg-antares-dark border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto px-8">
          <header className="text-center mb-24">
            <h2 className="section-title font-heading font-bold text-white mb-6 text-4xl">Perguntas <span className="text-gradient">Frequentes.</span></h2>
          </header>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="border border-white/10 rounded-2xl overflow-hidden bg-antares-slate/30">
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} 
                  className="w-full px-8 py-8 text-left flex justify-between items-center group"
                >
                  <span className="text-white font-bold md:text-xl tracking-wide group-hover:text-antares-cyan transition-colors">{item.question}</span>
                  {openFaqIndex === index ? <ChevronUp className="text-antares-cyan" /> : <ChevronDown className="text-white/20" />}
                </button>
                {openFaqIndex === index && (
                  <div className="px-8 pb-10 opacity-100 transition-all duration-500">
                    <p className="text-gray-400 leading-relaxed text-lg font-light pt-6 border-t border-white/5">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
