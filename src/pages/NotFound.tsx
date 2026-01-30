import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NotFound: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
      
      {/* O Boneco (Emoji) Girando */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{ fontSize: '80px', marginBottom: '20px' }}
      >
        ⚡
      </motion.div>

      <h1 style={{ fontSize: '100px', margin: 0, color: '#3b82f6' }}>404</h1>
      <h2>Parece que a energia caiu por aqui!</h2>
      <p>Não encontramos a página que você estava procurando em Camaragibe ou Nova Odessa.</p>
      
      <div style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>
          Voltar para Home
        </Link>
        <Link to="/camaragibe" style={{ padding: '10px 20px', border: '1px solid #3b82f6', color: '#3b82f6', borderRadius: '8px', textDecoration: 'none' }}>
          Menu Camaragibe
        </Link>
      </div>
    </div>
  );
};
