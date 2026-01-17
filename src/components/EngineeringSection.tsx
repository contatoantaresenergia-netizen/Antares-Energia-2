import React from 'react';

export const EngineeringSection: React.FC = () => {
  return (
    <section className="animate-section py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800" 
              alt="Engenharia Solar"
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          </div>

          <div>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">
              Como Operamos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Engenharia energética aplicada à energia solar{' '}
              <span className="text-cyan-400">em Nova Odessa</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              A Antares Energia lidera a transformação energética sustentável em
              Nova Odessa e região. Através da integração energética, cuidamos do
              diagnóstico ao gerenciamento inteligente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
