import { V2SvgDefs } from "@/components/v2/icons";

/** V2 fon qatlamlari: statik gradient, vinetka va global SVG gradientlar. */
export function V2Background() {
  return (
    <>
      <V2SvgDefs />
      <div className="aurora" aria-hidden>
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>
      <div className="vignette" aria-hidden />
    </>
  );
}
