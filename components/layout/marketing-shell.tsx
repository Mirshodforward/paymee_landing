import type { ReactNode } from "react";
import type { LandingTopic } from "@/components/landing/landing-topic-article";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type Props = {
  children: ReactNode;
  /** Marketing ichki sahifa — headerda ustunlangan bo‘lim */
  highlight?: LandingTopic;
};

/** Blogdan tashqari marketing ichki sahifalar fon va header/footer uchun */
export function MarketingShell({ children, highlight }: Props) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(34,158,217,0.18),transparent_55%)]"
      />
      <SiteHeader highlight={highlight ?? null} />
      {children}
      <SiteFooter />
    </div>
  );
}
