// GrowthCore Design Tokens v1
// Fuente canónica de todos los valores de marca.
// Usar: import { colors, typography } from "@/docs/brand/tokens"

export const colors = {
  // Núcleo
  navy:         "#0A1022",
  navyMid:      "#102A43",
  navySurface:  "#0F2137",
  // Acento
  green:        "#22C55E",
  greenSoft:    "#4ADE80",
  // Estado
  yellow:       "#FBBF24",
  red:          "#EF4444",
  // Neutros
  white:        "#F8FAFC",
  gray400:      "#94A3B8",
  gray600:      "#475569",
  gray800:      "#1E293B",
} as const;

export const typography = {
  fontHeading: "Space Grotesk",
  fontBody:    "DM Sans",
  weights: {
    regular:  400,
    medium:   500,
    semibold: 600,
    bold:     700,
  },
  scale: {
    xs:   "0.75rem",
    sm:   "0.875rem",
    base: "1rem",
    lg:   "1.25rem",
    xl:   "2.25rem",
    hero: "clamp(2.5rem, 6vw, 4.5rem)",
  },
  lineHeight: {
    tight:  1.1,
    normal: 1.5,
    loose:  1.75,
  },
} as const;

export const spacing = {
  sectionPadding: "6rem 1.5rem",
  cardPadding:    "2rem",
  maxWidth:       "72rem",
} as const;

export const brand = {
  name:    "GrowthCore",
  tagline: "GrowthCore convierte datos dispersos en decisiones claras.",
  domain:  "usegrowthcore.com",
  archetype: {
    primary:   "Sage (Sabio)",
    secondary: "Magician (Transformador)",
  },
} as const;
