import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Gem,
  Network,
  Quote,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { Counter, CTABand, Marquee, Reveal, SectionHeading } from "../components/Extras";
import { InstagramIcon } from "../components/SocialIcons";
import { CONTACT, SERVICES, STATS, TESTIMONIALS } from "../data/site";
import { useSEO } from "../lib/seo";
import { SKIP_LOADER } from "../lib/loader";

/* ==================== HERO ==================== */
function Hero() {
  const base = SKIP_LOADER ? 0.1 : 1.9;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const titleWords = [
    { text: "L'excellence", gold: true },
    { text: "à votre", gold: false },
    { text: "service", gold: false },
  ];

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      {/* Fond parallaxe */}
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <img
          src="/images/hero.jpg"
          alt="Salon événementiel de prestige baigné de lumières dorées"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/35 to-night" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,10,0.55)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />

      {/* Contenu */}
      <motion.div
        style={{ opacity: fade }}
        className="relative flex h-full flex-col items-center justify-center px-5 text-center"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.9em" }}
          animate={{ opacity: 1, letterSpacing: "0.45em" }}
          transition={{ delay: base, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10px] font-bold uppercase text-gold md:text-xs"
        >
          KB PRESTIGE · Agence premium multi-services
        </motion.p>

        <h1 className="mt-8 font-display text-[13vw] font-medium leading-[0.98] text-cream sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          {titleWords.map((word, i) => (
            <span key={word.text} className="inline-block overflow-hidden pb-2 align-bottom">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: base + 0.15 + i * 0.14,
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block whitespace-pre ${
                  word.gold ? "text-gold-gradient italic pr-3" : ""
                }`}
              >
                {word.text}
                {i < titleWords.length - 1 ? " " : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: base + 0.7, duration: 1 }}
          className="mt-6 max-w-2xl text-sm leading-relaxed tracking-wide text-cream/75 md:text-lg"
        >
          Solutions premium : Digital, Création de contenu, Événements,
          Conciergerie &amp; Mobilité — en France.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: base + 0.95, duration: 1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link to="/services" className="btn-gold">
            Découvrir nos services
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn-ghost">
            Demander un devis
          </Link>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: base + 1.5, duration: 1 }}
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-gold-pale/70">
          Défiler
        </span>
        <div className="relative h-14 w-px overflow-hidden bg-gold/20">
          <span className="animate-scroll-drop absolute left-0 top-0 h-1/2 w-px bg-gradient-to-b from-transparent via-gold to-gold-pale" />
        </div>
      </motion.div>
    </section>
  );
}

/* ==================== PRÉSENTATION + STATS ==================== */
function Presentation() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Bienvenue chez KB PRESTIGE"
              title={
                <>
                  L'art du service, <br />
                  <em className="text-gold-gradient italic">à la française</em>
                </>
              }
            />
            <Reveal delay={0.25}>
              <p className="mt-6 text-base leading-relaxed text-smoke md:text-lg">
                KB PRESTIGE est née d'une conviction simple : chaque client
                mérite un service d'exception. Notre agence réunit cinq univers
                — digital, création de contenu, événementiel, conciergerie et
                mobilité — autour d'une même exigence :{" "}
                <span className="text-gold-pale">l'excellence, sans compromis</span>.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="mt-4 text-base leading-relaxed text-smoke md:text-lg">
                Particuliers exigeants, entreprises, organisateurs
                d'événements culturels : nous concevons des réponses
                sur-mesure, délivrées avec réactivité, discrétion et
                raffinement, de Paris aux Pays de la Loire et dans toute la
                France.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-8 flex items-center gap-5">
                <span className="h-px w-16 bg-gold/50" />
                <span className="font-display text-xl italic text-gold-pale">
                  L'excellence à votre service.
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative">
            <div className="relative ml-auto max-w-xl">
              <div className="absolute -inset-4 border border-gold/20" />
              <div className="absolute -right-4 -top-4 h-24 w-24 border-r border-t border-gold/60" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b border-l border-gold/60" />
              <img
                src="/images/about.jpg"
                alt="Fondateur de KB PRESTIGE en costume sur mesure, élégance noire et or"
                className="relative h-[420px] w-full object-cover md:h-[520px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 border border-gold/30 bg-night/85 px-6 py-4 backdrop-blur">
                <p className="font-display text-3xl font-medium text-gold-gradient">7j/7</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-smoke">
                  À votre écoute
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Chiffres clés */}
        <div className="mt-20 grid grid-cols-2 border border-gold/15 bg-onyx/40 md:mt-28 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.1}
              className={`flex flex-col items-center gap-2 px-4 py-10 text-center md:py-14 ${
                i < STATS.length - 1 ? "border-gold/15 max-lg:odd:border-r lg:border-r" : ""
              } ${i < 2 ? "max-lg:border-b" : ""} border-gold/15`}
            >
              <span className="font-display text-5xl font-medium text-gold-gradient md:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-smoke md:text-xs">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== SERVICES ==================== */
function ServicesPreview() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-gold/4 blur-[140px]" />
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Nos domaines d'expertise"
          title={
            <>
              Cinq univers, <em className="text-gold-gradient italic">une exigence</em>
            </>
          }
          description="Du digital à la mobilité, chaque prestation KB PRESTIGE est pensée comme une œuvre sur-mesure, exécutée par des passionnés de l'excellence."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={(i % 3) * 0.12}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <Link
                to={`/services#${service.slug}`}
                className="lux-card group relative block h-[380px] overflow-hidden rounded-sm md:h-[420px]"
                aria-label={`${service.title} — en savoir plus`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/45 to-night/10" />

                <div className="absolute left-6 top-6 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center border border-gold/40 bg-night/70 backdrop-blur transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]">
                    <service.icon className="h-5 w-5 text-gold transition-colors duration-500 group-hover:text-night" />
                  </span>
                  <span className="font-display text-sm italic text-gold/70">
                    {service.index}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl font-medium text-cream md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-smoke">
                    {service.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-gold transition-all duration-500 group-hover:gap-4">
                    En savoir plus
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* Carte CTA dans la grille */}
          <Reveal delay={0.24} className="md:col-span-2 lg:col-span-3">
            <Link
              to="/contact"
              className="group relative flex flex-col items-center justify-center gap-5 overflow-hidden rounded-sm border border-gold/40 bg-gradient-to-r from-night via-gold/10 to-night px-8 py-12 text-center transition-all duration-500 hover:border-gold md:flex-row md:gap-10 md:py-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14),transparent_65%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <p className="relative font-display text-3xl font-medium leading-tight text-cream md:text-4xl">
                Un projet <em className="text-gold-gradient italic">sur-mesure</em> ?
              </p>
              <p className="relative max-w-sm text-sm text-smoke md:text-left">
                Parlons de vos envies : notre équipe compose la prestation idéale,
                à la carte.
              </p>
              <span className="btn-gold relative shrink-0">
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==================== POURQUOI NOUS CHOISIR ==================== */
const ADVANTAGES = [
  {
    icon: Gem,
    num: "01",
    title: "Service sur-mesure",
    description:
      "Aucune prestation standardisée : chaque mission est composée à la carte, selon vos goûts, votre agenda et votre niveau d'exigence.",
    large: true,
  },
  {
    icon: Zap,
    num: "02",
    title: "Réactivité 7j/7",
    description:
      "Une ligne directe, une réponse sous 24h, des équipes mobilisables en urgence : votre temps est notre priorité absolue.",
  },
  {
    icon: Network,
    num: "03",
    title: "Réseau qualifié",
    description:
      "Artistes, artisans, chauffeurs, techniciens : un cercle de partenaires triés sur le volet, audités et fidèles à nos standards.",
  },
  {
    icon: BadgeCheck,
    num: "04",
    title: "Satisfaction garantie",
    description:
      "Un engagement qualité contractuel : nous ne considérons une prestation terminée que lorsque vous êtes pleinement satisfait.",
    large: true,
  },
];

function WhyUs() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Pourquoi KB PRESTIGE ?"
          title={
            <>
              L'évidence de <em className="text-gold-gradient italic">l'excellence</em>
            </>
          }
          description="Quatre engagements font de KB PRESTIGE le partenaire privilégié des clients les plus exigeants."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((adv, i) => (
            <Reveal
              key={adv.num}
              delay={i * 0.1}
              className={adv.large ? "lg:col-span-2" : "lg:col-span-1"}
            >
              <div className="lux-card group relative h-full overflow-hidden rounded-sm p-8 md:p-10">
                <span className="pointer-events-none absolute -right-4 -top-6 font-display text-[7rem] font-semibold leading-none text-gold/6 transition-colors duration-700 group-hover:text-gold/12">
                  {adv.num}
                </span>
                <div className="relative">
                  <span className="flex h-14 w-14 items-center justify-center border border-gold/40 transition-all duration-500 group-hover:rotate-6 group-hover:bg-gold group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    <adv.icon className="h-6 w-6 text-gold transition-colors duration-500 group-hover:text-night" />
                  </span>
                  <h3 className="mt-7 font-display text-2xl font-medium text-cream md:text-[1.7rem]">
                    {adv.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-smoke">
                    {adv.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== INSTAGRAM ==================== */
const IG_IMAGES = [
  { src: "/images/projet-concert.jpg", alt: "Concert kabyle organisé par KB PRESTIGE" },
  { src: "/images/projet-mariage.jpg", alt: "Mariage d'exception, arts de la table dorés" },
  { src: "/images/service-mobilite.jpg", alt: "Berline de prestige avec chauffeur à Paris" },
  { src: "/images/service-events.jpg", alt: "Gala sous les projecteurs dorés" },
  { src: "/images/service-conciergerie.jpg", alt: "Conciergerie privée haut de gamme" },
  { src: "/images/projet-web.jpg", alt: "Création digitale premium noir et or" },
];

function InstagramSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Instagram"
            title={
              <>
                Suivez <em className="text-gold-gradient italic">l'univers</em> KB PRESTIGE
              </>
            }
            description="Coulisses, réalisations et moments d'exception : rejoignez notre communauté de 2 334 abonnés."
          />
          <Reveal delay={0.3}>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost shrink-0"
            >
              <InstagramIcon className="h-4 w-4" />
              {CONTACT.instagramHandle}
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {IG_IMAGES.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.07}>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir sur Instagram : ${img.alt}`}
                className="group relative block aspect-square overflow-hidden border border-gold/10"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-[1.1s] group-hover:scale-115"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-night/70 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
                    <InstagramIcon className="h-5 w-5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== TÉMOIGNAGES ==================== */
function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next, paused]);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.07),transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl px-5 md:px-10">
        <SectionHeading
          eyebrow="Témoignages"
          title={
            <>
              Ils nous ont fait <em className="text-gold-gradient italic">confiance</em>
            </>
          }
        />

        <Reveal delay={0.2}>
          <div
            className="relative mt-14 border border-gold/20 bg-onyx/50 px-6 py-12 md:px-16 md:py-16"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <span className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center border border-gold/40 bg-night">
              <Quote className="h-6 w-6 text-gold" />
            </span>

            <div className="min-h-[210px] md:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-1" aria-label="Note : 5 étoiles sur 5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="mt-6 font-display text-xl font-medium italic leading-relaxed text-cream md:text-2xl">
                    « {t.quote} »
                  </blockquote>
                  <figcaption className="mt-7">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-pale">
                      {t.name}
                    </p>
                    <p className="mt-1 text-xs text-smoke">{t.role}</p>
                    <p className="mt-2 inline-block border border-gold/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                      {t.service}
                    </p>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={prev}
                aria-label="Témoignage précédent"
                className="flex h-11 w-11 items-center justify-center border border-gold/30 text-gold transition-all hover:bg-gold hover:text-night"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2.5">
                {TESTIMONIALS.map((_, d) => (
                  <button
                    key={d}
                    onClick={() => setIndex(d)}
                    aria-label={`Aller au témoignage ${d + 1}`}
                    className={`h-1.5 transition-all duration-500 ${
                      d === index ? "w-8 bg-gold" : "w-1.5 bg-gold/30 hover:bg-gold/60"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Témoignage suivant"
                className="flex h-11 w-11 items-center justify-center border border-gold/30 text-gold transition-all hover:bg-gold hover:text-night"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-10 flex items-center justify-center gap-2 text-center text-xs uppercase tracking-[0.25em] text-smoke">
            <Users className="h-4 w-4 text-gold" />
            Plus de 250 clients accompagnés en France
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ==================== PAGE ==================== */
export default function Home() {
  useSEO(
    "L'excellence à votre service",
    "KB PRESTIGE, agence premium : Digital, création de contenu, événements, conciergerie et mobilité. Demandez votre devis gratuit — réponse sous 24h."
  );

  return (
    <>
      <Hero />
      <Marquee />
      <Presentation />
      <ServicesPreview />
      <WhyUs />
      <InstagramSection />
      <Testimonials />
      <CTABand />
    </>
  );
}
