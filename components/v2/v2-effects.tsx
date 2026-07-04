"use client";

import { useEffect } from "react";

/**
 * V2 yengil interaktiv qatlam: faqat scroll-nav, FAQ va statik qiymatlar.
 * Og‘ir animatsiyalar (kursor, parallaks, simulyatsiya, portlash) olib tashlangan.
 */
export function V2Effects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("v2-js");

    const q = <T extends Element = HTMLElement>(s: string) =>
      document.querySelector<T>(s);
    const qa = <T extends Element = HTMLElement>(s: string) =>
      Array.from(document.querySelectorAll<T>(s));

    const cleanups: Array<() => void> = [];

    q("[data-v2-loader]")?.classList.add("done");

    const nav = q("[data-v2-nav]");
    const onScroll = () => {
      nav?.classList.toggle("scrolled", document.documentElement.scrollTop > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));
    onScroll();

    qa(".cnt").forEach((el) => {
      const node = el as HTMLElement;
      const t = +(node.dataset.target ?? "0");
      node.textContent =
        t.toLocaleString("en-US").replace(/,/g, " ") + (node.dataset.suffix ?? "");
    });

    const ringBar = q<SVGCircleElement>("[data-v2-ring-bar]");
    const ringNum = q("[data-v2-ring-num]");
    if (ringBar && ringNum) {
      const C = 2 * Math.PI * 86;
      ringBar.style.strokeDasharray = String(C);
      ringBar.style.strokeDashoffset = "0";
      ringNum.textContent = "9.42";
    }

    const phoneEl = q("[data-v2-sim]");
    if (phoneEl) {
      const payDoneTxt = phoneEl.dataset.payDone ?? "Qabul qilindi";
      phoneEl.querySelectorAll<HTMLElement>("[data-sim-m1], [data-sim-m2], [data-sim-m3], [data-sim-m4], [data-sim-timer]").forEach((el) =>
        el.classList.add("show"),
      );
      const payTxt = phoneEl.querySelector<HTMLElement>("[data-sim-paytxt]");
      const payIc = phoneEl.querySelector<HTMLElement>("[data-sim-payic]");
      const fill = phoneEl.querySelector<HTMLElement>("[data-sim-fill]");
      const num = phoneEl.querySelector<HTMLElement>("[data-sim-num]");
      if (payTxt) {
        payTxt.textContent = payDoneTxt;
        payTxt.classList.add("ok");
      }
      if (payIc) payIc.textContent = "✅";
      if (fill) fill.style.width = "100%";
      if (num?.firstChild) num.firstChild.nodeValue = "09.42";
    }

    const tl = q("[data-v2-tl]");
    if (tl) tl.classList.add("live");

    qa(".rv").forEach((el) => el.classList.add("in"));

    qa(".faq-q").forEach((btn) => {
      const onClick = () => {
        const it = btn.parentElement;
        if (!it) return;
        const a = it.querySelector<HTMLElement>(".faq-a");
        const open = it.classList.contains("open");
        qa(".faq-it.open").forEach((o) => {
          o.classList.remove("open");
          const oa = o.querySelector<HTMLElement>(".faq-a");
          if (oa) oa.style.maxHeight = "";
          o.querySelector(".faq-q")?.setAttribute("aria-expanded", "false");
        });
        if (!open && a) {
          it.classList.add("open");
          a.style.maxHeight = a.scrollHeight + "px";
          btn.setAttribute("aria-expanded", "true");
        }
      };
      btn.addEventListener("click", onClick);
      cleanups.push(() => btn.removeEventListener("click", onClick));
    });

    return () => {
      cleanups.forEach((fn) => fn());
      root.classList.remove("v2-js");
    };
  }, []);

  return null;
}
