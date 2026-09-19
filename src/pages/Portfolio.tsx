import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { CTABand, PageHero, Reveal, SectionHeading } from "../components/Extras";
import { PROJECTS, type Project } from "../data/site";
import { useSEO } from "../lib/seo";

const FILTERS = ["Tous", "Événements", "Digital", "Contenu", "Conciergerie", "Mobilité"] as const;

export default function Portfolio() {
  useSEO(
    "Réalisations",
    "Concerts kabyles, galas, mariages d'exception, sites web premium : découvrez le portfolio des réalisations KB PRESTIGE."
  );

  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tous");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === "Tous" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const currentIndex = selected ? filtered.findIndex((p) => p.id === selected.id) : -1;

  const goTo = useCallback(
    (dir: 1 | -1) => {
      if (currentIndex === -1) return;
      const next = (currentIndex + dir + filtered.length) % filtered.length;
      setSelected(filtered[next]);
    },
    [currentIndex, filtered]
  );

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") goTo(1);
      if (e.key === "ArrowLeft") goTo(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, goTo]);

  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        crumb="Portfolio"
        image="/images/projet-mariage.jpg"
        title={
          <>
            Nos projets parlent{" "}
            <em className="text-gold-gradient italic">d'eux-mêmes</em>
          </>
        }
        description="Concerts, galas, mariages, plateformes digitales : une sélection de missions récentes qui illustre notre niveau d'exigence."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          {/* Filtres */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3" role="tablist" aria-label="Filtrer les réalisations">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className={`border px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-400 ${
                    filter === f
                      ? "border-gold bg-gold text-night shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                      : "border-gold/25 text-smoke hover:border-gold/60 hover:text-gold-pale"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grille */}
          <motion.div layout className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => setSelected(project)}
                    className="group relative block h-[340px] w-full overflow-hidden border border-gold/12 text-left md:h-[380px]"
                    aria-label={`Voir le projet : ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                    <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-gold/50 bg-night/70 text-gold opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                      <Expand className="h-4 w-4" />
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="flex items-center gap-3">
                        <span className="border border-gold/40 bg-night/70 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-gold backdrop-blur">
                          {project.category}
                        </span>
                        <span className="font-display text-sm italic text-gold-pale/80">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-xl font-medium leading-snug text-cream transition-transform duration-500 group-hover:-translate-y-1 md:text-2xl">
                        {project.title}
                      </h3>
                      <span className="mt-3 block h-px w-0 bg-gold transition-all duration-700 group-hover:w-24" />
                    </div>
                  </button>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-smoke">
              Aucune réalisation dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>

      {/* Accroche */}
      <section className="border-t border-gold/10 bg-onyx/40 py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <SectionHeading
            eyebrow="Votre projet, bientôt ici ?"
            title={
              <>
                Écrivons votre <em className="text-gold-gradient italic">succès</em>
              </>
            }
            description="Chaque grande réalisation commence par un échange. Racontez-nous votre projet : nous le traiterons avec le même soin que ceux-ci."
          />
          <Reveal delay={0.3}>
            <Link to="/contact" className="btn-gold mt-8 inline-flex">
              Lancer mon projet
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand />

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-night/95 p-4 backdrop-blur-xl md:p-10"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Projet : ${selected.title}`}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Fermer la visionneuse"
              className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-night"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(-1);
              }}
              aria-label="Projet précédent"
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-night max-md:top-auto max-md:bottom-6 max-md:translate-y-0"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(1);
              }}
              aria-label="Projet suivant"
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-night max-md:top-auto max-md:bottom-6 max-md:translate-y-0"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={selected.id}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid max-h-full w-full max-w-5xl overflow-hidden border border-gold/25 bg-onyx md:grid-cols-[1.5fr_1fr]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[40vh] md:max-h-[75vh]">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="flex flex-col justify-center overflow-y-auto p-7 md:p-10">
                <div className="flex items-center gap-3">
                  <span className="border border-gold/40 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-gold">
                    {selected.category}
                  </span>
                  <span className="font-display text-sm italic text-gold-pale/80">
                    {selected.year}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium leading-snug text-cream md:text-3xl">
                  {selected.title}
                </h3>
                <div className="gold-rule mt-5 justify-start [&::after]:hidden" aria-hidden="true">
                  <span />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-smoke md:text-base">
                  {selected.description}
                </p>
                <Link
                  to={`/contact`}
                  className="btn-gold mt-8 self-start !px-6 !py-3"
                  onClick={() => setSelected(null)}
                >
                  Un projet similaire ?
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
