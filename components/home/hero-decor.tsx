import { Crown, Gift, Sparkle, Star } from "lucide-react";

/** Tasodifiy joylashgan miltiroq yulduzchalar maydoni. */
const STARFIELD = [
  { top: "12%", left: "6%", size: 10, delay: "0s", dur: "3s" },
  { top: "26%", left: "30%", size: 7, delay: "-1.4s", dur: "3.6s" },
  { top: "8%", left: "52%", size: 8, delay: "-0.8s", dur: "2.8s" },
  { top: "18%", left: "72%", size: 6, delay: "-2.1s", dur: "3.2s" },
  { top: "40%", left: "88%", size: 9, delay: "-1.1s", dur: "3.4s" },
  { top: "58%", left: "10%", size: 7, delay: "-0.5s", dur: "3s" },
  { top: "72%", left: "26%", size: 6, delay: "-2.6s", dur: "3.8s" },
  { top: "82%", left: "60%", size: 8, delay: "-1.8s", dur: "3.1s" },
  { top: "64%", left: "80%", size: 6, delay: "-0.3s", dur: "2.9s" },
  { top: "46%", left: "44%", size: 5, delay: "-2.3s", dur: "3.5s" },
] as const;

/**
 * Hero orqa fonidagi bezakli, suzuvchi Telegram ikonkalari (Stars / Premium / Gift)
 * va miltiroq yulduzlar maydoni. To‘liq dekorativ — server komponenti, faqat CSS.
 */
export function HeroDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Aurora gradient bloblari */}
      <div className="absolute -left-24 -top-24 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(34,158,217,0.22),transparent_70%)] blur-2xl motion-safe:animate-aurora" />
      <div className="absolute -right-20 top-10 size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.16),transparent_70%)] blur-2xl motion-safe:animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-[radial-gradient(circle,rgba(245,165,36,0.14),transparent_70%)] blur-2xl motion-safe:animate-aurora [animation-delay:-3s]" />

      {/* Miltiroq yulduzlar maydoni */}
      {STARFIELD.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#229ED9]/60 motion-safe:animate-twinkle dark:bg-sky-300/70"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.dur,
            boxShadow: "0 0 8px 1px rgba(56,189,248,0.45)",
          }}
        />
      ))}

      {/* Suzuvchi xizmat ikonkalari */}
      <Star className="absolute left-[8%] top-[22%] size-7 fill-amber-300/70 text-amber-400 drop-shadow motion-safe:animate-float" strokeWidth={1.5} />
      <Crown className="absolute right-[12%] top-[16%] size-8 text-[#229ED9]/80 drop-shadow motion-safe:animate-float-slow" strokeWidth={1.6} />
      <Gift className="absolute left-[18%] bottom-[14%] size-7 text-fuchsia-400/80 drop-shadow motion-safe:animate-float-delayed" strokeWidth={1.6} />
      <Sparkle className="absolute right-[22%] bottom-[24%] size-5 fill-amber-300/60 text-amber-300 motion-safe:animate-twinkle" strokeWidth={1.4} />
      <Sparkle className="absolute left-[42%] top-[10%] size-4 fill-sky-300/60 text-sky-300 motion-safe:animate-twinkle [animation-delay:-1.5s]" strokeWidth={1.4} />
      <Star className="absolute right-[6%] bottom-[10%] size-5 fill-amber-200/60 text-amber-300 motion-safe:animate-twinkle [animation-delay:-2.2s]" strokeWidth={1.4} />
    </div>
  );
}
