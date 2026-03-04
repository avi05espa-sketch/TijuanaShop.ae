import React from 'react';
import { Search, MapPin, ShoppingBag } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Tijuanashops</h1>
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Busca en Tijuana..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button className="flex items-center text-gray-600 font-medium">
            <MapPin className="h-5 w-5 mr-1" />
            Tijuana
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-blue-600 rounded-3xl p-8 text-white mb-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Tu Marketplace Local en Línea</h2>
          <p className="text-xl opacity-90">Apoyando al comercio de Tijuana. De Avi-Espa.</p>
          <button className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
            Ver Ofertas
          </button>
        </div>

        <h3 className="text-2xl font-bold mb-6 text-gray-800">Productos Destacados</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition">
              <div className="aspect-square bg-gray-200" />
              <div className="p-4">
                <p className="font-bold text-lg text-gray-900">$180 MXN</p>
                <p className="text-gray-600 text-sm">Producto local {i}</p>
                <button className="w-full mt-4 bg-blue-50 text-blue-600 py-2 rounded-lg font-medium text-sm">
                  Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
