import { useEffect, useState } from "react";
import { HashRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { CookieBanner, WhatsAppButton } from "./components/Overlays";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { MentionsLegales, PolitiqueConfidentialite } from "./pages/Legal";
import { markLoaded, SKIP_LOADER } from "./lib/loader";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="font-display text-8xl font-medium text-gold-gradient md:text-9xl">404</p>
      <h1 className="mt-4 font-display text-3xl font-medium text-cream md:text-4xl">
        Cette page n'existe pas
      </h1>
      <p className="mt-4 max-w-md text-smoke">
        La page que vous recherchez a peut-être été déplacée ou supprimée.
      </p>
      <Link to="/" className="btn-gold mt-8">
        <ArrowLeft className="h-4 w-4" />
        Retour à l'accueil
      </Link>
    </section>
  );
}

export default function App() {
  const [loading, setLoading] = useState(!SKIP_LOADER);

  useEffect(() => {
    markLoaded();
    if (!loading) return;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2300);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <HashRouter>
      <ScrollToTop />
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <div className="grain-overlay" aria-hidden="true" />
      <Header />
      <main id="contenu">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/realisations" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </HashRouter>
  );
}
