import React from 'react';
import Link from 'next/link';

export const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-16 bg-antares-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Nossas <span className="text-antares-cyan">Soluções</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12 pb-24">
        {/* SERVIÇO 1 */}
        <div className="flex flex-col md:flex-row gap-8 items-center border border-white/5 p-6 rounded-2xl bg-antares-slate/10">
          <div className="w-full md:w-1/2 h-[400px] overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-3.jpeg" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              alt="Solar Residencial"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-white mb-4">Solar Residencial</h2>
            <p className="text-gray-400 text-lg mb-8">Projetos que valorizam seu imóvel e zeram sua conta de luz.</p>
            <Link href="/contact" className="px-8 py-3 bg-antares-cyan text-antares-dark font-black uppercase hover:bg-white transition-all rounded-sm">
              Saiba Mais
            </Link>
          </div>
        </div>

        {/* SERVIÇO 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center border border-white/5 p-6 rounded-2xl bg-antares-slate/10">
          <div className="w-full md:w-1/2 h-[400px] overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-1.jpeg" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              alt="Solar Industrial"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-white mb-4">Solar Industrial</h2>
            <p className="text-gray-400 text-lg mb-8">Redução drástica de custos operacionais para sua empresa.</p>
            <Link href="/contact" className="px-8 py-3 bg-antares-cyan text-antares-dark font-black uppercase hover:bg-white transition-all rounded-sm">
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
