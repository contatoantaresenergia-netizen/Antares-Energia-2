
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Cpu,
  Zap,
  Globe,
  Settings,
  ShieldCheck,
  Factory,
  Activity,
  TrendingUp,
  Droplets,
  BatteryCharging,
  Sun
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

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
    }
  ];

  // Observer para animações de scroll
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
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
      desc: [
        "Redução e previsibilidade de custos energéticos",
        "Decisão econômica estratégica"
      ],
      img: "https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/On%20grid.jpg",
      icon: <Sun className="w-8 h-8" />
    },
    {
      title: "Sistemas Híbridos com Armazenamento",
      desc: [
        "Continuidade operacional",
        "Segurança energética",
        "Aplicações corporativas e residenciais críticas"
      ],
      img: "https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/banner%202:4.jpg",
      icon: <BatteryCharging className="w-8 h-8" />
    },
    {
      title: "Sistemas Off-Grid com Armazenamento",
      desc: [
        "Autonomia energética total",
        "Aplicações remotas, rurais ou críticas",
        "Engenharia dedicada para operação contínua"
      ],
      img: "https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/On%20grid%203:4.jpg",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Bombeamento Solar de Água e Irrigação",
      desc: [
        "Abastecimento hídrico e irrigação de médio e grande porte",
        "Integração energia + hidráulica"
      ],
      img: "https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/Bombamento%20Antares.jpg",
      icon: <Droplets className="w-8 h-8" />
    }
  ];

  return (
    <div className="w-full bg-antares-dark">
      {/* 1. HERO SECTION */}
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
              <span className="text-antares-cyan text-[11px] font-black tracking-[0.5em] uppercase animate-fade-in">Engenharia de Energia Integrada</span>
            </header>

            <h1 className="hero-title font-heading font-extrabold text-white mb-12 animate-fade-in">
              Arquitetura de <br/>
              <span className="text-gradient">Alta Performance.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-14 font-light max-w-2xl leading-relaxed animate-fade-in">
              Engenharia de precisão que integra diagnóstico estratégico, gestão de ativos e soluções energéticas sob medida.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 animate-fade-in">
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

      {/* 2. STATS (AS LETRAS) */}
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

      {/* SEÇÃO 1: Engenharia Energética Nova Odessa */}
      <section id="engenharia" className="section-reveal py-32 bg-antares-dark overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-antares-cyan/10 rounded-2xl transition-all blur-xl group-hover:bg-antares-cyan/20"></div>
              <img 
                src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/anatres%20banner%20site.jpg" 
                alt="Engenharia de sistemas fotovoltaicos empresariais em Nova Odessa" 
                className="relative rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full aspect-video object-cover"
              />
              <div className="absolute top-8 left-8 bg-antares-cyan p-4 rounded-sm shadow-2xl">
                 <Settings className="w-8 h-8 text-antares-dark animate-spin-slow" />
              </div>
            </div>
            
            <div>
              <header className="mb-8">
                <span className="text-antares-cyan text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Foco Regional e Técnico</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Engenharia energética aplicada à energia solar em <span className="text-antares-cyan">Nova Odessa</span>
                </h2>
              </header>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
                A Antares Energia lidera a transformação energética industrial em <strong>Nova Odessa e região</strong>. Através de um diagnóstico energético rigoroso e engenharia dedicada, transformamos radiação solar em confiabilidade operacional para indústrias.
              </p>
              <ul className="grid sm:grid-cols-2 gap-8">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-antares-cyan/10 p-2 rounded-lg"><Activity className="w-5 h-5 text-antares-cyan" /></div>
                  <div>
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Diagnóstico</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">Análise granular de perfil de carga para máxima eficiência técnica.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-antares-cyan/10 p-2 rounded-lg"><Factory className="w-5 h-5 text-antares-cyan" /></div>
                  <div>
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Engenharia</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">Sistemas projetados para alta tensão e demandas industriais críticas.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: Autonomia e Continuidade */}
      <section id="autonomia" className="section-reveal py-32 bg-antares-slate/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Autonomia energética e continuidade operacional com <span className="text-gradient">energia solar.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Reduza a dependência da rede elétrica e garanta previsibilidade total de custos em operações remotas, condomínios e residências de alta demanda energética.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Operações Críticas", 
                desc: "Sistemas redundantes para operações que não admitem interrupções de fornecimento elétrico.", 
                icon: <ShieldCheck className="w-10 h-10" /> 
              },
              { 
                title: "Agronegócio", 
                desc: "Autonomia para propriedades rurais, garantindo irrigação e processamento com custo zero de rede.", 
                icon: <Globe className="w-10 h-10" /> 
              },
              { 
                title: "Condomínios", 
                desc: "Gestão inteligente de energia solar compartilhada para redução drástica de taxas condominiais.", 
                icon: <Zap className="w-10 h-10" /> 
              }
            ].map((box, i) => (
              <div key={i} className="group p-12 bg-antares-dark border border-white/5 rounded-2xl hover:border-antares-cyan/40 transition-all duration-500 hover:shadow-[0_20px_80px_rgba(0,209,255,0.05)]">
                <div className="text-antares-cyan mb-10 group-hover:scale-110 transition-transform duration-500">{box.icon}</div>
                <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-[0.2em]">{box.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: Mercado Livre */}
      <section id="mercado-livre" className="section-reveal py-32 bg-antares-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="bg-gradient-to-br from-antares-slate to-antares-dark p-12 md:p-24 rounded-[40px] border border-white/5 flex flex-col lg:flex-row gap-16 items-center shadow-2xl">
            <div className="lg:w-1/2">
              <header className="mb-10">
                <span className="text-antares-cyan text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Estratégia e Operação</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-[1.1]">
                  Energia solar e engenharia para <span className="text-antares-cyan">Mercado Livre</span> de Energia.
                </h2>
              </header>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                Especialistas em migração estratégica. Integramos sua usina fotovoltaica à operação no Mercado Livre, garantindo a proteção de margens e a mitigação de riscos regulatórios em sistemas críticos.
              </p>
              <div className="grid gap-6 mb-12">
                 <div className="flex items-center gap-4 text-white font-bold text-sm uppercase tracking-widest">
                    <TrendingUp className="text-antares-cyan w-6 h-6" />
                    Migração e Gestão de Contratos
                 </div>
                 <div className="flex items-center gap-4 text-white font-bold text-sm uppercase tracking-widest">
                    <Zap className="text-antares-cyan w-6 h-6" />
                    Sistemas de Irrigação e Água
                 </div>
              </div>
              <button className="group flex items-center gap-4 bg-white text-antares-dark px-10 py-5 font-black uppercase tracking-[0.1em] rounded-sm hover:bg-antares-cyan transition-all text-[12px]">
                Estudo de Viabilidade Técnico <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-antares-cyan/10 blur-[100px] animate-pulse"></div>
               <img 
                 src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/Foto%20banner%20Antares%203.jpg" 
                 alt="Energia solar em sistemas críticos para mercado livre em Nova Odessa" 
                 className="relative w-full h-[450px] object-cover rounded-3xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000"
               />
            </div>
          </div>
        </div>
      </section>

      {/* NOvA SEÇÃO: Soluções Especializadas (Sistemas Fotovoltaicos) */}
      <section id="solucoes-tecnicas" className="section-reveal py-32 bg-antares-dark">
        <div className="max-w-7xl mx-auto px-8">
          <header className="mb-20 text-center">
            <span className="text-antares-cyan text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Nossa Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sistemas e <span className="text-gradient">Tecnologias Fotovoltaicas</span>
            </h2>
            <div className="w-24 h-1 bg-antares-cyan mx-auto rounded-full"></div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionsData.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col h-full bg-antares-slate/20 border border-white/5 rounded-2xl overflow-hidden hover:border-antares-cyan/50 transition-all duration-500"
              >
                {/* Imagem Banner */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-antares-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-antares-cyan p-2 rounded shadow-lg">
                    <div className="text-antares-dark">{item.icon}</div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-white font-bold text-lg mb-6 leading-tight min-h-[3rem] group-hover:text-antares-cyan transition-colors">
                    {item.title}
                  </h3>
                  <ul className="space-y-4 flex-grow">
                    {item.desc.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-antares-cyan flex-shrink-0"></span>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                          {bullet}
                        </p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <a href="#contato" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-antares-cyan group/link">
                      Saiba mais <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-reveal py-48 bg-antares-dark border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-8">
          <header className="text-center mb-24">
            <h2 className="font-heading font-bold text-white mb-6 text-4xl uppercase tracking-tighter">Perguntas <span className="text-gradient">Frequentes.</span></h2>
          </header>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="border border-white/5 rounded-2xl overflow-hidden bg-antares-slate/30 hover:border-white/10 transition-colors">
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} 
                  className="w-full px-10 py-8 text-left flex justify-between items-center group"
                >
                  <span className="text-white font-bold md:text-lg tracking-wide group-hover:text-antares-cyan transition-colors">{item.question}</span>
                  {openFaqIndex === index ? <ChevronUp className="text-antares-cyan w-6 h-6" /> : <ChevronDown className="text-white/20 w-6 h-6" />}
                </button>
                {openFaqIndex === index && (
                  <div className="px-10 pb-10 animate-fade-in">
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
