import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Cpu,
  BatteryCharging,
  Droplets,
  Sun,
  Activity,
  Factory,
  Settings
} from 'lucide-react';

interface Solution {
  title: string;
  desc: string[];
  img: string;
  icon: React.ReactNode;
}

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const heroImages = [
    "https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-2.jpeg", 
    "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1920&auto=format&fit=crop"
  ];

  const faqData = [
    { question: "Quantos KW tem um sistema solar comercial?", answer: "A potência de um sistema comercial é variável, geralmente iniciando em 50 kWp para pequenas empresas e podendo ultrapassar 1 MWp em grandes complexos industriais." },
    { question: "Qual é o maior painel solar comercial?", answer: "Atualmente, os maiores módulos utilizam células de alta eficiência que entregam entre 600W e 700W+ de potência nominal." },
    { question: "As centrais fotovoltaicas flutuantes são seguras?", answer: "Sim, são extremamente seguras. Utilizam flutuantes de polietileno de alta densidade e sistemas de ancoragem redundantes." },
    { question: "Posso monitorizar o desempenho do meu sistema solar comercial?", answer: "Sim. Implementamos monitoramento digital completo que permite acompanhar em tempo real a geração via aplicativo." }
  ];

  const solutionsData: Solution[] = [
    { title: "Sistemas Fotovoltaicos On-Grid", desc: ["Redução e previsibilidade de custos energéticos", "Decisão econômica estratégica"], img: "https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/On%20grid.jpg", icon: <Sun className="w-8 h-8" /> },
    { title: "Sistemas Híbridos com Armazenamento", desc: ["Continuidade operacional", "Segurança energética", "Aplicações corporativas e residenciais críticas"], img: "https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/banner%202:4.jpg", icon: <BatteryCharging className="w-8 h-8" /> },
    { title: "Sistemas Off-Grid com Armazenamento", desc: ["Autonomia energética total", "Aplicações remotas, rurais ou críticas", "Engenharia dedicada para operação contínua"], img: "https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/On%20grid%203:4.jpg", icon: <Cpu className="w-8 h-8" /> },
    { title: "Bombeamento Solar de Água e Irrigação", desc: ["Abastecimento hídrico e irrigação de médio e grande porte", "Integração energia + hidráulica"], img: "https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/Bombamento%20Antares.jpg", icon: <Droplets className="w-8 h-8" /> }
  ];

  // HERO SLIDER
  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % heroImages.length), 7000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // INTERSECTION OBSERVER
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-reveal').forEach(el => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  // COMPONENTE PARA CADA SOLUÇÃO
  const SolutionCard: React.FC<{item: Solution}> = ({ item }) => (
    <div className="group relative flex flex-col h-full bg-antares-slate/20 border border-white/5 rounded-2xl overflow-hidden hover:border-antares-cyan/50 transition-all duration-500">
      <div className="relative h-48 overflow-hidden">
        <img src={item.img} alt={item.title} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
        <div className="absolute bottom-4 left-4 z-20 bg-antares-cyan p-2 rounded shadow-lg text-antares-dark">{item.icon}</div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-white font-bold text-lg mb-6 leading-tight min-h-[3rem] group-hover:text-antares-cyan transition-colors">{item.title}</h3>
        <ul className="space-y-4 flex-grow">
          {item.desc.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-antares-cyan flex-shrink-0"></span>
              <p className="text-gray-400 text-[13px] leading-relaxed font-light">{bullet}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-6 border-t border-white/5">
          <a href="#contato" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-antares-cyan group/link bg-antares-cyan/5 px-5 py-2.5 rounded-full hover:bg-antares-cyan hover:text-antares-dark transition-all">
            Saiba mais 
            <div className="ml-2 bg-antares-cyan/20 p-0.5 rounded-full group-hover/link:bg-white transition-colors">
              <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-antares-dark">
      <Helmet>
        <title>Antares Energia | Engenharia Solar em Nova Odessa</title>
        <meta name="description" content="Líder em engenharia fotovoltaica em Nova Odessa e região. Projetos de alta performance, gestão de ativos e economia real para indústrias e empresas." />
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-antares-dark pt-[180px] md:pt-[240px] pb-32">
        {heroImages.map((img, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${index === currentSlide ? 'opacity-30' : 'opacity-0'}`}>
            <img src={img} alt={`Banner ${index + 1}`} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-antares-dark via-antares-dark/60 to-transparent"></div>
          </div>
        ))}
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-left">
          <article className="max-w-5xl">
            <header className="flex items-center space-x-6 mb-8">
              <span className="h-[2px] w-24 bg-antares-cyan"></span>
              <span className="text-antares-cyan text-[11px] font-black tracking-[0.5em] uppercase animate-fade-in">Engenharia de Energia Integrada</span>
            </header>
            <h1 className="hero-title font-heading font-extrabold text-white mb-12 animate-fade-in">
              Arquitetura de <br/><span className="text-gradient">Alta Performance.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-14 font-light max-w-2xl leading-relaxed animate-fade-in">
              Engenharia de precisão que integra diagnóstico estratégico, gestão de ativos e soluções energéticas sob medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in">
              <a href="#contato" className="px-8 py-3.5 bg-antares-cyan text-antares-dark font-black uppercase tracking-[0.15em] hover:bg-white transition-all duration-500 rounded-full shadow-lg text-center text-[11px] flex items-center justify-center">Solicitar Diagnóstico</a>
              <a href="https://wa.me/5519996162688" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 border border-white/20 text-white font-black uppercase tracking-[0.15em] hover:border-antares-cyan hover:text-antares-cyan transition-all duration-500 backdrop-blur-md rounded-full flex items-center justify-center group text-[11px]">
                Consultoria Executiva 
                <div className="ml-3 bg-antares-cyan p-1 rounded-full group-hover:bg-white transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-antares-dark" />
                </div>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-antares-dark py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { val: "500+", label: "Usinas Instaladas" },
            { val: "15MW", label: "Potência Total" },
            { val: "98%", label: "Eficiência Média" },
            { val: "R$ 20M", label: "Economia Gerada" }
          ].map((stat, i) => (
            <div key={i} className="group">
              <p className={`text-4xl md:text-5xl font-black mb-4 tracking-tighter ${i%2===0 ? 'text-antares-cyan' : 'text-white'}`}>{stat.val}</p>
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section id="solucoes-tecnicas" className="section-reveal py-32 bg-antares-dark">
        <div className="max-w-7xl mx-auto px-8">
          <header className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sistemas e <span className="text-gradient">Tecnologias</span></h2>
            <div className="w-24 h-1 bg-antares-cyan mx-auto rounded-full"></div>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionsData.map((item, idx) => <SolutionCard key={idx} item={item} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-reveal py-32 bg-antares-dark border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8 space-y-6">
          {faqData.map((item, idx) => (
            <div key={idx} className="border border-white/5 rounded-2xl overflow-hidden bg-antares-slate/30">
              <button 
                aria-expanded={openFaqIndex === idx}
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)} 
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
              >
                <span className="text-white font-bold tracking-wide group-hover:text-antares-cyan transition-colors">{item.question}</span>
                {openFaqIndex === idx ? <ChevronUp className="text-antares-cyan w-5 h-5" /> : <ChevronDown className="text-white/20 w-5 h-5" />}
              </button>
              {openFaqIndex === idx && <div className="px-8 pb-8 animate-fade-in text-gray-400 font-light border-t border-white/5 pt-4">{item.answer}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
