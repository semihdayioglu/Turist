/** Scroll progress for photo-based phone section. */
export const scrollState = {
  progress: 0,
  phoneTilt: 0,
  screenPhase: 0,
};

export function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

/**
 * Her ekranda bekleme (hold) + kısa geçiş.
 * p: 0–1 arası ScrollTrigger ilerlemesi
 */
export function mapScrollProgress(p: number) {
  const rotateEnd = 0.05;
  const lockHoldEnd = 0.08;
  const unlockEnd = 0.12;

  const contentScreens = 5;
  const holdRatio = 0.58;

  let phoneTilt = 0;
  let screenPhase = 0;

  if (p <= rotateEnd) {
    phoneTilt = p / rotateEnd;
    screenPhase = 0;
  } else if (p <= lockHoldEnd) {
    phoneTilt = 1;
    screenPhase = 0;
  } else if (p <= unlockEnd) {
    phoneTilt = 1;
    screenPhase = (p - lockHoldEnd) / (unlockEnd - lockHoldEnd);
  } else {
    phoneTilt = 1;
    const t = (p - unlockEnd) / (1 - unlockEnd);
    const pos = t * contentScreens;
    const idx = Math.min(contentScreens - 1, Math.floor(pos));
    const local = pos - idx;

    if (local < holdRatio || idx === contentScreens - 1) {
      screenPhase = 1 + idx;
    } else {
      const trans = (local - holdRatio) / (1 - holdRatio);
      const eased = smoothstep(0, 1, trans);
      screenPhase = Math.min(contentScreens, 1 + idx + eased);
    }
  }

  return {
    phoneTilt: smoothstep(0, 1, phoneTilt),
    screenPhase,
  };
}
