import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col bg-background px-6 pt-28">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="section-eyebrow">Akıllı şehir rehberi</p>
        <h1 className="font-display mt-4 text-[3.25rem] font-medium leading-none text-stone-900 md:text-7xl">
          Turist
        </h1>
        <p className="font-body mt-5 max-w-md text-sm font-light leading-relaxed text-stone-500 md:text-base">
          Kişisel öneriler, harita, AI asistan ve tur planlama — hepsi cebinde.
        </p>
      </div>

      <a
        href="#kesfet"
        className="hero-scroll-hint mb-14 flex flex-col items-center gap-1 text-stone-400 transition-colors hover:text-stone-600 md:mb-16"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.26em]">Keşfet</span>
        <ChevronDown className="h-4 w-4" />
      </a>
    </section>
  );
}