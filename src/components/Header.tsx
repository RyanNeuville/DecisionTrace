import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
  );
}
