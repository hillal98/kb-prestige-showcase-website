import { Link } from "react-router-dom";

export function Crown({ className = "w-7 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="crownGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4E4BC" />
          <stop offset="55%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9A7B24" />
        </linearGradient>
      </defs>
      <path
        d="M4 30 L8 13 L16 22 L24 7 L32 22 L40 13 L44 30 Z"
        fill="url(#crownGold)"
      />
      <circle cx="8" cy="10" r="2.2" fill="#F4E4BC" />
      <circle cx="24" cy="4.5" r="2.4" fill="#F4E4BC" />
      <circle cx="40" cy="10" r="2.2" fill="#F4E4BC" />
      <rect x="6" y="32.5" width="36" height="2.6" rx="1.3" fill="url(#crownGold)" />
    </svg>
  );
}

interface LogoProps {
  compact?: boolean;
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="KB PRESTIGE — Accueil"
      className="group flex items-center gap-3"
    >
      <div className="relative flex h-11 w-11 items-center justify-center md:h-12 md:w-12">
        <div className="absolute inset-0 rounded-full border border-gold/40 transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_22px_rgba(212,175,55,0.4)]" />
        <div className="absolute inset-[3px] rounded-full border border-gold/15" />
        <div className="flex flex-col items-center justify-center leading-none">
          <Crown className="mb-[2px] h-2.5 w-3" />
          <span className="font-display text-[15px] font-semibold tracking-wide text-gold-gradient md:text-base">
            KB
          </span>
        </div>
      </div>
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-[0.18em] text-cream md:text-xl">
            KB <span className="text-gold-gradient">PRESTIGE</span>
          </span>
          <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.42em] text-smoke md:text-[9px]">
            L'excellence à votre service
          </span>
        </div>
      )}
    </Link>
  );
}
