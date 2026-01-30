import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '72px', color: '#3b82f6' }}>404</h1>
      <h2>Ops! Página não encontrada</h2>
      <p>Parece que você pegou o caminho errado em Camaragibe ou Nova Odessa.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/" style={{ marginRight: '15px', color: '#3b82f6' }}>Ir para Home</Link>
        <Link to="/camaragibe" style={{ color: '#3b82f6' }}>Ir para Camaragibe</Link>
      </div>
    </div>
  );
};
