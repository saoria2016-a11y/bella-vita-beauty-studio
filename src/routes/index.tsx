import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Flower2,
  Hand,
  Leaf,
  MapPin,
  Mail,
  Clock,
  Menu,
  MessageCircle,
  Palette,
  Scissors,
  Sparkles,
  HeartHandshake,
  X,
} from "lucide-react";

import heroImg from "@/assets/hero-salone.jpg";
import chiSiamoImg from "@/assets/chi-siamo.jpg";
import capelliImg from "@/assets/galleria-capelli.jpg";
import unghieImg from "@/assets/galleria-unghie.jpg";
import visoImg from "@/assets/galleria-viso.jpg";
import makeupImg from "@/assets/galleria-makeup.jpg";
import { getWhatsAppLink, siteConfig } from "@/config/site";
import { useReveal } from "@/hooks/use-reveal";

const TITLE = "Bella Vita Beauty Studio | Salone di bellezza in Italia";
const DESCRIPTION =
  "Bella Vita Beauty Studio: hair styling, trattamenti viso, manicure e make-up in un'atmosfera elegante e rilassante. Prenota il tuo appuntamento.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#servizi", label: "Servizi" },
  { href: "#perche-sceglierci", label: "Perché noi" },
  { href: "#galleria", label: "Galleria" },
  { href: "#contatti", label: "Contatti" },
];

const SERVIZI = [
  {
    icon: Scissors,
    title: "Hair Styling & Colore",
    text: "Tagli, pieghe e colorazioni pensati sulla tua personalità, con tecniche delicate che rispettano la salute dei capelli.",
  },
  {
    icon: Flower2,
    title: "Trattamenti Viso",
    text: "Rituali di pulizia, idratazione e luminosità per una pelle visibilmente più fresca e vitale.",
  },
  {
    icon: Hand,
    title: "Manicure & Pedicure",
    text: "Cura completa di mani e piedi, dallo smalto semipermanente ai trattamenti nutrienti più rilassanti.",
  },
  {
    icon: Palette,
    title: "Make-up",
    text: "Trucco giorno, sera ed eventi speciali: un risultato naturale e raffinato che valorizza i tuoi lineamenti.",
  },
];

const VANTAGGI = [
  {
    icon: HeartHandshake,
    title: "Un percorso su misura",
    text: "Ogni trattamento inizia da un ascolto attento: ci prendiamo il tempo di capire cosa desideri davvero.",
  },
  {
    icon: Leaf,
    title: "Prodotti selezionati",
    text: "Scegliamo con cura formule di qualità, delicate sulla pelle e sui capelli, per risultati che durano.",
  },
  {
    icon: Sparkles,
    title: "Un'atmosfera di quiete",
    text: "Uno spazio luminoso e accogliente, dove concederti una pausa dalla frenesia di tutti i giorni.",
  },
];

const GALLERIA = [
  { src: capelliImg, w: 1024, h: 1280, alt: "Parrucchiera che modella capelli castani ondulati di una cliente", label: "Capelli" },
  { src: unghieImg, w: 1024, h: 1024, alt: "Mani con manicure nude color champagne appoggiate su lino avorio", label: "Unghie" },
  { src: visoImg, w: 1024, h: 1280, alt: "Cliente rilassata durante un trattamento viso con maschera idratante", label: "Viso" },
  { src: makeupImg, w: 1024, h: 1024, alt: "Truccatrice che applica il blush con un pennello a una cliente", label: "Make-up" },
];

