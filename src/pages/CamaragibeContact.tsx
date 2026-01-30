import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { gsap } from 'gsap';

export const CamaragibeContact: React.FC = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Animação de entrada suave para os elementos
    gsap.from(".contact-animate", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Orçamento de Energia Solar em Camaragibe | Contato Antares</title>
        <meta name="description" content="Solicite seu diagnóstico energético em Camaragibe. Nossa engenharia prepara uma simulação personalizada para sua residência ou indústria." />
      </Helmet>

      <div className="pt-24 min-h-screen bg-white">
        
        {/* SEÇÃO DE TÍTULO IMPACTANTE */}
        <div className="bg-[#0D1B2A] text-white py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 contact-animate">
            <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Atendimento Camaragibe & RMR</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Vamos <span className="text-cyan-400">Economizar?</span>
            </h1>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Preencha o formulário. Nossa equipe de engenharia preparará um <strong>diagnóstico técnico</strong> gratuito para sua necessidade.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* FORMULÁRIO DE CONTATO */}
            <div className="contact-animate">
              <div className="flex items-center gap-3 mb-10">
                <MessageSquare className="text-cyan-600 w-6 h-6" />
                <h2 className="text-3xl font-bold text-[#0D1B2A]">Solicite seu Diagnóstico</h2>
              </div>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 group-focus-within:text-cyan-600 transition-colors">Nome Completo</label>
                    <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-cyan-500 transition-all duration-300" placeholder="Como podemos te chamar?" />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 group-focus-within:text-cyan-600 transition-colors">WhatsApp / Telefone</label>
                    <input type="tel" className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-cyan-500 transition-all duration-300" placeholder="(81) 90000-0000" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 group-focus-within:text-cyan-600 transition-colors">E-mail</label>
                  <input type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-cyan-500 transition-all duration-300" placeholder="seu@email.com" />
                </div>

                <div className="group">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 group-focus-within:text-cyan-600 transition-colors">Gasto Mensal de Energia (R$)</label>
                  <input type="number" className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-cyan-500 transition-all duration-300" placeholder="Ex: 1200" />
                </div>

                <div className="group">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 group-focus-within:text-cyan-600 transition-colors">Sua necessidade</label>
                  <textarea rows={4} className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:outline-none focus:border-cyan-500 transition-all duration-300 resize-none" placeholder="Ex: Gostaria de um sistema para minha empresa em Camaragibe..."></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[#0D1B2A] text-white font-bold py-5 uppercase tracking-[0.2em] text-xs hover:bg-cyan-500 hover:text-blue-900 transition-all duration-500 flex items-center justify-center group rounded-full shadow-xl">
                  Enviar para Engenharia
                  <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* COLUNA DE INFORMAÇÕES */}
            <div className="lg:pl-10 contact-animate">
              <div className="bg-[#0D1B2A] p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-2 bg-cyan-500"></div>
                
                <h3 className="text-xl font-bold text-white mb-12 uppercase tracking-widest">Canais Diretos</h3>
                
                <div className="space-y-10">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mr-6 text-cyan-400 transition-all group-hover:bg-cyan-500 group-hover:text-blue-900">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-1">Telefones</h4>
                      <p className="text-gray-300 font-bold">Pernambuco: (81) 98110-2688</p>
                      <p className="text-gray-400 text-sm">São Paulo: (19) 99616-2688</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mr-6 text-cyan-400 transition-all group-hover:bg-cyan-500 group-hover:text-blue-900">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-1">E-mail</h4>
                      <p className="text-gray-300 font-bold">contato@antaresenergia.com</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mr-6 text-cyan-400 transition-all group-hover:bg-cyan-500 group-hover:text-blue-900">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-1">Horário</h4>
                      <p className="text-gray-300 font-bold">Seg a Sex: 08h às 18h</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mr-6 text-cyan-400 transition-all group-hover:bg-cyan-500 group-hover:text-blue-900">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-1">Presença Regional</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Atendimento técnico presencial em <br />
                        <strong>Camaragibe</strong> e toda Região <br />
                        Metropolitana do Recife.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/5">
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Antares Engenharia Energética</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
