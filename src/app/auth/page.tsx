'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AuthForm } from './_components/auth-form';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Definimos el icono aquí mismo para que Vercel no lo busque en otra carpeta
const GoogleIcon = () => (
  <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
  </svg>
);

function AuthContent() {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode') || 'login';

  return (
    <Card className="w-full max-w-md mx-auto shadow-2xl border-t-4 border-t-[#00cba9] card-modern">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center mb-2">
           <div className="w-12 h-12 bg-[#D2B48C] rounded-full flex items-center justify-center text-xl shadow-sm border-2 border-white">🛍️</div>
        </div>
        <CardTitle className="text-2xl font-black italic">TIJUANA SHOP</CardTitle>
        <CardDescription className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
          Tu Marketplace Local en Línea
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={mode} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login" className="font-bold">Entrar</TabsTrigger>
            <TabsTrigger value="register" className="font-bold">Registro</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <AuthForm type="login" googleIcon={<GoogleIcon />} />
          </TabsContent>
          <TabsContent value="register">
            <AuthForm type="register" googleIcon={<GoogleIcon />} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Suspense fallback={<div className="font-black animate-pulse text-[#00cba9]">CARGANDO TIJUANA SHOP...</div>}>
        <AuthContent />
      </Suspense>
    </div>
  );
}
