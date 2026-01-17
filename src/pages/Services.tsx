import React from 'react';
import { Home, Building2, Zap, Car, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Home size={40} />,
      title: "Solar Residencial",
      desc: "Transforme sua casa em uma geradora de energia. Projetos que valorizam a arquitetura do imóvel e reduzem a conta em até 95%.",
      image: "https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-3.jpeg" 
    },
    {
      icon: <Store size={40} />,
      title: "Solar Comercial",
      desc: "Ideal para comércios, lojas e centros automotivos. Proteja sua margem de lucro blindando seu negócio contra aumentos na tarifa de energia.",
      image: "https://kjtuhxfrdcyhydkesxzw.supabase.co/storage/v1/object/public/Imagens/solar%20comercial%20800x800.png" 
    },
    {
      icon: <Building2 size={40} />,
      title: "Solar Industrial",
      desc: "Soluções robustas para grandes telhados e indústrias. Reduza custos fixos operacionais com alta potência instalada.",
      image: "https://kjtuhxfrdcyhydkesxzw.supabase.co/storage/v1/object/public/Imagens/Industrial%20.png" 
    },
    {
      icon: <Zap size={40} />,
      title: "Usinas de Solo",
      desc: "Investimento de alto retorno. Projetamos e construímos usinas fotovoltaicas de solo para geração distribuída ou autoconsumo remoto.",
      image: "https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/Usina%20de%20Solo.jpg" 
    },
    {
      icon: <Car size={40} />,
      title: "Mobilidade Elétrica",
      desc: "Prepare-se para o futuro. Instalação de carregadores para veículos elétricos (Wallbox) integrados ao seu sistema solar.",
      image: "https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/antarescarro.jpeg" 
    }
  ];

  return (
    <div className="pt-40 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CABEÇALHO DA PÁGINA */}
        <div className="mb-24 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0D1B2A] mb-6">
            Nossas <span className="text-[#00C2FF]">Soluções</span>
          </h1>
          <div className="w-20 h-1 bg-[#00C2FF] mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Tecnologia de ponta a ponta: do telhado da sua casa às grandes usinas de investimento.
          </p>
        </div>

        {/* LISTA DE SERVIÇOS */}
        <div className="flex flex-col gap-24">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* IMAGEM COM EFEITO */}
              <div className="w-full md:w-1/2 h-[300px] md:h-[450px] overflow-hidden shadow-2xl relative group rounded-sm">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-[#0D1B2A]/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* TEXTO */}
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <div className="text-[#00C2FF] mb-6 p-4 bg-[#0D1B2A] rounded-sm shadow-lg">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {service.desc}
                </p>
                <Link 
                  to="/contato" 
                  className="inline-flex items-center px-10 py-4 bg-[#0D1B2A] text-white font-bold uppercase tracking-widest hover:bg-[#00C2FF] hover:text-[#0D1B2A] transition-all duration-500 rounded-sm group"
                >
                  Saiba Mais
                  <span className="ml-3 transform group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
