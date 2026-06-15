export const SITE_CONFIG = {
  waNumber: import.meta.env.PUBLIC_WA_NUMBER ?? "",
  email: import.meta.env.PUBLIC_EMAIL ?? "info@digitaldentalxperts.com",
  phone: import.meta.env.PUBLIC_PHONE ?? "",
  address: import.meta.env.PUBLIC_ADDRESS ?? "",
  city: import.meta.env.PUBLIC_CITY ?? "",
  googleReviewsUrl: import.meta.env.PUBLIC_GOOGLE_REVIEWS_URL ?? "",
  formspreeId: import.meta.env.PUBLIC_FORMSPREE_ID ?? "",
  domain: "digitaldentalxperts.com",
};

export function waLink(lang: string): string {
  const text =
    lang === "en"
      ? "Hello, I would like to request information about DDX Digital Dental Xperts."
      : "Hola, me gustaría solicitar información sobre DDX Digital Dental Xperts.";
  return `https://wa.me/${SITE_CONFIG.waNumber}?text=${encodeURIComponent(text)}`;
}
