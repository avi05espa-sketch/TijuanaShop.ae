'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-[30px] border-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-black italic tracking-tighter">
            {isLogin ? 'INICIAR SESIÓN' : 'REGISTRARSE'}
          </CardTitle>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Tu Marketplace Local en Línea
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              className="w-full p-4 bg-gray-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-black"
            />
            <input 
              type="password" 
              placeholder="Contraseña" 
              className="w-full p-4 bg-gray-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          
          <Button className="w-full h-14 bg-black hover:bg-gray-800 text-white rounded-2xl font-bold text-lg">
            {isLogin ? 'ENTRAR' : 'CREAR CUENTA'}
          </Button>

          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="w-full text-sm font-bold text-gray-500 hover:text-black transition-colors"
          >
            {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Entra aquí'}
          </button>
        </CardContent>
        <div className="p-4 text-center border-t border-gray-100">
          <p className="text-[10px] text-gray-300 font-black uppercase">Propiedad de Avi-Espa</p>
        </div>
      </Card>
    </div>
  );
    }
