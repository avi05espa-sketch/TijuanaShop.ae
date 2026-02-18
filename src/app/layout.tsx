'use client';
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css"; // Esto mantiene tus estilos

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Esto reemplaza el código que fallaba, es simple y funciona
    console.log("Ruta actual:", pathname);
  }, [pathname]);

  return (
    <html lang="es">
      <head>
        <title>Tijuana Shop | Tu Marketplace Local en Línea</title>
        <meta name="description" content="Avi-Espa - Tu Marketplace Local en Línea" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
