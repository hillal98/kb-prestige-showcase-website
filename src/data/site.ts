import {
  Monitor,
  Clapperboard,
  Sparkles,
  KeyRound,
  CarFront,
  type LucideIcon,
} from "lucide-react";

export const CONTACT = {
  email: "contact@kbprestige.fr",
  phone: "+33 6 94 94 94 94",
  phoneHref: "+33694949494",
  instagram: "https://www.instagram.com/kb_prestige94",
  instagramHandle: "@kb_prestige94",
  facebook: "https://www.facebook.com/kbprestige94",
  whatsapp:
    "https://wa.me/33694949494?text=Bonjour%20KB%20PRESTIGE%2C%20je%20souhaite%20un%20devis%20pour%20une%20prestation.",
  zones: ["Paris", "Île-de-France", "Pays de la Loire", "Toute la France"],
};

export interface Service {
  slug: string;
  icon: LucideIcon;
  index: string;
  title: string;
  shortTitle: string;
  tagline: string;
  short: string;
  description: string;
  image: string;
  prestations: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "digital",
    icon: Monitor,
    index: "01",
    title: "Digital & Solutions Web",
    shortTitle: "Digital",
    tagline: "Votre présence en ligne, élevée au rang d'art.",
    short:
      "Sites vitrines, e-commerce, référencement et stratégie digitale sur-mesure pour une présence en ligne à la hauteur de votre ambition.",
    description:
      "Nous concevons des expériences digitales d'exception qui allient esthétique raffinée et performance technique. De la vitrine institutionnelle à la boutique en ligne, chaque projet est pensé pour convertir vos visiteurs en clients fidèles, avec un référencement soigné et des performances irréprochables.",
    image: "/images/service-digital.jpg",
    prestations: [
      "Création de sites vitrines & e-commerce",
      "Référencement naturel (SEO) & visibilité Google",
      "Identité numérique & charte graphique web",
      "Maintenance, hébergement & sécurité",
      "Stratégie digitale & accompagnement",
    ],
  },
  {
    slug: "creation-de-contenu",
    icon: Clapperboard,
    index: "02",
    title: "Création de Contenu",
    shortTitle: "Contenu",
    tagline: "Des images qui racontent votre prestige.",
    short:
      "Photographie, vidéo, drone et gestion de réseaux sociaux : un contenu visuel d'exception qui sublime votre image de marque.",
    description:
      "Une image vaut mille mots — encore faut-il qu'elle soit à la hauteur. Notre équipe de créatifs produit des contenus visuels haut de gamme : shootings photo, films promotionnels, captations drone et direction artistique, pour une communication qui marque les esprits durablement.",
    image: "/images/service-contenu.jpg",
    prestations: [
      "Shooting photo & retouche professionnelle",
      "Production vidéo & films promotionnels",
      "Captation drone & plans aériens",
      "Gestion & animation des réseaux sociaux",
      "Direction artistique & storytelling",
    ],
  },
  {
    slug: "evenements",
    icon: Sparkles,
    index: "03",
    title: "Événements",
    shortTitle: "Événements",
    tagline: "Des moments d'exception, orchestrés à la perfection.",
    short:
      "Concerts, galas, mariages et événements culturels — notamment au cœur de la communauté kabyle et berbère — organisés avec raffinement.",
    description:
      "De l'intime au spectaculaire, nous orchestrons des événements qui laissent une empreinte. Spécialistes des concerts kabyles et événements berbères en France, nous maîtrisons chaque détail : scénographie, billetterie, artistes, logistique et protocole, pour des soirées gravées dans les mémoires.",
    image: "/images/service-events.jpg",
    prestations: [
      "Concerts kabyles & événements culturels berbères",
      "Galas, soirées privées & réceptions prestige",
      "Mariages & cérémonies d'exception",
      "Billetterie, promotion & communication",
      "Scénographie, technique & coordination jour J",
    ],
  },
  {
    slug: "conciergerie",
    icon: KeyRound,
    index: "04",
    title: "Conciergerie",
    shortTitle: "Conciergerie",
    tagline: "Votre temps est précieux. Nous nous occupons du reste.",
    short:
      "Conciergerie privée et services lifestyle : réservations, organisation du quotidien, demandes sur-mesure traitées avec discrétion.",
    description:
      "Notre conciergerie privée répond à vos moindres besoins avec discrétion absolue et exigence constante. Réservations exclusives, gestion du quotidien, accès privilégiés : un interlocuteur unique, disponible 7j/7, qui transforme vos contraintes en sérénité.",
    image: "/images/service-conciergerie.jpg",
    prestations: [
      "Conciergerie privée & assistance personnelle",
      "Réservations restaurants, hôtels & expériences",
      "Gestion de locations & check-in / check-out",
      "Courses, livraisons & services à domicile",
      "Demandes sur-mesure & accès privilégiés",
    ],
  },
  {
    slug: "mobilite",
    icon: CarFront,
    index: "05",
    title: "Mobilité",
    shortTitle: "Mobilité",
    tagline: "Voyagez comme vous le méritez.",
    short:
      "Transport privé haut de gamme : chauffeur VTC, transferts aéroports, mise à disposition et location de véhicules premium.",
    description:
      "Parce que le déplacement fait partie de l'expérience, nous mettons à votre disposition une flotte de véhicules premium conduite par des chauffeurs professionnels et discrets. Transferts aéroportuaires, mises à disposition, longues distances : chaque trajet devient un moment de confort absolu.",
    image: "/images/service-mobilite.jpg",
    prestations: [
      "Chauffeur privé VTC premium",
      "Transferts aéroports & gares",
      "Mise à disposition à l'heure ou à la journée",
      "Location de véhicules de prestige",
      "Navettes événementielles & convoyage",
    ],
  },
];

