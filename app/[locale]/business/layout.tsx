import type { ReactNode } from "react";
import { MarketingShell } from "@/components/layout/marketing-shell";

export default function BusinessLayout({ children }: { children: ReactNode }) {
  return <MarketingShell highlight="business">{children}</MarketingShell>;
}
