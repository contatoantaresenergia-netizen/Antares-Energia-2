import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Removido o import do index.css para destravar o build da Vercel
// Se você tiver um arquivo CSS, certifique-se de que o nome está correto no GitHub

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Não foi possível encontrar o elemento raiz 'root'.");
}
