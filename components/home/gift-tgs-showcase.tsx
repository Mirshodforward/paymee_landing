import { TgsSticker } from "@/components/media/tgs-sticker";
import { GIFT_TGS_HOME_SHOWCASE } from "@/lib/gift-tgs-assets";

type GiftTgsShowcaseProps = {
  className?: string;
};

export function GiftTgsShowcase({ className }: GiftTgsShowcaseProps) {
  return (
    <div
      className={
        className ??
        "relative w-full overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white/90 to-fuchsia-50/50 p-4 shadow-lg shadow-fuchsia-500/10 ring-1 ring-fuchsia-100/60 dark:border-slate-600/60 dark:from-slate-900/80 dark:to-fuchsia-950/30 dark:ring-fuchsia-900/35 sm:p-5"
      }
    >
      <div className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-3 sm:gap-4">
        {GIFT_TGS_HOME_SHOWCASE.map((tgsSrc) => (
          <div
            key={tgsSrc}
            className="rounded-2xl bg-white/90 p-2 shadow-inner ring-1 ring-fuchsia-200/40 transition hover:ring-fuchsia-400/50 dark:bg-slate-800/90 dark:ring-fuchsia-800/40"
          >
            <TgsSticker src={tgsSrc} size={84} className="touch-manipulation" />
          </div>
        ))}
      </div>
    </div>
  );
}
