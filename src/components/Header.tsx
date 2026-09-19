import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import Logo, { Crown } from "./Logo";
import { CONTACT, NAV_LINKS } from "../data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-gold-deep via-gold to-gold-pale"
      />
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-700 ${
          scrolled
            ? "border-b border-gold/10 bg-night/85 py-3 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10">
          <Logo />

          <nav aria-label="Navigation principale" className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `link-lux text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 ${
                    isActive ? "active text-gold" : "text-cream/80 hover:text-cream"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="btn-gold hidden !px-6 !py-3 lg:inline-flex">
              Demander un devis
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-night lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ------- Menu mobile plein écran ------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col bg-night/97 backdrop-blur-2xl lg:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
            <div className="flex flex-1 flex-col justify-center gap-2 px-8 pt-24">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `group flex items-baseline gap-4 py-3 ${
                        isActive ? "text-gold" : "text-cream"
                      }`
                    }
                  >
                    <span className="font-display text-sm italic text-gold/60">
                      0{i + 1}
                    </span>
                    <span className="font-display text-4xl font-medium transition-transform duration-500 group-hover:translate-x-2">
                      {link.label}
                    </span>
                  </NavLink>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                onClick={() => navigate("/contact")}
                className="btn-gold mt-8 self-start"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-between border-t border-gold/10 px-8 py-6"
            >
              <a href={`tel:${CONTACT.phoneHref}`} className="flex items-center gap-2 text-xs text-smoke">
                <Phone className="h-3.5 w-3.5 text-gold" />
                {CONTACT.phone}
              </a>
              <div className="flex items-center gap-3">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram KB PRESTIGE"
                  className="flex h-10 w-10 items-center justify-center border border-gold/25 text-gold transition-colors hover:bg-gold hover:text-night"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook KB PRESTIGE"
                  className="flex h-10 w-10 items-center justify-center border border-gold/25 text-gold transition-colors hover:bg-gold hover:text-night"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
            <div className="absolute right-6 top-24 opacity-20">
              <Crown className="h-24 w-28" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
