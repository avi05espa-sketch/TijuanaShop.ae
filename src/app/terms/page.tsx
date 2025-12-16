import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Button variant="outline" asChild>
            <Link href="/">← Volver al inicio</Link>
          </Button>
        </div>
      </header>
      <main className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Términos y Condiciones</h1>
          <p>
            Bienvenido a Tijuana Marketplace. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de Tijuana Marketplace.
          </p>
          <h2>1. Aceptación de los Términos</h2>
          <p>
            Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones. No continúes usando Tijuana Marketplace si no estás de acuerdo con todos los términos y condiciones establecidos en esta página.
          </p>
          <h2>2. Publicaciones</h2>
          <p>
            Eres responsable del contenido que publicas. Al publicar, garantizas que la información es precisa y no infringe ninguna ley. Nos reservamos el derecho de eliminar cualquier publicación que consideremos inapropiada.
          </p>
          <h2>3. Conducta del Usuario</h2>
          <p>
            No debes usar este sitio web de ninguna manera que cause, o pueda causar, daño al sitio web o menoscabo de la disponibilidad o accesibilidad de Tijuana Marketplace; o de cualquier manera que sea ilegal, fraudulenta o dañina.
          </p>
          
          <p><em>Última actualización: [Fecha]</em></p>
        </div>
      </main>
    </div>
  );
}
