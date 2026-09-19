import { Link } from "react-router-dom";
import { ArrowRight, Handshake, Lock, Medal, ShieldCheck, Zap } from "lucide-react";
import { CTABand, PageHero, Reveal, SectionHeading } from "../components/Extras";
import { PROCESS, VALUES } from "../data/site";
import { useSEO } from "../lib/seo";

const VALUE_ICONS = [Medal, Handshake, Lock, Zap];

export default function About() {
  useSEO(
    "À propos",
    "Histoire, valeurs et méthode de travail de KB PRESTIGE : excellence, intégrité, discrétion et réactivité au service d'une clientèle exigeante."
  );

  return (
    <>
      <PageHero
        eyebrow="À propos"
        crumb="À propos"
        image="/images/about.jpg"
        title={
          <>
            Une maison née de la passion{" "}
            <em className="text-gold-gradient italic">du service</em>
          </>
        }
        description="Derrière le monogramme couronné se cache une équipe de passionnés, unie par une conviction : l'excellence n'est pas un objectif, c'est une manière d'être."
      />

      {/* Histoire */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative max-w-xl">
                <div className="absolute -inset-4 border border-gold/20" />
                <img
                  src="/images/hero.jpg"
                  alt="Univers KB PRESTIGE — salon de prestige noir et or"
                  loading="lazy"
                  className="relative h-[360px] w-full object-cover md:h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent" />
                <div className="absolute -bottom-6 -right-2 border border-gold/40 bg-night px-8 py-5 shadow-2xl md:-right-6">
                  <p className="font-display text-4xl font-medium text-gold-gradient">Est.</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-smoke">
                    Val-de-Marne (94)
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <SectionHeading
                align="left"
                eyebrow="Notre histoire"
                title={
                  <>
                    L'exigence en <em className="text-gold-gradient italic">héritage</em>
                  </>
                }
              />
              <Reveal delay={0.2}>
                <p className="mt-6 text-base leading-relaxed text-smoke md:text-lg">
                  KB PRESTIGE est née en Île-de-France, au cœur du Val-de-Marne,
                  d'une passion pour les belles choses et d'un constat : les
                  services premium étaient trop souvent fragmentés, difficiles
                  d'accès, inégaux en qualité.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-4 text-base leading-relaxed text-smoke md:text-lg">
                  Nous avons voulu créer la maison que nous cherchions nous-mêmes :
                  un interlocuteur unique, capable de produire votre site web comme
                  d'organiser un concert kabyle au Zénith, de gérer votre
                  conciergerie comme de vous conduire à l'aéroport dans un
                  confort absolu.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="mt-4 text-base leading-relaxed text-smoke md:text-lg">
                  Aujourd'hui, forte d'une communauté fidèle et d'un réseau de
                  partenaires triés sur le volet, KB PRESTIGE rayonne de Paris
                  aux Pays de la Loire, avec une promesse intacte :{" "}
                  <span className="font-display text-lg italic text-gold-pale">
                    l'excellence à votre service.
                  </span>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="border-y border-gold/10 bg-[#0d0d0c] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading
            eyebrow="Nos valeurs"
            title={
              <>
                Quatre piliers, <em className="text-gold-gradient italic">une signature</em>
              </>
            }
            description="Ces valeurs ne sont pas des mots affichés : elles conditionnent chaque recrutement, chaque partenariat et chaque prestation livrée."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <Reveal key={value.title} delay={i * 0.1}>
                  <div className="lux-card group h-full rounded-sm p-8 text-center">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]">
                      <Icon className="h-7 w-7 text-gold transition-colors duration-500 group-hover:text-night" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-medium text-cream">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-smoke">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading
            eyebrow="Notre approche"
            title={
              <>
                Une méthode <em className="text-gold-gradient italic">éprouvée</em>
              </>
            }
            description="Quatre étapes, un fil conducteur : votre tranquillité. De la première écoute au suivi final, tout est cadré, mesuré, garanti."
          />

          <div className="relative mt-20">
            <div className="absolute left-[27px] top-0 h-full w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent lg:left-0 lg:top-[27px] lg:h-px lg:w-full lg:bg-gradient-to-r" />
            <div className="grid gap-12 lg:grid-cols-4 lg:gap-6">
              {PROCESS.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.15} className="relative">
                  <div className="flex gap-6 lg:flex-col lg:gap-5">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border border-gold bg-night font-display text-xl font-semibold text-gold shadow-[0_0_25px_rgba(212,175,55,0.25)]">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium text-cream md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-smoke">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="border-t border-gold/10 bg-onyx/40 py-16">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 md:grid-cols-[auto_1fr_auto] md:px-10">
          <Reveal>
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 md:mx-0">
              <ShieldCheck className="h-9 w-9 text-gold" />
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-center font-display text-2xl font-medium text-cream md:text-left md:text-3xl">
              Assurance responsabilité civile professionnelle &amp; partenaires
              certifiés
            </h2>
            <p className="mt-3 text-center text-sm leading-relaxed text-smoke md:text-left md:text-base">
              Toutes nos prestations sont couvertes par une assurance
              professionnelle. Nos chauffeurs sont titulaires de la carte VTC,
              nos partenaires événementiels déclarés et assurés.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="text-center md:text-right">
            <Link to="/contact" className="btn-ghost inline-flex">
              Nous rencontrer
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
