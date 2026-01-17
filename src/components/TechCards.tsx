export default function TechCards() {
  const cards = [
    {
      title: 'Sistemas Fotovoltaicos On-Grid',
      description: 'Conexão direta com a rede elétrica para máxima economia',
      icon: '⚡',
    },
    {
      title: 'Sistemas Híbridos',
      description: 'Energia solar com backup de baterias inteligente',
      icon: '🔋',
    },
    {
      title: 'Sistemas Off-Grid',
      description: 'Autonomia energética completa e independente',
      icon: '☀️',
    },
    {
      title: 'Monitoramento Solar',
      description: 'Gestão inteligente de água e irrigação',
      icon: '💧',
    },
  ];

  return (
    <section className="tech-section animate-section py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">
            Nossas Soluções
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sistemas e <span className="text-cyan-400">Tecnologias</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="tech-card group bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
