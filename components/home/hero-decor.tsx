import { Crown, Gift, Sparkle, Star } from "lucide-react";

/**
 * Hero orqa fonidagi bezakli, suzuvchi Telegram ikonkalari (Stars / Premium / Gift).
 * To‘liq dekorativ — server komponenti, faqat CSS animatsiyalari ishlaydi.
 */
export function HeroDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Aurora gradient bloblari */}
      <div className="absolute -left-24 -top-24 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(34,158,217,0.22),transparent_70%)] blur-2xl motion-safe:animate-aurora" />
      <div className="absolute -right-20 top-10 size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.16),transparent_70%)] blur-2xl motion-safe:animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-[radial-gradient(circle,rgba(245,165,36,0.14),transparent_70%)] blur-2xl motion-safe:animate-aurora [animation-delay:-3s]" />

      {/* Suzuvchi ikonkalar */}
      <Star className="absolute left-[8%] top-[22%] size-7 fill-amber-300/70 text-amber-400 drop-shadow motion-safe:animate-float" strokeWidth={1.5} />
      <Crown className="absolute right-[12%] top-[16%] size-8 text-[#229ED9]/80 drop-shadow motion-safe:animate-float-slow" strokeWidth={1.6} />
      <Gift className="absolute left-[18%] bottom-[14%] size-7 text-fuchsia-400/80 drop-shadow motion-safe:animate-float-delayed" strokeWidth={1.6} />
      <Sparkle className="absolute right-[22%] bottom-[24%] size-5 fill-amber-300/60 text-amber-300 motion-safe:animate-twinkle" strokeWidth={1.4} />
      <Sparkle className="absolute left-[42%] top-[10%] size-4 fill-sky-300/60 text-sky-300 motion-safe:animate-twinkle [animation-delay:-1.5s]" strokeWidth={1.4} />
      <Star className="absolute right-[6%] bottom-[10%] size-5 fill-amber-200/60 text-amber-300 motion-safe:animate-twinkle [animation-delay:-2.2s]" strokeWidth={1.4} />
    </div>
  );
}
