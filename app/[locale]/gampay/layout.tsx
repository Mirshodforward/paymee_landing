import type { ReactNode } from "react";
import { MarketingShell } from "@/components/layout/marketing-shell";

export default function GamPayLayout({ children }: { children: ReactNode }) {
  return <MarketingShell highlight="gampay">{children}</MarketingShell>;
}