export const STATS = [
  { value: 7, suffix: "+", label: "Années d'expérience" },
  { value: 250, suffix: "+", label: "Clients satisfaits" },
  { value: 320, suffix: "+", label: "Projets réalisés" },
  { value: 45, suffix: "+", label: "Partenaires qualifiés" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Une organisation de concert irréprochable, de la billetterie à la scénographie. KB PRESTIGE a transformé notre soirée kabyle en un événement inoubliable. Le professionnalisme est à tous les étages.",
    name: "Amine K.",
    role: "Organisateur — Concert kabyle, Zénith de Paris",
    service: "Événements",
  },
  {
    quote:
      "Notre site e-commerce a été entièrement repensé : élégant, rapide et parfaitement référencé. Le chiffre d'affaires en ligne a progressé de 60 % en six mois. Une équipe réactive et à l'écoute.",
    name: "Sarah B.",
    role: "Fondatrice — Maison de prêt-à-porter, Paris",
    service: "Digital & Solutions Web",
  },
  {
    quote:
      "La conciergerie KB PRESTIGE gère nos locations saisonnières avec une discrétion et une efficacité remarquables. Nos locataires sont conquis, et nous avons retrouvé une tranquillité totale.",
    name: "Karim et Lydia T.",
    role: "Propriétaires — Île-de-France",
    service: "Conciergerie",
  },
  {
    quote:
      "Un service de chauffeur d'une ponctualité absolue, véhicule impeccable et chauffeur d'une courtoisie rare. Tous nos déplacements professionnels passent désormais par KB PRESTIGE.",
    name: "Mehdi R.",
    role: "Directeur — Cabinet de conseil, Nantes",
    service: "Mobilité",
  },
  {
    quote:
      "Le film promotionnel réalisé pour notre établissement dépasse toutes nos attentes. Une direction artistique digne des plus grandes maisons. Nos réseaux sociaux ont triplé leur audience.",
    name: "Inès M.",
    role: "Gérante — Restaurant gastronomique, Paris",
    service: "Création de Contenu",
  },
];

