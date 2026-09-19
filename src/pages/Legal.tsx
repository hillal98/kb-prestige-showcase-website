import { Reveal } from "../components/Extras";
import { CONTACT } from "../data/site";
import { useSEO } from "../lib/seo";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal delay={0.05}>
      <div className="border-l-2 border-gold/40 pl-6 md:pl-8">
        <h2 className="font-display text-2xl font-medium text-gold-pale md:text-3xl">{title}</h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-smoke md:text-base">
          {children}
        </div>
      </div>
    </Reveal>
  );
}

function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-40 md:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_55%)]" />
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-gold">{eyebrow}</p>
            <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-cream md:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-smoke">
              Dernière mise à jour : {updated}
            </p>
            <div className="mt-8 h-px w-32 bg-gradient-to-r from-gold to-transparent" />
          </Reveal>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl space-y-12 px-5">{children}</div>
      </section>
    </>
  );
}

export function MentionsLegales() {
  useSEO("Mentions légales", "Mentions légales du site KB PRESTIGE — éditeur, hébergement, propriété intellectuelle.");
  return (
    <LegalLayout eyebrow="Informations légales" title="Mentions légales" updated="janvier 2026">
      <Section title="1. Éditeur du site">
        <p>
          Le site kbprestige.fr est édité par <strong className="text-cream">KB PRESTIGE</strong>,
          agence de prestations de services multi-domaines basée en Île-de-France.
        </p>
        <p>
          Statut juridique et numéro SIREN/SIRET : en cours d'immatriculation — informations
          disponibles sur simple demande.
        </p>
        <p>
          Contact : <a className="text-gold hover:text-gold-pale" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> —{" "}
          <a className="text-gold hover:text-gold-pale" href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
        </p>
        <p>Directeur de la publication : le représentant légal de KB PRESTIGE.</p>
      </Section>
      <Section title="2. Hébergement">
        <p>
          Le site est hébergé par un prestataire professionnel garantissant un niveau de
          sécurité et de disponibilité conforme aux standards en vigueur (protocole HTTPS,
          certificat SSL actif).
        </p>
      </Section>
      <Section title="3. Propriété intellectuelle">
        <p>
          L'ensemble des éléments du site (logo KB et sa couronne, textes, photographies,
          identité visuelle noir et or, charte graphique) est la propriété exclusive de
          KB PRESTIGE, sauf mentions contraires. Toute reproduction, représentation ou
          exploitation, totale ou partielle, sans autorisation écrite préalable est interdite
          et constituerait une contrefaçon sanctionnée par le Code de la propriété
          intellectuelle.
        </p>
      </Section>
      <Section title="4. Responsabilité">
        <p>
          KB PRESTIGE s'efforce d'assurer l'exactitude des informations diffusées. Elle ne
          saurait toutefois être tenue responsable des omissions, inexactitudes ou carences
          dans la mise à jour. Les liens hypertextes vers des sites tiers (Instagram,
          Facebook, WhatsApp) relèvent de la seule responsabilité de leurs éditeurs.
        </p>
      </Section>
      <Section title="5. Droit applicable">
        <p>
          Les présentes mentions légales sont soumises au droit français. Tout litige relatif
          à l'utilisation du site sera soumis aux tribunaux compétents du ressort du siège
          de l'éditeur.
        </p>
      </Section>
    </LegalLayout>
  );
}

export function PolitiqueConfidentialite() {
  useSEO(
    "Politique de confidentialité",
    "Politique de confidentialité KB PRESTIGE : données collectées, finalités, durées de conservation et vos droits RGPD."
  );
  return (
    <LegalLayout
      eyebrow="Protection des données"
      title="Politique de confidentialité"
      updated="janvier 2026"
    >
      <Section title="1. Responsable du traitement">
        <p>
          Le responsable du traitement des données collectées sur ce site est{" "}
          <strong className="text-cream">KB PRESTIGE</strong>, joignable à l'adresse{" "}
          <a className="text-gold hover:text-gold-pale" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>
      </Section>
      <Section title="2. Données collectées">
        <p>
          Via le formulaire de contact et de devis, nous collectons uniquement les données
          nécessaires au traitement de votre demande : nom et prénom, adresse email,
          numéro de téléphone (facultatif), type de service souhaité, date souhaitée
          (facultative) et le contenu de votre message.
        </p>
      </Section>
      <Section title="3. Finalités et base légale">
        <p>
          Ces données sont utilisées exclusivement pour répondre à votre demande de devis
          ou de contact, sur la base de votre consentement explicite (case à cocher du
          formulaire) et de nos mesures précontractuelles. Aucune donnée n'est cédée,
          vendue ou louée à des tiers.
        </p>
      </Section>
      <Section title="4. Durée de conservation">
        <p>
          Les données issues du formulaire sont conservées au maximum{" "}
          <strong className="text-cream">12 mois</strong> à compter de votre dernière sollicitation,
          sauf obligation légale contraire ou relation commerciale en cours.
        </p>
      </Section>
      <Section title="5. Cookies">
        <p>
          Un bandeau de consentement vous permet d'accepter ou de refuser le dépôt de
          cookies non essentiels lors de votre première visite. Votre choix est conservé
          sur votre appareil et peut être modifié à tout moment en nous écrivant.
        </p>
      </Section>
      <Section title="6. Vos droits">
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits
          d'accès, de rectification, d'effacement, de limitation, d'opposition et de
          portabilité de vos données. Pour les exercer, écrivez à{" "}
          <a className="text-gold hover:text-gold-pale" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>{" "}
          en joignant un justificatif d'identité.
        </p>
        <p>
          Vous pouvez également introduire une réclamation auprès de la CNIL
          (www.cnil.fr) si vous estimez que vos droits ne sont pas respectés.
        </p>
      </Section>
    </LegalLayout>
  );
}
