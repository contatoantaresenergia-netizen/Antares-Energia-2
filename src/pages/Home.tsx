import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  Zap, 
  Settings, 
  Factory, 
  Activity, 
  Droplets, 
  BatteryCharging, 
  Sun 
} from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const heroImages = [
    "https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-2.jpeg", 
    "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1920&auto=format&fit=crop"
  ];

  useEffect(() => {
    // Tenta atualizar o título e ícone manualmente sem usar bibliotecas extras
    document.title = "Antares Energia | Engenharia Solar";
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) link.href = '/favicon.png';

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-item');
    elements.forEach(el => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#030712] text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-[120px]">
        {heroImages.map((img, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-[3000ms] ${index === currentSlide ? 'opacity-30' : 'opacity-0'}`}>
            <img src={img} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/60 to-transparent"></div>
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <header className="flex items-center space-x-6 mb-8">
            <div className="h-[2px] w-20 bg-[#22d3ee]"></div>
            <span className="text-[#22d3ee] text-[10px] font-bold tracking-[0.5em] uppercase">Engenharia de Alta Performance</span>
          </header>

          <h1 className="text-5xl md:text-7xl font-black mb-12 leading-tight">
            Arquitetura de <br/>
            <span className="text-[#22d3ee]">Energia Solar.</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://wa.me/5519996162688" target="_blank" className="px-10 py-4 bg-[#22d3ee] text-[#030712] font-black uppercase tracking-widest hover:bg-white transition-all rounded-full text-center text-xs">
              Solicitar Diagnóstico
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO NOVA ODESSA */}
      <section className="reveal-item opacity-0 translate-y-10 transition-all duration-1000 py-32 border-t border-white/5 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <img src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/anatres%20banner%20site.jpg" className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all" alt="Nova Odessa" />
          <div>
            <h2 className="text-4xl font-bold mb-6">Foco Técnico em <span className="text-[#22d3ee]">Nova Odessa</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">Diagnóstico rigoroso e engenharia dedicada para o setor industrial e comercial da região.</p>
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLES PARA FECHAR O DESIGN */}
      <footer className="py-20 bg-[#020617] border-t border-white/5 text-center text-gray-600 text-[10px] tracking-widest uppercase">
        © {new Date().getFullYear()} Antares Energia - Engenharia Solar
      </footer>
    </div>
  );
};

export default Home;
