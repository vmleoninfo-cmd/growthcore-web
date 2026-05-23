"use client";

import React from "react";

interface LogoProps {
  variant?: "full" | "icon";
  light?: boolean;
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
  const navy = light ? "#FFFFFF" : "#0A1022";

  const Isotipo = () => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* G shape */}
      <path
        d="M30 12C27.5 8.5 23.5 6.5 19 6.5C12 6.5 6.5 12 6.5 20C6.5 28 12 33.5 19 33.5C25.5 33.5 30.5 29 31.5 23H20V18H33.5V20C33.5 28.5 27 35.5 19 35.5C10.7 35.5 4.5 29.3 4.5 20C4.5 10.7 10.7 4.5 19 4.5C24 4.5 28.5 6.8 31.5 10.5L30 12Z"
        fill={navy}
      />
      {/* Data nodes */}
      <circle cx="19"   cy="4.5"  r="2"   fill={GREEN} />
      <circle cx="33.5" cy="20"   r="2"   fill={GREEN} />
      <circle cx="20"   cy="18"   r="1.5" fill={GREEN} fillOpacity="0.7" />
      <circle cx="19"   cy="35.5" r="2"   fill={GREEN} />
      {/* Connector lines */}
      <line x1="19"   y1="6.5"  x2="19"   y2="9"   stroke={GREEN} strokeWidth="1" strokeOpacity="0.4" />
      <line x1="31.5" y1="20"   x2="28"   y2="20"  stroke={GREEN} strokeWidth="1" strokeOpacity="0.4" />
      <line x1="19"   y1="33.5" x2="19"   y2="31"  stroke={GREEN} strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  );

  if (variant === "icon") {
    return (
      <div className={className} aria-label="GrowthCore">
        <Isotipo />
      </div>
    );
  }

  const textSize = size * 0.55;

  return (
    <div
      className={`flex items-center ${className ?? ""}`}
      style={{ gap: size * 0.3 }}
      aria-label="GrowthCore"
    >
      <Isotipo />
      <span
        style={{
          fontFamily: "'Space Grotesk', -apple-system, sans-serif",
          fontWeight: 700,
          fontSize: textSize,
          color: navy,
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
