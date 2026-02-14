'use client';

import React, { useState } from 'react';
import { MessageCircle, Send, ChevronLeft, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PaginaChatAvi() {
  const [mensajes, setMensajes] = useState([
    { role: 'avi', text: '¡Qué onda! Soy el Asistente Avi, tu IA de Tijuana Shop. ¿Buscas alguna oferta o necesitas ayuda con tus ventas?' }
  ]);
  const [input, setInput] = useState("");

  const enviarMensaje = () => {
    if (!input.trim()) return;
    
    const nuevosMensajes = [...mensajes, { role: 'user', text: input }];
    setMensajes(nuevosMensajes);
    setInput("");

    // Respuesta de Avi corregida
    setTimeout(() => {
      setMensajes([...nuevosMensajes, { 
        role: 'avi', 
        text: '¡Enterado! Soy Avi y estoy aquí para que tu experiencia en Tijuana Shop sea la mejor. Dame un momento para procesar tu solicitud.' 
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header con el nombre corregido */}
      <div className="bg-[#00cba9] p-4 text-white flex items-center gap-4 shadow-lg">
        <button onClick={() => window.location.href = '/'}><ChevronLeft /></button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/50">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-black italic leading-none tracking-tighter">ASISTENTE AVI</h1>
            <span className="text-[10px] font-bold uppercase opacity-80">Marketplace Local de Tijuana</span>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {mensajes.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'avi' ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[85%] p-4 rounded-[26px] text-sm font-medium shadow-sm ${
              m.role === 'avi' 
                ? 'bg-white text-gray-800 rounded-tl-none border border-gray-100' 
                : 'bg-black text-white rounded-tr-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t pb-10">
        <div className="max-w-4xl mx-auto flex gap-2">
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && enviarMensaje()}
            placeholder="Pregúntale a Avi..." 
            className="rounded-2xl border-gray-100 h-12 shadow-inner"
          />
          <Button onClick={enviarMensaje} className="bg-[#00cba9] hover:bg-black text-white rounded-2xl h-12 px-6 transition-colors">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
