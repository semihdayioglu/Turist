"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { APP_SCREENS, screenSrc } from "@/lib/app-screens";
import { smoothstep } from "@/lib/scroll-state";
import { cn } from "@/lib/utils";

const DESKTOP_HEIGHT_VH = 64;
const DESKTOP_HEIGHT_PX = 700;
const DESKTOP_IMAGE_SCALE = 1.35;

/** Yatay (ilk) hal — sadece mobil */
const MOBILE_LANDSCAPE_HEIGHT_VH = 36;
const MOBILE_LANDSCAPE_HEIGHT_PX = 460;
const MOBILE_LANDSCAPE_IMAGE_SCALE = 1.18;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

type PhoneMockupProps = {
  screenPhase: number;
  phoneTilt: number;
};

function ScreenPlaceholder({ title, color }: { title: string; color: string }) {
  return (
    <div
      className="flex aspect-[9/19.5] w-full flex-col items-center justify-center rounded-[2.5rem] px-6 text-center shadow-2xl"
      style={{ backgroundColor: color }}
    >
      <p className="font-display text-xl text-stone-800">{title}</p>
      <p className="font-body mt-2 text-xs text-stone-500">Yakında</p>
    </div>
  );
}

function PhoneImage({
  screen,
  className,
  style,
  imageScale,
}: {
  screen: (typeof APP_SCREENS)[number];
  className?: string;
  style?: React.CSSProperties;
  imageScale: number;
}) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div className={className} style={style}>
        <ScreenPlaceholder title={screen.name} color={screen.color} />
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0", className)} style={style}>
      <Image
        src={screenSrc(screen.file)}
        alt={screen.name}
        fill
        className="object-contain object-center"
        style={{ transform: `scale(${imageScale})` }}
        sizes="(max-width: 768px) 100vw, 700px"
        priority={screen.id === "lock"}
        onError={() => setMissing(true)}
      />
    </div>
  );
}

export default function PhoneMockup({ screenPhase, phoneTilt }: PhoneMockupProps) {
  const isMobile = useIsMobile();
  const from = Math.min(Math.floor(screenPhase), APP_SCREENS.length - 1);
  const t = screenPhase - from;
  const to = Math.min(from + 1, APP_SCREENS.length - 1);
  const isTransition = t > 0.02 && from !== to;
  const isUnlock = from === 0 && to === 1;

  const fromScreen = APP_SCREENS[from];
  const toScreen = APP_SCREENS[to];
  const enterSide = toScreen.label?.side ?? "right";
  const slideT = smoothstep(0, 1, t);

  const rotate = -90 + 90 * phoneTilt;
  const scale = 0.88 + phoneTilt * 0.12;

  const mobileGrow = smoothstep(0, 1, phoneTilt);
  const boxHeightVh = isMobile
    ? lerp(MOBILE_LANDSCAPE_HEIGHT_VH, DESKTOP_HEIGHT_VH, mobileGrow)
    : DESKTOP_HEIGHT_VH;
  const boxHeightPx = isMobile
    ? lerp(MOBILE_LANDSCAPE_HEIGHT_PX, DESKTOP_HEIGHT_PX, mobileGrow)
    : DESKTOP_HEIGHT_PX;
  const imageScale = isMobile
    ? lerp(MOBILE_LANDSCAPE_IMAGE_SCALE, DESKTOP_IMAGE_SCALE, mobileGrow)
    : DESKTOP_IMAGE_SCALE;

  const boxHeight = `min(${boxHeightVh}dvh, ${Math.round(boxHeightPx)}px)`;
  const boxWidth = `min(92vw, calc(${boxHeight} * 390 / 844))`;

  return (
    <div className="flex h-full w-full items-center justify-center px-0 [perspective:1400px]">
      <div
        className="relative will-change-transform"
        style={{
          transform: `rotate(${rotate}deg) scale(${scale})`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="relative"
          style={{
            height: boxHeight,
            width: boxWidth,
          }}
        >
          <div className="relative h-full w-full overflow-visible">
            {!isTransition && <PhoneImage screen={fromScreen} imageScale={imageScale} />}

            {isTransition && isUnlock && (
              <>
                <PhoneImage
                  screen={fromScreen}
                  imageScale={imageScale}
                  style={{
                    transform: `translateY(${-t * 108}%)`,
                    opacity: 1 - t * 0.2,
                  }}
                />
                <PhoneImage
                  screen={toScreen}
                  imageScale={imageScale}
                  style={{
                    transform: `translateY(${(1 - t) * 18}%)`,
                    opacity: Math.min(1, t * 1.15),
                  }}
                />
              </>
            )}

            {isTransition && !isUnlock && (
              <>
                <PhoneImage
                  screen={fromScreen}
                  imageScale={imageScale}
                  style={{
                    opacity: 1 - slideT * 0.35,
                    transform: `scale(${1 - slideT * 0.04})`,
                  }}
                />
                <PhoneImage
                  screen={toScreen}
                  imageScale={imageScale}
                  style={{
                    transform: `translateX(${
                      enterSide === "left" ? (1 - slideT) * -110 : (1 - slideT) * 110
                    }%)`,
                    opacity: slideT,
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
