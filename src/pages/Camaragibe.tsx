import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Clock,
  Zap,
  BatteryCharging,
  Shield,
  Droplets
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Camaragibe: React.FC = () => {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // Animação do Título Hero
      gsap.from(".hero-content", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });

      // Animação dos Cards de Diferenciais (Grid de 6 itens)
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Energia Solar em Camaragibe PE | Antares Energia</title>
        <meta name="description" content="Sistemas inteligentes com engenharia dedicada para quem busca confiabilidade energética em Pernambuco." />
      </Helmet>

      <main className="bg-white overflow-x-hidden">
        
        {/* HERO SECTION - Baseado na imagem 15.56.55 */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276" 
              className="w-full h-full object-cover" 
              alt="Energia Solar Alta Performance" 
            />
            <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white hero-content">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-6 py-2 rounded-full mb-8 backdrop-blur-md">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-bold tracking-widest uppercase">Camaragibe PE</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
              Energia Solar<br />
              <span className="text-cyan-400">Alta Performance</span>
            </h1>

            <p className="text-lg md:text-2xl text-blue-100/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Sistemas inteligentes com engenharia dedicada para quem busca 
              confiabilidade energética em Pernambuco.
            </p>

            <Link 
              to="/camaragibe/contato" 
              className="inline-flex items-center gap-3 bg-cyan-400 text-blue-900 px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-cyan-500/20"
            >
              Solicitar Diagnóstico <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>

        {/* DIFERENCIAIS - Grid de 6 cards (Imagem 15.21.04) */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">
                Por que a Antares é diferente em Camaragibe?
              </h2>
              <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8" ref={cardsRef}>
              {[
                "Empresa de engenharia energética desde 2011",
                "Diagnóstico técnico obrigatório antes de qualquer proposta",
                "Projetos validados em operação real",
                "Entrega turn key com responsabilidade técnica integral",
                "Soluções on-grid, híbridas e off-grid",
                "Decisões energéticas orientadas ao longo prazo"
              ].map((text, i) => (
                <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-blue-100 flex flex-col gap-6 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                    <CheckCircle2 className="text-cyan-600 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-slate-700 font-bold text-lg leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUÇÕES - (Imagem 15.15.54) */}
        <section className="py-32 bg-blue-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-24 text-white">
              Soluções Energéticas em Camaragibe
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <SolutionCard 
                icon={<Zap />} 
                title="Sistemas Fotovoltaicos On-Grid" 
                text="Redução de custos com previsibilidade e integração ao sistema elétrico." 
              />
              <SolutionCard 
                icon={<BatteryCharging />} 
                title="Sistemas Híbridos com Armazenamento" 
                text="Continuidade operacional e segurança energética para cargas críticas." 
              />
              <SolutionCard 
                icon={<Shield />} 
                title="Sistemas Off-Grid" 
                text="Autonomia energética total para operações remotas, rurais ou críticas." 
              />
              <SolutionCard 
                icon={<Droplets />} 
                title="Bombeamento Solar e Irrigação" 
                text="Integração energia + hidráulica com engenharia dedicada." 
              />
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 bg-blue-950 text-center border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center gap-12 text-blue-200/60 mb-12">
              <div className="flex items-center gap-3 justify-center"><Clock size={20}/> Atendimento Seg-Sex 8h-18h</div>
              <div className="flex items-center gap-3 justify-center"><Phone size={20}/> PE: (81) 98110-2688</div>
            </div>
            <Link to="/camaragibe/contato" className="text-cyan-400 font-bold hover:text-white transition-colors underline underline-offset-8 decoration-2">
              Agendar visita técnica em Camaragibe
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

const SolutionCard = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string; }) => (
  <div className="bg-white p-12 rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-500 group">
    <div className="w-16 h-16 bg-cyan-500 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-4 text-blue-900">{title}</h3>
    <p className="text-slate-600 text-xl leading-relaxed">{text}</p>
  </div>
);

export default Camaragibe;
