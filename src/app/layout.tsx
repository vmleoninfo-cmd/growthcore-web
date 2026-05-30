import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import Analytics from "../components/Analytics";
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
  title: "GrowthCore — Automatización con IA para tu negocio",
  description:
    "Smart Ads System, Agente WhatsApp, CRM con IA y Diseño Web. Un sistema completo para que tu negocio crezca con inteligencia artificial.",
  keywords: [
    "automatización marketing",
    "agente whatsapp ia",
    "crm inteligencia artificial",
    "smart ads meta",
    "diseño web chile",
    "growthcore",
  ],
  openGraph: {
    title: "GrowthCore — Automatización con IA para tu negocio",
    description:
      "Sistema completo de crecimiento: Meta Ads, WhatsApp, CRM y Web con inteligencia artificial.",
    url: "https://usegrowthcore.com",
    siteName: "GrowthCore",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
