import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight, ShieldCheck, Clock } from "lucide-react";

/* ================= Reveal au scroll ================= */
interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({ children, delay = 0, y = 28, className, once = true }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ================= Titre de section ================= */
interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : "text-left"} max-w-3xl ${centered ? "mx-auto" : ""}`}>
      <Reveal>
        <span className={`inline-flex items-center gap-3 ${centered ? "" : ""}`}>
          <span className="gold-rule" aria-hidden="true">
            <span />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">
            {eyebrow}
          </span>
          <span className="gold-rule" aria-hidden="true">
            <span />
          </span>
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] text-cream md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-base leading-relaxed text-smoke md:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ================= Compteur animé ================= */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {display.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

/* ================= Hero de page interne ================= */
interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image: string;
  crumb: string;
}

export function PageHero({ eyebrow, title, description, image, crumb }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-28">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img src={image} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-night/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.15),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-24">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          aria-label="Fil d'Ariane"
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-smoke"
        >
          <Link to="/" className="transition-colors hover:text-gold">
            Accueil
          </Link>
          <ChevronRight className="h-3 w-3 text-gold" />
          <span className="text-gold-pale">{crumb}</span>
        </motion.nav>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-8 text-[11px] font-bold uppercase tracking-[0.45em] text-gold"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.02] text-cream md:text-7xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-smoke md:text-lg"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 h-px w-40 origin-left bg-gradient-to-r from-gold to-transparent"
        />
      </div>
    </section>
  );
}

/* ================= Bandeau CTA final ================= */
export function CTABand() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 bg-[#0c0b08]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.16), transparent 55%)",
        }}
      />
      {/* Motif géométrique discret */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-10">
        <Reveal>
          <span className="gold-rule" aria-hidden="true">
            <span />
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
            Prêt à bénéficier d'un service{" "}
            <em className="text-gold-gradient not-italic md:italic">d'excellence</em> ?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-smoke">
            Confiez-nous votre projet : un conseiller dédié vous recontacte pour
            étudier votre demande et vous proposer une solution sur-mesure.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-gold">
              Demander un devis gratuit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-smoke">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" /> Réponse sous 24h
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" /> Devis sans engagement
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= Marquee ================= */
const MARQUEE_ITEMS = [
  "Digital",
  "Création de contenu",
  "Événements",
  "Conciergerie",
  "Mobilité",
  "L'excellence à votre service",
];

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee-mask relative overflow-hidden border-y border-gold/15 bg-[#0d0d0d] py-5">
      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center" aria-hidden={half === 1}>
            {items.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap px-8 font-display text-2xl font-medium italic tracking-wide text-cream/85 md:text-3xl">
                  {item}
                </span>
                <span className="h-2 w-2 rotate-45 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
