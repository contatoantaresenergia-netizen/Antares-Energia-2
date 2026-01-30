import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  MapPin,
  Phone,
  Clock,
  Target,
  Zap,
  BatteryCharging,
  Droplets
} from 'lucide-react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// TYPEWRITER (LETREIRO)
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
  const sectionTitleRef = useRef<HTMLHeadingElement>(null); 
  const cardsRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    // Scroll para o topo ao carregar
    window.scrollTo(0, 0);

    // HERO
    if (heroTitleRef.current) {
      gsap.from(heroTitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroTitleRef.current,
          start: 'top 80%',
        },
      });
    }

    // TITULO DA SESSÃO
    if (sectionTitleRef.current) {
      gsap.from(sectionTitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: 'top 80%',
        },
      });
    }

    // CARDS DE DIFERENCIAIS
    if (cardsRef.current) {
      gsap.from(cardsRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Energia Solar em Camaragibe PE | Engenharia Energética | Antares</title>
        <meta
          name="description"
          content="Energia solar em Camaragibe com engenharia dedicada. Sistemas fotovoltaicos on-grid, híbridos e off-grid com diagnóstico energético e entrega turn key."
        />
        <link rel="canonical" href="https://antaresenergia.com/camaragibe" />
      </Helmet>

      <main className="bg-white">
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
              alt="Energia Solar em Camaragibe"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/90" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-8">
              <MapPin className="w-4 h-4 text-cyan-300" />
              <span className="text-sm">Atuação técnica em Camaragibe e Região Metropolitana</span>
            </div>

            <h1 ref={heroTitleRef} className="text-4xl md:text-6xl font-extrabold mb-6">
              <Typewriter text="Energia Solar em Camaragibe" />
              <br />
              <span className="text-cyan-300">com Engenharia e Diagnóstico Técnico</span>
            </h1>

            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Projetos fotovoltaicos, híbridos e off-grid com engenharia dedicada,
              foco em confiabilidade energética e decisões bem fundamentadas —
              não em venda de kits solares.
            </p>

            <a
              href="https://wa.me/5519996162688?text=Olá! Gostaria de agendar um diagnóstico energético em Camaragibe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-cyan-400 text-blue-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-300 transition"
            >
              <Target className="w-6 h-6" />
              Solicitar Diagnóstico Energético
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 ref={sectionTitleRef} className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-500">
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
                <div
                  key={idx}
                  className="group bg-white p-6 rounded-xl shadow border border-gray-100 flex gap-3 hover:shadow-[0_20px_60px_rgba(56,189,248,0.25)] hover:-translate-y-2 transition-all duration-300 transform relative overflow-hidden"
                >
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-45"></div>
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 relative z-10" />
                  <p className="text-gray-700 relative z-10">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUÇÕES */}
        <section className="py-24 bg-blue-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-100">
              Soluções Energéticas em Camaragibe
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              <Solution
                icon={<Zap />}
                title="Sistemas Fotovoltaicos On-Grid"
                text="Redução de custos com previsibilidade e integração ao sistema elétrico."
              />
              <Solution
                icon={<BatteryCharging />}
                title="Sistemas Híbridos com Armazenamento"
                text="Continuidade operacional e segurança energética para cargas críticas."
              />
              <Solution
                icon={<Shield />}
                title="Sistemas Off-Grid"
                text="Autonomia energética total para operações remotas, rurais ou críticas."
              />
              <Solution
                icon={<Droplets />}
                title="Bombeamento Solar e Irrigação"
                text="Integração energia + hidráulica com engenharia dedicada."
              />
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-blue-900 text-blue-100 text-center border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Energia solar exige decisão técnica, não impulso comercial
            </h2>
            <a
              href="https://wa.me/5519996162688?text=Olá! Quero agendar um diagnóstico energético em Camaragibe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-cyan-400 text-blue-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-300 transition"
            >
              <Phone className="w-6 h-6" />
              Agendar Diagnóstico
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

const Solution = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string; }) => (
  <div className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-[0_20px_60px_rgba(56,189,248,0.25)] hover:-translate-y-2 transition-all duration-300 transform relative overflow-hidden">
    <div className="relative z-10 w-12 h-12 bg-cyan-600 text-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
      {icon}
    </div>
    <h3 className="relative z-10 text-xl font-bold mb-3 text-blue-500 group-hover:text-cyan-600 transition-colors">
      {title}
    </h3>
    <p className="relative z-10 text-gray-600">{text}</p>
  </div>
);

export default Camaragibe;
