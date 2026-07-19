export const SITE = {
  name: "Jaipur Call Girls Escorts",
  shortName: "Jaipur Call Girls",
  city: "Jaipur",
  state: "Rajasthan",
  country: "India",
  /** Update this to your live domain before deploying */
  url: "https://jaipurcallgirlsescorts.com",
  locale: "en_IN",
} as const;

export const WHATSAPP_NUMBER = "917414838654";
export const WHATSAPP_DISPLAY = "+91 74148 38654";

export const SEO_KEYWORDS = [
  "call girls in jaipur",
  "jaipur escort girls",
  "book call girls in jaipur",
  "jaipur call girls",
  "jaipur escorts",
  "escort girls jaipur",
  "jaipur escort service",
  "call girls jaipur",
  "jaipur call girl booking",
  "escort booking jaipur",
  "incall escort jaipur",
  "outcall escort jaipur",
  "jaipur female escorts",
  "vip escorts jaipur",
  "jaipur escort agency",
  "cheap call girls jaipur",
  "high profile escorts jaipur",
  "jaipur escort girls whatsapp",
  "book escort in jaipur",
  "jaipur call girls number",
].join(", ");

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE = "Hi, I want to book call girls in Jaipur.";
