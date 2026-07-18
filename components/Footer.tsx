"use client";

import Image from "next/image";
import Link from "next/link";
import StoreDownloadLink from "@/components/StoreDownloadLink";

const navLinks = [
  { label: "Keşfet", href: "/#kesfet" },
  { label: "İndir", href: "/#indir" },
  { label: "Gizlilik", href: "/gizlilik" },
  { label: "Lisans Sözleşmesi", href: "/lisans" },
  { label: "Hesap Silme", href: "/hesap-silme" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/70 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex w-fit items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Turist"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg object-cover"
            />
            <span className="font-display text-base font-medium tracking-tight text-stone-900">
              Turist
            </span>
          </Link>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-stone-500 transition-colors hover:text-stone-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <StoreDownloadLink className="font-body inline-flex w-fit items-center justify-center rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700">
            Uygulamayı İndir
          </StoreDownloadLink>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-stone-200/60 pt-6 text-xs text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Turist. Tüm hakları saklıdır.</p>
          <a
            href="mailto:semihdayioglu.sd@gmail.com"
            className="font-body w-fit transition-colors hover:text-stone-700"
          >
            semihdayioglu.sd@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
