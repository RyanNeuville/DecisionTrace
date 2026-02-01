import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
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
  );
}
