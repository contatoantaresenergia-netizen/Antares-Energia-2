import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';

// IMPORTAÇÕES DAS PÁGINAS
import Home from './pages/Home'; 
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound'; 

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
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* ROTAS PADRÃO */}
            <Route index element={<Home />} />
            <Route path="sobre" element={<About />} />
            <Route path="servicos" element={<Services />} />
            <Route path="projetos" element={<Projects />} />
            <Route path="contato" element={<Contact />} />
            
            {/* ROTAS DE CAMARAGIBE */}
            <Route path="camaragibe" element={<Camaragibe />} />
            <Route path="camaragibe/sobre" element={<CamaragibeSobre />} />
            <Route path="camaragibe/servicos" element={<CamaragibeServices />} />
            <Route path="camaragibe/projetos" element={<CamaragibeProjects />} />
            <Route path="camaragibe/contato" element={<CamaragibeContact />} />

            {/* ROTA 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
