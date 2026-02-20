'use client';

import React from 'react';
import { 
  Search, 
  MessageCircle, 
  PlusCircle, 
  Gift, 
  Gavel, 
  Crown, 
  User, 
  Home,
  Bell
} from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HomeTijuanaShop() {
  
  // Función para navegar rápido
  const irA = (ruta: string) => {
    window.location.href = ruta;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24">
      
      {/* 1. BANNER SUPERIOR (SISTEMA GANAR) */}
      <div 
        onClick={() => irA('/ganar')}
        className="bg-black text-[#00cba9] py-3 text-center text-[10px] font-black cursor-pointer uppercase tracking-[3px] hover:bg-zinc-900 transition-all"
      >
        🎁 ¡Comparte y Gana destacados gratis! HAZ CLIC AQUÍ
      </div>

      {/* 2. HEADER PRINCIPAL */}
      <header className="bg-white border-b p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div onClick={() => irA('/')} className="cursor-pointer">
            <h1 className="text-2xl font-black italic text-[#00cba9] leading-none">TIJUANA SHOP</h1>
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Tu Marketplace Local en Línea</p>
          </div>
          
          <div className="flex gap-2">
            {/* Botón de Multas */}
            <Button 
              onClick={() => irA('/reglamento')}
              variant="ghost" 
              className="text-red-500 hover:bg-red-50 text-[10px] font-black"
            >
              <Gavel className="w-4 h-4 mr-1"/> REGLAS
            </Button>
            
            {/* Botón de Vender */}
            <Button 
              onClick={() => irA('/sell')}
              className="bg-[#00cba9] hover:bg-black text-white font-black rounded-2xl text-xs px-5 shadow-lg shadow-[#00cba9]/20"
            >
              <PlusCircle className="w-4 h-4 mr-1"/> VENDER
            </Button>
          </div>
        </div>
      </header>

      {/* 3. SECCIÓN DE DESTACADOS ($99 MXN) */}
      <main className="p-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-black italic flex items-center gap-2">
            <Crown className="text-yellow-500 w-6 h-6"/> DESTACADOS
          </h2>
          <span className="text-[10px] font-bold text-gray-400 uppercase">Tijuana, B.C.</span>
        </div>

        {/* Ejemplo de un producto destacado que pagó sus $99 */}
        <div className="grid grid-cols-2 gap-4">
           <div className="bg-white p-3 rounded-[32px] border-2 border-[#00cba9] shadow-sm relative overflow-hidden">
             <div className="absolute top-2 right-2 bg-[#00cba9] text-white p-1 rounded-full">
               <Crown className="w-3 h-3"/>
             </div>
             <div className="aspect-square bg-gray-100 rounded-[24px] mb-3"></div>
             <p className="font-bold text-sm truncate px-1">Producto Premium</p>
             <p className="text-[#00cba9] font-black text-lg px-1">$99 MXN</p>
           </div>
        </div>
      </main>

      {/* 4. BARRA DE NAVEGACIÓN INFERIOR (LOS BOTONES) */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] rounded-t-[30px]">
        
        <button onClick={() => irA('/')} className="flex flex-col items-center gap-1 transition-transform active:scale-90">
          <Home className="w-6 h-6 text-[#00cba9]" />
          <span className="text-[9px] font-black text-[#00cba9] uppercase">Inicio</span>
        </button>

        <button onClick={() => irA('/chat')} className="flex flex-col items-center gap-1 transition-transform active:scale-90">
          <div className="relative">
            <MessageCircle className="w-6 h-6 text-gray-400" />
            <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full border-2 border-white"></span>
          </div>
          <span className="text-[9px] font-bold text-gray-400 uppercase text-center">Avi Chat</span>
        </button>

        {/* Botón Central Flotante para Vender */}
        <button 
          onClick={() => irA('/sell')} 
          className="bg-black w-14 h-14 rounded-2xl flex items-center justify-center -mt-12 shadow-xl shadow-black/20 border-4 border-white transition-transform active:scale-95"
        >
          <PlusCircle className="w-8 h-8 text-[#00cba9]" />
        </button>

        <button onClick={() => irA('/ganar')} className="flex flex-col items-center gap-1 transition-transform active:scale-90">
          <Gift className="w-6 h-6 text-gray-400" />
          <span className="text-[9px] font-bold text-gray-400 uppercase">Ganar</span>
        </button>

        <button onClick={() => irA('/auth')} className="flex flex-col items-center gap-1 transition-transform active:scale-90">
          <User className="w-6 h-6 text-gray-400" />
          <span className="text-[9px] font-bold text-gray-400 uppercase">Cuenta</span>
        </button>

      </nav>

    </div>
  );
}
