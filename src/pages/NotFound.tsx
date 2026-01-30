import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Map, RotateCcw } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div style={styles.wrapper}>
      {/* Boneco/Ícone Animado */}
      <motion.div
        animate={{ 
          rotate: 360,
          y: [0, -20, 0] 
        }}
        transition={{ 
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        style={styles.iconContainer}
      >
        <RotateCcw size={80} color="#3b82f6" />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={styles.errorCode}
      >
        404
      </motion.h1>

      <h2 style={styles.title}>Perdido em Camaragibe?</h2>
      <p style={styles.subtitle}>
        Parece que essa página resolveu tirar férias. <br />
        Que tal voltar para o mapa principal?
      </p>

      <div style={styles.buttonGrid}>
        <Link to="/" style={styles.primaryBtn}>
          <Home size={20} /> Voltar para Home
        </Link>
        <Link to="/camaragibe" style={styles.secondaryBtn}>
          <Map size={20} /> Ir para Camaragibe
        </Link>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'sans-serif'
  },
  iconContainer: {
    marginBottom: '20px',
  },
  errorCode: {
    fontSize: '100px',
    fontWeight: 'bold',
    margin: '0',
    background: 'linear-gradient(to right, #3b82f6, #2dd4bf)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  title: { fontSize: '24px', color: '#1e293b', marginBottom: '10px' },
  subtitle: { color: '#64748b', marginBottom: '40px', lineHeight: '1.6' },
  buttonGrid: { display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' },
  primaryBtn: {
    display: 'flex', alignItems: 'center', gap: '8px',
    backgroundColor: '#3b82f6', color: 'white',
    padding: '12px 24px', borderRadius: '50px', textDecoration: 'none',
    fontWeight: '600', transition: '0.3s'
  },
  secondaryBtn: {
    display: 'flex', alignItems: 'center', gap: '8px',
    border: '2px solid #3b82f6', color: '#3b82f6',
    padding: '12px 24px', borderRadius: '50px', textDecoration: 'none',
    fontWeight: '600'
  }
};
