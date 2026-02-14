'use client';
import React, { useState } from 'react';

export default function Marketplace() {
  const [apartados, setApartados] = useState([]);
  
  const productos = [
    { id: 1, nombre: "iPhone 15 Pro", precio: "18,500", img: "📱" },
    { id: 2, nombre: "Jordan Retro 4", precio: "4,200", img: "👟" },
    { id: 3, nombre: "MacBook Air M2", precio: "15,000", img: "💻" }
  ];

  const gestionarApartado = (p) => {
    const existe = apartados.find(item => item.id === p.id);
    if (existe) {
      setApartados(apartados.filter(item => item.id !== p.id));
    } else {
      setApartados([...apartados, p]);
    }
  };

  const enviarWhatsApp = () => {
    const lista = apartados.map(p => "- " + p.nombre).join("%0A");
    const mensaje = "Hola Avi! Vi esto en Tijuana Shop y quiero preguntar disponibilidad para apartar:%0A" + lista;
    window.open("https://wa.me/526641234567?text=" + mensaje, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32 font-sans">
      {/* HEADER TIPO CECUT */}
      <header className="bg-[#00cba9] pt-10 pb-14 px-6 rounded-b-[50px] shadow-xl text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[#D2B48C] rounded-full border-4 border-white flex items-center justify-center text-3xl shadow-lg">🛍️</div>
          <h1 className="text-4xl font-black text-black italic tracking-tighter">TIJUANA SHOP</h1>
        </div>
        <p className="text-white font-bold text-[10px] uppercase tracking-[3px]">Tu Marketplace Local en Línea</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 -mt-8">
        {/* REGLAS DE ENTREGA */}
        <div className="bg-white p-6 rounded-[30px] shadow-md border border-gray-100 mb-8">
          <h3 className="text-[#00cba9] font-black text-xs uppercase mb-3 tracking-widest">⚠️ Reglas de Entrega</h3>
          <ul className="text-[11px] text-gray-500 font-bold space-y-2">
            <li>📍 Puntos medios: Macroplaza, Plaza Rio o Centro.</li>
            <li>🤝 Revisar el producto antes de pagar.</li>
            <li>⏰ Tolerancia de 15 min en entregas.</li>
          </ul>
        </div>

        {/* PRODUCTOS */}
        <div className="grid grid-cols-1 gap-4">
          {productos.map(p => {
            const estaApartado = apartados.find(item => item.id === p.id);
            return (
              <div key={p.id} className="bg-white p-5 rounded-[24px] shadow-sm border border-gray-100 flex gap-4 items-center transition-transform active:scale-95">
                <div className="text-5xl bg-gray-50 w-20 h-20 flex items-center justify-center rounded-2xl">{p.img}</div>
                <div className="flex-1">
                  <h3 className="font-black text-gray-800 uppercase text-xs">{p.nombre}</h3>
                  <div className="text-xl font-black text-[#00cba9]">$ {p.precio}</div>
                  <button 
                    onClick={() => gestionarApartado(p)}
                    className={"mt-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase w-full transition " + (estaApartado ? "bg-gray-200 text-gray-500" : "bg-black text-white")}
                  >
                    {estaApartado ? "✓ SELECCIONADO" : "APARTAR / PREGUNTAR"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      {apartados.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white border-2 border-black p-5 rounded-[30px] shadow-2xl z-50 flex items-center justify-between animate-in fade-in slide-in-from-bottom-4">
          <div className="text-left">
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Interés en {apartados.length} artículos</div>
            <div className="text-lg font-black text-black leading-tight">¿Sigue disponible?</div>
          </div>
          <button 
            onClick={enviarWhatsApp}
            className="bg-[#25D366] text-white px-6 py-4 rounded-2xl font-black text-xs uppercase shadow-lg active:scale-90 transition"
          >
            WHATSAPP ✅
          </button>
        </div>
      )}

      <footer className="py-12 text-center text-gray-300 font-bold text-[9px] tracking-[4px]">
        © 2026 AVI-ESPA | TIJUANASHOP.COM
      </footer>
    </div>
  );
}
