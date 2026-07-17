"use client";

import type { MouseEvent, ReactNode } from "react";
import { getStoreUrl, PLAY_STORE_URL } from "@/lib/store-links";

interface StoreDownloadLinkProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function StoreDownloadLink({
  className,
  children,
  onClick,
}: StoreDownloadLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (typeof navigator === "undefined") return;

    event.preventDefault();
    window.open(getStoreUrl(navigator.userAgent), "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
