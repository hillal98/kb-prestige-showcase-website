import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Cookie } from "lucide-react";
import { CONTACT } from "../data/site";

/* ============ Bouton flottant WhatsApp ============ */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discuter sur WhatsApp avec KB PRESTIGE"
          className="group fixed bottom-6 right-6 z-[75] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-pale via-gold to-gold-deep text-night shadow-[0_10px_30px_-8px_rgba(212,175,55,0.6)] transition-transform duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-gold/30 [animation-duration:2.8s]" />
          <MessageCircle className="relative h-6 w-6" />
          <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap border border-gold/30 bg-night/95 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-pale opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
            Une question ? WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

/* ============ Bandeau RGPD ============ */
const CONSENT_KEY = "kb-prestige-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (!stored) {
        const t = setTimeout(() => setShow(true), 3200);
        return () => clearTimeout(t);
      }
    } catch {
      /* stockage indisponible */
    }
  }, []);

  const decide = (choice: "accepted" | "refused") => {
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      /* noop */
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Consentement aux cookies"
          className="fixed bottom-6 left-4 right-4 z-[85] max-w-md border border-gold/25 bg-[#101010]/97 p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:left-6 sm:right-auto"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/30">
              <Cookie className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-cream">
                Respect de votre vie privée
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-smoke">
                Nous utilisons des cookies pour améliorer votre expérience et
                mesurer l'audience. Vous pouvez accepter ou refuser leur dépôt.{" "}
                <Link
                  to="/politique-confidentialite"
                  className="text-gold underline decoration-gold/40 underline-offset-2 hover:text-gold-pale"
                >
                  En savoir plus
                </Link>
              </p>
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <button onClick={() => decide("accepted")} className="btn-gold flex-1 !px-4 !py-3">
              Accepter
            </button>
            <button onClick={() => decide("refused")} className="btn-ghost flex-1 !px-4 !py-3">
              Refuser
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
