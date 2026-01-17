import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

// Importações corrigidas com as chaves { }
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

// Se o Layout.tsx estiver dentro de 'components', use a linha abaixo. 
// Se der erro, verifique se o arquivo Layout.tsx realmente existe nessa pasta.
import { Layout } from './components/Layout'; 

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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
