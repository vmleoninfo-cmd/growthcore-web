import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import Analytics from "../components/Analytics";
import ScrollProgress from "../components/ScrollProgress";
import "./globals.css";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usegrowthcore.com"),
  title: "GrowthCore — Detecta dónde se pierden oportunidades",
  description:
    "Ecosistema operativo con IA: Smart Ads System, Agente WhatsApp, CRM y Web conectados. Detecta qué campaña falla, qué lead seguir y cuándo actuar — y te dice qué hacer.",
  keywords: [
    "ecosistema operativo ia",
    "agente whatsapp ia",
    "crm con ia",
    "smart ads meta",
    "diseño web chile",
    "growthcore",
  ],
  openGraph: {
    title: "GrowthCore — Detecta dónde se pierden oportunidades",
    description:
      "Ecosistema con IA que conecta campañas, leads, clientes y web. Operando desde el día 1.",
    url: "https://usegrowthcore.com",
    siteName: "GrowthCore",
    locale: "es_CL",
    type: "website",
    images: ["/og-cover.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "GrowthCore",
      url: "https://usegrowthcore.com",
      logo: "https://usegrowthcore.com/og-cover.png",
      description:
        "Ecosistema operativo con IA que conecta campañas de Meta Ads, CRM, agente de WhatsApp y web para negocios que ya venden.",
      areaServed: "CL",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿GrowthCore gestiona mis campañas de Meta Ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. GrowthCore detecta qué está fallando en tus campañas y te dice exactamente qué hacer. Tú mantienes el control: no necesitas darnos acceso a tu cuenta de Meta Ads.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tiempo demora la implementación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GrowthCore implementa su parte —setup técnico e integración— en días hábiles. La activación final depende de la verificación y aprobación de Meta/WhatsApp (verificación de negocio: rango observado de 2 a 15 días hábiles, sin SLA oficial).",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué necesito tener antes de empezar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Meta Ads activo o pausado (cualquier presupuesto) y WhatsApp Business. No necesitas web, CRM previo ni conocimientos técnicos. Todo lo demás lo instalamos nosotros.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
