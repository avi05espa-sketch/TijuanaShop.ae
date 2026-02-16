'use client';
import React, { Suspense } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-black italic">TIJUANA SHOP</CardTitle>
          <CardDescription>Tu Marketplace Local en Línea</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-8 text-center bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300">
            <p className="text-sm font-bold text-gray-500 uppercase">El sistema de usuarios está en mantenimiento.</p>
            <p className="text-[10px] mt-2 italic">Avi-Espa</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
