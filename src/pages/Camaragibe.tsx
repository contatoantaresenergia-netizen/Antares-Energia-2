import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  MapPin,
  Target,
  Zap,
  BatteryCharging,
  Droplets,
  Sun,
  Leaf,
  Dumbbell,
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

const fitnessStats = [
  { value: '100%', label: 'Energia Limpa' },
  { value: '0', label: 'Custo de Energia' },
  { value: '24/7', label: 'Operação Sustentável' },
];

const fitnessBenefits = [
  { icon: <Dumbbell className="w-5 h-5 text-cyan-400" />, text: 'Reduza o custo de energia da sua academia com projeto fotovoltaico sob medida' },
  { icon: <Sun className="w-5 h-5 text-cyan-400" />, text: 'Operação contínua de equipamentos, ar-condicionado e iluminação com energia limpa' },
  { icon: <Leaf className="w-5 h-5 text-cyan-400" />, text: 'Valorize sua marca com o selo de academia sustentável' },
  { icon: <Zap className="w-5 h-5 text-cyan-400" />, text: 'Diagnóstico técnico gratuito antes de qualquer investimento' },
  { icon: <CheckCircle2 className="w-5 h-5 text-cyan-400" />, text: 'Instalação turn key com responsabilidade técnica integral da Antares' },
];

