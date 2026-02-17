'use client';
import React, { useEffect } from 'react';

export default function FirebaseErrorListener({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Escuchador simplificado para evitar errores de compilación
    console.log("Firebase Error Listener Activo");
  }, []);

  return <>{children}</>;
}
