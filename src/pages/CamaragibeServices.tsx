import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Zap, Factory, Home, Battery } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const CamaragibeServices: React.FC = () => {
  useEffect(() => {
    // Garante que o scroll comece do topo e limpa caches do GSAP
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // Animação de revelação das sessões (Lógica estável: move mas não some)
      gsap.utils.toArray('.service-card').forEach((card: any) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Serviços de Engenharia Solar em Camaragibe | Antares</title>
        <meta name="description" content="Soluções em energia solar residencial, industrial e sistemas híbridos em Camaragibe. Engenharia de ponta para redução de custos energéticos." />
      </Helmet>

      <div className="pt-40 pb-24 bg-[#0D1B2A] min-h-screen">
        {/* CABEÇALHO */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block">Nossa Expertise em Camaragibe</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Soluções <span className="text-cyan-400">Energéticas</span>
          </h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-20">
          
          {/* SERVIÇO 1: RESIDENCIAL */}
          <div className="service-card flex flex-col md:flex-row gap-12 items-center bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors duration-500">
            <div className="w-full md:w-1/2 h-[450px] overflow-hidden rounded-xl shadow-2xl group">
              <img 
                src="https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-3.jpeg" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="Energia Solar Residencial Camaragibe"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Solar Residencial Premium</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Projetos personalizados que aliam estética arquitetônica com máxima eficiência. Em Camaragibe, focamos em sistemas que valorizam seu imóvel e garantem independência da rede elétrica tradicional.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-blue-900 font-bold uppercase tracking-tighter hover:bg-white transition-all rounded-full group">
                Consultar Viabilidade
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* SERVIÇO 2: INDUSTRIAL (Reverse) */}
          <div className="service-card flex flex-col md:flex-row-reverse gap-12 items-center bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors duration-500">
            <div className="w-full md:w-1/2 h-[450px] overflow-hidden rounded-xl shadow-2xl group">
              <img 
                src="https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-1.jpeg" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="Energia Solar Industrial Pernambuco"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Engenharia para Indústrias</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Alta potência para reduzir o custo de produção. Trabalhamos com diagnósticos energéticos precisos para indústrias em Camaragibe e região, garantindo ROI acelerado e conformidade técnica integral.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-tighter hover:bg-cyan-500 transition-all rounded-full group">
                Falar com Engenheiro
                <Zap className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* SERVIÇO 3: SISTEMAS HÍBRIDOS */}
          <div className="service-card flex flex-col md:flex-row gap-12 items-center bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors duration-500">
            <div className="w-full md:w-1/2 h-[450px] overflow-hidden rounded-xl shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600&auto=format&fit=crop" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="Sistemas Híbridos Antares"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center mb-6">
                <Battery className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Sistemas Híbridos & Off-Grid</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Segurança energética total com armazenamento em baterias. Ideal para operações que não podem parar em Camaragibe, garantindo energia mesmo em quedas da concessionária.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-bold uppercase tracking-tighter hover:bg-cyan-500 hover:text-blue-900 transition-all rounded-full">
                Saber Mais sobre Backup
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
