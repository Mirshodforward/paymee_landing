import type { ReactNode } from "react";
import { TelegramIcon } from "@/components/v2/icons";
import { botDeepLink, type DeepLinkProduct } from "@/lib/telegram-deeplink";
import type { FaqItem } from "@/lib/blog-aeo/types";

/** Sahifa boshidagi to‘g‘ridan-to‘g‘ri javob bloki (AEO uchun eng muhim). */
export function AnswerBox({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="answer-box rv">
      <div className="ab-label">
        <span aria-hidden>⭐</span> {label}
      </div>
      {children}
    </div>
  );
}

/**
 * Maqola ichidagi bot CTA — o‘qish davomida konvertatsiya nuqtasi.
 *
 * `product` berilsa, bot kerakli ekranni oldindan to‘ldirilgan holda ochadi:
 * masalan Stars maqolasida `{ kind: "stars", amount: 100 }` — odam botda
 * qaytadan bo‘lim qidirmaydi.
 */
export function InlineCta({ text, product }: { text: string; product?: DeepLinkProduct }) {
  const url = botDeepLink({ page: "blog", placement: "article", product });
  return (
    <div className="inline-cta">
      <p>{text}</p>
      <a className="btn btn-grad btn-sm mag" href={url} target="_blank" rel="noopener noreferrer">
        <TelegramIcon />
        @StarsPaymee_bot
      </a>
    </div>
  );
}

/** Taqqoslash jadvali. Katakcha — ReactNode, shuning uchun yes/no belgilarini ishlatish mumkin. */
export function CompareTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="cmp">
      <table>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const Yes = ({ children }: { children?: ReactNode }) => (
  <span className="yes">✓{children ? ` ${children}` : ""}</span>
);
export const No = ({ children }: { children?: ReactNode }) => (
  <span className="no">✕{children ? ` ${children}` : ""}</span>
);

export function InfoGrid({ children }: { children: ReactNode }) {
  return <div className="info-grid">{children}</div>;
}

export function InfoCard({
  emoji,
  title,
  children,
}: {
  emoji?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="info-card">
      <div className="ic-h">
        {emoji ? (
          <span className="emo" aria-hidden>
            {emoji}
          </span>
        ) : null}
        <span>{title}</span>
      </div>
      <p>{children}</p>
    </div>
  );
}

/** Bosqichli qo‘llanma (HowTo). Avtomatik raqamlanadi. */
export function Steps({ children }: { children: ReactNode }) {
  return <ol className="steps">{children}</ol>;
}

export function Step({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <li>
      {title ? <span className="st-h">{title}</span> : null}
      {children}
    </li>
  );
}

/** Muhim faktlar / raqamlar bloki. */
export function KeyFacts({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="key-facts">
      <div className="kf-h">{label}</div>
      <ul>{children}</ul>
    </div>
  );
}

export type SourceItem = { href: string; label: string; note?: string };

/** E-E-A-T uchun rasmiy manbalar ro‘yxati. */
export function Sources({ label, items }: { label: string; items: SourceItem[] }) {
  return (
    <div className="sources">
      <div className="src-h">{label}</div>
      <ul>
        {items.map((s, i) => (
          <li key={i}>
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
            {s.note ? ` — ${s.note}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export type TocItem = { href: string; label: string };

/** Mundarija (table of contents) — uzun maqolalar uchun. */
export function Toc({ label, items }: { label: string; items: TocItem[] }) {
  return (
    <nav className="toc" aria-label={label}>
      <div className="toc-h">{label}</div>
      <ol>
        {items.map((t, i) => (
          <li key={i}>
            <a href={t.href}>{t.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Ko‘rinadigan, JS-siz FAQ akkordeoni (native <details>) — to‘liq indekslanadi. */
export function BlogFaq({ heading, items }: { heading: string; items: FaqItem[] }) {
  return (
    <section className="rv" aria-labelledby="aeo-faq-heading" style={{ marginTop: 48 }}>
      <h2 id="aeo-faq-heading" className="h2" style={{ marginBottom: 18 }}>
        {heading}
      </h2>
      <div className="aeo-faq">
        {items.map((q, i) => (
          <details key={i}>
            <summary>{q.question}</summary>
            <div className="faq-body">{q.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
