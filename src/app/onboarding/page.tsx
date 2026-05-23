import type { Metadata } from "next";
import OnboardingForm from "@/components/OnboardingForm";

export const metadata: Metadata = {
  title: "Activa tus servicios — GrowthCore",
  description: "Configura tu Smart Ads System, CRM, Agente WhatsApp y Diseño Web.",
  robots: "noindex, nofollow",
};

export default function OnboardingPage() {
  return (
    <div style={{ background: "#f0f0f3", minHeight: "100vh", padding: "56px 24px 80px" }}>
      <OnboardingForm />
      <div
        style={{
          maxWidth: 720,
          margin: "18px auto 0",
          padding: "0 48px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          color: "#808080",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        <span>Formulario · GrowthCore</span>
        <span>
          Ecosistema{" "}
          <strong style={{ color: "#0F172A", fontWeight: 700, letterSpacing: "0.1em" }}>
            SMART ADS SYSTEM
          </strong>
        </span>
      </div>
    </div>
  );
}
