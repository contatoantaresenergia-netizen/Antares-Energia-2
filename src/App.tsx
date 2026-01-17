import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

// Importações usando chaves (Named Exports)
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

// IMPORTANTE: O arquivo Layout.tsx PRECISA estar dentro da pasta src/components
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
