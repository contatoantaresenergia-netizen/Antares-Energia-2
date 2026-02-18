import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sun, Zap, Leaf, Dumbbell, ArrowRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '100%', label: 'Energia Limpa' },
  { value: '0', label: 'Custo de Energia' },
  { value: '24/7', label: 'Operação Sustentável' },
];

const benefits = [
  { icon: <Dumbbell className="w-5 h-5 text-cyan-400" />, text: 'Equipamentos de alta performance com custo energético zero' },
  { icon: <Sun className="w-5 h-5 text-cyan-400" />, text: 'Academia 100% abastecida por painéis fotovoltaicos' },
  { icon: <Leaf className="w-5 h-5 text-cyan-400" />, text: 'Compromisso real com sustentabilidade e futuro' },
  { icon: <Zap className="w-5 h-5 text-cyan-400" />, text: 'Energia solar gerada e consumida no próprio local' },
  { icon: <CheckCircle2 className="w-5 h-5 text-cyan-400" />, text: 'Projeto fotovoltaico desenvolvido pela Antares Energia' },
];

export const AntaresFitness: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          x: -60,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
          },
        });
      }

      // Text block reveal
      if (textRef.current && textRef.current.children.length > 0) {
        gsap.from(textRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          },
        });
      }

      // Stats pop in
      if (statsRef.current && statsRef.current.children.length > 0) {
        gsap.from(statsRef.current.children, {
          scale: 0.8,
          opacity: 0,
          duration: 0.7,
          ease: 'back.out(1.4)',
          stagger: 0.15,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 bg-[#0f172a] overflow-hidden">
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
        {/* Section label */}
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
          <div ref={imageRef} className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-cyan-900/30 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80"
                alt="Antares Fitness – Academia com energia solar"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay gradient */}
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

            {/* Decorative corner accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-cyan-400/40 rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-cyan-400/40 rounded-br-3xl" />
          </div>

          {/* RIGHT – Text */}
          <div ref={textRef} className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Uma academia que treina{' '}
              <span className="text-cyan-300">com a força do sol.</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              A <strong className="text-white">Antares Fitness</strong> vai além do treino. Nossa academia em Camaragibe é abastecida 100% por energia solar fotovoltaica, desenvolvida e instalada pela <strong className="text-white">Antares Energia</strong> — garantindo operação sustentável, eficiente e com custo de energia praticamente zero.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed">
              Enquanto você cuida do seu corpo, a gente cuida do planeta. Uma estrutura moderna, climatizada e iluminada pela mesma engenharia que atende empresas e indústrias em toda a Região Metropolitana do Recife.
            </p>

            {/* Benefits list */}
            <ul className="flex flex-col gap-3 mt-2">
              {benefits.map((b, i) => (
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
                Conheça a Antares Fitness
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-3 gap-4"
        >
          {stats.map((s, i) => (
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
  );
};

export default AntaresFitness;
