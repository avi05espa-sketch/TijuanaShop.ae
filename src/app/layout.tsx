'use client';
import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Tijuana Shop | Avi-Espa</title>
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
