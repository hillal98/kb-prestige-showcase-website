import { Link } from "react-router-dom";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import Logo from "./Logo";
import { CONTACT, NAV_LINKS, SERVICES } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-gold/15 bg-[#070707]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Marque */}
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-smoke">
              Agence premium multi-services. Digital, création de contenu,
              événements, conciergerie et mobilité —{" "}
              <span className="text-gold-pale">l'excellence à votre service</span>,
              partout en France.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez-nous sur Instagram"
                className="flex h-11 w-11 items-center justify-center border border-gold/25 text-gold transition-all duration-300 hover:bg-gold hover:text-night hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez-nous sur Facebook"
                className="flex h-11 w-11 items-center justify-center border border-gold/25 text-gold transition-all duration-300 hover:bg-gold hover:text-night hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <span className="ml-2 text-[11px] uppercase tracking-[0.2em] text-smoke">
                {CONTACT.instagramHandle}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Liens rapides">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
              Navigation
            </h3>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="link-lux text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Nos services">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
              Services
            </h3>
            <ul className="mt-6 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services#${s.slug}`}
                    className="link-lux text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
              Contact
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-cream/75">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-3 transition-colors hover:text-gold-pale">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneHref}`} className="flex items-start gap-3 transition-colors hover:text-gold-pale">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  Paris · Île-de-France · Pays de la Loire
                  <span className="mt-1 block text-xs text-smoke">
                    Interventions dans toute la France
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-gold/10 pt-8 md:flex-row">
          <p className="text-xs text-smoke">
            © {year} KB PRESTIGE — Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-xs text-smoke">
            <Link to="/mentions-legales" className="link-lux transition-colors hover:text-cream">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="link-lux transition-colors hover:text-cream">
              Confidentialité
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Retour en haut de page"
              className="flex h-10 w-10 items-center justify-center border border-gold/25 text-gold transition-all hover:bg-gold hover:text-night"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
