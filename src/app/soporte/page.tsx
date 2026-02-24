'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';

export default function SoportePage() {
  const router = useRouter();
  const [mensaje, setMensaje] = useState('');
  const [chat, setChat] = useState([
    { role: 'bot', text: '¡Hola! Soy el asistente virtual de Avi-Espa. ¿En qué puedo ayudarte con Tijuana Shop?' }
  ]);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al último mensaje
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat]);

  const enviarDuda = () => {
    if (!mensaje.trim()) return;

    const nuevoChat = [...chat, { role: 'user', text: mensaje }];
    setChat(nuevoChat);
    const consulta = mensaje.toLowerCase();
    setMensaje('');

    // Inteligencia del Bot de Avi-Espa
    setTimeout(() => {
      let respuestaBot = "Gracias por tu mensaje. Un administrador de Avi-Espa revisará tu reporte pronto.";

      if (consulta.includes('multa') || consulta.includes('pago') || consulta.includes('50')) {
        respuestaBot = "Las multas por incumplir las reglas de la comunidad son de $50 MXN. Para reactivar tu cuenta, contacta a pagos@avi-espa.com.";
      } else if (consulta.includes('vender') || consulta.includes('publicar')) {
        respuestaBot = "Para vender, usa el botón 'Vender' en el menú principal. Es gratis para todos los locales de Tijuana.";
      } else if (consulta.includes('copyright') || consulta.includes('dueño')) {
        respuestaBot = "Tijuana Shop es propiedad exclusiva de Avi-Espa. Todos los derechos están reservados.";
      }

      setChat([...nuevoChat, { role: 'bot', text: respuestaBot }]);
    }, 800);
  };

  return (
    <main style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '20px', color: '#FFF', fontFamily: 'sans-serif' }}>
      {/* Encabezado */}
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#FF8C00', fontSize: '24px', margin: 0 }}>Centro de Ayuda</h1>
        <p style={{ color: '#888', fontSize: '12px' }}>Tijuana Shop - Tu Marketplace Local en Línea</p>
      </header>

      {/* Ventana de Chat Integrada */}
      <div style={{ 
        maxWidth: '500px', margin: '0 auto', backgroundColor: '#1E1E1E', 
        borderRadius: '20px', height: '500px', display: 'flex', 
        flexDirection: 'column', border: '1px solid #333', overflow: 'hidden'
      }}>
        {/* Cuerpo del Chat */}
        <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {chat.map((msg, index) => (
            <div key={index} style={{ 
              alignSelf: msg.role === 'bot' ? 'flex-start' : 'flex-end',
              backgroundColor: msg.role === 'bot' ? '#333' : '#FF8C00',
              padding: '12px 16px', borderRadius: '15px',
              maxWidth: '85%', color: '#FFF', fontSize: '14px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input de Mensaje */}
        <div style={{ padding: '15px', backgroundColor: '#181818', borderTop: '1px solid #333', display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <CustomInput 
              placeholder="Escribe aquí..." 
              value={mensaje} 
              onChange={(e: any) => setMensaje(e.target.value)} 
            />
          </div>
          <div style={{ width: '80px' }}>
            <CustomButton title="Ver" onClick={enviarDuda} />
          </div>
        </div>
      </div>

      {/* Navegación de regreso */}
      <div style={{ maxWidth: '500px', margin: '20px auto', display: 'flex', gap: '10px' }}>
        <button 
          onClick={() => router.push('/')} 
          style={{ flex: 1, background: 'none', border: '1px solid #444', color: '#888', padding: '10px', borderRadius: '10px', cursor: 'pointer' }}
        >
          Regresar al Inicio
        </button>
        <button 
          onClick={() => router.push('/legal')} 
          style={{ flex: 1, background: 'none', border: '1px solid #444', color: '#888', padding: '10px', borderRadius: '10px', cursor: 'pointer' }}
        >
          Ver Legales
        </button>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '30px', color: '#333', fontSize: '11px' }}>
        Soporte Técnico de Avi-Espa © 2026
      </footer>
    </main>
  );
}
