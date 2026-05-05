import type { ReactNode } from "react";
import { MarketingShell } from "@/components/layout/marketing-shell";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <MarketingShell highlight="about">{children}</MarketingShell>;
}
