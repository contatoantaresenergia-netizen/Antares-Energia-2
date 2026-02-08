import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';

// Testaremos a importação com chaves, que é o padrão mais comum em Vite/React moderno
import { Home } from './pages/Home'; 
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

// IMPORTAÇÕES DE CAMARAGIBE
import Camaragibe from './pages/Camaragibe'; 
import { CamaragibeSobre } from './pages/CamaragibeSobre';
import { CamaragibeServices } from './pages/CamaragibeServices';
import { CamaragibeProjects } from './pages/CamaragibeProjects';
import { CamaragibeContact } from './pages/CamaragibeContact';

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
          
          <Route path="camaragibe" element={<Camaragibe />} />
          <Route path="camaragibe/sobre" element={<CamaragibeSobre />} />
          <Route path="camaragibe/servicos" element={<CamaragibeServices />} />
          <Route path="camaragibe/projetos" element={<CamaragibeProjects />} />
          <Route path="camaragibe/contato" element={<CamaragibeContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
