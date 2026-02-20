"use client";
import React from "react";

export default function NotifyButton() {
  const handleClick = () => {
    console.log("Botón presionado");
    alert("Evento enviado");
  };

  return <button onClick={handleClick}>Enviar evento</button>;
}
