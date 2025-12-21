
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Mail, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const faqs = [
  {
    question: "¿Cómo puedo publicar un artículo?",
    answer: "Para publicar un artículo, haz clic en el botón 'Vende' en la parte superior de la página. Rellena el formulario con los detalles de tu producto, ¡y listo! Las imágenes se generan automáticamente como marcadores de posición.",
  },
  {
    question: "¿Es seguro comprar en Tijuana Shop?",
    answer: "Tijuana Shop es una plataforma que conecta compradores y vendedores locales. Recomendamos siempre encontrarse en lugares públicos y seguros para realizar el intercambio. Nunca compartas información personal sensible.",
  },
  {
    question: "¿Cómo contacto a un vendedor?",
    answer: "En la página de cada producto, encontrarás botones para 'Enviar mensaje' o 'Llamar' al vendedor. Usar el chat de la aplicación es la forma más segura de comunicarte.",
  },
  {
    question: "¿Qué hago si tengo un problema con una compra?",
    answer: "Todas las transacciones son acuerdos directos entre el comprador y el vendedor. Tijuana Shop no se hace responsable de las disputas, pero puedes reportar a un usuario si crees que ha infringido nuestros términos y condiciones.",
  },
  {
    question: "¿Cómo puedo verificar mi ubicación?",
    answer: "Durante el registro, se te pedirá que verifiques tu ubicación. Esto se hace para asegurar que todos los usuarios sean de la comunidad de Tijuana, manteniendo la naturaleza local del mercado.",
  },
];

export default function HelpPage() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Button variant="outline" asChild>
            <Link href="/">← Volver</Link>
          </Button>
          <h1 className="text-xl font-bold font-headline">Centro de Ayuda</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">¿Cómo podemos ayudarte?</h2>
            <p className="text-muted-foreground mt-2">Busca en nuestras preguntas frecuentes o contáctanos.</p>
            <div className="relative mt-6 max-w-lg mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar por palabra clave..." className="pl-9" />
            </div>
        </div>

        <h3 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h3>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-16 text-center border-t pt-10">
            <h3 className="text-xl font-semibold">¿No encontraste lo que buscabas?</h3>
            <p className="text-muted-foreground mt-2">Nuestro equipo de soporte está aquí para ayudarte.</p>
            <Button className="mt-6" asChild>
                <a href="mailto:soporte@tijuanashop.com">
                    <Mail className="mr-2 h-4 w-4" /> Contactar a Soporte
                </a>
            </Button>
        </div>
      </main>
    </div>
  );
}

    