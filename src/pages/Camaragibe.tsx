import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, CheckCircle2, Zap, BatteryCharging, Shield, Droplets } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Typewriter: React.FC<{ text: string }> = ({ text }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, [text]);

  return <span ref={ref}></span>;
};

export const Camaragibe: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      if (heroRef.current) {
        gsap.from(heroRef.current, { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
      }
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, { y: 40, opacity: 0, duration: 1, stagger: 0.15 });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Antares Energia | Energia Solar em Camaragibe</title>
        <meta name="description" content="Engenharia solar de alta performance em Camaragibe" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Helmet>

      <main className="bg-white">
        <section ref={heroRef} className="min-h-[90vh] flex items-center justify-center bg-[#1e293b] text-white">
          <h1 className="text-5xl font-bold text-center">
            <Typewriter text="Energia Solar em Camaragibe" />
          </h1>
        </section>

        <section className="py-24 bg-[#f8fbff]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8" ref={cardsRef}>
            {[
              "Diagnóstico técnico obrigatório",
              "Projetos validados em operação real",
              "Entrega turn key completa"
            ].map((text, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                <p className="text-slate-700 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
