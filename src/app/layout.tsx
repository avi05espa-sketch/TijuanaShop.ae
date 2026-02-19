'use client';
import React from "react";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>Tijuana Shop | Avi-Espa</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
