import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
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
          <h1>Política de Privacidad</h1>
          <p>
            Tu privacidad es importante para nosotros. Es política de Tijuana Marketplace respetar tu privacidad con respecto a cualquier información que podamos recopilar de ti a través de nuestro sitio web.
          </p>
          <h2>1. Información que recopilamos</h2>
          <p>
            Solo pedimos información personal cuando realmente la necesitamos para brindarte un servicio. La recopilamos por medios justos y legales, con tu conocimiento y consentimiento.
          </p>
          <h2>2. Cómo usamos tu información</h2>
          <p>
            Usamos la información que recopilamos para operar y mantener los servicios de Tijuana Marketplace, para procesar transacciones, y para comunicarnos contigo. No compartimos ninguna información de identificación personal públicamente o con terceros, excepto cuando la ley lo exige.
          </p>
          <h2>3. Seguridad</h2>
          <p>
            La seguridad de tu información personal es importante para nosotros, pero recuerda que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger tu información personal, no podemos garantizar su seguridad absoluta.
          </p>

          <p><em>Última actualización: [Fecha]</em></p>
        </div>
      </main>
    </div>
  );
}
