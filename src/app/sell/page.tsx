'use client';
import { Camera, ChevronLeft, Crown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Vender() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <Button onClick={() => window.location.href='/'} variant="ghost" className="mb-6"><ChevronLeft/> Volver</Button>
      <h1 className="text-2xl font-black mb-6">¿QUÉ VENDES HOY?</h1>
      <div className="space-y-4">
        <div className="h-40 border-4 border-dashed rounded-[32px] flex flex-col items-center justify-center text-gray-300">
          <Camera/> <span className="text-[10px] font-black mt-2">SUBIR FOTOS</span>
        </div>
        <Input placeholder="Nombre del producto" className="rounded-xl" />
        <Input type="number" placeholder="Precio $MXN" className="rounded-xl" />
        
        <div className="p-4 bg-gray-50 rounded-[24px] border-2 border-[#00cba9] flex justify-between items-center">
          <div>
            <p className="font-black text-sm flex items-center gap-1"><Crown className="w-4 h-4 text-[#00cba9]"/> DESTACAR SEMANA</p>
            <p className="text-[10px] text-gray-500">Aparece arriba de todos por 7 días</p>
          </div>
          <span className="font-black text-[#00cba9]">$99 MXN</span>
        </div>
        
        <Button className="w-full bg-black text-white h-14 rounded-2xl font-black">PUBLICAR AHORA</Button>
      </div>
    </div>
  );
}
const manejarPagoDestacado = async () => {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      precioId: 'prod_99_id', // Aquí pondrás el ID que te dé Stripe para los $99
      successUrl: window.location.origin,
      cancelUrl: window.location.origin,
    }),
  });
  const data = await res.json();
  if (data.url) window.location.href = data.url; // ¡Esto abre la pasarela de pago!
};
