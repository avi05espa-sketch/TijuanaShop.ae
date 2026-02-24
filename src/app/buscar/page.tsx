'use client';
import React from 'react';

export default function BusquedaAvanzadaPage() {
  return (
    <main style={{ backgroundColor: '#121212', minHeight: '100vh', color: '#FFF', padding: '20px' }}>
      
      <header style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '22px', color: '#FF8C00', fontWeight: 'bold', margin: '0 0 10px' }}>Filtros de Búsqueda</h2>
        <p style={{ color: '#888', fontSize: '14px' }}>Ajusta los resultados según lo que necesitas.</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        
        {/* Filtro por Categoría (Punto 8) */}
        <section>
          <label style={labelStyle}>Categoría</label>
          <select style={selectStyle}>
            <option>Todas las categorías</option>
            <option>Autos</option>
            <option>Electrónica</option>
            <option>Hogar</option>
            <option>Ropa</option>
          </select>
        </section>

        {/* Rango de Precio (Punto 8) */}
        <section>
          <label style={labelStyle}>Rango de Precio (MXN)</label>
          <div style={{ display: 'flex', gap: '15px' }}>
            <input type="number" placeholder="Mín" style={inputStyle} />
            <input type="number" placeholder="Máx" style={inputStyle} />
          </div>
        </section>

        {/* Estado del Producto (Punto 8) */}
        <section>
          <label style={labelStyle}>Estado</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={chipStyleActive}>Cualquiera</button>
            <button style={chipStyle}>Nuevo</button>
            <button style={chipStyle}>Usado</button>
          </div>
        </section>

        {/* Ordenar por (Punto 8) */}
        <section>
          <label style={labelStyle}>Ordenar por</label>
          <select style={selectStyle}>
            <option>Más reciente</option>
            <option>Precio más bajo</option>
            <option>Precio más alto</option>
          </select>
        </section>

        <hr style={{ border: '0.5px solid #333', margin: '10px 0' }} />

        {/* Botones de Acción Obligatorios (Punto 8) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button style={{ 
            backgroundColor: '#FF8C00', color: 'white', padding: '16px', borderRadius: '12px', 
            border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' 
          }}>
            Aplicar filtros
          </button>
          
          <button style={{ 
            backgroundColor: 'transparent', color: '#888', padding: '10px', borderRadius: '12px', 
            border: 'none', fontSize: '14px', cursor: 'pointer' 
          }}>
            Limpiar filtros
          </button>
        </div>

      </div>
    </main>
  );
}

// Estilos específicos para esta pantalla
const labelStyle = { display: 'block', fontSize: '15px', fontWeight: 'bold', marginBottom: '10px', color: '#BBB' };
const selectStyle = { width: '100%', padding: '14px', borderRadius: '10px', backgroundColor: '#1E1E1E', color: '#FFF', border: '1px solid #333', outline: 'none' };
const inputStyle = { flex: 1, padding: '14px', borderRadius: '10px', backgroundColor: '#1E1E1E', color: '#FFF', border: '1px solid #333', outline: 'none' };
const chipStyle = { padding: '8px 18px', borderRadius: '20px', backgroundColor: '#1E1E1E', color: '#FFF', border: '1px solid #333', cursor: 'pointer' };
const chipStyleActive = { padding: '8px 18px', borderRadius: '20px', backgroundColor: '#FF8C00', color: '#FFF', border: 'none', cursor: 'pointer' };
