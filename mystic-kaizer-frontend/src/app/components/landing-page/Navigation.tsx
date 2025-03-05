"use client";
import WalletButton from "../WalletButton";
import data from "../../data/landing-page.json";

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-transparent z-50 font-dark-mystic">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <div className="w-[160px]"></div>
        <div className="flex items-center gap-8 text-2xl">
          {data.navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <WalletButton />
        </div>
      </div>
    </nav>
  );
} 