"use client";
import React from "react";

export default function NotifyButton() {
  const handleClick = () => {
    console.log("Notificación simulada");
    alert("¡Evento enviado con éxito!");
  };

  return (
    <button 
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Enviar evento
    </button>
  );
}
