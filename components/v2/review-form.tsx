"use client";

import { useId, useState, type FormEvent } from "react";
import { PUBLIC_API_BASE } from "@/lib/site";

export type ReviewFormLabels = {
  title: string;
  hint: string;
  name: string;
  namePh: string;
  rating: string;
  text: string;
  textPh: string;
  submit: string;
  sending: string;
  ok: string;
  errGeneric: string;
  errRate: string;
  errShort: string;
  errLong: string;
  errName: string;
  note: string;
};

type Status = "idle" | "sending" | "ok" | "error";

/**
 * Sharh formasi — to'g'ridan-to'g'ri bot backend'iga yozadi (CORS ochiq).
 * Sharh moderatsiyadan keyin chiqadi; forma hech narsani darhol ko'rsatmaydi.
 * `website` — honeypot: odam ko'rmaydi, bot to'ldiradi.
 */
export function ReviewForm({ labels, locale }: { labels: ReviewFormLabels; locale: string }) {
  const id = useId().replace(/:/g, "");
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    /**
     * Forma elementini `await` DAN OLDIN olib qo'yamiz.
     *
     * React hodisa tugagach `e.currentTarget` ni `null` qiladi. Avval
     * `await fetch(...)` dan keyin `e.currentTarget.reset()` chaqirilardi —
     * u TypeError bergan, xato esa quyidagi `catch` ga tushib, MUVAFFAQIYATLI
     * yuborilgan sharhni «Yuborib bo'lmadi» deb ko'rsatgan. Jonli saytda
     * aynan shu holat uchradi: sharh bazaga tushgan, foydalanuvchi xato ko'rgan.
     */
    const form = e.currentTarget;
    const fd = new FormData(form);
    const text = String(fd.get("text") || "").trim();
    if (text.length < 10) {
      setError(labels.errShort);
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(`${PUBLIC_API_BASE}/api/public/reviews`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          rating,
          text,
          locale,
          website: fd.get("website"),
        }),
      });
      if (res.status === 429) {
        setError(labels.errRate);
        setStatus("error");
        return;
      }
      // Server tekshiruvi (400): qaysi maydon noto'g'ri ekanini aytamiz,
      // «birozdan keyin urinib ko'ring» bu yerda foydasiz maslahat.
      if (res.status === 400) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(body?.error === "text_long" ? labels.errLong : body?.error === "name" ? labels.errName : labels.errShort);
        setStatus("error");
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      // Yuborildi. Formani tozalash ixtiyoriy — u muvaffaqiyatni bekor qilmasin.
      setStatus("ok");
      try {
        form.reset();
      } catch {
        /* forma allaqachon DOMdan chiqib ketgan bo'lishi mumkin */
      }
    } catch {
      setError(labels.errGeneric);
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rev-form rev-form-ok" role="status">
        <b>✓</b> {labels.ok}
      </div>
    );
  }

  return (
    <form className="rev-form" onSubmit={onSubmit} noValidate>
      <div className="rev-form-head">
        <b>{labels.title}</b>
        <span>{labels.hint}</span>
      </div>

      <label className="rev-lbl" htmlFor={`${id}-name`}>
        {labels.name}
      </label>
      <input
        id={`${id}-name`}
        name="name"
        className="rev-in"
        placeholder={labels.namePh}
        minLength={2}
        maxLength={40}
        required
        autoComplete="name"
      />

      <span className="rev-lbl">{labels.rating}</span>
      <div className="rev-pick" role="radiogroup" aria-label={labels.rating}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={rating === n}
            aria-label={`${n}/5`}
            className={`rev-pick-star${n <= (hover || rating) ? " on" : ""}`}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(n)}
          >
            ★
          </button>
        ))}
      </div>

      <label className="rev-lbl" htmlFor={`${id}-text`}>
        {labels.text}
      </label>
      <textarea
        id={`${id}-text`}
        name="text"
        className="rev-in rev-ta"
        placeholder={labels.textPh}
        minLength={10}
        maxLength={600}
        rows={4}
        required
      />

      {/* Honeypot — CSS bilan yashirilgan, odam to'ldirmaydi. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="rev-hp"
        aria-hidden="true"
      />

      {status === "error" && error ? (
        <p className="rev-err" role="alert">
          {error}
        </p>
      ) : null}

      <button type="submit" className="btn btn-grad mag rev-submit" disabled={status === "sending"}>
        {status === "sending" ? labels.sending : labels.submit}
      </button>
      <small className="rev-note">{labels.note}</small>
    </form>
  );
}
