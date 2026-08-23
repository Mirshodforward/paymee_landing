"use client";

import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";

type CategoryOption = { key: string; label: string };

type Props = {
  allLabel: string;
  categories: CategoryOption[];
};

/**
 * Kategoriya filtri — mijoz tomonida.
 *
 * Ilgari filtr `searchParams` orqali serverda bajarilardi va shu sabab
 * `/[locale]/blog` yagona dinamik route bo‘lib qolgan edi. Endi server barcha
 * maqolalarni bir marta render qiladi (`<li data-cat="...">`), bu komponent esa
 * faol kategoriyaga qarab qisqa `<style>` blokini qo‘shadi. Natijada sahifa
 * to‘liq statik prerender bo‘ladi, `?cat=` manzillari o‘zgarmaydi va JavaScript
 * ishlamasa ham hamma maqola ko‘rinib turadi — qidiruv tizimlari uchun aynan
 * kerakli holat.
 */
export function BlogCategoryFilter({ allLabel, categories }: Props) {
  const searchParams = useSearchParams();
  const requested = searchParams.get("cat");
  // Faqat ma’lum kalitlar qabul qilinadi — qiymat CSS selektoriga tushadi.
  const active = categories.some((c) => c.key === requested) ? requested : null;

  return (
    <>
      {active ? (
        <style>{`.v2-blog-grid > li:not([data-cat="${active}"]){display:none}`}</style>
      ) : null}

      <div className="blog-cat-filters rv" role="tablist">
        <FilterPill active={active === null} href="/blog">
          {allLabel}
        </FilterPill>
        {categories.map((c) => (
          <FilterPill
            key={c.key}
            active={active === c.key}
            href={`/blog?cat=${encodeURIComponent(c.key)}`}
          >
            {c.label}
          </FilterPill>
        ))}
      </div>
    </>
  );
}

function FilterPill({
  active,
  href,
  children,
}: {
  active: boolean;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      role="tab"
      aria-selected={active}
      scroll={false}
      prefetch={false}
      className={`fpill${active ? " active" : ""}`}
    >
      {children}
    </Link>
  );
}
