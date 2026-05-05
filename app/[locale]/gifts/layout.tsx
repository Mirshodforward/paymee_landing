import type { ReactNode } from "react";
import { MarketingShell } from "@/components/layout/marketing-shell";

export default function GiftsLayout({ children }: { children: ReactNode }) {
  return <MarketingShell highlight="gifts">{children}</MarketingShell>;
}
