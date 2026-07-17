export const HERO_VIDEO_LOCAL = "/videos/hero.mp4";

// Gezi temalı stok video (Pexels — sokakta yürüyen turist)
export const HERO_VIDEO_STOCK =
  "https://videos.pexels.com/video-files/4434242/4434242-sd_640_360_25fps.mp4";

// Kendi videonu public/videos/hero.mp4 yapınca true yap
export const USE_LOCAL_HERO_VIDEO = false;

export const HERO_VIDEO_ACTIVE = USE_LOCAL_HERO_VIDEO
  ? HERO_VIDEO_LOCAL
  : HERO_VIDEO_STOCK;
