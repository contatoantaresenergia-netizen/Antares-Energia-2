import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  Calculator,
  ShieldCheck,
  TrendingUp,
  Activity
} from 'lucide-react';

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920&auto=format&fit=crop", 
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
  const efficiencyIndex = 0.92;
  const monthlyImpact = billValue * efficiencyIndex;
  const annualPerformance = (monthlyImpact * 12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const assetValuation = (monthlyImpact * 12 * 25 * 1.15).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-antares-dark pt-[180px] md:pt-[240px] pb-32">
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img src={img} className="w-full h-full object-cover transition-transform duration-[10s] transform scale-110" style={{ transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)' }} alt="" />
            <div className="absolute inset-0 bg-gradient-to-r from-antares-dark via-antares-dark/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-antares-dark/40 via-transparent to-antares-dark"></div>
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-left">
          <article className="max-w-5xl">
            <header className="flex items-center space-x-6 mb-8 animate-in fade-in slide-in-from-left duration-1000">
              <span className="h-[2px] w-24 bg-antares-cyan"></span>
              <span className="text-antares-cyan text-[11px] font-black tracking-[0.5em] uppercase">Engenharia de Energia Integrada</span>
            </header>

            <h1 className="hero-title font-heading font-extrabold text-white mb-12 animate-in slide-in-from-bottom-12 duration-700">
              Arquitetura de <br/>
              <span className="text-gradient">Alta Performance.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-14 font-light max-w-2xl leading-relaxed animate-in fade-in duration-1000 delay-300">
              Engenharia de precisão que integra diagnóstico estratégico, gestão de ativos e soluções energéticas sob medida.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 animate-in slide-in-from-bottom-8 duration-700 delay-500">
              <a href="#simulator" className="px-14 py-6 bg-antares-cyan text-antares-dark font-black uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 rounded-sm shadow-[0_20px_60px_rgba(0,209,255,0.4)] text-center text-[12px]">Solicitar Diagnóstico</a>
              <button className="px-14 py-6 border-2 border-white/20 text-white font-black uppercase tracking-[0.2em] hover:border-white/60 hover:bg-white/5 transition-all duration-500 backdrop-blur-md rounded-sm flex items-center justify-center group text-[12px]">Consultoria Executiva <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-3 transition-transform" /></button>
            </div>
          </article>
        </div>
      </section>

      {/* 2. STATS */}
      <section className="bg-antares-dark py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-20 text-center">
            {[
              { val: "500+", label: "Usinas Instaladas" },
              { val: "15MW", label: "Potência Total" },
              { val: "98%", label: "Eficiência Média" },
              { val: "R$ 20M", label: "Economia Gerada" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <p className={`stat-number font-black mb-5 group-hover:scale-110 transition-transform duration-500 ${i%2===0 ? 'text-antares-cyan' : 'text-white'}`}>{stat.val}</p>
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.5em]">{stat.label}</p>
              </div>
            ))}
        </div>
      </section>

      {/* 3. SIMULADOR */}
      <section id="simulator" className="py-48 bg-antares-dark border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-antares-cyan/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 text-left">
              <header>
                <span className="text-antares-cyan font-black tracking-[0.6em] uppercase text-[11px] mb-8 block">Projeção Estratégica</span>
                <h2 className="section-title font-heading font-bold text-white mb-10 tracking-tight">Decisões técnicas baseadas em <span className="text-gradient">dados reais.</span></h2>
              </header>
              <p className="text-gray-400 text-xl mb-14 font-light leading-relaxed">Quantifique o impacto financeiro da migração para uma matriz de alta performance através do nosso simulador de ROI.</p>
              <ul className="space-y-8">
                {[ShieldCheck, Activity, TrendingUp].map((Icon, i) => (
                  <li key={i} className="flex items-center text-gray-300 text-sm font-light">
                    <Icon className="text-antares-cyan mr-6 w-6 h-6 shrink-0" /> 
                    <span>Cálculos baseados em <strong className="text-white">precisão absoluta</strong> e normas técnicas.</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-antares-slate/60 p-6 md:p-10 lg:p-12 rounded-3xl border border-white/10 backdrop-blur-3xl text-left shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
                <h3 className="text-white font-black text-lg md:text-xl mb-10 flex items-center uppercase tracking-widest">
                  <Calculator className="mr-4 text-antares-cyan" size={28} /> 
                  Painel de Diagnóstico
                </h3>
                <div className="mb-12">
                  <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6">
                    <span>Faturamento Mensal</span>
                    <span className="text-white bg-antares-cyan/10 border border-antares-cyan/30 px-5 py-2 rounded-full text-[10px]">
                      R$ {billValue.toLocaleString()}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="300" 
                    max="25000" 
                    step="100" 
                    value={billValue} 
                    onChange={(e) => setBillValue(Number(e.target.value))} 
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-antares-cyan" 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                   <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/5 hover:border-antares-cyan/40 transition-all group min-h-[110px] flex flex-col justify-between">
                      <div className="text-antares-cyan text-[8px] font-black uppercase tracking-[0.25em] mb-2">
                        Economia Anual
                      </div>
                      <p className="calculator-value font-black text-white group-hover:scale-105 transition-transform">
                        {annualPerformance}
                      </p>
                   </div>
                   <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/5 hover:border-green-400/40 transition-all group min-h-[110px] flex flex-col justify-between">
                      <div className="text-green-400 text-[8px] font-black uppercase tracking-[0.25em] mb-2">
                        Valor Ativo
                      </div>
                      <p className="calculator-value font-black text-white group-hover:scale-105 transition-transform">
                        {assetValuation}
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
