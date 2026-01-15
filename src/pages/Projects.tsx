import React, { useState } from 'react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'Todos' | 'Residencial' | 'Comercial' | 'Industrial'>('Todos');

  const allProjects = [
    { id: 1, title: 'Residência Lake View', cat: 'Residencial', power: '15 kWp', img: 'https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-3.jpeg' },
    { id: 2, title: 'Centro Logístico SP', cat: 'Industrial', power: '500 kWp', img: 'https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-1.jpeg' },
    { id: 3, title: 'Usina Solar Agreste', cat: 'Industrial', power: '2 MW', img: 'https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/usinaantares.png' },
    { id: 4, title: 'Centro Automotivo', cat: 'Comercial', power: '45 kWp', img: 'https://images.unsplash.com/photo-1487754180477-db33d3d04733?q=80&w=600&auto=format&fit=crop' },
    { id: 5, title: 'Shopping Plaza', cat: 'Comercial', power: '350 kWp', img: 'https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/Shoppingantares.png' },
    { id: 6, title: 'Estação de Carga EV', cat: 'Comercial', power: 'Mobility', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600&auto=format&fit=crop' },
    { id: 7, title: 'Fazenda Solar I', cat: 'Industrial', power: '1.5 MW', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop' },
    { id: 8, title: 'Residência Alphaville', cat: 'Residencial', power: '20 kWp', img: 'https://images.unsplash.com/photo-1592833159057-65a284572242?q=80&w=600&auto=format&fit=crop' },
    { id: 9, title: 'Indústria Têxtil', cat: 'Industrial', power: '150 kWp', img: 'https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/AntaresTextil.png' },
  ];

  const filtered = filter === 'Todos' ? allProjects : allProjects.filter(p => p.cat === filter);

  return (
    <div className="pt-40 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0D1B2A] mb-6">
            Galeria de <span className="text-[#00C2FF]">Projetos</span>
          </h1>
          <div className="w-20 h-1 bg-[#00C2FF] mx-auto mb-8"></div>
          
          {/* FILTROS */}
          <div className="flex flex-wrap justify-center gap-3">
            {['Todos', 'Residencial', 'Comercial', 'Industrial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                  ? 'bg-[#0D1B2A] text-[#00C2FF] shadow-xl border-[#00C2FF] border' 
                  : 'bg-white text-gray-500 hover:text-[#0D1B2A] border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE PROJETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-sm"
            >
              <div className="overflow-hidden aspect-[4/3] relative">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* OVERLAY NO HOVER */}
                <div className="absolute inset-0 bg-[#0D1B2A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-[#00C2FF] text-xs font-bold uppercase tracking-widest mb-2">
                        {project.power === 'Mobility' ? 'Eletromobilidade' : `Potência: ${project.power}`}
                    </p>
                    <span className="bg-white text-[#0D1B2A] font-black text-[10px] uppercase tracking-widest px-6 py-3 rounded-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        Ver Case Completo
                    </span>
                </div>
              </div>

              {/* INFO DO PROJETO */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[#00C2FF] text-[10px] font-bold uppercase tracking-widest">
                        {project.cat}
                    </span>
                    <div className="w-8 h-[1px] bg-gray-200"></div>
                </div>
                <h3 className="text-xl font-bold text-[#0D1B2A] group-hover:text-[#00C2FF] transition-colors">
                    {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
