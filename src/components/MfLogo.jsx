import React from "react";

export default function MfLogo() {
  return (
    <img
      src="/img/logo-completa.svg"
      alt="Logo"
      // Mantendo estilos de tamanho e layout para Tailwind
      className="w-130"
      style={{ width: '250px', height: '150px', objectFit: 'contain' }}
    />
  );
}