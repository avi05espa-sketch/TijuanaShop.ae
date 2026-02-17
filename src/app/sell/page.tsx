'use client';
import React from 'react';

export default function VenderPage() {
  const pagar = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ precioId: 'price_1T1PA4F7NHfh6ydD2qYNuvtZ' }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontStyle: 'italic', fontSize: '2rem' }}>ANUNCIO DESTACADO</h2>
      <p style={{ fontSize: '4rem', fontWeight: '900', color: '#00cba9' }}>$99</p>
      <p style={{ marginBottom: '40px' }}>Tu Marketplace Local en Línea</p>
      <button 
        onClick={pagar}
        style={{ backgroundColor: '#00cba9', color: '#000', border: 'none', padding: '20px 40px', borderRadius: '20px', fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' }}
      >
        PAGAR AHORA
      </button>
    </div>
  );
}
