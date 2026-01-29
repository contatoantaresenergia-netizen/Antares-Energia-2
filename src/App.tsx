import React, { useEffect } from 'react';
// Alterado para BrowserRouter para URLs limpas (melhor para SEO e Vercel)
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

// CORREÇÃO DO "X" VERMELHO: O caminho deve ser exatamente igual ao nome da pasta
// Se a pasta é 'camaragibe' (minúsculo), o import deve ser assim:
import { Camaragibe } from './pages/camaragibe'; 

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />
          <Route path="servicos" element={<Services />} />
          <Route path="projetos" element={<Projects />} />
          <Route path="contato" element={<Contact />} />
          
          {/* Rota para a página de Camaragibe */}
          <Route path="camaragibe" element={<Camaragibe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