export type ProjectCategory =
  | "Digital"
  | "Contenu"
  | "Événements"
  | "Conciergerie"
  | "Mobilité";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  year: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Concert kabyle — Zénith de Paris",
    category: "Événements",
    description:
      "Organisation complète d'un concert berbère : booking artiste, billetterie de 4 000 places, scénographie lumineuse et coordination technique.",
    image: "/images/projet-concert.jpg",
    year: "2025",
  },
  {
    id: 2,
    title: "Mariage d'exception — Château de Chantilly",
    category: "Événements",
    description:
      "Wedding planning haut de gamme : arts de la table dorés, orchestre live, coordination de 180 invités et protocole sur-mesure.",
    image: "/images/projet-mariage.jpg",
    year: "2025",
  },
  {
    id: 3,
    title: "Boutique en ligne — Maison Lumière",
    category: "Digital",
    description:
      "E-commerce premium avec design sur-mesure, tunnel de conversion optimisé et stratégie SEO : +60 % de ventes en six mois.",
    image: "/images/projet-web.jpg",
    year: "2024",
  },
  {
    id: 4,
    title: "Gala de charité berbère — Pavillon Vendôme",
    category: "Événements",
    description:
      "Soirée de gala caritative : dîner de prestige, vente aux enchères et spectacle live pour 300 convives au profit d'associations kabyles.",
    image: "/images/service-events.jpg",
    year: "2024",
  },
  {
    id: 5,
    title: "Campagne visuelle — Table Gastronomique",
    category: "Contenu",
    description:
      "Film promotionnel, shooting culinaire et refonte complète des réseaux sociaux : audience triplée et réservations en forte hausse.",
    image: "/images/service-contenu.jpg",
    year: "2025",
  },
  {
    id: 6,
    title: "Refonte digitale — Cabinet Horizon",
    category: "Digital",
    description:
      "Site vitrine institutionnel, identité numérique et accompagnement SEO pour un cabinet de conseil : un prestige enfin visible en ligne.",
    image: "/images/service-digital.jpg",
    year: "2024",
  },
  {
    id: 7,
    title: "Conciergerie privée — Collection Rivoli",
    category: "Conciergerie",
    description:
      "Gestion intégrale d'un portefeuille de locations de standing : accueil voyageurs, ménage hôtelier et optimisation des revenus.",
    image: "/images/service-conciergerie.jpg",
    year: "2025",
  },
  {
    id: 8,
    title: "Flotte VTC — Liaisons Aéroports",
    category: "Mobilité",
    description:
      "Service de transferts premium Paris-CDG / Orly pour une clientèle d'affaires : ponctualité garantie et confort absolu, 7j/7.",
    image: "/images/service-mobilite.jpg",
    year: "2024",
  },
];

export const VALUES = [
  {
    title: "Excellence",
    description:
      "Nous ne livrons que l'exceptionnel. Chaque détail est pensé, chaque prestation est exécutée avec le plus haut niveau d'exigence.",
  },
  {
    title: "Intégrité",
    description:
      "La confiance est notre fondation. Transparence des engagements, honnêteté des conseils et respect scrupuleux de notre parole.",
  },
  {
    title: "Discrétion",
    description:
      "Votre vie privée est sacrée. Nos équipes et partenaires sont tenus à une confidentialité absolue, en toutes circonstances.",
  },
  {
    title: "Réactivité",
    description:
      "Disponibles 7j/7, nous répondons en moins de 24 heures et mobilisons nos réseaux avec la célérité qu'exige votre agenda.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Écoute & Conseil",
    description:
      "Un échange approfondi pour comprendre votre besoin, vos goûts et vos contraintes. Nous définissons ensemble le cadre de la prestation.",
  },
  {
    step: "02",
    title: "Proposition sur-mesure",
    description:
      "Sous 24 à 48 heures, vous recevez un devis détaillé et transparent, accompagné de recommandations personnalisées.",
  },
  {
    step: "03",
    title: "Exécution impeccable",
    description:
      "Nos équipes et partenaires qualifiés déploient la prestation avec rigueur, en vous tenant informé à chaque étape clé.",
  },
  {
    step: "04",
    title: "Suivi & Satisfaction",
    description:
      "Après chaque prestation, un point qualité est réalisé. Votre satisfaction garantie est notre seul critère de réussite.",
  },
];

export const NAV_LINKS = [
  { label: "Accueil", path: "/" },
  { label: "Services", path: "/services" },
  { label: "À propos", path: "/a-propos" },
  { label: "Réalisations", path: "/realisations" },
  { label: "Contact", path: "/contact" },
];
