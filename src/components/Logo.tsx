"use client";

import React from "react";

interface LogoProps {
  variant?: "full" | "icon";
  light?: boolean;  // true = sobre fondo oscuro (G blanca), false = sobre fondo claro (G navy)
  size?: number;
  className?: string;
}

export default function Logo({
  variant = "full",
  light = false,
  size = 32,
  className,
}: LogoProps) {
  const GREEN = "#22C55E";
  const gColor = light ? "#F8FAFC" : "#0A1022";
  const textColor = light ? "#F8FAFC" : "#0A1022";

  // Mark basado en viewBox 240x240 del logo oficial
  const Isotipo = () => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Connector lines (verdes, detrás de la G) */}
      <g stroke={GREEN} strokeWidth="2.5" strokeLinecap="round">
        <line x1="180" y1="65"  x2="130" y2="120" />
        <line x1="130" y1="120" x2="180" y2="175" />
        <line x1="180" y1="65"  x2="40"  y2="120" />
        <line x1="40"  y1="120" x2="180" y2="175" />
        <line x1="40"  y1="120" x2="130" y2="120" />
      </g>
      {/* G arc */}
      <path
        d="M 180 65 A 85 85 0 1 0 180 175 L 180 120 L 130 120"
        fill="none"
        stroke={gColor}
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Data nodes */}
      <g fill={GREEN}>
        <circle cx="180" cy="65"  r="10" />
        <circle cx="180" cy="175" r="10" />
        <circle cx="130" cy="120" r="10" />
        <circle cx="40"  cy="120" r="10" />
      </g>
    </svg>
  );

  if (variant === "icon") {
    return (
      <div className={className} aria-label="GrowthCore">
        <Isotipo />
      </div>
    );
  }

  const textSize = size * 0.58;

  return (
    <div
      className={`flex items-center ${className ?? ""}`}
      style={{ gap: size * 0.28 }}
      aria-label="GrowthCore"
    >
      <Isotipo />
      <span
        style={{
          fontFamily: "'Space Grotesk', -apple-system, sans-serif",
          fontWeight: 700,
          fontSize: textSize,
          color: textColor,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        GrowthCore
      </span>
    </div>
  );
}
