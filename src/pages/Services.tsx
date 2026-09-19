import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { CTABand, PageHero, Reveal, SectionHeading } from "../components/Extras";
import { SERVICES } from "../data/site";
import { useSEO } from "../lib/seo";

export default function Services() {
  useSEO(
    "Nos Services",
    "Digital & solutions web, création de contenu, événements, conciergerie privée et mobilité : découvrez les prestations premium KB PRESTIGE."
  );
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 350);
      }
    }
  }, [location.hash]);

  return (
    <>
      <PageHero
        eyebrow="Nos domaines d'expertise"
        crumb="Services"
        image="/images/service-events.jpg"
        title={
          <>
            Des services <em className="text-gold-gradient italic">d'exception</em>,
            pensés pour vous
          </>
        }
        description="Cinq univers complémentaires réunis sous une même signature : l'exigence du détail, la réactivité et le raffinement. Explorez chaque expertise et composez votre prestation idéale."
      />

      {/* Sommaire des services */}
      <section className="border-b border-gold/10 bg-onyx/40 py-8">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 md:px-10">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s.slug)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="link-lux flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-cream/70 transition-colors hover:text-gold"
            >
              <s.icon className="h-4 w-4 text-gold" />
              {s.shortTitle}
            </a>
          ))}
        </div>
      </section>

      {/* Sections détaillées */}
      {SERVICES.map((service, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`relative scroll-mt-28 overflow-hidden py-20 md:py-28 ${
              i % 2 === 1 ? "bg-[#0d0d0c]" : ""
            }`}
          >
            <span className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[16rem] font-semibold leading-none text-gold/[0.04] md:text-[24rem]">
              {service.index}
            </span>
            <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
              <div
                className={`grid items-center gap-14 lg:grid-cols-2 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Texte */}
                <div>
                  <Reveal>
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 items-center justify-center border border-gold/40 bg-night">
                        <service.icon className="h-6 w-6 text-gold" />
                      </span>
                      <div>
                        <p className="font-display text-sm italic text-gold/70">
                          {service.index} — KB PRESTIGE
                        </p>
                        <h2 className="font-display text-3xl font-medium text-cream md:text-5xl">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-6 font-display text-xl italic text-gold-pale md:text-2xl">
                      « {service.tagline} »
                    </p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <p className="mt-5 text-base leading-relaxed text-smoke md:text-lg">
                      {service.description}
                    </p>
                  </Reveal>
                  <Reveal delay={0.3}>
                    <ul className="mt-8 space-y-3.5">
                      {service.prestations.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm text-cream/85 md:text-base">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-gold/40">
                            <Check className="h-3 w-3 text-gold" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <div className="mt-10">
                      <Link to={`/contact?service=${service.slug}`} className="btn-gold">
                        Demander un devis pour ce service
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </Reveal>
                </div>

                {/* Visuel */}
                <Reveal delay={0.2} className="relative">
                  <div className="relative">
                    <div
                      className={`absolute -inset-4 border border-gold/20 ${
                        reversed ? "-rotate-1" : "rotate-1"
                      }`}
                    />
                    <img
                      src={service.image}
                      alt={`Prestation ${service.title} par KB PRESTIGE`}
                      loading="lazy"
                      className="relative h-[380px] w-full object-cover md:h-[520px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-night/20" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border border-gold/25 bg-night/85 px-5 py-3 backdrop-blur">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                        {service.shortTitle}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-smoke">
                        Sur-mesure
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Note tarifs */}
      <section className="border-y border-gold/10 bg-onyx/50 py-16">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
          <SectionHeading
            eyebrow="Tarifs"
            title={
              <>
                Une tarification <em className="text-gold-gradient italic">transparente</em>
              </>
            }
            description="Chaque prestation étant unique, nos tarifs sont établis sur devis, sans surprise et sans engagement. Décrivez-nous votre projet : vous recevez une proposition chiffrée détaillée sous 24 à 48 heures."
          />
          <Reveal delay={0.3}>
            <Link to="/contact" className="btn-ghost mt-8 inline-flex">
              Obtenir mon devis personnalisé
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
