import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

// Next.js 16: `middleware` konvensiyasi `proxy`ga o'zgartirildi.
const intl = createMiddleware(routing);

function hasLocalePrefix(pathname: string): boolean {
  return routing.locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
}

/**
 * Prefikssiz manzil (`/`, `/premium`, `/blog/...`) — `/uz/...` ga **308**.
 *
 * NEGA next-intl'ga qoldirilmaydi: u shu redirectni 307 (vaqtinchalik) bilan
 * beradi. Tashqi havolalar deyarli har doim `starstg.uz` yoki
 * `starstg.uz/premium` ko'rinishida keladi; 307 da Google havola kuchini
 * to'liq o'tkazmaydi va eski manzilni indeksda saqlab qolishi mumkin. 308
 * «doimiy» — signal to'liq o'tadi. `app/page.tsx` dagi `permanentRedirect`
 * bu yerdan keyin turgani uchun hech qachon ishlamasdi.
 *
 * Prefiksli yo'llar next-intl'ga o'tadi (til konteksti, alternate havolalar).
 */
export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!hasLocalePrefix(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url, 308);
  }
  return intl(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|opengraph-image|.*\\..*).*)"],
};
