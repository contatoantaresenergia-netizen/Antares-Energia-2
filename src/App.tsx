import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, Target, CheckCircle2, Shield, Droplets, BatteryCharging, Zap } from 'lucide-react';
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

const Home: React.FC = () => {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const sectionTitleRef = useRef<HTMLHeadingElement>(null); 
  const cardsRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    window.scrollTo(0, 0);
    const initAnimations = () => {
      if (heroTitleRef.current) gsap.from(heroTitleRef.current, { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
      if (sectionTitleRef.current) gsap.from(sectionTitleRef.current, { y: 40, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionTitleRef.current, start: 'top 80%' } });
      if (cardsRef.current) gsap.from(cardsRef.current.children, { y: 40, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.15, scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' } });
    };
    setTimeout(initAnimations, 100);
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <>
      <Helmet>
        <title>Antares Energia | Energia Solar em Nova Odessa - SP</title>
        <link rel="icon" href="/favicon.png" />
      </Helmet>
      <main className="bg-white">
        <section className="relative min-h-[90vh] flex items-center justify-center bg-blue-900/90 pt-32">
          <div className="absolute inset-0">
            <img src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/anatres%20banner%20site.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-blue-900/90" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-8">
              <MapPin className="w-4 h-4 text-cyan-300" />
              <span className="text-sm">Atuação técnica em Nova Odessa</span>
            </div>
            <h1 ref={heroTitleRef} className="text-4xl md:text-6xl font-extrabold mb-6">
              <Typewriter text="Energia Solar em Nova Odessa" /><br />
              <span className="text-cyan-300">com Engenharia e Diagnóstico Técnico</span>
            </h1>
            <a href="https://wa.me/5519996162688" target="_blank" className="inline-flex items-center gap-3 bg-cyan-400 text-blue-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-300 transition">
              <Target className="w-6 h-6" /> Solicitar Diagnóstico <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>
        {/* Outras seções... */}
      </main>
    </>
  );
};

const SolutionCard = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string; }) => (
  <div className="bg-white p-12 rounded-[2.5rem] flex flex-col gap-5 shadow-xl transition hover:-translate-y-1">
    <div className="w-14 h-14 bg-[#008eb4] rounded-2xl flex items-center justify-center mb-2">{icon}</div>
    <h3 className="text-2xl font-bold text-[#1e293b]">{title}</h3>
    <p className="text-slate-500 text-xl font-light">{text}</p>
  </div>
);

export default Home;
