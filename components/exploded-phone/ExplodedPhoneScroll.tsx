"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { APP_SCREENS } from "@/lib/app-screens";
import { clamp01, mapScrollProgress, scrollState } from "@/lib/scroll-state";
import { cn } from "@/lib/utils";
import PhoneMockup from "@/components/exploded-phone/PhoneMockup";

const APP_LABELS = APP_SCREENS.filter((s) => s.label);

function ScreenLabel({
  screen,
  displayIndex,
  screenPhase,
  phoneTilt,
}: {
  screen: (typeof APP_LABELS)[number];
  displayIndex: number;
  screenPhase: number;
  phoneTilt: number;
}) {
  const screenIndex = APP_SCREENS.findIndex((s) => s.id === screen.id);
  const dist = Math.abs(screenPhase - screenIndex);
  const opacity = dist < 0.45 ? 1 - dist / 0.45 : 0;

  if (opacity < 0.04 || phoneTilt < 0.88 || !screen.label) return null;

  return (
    <div
      className={cn(
        "pointer-events-none absolute z-20 max-w-[250px]",
        screen.label.side === "left"
          ? "left-5 md:left-14 lg:left-24"
          : "right-5 md:right-14 lg:right-24"
      )}
      style={{ top: screen.label.top, opacity }}
    >
      <div
        className={cn(
          "flex items-center gap-4",
          screen.label.side === "right" && "flex-row-reverse text-right"
        )}
      >
        <div className="min-w-0">
          <p className="section-eyebrow !text-[10px]">
            {String(displayIndex).padStart(2, "0")}
          </p>
          <h3 className="font-display mt-1 text-xl font-medium text-stone-900 md:text-2xl">
            {screen.name}
          </h3>
          <p className="font-body mt-1.5 text-xs font-light leading-relaxed text-stone-500">
            {screen.description}
          </p>
        </div>
        <svg
          width="36"
          height="10"
          viewBox="0 0 36 10"
          className="shrink-0 text-stone-400"
          aria-hidden
        >
          {screen.label.side === "left" ? (
            <path
              d="M0 5 H26 M20 1 L28 5 L20 9"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M36 5 H10 M16 1 L8 5 L16 9"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </div>
    </div>
  );
}

const SCROLL_HEIGHT_VH = (APP_SCREENS.length + 3.6) * 100;

export default function ExplodedPhoneScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [screenPhase, setScreenPhase] = useState(0);
  const [phoneTilt, setPhoneTilt] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.65,
      onUpdate: (self) => {
        const p = self.progress;
        const mapped = mapScrollProgress(p);

        scrollState.progress = p;
        scrollState.phoneTilt = mapped.phoneTilt;
        scrollState.screenPhase = mapped.screenPhase;

        setPhoneTilt(mapped.phoneTilt);
        setScreenPhase(mapped.screenPhase);
        setScrollProgress(p);
      },
    });

    const refresh = () => ScrollTrigger.refresh();
    refresh();
    window.addEventListener("resize", refresh);

    return () => {
      trigger.kill();
      window.removeEventListener("resize", refresh);
    };
  }, []);

  const activeIndex = Math.min(
    APP_SCREENS.length - 1,
    Math.max(0, Math.round(screenPhase))
  );
  const activeScreen = APP_SCREENS[activeIndex];

  const scrollKaydir = () => {
    const container = containerRef.current;
    if (!container) return;

    if (scrollProgress >= 0.97) {
      document.getElementById("indir")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const scrollable = container.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return;

    const step = scrollable / (APP_SCREENS.length + 2);
    window.scrollBy({ top: step, behavior: "smooth" });
  };

  return (
    <section
      id="kesfet"
      ref={containerRef}
      className="relative bg-background"
      style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
    >
      <div className="sticky top-0 h-dvh overflow-hidden">
        <div className="absolute inset-0 z-[5]">
          <PhoneMockup screenPhase={screenPhase} phoneTilt={phoneTilt} />
        </div>

        <div className="absolute inset-0 z-10 hidden lg:block">
          {APP_LABELS.map((screen, i) => (
            <ScreenLabel
              key={screen.id}
              screen={screen}
              displayIndex={i + 1}
              screenPhase={screenPhase}
              phoneTilt={phoneTilt}
            />
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-2 z-10 flex flex-col items-center gap-4 px-6">
          <div
            className="flex w-full flex-col items-center text-center lg:hidden"
            style={{ opacity: screenPhase > 0.1 && phoneTilt > 0.85 ? 1 : 0 }}
          >
            <p className="font-display text-lg text-stone-900">{activeScreen.name}</p>
            <p className="font-body mt-1 text-xs text-stone-500">{activeScreen.description}</p>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <button
              type="button"
              onClick={scrollKaydir}
              className="flex flex-col items-center gap-1 text-stone-400 transition-colors hover:text-stone-600"
            >
              <span className="font-body text-[10px] uppercase tracking-[0.26em]">Kaydır</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="mt-3 flex gap-1.5">
              {APP_SCREENS.map((screen, i) => (
                <div
                  key={screen.id}
                  className={cn(
                    "h-1 rounded-full transition-all duration-300",
                    i === activeIndex ? "w-5 bg-stone-800" : "w-1 bg-stone-300/80"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 right-5 z-10 hidden md:flex flex-col items-center gap-2">
          <div className="h-[72px] w-px overflow-hidden rounded-full bg-stone-300/50">
            <div
              className="h-full w-full origin-top bg-stone-800"
              style={{ transform: `scaleY(${clamp01(scrollProgress)})` }}
            />
          </div>
          <span className="font-body text-[9px] tracking-wider text-stone-400">
            {activeIndex + 1}/{APP_SCREENS.length}
          </span>
        </div>
      </div>
    </section>
  );
}
