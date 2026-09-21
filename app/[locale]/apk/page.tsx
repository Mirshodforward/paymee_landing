import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ANDROID_APK } from "@/lib/app-download";
import { hreflangAlternates } from "@/lib/hreflang-alternates";
import { getSiteUrl, siteConfig } from "@/lib/site";
import { botDeepLink } from "@/lib/telegram-deeplink";

type Props = { params: Promise<{ locale: string }> };

export const dynamic = "force-static";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "apk" });
  const title = t("metaTitle");
  const description = t("metaDescription");
  const siteUrl = getSiteUrl();

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/apk`,
      languages: hreflangAlternates("/apk"),
    },
    openGraph: {
      type: "website",
      locale: locale === "ru" ? "ru_RU" : locale === "en" ? "en_US" : "uz_UZ",
      url: `${siteUrl}/${locale}/apk`,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.1} aria-hidden>
      <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" />
    </svg>
  );
}

export default async function ApkPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "apk" });

  const benefits = [
    { title: t("b1Title"), body: t("b1Body"), icon: "📱" },
    { title: t("b2Title"), body: t("b2Body"), icon: "💳" },
    { title: t("b3Title"), body: t("b3Body"), icon: "🔑" },
  ];
  const steps = [
    { title: t("s1Title"), body: t("s1Body") },
    { title: t("s2Title"), body: t("s2Body") },
    { title: t("s3Title"), body: t("s3Body") },
    { title: t("s4Title"), body: t("s4Body") },
  ];
  const notes = [
    { title: t("updateTitle"), body: t("updateBody") },
    { title: t("safetyTitle"), body: t("safetyBody") },
  ];

  return (
    <div className="apk-page">
      <section className="sec apk-hero">
        <div className="wrap apk-hero-grid">
          <div className="rv">
            <div className="kicker">{t("kicker")}</div>
            <h1 className="h2 apk-h1">{t("h1")}</h1>
            <p className="sec-sub apk-lead">{t("lead")}</p>

            <a
              className="btn btn-grad mag apk-dl"
              data-cta="apk-download"
              href={ANDROID_APK.url}
              rel="noopener"
            >
              <DownloadIcon />
              {t("download")}
            </a>
            <p className="apk-file">
              {t("fileMeta", { version: ANDROID_APK.version, size: ANDROID_APK.sizeMb })}
            </p>
            <p className="apk-file-note">{t("fileNote")}</p>
          </div>

          <div className="apk-shot rv" style={{ "--d": ".1s" } as React.CSSProperties}>
            <div className="phone">
              <div className="screen">
                <span className="isl" aria-hidden />
                <Image
                  className="screen-shot"
                  src="/app-screen.png"
                  alt=""
                  width={640}
                  height={1387}
                  sizes="300px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec apk-sec">
        <div className="wrap">
          <div className="sec-head rv">
            <h2 className="h2">{t("benefitsTitle")}</h2>
          </div>
          <div className="apk-grid">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="cell spot rv"
                style={{ "--d": `${i * 0.07}s` } as React.CSSProperties}
              >
                <div className="apk-ic" aria-hidden>
                  {b.icon}
                </div>
                <h3 className="h3">{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec apk-sec">
        <div className="wrap">
          <div className="sec-head rv">
            <h2 className="h2">{t("stepsTitle")}</h2>
          </div>
          <ol className="apk-steps">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="apk-step rv"
                style={{ "--d": `${i * 0.06}s` } as React.CSSProperties}
              >
                <span className="apk-step-n" aria-hidden>
                  {i + 1}
                </span>
                <div>
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec apk-sec">
        <div className="wrap">
          <div className="apk-notes">
            {notes.map((n) => (
              <div key={n.title} className="apk-note rv">
                <h3 className="h3">{n.title}</h3>
                <p>{n.body}</p>
              </div>
            ))}
          </div>

          <div className="apk-bot rv">
            <div>
              <h2 className="h3">{t("ctaTitle")}</h2>
              <p>{t("ctaBody")}</p>
            </div>
            <a
              className="btn btn-ghost mag"
              data-cta="apk-bot"
              href={botDeepLink({ page: "home", placement: "cta" })}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("ctaBtn")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
