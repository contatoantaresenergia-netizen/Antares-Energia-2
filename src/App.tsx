import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';          // ✅ nomeado
import { Camaragibe } from './pages/Camaragibe'; // ✅ named import


import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound'; 

<Route path="camaragibe" element={<Camaragibe />} />
<Route path="camaragibe/sobre" element={<CamaragibeSobre />} />
<Route path="camaragibe/servicos" element={<CamaragibeServices />} />
<Route path="camaragibe/projetos" element={<CamaragibeProjects />} />
<Route path="camaragibe/contato" element={<CamaragibeContact />} />


const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
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
          
          <Route path="camaragibe" element={<div>Camaragibe</div>} />
          <Route path="camaragibe/sobre" element={<CamaragibeSobre />} />
          <Route path="camaragibe/servicos" element={<CamaragibeServices />} />
          <Route path="camaragibe/projetos" element={<CamaragibeProjects />} />
          <Route path="camaragibe/contato" element={<CamaragibeContact />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
