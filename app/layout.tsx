'use client';
import React from "react";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="es">
      <head>
        <title>Tijuana Shop | Tu Marketplace Local en Línea</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
