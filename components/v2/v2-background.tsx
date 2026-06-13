import { V2SvgDefs } from "@/components/v2/icons";

/**
 * V2 fon qatlamlari: aurora bloblar, shovqin, vinetka, scroll-progress,
 * maxsus kursor elementlari va global SVG gradientlar.
 * Markup statik — interaktivlik V2Effects orqali ulanadi.
 */
export function V2Background() {
  return (
    <>
      <V2SvgDefs />
      <div className="aurora" aria-hidden>
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>
      <div className="noise" aria-hidden />
      <div className="vignette" aria-hidden />
      <div className="progress" data-v2-progress aria-hidden />
      <div className="cur-dot" data-v2-cursor-dot aria-hidden />
      <div className="cur-ring" data-v2-cursor-ring aria-hidden />
    </>
  );
}
