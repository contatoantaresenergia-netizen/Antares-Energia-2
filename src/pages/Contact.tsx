import React from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    /* pt-40 para compensar o Header fixo */
    <div className="pt-24 min-h-screen bg-white">
      
      {/* SEÇÃO DE TÍTULO IMPACTANTE */}
      <div className="bg-[#0D1B2A] text-white py-24 relative overflow-hidden">
        {/* Elemento decorativo sutil de fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C2FF]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Vamos <span className="text-[#00C2FF]">Economizar?</span>
          </h1>
          <div className="w-20 h-1 bg-[#00C2FF] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Preencha o formulário abaixo. Nossa equipe de engenharia preparará uma simulação personalizada para sua necessidade.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* FORMULÁRIO DE CONTATO */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-10">Solicite seu orçamento</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Nome</label>
                  <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-[#00C2FF] transition-all duration-300" placeholder="Digite seu nome completo" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Telefone</label>
                  <input type="tel" className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-[#00C2FF] transition-all duration-300" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">E-mail Corporativo ou Pessoal</label>
                <input type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-[#00C2FF] transition-all duration-300" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Consumo médio mensal (R$)</label>
                <input type="number" className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-[#00C2FF] transition-all duration-300" placeholder="Ex: 850,00" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Mensagem</label>
                <textarea rows={4} className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-[#00C2FF] transition-all duration-300 resize-none" placeholder="Conte-nos brevemente sobre sua necessidade..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#0D1B2A] text-white font-black py-5 uppercase tracking-[0.3em] text-xs hover:bg-[#00C2FF] hover:text-[#0D1B2A] transition-all duration-500 flex items-center justify-center group rounded-sm shadow-xl">
                Enviar Solicitação 
                <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* COLUNA DE INFORMAÇÕES DE CONTATO */}
          <div className="lg:pl-10">
            <div className="bg-[#0D1B2A] p-12 rounded-sm shadow-2xl relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#00C2FF]"></div>
              
              <h3 className="text-xl font-bold text-white mb-12 uppercase tracking-widest">Canais de Atendimento</h3>
              
              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center mr-6 text-[#00C2FF] transition-colors group-hover:bg-[#00C2FF] group-hover:text-[#0D1B2A]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#00C2FF] mb-1">Telefones</h4>
                    <p className="text-gray-300 font-bold">SP: 19 99616-2688</p>
                    <p className="text-gray-300 font-bold">PE: 81 98110-2688</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center mr-6 text-[#00C2FF] transition-colors group-hover:bg-[#00C2FF] group-hover:text-[#0D1B2A]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#00C2FF] mb-1">E-mail Oficial</h4>
                    <p className="text-gray-300 font-bold">contato@antaresenergia.com</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center mr-6 text-[#00C2FF] transition-colors group-hover:bg-[#00C2FF] group-hover:text-[#0D1B2A]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#00C2FF] mb-1">Horário de Operação</h4>
                    <p className="text-gray-300 font-bold">Segunda a Sexta: 09h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center mr-6 text-[#00C2FF] transition-colors group-hover:bg-[#00C2FF] group-hover:text-[#0D1B2A]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#00C2FF] mb-1">Sede Administrativa</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Av. Rodolfo Kivitz, 2625 <br />
                      Res. Altos do Klavin <br />
                      Nova Odessa – SP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
