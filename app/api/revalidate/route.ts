import { revalidateTag } from "next/cache";
import { REVIEWS_TAG } from "@/lib/reviews";

/**
 * Bot backend'idan webhook: sharh tasdiqlanganda `reviews` tegini eskirgan
 * deb belgilaydi. Ma'lumot bu yerga kelmaydi — landing keyingi tashrifda
 * `/api/public/reviews` dan o'zi qayta o'qiydi.
 *
 * Vercel env: REVALIDATE_SECRET (bot serveridagi LANDING_REVALIDATE_SECRET bilan bir xil).
 */
export async function POST(req: Request) {
  const expected = process.env.REVALIDATE_SECRET;
  const given = req.headers.get("x-revalidate-secret");
  if (!expected || !given || given !== expected) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  revalidateTag(REVIEWS_TAG, "max");
  return Response.json({ ok: true, revalidated: REVIEWS_TAG });
}
