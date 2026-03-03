"use client";
import { Product } from "@/lib/data";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card border rounded-2xl p-6 max-w-md w-full shadow-xl">
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-primary font-bold text-xl mb-4">${product.price}</p>
        <button 
          onClick={onClose}
          className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-bold"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

