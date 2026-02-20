'use client';
import React, { useEffect } from "react";

export default function FirebaseErrorListener({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Tijuana Shop: Sistema listo");
  }, []);

  return <>{children}</>;
}
