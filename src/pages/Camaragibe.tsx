import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Shield, MapPin, Target, Zap, BatteryCharging, Droplets } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Typewriter: React.FC<{ text: string }> = ({ text }) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    let i = 0;
    ref.current.textContent = "";
    const interval = setInterval(() => {
      ref.current!.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [text]);
  return <span ref={ref}></span>;
};

export const Camaragibe: React.FC = () => {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const initAnimations = () => {
      if (heroTitleRef.current) gsap.from(heroTitleRef.current, { y: 40, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: heroTitleRef.current, start: 'top 80%' } });
      if (sectionTitleRef.current) gsap.from(sectionTitleRef.current, { y: 40, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionTitleRef.current, start: 'top 80%' } });
      if (cardsRef.current && cardsRef.current.children.length > 0) gsap.from(cardsRef.current.children, { y: 40, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.15, scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' } });
    };
    const timer = setTimeout(initAnimations, 100);
    return () => { clearTimeout(timer); ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <>
      <Helmet>
        <title>Antares Energia | Energia Solar em Camaragibe - PE</title>
        <link rel="icon" href="/favicon.png" />
      </Helmet>

      <main className="bg-white min-h-screen">
        <section className="pt-40 pb-12">
          <h1 ref={heroTitleRef}>Energia Solar em Camaragibe</h1>
        </section>

        <section className="py-24">
          <h2 ref={sectionTitleRef}>Por que escolher a Antares?</h2>
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
            <div>Solução 1</div>
            <div>Solução 2</div>
            <div>Solução 3</div>
          </div>
        </section>
      </main>
    </>
  );
};
