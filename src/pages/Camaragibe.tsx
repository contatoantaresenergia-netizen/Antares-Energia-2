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
    // Força o GSAP a entender o tamanho real da página
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // HERO ANIMATION
      if (heroTitleRef.current) {
        gsap.from(heroTitleRef.current, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      }

      // DIFERENCIAIS - LÓGICA ESTÁVEL (Não usa opacity 0 inicial)
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Energia Solar em Camaragibe PE | Engenharia Energética | Antares</title>
        <meta
          name="description"
          content="Energia solar em Camaragibe com engenharia dedicada. Sistemas fotovoltaicos on-grid, híbridos e off-grid com diagnóstico energético e entrega turn key."
        />
        <meta
          name="keywords"
          content="energia solar camaragibe, engenharia energética camaragibe, sistema fotovoltaico camaragibe, energia solar com diagnóstico, sistema híbrido camaragibe, off-grid pernambuco"
        />
        <link rel="canonical" href="https://antaresenergia.com/camaragibe" />
        <meta name="geo.region" content="BR-PE" />
        <meta name="geo.placename" content="Camaragibe" />
        <meta name="geo.position" content="-8.0239;-34.9772" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Antares Soluções Energéticas Renováveis",
            "url": "https://antaresenergia.com/camaragibe",
            "areaServed": { "@type": "City", "name": "Camaragibe" },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Camaragibe",
              "addressRegion": "PE",
              "addressCountry": "BR"
            },
            "telephone": "+5519996162688"
          })}
        </script>
      </Helmet>

      <main className="bg-white">
        {/* HERO - RESTAURADO COM BANNER */}
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
              <span className="text-cyan-300">com Engenharia Técnica</span>
            </h1>

            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Projetos fotovoltaicos, híbridos e off-grid com engenharia dedicada,
              foco em confiabilidade energética e decisões bem fundamentadas.
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

        {/* DIFERENCIAIS - AGORA COM OS CARDS CORRETOS */}
        <section className="py-24 bg-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 ref={sectionTitleRef} className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-500">
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
                  className="group bg-white p-8 rounded-2xl shadow-sm border border-blue-100 flex gap-4 hover:shadow-xl transition-all duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUÇÕES - RESTAURADA COM LÓGICA DE FUNDO AZUL */}
        <section className="py-24 bg-blue-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-100">
              Soluções Energéticas em Camaragibe
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              <Solution
                icon={<Zap />}
                title="Sistemas Fotovoltaicos On-Grid"
                text="Redução de custos com previsibilidade."
              />
              <Solution
                icon={<BatteryCharging />}
                title="Sistemas Híbridos com Armazenamento"
                text="Segurança para cargas críticas."
              />
              <Solution
                icon={<Shield />}
                title="Sistemas Off-Grid"
                text="Autonomia energética total."
              />
              <Solution
                icon={<Droplets />}
                title="Bombeamento Solar e Irrigação"
                text="Integração energia + hidráulica."
              />
            </div>
          </div>
        </section>

        {/* CTA FINAL - COM CONTATOS */}
        <section className="py-24 bg-blue-900 text-blue-100 text-center border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Energia solar exige decisão técnica
            </h2>
            <a
              href="https://wa.me/5519996162688"
              className="inline-flex items-center gap-3 bg-cyan-400 text-blue-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-300 transition"
            >
              <Phone className="w-6 h-6" />
              Agendar Diagnóstico
            </a>
            <div className="flex justify-center gap-8 mt-10 text-sm opacity-70">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Seg–Sex 8h–18h</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> (19) 99616-2688</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const Solution = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string; }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform">
    <div className="w-12 h-12 bg-cyan-600 text-white rounded-xl flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-blue-900">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default Camaragibe;
