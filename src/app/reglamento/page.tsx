'use client';
import React from 'react';
import { AlertTriangle, ShieldCheck, ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function PaginaReglamento() {
  const handleMulta = async () => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({ 
          // Este es tu ID de $50 MXN [2026-02-14]
          precioId: 'price_1T1PGTF7NHfh6ydDYW5jLNQx' 
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("No se pudo conectar con la pasarela de pagos.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Hubo un problema al procesar la solicitud.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <button 
        onClick={() => window.location.href = '/'} 
        className="mb-8 flex items-center gap-2 font-bold uppercase text-xs text-gray-500 hover:text-black transition-colors"
      >
        <ChevronLeft size={16}/> Volver al Inicio
      </button>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white border-2 border-red-100 rounded-[40px] p-8 shadow-xl relative overflow-hidden">
          
          <div className="absolute -top-10 -right-10 text-red-50 opacity-50">
            <AlertTriangle size={200} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 text-red-600 mb-6">
              <div className="bg-red-100 p-3 rounded-2xl">
                <AlertTriangle size={32} />
              </div>
              <h1 className="text-2xl font-black uppercase italic tracking-tighter text-red-600">Reglamento y Sanciones</h1>
            </div>

            <div className="space-y-4 text-gray-700 mb-8">
              <p className="font-bold text-lg">Para mantener la seguridad en <span className="text-black">Tijuana Shop</span>, es necesario cumplir con las normas.</p>
              
              <div className="bg-red-600 p-6 rounded-[25px] text-white shadow-lg shadow-red-200">
                <p className="text-xs font-bold uppercase opacity-80 mb-1 text-white">Infracción detectada</p>
                <div className="flex justify-between items-end">
                  <p className="text-3xl font-black italic leading-none text-white">PAGO DE MULTA</p>
                  <p className="text-4xl font-black leading-none text-white">$50<span className="text-xs uppercase ml-1">mxn</span></p>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-green-500 mt-1" size={18} />
                  <p className="text-sm font-medium">La reactivación de cuenta se procesa tras confirmar el pago.</p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-green-500 mt-1" size={18} />
                  <p className="text-sm font-medium">Este pago ayuda a mantener la comunidad libre de spam.</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleMulta} 
              className="w-full h-16 bg-black hover:bg-red-600 text-white rounded-2xl font-black text-xl transition-all uppercase tracking-widest shadow-xl"
            >
              PAGAR AHORA
            </Button>
            
            <p className="text-center text-[10px] text-gray-400 font-bold uppercase mt-8 tracking-[0.2em]">
              Tu Marketplace Local en Línea
            </p>
          </div>
        </div>
      </div>
    </div>
  );
    }
      
