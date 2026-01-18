import React from 'react';
import { Link } from 'react-router-dom'; // Se estiver usando react-router-dom

export const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-16 bg-white">
      {/* Título da Seção */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4">
          Nossas Soluções
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12 pb-24">
        
        {/* SERVIÇO 1 - Solar Residencial */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 h-[400px] overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-3.jpeg" 
              alt="Solar Residencial" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
              Solar Residencial
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Projetos que valorizam seu imóvel e zeram sua conta de luz.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-[#0D1B2A] text-white font-bold uppercase hover:bg-[#00C2FF] transition-all inline-block"
            >
              Saiba Mais
            </Link>
          </div>
        </div>

        {/* SERVIÇO 2 - Solar Industrial */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="w-full md:w-1/2 h-[400px] overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-1.jpeg" 
              alt="Solar Industrial" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
              Solar Industrial
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Alta potência para grandes indústrias e redução de custos operacionais.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-[#0D1B2A] text-white font-bold uppercase hover:bg-[#00C2FF] transition-all inline-block"
            >
              Saiba Mais
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