function Index() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappLink = getWhatsAppLink(
    siteConfig.whatsappNumber,
    "Buongiorno, vorrei prenotare un appuntamento da Bella Vita Beauty Studio.",
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="font-display text-2xl tracking-wide" aria-label="Bella Vita Beauty Studio, torna all'inizio">
            Bella Vita
            <span className="ml-2 hidden align-middle font-sans text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground sm:inline">
              Beauty Studio
            </span>
          </a>
          <nav aria-label="Navigazione principale" className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm tracking-wide">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-muted-foreground transition-colors duration-300 hover:text-foreground">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#contatti"
            className="hidden rounded-sm bg-primary px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-all duration-500 hover:bg-champagne-deep md:inline-block"
          >
            Prenota ora
          </a>
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav id="menu-mobile" aria-label="Navigazione mobile" className="border-t border-border/60 bg-background md:hidden">
            <ul className="flex flex-col px-6 py-4">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setMenuOpen(false)} className="block py-3 font-display text-xl">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section aria-labelledby="hero-title" className="relative flex min-h-[100svh] items-end overflow-hidden md:items-center">
          <img
            src={heroImg}
            width={1600}
            height={1104}
            alt="Interno luminoso del salone con poltrona in velluto beige, specchio ad arco e dettagli dorati"
            className="animate-slow-zoom absolute inset-0 h-full w-full object-cover object-[70%_center]"
            fetchPriority="high"
          />
          <div className="hero-veil absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10">
            <div className="max-w-xl">
              <p className="eyebrow animate-hero-in">Salone di bellezza · Italia</p>
              <h1
                id="hero-title"
                className="animate-hero-in mt-6 text-5xl leading-[1.05] [animation-delay:150ms] sm:text-6xl lg:text-7xl"
              >
                La tua bellezza, <em className="text-champagne-deep">con eleganza</em> e cura.
              </h1>
              <p className="animate-hero-in mt-6 max-w-md text-lg leading-relaxed text-muted-foreground [animation-delay:300ms]">
                Un rifugio di stile e benessere dove ogni dettaglio è pensato per farti sentire bene, dentro e fuori.
              </p>
              <div className="animate-hero-in mt-10 flex flex-wrap items-center gap-6 [animation-delay:450ms]">
                <a
                  href="#contatti"
                  className="rounded-sm bg-primary px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:bg-champagne-deep"
                >
                  Prenota ora
                </a>
                <a href="#servizi" className="border-b border-foreground/40 pb-1 text-sm tracking-wide transition-colors hover:border-champagne-deep hover:text-champagne-deep">
                  Scopri i servizi
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Chi siamo */}
        <section id="chi-siamo" aria-labelledby="chi-siamo-title" className="py-24 lg:py-36">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 lg:gap-24 lg:px-10">
            <div className="reveal relative">
              <div className="absolute -bottom-5 -left-5 h-full w-full bg-champagne-gradient" aria-hidden="true" />
              <img
                src={chiSiamoImg}
                width={1024}
                height={1280}
                loading="lazy"
                alt="Flaconi di prodotti per la cura della pelle su una mensola in travertino con erba pampas"
                className="relative aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="reveal">
              <p className="eyebrow">Chi siamo</p>
              <h2 id="chi-siamo-title" className="mt-5 text-4xl leading-tight lg:text-5xl">
                Un luogo dedicato a te, dove il tempo rallenta.
              </h2>
              <span className="gold-rule mt-8" aria-hidden="true" />
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                Bella Vita Beauty Studio nasce dal desiderio di unire la tradizione italiana della cura di sé a un'estetica
                essenziale e raffinata. Il nostro team accoglie ogni cliente con attenzione e discrezione, per creare
                insieme un look che rispecchi davvero la sua personalità.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Crediamo in una bellezza naturale, mai eccessiva: quella che ti fa sentire a tuo agio ogni giorno.
              </p>
            </div>
          </div>
        </section>

        {/* Servizi */}
        <section id="servizi" aria-labelledby="servizi-title" className="bg-secondary py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="reveal mx-auto max-w-2xl text-center">
              <p className="eyebrow">Servizi</p>
              <h2 id="servizi-title" className="mt-5 text-4xl lg:text-5xl">
                I nostri trattamenti
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Esperienze di bellezza curate in ogni dettaglio, per valorizzare il tuo stile naturale.
              </p>
            </div>
            <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVIZI.map((s, i) => (
                <li
                  key={s.title}
                  className="reveal group bg-card p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-soft"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <s.icon className="h-7 w-7 text-champagne-deep" strokeWidth={1.25} aria-hidden="true" />
                  <h3 className="mt-8 text-2xl">{s.title}</h3>
                  <span className="gold-rule mt-5 transition-all duration-700 group-hover:w-16" aria-hidden="true" />
                  <p className="mt-5 leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Perché sceglierci */}
        <section id="perche-sceglierci" aria-labelledby="perche-title" className="py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="reveal max-w-2xl">
              <p className="eyebrow">Perché sceglierci</p>
              <h2 id="perche-title" className="mt-5 text-4xl lg:text-5xl">
                La cura che meriti, in ogni momento.
              </h2>
            </div>
            <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
              {VANTAGGI.map((v, i) => (
                <li key={v.title} className="reveal md:px-10 md:first:pl-0 md:last:pr-0" style={{ transitionDelay: `${i * 120}ms` }}>
                  <span className="font-display text-5xl text-champagne-deep">0{i + 1}</span>
                  <div className="mt-6 flex items-center gap-3">
                    <v.icon className="h-5 w-5 text-champagne-deep" strokeWidth={1.25} aria-hidden="true" />
                    <h3 className="text-2xl">{v.title}</h3>
                  </div>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{v.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Galleria */}
        <section id="galleria" aria-labelledby="galleria-title" className="bg-secondary py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="reveal mx-auto max-w-2xl text-center">
              <p className="eyebrow">Galleria</p>
              <h2 id="galleria-title" className="mt-5 text-4xl lg:text-5xl">
                Momenti di bellezza
              </h2>
            </div>
            <ul className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
              {GALLERIA.map((g, i) => (
                <li key={g.label} className={`reveal ${i % 2 === 1 ? "lg:mt-16" : ""}`} style={{ transitionDelay: `${i * 100}ms` }}>
                  <figure className="group relative overflow-hidden">
                    <img
                      src={g.src}
                      width={g.w}
                      height={g.h}
                      loading="lazy"
                      alt={g.alt}
                      className="img-zoom aspect-[3/4] w-full object-cover group-hover:scale-105"
                    />
                    <figcaption className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 text-xs uppercase tracking-[0.25em]">
                      {g.label}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contatti */}
        <section id="contatti" aria-labelledby="contatti-title" className="bg-charcoal py-24 text-charcoal-foreground lg:py-36">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 lg:px-10">
            <div className="reveal">
              <p className="eyebrow">Contatti</p>
              <h2 id="contatti-title" className="mt-5 text-4xl leading-tight lg:text-5xl">
                Prenota il tuo momento di bellezza.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal-foreground/70">
                Scrivici su WhatsApp per fissare un appuntamento o ricevere un consiglio personalizzato. Ti risponderemo il
                prima possibile.
              </p>
              <div className="mt-10">
                {whatsappLink ? (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-sm bg-champagne px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-charcoal transition-all duration-500 hover:-translate-y-0.5 hover:bg-beige"
                  >
                    <MessageCircle className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    Scrivici su WhatsApp
                  </a>
                ) : (
                  <div>
                    <button
                      type="button"
                      disabled
                      aria-describedby="whatsapp-nota"
                      className="inline-flex cursor-not-allowed items-center gap-3 rounded-sm bg-champagne/40 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-charcoal-foreground/70"
                    >
                      <MessageCircle className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                      Scrivici su WhatsApp
                    </button>
                    <p id="whatsapp-nota" className="mt-3 text-sm text-charcoal-foreground/50">
                      Numero WhatsApp in fase di configurazione.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="reveal md:pl-12">
              <p className="mb-8 inline-block border border-champagne/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-champagne">
                Dati dimostrativi
              </p>
              <address className="not-italic">
                <ul className="space-y-8">
                  <li className="flex gap-5">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-champagne" strokeWidth={1.25} aria-hidden="true" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-charcoal-foreground/50">Indirizzo</p>
                      <p className="mt-2 text-lg">{siteConfig.address}</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-champagne" strokeWidth={1.25} aria-hidden="true" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-charcoal-foreground/50">Email</p>
                      <p className="mt-2 text-lg">{siteConfig.email}</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-champagne" strokeWidth={1.25} aria-hidden="true" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-charcoal-foreground/50">Orari</p>
                      <p className="mt-2 text-lg">{siteConfig.hours}</p>
                    </div>
                  </li>
                </ul>
              </address>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-charcoal text-charcoal-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-charcoal-foreground/10 px-6 py-8 text-sm text-charcoal-foreground/50 sm:flex-row lg:px-10">
          <p className="font-display text-xl text-charcoal-foreground">Bella Vita</p>
          <p>© {new Date().getFullYear()} Bella Vita Beauty Studio · Sito dimostrativo</p>
        </div>
      </footer>
    </div>
  );
}
