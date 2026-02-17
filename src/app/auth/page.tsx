'use client';
import React from 'react';

export default function AuthPage() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '900', fontStyle: 'italic' }}>TIJUANA SHOP</h1>
      <div style={{ margin: '40px auto', maxWidth: '400px', border: '2px dashed #ccc', padding: '40px', borderRadius: '30px' }}>
        <p style={{ fontWeight: 'bold', color: '#666' }}>SISTEMA DE USUARIOS</p>
        <p style={{ color: '#999' }}>En mantenimiento por actualización de Avi-Espa</p>
      </div>
      <button 
        onClick={() => window.location.href = '/'}
        style={{ padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        VOLVER AL INICIO
      </button>
    </div>
  );
          }
