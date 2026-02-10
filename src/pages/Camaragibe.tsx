import React from 'react';

export const Camaragibe: React.FC = () => {
  return (
    <main className="min-h-screen bg-white pt-40 pb-12 px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">
        Energia Solar em Camaragibe
      </h1>

      <p className="max-w-3xl mx-auto text-center text-lg text-gray-700">
        Esta é a página mínima de Camaragibe para testar se o build funciona sem tela branca.
        Assim que esta versão funcionar, podemos adicionar GSAP, Helmet e todas as animações.
      </p>

      <div className="mt-20 text-center">
        <p className="text-gray-400">
          Rodapé de teste da página.
        </p>
      </div>
    </main>
  );
};
