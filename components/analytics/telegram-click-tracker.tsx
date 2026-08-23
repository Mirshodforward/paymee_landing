"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Telegram havolalariga bosishni Vercel Analytics'ga yozadi.
 *
 * Saytda botga olib boruvchi 23 ta CTA bor, 13 ta faylda tarqalgan — ularning
 * ko‘pi server komponentlarida, ya’ni `onClick` qo‘shib bo‘lmaydi. Shuning
 * uchun bu yerda `document` darajasidagi bitta delegatsiyalangan listener
 * ishlatiladi: u barcha mavjud havolalarni va keyin qo‘shiladiganlarini ham
 * avtomatik qamrab oladi.
 *
 * DIQQAT: Vercel'da custom event'lar Pro rejadan boshlab ko‘rinadi. Hobby'da
 * bu chaqiruvlar xatosiz o‘tadi, lekin panelda hisobot chiqmaydi.
 */
export function TelegramClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href*="t.me/"]');
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const isSupport = href.includes("Support");

      // Qaysi blokdan bosilgani: eng yaqin `data-cta` yoki `id` bo‘lgan bo‘lim.
      const context =
        link.closest<HTMLElement>("[data-cta]")?.dataset.cta ??
        link.closest<HTMLElement>("section[id]")?.id ??
        "other";

      track(isSupport ? "support_open" : "bot_open", {
        source: context,
        path: window.location.pathname,
      });
    }

    // Capture — havola yangi tabda ochilishidan oldin hodisa yozilsin.
    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
