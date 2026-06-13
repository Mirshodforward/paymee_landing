import { Link } from "@/i18n/navigation";
import { StarIcon, TelegramIcon } from "@/components/v2/icons";
import { V2LocaleSwitcher } from "@/components/v2/v2-locale-switcher";

export type V2NavLabels = {
  products: string;
  why: string;
  how: string;
  faq: string;
  blog: string;
  home: string;
  openBot: string;
};

/**
 * V2 suzuvchi navigatsiya. `variant="home"` — bo‘limlarga anchor havolalar,
 * `variant="inner"` (blog) — bosh sahifa bo‘limlariga to‘liq havolalar.
 */
export function V2Nav({
  labels,
  botUrl,
  variant = "home",
  activeBlog = false,
}: {
  labels: V2NavLabels;
  botUrl: string;
  variant?: "home" | "inner";
  activeBlog?: boolean;
}) {
  const sectionLinks =
    variant === "home"
      ? ([
          { href: "#afzallik", label: labels.why },
          { href: "#mahsulotlar", label: labels.products },
          { href: "#qanday", label: labels.how },
          { href: "#faq", label: labels.faq },
        ] as const)
      : ([
          { href: "/#afzallik", label: labels.why },
          { href: "/#mahsulotlar", label: labels.products },
          { href: "/#qanday", label: labels.how },
          { href: "/#faq", label: labels.faq },
        ] as const);

  return (
    <header className="nav2" data-v2-nav>
      <div className="nav2-in">
        <Link className="logo2" href="/" aria-label="StarsPaymee">
          <span className="mark">
            <StarIcon />
          </span>
          <span>
            <span className="gt">Stars</span>Paymee
          </span>
        </Link>

        <nav className="nav2-links" aria-label="Asosiy menyu">
          {sectionLinks.map((l) =>
            variant === "home" ? (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ) : (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ),
          )}
          <Link href="/blog" aria-current={activeBlog ? "page" : undefined}>
            {labels.blog}
          </Link>
        </nav>

        <div className="flex items-center gap-2.5">
          <V2LocaleSwitcher />
          <a
            className="btn btn-grad btn-sm mag"
            href={botUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon />
            {labels.openBot}
          </a>
        </div>
      </div>
    </header>
  );
}
