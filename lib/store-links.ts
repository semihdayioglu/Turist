export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.turrehberi.app";

export const APP_STORE_URL =
  "https://apps.apple.com/tr/app/turist/id0000000000";

export function getStoreUrl(userAgent = ""): string {
  if (/iPhone|iPad|iPod/i.test(userAgent)) return APP_STORE_URL;
  if (/Android/i.test(userAgent)) return PLAY_STORE_URL;
  return PLAY_STORE_URL;
}
