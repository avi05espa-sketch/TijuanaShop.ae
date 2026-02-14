'use client';
import React, { useState, useEffect } from 'react';
import { Search, MessageCircle, Plus, Gift, Gavel, Crown, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Inicio() {
  return (
    <div className="min-h-screen bg-[#f4f7f6]">
      {/* Banner Superior Ganar */}
      <div onClick={() => window.location.href='/ganar'} className="bg-black text-[#00cba9] py-2 text-center text-[10px] font-black cursor-pointer uppercase tracking-widest">
        🎁 ¡Comparte y Gana destacados gratis! Haz clic aquí
      </div>

      <header className="bg-white border-b p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div onClick={() => window.location.href='/'} className="cursor-pointer">
            <h1 className="text-xl font-black italic text-[#00cba9]">TIJUANA SHOP</h1>
            <p className="text-[8px] font-bold text-gray-400 uppercase">Tu Marketplace Local en Línea</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => window.location.href='/reglamento'} variant="ghost" className="text-red-500 text-[10px] font-bold"><Gavel className="w-4 h-4 mr-1"/> MULTAS</Button>
            <Button onClick={() => window.location.href='/vender'} className="bg-[#00cba9] text-white font-black rounded-xl text-xs"><Plus className="w-4 h-4 mr-1"/> VENDER</Button>
          </div>
        </div>
      </header>

      <main className="p-4 max-w-7xl mx-auto">
        <h2 className="text-lg font-black italic mb-4 flex items-center gap-2"><Crown className="text-[#00cba9]"/> DESTACADOS DE LA SEMANA</h2>
        {/* Aquí irán los productos que pagan $99 */}
        <div className="grid grid-cols-2 gap-4">
           <div className="bg-white p-3 rounded-[24px] border-2 border-[#00cba9] shadow-lg">
             <div className="aspect-square bg-gray-100 rounded-xl mb-2"></div>
             <p className="font-bold text-sm">Producto Destacado</p>
             <p className="text-[#00cba9] font-black">$99 MXN</p>
           </div>
        </div>
      </main>

      {/* Botón flotante para el Chat con Abi */}
      <button onClick={() => window.location.href='/chat'} className="fixed bottom-6 right-6 w-16 h-16 bg-[#00cba9] rounded-full shadow-2xl flex items-center justify-center text-white border-4 border-white">
        <MessageCircle />
      </button>
    </div>
  );
        }
