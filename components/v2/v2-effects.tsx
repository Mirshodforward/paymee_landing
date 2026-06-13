"use client";

import { useEffect } from "react";

/**
 * V2 «Aurora» dizayni uchun barcha interaktiv effektlar bitta joyda.
 * Markup server-render qilinadi; bu komponent faqat DOM’ni data-atribut/klass
 * orqali topib jonlantiradi (preloader, kursor, reveal, taymerlar, telefon
 * simulyatsiyasi, FAQ va h.k.). SEO uchun kontent JS’siz ham ko‘rinadi.
 */
export function V2Effects() {
  useEffect(() => {
    const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const FINE = window.matchMedia("(pointer: fine)").matches;
    const root = document.documentElement;
    root.classList.add("v2-js");

    const STAR =
      "M12 2.5l2.65 5.86 6.4.62-4.8 4.3 1.4 6.27L12 16.9l-5.65 2.65 1.4-6.27-4.8-4.3 6.4-.62z";
    const q = <T extends Element = HTMLElement>(s: string) =>
      document.querySelector<T>(s);
    const qa = <T extends Element = HTMLElement>(s: string) =>
      Array.from(document.querySelectorAll<T>(s));

    const cleanups: Array<() => void> = [];
    const rafs: number[] = [];
    const timers: number[] = [];

    /* ===== Preloader ===== */
    const loader = q("[data-v2-loader]");
    const ldNum = q("[data-v2-loader-num]");
    const finishLoad = () => loader?.classList.add("done");
    if (loader) {
      if (RM) {
        finishLoad();
      } else {
        const t0 = performance.now();
        const lf = (n: number) => {
          const p = Math.min(1, (n - t0) / 850);
          if (ldNum) ldNum.textContent = Math.round(p * 100) + "%";
          if (p < 1) rafs.push(requestAnimationFrame(lf));
          else timers.push(window.setTimeout(finishLoad, 120));
        };
        rafs.push(requestAnimationFrame(lf));
      }
    }

    /* ===== Scroll progress + nav ===== */
    const prog = q("[data-v2-progress]");
    const nav = q("[data-v2-nav]");
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (prog) prog.style.width = p * 100 + "%";
      nav?.classList.toggle("scrolled", h.scrollTop > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));
    onScroll();

    /* ===== Maxsus kursor ===== */
    if (FINE && !RM) {
      root.classList.add("v2-fine");
      const dot = q("[data-v2-cursor-dot]");
      const ring = q("[data-v2-cursor-ring]");
      if (dot && ring) {
        let cx = innerWidth / 2,
          cy = innerHeight / 2,
          rx = cx,
          ry = cy;
        const move = (e: PointerEvent) => {
          cx = e.clientX;
          cy = e.clientY;
          dot.style.left = cx + "px";
          dot.style.top = cy + "px";
        };
        window.addEventListener("pointermove", move, { passive: true });
        cleanups.push(() => window.removeEventListener("pointermove", move));
        const rf = () => {
          rx += (cx - rx) * 0.16;
          ry += (cy - ry) * 0.16;
          ring.style.left = rx + "px";
          ring.style.top = ry + "px";
          rafs.push(requestAnimationFrame(rf));
        };
        rf();
        const over = (e: MouseEvent) => {
          const t = e.target as Element | null;
          ring.classList.toggle("hov", !!t?.closest?.("a,button,summary,.faq-q"));
        };
        document.addEventListener("mouseover", over);
        cleanups.push(() => document.removeEventListener("mouseover", over));
      }
    }

    /* ===== Reveal ===== */
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.13 },
    );
    qa(".rv").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    /* ===== Sanagichlar ===== */
    const animNum = (el: HTMLElement) => {
      const t = +(el.dataset.target ?? "0");
      const suffix = el.dataset.suffix ?? "";
      const dur = 1500;
      const st = performance.now();
      const f = (n: number) => {
        const p = Math.min(1, (n - st) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(t * e).toLocaleString("en-US").replace(/,/g, " ") + suffix;
        if (p < 1) rafs.push(requestAnimationFrame(f));
        else el.textContent = t.toLocaleString("en-US").replace(/,/g, " ") + suffix;
      };
      rafs.push(requestAnimationFrame(f));
    };
    const cio = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            if (RM) {
              const t = +(el.dataset.target ?? "0");
              el.textContent =
                t.toLocaleString("en-US").replace(/,/g, " ") + (el.dataset.suffix ?? "");
            } else animNum(el);
            cio.unobserve(el);
          }
        });
      },
      { threshold: 0.5 },
    );
    qa(".cnt").forEach((el) => cio.observe(el));
    cleanups.push(() => cio.disconnect());

    /* ===== Halqa taymer ===== */
    const ringBar = q<SVGCircleElement>("[data-v2-ring-bar]");
    const ringNum = q("[data-v2-ring-num]");
    if (ringBar && ringNum) {
      const C = 2 * Math.PI * 86;
      ringBar.style.strokeDasharray = String(C);
      ringBar.style.strokeDashoffset = String(C);
      let ringOn = false;
      const ringLoop = () => {
        const dur = 4600,
          target = 9.42,
          t0 = performance.now();
        const f = (n: number) => {
          const p = Math.min(1, (n - t0) / dur);
          ringNum.textContent = (target * p).toFixed(2);
          ringBar.style.strokeDashoffset = String(C * (1 - p));
          if (p < 1) rafs.push(requestAnimationFrame(f));
          else
            timers.push(
              window.setTimeout(() => {
                ringBar.style.strokeDashoffset = String(C);
                ringNum.textContent = "0.00";
                timers.push(window.setTimeout(ringLoop, 400));
              }, 1100),
            );
        };
        rafs.push(requestAnimationFrame(f));
      };
      const rio = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting && !ringOn) {
              ringOn = true;
              if (RM) {
                ringNum.textContent = "9.42";
                ringBar.style.strokeDashoffset = "0";
              } else ringLoop();
              rio.unobserve(e.target);
            }
          });
        },
        { threshold: 0.4 },
      );
      const ringEl = q("[data-v2-ring]");
      if (ringEl) rio.observe(ringEl);
      cleanups.push(() => rio.disconnect());
    }

    /* ===== 3D telefon tilt + chip parallaks ===== */
    const stage = q("[data-v2-stage]");
    const phone = q("[data-v2-phone]");
    const chips = qa(".chip");
    if (FINE && !RM && stage && phone) {
      let tx = 0,
        ty = 0,
        ctx = 0,
        cty = 0,
        px = 0,
        py = 0;
      const onMove = (e: MouseEvent) => {
        const r = stage.getBoundingClientRect();
        px = (e.clientX - r.left) / r.width - 0.5;
        py = (e.clientY - r.top) / r.height - 0.5;
        tx = px * 13;
        ty = -py * 9;
      };
      const onLeave = () => {
        tx = ty = px = py = 0;
      };
      stage.addEventListener("mousemove", onMove);
      stage.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        stage.removeEventListener("mousemove", onMove);
        stage.removeEventListener("mouseleave", onLeave);
      });
      const tf = () => {
        ctx += (tx - ctx) * 0.07;
        cty += (ty - cty) * 0.07;
        phone.style.transform = `rotateY(${ctx.toFixed(2)}deg) rotateX(${cty.toFixed(2)}deg)`;
        chips.forEach((c) => {
          const d = +(c.dataset.depth ?? "20");
          c.style.translate = `${(px * d).toFixed(1)}px ${(py * d * 0.7).toFixed(1)}px`;
        });
        rafs.push(requestAnimationFrame(tf));
      };
      tf();
    }

    /* ===== Spotlight kartalar ===== */
    if (FINE) {
      qa(".spot").forEach((card) => {
        const mm = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", e.clientX - r.left + "px");
          card.style.setProperty("--my", e.clientY - r.top + "px");
        };
        card.addEventListener("mousemove", mm);
        cleanups.push(() => card.removeEventListener("mousemove", mm));
      });
    }

    /* ===== Magnit tugmalar ===== */
    if (FINE && !RM) {
      qa(".mag").forEach((b) => {
        b.style.transition =
          "transform .2s ease-out, box-shadow .3s, background-position .5s, border-color .3s, background .3s";
        const mm = (e: MouseEvent) => {
          const r = b.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) * 0.22;
          const y = (e.clientY - r.top - r.height / 2) * 0.35;
          b.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
        };
        const ml = () => {
          b.style.transform = "";
        };
        b.addEventListener("mousemove", mm);
        b.addEventListener("mouseleave", ml);
        cleanups.push(() => {
          b.removeEventListener("mousemove", mm);
          b.removeEventListener("mouseleave", ml);
        });
      });
    }

    /* ===== Yulduz portlashi ===== */
    const starBurst = (
      host: HTMLElement,
      ox: number | null,
      oy: number | null,
      count: number,
    ) => {
      for (let i = 0; i < count; i++) {
        const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        s.setAttribute("viewBox", "0 0 24 24");
        s.classList.add("bstar");
        if (ox !== null && oy !== null) {
          s.style.left = ox + "px";
          s.style.top = oy + "px";
        }
        s.innerHTML = `<path d="${STAR}"/>`;
        host.appendChild(s);
        const a = Math.random() * Math.PI * 2,
          d = 60 + Math.random() * 130,
          rx = Math.cos(a) * d,
          ry = Math.sin(a) * d - 40,
          rot = Math.random() * 260 - 130,
          sc = 0.6 + Math.random() * 1.2;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            s.style.transform = `translate(${rx}px,${ry}px) rotate(${rot}deg) scale(${sc})`;
            s.style.opacity = "0";
          }),
        );
        timers.push(window.setTimeout(() => s.remove(), 1400));
      }
    };

    /* ===== Telefon ichidagi jonli buyurtma ===== */
    const phoneEl = q("[data-v2-sim]");
    if (phoneEl) {
      const sim = {
        m1: phoneEl.querySelector<HTMLElement>("[data-sim-m1]"),
        m2: phoneEl.querySelector<HTMLElement>("[data-sim-m2]"),
        m3: phoneEl.querySelector<HTMLElement>("[data-sim-m3]"),
        m4: phoneEl.querySelector<HTMLElement>("[data-sim-m4]"),
        payTxt: phoneEl.querySelector<HTMLElement>("[data-sim-paytxt]"),
        payIc: phoneEl.querySelector<HTMLElement>("[data-sim-payic]"),
        timer: phoneEl.querySelector<HTMLElement>("[data-sim-timer]"),
        num: phoneEl.querySelector<HTMLElement>("[data-sim-num]"),
        fill: phoneEl.querySelector<HTMLElement>("[data-sim-fill]"),
        burst: phoneEl.querySelector<HTMLElement>("[data-sim-burst]"),
      };
      const payDoneTxt = phoneEl.dataset.payDone ?? "Qabul qilindi";
      const payWaitTxt = phoneEl.dataset.payWait ?? "To‘lov kutilmoqda…";
      let simTimers: number[] = [];
      const st = (fn: () => void, ms: number) => {
        const id = window.setTimeout(fn, ms);
        simTimers.push(id);
        timers.push(id);
      };
      const setNum = (v: string) => {
        if (sim.num?.firstChild) sim.num.firstChild.nodeValue = v;
      };
      const tickTimer = () => {
        const dur = 4200,
          target = 9.42,
          t0 = performance.now();
        const f = (n: number) => {
          const p = Math.min(1, (n - t0) / dur),
            v = target * p;
          setNum((v < 10 ? "0" : "") + v.toFixed(2));
          if (sim.fill) sim.fill.style.width = p * 100 + "%";
          if (p < 1) rafs.push(requestAnimationFrame(f));
        };
        rafs.push(requestAnimationFrame(f));
      };
      const setPayDone = () => {
        if (sim.payTxt) {
          sim.payTxt.textContent = payDoneTxt;
          sim.payTxt.classList.add("ok");
        }
        if (sim.payIc) sim.payIc.textContent = "✅";
      };
      const runSim = () => {
        simTimers.forEach(clearTimeout);
        simTimers = [];
        [sim.m1, sim.m2, sim.m3, sim.m4, sim.timer].forEach((el) =>
          el?.classList.remove("show"),
        );
        if (sim.fill) sim.fill.style.width = "0%";
        setNum("00.00");
        if (sim.payTxt) {
          sim.payTxt.textContent = payWaitTxt;
          sim.payTxt.classList.remove("ok");
        }
        if (sim.payIc) sim.payIc.textContent = "💳";
        st(() => sim.m1?.classList.add("show"), 420);
        st(() => sim.m2?.classList.add("show"), 1350);
        st(() => sim.m3?.classList.add("show"), 2150);
        st(setPayDone, 3050);
        st(() => {
          sim.timer?.classList.add("show");
          tickTimer();
        }, 3450);
        st(() => {
          sim.m4?.classList.add("show");
          if (sim.burst) starBurst(sim.burst, null, null, 14);
        }, 7850);
        st(runSim, 11600);
      };
      if (RM) {
        [sim.m1, sim.m2, sim.m3, sim.m4, sim.timer].forEach((el) =>
          el?.classList.add("show"),
        );
        setPayDone();
        setNum("09.42");
        if (sim.fill) sim.fill.style.width = "100%";
      } else {
        runSim();
      }
    }

    /* ===== Timeline ===== */
    const tl = q("[data-v2-tl]");
    if (tl) {
      const tio = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              tl.classList.add("live");
              tio.unobserve(tl);
            }
          });
        },
        { threshold: 0.3 },
      );
      tio.observe(tl);
      cleanups.push(() => tio.disconnect());
    }

    /* ===== FAQ ===== */
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

    /* ===== CTA yulduz portlashi ===== */
    const ctaBtn = q("[data-v2-cta-btn]");
    const ctaBurst = q("[data-v2-cta-burst]");
    if (ctaBtn && ctaBurst) {
      const onClick = () => {
        if (RM) return;
        const r = ctaBtn.getBoundingClientRect();
        const h = ctaBurst.getBoundingClientRect();
        starBurst(ctaBurst, r.left - h.left + r.width / 2, r.top - h.top + r.height / 2, 20);
      };
      ctaBtn.addEventListener("click", onClick);
      cleanups.push(() => ctaBtn.removeEventListener("click", onClick));
    }

    return () => {
      cleanups.forEach((fn) => fn());
      rafs.forEach((id) => cancelAnimationFrame(id));
      timers.forEach((id) => clearTimeout(id));
      root.classList.remove("v2-js", "v2-fine");
    };
  }, []);

  return null;
}
