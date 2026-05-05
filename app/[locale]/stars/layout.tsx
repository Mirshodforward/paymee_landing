import type { ReactNode } from "react";
import { MarketingShell } from "@/components/layout/marketing-shell";

export default function StarsLayout({ children }: { children: ReactNode }) {
  return <MarketingShell highlight="stars">{children}</MarketingShell>;
}
