import type { ReactNode } from "react";
import { V2Background } from "@/components/v2/v2-background";
import { V2Effects } from "@/components/v2/v2-effects";
import { StarIcon } from "@/components/v2/icons";

/**
 * V2 «Aurora» sahifa qobig‘i: `.v2` ildiz klassi, preloader, fon qatlamlari,
 * navigatsiya/footer slotlari va barcha interaktiv effektlar.
 */
export function V2Shell({
  nav,
  children,
  footer,
}: {
  nav: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="v2">
      <div className="ld-screen" data-v2-loader aria-hidden>
        <div className="ld">
          <span className="ld-star">
            <StarIcon style={{ width: 54, height: 54, fill: "url(#starGrad)" }} />
          </span>
          <div className="ld-num" data-v2-loader-num>
            0%
          </div>
        </div>
      </div>

      <V2Background />

      <div className="v2-content">
        {nav}
        <main>{children}</main>
        {footer}
      </div>

      <V2Effects />
    </div>
  );
}
