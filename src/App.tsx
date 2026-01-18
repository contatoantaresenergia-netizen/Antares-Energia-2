import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

// Importação do Layout (Certifique-se que o arquivo existe em src/components/Layout.tsx)
import { Layout } from './components/Layout';

// Importações das Páginas
// Nota: O erro "vermelho" acontece se o nome dentro desses arquivos for diferente do nome aqui
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services'; // Este é o que estava causando erro
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

// Componente para resetar o scroll ao trocar de página
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Rota Pai que contém o Menu e Rodapé (Layout) */}
        <Route path="/" element={<Layout />}>
          
          {/* Página Inicial - renderiza no caminho "/" */}
          <Route index element={<Home />} />
          
          {/* Outras páginas - caminhos em português conforme solicitado */}
          <Route path="sobre" element={<About />} />
          <Route path="servicos" element={<Services />} />
          <Route path="projetos" element={<Projects />} />
          <Route path="contato" element={<Contact />} />
          
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
