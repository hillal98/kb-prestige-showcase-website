import { motion } from "framer-motion";
import { Crown } from "./Logo";

const letters = "KB PRESTIGE".split("");

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-night"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      role="status"
      aria-label="Chargement du site"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.07),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Crown className="h-10 w-12" />
      </motion.div>

      <div className="mt-6 flex overflow-hidden">
        {letters.map((l, i) => (
          <motion.span
            key={i}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 + i * 0.045, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`font-display text-4xl font-medium tracking-[0.28em] md:text-5xl ${
              i > 2 ? "text-gold-gradient" : "text-cream"
            }`}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.7, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 h-px w-56 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-5 text-[10px] font-medium uppercase tracking-[0.5em] text-smoke"
      >
        L'excellence à votre service
      </motion.p>
    </motion.div>
  );
}
