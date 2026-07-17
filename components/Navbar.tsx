"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import StoreDownloadLink from "@/components/StoreDownloadLink";

const AnimatedNavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a
      href={href}
      className="group inline-block overflow-hidden text-sm"
      style={{ height: "20px" }}
    >
      <div
        className="transition-transform duration-300 ease-out group-hover:-translate-y-1/2"
        style={{ lineHeight: "20px" }}
      >
        <div className="text-stone-500" style={{ height: "20px" }}>
          {children}
        </div>
        <div className="text-stone-900" style={{ height: "20px" }}>
          {children}
        </div>
      </div>
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRounded, setIsRounded] = useState(true);
  const shapeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);
    };
  }, []);

  const openMenu = () => {
    if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);
    setIsRounded(false);
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    shapeTimeoutRef.current = window.setTimeout(() => setIsRounded(true), 300);
  };

  const toggleMenu = () => (isOpen ? closeMenu() : openMenu());

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    closeMenu();
    window.location.href = "/";
  };

  const navLinks = [
    { label: "Keşfet", href: "/#kesfet" },
    { label: "İndir", href: "/#indir" },
  ];

  const logoElement = (
    <Image
      src="/screens/logo2.png"
      alt="Turist"
      width={56}
      height={56}
      priority
      className="h-14 w-auto object-contain"
    />
  );

  const ctaBtn = (
    <StoreDownloadLink
      onClick={closeMenu}
      className="font-body relative z-10 block w-full rounded-full bg-stone-900 px-4 py-2 text-center text-xs font-medium text-white transition-colors duration-200 hover:bg-stone-700 sm:w-auto sm:px-5 sm:text-sm"
    >
      Uygulamayı İndir
    </StoreDownloadLink>
  );

  return (
    <header
      className={`fixed top-6 left-1/2 z-50 flex w-[calc(100%-2rem)] -translate-x-1/2 flex-col items-center border border-stone-200/80 bg-white/70 py-3 pl-6 pr-6 backdrop-blur-md sm:w-auto ${
        isRounded ? "rounded-full" : "rounded-xl"
      } transition-[border-radius] duration-0`}
    >
      <div className="flex w-full items-center justify-between gap-x-6 sm:gap-x-8">
        <Link href="/" onClick={handleLogoClick} className="flex items-center">
          {logoElement}
        </Link>

        <nav className="hidden items-center space-x-6 text-sm sm:flex">
          {navLinks.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden items-center sm:flex">{ctaBtn}</div>

        <button
          className="flex h-8 w-8 items-center justify-center text-stone-600 sm:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Menüyü Kapat" : "Menüyü Aç"}
        >
          <MenuToggleIcon open={isOpen} className="h-6 w-6" duration={500} />
        </button>
      </div>

      <div
        className={`flex w-full flex-col items-center overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${
          isOpen ? "max-h-125 pt-4 opacity-100" : "pointer-events-none max-h-0 pt-0 opacity-0"
        }`}
      >
        <nav className="flex w-full flex-col items-center space-y-4 text-base">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-body w-full text-center text-stone-500 transition-colors hover:text-stone-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-4 flex w-full flex-col items-center">{ctaBtn}</div>
      </div>
    </header>
  );
}
