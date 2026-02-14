'use client';
import React from 'react';
import { Gift, Share2, ChevronLeft, Copy } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function PaginaGanar() {
  return (
    <div className="min-h-screen bg-[#00cba9] p-6 flex flex-col items-center justify-center">
      <button onClick={() => window.location.href = '/'} className="absolute top-6 left-6 flex items-center gap-2 text-white font-bold uppercase text-xs">
        <ChevronLeft /> Volver
      </button>

      <div className="max-w-md w-full bg-white rounded-[40px] p-10 shadow-2xl text-center">
        <div className="bg-yellow-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Gift className="text-yellow-600 w-10 h-10" />
        </div>

        <h1 className="text-3xl font-black italic mb-2 tracking-tighter">¡COMPARTE Y GANA!</h1>
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[3px] mb-8">Tu Marketplace Local en Línea</p>

        <div className="bg-gray-50 rounded-3xl p-6 mb-8 text-left">
          <p className="text-sm font-bold text-gray-600 mb-4">🎁 Invita a 3 amigos de Tijuana.</p>
          <p className="text-sm font-bold text-[#00cba9]">🚀 Gana 1 semana de "Anuncio Destacado" gratis.</p>
        </div>

        <Button className="w-full h-16 bg-black hover:bg-[#00cba9] text-white rounded-[24px] font-black text-lg transition-all shadow-xl">
          <Copy className="mr-2 w-5 h-5" /> COPIAR MI LINK
        </Button>
      </div>
    </div>
  );
}
