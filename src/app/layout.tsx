'use client';
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { PT_Sans } from 'next/font/google';
import "./globals.css";

// Cargamos la fuente que te gusta
const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Esto reemplaza lo que daba error y mantiene el sistema limpio
    console.log("Ruta actual:", pathname);
  }, [pathname]);

  return (
    <html lang="es" className={ptSans.variable}>
      <head>
        <title>Tijuana Shop | Tu Marketplace Local en Línea</title>
        <meta name="description" content="Avi-Espa - Tu Marketplace Local en Línea" />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">
            {children}
          </main>
          {/* Aquí puedes volver a activar el Footer y Chatbot después */}
        </div>
      </body>
    </html>
  );
}
