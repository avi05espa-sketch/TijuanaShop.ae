'use client';
import React from 'react';
import { Crown, CheckCircle, ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function PaginaVender() {
  const handlePago = async () => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({ 
          // Este es tu ID de $99 que ya generaste
          precioId: 'price_1T1PA4F7NHfh6ydD2qYNuvtZ' 
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("No se pudo generar el enlace de pago.");
      }
    } catch (err) {
      console.error("Error al procesar pago", err);
      alert("Hubo un error de conexión.");
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <button 
        onClick={() => window.location.href = '/'} 
        className="mb-8 flex items-center gap-2 font-bold uppercase text-xs text-black"
      >
        <ChevronLeft size={16}/> Volver
      </button>

      <div className="max-w-md mx-auto">
        <div className="bg-black rounded-[40px] p-8 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20 text-[#00cba9]">
            <Crown size={80}/>
          </div>
          
          <h2 className="text-3xl font-black italic leading-none mb-2 italic">ANUNCIO DESTACADO</h2>
          <p className="text-[#00cba9] font-black text-6xl mb-6">
            $99<span className="text-sm uppercase ml-1">mxn</span>
          </p>
          
          <ul className="text-left space-y-4 mb-8">
            <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-tighter">
              <CheckCircle size={18} className="text-[#00cba9] shrink-0"/> 
              Aparece al principio de todo
            </li>
            <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-tighter">
              <CheckCircle size={18} className="text-[#00cba9] shrink-0"/> 
              Badge de "Vendedor Verificado"
            </li>
            <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-tighter">
              <CheckCircle size={18} className="text-[#00cba9] shrink-0"/> 
              7 días de máxima visibilidad
            </li>
          </ul>

          <Button 
            onClick={handlePago} 
            className="w-full h-16 bg-[#00cba9] hover:bg-white hover:text-black text-black rounded-2xl font-black text-xl transition-all shadow-lg"
          >
            PAGAR AHORA
          </Button>
        </div>
        
        <div className="mt-8 text-center">
           <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em]">
            Tu Marketplace Local en Línea
          </p>
          <p className="text-[10px] text-gray-300 font-bold uppercase mt-1">
            Propiedad de Avi-Espa
          </p>
        </div>
      </div>
    </div>
  );
}
