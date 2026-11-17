/**
 * Configurazione dei contatti del sito.
 * I dati qui sotto sono DIMOSTRATIVI: sostituirli con quelli reali del salone.
 * Il pulsante WhatsApp resta disattivato finché `whatsappNumber` è vuoto.
 */
export const siteConfig = {
  name: "Bella Vita Beauty Studio",
  /** Numero WhatsApp in formato internazionale, es. "+39 333 1234567". Lasciare vuoto finché non è disponibile. */
  whatsappNumber: "",
  address: "Via [da inserire], [CAP] [Città], Italia",
  email: "[email da inserire]",
  hours: "[orari da inserire]",
};

/** Restituisce il link wa.me solo con un numero valido; altrimenti null (nessun link fittizio). */
export function getWhatsAppLink(number: string, message?: string): string | null {
  const digits = number.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
}
