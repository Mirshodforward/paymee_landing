"use client";

import { type ReactNode } from "react";
import { Link, usePathname } from "@/i18n/navigation";

type HomeTopLinkProps = {
  children: ReactNode;
  activeClassName: string;
  inactiveClassName: string;
  /** Masalan mobil menyu yopish */
  onAfterNavigate?: () => void;
};

/** Bosh sahifa (`/`) uchun: boshqa sahifadan — oddiy navigatsiya; allaqachon bosh sahifada — yuqoriga scroll. */
export function HomeTopLink({
  children,
  activeClassName,
  inactiveClassName,
  onAfterNavigate,
}: HomeTopLinkProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Link
      href="/"
      className={isHome ? activeClassName : inactiveClassName}
      scroll={!isHome}
      onClick={(e) => {
        if (isHome) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        onAfterNavigate?.();
      }}
    >
      {children}
    </Link>
  );
}
