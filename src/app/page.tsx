"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  CheckCircle2,
  History,
  ShieldCheck,
  ArrowRight,
  LayoutDashboard,
  Wallet,
  GitBranch,
  TrendingUp,
  Activity,
  Layers,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden selection:bg-primary/20">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[100px] animate-pulse delay-1000"></div>
      </div>

      {/* HEADER */}
      <header
        className={cn(
          "fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6",
          scrolled ? "max-w-6xl mx-auto" : "w-full",
        )}
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-300",
            scrolled
              ? "glass-card rounded-full px-6 py-3 border-white/20 dark:border-white/10"
              : "container h-20 bg-transparent",
          )}
        >
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="bg-gradient-to-tr from-primary to-secondary p-1.5 rounded-lg text-white">
              <GitBranch className="h-5 w-5" />
            </div>
            <span>DecisionTrace</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Fonctionnalités", "Solutions", "À propos"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full opacity-50"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-primary/10 hover:text-primary"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="rounded-full px-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
            >
              <Link href="/sign-up">Start Free</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10 w-full overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-in slide-in-from-left-10 fade-in duration-700">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping"></span>
                La nouvelle norme de gestion
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-balance">
                Décidez avec{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-secondary animate-gradient-x">
                  Clarté
                </span>
                .
                <br />
                Gérez avec{" "}
                <span className="italic font-serif text-secondary-foreground font-light">
                  Précision
                </span>
                .
              </h1>

              <p className="max-w-xl text-lg md:text-xl text-muted-foreground/80 leading-relaxed">
                DecisionTrace fusionne la traçabilité de vos choix stratégiques
                avec l'impact direct sur vos finances. Une transparence radicale
                pour une performance optimale.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-full text-base bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 shadow-xl"
                >
                  Commencer l'expérience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 rounded-full text-base border-primary/20 bg-background/50 hover:bg-background hover:border-primary/50 backdrop-blur-sm"
                >
                  Voir la démo 3 min
                </Button>
              </div>

              <div className="pt-8 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-background bg-zinc-200 flex items-center justify-center overflow-hidden"
                    >
                      <div
                        className={`w-full h-full bg-gradient-to-br from-zinc-300 to-zinc-400`}
                      ></div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Approuvé par +500 leaders
                  </div>
                  <div className="flex gap-0.5 text-yellow-500">★★★★★</div>
                </div>
              </div>
            </div>

            {/* Right Visual - Interactive Glass Card */}
            <div className="relative h-[600px] w-full hidden lg:block perspective-1000 group">
              {/* Floating Elements */}
              <div className="absolute top-[10%] right-[10%] z-20 w-64 glass-card p-4 rounded-2xl animate-float-slow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-500/10 rounded-lg text-green-600">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">
                      ROI Projected
                    </div>
                    <div className="font-bold text-lg">+24.5%</div>
                  </div>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="absolute bottom-[15%] left-[-5%] z-30 w-72 glass-card p-4 rounded-2xl animate-float-delayed flex items-center gap-4 border-l-4 border-primary">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  JD
                </div>
                <div>
                  <div className="text-sm font-semibold">Décision Validée</div>
                  <div className="text-xs text-muted-foreground">
                    Par Jean Dupont • Il y a 2h
                  </div>
                </div>
                <CheckCircle2 className="ml-auto text-primary h-5 w-5" />
              </div>

              {/* Main Abstract Dashboard */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl backdrop-blur-sm transform rotate-y-[-12deg] rotate-x-[5deg] group-hover:rotate-y-[-8deg] group-hover:rotate-x-[2deg] transition-transform duration-700 shadow-2xl shadow-primary/10 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
                {/* Mock UI Structure */}
                <div className="absolute inset-4 border border-white/10 rounded-2xl p-6 flex flex-col gap-6">
                  <div className="h-8 w-1/3 bg-white/10 rounded-lg"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-32 bg-white/5 rounded-xl border border-white/10"></div>
                    <div className="h-32 bg-white/5 rounded-xl border border-white/10"></div>
                    <div className="h-32 bg-primary/20 rounded-xl border border-primary/30 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-4 space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-12 w-full bg-white/5 rounded-lg flex items-center px-4 gap-4"
                      >
                        <div className="h-6 w-6 rounded bg-white/10"></div>
                        <div className="h-4 w-1/2 bg-white/10 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES BENTO GRID */}
        <section id="features" className="py-24 bg-muted/40 relative">
          <div className="container mx-auto px-6">
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold tracking-tight mb-4">
                  L'Intelligence au service de l'Intuition
                </h2>
                <p className="text-muted-foreground text-lg">
                  Une suite d'outils interconnectés pour transformer la manière
                  dont votre entreprise pense et dépense.
                </p>
              </div>
              <Button variant="ghost" className="group">
                Explorer toutes les fonctionnalités{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* BENTO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-[auto] md:grid-rows-[300px_300px] gap-4">
              {/* Feature 1 - Large */}
              <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-background border p-8 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 p-8 w-[60%] h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                      <GitBranch className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      Traçabilité Totale
                    </h3>
                    <p className="text-muted-foreground max-w-sm">
                      Ne perdez plus jamais le fil. Chaque décision est
                      enregistrée, contextulisée et liée à ses conséquences.
                    </p>
                  </div>
                  <div className="w-full h-48 bg-muted rounded-xl border overflow-hidden relative mt-8 group-hover:scale-[1.02] transition-transform duration-500">
                    {/* Mock Timeline UI */}
                    <div className="absolute top-1/2 left-8 right-8 h-1 bg-border transform -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/4 h-4 w-4 rounded-full bg-primary transform -translate-y-1/2 shadow-[0_0_10px_var(--primary)]"></div>
                    <div className="absolute top-1/2 left-1/2 h-4 w-4 rounded-full bg-secondary transform -translate-y-1/2 ring-4 ring-background"></div>
                    <div className="absolute top-1/2 left-3/4 h-4 w-4 rounded-full bg-muted-foreground transform -translate-y-1/2"></div>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Tall */}
              <div className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl bg-black text-white p-8 hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white">
                  <Wallet className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Contrôle Financier</h3>
                <p className="text-zinc-400 mb-8 flex-1">
                  Liez chaque euro dépensé à une décision stratégique concrète.
                </p>
                <div className="mt-auto space-y-3">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>Budget</span>
                    <span>75%</span>
                  </div>
                </div>
              </div>

              {/* Feature 3 - Small */}
              <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl bg-secondary/30 border-0 p-6 transition-all duration-300 hover:bg-secondary/40">
                <div className="flex flex-col h-full justify-between">
                  <Zap className="h-8 w-8 text-green-700 mb-4" />
                  <div>
                    <h3 className="text-lg font-bold text-green-900 mb-2">
                      Vitesse
                    </h3>
                    <p className="text-sm text-green-800/80">
                      Prise de décision accélérée par x3.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 - Small */}
              <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl bg-background border p-6 transition-all duration-300 hover:border-primary/50">
                <div className="flex flex-col h-full justify-between">
                  <ShieldCheck className="h-8 w-8 text-primary mb-4" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Sécurité</h3>
                    <p className="text-sm text-muted-foreground">
                      Logs immuables et audit trail complet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS / PROOF */}
        <section className="py-20 border-y bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border/50">
              <div className="p-4">
                <div className="text-4xl font-extrabold text-primary mb-2">
                  10k+
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Décisions Tracées
                </div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-extrabold text-secondary-foreground mb-2">
                  99%
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  De satisfaction
                </div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-extrabold text-foreground mb-2">
                  24/7
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Monitoring
                </div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-extrabold text-primary mb-2">
                  ZERO
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Donnée Perdue
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-foreground text-background">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
            <div className="absolute top-0 right-0 p-32 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-transparent"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter text-white">
              Prenez le contrôle.
            </h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-12">
              Commencez gratuitement dès aujourd'hui et transformez la gestion
              de votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-zinc-200 transition-colors font-bold"
              >
                Démarrer maintenant
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-10 text-lg rounded-full bg-transparent border-zinc-700 text-white hover:bg-white/10 hover:border-white transition-colors"
              >
                Contacter les ventes
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-background border-t py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 font-bold text-2xl tracking-tight mb-6">
                <div className="bg-primary p-1.5 rounded-lg text-white">
                  <GitBranch className="h-6 w-6" />
                </div>
                <span>DecisionTrace</span>
              </div>
              <p className="text-muted-foreground max-w-xs leading-relaxed">
                La plateforme de référence pour les entreprises qui exigent
                clarté et précision.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Produit</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Fonctionnalités
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Intégrations
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Mises à jour
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Société</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">
                  À propos
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Carrières
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Blog
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Légal</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Confidentialité
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Conditions
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2026 DecisionTrace Inc. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
