import type { ReactNode } from "react";
import { MarketingShell } from "@/components/layout/marketing-shell";

export default function PremiumLayout({ children }: { children: ReactNode }) {
  return <MarketingShell highlight="premium">{children}</MarketingShell>;
}
