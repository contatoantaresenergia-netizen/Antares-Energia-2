import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  Zap, 
  Settings, 
  Factory, 
  Activity, 
  Droplets, 
  BatteryCharging, 
  Sun 
} from 'lucide-react';

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

  // Lógica de Revelação (Scroll Animation) corrigida para não falhar
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.section-reveal');
    elements.forEach(el => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const solutionsData = [
    {
      title: "Sistemas Fotovoltaicos On-Grid",
      desc: ["Redução e previsibilidade de custos energéticos", "Decisão econômica estratégica"],
      img: "https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/On%20grid.jpg",
      icon: <Sun className="w-8 h-8" />
    },
    {
      title: "Sistemas Híbridos com Armazenamento",
      desc: ["Continuidade operacional", "Segurança energética", "Aplicações críticas"],
      img: "https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/antares1.png",
      icon: <BatteryCharging className="w-8 h-8" />
    },
    {
      title: "Sistemas Off-Grid",
      desc: ["Autonomia energética total", "Aplicações remotas ou rurais", "Engenharia dedicada"],
      img: "https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/On%20grid%203:4.jpg",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Bombeamento Solar",
      desc: ["Abastecimento hídrico médio e grande porte", "Integração energia + hidráulica"],
      img: "https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/anatres2.png",
      icon: <Droplets className="w-8 h-8" />
    }
  ];

  const faqData = [
    { question: "Quantos KW tem um sistema solar comercial?", answer: "Geralmente iniciando em 50 kWp podendo ultrapassar 1 MWp." },
    { question: "As centrais flutuantes são seguras?", answer: "Sim, utilizam flutuantes de polietileno de alta densidade." },
    { question: "Posso monitorizar o desempenho?", answer: "Sim, via monitoramento digital em tempo real." }
  ];

  return (
    <div className="w-full bg-[#030712]"> {/* Substituído antares-dark por cor fixa */}
      <Helmet>
        <title>Antares Energia | Arquitetura de Alta Performance</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-[120px] pb-32">
        {heroImages.map((img, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-[3000ms] ${index === currentSlide ? 'opacity-30' : 'opacity-0'}`}>
            <img src={img} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/60 to-transparent"></div>
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-left">
          <header className="flex items-center space-x-6 mb-8">
            <span className="h-[2px] w-24 bg-[#22d3ee]"></span>
            <span className="text-[#22d3ee] text-[11px] font-black tracking-[0.5em] uppercase">Engenharia Integrada</span>
          </header>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-12 leading-tight">
            Arquitetura de <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-white">Alta Performance.</span>
          </h1>

          <div className="flex flex-col sm:row gap-6">
            <a href="https://wa.me/5519996162688" target="_blank" className="px-10 py-4 bg-[#22d3ee] text-[#030712] font-black uppercase tracking-widest hover:bg-white transition-all rounded-full text-center text-xs">
              Solicitar Diagnóstico
            </a>
          </div>
        </div>
      </section>

      {/* 2. ENGENHARIA SECTION */}
      <section className="section-reveal opacity-0 translate-y-10 transition-all duration-1000 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <img src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/anatres%20banner%20site.jpg" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Engenharia" />
            <div>
              <span className="text-[#22d3ee] text-[10px] font-black tracking-widest uppercase mb-4 block">Foco Regional</span>
              <h2 className="text-4xl font-bold text-white mb-6">Energia Solar em <span className="text-[#22d3ee]">Nova Odessa</span></h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">Antares Energia lidera a transformação industrial com diagnóstico rigoroso e engenharia dedicada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUÇÕES GRID */}
      <section className="py-32 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionsData.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#22d3ee]/50 transition-all">
              <div className="text-[#22d3ee] mb-6">{item.icon}</div>
              <h3 className="text-white font-bold text-lg mb-4">{item.title}</h3>
              <ul className="text-gray-500 text-sm space-y-2">
                {item.desc.map((d, i) => <li key={i}>• {d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-8 space-y-4">
          {faqData.map((f, i) => (
            <div key={i} className="bg-white/5 rounded-xl">
              <button onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} className="w-full p-6 text-left text-white font-bold flex justify-between">
                {f.question} {openFaqIndex === i ? <ChevronUp/> : <ChevronDown/>}
              </button>
              {openFaqIndex === i && <div className="p-6 pt-0 text-gray-400 border-t border-white/5">{f.answer}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
