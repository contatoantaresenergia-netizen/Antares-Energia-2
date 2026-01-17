export default function Hero() {
  return (
    <section className="hero relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="hero-background absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-center max-w-6xl">
        <div className="max-w-4xl">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Arquitetura de <br />
            <span className="text-cyan-400">Alta Performance.</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Engenharia de precisão que integra algo fotovoltaico estratégico,
            gestão de ativos e soluções energéticas sob medida.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn-magnetic bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/50">
              Agendar Consultoria
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Nossos Projetos
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
