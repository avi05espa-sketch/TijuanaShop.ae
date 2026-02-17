'use client';
import React from 'react';

export default function ReglamentoPage() {
  const pagarMulta = async () => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({ 
          // Tu ID de multa de $50 MXN
          precioId: 'price_1T1PGTF7NHfh6ydDYW5jLNQx' 
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Error al conectar con Stripe");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#fff', 
      color: '#000', 
      minHeight: '100vh', 
      padding: '40px', 
      textAlign: 'center', 
      fontFamily: 'sans-serif' 
    }}>
      <div style={{ 
        maxWidth: '500px', 
        margin: '0 auto', 
        border: '3px solid #ff4d4d', 
        borderRadius: '40px', 
        padding: '30px' 
      }}>
        <h2 style={{ color: '#ff4d4d', fontWeight: '900', fontStyle: 'italic' }}>REGLAMENTO</h2>
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>PAGO DE MULTA POR INFRACCIÓN</p>
        
        <div style={{ margin: '30px 0' }}>
          <p style={{ fontSize: '3rem', fontWeight: '900', margin: '0' }}>$50</p>
          <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '-5px' }}>MXN</p>
        </div>

        <p style={{ fontSize: '0.9rem', marginBottom: '30px', color: '#444' }}>
          Para reactivar tu cuenta y seguir vendiendo en <strong>Tijuana Shop</strong>, debes realizar el pago correspondiente.
        </p>

        <button 
          onClick={pagarMulta}
          style={{ 
            backgroundColor: '#000', 
            color: '#fff', 
            border: 'none', 
            padding: '20px 40px', 
            borderRadius: '20px', 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            width: '100%'
          }}
        >
          PAGAR MULTA AHORA
        </button>

        <p style={{ fontSize: '10px', marginTop: '30px', color: '#999', letterSpacing: '2px' }}>
          TU MARKETPLACE LOCAL EN LÍNEA | AVI-ESPA
        </p>
      </div>
    </div>
  );
      }
