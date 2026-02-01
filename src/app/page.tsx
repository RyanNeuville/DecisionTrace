"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  GitBranch,
  Layout,
  MessageSquare,
  Menu,
  X,
  CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden selection:bg-primary/10">
      {/* NOISE & BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-multiply dark:mix-blend-overlay"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/15 blur-[100px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-secondary/5 blur-[80px]"></div>
      </div>

      {/* HEADER */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-border/50 py-3"
            : "py-6 bg-transparent",
        )}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight z-50">
            <Image
              src="/logo.png"
              alt="DecisionTrace Logo"
              width={30}
              height={30}
              className="rounded-lg"
            />
            <span className="flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">
                Decision
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">
                Trace
              </span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#features"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Fonctionnalités
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Tarifs
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/sign-in">Connexion</Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="rounded-full px-6 shadow-lg shadow-primary/20"
            >
              <Link href="/sign-up">Essai Gratuit</Link>
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="absolute inset-0 top-0 h-screen bg-background flex flex-col items-center justify-center gap-8 z-40 md:hidden animate-in slide-in-from-right">
              <button
                onClick={() => scrollToSection("features")}
                className="text-xl font-medium"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-xl font-medium"
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-xl font-medium"
              >
                Contact
              </button>
              <div className="flex flex-col gap-4 mt-8 w-64">
                <Button variant="outline" size="lg" asChild className="w-full">
                  <Link href="/sign-in">Connexion</Link>
                </Button>
                <Button size="lg" asChild className="w-full">
                  <Link href="/sign-up">Essai Gratuit</Link>
                </Button>
                <div className="flex justify-center">
                  <ModeToggle />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 relative z-10 w-full">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-6 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary-foreground backdrop-blur-sm mx-auto lg:mx-0"
              >
                <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Nouveau pour les PME Camerounaises
                </span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance text-foreground"
              >
                Prenez des Décisions{" "}
                <span className="text-primary">Éclairées</span>, <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-teal-500 to-secondary">
                  Maîtrisez Vos Finances
                </span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                DecisionTrace : L&apos;outil essentiel qui allie stratégie et
                budget pour les PME et startups au Cameroun.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
              >
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-full text-base shadow-xl bg-primary hover:bg-primary/90 transition-transform duration-300 hover:scale-105"
                >
                  Démarrez l&apos;Essai Gratuit 14 Jours
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("features")}
                  className="h-14 px-8 rounded-full text-base bg-white/50 hover:bg-white transition-all hover:scale-105"
                >
                  Découvrir la solution
                </Button>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="pt-6 flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground"
              >
                <ShieldCheck className="h-4 w-4 text-green-600" />
                <span>Données hébergées et sécurisées</span>
              </motion.div>
            </div>

            {/* Hero Visual - Abstract Symbol for Decision & Growth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center lg:justify-end perspective-1000"
            >
              <div className="relative w-full max-w-md aspect-square">
                {/* Decorative orbital rings */}
                <div className="absolute inset-0 border border-primary/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-8 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                {/* Central Glass Card Dashboard Mockup */}
                <div className="absolute inset-0 rotate-y-12 rotate-x-6 glass-card rounded-2xl p-6 flex flex-col shadow-2xl animate-float border-t border-l border-white/60">
                  <div className="flex items-center gap-4 mb-6 border-b border-border/10 pb-4">
                    <Image
                      src="/logo.png"
                      alt="DecisionTrace Logo"
                      width={50}
                      height={50}
                      className="rounded-lg"
                    />
                    <div>
                      <div className="font-bold text-lg">
                        Décision Stratégique
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Expansion Yaoundé
                      </div>
                    </div>
                    <div className="ml-auto px-2 py-1 bg-secondary/10 text-secondary-foreground text-xs font-bold rounded">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">
                        VALIDÉ
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div className="p-3 bg-white/40 dark:bg-black/40 rounded-lg border border-white/30 dark:border-white/10">
                      <div className="text-xs text-muted-foreground mb-1">
                        Impact Budget
                      </div>
                      <div className="text-xl font-bold font-mono text-red-500">
                        - 2.500.000 FCFA
                      </div>
                    </div>
                    <div className="p-3 bg-white/60 dark:bg-black/60 rounded-lg border border-secondary/30 relative overflow-hidden">
                      <div className="absolute left-0 top-0 w-1 h-full bg-secondary"></div>
                      <div className="text-xs text-muted-foreground mb-1">
                        ROI Estimé
                      </div>
                      <div className="text-xl font-bold font-mono">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                          + 15% / an
                        </span>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 flex gap-2">
                      <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-slate-700 border-2 border-white dark:border-slate-800"></div>
                      <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-slate-600 border-2 border-white dark:border-slate-800 -ml-4"></div>
                      <div className="h-8 w-8 rounded-full bg-primary text-white text-[10px] flex items-center justify-center border-2 border-white dark:border-slate-800 -ml-4">
                        +3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="bg-white/50 dark:bg-transparent py-24 border-y border-border/50">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Le Problème</h2>
            <p className="text-xl text-muted-foreground mb-12">
              &quot;Vos décisions stratégiques sont-elles alignées avec votre
              budget ? <br className="hidden md:block" />
              Gardez-vous une trace de chaque choix, de sa justification et de
              son impact financier ?&quot;
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  La Solution{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">
                    Decision
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">
                    Trace
                  </span>
                </h3>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Nous avons créé la solution unique qui centralise tout.
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">
                    Decision
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">
                    Trace
                  </span>{" "}
                  est votre mémoire d&apos;entreprise et votre contrôleur de
                  gestion, réunis dans une interface simple et puissante. Fini
                  les fichiers Excel dispersés et les emails perdus.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-24 container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Fonctionnalités Clés</h2>
            <p className="text-muted-foreground">
              Tout ce dont votre PME a besoin pour grandir.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <FeatureItem
              icon={<GitBranch className="h-8 w-8 text-primary" />}
              title="Traçabilité Complète"
              description="Archivez chaque choix, ses options évaluées et les raisons derrière votre sélection."
            />
            <FeatureItem
              icon={<ArrowRight className="h-8 w-8 text-secondary" />}
              title="Lien Stratégie & Finance"
              description="Connectez directement vos décisions à leurs implications budgétaires et suivez l'évolution."
            />
            <FeatureItem
              icon={<Layout className="h-8 w-8 text-blue-500" />}
              title="Tableaux de Bord"
              description="Visualisez en un coup d'œil la performance de vos décisions et l'état de vos finances."
            />
            <FeatureItem
              icon={<ShieldCheck className="h-8 w-8 text-teal-600" />}
              title="Sécurité & Collaboration"
              description="Travaillez en équipe en toute sécurité, où que vous soyez au Cameroun."
            />
          </motion.div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Ils nous font confiance
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-black dark:shadow-2xl dark:shadow-white/10 p-8 rounded-2xl shadow-sm border border-border/50">
                <div className="flex gap-1 text-yellow-400 mb-4">★★★★★</div>
                <p className="text-lg mb-6 text-foreground/80 italic">
                  &quot;Depuis DecisionTrace, nous avons une vision claire de
                  nos investissements. C&apos;est fini le pilotage à vue.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="/user/user1.jpg"
                    alt="DecisionTrace Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <div className="font-bold">Alain N.</div>
                    <div className="text-sm text-muted-foreground">
                      DG, logistique Import/Export (Douala)
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-black dark:shadow-2xl dark:shadow-white/10 p-8 rounded-2xl shadow-sm border border-border/50">
                <div className="flex gap-1 text-yellow-400 mb-4">★★★★★</div>
                <p className="text-lg mb-6 text-foreground/80 italic">
                  &quot;Indispensable pour nos prises de décisions rapides. On
                  gagne un temps fou sur les validations.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="/user/user2.jpg"
                    alt="DecisionTrace Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <div className="font-bold">Sarah M.</div>
                    <div className="text-sm text-muted-foreground">
                      CEO, Fintech Startup (Yaoundé)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-24 container mx-auto px-6">
          {/* Card container with deep premium background and subtle border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto bg-gradient-to-br from-slate-900 to-blue-950 border border-blue-800/60 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* Ambient background effects - NOT a simple linear gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Content Container */}
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">
                Un Seul Plan.
              </h2>
              <p className="text-zinc-400 mb-8">
                Toutes les fonctionnalités. Sans compromis.
              </p>

              <div className="text-5xl font-extrabold text-white mb-2 font-mono tracking-tight">
                20 000{" "}
                <span className="text-2xl font-sans text-primary">FCFA</span>
              </div>
              <div className="text-zinc-400 mb-8">par mois / entreprise</div>

              <ul className="text-left space-y-4 mb-10 text-zinc-300 mx-auto max-w-xs">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />{" "}
                  Utilisateurs Illimités
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary" /> Module
                  Décision & Finance
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary" /> Support
                  Client Dédié
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary" /> Mises à
                  jour incluses
                </li>
              </ul>

              <Button
                size="lg"
                className="w-full h-14 bg-white text-primary border-2 cursor-pointer border-transparent hover:text-secondary transition-all font-bold text-lg rounded-full"
              >
                Je m&apos;abonne maintenant
              </Button>
              <div className="mt-4 text-sm text-zinc-500">
                Paiement sécurisé
              </div>
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="py-16 max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Questions Fréquentes
          </h2>
          <div className="space-y-4">
            <FaqItem
              question="Comment fonctionne l'essai gratuit ?"
              answer="Vous avez 14 jours d'accès complet sans engagement. Aucune carte bancaire n'est requise au départ."
            />
            <FaqItem
              question="Puis-je annuler à tout moment ?"
              answer="Oui, l'abonnement est mensuel et sans engagement de durée. Vous pouvez arrêter quand vous voulez."
            />
            <FaqItem
              question="Le paiement par Mobile Money est-il disponible ?"
              answer="Absolument ! Nous acceptons Orange Money et MTN Mobile Money pour faciliter vos transactions."
            />
            <FaqItem
              question="Est-ce sécurisé pour mes données ?"
              answer="Vos données sont chiffrées et sauvegardées quotidiennement. La confidentialité est notre priorité absolue."
            />
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section
          id="contact"
          className="py-24 bg-gradient-to-b from-white to-muted/20 dark:from-slate-950 dark:to-slate-900/50 border-t"
        >
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-primary">
                  Parlons de votre entreprise
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Vous avez des besoins spécifiques ou vous souhaitez une démo
                  personnalisée pour votre équipe ? Remplissez ce formulaire et
                  nous vous recontactons rapidement.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MessageSquare />
                    </div>
                    <div>
                      <div className="font-semibold">Support Chat</div>
                      <div className="text-sm text-muted-foreground">
                        Disponible 8h - 18h
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <CreditCard />
                    </div>
                    <div>
                      <div className="font-semibold">Commercial</div>
                      <div className="text-sm text-primary">
                        commercial@decisiontrace.cm
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl shadow-lg border border-border/20">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center justify-center md:justify-start font-bold text-xl mb-4 text-white">
                <Image
                  src="/logo.png"
                  alt="DecisionTrace Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">
                  Decision
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">
                  Trace
                </span>
              </div>
              <p className="text-zinc-400 text-sm">
                L&apos;outil de référence pour les PME au Cameroun.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="#">Mentions Légales</Link>
                </li>
                <li>
                  <Link href="#">Politique de Confidentialité</Link>
                </li>
                <li>
                  <Link href="#">CGV</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="#">LinkedIn</Link>
                </li>
                <li>
                  <Link href="#">Facebook</Link>
                </li>
                <li>
                  <Link href="#">Twitter</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm text-slate-400 hover:text-white transition-colors">
                Douala, Cameroun
              </p>
              <p className="text-sm text-slate-400 hover:text-white transition-colors">
                hello@decisiontrace.cm
              </p>
            </div>
          </div>
          <div className="border-t border-slate-900/50 pt-8 text-center text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
            <span>
              © {new Date().getFullYear()} DecisionTrace. Tous droits réservés.
            </span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-teal-500 transition-colors">
                Confidentialité
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                CGU
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-border/50 shadow-sm hover:shadow-md transition-all hover:scale-105 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-secondary/5 to-transparent rounded-bl-3xl"></div>
      <div className="mb-4 text-foreground w-fit p-3 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-white group-hover:border-secondary/20 transition-colors z-10 relative">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl bg-white dark:bg-slate-900/50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left font-semibold hover:bg-muted/20 transition-colors"
      >
        {question}
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4 rotate-90" />
          )}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-border/20 bg-muted/10">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
