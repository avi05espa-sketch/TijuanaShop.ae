'use client';
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>Tijuana Shop | Marketplace</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

