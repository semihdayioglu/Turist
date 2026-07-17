import Image from "next/image";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store-links";
const storeLinkClass =
  "inline-block opacity-95 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function DownloadSection() {
  return (
    <section
      id="indir"
      className="relative scroll-mt-28 bg-background"
      style={{
        paddingTop: "8.5rem",
        paddingBottom: "clamp(9.5rem, 21vh, 14.5rem)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="section-eyebrow !text-[15px] !tracking-[0.3em]">İndir</p>
          <h2 className="section-title mt-3">Şehri keşfetmeye hazır mısın?</h2>
          <p className="font-body mx-auto mt-8 max-w-lg text-sm font-light leading-relaxed text-stone-500">
            Turist uygulaması App Store ve Google Play&apos;de. Uygulamayı hemen indir.
            Kullanmaya başla
          </p>

          <div
            className="mx-auto flex w-full flex-col items-center justify-center gap-10 sm:flex-row sm:gap-10"
            style={{ marginTop: "5.5rem" }}
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={storeLinkClass}
              aria-label="App Store'dan indir"
            >
              <Image
                src="/badges/app-store.svg"
                alt="Download on the App Store"
                width={156}
                height={48}
                className="h-12 w-auto"
              />
            </a>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={storeLinkClass}
              aria-label="Google Play'den indir"
            >
              <Image
                src="/badges/google-play.svg"
                alt="Get it on Google Play"
                width={156}
                height={48}
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
