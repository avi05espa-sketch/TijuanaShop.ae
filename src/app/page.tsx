import Link from "next/link";
import {
  Car,
  Smartphone,
  Home as HomeIcon,
  Shirt,
  Blocks,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { Header } from "@/components/header";
import { getProducts, getCategories } from "@/lib/data";
import type { Category } from "@/lib/types";

const iconMap: { [key: string]: React.ElementType } = {
  Autos: Car,
  Electrónica: Smartphone,
  Hogar: HomeIcon,
  Ropa: Shirt,
  Otros: Blocks,
};

export default function Home() {
  const products = getProducts();
  const categories = getCategories();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline">
                Encuentra lo que buscas en Tijuana
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                El mercado local para comprar y vender artículos nuevos y usados.
              </p>
            </div>
          </div>
        </section>

        <section id="categories" className="w-full py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 font-headline">
              Categorías
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {categories.map((category: Category) => {
                const Icon = iconMap[category.name] || Blocks;
                return (
                  <Link href={`/search?category=${category.id}`} key={category.id}>
                    <div className="flex flex-col items-center justify-center p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow cursor-pointer aspect-square">
                      <Icon className="h-10 w-10 mb-4 text-primary" />
                      <span className="font-semibold text-center">
                        {category.name}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="recent" className="w-full pb-12 md:pb-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 font-headline">
              Productos Recientes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Link href="/sell" passHref>
        <Button
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
          size="icon"
          aria-label="Publicar un Producto"
        >
          <Plus className="h-8 w-8" />
        </Button>
      </Link>
    </div>
  );
}
