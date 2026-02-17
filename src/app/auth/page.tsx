'use client';
import React from 'react';

export default function AuthPage() {
  return (
    <div style={{ 
      minHeight: 'screen', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px',
      fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '2rem' }}>TIJUANA SHOP</h1>
      <p style={{ color: '#666', fontSize: '0.8rem', marginBottom: '20px' }}>Tu Marketplace Local en Línea</p>
      
      <div style={{ 
        border: '2px dashed #ccc', 
        padding: '40px', 
        borderRadius: '20px', 
        textAlign: 'center',
        backgroundColor: '#f9f9f9' 
      }}>
        <p style={{ fontWeight: 'bold', color: '#999' }}>MÓDULO DE USUARIOS EN MANTENIMIENTO</p>
        <p style={{ fontSize: '10px', marginTop: '10px' }}>Avi-Espa</p>
      </div>
      
      <button 
        onClick={() => window.location.href = '/'}
        style={{ marginTop: '20px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Volver al inicio
      </button>
    </div>
  );
}
