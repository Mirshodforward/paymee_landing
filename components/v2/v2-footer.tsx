import { Link } from "@/i18n/navigation";
import { StarIcon } from "@/components/v2/icons";

export type V2FooterLabels = {
  tagline: string;
  sections: string;
  products: string;
  premium: string;
  gifts: string;
  blog: string;
  support: string;
  rights: string;
};

/** V2 (qorong‘u) footer. */
export function V2Footer({
  labels,
  botUrl,
  supportUrl,
}: {
  labels: V2FooterLabels;
  botUrl: string;
  supportUrl: string;
}) {
  const year = new Date().getFullYear();
  const linkCls = "foot-muted transition hover:text-white";

  return (
    <footer className="footer2">
      <div className="wrap grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link className="logo2" href="/" aria-label="StarsPaymee">
            <span className="mark">
              <StarIcon />
            </span>
            <span>
              <span className="gt">Stars</span>Paymee
            </span>
          </Link>
          <p className="foot-muted mt-4 max-w-sm">{labels.tagline}</p>
        </div>

        <nav aria-label={labels.sections}>
          <p className="foot-head">{labels.sections}</p>
          <div className="mt-4 flex flex-col gap-2.5">
            <Link href="/stars" className={linkCls}>
              {labels.products}
            </Link>
            <Link href="/premium" className={linkCls}>
              {labels.premium}
            </Link>
            <Link href="/gifts" className={linkCls}>
              {labels.gifts}
            </Link>
            <Link href="/gampay" className={linkCls}>
              GamPay
            </Link>
            <Link href="/blog" className={linkCls}>
              {labels.blog}
            </Link>
          </div>
        </nav>

        <div>
          <p className="foot-head">Telegram</p>
          <div className="mt-4 flex flex-col gap-2.5">
            <a data-cta="footer" href={botUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
              {botUrl.replace(/^https?:\/\//, "")}
            </a>
            <a href={supportUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
              {labels.support}
            </a>
          </div>
        </div>
      </div>
      <div className="wrap mt-12 flex flex-col items-start gap-4 border-t border-white/[0.07] pt-7 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <span className="foot-muted">
          © {year} StarsPaymee · {labels.rights}
        </span>
        <a
          data-cta="footer" href={botUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="foot-muted transition hover:text-white"
        >
          @StarsPaymee_bot
        </a>
      </div>
    </footer>
  );
}
