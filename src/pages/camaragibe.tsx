import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  Shield,
  Leaf,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Building2,
  BarChart3,
  ChevronRight,
  Star,
  Target
} from 'lucide-react';

// IMPORTANTE: Esta versão NÃO usa react-helmet-async
// As meta tags estão no index.html ou devem ser configuradas no servidor

export const Camaragibe = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Atualiza as meta tags dinamicamente (alternativa ao Helmet)
  useEffect(() => {
    document.title = 'Energia Solar em Camaragibe PE | Painéis Fotovoltaicos | Antares Energia';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Energia solar em Camaragibe PE. Instalação de painéis fotovoltaicos residenciais, comerciais e industriais. Economia de até 95% na conta de luz. Orçamento grátis ☎ (19) 99616-2688');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'energia solar camaragibe, painel solar camaragibe, energia fotovoltaica camaragibe, placas solares camaragibe pe, energia solar pernambuco';
      document.head.appendChild(meta);
    }

    // Adiciona Schema.org
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Antares Energia - Camaragibe",
      "image": "https://antaresenergia.com/logo.png",
      "@id": "https://antaresenergia.com/camaragibe",
      "url": "https://antaresenergia.com/camaragibe",
      "telephone": "+5519996162688",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Camaragibe",
        "addressLocality": "Camaragibe",
        "addressRegion": "PE",
        "postalCode": "54750-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -8.0239,
        "longitude": -34.9772
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      }
    });
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove o script ao desmontar
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  
  const testimonials = [
    {
      name: "João Silva",
      company: "Indústria Metalúrgica JM",
      text: "A Antares transformou nossa operação. Redução de 68% na conta de energia em apenas 6 meses.",
      role: "Diretor de Operações"
    },
    {
      name: "Maria Santos",
      company: "Supermercados Pernambuco",
      text: "Investimento que se pagou em 3 anos. Sistema solar funcionando perfeitamente há 2 anos.",
      role: "Gerente Administrativa"
    },
    {
      name: "Carlos Mendes",
      company: "Clínica Médica Vida",
      text: "Energia limpa e economia real. Nossa clínica agora é referência em sustentabilidade na região.",
      role: "Proprietário"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const benefits = [
    { icon: TrendingDown, title: "Economia até 95%", desc: "Reduza drasticamente seus custos com energia elétrica" },
    { icon: Shield, title: "Garantia Estendida", desc: "Até 25 anos de garantia em equipamentos premium" },
    { icon: Leaf, title: "Sustentabilidade", desc: "Energia 100% limpa e renovável para seu negócio" },
    { icon: Award, title: "Certificação Internacional", desc: "Equipamentos certificados e homologados" }
  ];

  const services = [
    {
      title: "Energia Solar Residencial",
      desc: "Projetos personalizados para residências em Camaragibe e região metropolitana",
      features: ["Dimensionamento preciso", "Instalação profissional", "Monitoramento remoto"]
    },
    {
      title: "Energia Solar Empresarial",
      desc: "Soluções corporativas para indústrias, comércios e prestadores de serviços",
      features: ["Análise de viabilidade", "Gestão de energia", "ROI garantido"]
    },
    {
      title: "Energia Solar Industrial",
      desc: "Grandes usinas fotovoltaicas para alta demanda energética",
      features: ["Engenharia especializada", "Sistemas de alta potência", "Suporte técnico 24/7"]
    },
    {
      title: "Manutenção Preventiva",
      desc: "Mantenha seu sistema operando com máxima eficiência",
      features: ["Inspeção periódica", "Limpeza técnica", "Relatórios de performance"]
    }
  ];

  const processSteps = [
    { num: "01", title: "Diagnóstico Gratuito", desc: "Análise detalhada do seu consumo energético" },
    { num: "02", title: "Projeto Personalizado", desc: "Engenharia sob medida para sua necessidade" },
    { num: "03", title: "Instalação Profissional", desc: "Equipe técnica certificada e experiente" },
    { num: "04", title: "Ativação e Monitoramento", desc: "Sistema conectado e acompanhamento em tempo real" }
  ];

  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" 
            alt="Energia Solar Camaragibe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-cyan-600/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-white/20">
            <MapPin className="w-4 h-4 text-cyan-300" />
            <span className="text-white/90 text-sm font-medium">Atendemos Camaragibe e Região Metropolitana</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Energia Solar em<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              Camaragibe PE
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforme a luz do sol em economia real. Instalação profissional de sistemas fotovoltaicos com até <strong className="text-cyan-300">95% de redução</strong> na conta de energia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/5519996162688?text=Olá! Gostaria de um orçamento para energia solar em Camaragibe"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cyan-400 hover:bg-cyan-300 text-blue-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Solicitar Orçamento Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#calculadora"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 backdrop-blur-sm hover:bg-white/10"
            >
              <BarChart3 className="w-5 h-5" />
              Calcular Economia
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-300" />
              <span className="text-sm">+ 500 Clientes Satisfeitos</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-300" />
              <span className="text-sm">Garantia de 25 Anos</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-cyan-300" />
              <span className="text-sm">4.9★ Avaliação</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Por que escolher energia solar em Camaragibe?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Invista no futuro com a tecnologia que mais cresce no Brasil
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Nossas Soluções</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Energia Solar para Cada Necessidade
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute top-6 right-6 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-bold text-lg">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                
                <Building2 className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://wa.me/5519996162688"
                  className="inline-flex items-center gap-2 text-cyan-600 font-semibold group-hover:gap-4 transition-all"
                >
                  Saber mais
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Como Funciona Nosso Processo
            </h2>
            <p className="text-xl text-gray-600">
              Do primeiro contato até a ativação do seu sistema solar
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500 hidden md:block"></div>

            <div className="space-y-12">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-8">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.num}
                  </div>

                  <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-cyan-200 transition-all">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-blue-100">
              Empresas e residências que já economizam com a Antares
            </p>
          </div>

          <div className="relative bg-white/10 backdrop-blur-lg p-10 md:p-16 rounded-3xl border border-white/20">
            <div className="mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400 inline-block" />
              ))}
            </div>

            <p className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
              "{testimonials[activeTestimonial].text}"
            </p>

            <div>
              <p className="text-xl font-bold">{testimonials[activeTestimonial].name}</p>
              <p className="text-blue-200">{testimonials[activeTestimonial].role}</p>
              <p className="text-sm text-blue-300 mt-1">{testimonials[activeTestimonial].company}</p>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === activeTestimonial ? 'bg-white w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Ver depoimento ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white p-12 md:p-16 rounded-3xl shadow-2xl border border-gray-100">
            <Target className="w-16 h-16 text-cyan-600 mx-auto mb-6" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pronto para Economizar com Energia Solar?
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Receba um orçamento personalizado sem compromisso e descubra quanto você pode economizar em Camaragibe
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a 
                href="https://wa.me/5519996162688?text=Olá! Quero um orçamento para energia solar em Camaragibe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                Falar com Especialista
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-600" />
                <span>Atendimento: Seg-Sex 8h-18h</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-600" />
                <span>contato@antaresenergia.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-600" />
                <span>(19) 99616-2688</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energia Solar em Camaragibe e Região Metropolitana do Recife
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Antares Energia é especialista em <strong>instalação de painéis solares em Camaragibe</strong> e toda a região metropolitana de Recife. 
                Atendemos residências, comércios e indústrias com soluções completas de <strong>energia fotovoltaica</strong>.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  <span>Atendimento em Camaragibe, Paulista, Recife e região</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  <span>Equipe técnica local e certificada</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  <span>Suporte técnico especializado em Pernambuco</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl overflow-hidden h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63088.89243869442!2d-34.99999999999999!3d-8.0239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18c3b0c8c8c7%3A0x1234567890abcdef!2sCamaragibe%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy"
                title="Localização Antares Energia Camaragibe"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Perguntas Frequentes sobre Energia Solar em Camaragibe
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Quanto custa instalar energia solar em Camaragibe?",
                a: "O investimento varia conforme o consumo e tamanho do sistema. Em média, sistemas residenciais começam em R$ 15.000. Oferecemos financiamento em até 120x e o retorno do investimento ocorre entre 3-5 anos com a economia gerada."
              },
              {
                q: "Energia solar funciona bem em Camaragibe?",
                a: "Sim! Pernambuco tem uma das melhores incidências solares do Brasil, com média de 5,5 kWh/m²/dia. Camaragibe possui condições excelentes para geração fotovoltaica durante todo o ano."
              },
              {
                q: "Qual a economia real com painéis solares?",
                a: "Nossos clientes em Camaragibe economizam entre 85% e 95% na conta de luz. Um sistema bem dimensionado elimina praticamente todo o custo com energia, mantendo apenas a taxa mínima da concessionária."
              },
              {
                q: "Quanto tempo leva a instalação?",
                a: "O processo completo leva de 30 a 60 dias, incluindo projeto, aprovação da Celpe e instalação. A instalação física dos painéis é realizada em 2-3 dias."
              },
              {
                q: "Preciso de autorização para instalar?",
                a: "Sim, é necessária aprovação da Celpe (Companhia Energética de Pernambuco). Nós cuidamos de toda a documentação e processo de homologação para você."
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white p-6 rounded-xl border border-gray-200 group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-cyan-600 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
