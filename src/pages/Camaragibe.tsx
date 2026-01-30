import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Zap,
  BatteryCharging,
  Shield,
  Droplets,
  Clock,
  Phone
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Camaragibe: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      // Animação de entrada do Hero
      gsap.from(".hero-content", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });

      // Animação dos cards de diferenciais
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
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
        <meta name="description" content="Engenharia fotovoltaica de alta performance em Camaragibe. Reduza custos com sistemas on-grid e híbridos projetados para Pernambuco." />
      </Helmet>

      <main className="bg-white overflow-x-hidden">
        
        {/* HERO SECTION - Personalizada para Camaragibe */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276" 
              className="w-full h-full object-cover" 
              alt="Energia Solar Alta Performance" 
            />
            <div className="absolute inset-0 bg-blue-900/85 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white hero-content">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-6 py-2 rounded-full mb-8 backdrop-blur-md">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-bold tracking-widest uppercase text-cyan-100">Camaragibe PE</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
              Energia Solar<br />
              <span className="text-cyan-400 font-outline-2">Alta Performance</span>
            </h1>

            <p className="text-lg md:text-2xl text-blue-100/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
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

        {/* SEÇÃO DIFERENCIAIS - RESTAURADA */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6 uppercase tracking-tight">
                Por que a Antares é diferente em Camaragibe?
              </h2>
              <div className="w-24 h-2 bg-cyan-500 mx-auto rounded-full"></div>
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
                <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-blue-50 flex flex-col gap-6 hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
                  <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                    <CheckCircle2 className="text-cyan-600 group-hover:text-white transition-colors" size={28} />
                  </div>
                  <p className="text-slate-700 font-bold text-lg leading-snug">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUÇÕES - */}
        <section className="py-32 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-24 leading-tight">
              Soluções Energéticas<br/>em Camaragibe
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <SolutionCard 
                icon={<Zap size={32} />} 
                title="Sistemas Fotovoltaicos On-Grid" 
                text="Redução de custos drástica com previsibilidade e integração à rede da Neoenergia Pernambuco." 
              />
              <SolutionCard 
                icon={<BatteryCharging size={32} />} 
                title="Sistemas Híbridos" 
                text="Segurança total com armazenamento para cargas críticas em residências e empresas." 
              />
              <SolutionCard 
                icon={<Shield size={32} />} 
                title="Autonomia Off-Grid" 
                text="Energia disponível onde a rede não chega, com dimensionamento técnico rigoroso." 
              />
              <SolutionCard 
                icon={<Droplets size={32} />} 
                title="Bombeamento Solar" 
                text="Engenharia aplicada para irrigação e abastecimento de água com custo zero de energia." 
              />
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-cyan-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-8">
              Pronto para transformar sua conta de luz em investimento?
            </h2>
            <Link 
              to="/camaragibe/contato" 
              className="inline-flex items-center gap-3 bg-blue-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors shadow-xl"
            >
              Falar com Engenheiro em Camaragibe <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

const SolutionCard = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string; }) => (
  <div className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10 hover:bg-white hover:text-blue-900 transition-all duration-500 group">
    <div className="w-16 h-16 bg-cyan-500 text-blue-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-4">{title}</h3>
    <p className="text-blue-100 group-hover:text-slate-600 text-lg leading-relaxed font-light">{text}</p>
  </div>
);

// EXPORT DEFAULT OBRIGATÓRIO PARA A VERCEL
export default Camaragibe;
