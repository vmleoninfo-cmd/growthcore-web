// Tracking helper para GrowthCore Web.
// Dispara eventos de Meta Pixel + GA4 de forma segura (no-op si no están cargados).
// Los IDs se configuran por env vars y se inyectan en components/Analytics.tsx.

type LeadData = {
  content_name?: string;
  value?: number;
  currency?: string;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara el evento de conversión "Lead" en Meta Pixel y "generate_lead" en GA4.
 * Llamar al enviar un formulario (ContactForm / OnboardingForm).
 */
export function trackLead(data: LeadData = {}): void {
  if (typeof window === "undefined") return;
  const content_name = data.content_name ?? "growthcore_lead";

  // Meta Pixel
  try {
    if (window.fbq) {
      window.fbq("track", "Lead", {
        content_name,
        ...(data.value != null
          ? { value: data.value, currency: data.currency ?? "CLP" }
          : {}),
      });
    }
  } catch {
    /* tracking nunca debe romper el flujo del usuario */
  }

  // GA4 — vía gtag si existe; si no, dataLayer (compatible con GTM)
  try {
    if (window.gtag) {
      window.gtag("event", "generate_lead", { content_name });
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "generate_lead", content_name });
    }
  } catch {
    /* no-op */
  }
}
