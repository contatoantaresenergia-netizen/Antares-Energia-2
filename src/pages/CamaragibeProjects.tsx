import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CamaragibeProjects: React.FC = () => {
  const [filter, setFilter] = useState<'Todos' | 'Residencial' | 'Comercial' | 'Industrial'>('Todos');
  const gridRef = useRef<HTMLDivElement>(null);

  const allProjects = [
    { id: 1, title: 'Residência Lake View', cat: 'Residencial', power: '15 kWp', img: 'https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-3.jpeg' },
    { id: 2, title: 'Centro Logístico PE', cat: 'Industrial', power: '500 kWp', img: 'https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-1.jpeg' },
    { id: 3, title: 'Usina Solar Antares', cat: 'Industrial', power: '2 MW', img: 'https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/usinaantares.png' },
    { id: 4, title: 'Centro Automotivo Camaragibe', cat: 'Comercial', power: '45 kWp', img: 'https://images.unsplash.com/photo-1487754180477-db33d3d04733?q=80&w=600&auto=format&fit=crop' },
    { id: 5, title: 'Shopping Plaza Regional', cat: 'Comercial', power: '350 kWp', img: 'https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/Shoppingantares.png' },
    { id: 6, title: 'Estação de Carga EV', cat: 'Comercial', power: 'Mobility', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600&auto=format&fit=crop' },
    { id: 7, title: 'Fazenda Solar PE', cat: 'Industrial', power: '1.5 MW', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop' },
    { id: 8, title: 'Residência Alto Padrão', cat: 'Residencial', power: '20 kWp', img: 'https://images.unsplash.com/photo-1592833159057-65a284572242?q=80&w=600&auto=format&fit=crop' },
    { id: 9, title: 'Indústria Têxtil Camaragibe', cat: 'Industrial', power: '150 kWp', img: 'https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/AntaresTextil.png' },
  ];

  const filtered = filter === 'Todos' ? allProjects : allProjects.filter(p => p.cat === filter);

  useEffect(() => {
    // Animação dos cards ao carregar ou filtrar
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', overwrite: 'auto' }
      );
    }
  }, [filter]);

  return (
    <>
      <Helmet>
        <title>Projetos de Energia Solar em Camaragibe | Cases Antares</title>
        <meta name="description" content="Conheça nosso portfólio de engenharia solar em Camaragibe. Projetos industriais, comerciais e residenciais com tecnologia Antares." />
        <meta name="keywords" content="energia solar camaragibe projetos, cases energia solar pernambuco, instalador solar camaragibe" />
      </Helmet>

      <div className="pt-40 pb-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* CABEÇALHO */}
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Portfólio Regional</span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D1B2A] mb-6">
              Projetos em <span className="text-cyan-500">Camaragibe</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Engenharia aplicada em soluções on-grid, híbridas e industriais. Conheça nossos cases de sucesso em Pernambuco.
            </p>
            
            {/* FILTROS */}
            <div className="flex flex-wrap justify-center gap-3">
              {['Todos', 'Residencial', 'Comercial', 'Industrial'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    filter === cat 
                    ? 'bg-blue-900 text-white shadow-lg scale-105' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* GRID DE PROJETOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={gridRef}>
            {filtered.map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl"
              >
                <div className="overflow-hidden aspect-[4/3] relative">
                  <img 
                    src={project.img} 
                    alt={`${project.title} - Energia Solar Camaragibe`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                      <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">
                          {project.power === 'Mobility' ? 'Eletromobilidade' : `Potência: ${project.power}`}
                      </p>
                      <span className="bg-white text-blue-900 font-black text-[10px] uppercase tracking-widest px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          Detalhes do Projeto
                      </span>
                  </div>
                </div>

                {/* INFO */}
                <div className="p-8">
                  <div className="flex justify-between items-center mb-2">
                      <span className="text-cyan-600 text-[10px] font-bold uppercase tracking-widest">
                          {project.cat}
                      </span>
                      <div className="w-8 h-[1px] bg-gray-100"></div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1B2A] group-hover:text-cyan-600 transition-colors">
                      {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CamaragibeProjects;