export const Camaragibe: React.FC = () => {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Fitness section refs
  const fitnessImageRef = useRef<HTMLDivElement>(null);
  const fitnessTextRef = useRef<HTMLDivElement>(null);
  const fitnessStatsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const initAnimations = () => {
      if (heroTitleRef.current) {
        gsap.from(heroTitleRef.current, {
          y: 40, opacity: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: heroTitleRef.current, start: 'top 80%' },
        });
      }

      if (sectionTitleRef.current) {
        gsap.from(sectionTitleRef.current, {
          y: 40, opacity: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionTitleRef.current, start: 'top 80%' },
        });
      }

      if (cardsRef.current && cardsRef.current.children.length > 0) {
        gsap.from(cardsRef.current.children, {
          y: 40, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
        });
      }

      // Fitness animations
      if (fitnessImageRef.current) {
        gsap.from(fitnessImageRef.current, {
          x: -60, opacity: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: fitnessImageRef.current, start: 'top 80%' },
        });
      }

      if (fitnessTextRef.current && fitnessTextRef.current.children.length > 0) {
        gsap.from(fitnessTextRef.current.children, {
          y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: fitnessTextRef.current, start: 'top 80%' },
        });
      }

      if (fitnessStatsRef.current && fitnessStatsRef.current.children.length > 0) {
        gsap.from(fitnessStatsRef.current.children, {
          scale: 0.8, opacity: 0, duration: 0.7, ease: 'back.out(1.4)', stagger: 0.15,
          scrollTrigger: { trigger: fitnessStatsRef.current, start: 'top 85%' },
        });
      }
    };

    const timer = setTimeout(initAnimations, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Antares Energia | Engenharia Solar em Camaragibe - PE</title>
        <meta name="description" content="Engenharia fotovoltaica de alta performance em Camaragibe. Projetos customizados para Pernambuco. Reduza custos com segurança." />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="canonical" href="https://www.antaresenergia.com/camaragibe" />

        <meta property="og:title" content="Antares Energia | Energia Solar em Camaragibe - PE" />
        <meta property="og:description" content="Engenharia de alta performance e diagnóstico técnico em Pernambuco. Reduza custos com segurança." />
        <meta property="og:url" content="https://www.antaresenergia.com/camaragibe" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1509391366360-2e959784a276" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Antares Energia - Energia Solar Camaragibe",
            "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276",
            "@id": "https://www.antaresenergia.com/camaragibe",
            "url": "https://www.antaresenergia.com/camaragibe",
            "telephone": "+5519996162688",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Camaragibe",
              "addressRegion": "PE",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -8.015,
              "longitude": -34.982
            },
            "openingHours": "Mo-Fr 08:00-18:00",
            "description": "Engenharia solar de alta performance em Camaragibe e Região Metropolitana do Recife.",
            "sameAs": [
              "https://www.facebook.com/antaresenergia",
              "https://www.instagram.com/antaresenergia",
              "https://www.linkedin.com/company/antaresenergia"
            ]
          })}
        </script>
      </Helmet>

      <main className="bg-white">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0f172a] pt-32 overflow-hidden">
          {/* Background photo */}
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276" alt="Energia Solar em Camaragibe" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0f172a]/85" />
          </div>
          {/* Background grid texture */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/3 w-[600px] h-[500px] rounded-full bg-cyan-500/15 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[350px] rounded-full bg-blue-600/15 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 px-5 py-2 rounded-full mb-8">
              <MapPin className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-medium text-cyan-300">Atuação técnica em Camaragibe e Região Metropolitana</span>
            </div>
            <h1 ref={heroTitleRef} className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              <Typewriter text="Energia Solar em Camaragibe" /><br />
              <span className="text-cyan-300">com Engenharia e Diagnóstico Técnico</span>
            </h1>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Projetos fotovoltaicos de alta performance para residências, empresas e indústrias em Camaragibe e toda a Região Metropolitana do Recife.
            </p>
            <a href="https://wa.me/5519996162688" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-cyan-400 text-blue-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-400/20 group">
              <Target className="w-6 h-6" /> Solicitar Diagnóstico <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* DIFERENCIAIS SECTION */}
        <section className="py-24 bg-[#f8fbff]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 ref={sectionTitleRef} className="text-3xl md:text-5xl font-bold text-center mb-20 text-[#3b82f6]">
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
                <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start gap-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center border border-cyan-500/30">
                    <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  </div>
                  <p className="text-slate-700 text-lg leading-snug font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUÇÕES SECTION */}
        <section className="py-24 bg-[#1e293b]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-white">
              Soluções Energéticas em Camaragibe
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <SolutionCard
                icon={<Zap className="text-white w-6 h-6" />}
                title="Sistemas Fotovoltaicos On-Grid"
                text="Redução de custos com previsibilidade."
              />
              <SolutionCard
                icon={<BatteryCharging className="text-white w-6 h-6" />}
                title="Sistemas Híbridos com Armazenamento"
                text="Segurança para cargas críticas."
              />
              <SolutionCard
                icon={<Shield className="text-white w-6 h-6" />}
                title="Sistemas Off-Grid"
                text="Autonomia total para locais remotos ou operações críticas."
              />
              <SolutionCard
                icon={<Droplets className="text-white w-6 h-6" />}
                title="Bombeamento Solar"
                text="Eficiência hidráulica com custo zero de energia."
              />
            </div>
          </div>
        </section>

        {/* ─── ANTARES FITNESS SECTION ─── */}
        <section className="relative py-28 bg-[#0f172a] overflow-hidden">
          {/* Background grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6">
            {/* Badge */}
            <div className="flex justify-center mb-14">
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 px-5 py-2 rounded-full">
                <Sun className="w-4 h-4 text-cyan-300" />
                <span className="text-cyan-300 text-sm font-semibold tracking-widest uppercase">
                  Antares Fitness
                </span>
              </div>
            </div>

            {/* Two-column layout */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT – Image */}
              <div ref={fitnessImageRef} className="relative">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-cyan-900/30 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80"
                    alt="Antares Fitness – Academia com energia solar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent" />
                  {/* Floating solar badge */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl">
                    <div className="w-10 h-10 bg-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sun className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-none mb-0.5">Powered by Solar</p>
                      <p className="text-cyan-300 text-xs">Antares Energia</p>
                    </div>
                  </div>
                </div>
                {/* Decorative corners */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-cyan-400/40 rounded-tl-3xl" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-cyan-400/40 rounded-br-3xl" />
              </div>

              {/* RIGHT – Text */}
              <div ref={fitnessTextRef} className="flex flex-col gap-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  Sua academia mais forte{' '}
                  <span className="text-cyan-300">com a força do sol.</span>
                </h2>

                <p className="text-slate-400 text-lg leading-relaxed">
                  Academias consomem energia o dia inteiro — ar-condicionado, esteiras, iluminação, vestiários. Esse custo pode ser drasticamente reduzido com um sistema fotovoltaico projetado sob medida pela <strong className="text-white">Antares Energia</strong>.
                </p>

                <p className="text-slate-400 text-lg leading-relaxed">
                  Atendemos academias em Camaragibe e toda a Região Metropolitana do Recife com diagnóstico técnico, projeto executivo e instalação completa. Sua academia opera com energia limpa, economia real e um diferencial competitivo que seus alunos vão perceber.
                </p>

                {/* Benefits list */}
                <ul className="flex flex-col gap-3 mt-2">
                  {fitnessBenefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-base">
                      <span className="flex-shrink-0">{b.icon}</span>
                      {b.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-4">
                  <a
                    href="https://wa.me/5519996162688"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-cyan-400 text-blue-900 px-8 py-4 rounded-full font-bold text-base hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-400/20 group"
                  >
                    <Dumbbell className="w-5 h-5" />
                    Quero energia solar na minha academia
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div ref={fitnessStatsRef} className="mt-20 grid grid-cols-3 gap-4">
              {fitnessStats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl py-8 px-4 text-center backdrop-blur-sm hover:bg-white/8 transition-colors"
                >
                  <span className="text-4xl font-extrabold text-cyan-300 tracking-tight">{s.value}</span>
                  <span className="text-slate-400 text-sm mt-2 font-medium uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ─── FIM ANTARES FITNESS ─── */}

      </main>
    </>
  );
};

const SolutionCard = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string; }) => (
  <div className="bg-white p-12 rounded-[2.5rem] flex flex-col gap-5 shadow-xl transition-transform hover:-translate-y-1">
    <div className="w-14 h-14 bg-[#008eb4] rounded-2xl flex items-center justify-center mb-2">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-[#1e293b] tracking-tight">{title}</h3>
    <p className="text-slate-500 text-xl leading-relaxed font-light">{text}</p>
  </div>
);
