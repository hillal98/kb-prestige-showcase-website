import { useState, type ChangeEvent, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Loader2,
  Lock,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { CTABand, PageHero, Reveal, SectionHeading } from "../components/Extras";
import { FacebookIcon, InstagramIcon } from "../components/SocialIcons";
import { CONTACT, SERVICES } from "../data/site";
import { useSEO } from "../lib/seo";

interface FormState {
  nom: string;
  email: string;
  telephone: string;
  service: string;
  date: string;
  message: string;
  rgpd: boolean;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+0-9 ().-]{8,20}$/;

const inputCls =
  "w-full border border-gold/20 bg-night px-4 py-3.5 text-sm text-cream placeholder:text-smoke/50 outline-none transition-colors duration-300 focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)] min-h-[44px]";

function Field({
  label,
  error,
  required,
  children,
  htmlFor,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.28em] text-gold-pale"
      >
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 overflow-hidden text-xs text-[#e8a0a0]"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  useSEO(
    "Contact & Devis",
    "Demandez votre devis gratuit KB PRESTIGE : digital, contenu, événements, conciergerie, mobilité. Réponse garantie sous 24h, sans engagement."
  );
  const [params] = useSearchParams();
  const preselected = params.get("service") ?? "";

  const [form, setForm] = useState<FormState>({
    nom: "",
    email: "",
    telephone: "",
    service: SERVICES.some((s) => s.slug === preselected) ? preselected : "",
    date: "",
    message: "",
    rgpd: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.nom.trim().length < 2) next.nom = "Merci d'indiquer votre nom et prénom.";
    if (!EMAIL_RE.test(form.email.trim())) next.email = "Merci d'indiquer une adresse email valide.";
    if (form.telephone.trim() && !PHONE_RE.test(form.telephone.trim()))
      next.telephone = "Ce numéro de téléphone semble invalide.";
    if (form.message.trim().length < 10)
      next.message = "Décrivez votre besoin en quelques mots (10 caractères minimum).";
    if (!form.rgpd) next.rgpd = "Votre consentement est nécessaire pour traiter votre demande.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1600);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact & Devis"
        crumb="Contact"
        image="/images/service-conciergerie.jpg"
        title={
          <>
            Parlons de votre <em className="text-gold-gradient italic">projet</em>
          </>
        }
        description="Devis gratuit, sans engagement, réponse sous 24 heures. Remplissez le formulaire ci-dessous ou contactez-nous directement : un conseiller dédié vous répond."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:px-10 lg:grid-cols-[1.5fr_1fr]">
          {/* ========== Formulaire ========== */}
          <Reveal>
            <div className="relative border border-gold/20 bg-onyx/50 p-6 md:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex min-h-[480px] flex-col items-center justify-center gap-5 text-center"
                  >
                    <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold bg-gold/10 shadow-[0_0_40px_rgba(212,175,55,0.35)]">
                      <CheckCircle2 className="h-10 w-10 text-gold" />
                    </span>
                    <h2 className="font-display text-3xl font-medium text-cream md:text-4xl">
                      Votre demande est <em className="text-gold-gradient italic">bien reçue</em>
                    </h2>
                    <p className="max-w-md text-sm leading-relaxed text-smoke md:text-base">
                      Merci pour votre confiance. Un conseiller KB PRESTIGE vous
                      recontacte sous 24 heures ouvrées. Un accusé de réception
                      vient d'être envoyé à{" "}
                      <span className="text-gold-pale">{form.email}</span>.
                    </p>
                    <button
                      onClick={() => {
                        setSent(false);
                        setForm({
                          nom: "",
                          email: "",
                          telephone: "",
                          service: "",
                          date: "",
                          message: "",
                          rgpd: false,
                        });
                      }}
                      className="btn-ghost mt-4"
                    >
                      Envoyer une nouvelle demande
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -16 }}
                    onSubmit={onSubmit}
                    noValidate
                    aria-label="Formulaire de demande de devis"
                  >
                    <h2 className="font-display text-2xl font-medium text-cream md:text-3xl">
                      Demande de devis gratuit
                    </h2>
                    <p className="mt-2 text-sm text-smoke">
                      Les champs marqués d'un <span className="text-gold">*</span> sont obligatoires.
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <Field label="Nom et prénom" htmlFor="nom" required error={errors.nom}>
                        <input
                          id="nom"
                          name="nom"
                          type="text"
                          autoComplete="name"
                          value={form.nom}
                          onChange={update}
                          aria-invalid={!!errors.nom}
                          placeholder="Jean Dupont"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Adresse email" htmlFor="email" required error={errors.email}>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={update}
                          aria-invalid={!!errors.email}
                          placeholder="jean@exemple.fr"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Téléphone" htmlFor="telephone" error={errors.telephone}>
                        <input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          autoComplete="tel"
                          value={form.telephone}
                          onChange={update}
                          aria-invalid={!!errors.telephone}
                          placeholder="+33 6 00 00 00 00"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Type de service souhaité" htmlFor="service">
                        <div className="relative">
                          <select
                            id="service"
                            name="service"
                            value={form.service}
                            onChange={update}
                            className={`${inputCls} appearance-none pr-10 ${form.service ? "" : "text-smoke/50"}`}
                          >
                            <option value="">Sélectionnez un service…</option>
                            {SERVICES.map((s) => (
                              <option key={s.slug} value={s.slug}>
                                {s.title}
                              </option>
                            ))}
                            <option value="autre">Autre / Sur-mesure</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
                        </div>
                      </Field>
                      <Field label="Date souhaitée (optionnel)" htmlFor="date">
                        <input
                          id="date"
                          name="date"
                          type="date"
                          value={form.date}
                          onChange={update}
                          min={new Date().toISOString().split("T")[0]}
                          className={`${inputCls} [color-scheme:dark]`}
                        />
                      </Field>
                    </div>

                    <div className="mt-6">
                      <Field label="Votre message" htmlFor="message" required error={errors.message}>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={update}
                          aria-invalid={!!errors.message}
                          placeholder="Décrivez votre projet, vos envies, vos contraintes…"
                          className={`${inputCls} resize-y`}
                        />
                      </Field>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-start gap-3">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked={form.rgpd}
                          id="rgpd"
                          onClick={() => {
                            setForm((f) => ({ ...f, rgpd: !f.rgpd }));
                            setErrors((err) => ({ ...err, rgpd: undefined }));
                          }}
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border transition-all duration-300 ${
                            form.rgpd
                              ? "border-gold bg-gold text-night"
                              : "border-gold/40 bg-transparent hover:border-gold"
                          }`}
                        >
                          {form.rgpd && <Check className="h-4 w-4" />}
                        </button>
                        <label htmlFor="rgpd" className="text-xs leading-relaxed text-smoke">
                          J'accepte que mes données soient traitées par KB PRESTIGE
                          dans le cadre de ma demande, conformément à la{" "}
                          <a
                            href="#/politique-confidentialite"
                            className="text-gold underline decoration-gold/40 underline-offset-2 hover:text-gold-pale"
                          >
                            politique de confidentialité
                          </a>
                          . Elles ne seront jamais cédées à des tiers.{" "}
                          <span className="text-gold">*</span>
                        </label>
                      </div>
                      <AnimatePresence>
                        {errors.rgpd && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-1.5 overflow-hidden text-xs text-[#e8a0a0]"
                            role="alert"
                          >
                            {errors.rgpd}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-gold mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {sending ? (
                        <>
                          Envoi en cours…
                          <Loader2 className="h-4 w-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          Envoyer ma demande
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                    <p className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-smoke">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      Réponse garantie sous 24 heures
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* ========== Coordonnées ========== */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="lux-card rounded-sm p-7">
                <SectionHeading
                  align="left"
                  eyebrow="Coordonnées"
                  title={
                    <span className="text-3xl md:text-4xl">Joignables 7j/7</span>
                  }
                />
                <ul className="mt-6 space-y-5">
                  <li>
                    <a href={`mailto:${CONTACT.email}`} className="group flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 transition-colors group-hover:bg-gold">
                        <Mail className="h-5 w-5 text-gold transition-colors group-hover:text-night" />
                      </span>
                      <span>
                        <span className="block text-[9px] font-bold uppercase tracking-[0.3em] text-smoke">Email</span>
                        <span className="text-sm text-cream transition-colors group-hover:text-gold-pale">{CONTACT.email}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${CONTACT.phoneHref}`} className="group flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 transition-colors group-hover:bg-gold">
                        <Phone className="h-5 w-5 text-gold transition-colors group-hover:text-night" />
                      </span>
                      <span>
                        <span className="block text-[9px] font-bold uppercase tracking-[0.3em] text-smoke">Téléphone</span>
                        <span className="text-sm text-cream transition-colors group-hover:text-gold-pale">{CONTACT.phone}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40">
                      <Clock className="h-5 w-5 text-gold" />
                    </span>
                    <span>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.3em] text-smoke">Disponibilité</span>
                      <span className="text-sm text-cream">7j/7 — de 8h à 22h</span>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Zone d'intervention */}
            <Reveal delay={0.2}>
              <div className="lux-card relative overflow-hidden rounded-sm p-7">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(212,175,55,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.8) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center border border-gold/40">
                      <MapPin className="h-5 w-5 text-gold" />
                    </span>
                    <h3 className="font-display text-xl font-medium text-cream">
                      Zone d'intervention
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {CONTACT.zones.map((zone) => (
                      <span
                        key={zone}
                        className="border border-gold/30 bg-night/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-pale"
                      >
                        {zone}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-smoke">
                    Basés en Île-de-France, nous intervenons dans toute la France
                    sur demande, notamment dans les Pays de la Loire.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Réseaux sociaux */}
            <Reveal delay={0.3}>
              <div className="lux-card rounded-sm p-7">
                <h3 className="font-display text-xl font-medium text-cream">
                  Suivez-nous
                </h3>
                <p className="mt-2 text-xs text-smoke">
                  2 334 abonnés nous font déjà confiance sur Instagram.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2.5 border border-gold/30 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-night"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    Instagram
                  </a>
                  <a
                    href={CONTACT.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2.5 border border-gold/30 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-night"
                  >
                    <FacebookIcon className="h-4 w-4" />
                    Facebook
                  </a>
                </div>
              </div>
            </Reveal>

            {/* RGPD */}
            <Reveal delay={0.4}>
              <div className="flex items-start gap-4 border border-gold/15 bg-night p-5">
                <Lock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="text-xs leading-relaxed text-smoke">
                  <span className="font-semibold text-cream">Vos données sont protégées.</span>{" "}
                  Les informations transmises servent exclusivement au traitement de
                  votre demande et sont conservées 12 mois maximum.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="flex items-start gap-4 border border-gold/15 bg-night p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="text-xs leading-relaxed text-smoke">
                  <span className="font-semibold text-cream">Devis 100 % gratuit.</span>{" "}
                  Aucun engagement : notre proposition détaillée vous laisse
                  entièrement libre de votre décision.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
