import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de ter o react-router-dom instalado
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, CheckCircle2, Shield, MapPin, Phone, Clock, Target, 
  Zap, BatteryCharging, Droplets, Menu, X 
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- COMPONENTE DE MENU (NAVBAR) ---
const CamaragibeNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Início', path: '/camaragibe' },
    { name: 'Serviços', path: '/camaragibe/servicos' },
    { name: 'Projetos', path: '/camaragibe/projetos' },
    { name: 'Contato', path: '/camaragibe/contato' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO - Link para Home Geral */}
        <Link to="/" className="text-white font-black text-2xl tracking-tighter">
          ANTARES<span className="text-cyan-400">.</span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="text-blue-100 hover:text-cyan-400 text-sm font-bold uppercase tracking-widest transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/camaragibe/contato" 
            className="bg-cyan-400 text-blue-900 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-all"
          >
            Orçamento
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 border-b border-white/10 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-bold"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

// --- COMPONENTE DE LETREIRO ---
const Typewriter: React.FC<{ text: string }> = ({ text }) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let i = 0;
    el.textContent = "";
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [text]);
  return <span ref={ref}></span>;
};

// --- PÁGINA HOME CAMARAGIBE ---
const Camaragibe: React.FC = () => {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.refresh();
    const ctx = gsap.context(() => {
      if (heroTitleRef.current) {
        gsap.from(heroTitleRef.current, { y: 30, opacity: 0, duration: 1, ease: 'power3.out' });
      }
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 40, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 90%', toggleActions: 'play none none none' }
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Energia Solar em Camaragibe PE | Engenharia Energética | Antares</title>
        <meta name="description" content="Engenharia fotovoltaica em Camaragibe. Projetos on-grid, híbridos e off-grid." />
      </Helmet>

      {/* ADICIONANDO O MENU AQUI */}
      <CamaragibeNav />

      <main className="bg-white">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276" className="w-full h-full object-cover" alt="Solar" />
            <div className="absolute inset-0 bg-blue-900/90" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-8">
              <MapPin className="w-4 h-4 text-cyan-300" />
              <span className="text-sm uppercase tracking-widest font-bold">Camaragibe PE</span>
            </div>
            <h1 ref={heroTitleRef} className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
              <Typewriter text="Energia Solar" /> <br />
              <span className="text-cyan-300 italic">Alta Performance</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Sistemas inteligentes com engenharia dedicada para quem busca confiabilidade energética em Pernambuco.
            </p>
            <Link to="/camaragibe/contato" className="inline-flex items-center gap-3 bg-cyan-400 text-blue-900 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              Solicitar Diagnóstico <ArrowRight />
            </Link>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="py-32 bg-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-blue-900">
              Por que a <span className="text-cyan-600">Antares</span> em Camaragibe?
            </h2>
            <div className="grid md:grid-cols-3 gap-8" ref={cardsRef}>
              {[
                "Engenharia energética desde 2011",
                "Diagnóstico técnico obrigatório",
                "Projetos validados em operação real",
                "Responsabilidade técnica integral (ART)",
                "Especialistas em sistemas híbridos",
                "Foco em ROI e longevidade"
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-blue-100 flex flex-col gap-4 hover:shadow-2xl transition-all">
                  <CheckCircle2 className="w-8 h-8 text-cyan-500" />
                  <p className="text-blue-900 font-bold text-lg leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUÇÕES */}
        <section className="py-32 bg-blue-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-white">
              Nossas Especialidades
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <Solution icon={<Zap />} title="On-Grid" text="Conexão direta com a rede para máxima economia." />
              <Solution icon={<BatteryCharging />} title="Híbridos" text="Sistemas com baterias para backup e autonomia." />
              <Solution icon={<Shield />} title="Off-Grid" text="Independência total para locais remotos." />
              <Solution icon={<Droplets />} title="Bombeamento" text="Soluções solares para irrigação e pecuária." />
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-blue-900 border-t border-white/10 text-center">
           <Link to="/camaragibe/contato" className="bg-white text-blue-900 px-12 py-6 rounded-full font-black text-xl hover:bg-cyan-400 transition-colors uppercase tracking-widest">
             Falar com um especialista
           </Link>
        </section>
      </main>
    </>
  );
};

const Solution = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string; }) => (
  <div className="bg-white p-10 rounded-3xl hover:translate-y-[-10px] transition-all duration-500">
    <div className="w-14 h-14 bg-cyan-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-600/20">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 text-blue-900">{title}</h3>
    <p className="text-gray-600 text-lg leading-relaxed">{text}</p>
  </div>
);

export default Camaragibe;
