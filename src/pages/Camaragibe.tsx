import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, CheckCircle2, Shield, MapPin, Phone, Clock, Target, Zap, BatteryCharging, Droplets
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

const Camaragibe: React.FC = () => {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // HERO - Mantemos a animação simples
    if (heroTitleRef.current) {
      gsap.from(heroTitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    }

    // DIFERENCIAIS - LÓGICA ULTRA ESTÁVEL
    // Em vez de '.from' com opacity 0, vamos apenas fazer um movimento sutil
    // de quem já está visível, para evitar que o card suma.
    if (cardsRef.current) {
      gsap.from(cardsRef.current.children, {
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Forçamos o recálculo de posições
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <Helmet>
        <title>Energia Solar em Camaragibe PE | Antares</title>
      </Helmet>

      <main className="bg-white">
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276" className="w-full h-full object-cover" alt="Solar" />
            <div className="absolute inset-0 bg-blue-900/90" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
            <h1 ref={heroTitleRef} className="text-4xl md:text-6xl font-extrabold mb-6">
              <Typewriter text="Energia Solar em Camaragibe" />
              <br />
              <span className="text-cyan-300">com Engenharia Técnica</span>
            </h1>
          </div>
        </section>

        {/* SEÇÃO 2: DIFERENCIAIS (ESTILO IGUAL ÀS SOLUÇÕES) */}
        <section className="py-24 bg-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-500">
              Por que a Antares é diferente em Camaragibe?
            </h2>

            <div className="grid md:grid-cols-3 gap-8" ref={cardsRef}>
              {[
                "Empresa de engenharia energética desde 2011",
                "Diagnóstico técnico obrigatório antes de qualquer proposta",
                "Projetos validados em operação real",
                "Entrega turn key com responsabilidade técnica integral",
                "Soluções on-grid, híbridas e off-grid",
                "Decisões energéticas orientadas ao longo prazo"
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 flex gap-4 transition-all duration-300 hover:shadow-lg">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: SOLUÇÕES (A QUE JÁ FUNCIONA) */}
        <section className="py-24 bg-blue-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-100">
              Soluções Energéticas em Camaragibe
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <Solution icon={<Zap />} title="Sistemas Fotovoltaicos On-Grid" text="Redução de custos com previsibilidade." />
              <Solution icon={<BatteryCharging />} title="Sistemas Híbridos com Armazenamento" text="Segurança para cargas críticas." />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const Solution = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string; }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100">
    <div className="w-12 h-12 bg-cyan-600 text-white rounded-xl flex items-center justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-blue-900">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default Camaragibe;
