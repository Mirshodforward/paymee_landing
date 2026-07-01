import { Link } from "@/i18n/navigation";
import { Toc, InfoGrid, InfoCard, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-yangilanishlar-tarixi";

function UzAnswer() {
  return (
    <p>
      Telegram Stars <strong>2024-yilda</strong> Telegram’ning rasmiy ichki valyutasi sifatida joriy etildi. Dastlab u
      botlar va Mini App’lardagi raqamli xaridlar uchun edi; keyingi yangilanishlarda sovg‘alar (Gifts), Star Reactions,
      pulli kontent, obuna va kreator monetizatsiyasi qo‘shildi. Ishlab topilgan Stars’ni Fragment orqali TON’ga chiqarish
      imkoni ekotizimni to‘liq iqtisodiy tizimga aylantirdi. Quyida asosiy bosqichlar.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#boshlanish", label: "Boshlanishi va maqsadi" },
          { href: "#bosqichlar", label: "Asosiy yangilanishlar" },
          { href: "#monetizatsiya", label: "Monetizatsiya va Fragment" },
          { href: "#bugun", label: "Bugungi holat" },
          { href: "#keyin", label: "Keyin nima kutilyapti" },
        ]}
      />

      <h2 id="boshlanish">Telegram Stars qanday paydo bo‘ldi?</h2>
      <p>
        Stars 2024-yilda Telegram ichidagi <strong>raqamli xaridlar</strong> uchun yagona valyuta sifatida taqdim
        etildi. Sabab amaliy edi: Apple va Google raqamli tovar savdosini o‘z to‘lov tizimlari orqali talab qilardi.
        Telegram Stars bu talabga mos, ilova ichida ishlaydigan yechim bo‘ldi. Stars mexanizmini{" "}
        <Link href="/blog/telegram-stars-qanday-ishlaydi">«Stars qanday ishlaydi»</Link> maqolasida ko‘ring.
      </p>

      <h2 id="bosqichlar">Asosiy yangilanishlar (bosqichma-bosqich)</h2>
      <InfoGrid>
        <InfoCard emoji="🚀" title="Bosqich 1 — Joriy etilishi">
          Stars ichki valyuta sifatida ishga tushdi; bot va Mini App to‘lovlari uchun.
        </InfoCard>
        <InfoCard emoji="🎁" title="Bosqich 2 — Gifts">
          Stars evaziga raqamli sovg‘a yuborish imkoni qo‘shildi.
        </InfoCard>
        <InfoCard emoji="👍" title="Bosqich 3 — Star Reactions">
          Postlarga yulduzli reaksiya — kreatorlar uchun to‘g‘ridan-to‘g‘ri daromad.
        </InfoCard>
        <InfoCard emoji="📺" title="Bosqich 4 — Pulli kontent">
          Paid media va Stars asosidagi obuna — yopiq kontentni monetizatsiya qilish.
        </InfoCard>
        <InfoCard emoji="✉️" title="Bosqich 5 — Pulli xabarlar">
          Kontaktda bo‘lmaganlardan keladigan xabarlar uchun Stars’da narx.
        </InfoCard>
        <InfoCard emoji="💎" title="Bosqich 6 — Collectible Gifts">
          Noyob sovg‘alarni raqamlangan, uzatiladigan kolleksion darajaga ko‘tarish.
        </InfoCard>
      </InfoGrid>

      <InlineCta text="Eng so‘nggi Stars imkoniyatlarini sinang — botda so‘mda 10 soniyada." />

      <h2 id="monetizatsiya">Monetizatsiya va Fragment integratsiyasi</h2>
      <p>
        Eng muhim burilish — kreatorlarga ishlab topilgan Stars’ni <strong>Fragment</strong> orqali TON’ga, undan pulga
        chiqarish imkoni berilishi bo‘ldi. Shu bilan Stars shunchaki «xarid tokeni»dan haqiqiy daromad vositasiga
        aylandi. Bu jarayon{" "}
        <Link href="/blog/telegram-stars-daromad-qilish-mumkinmi">«Stars orqali daromad»</Link> va{" "}
        <Link href="/blog/telegram-creator-economy-stars">«Creator Economy»</Link> maqolalarida batafsil.
      </p>

      <KeyFacts label="Muhim nuqtalar">
        <li>
          <b>2024</b> — Stars rasman joriy etilgan yil
        </li>
        <li>
          <b>Bot → Gifts → Reactions → Kontent</b> — kengayish yo‘nalishi
        </li>
        <li>
          <b>Fragment ↔ TON</b> — pulga chiqarishning asosiy kanali
        </li>
      </KeyFacts>

      <h2 id="bugun">Bugungi holat</h2>
      <p>
        Bugun Stars — Telegram ekotizimining markaziy valyutasi: sovg‘a, Premium hadya, bot/Mini App to‘lovlari, pulli
        kontent, obuna va reaksiyalar shu orqali ishlaydi. To‘liq imkoniyatlar ro‘yxatini{" "}
        <Link href="/blog/telegram-stars-nima-uchun-ishlatiladi-usullar">«Stars ishlatish usullari»</Link> maqolasida
        topasiz.
      </p>

      <h2 id="keyin">Keyin nima kutilyapti?</h2>
      <ul>
        <li>
          <strong>Kengroq collectible bozori:</strong> raqamli sovg‘alarni almashish va to‘plash.
        </li>
        <li>
          <strong>Mini App e-commerce:</strong> ilova ichida to‘liq savdo.
        </li>
        <li>
          <strong>Chuqurroq TON bog‘lanishi:</strong> Stars ↔ TON o‘rtasida yanada oson o‘tish.
        </li>
      </ul>
      <p>
        Butun ekotizim qanday bog‘langanini{" "}
        <Link href="/blog/telegram-ekotizimi-stars-premium-gifts-ton">«Telegram ekotizimi»</Link> maqolasida ko‘ring.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "yangilanishlar tarixi" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "texnik hujjat" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Telegram Stars были введены <strong>в 2024 году</strong> как официальная внутренняя валюта Telegram. Сначала они
      предназначались для цифровых покупок в ботах и Mini App; в следующих обновлениях добавились подарки (Gifts), Star
      Reactions, платный контент, подписка и монетизация авторов. Возможность выводить заработанные Stars через Fragment
      в TON превратила экосистему в полноценную экономику. Ниже — ключевые этапы.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#boshlanish", label: "Начало и цель" },
          { href: "#bosqichlar", label: "Основные обновления" },
          { href: "#monetizatsiya", label: "Монетизация и Fragment" },
          { href: "#bugun", label: "Текущее состояние" },
          { href: "#keyin", label: "Что ожидается дальше" },
        ]}
      />

      <h2 id="boshlanish">Как появились Telegram Stars?</h2>
      <p>
        Stars появились в 2024 году как единая валюта для <strong>цифровых покупок</strong> внутри Telegram. Причина была
        практичной: Apple и Google требовали проводить продажу цифровых товаров через свои платёжные системы. Telegram
        Stars стали решением, работающим внутри приложения и соответствующим этим требованиям. Механизм Stars — в статье{" "}
        <Link href="/blog/telegram-stars-qanday-ishlaydi">«Как работают Stars»</Link>.
      </p>

      <h2 id="bosqichlar">Основные обновления (пошагово)</h2>
      <InfoGrid>
        <InfoCard emoji="🚀" title="Этап 1 — Запуск">
          Stars запущены как внутренняя валюта; для оплаты в ботах и Mini App.
        </InfoCard>
        <InfoCard emoji="🎁" title="Этап 2 — Gifts">
          Добавлена возможность отправлять цифровые подарки за Stars.
        </InfoCard>
        <InfoCard emoji="👍" title="Этап 3 — Star Reactions">
          Звёздные реакции на посты — прямой доход авторам.
        </InfoCard>
        <InfoCard emoji="📺" title="Этап 4 — Платный контент">
          Paid media и подписка на Stars — монетизация закрытого контента.
        </InfoCard>
        <InfoCard emoji="✉️" title="Этап 5 — Платные сообщения">
          Цена в Stars за сообщения от тех, кого нет в контактах.
        </InfoCard>
        <InfoCard emoji="💎" title="Этап 6 — Collectible Gifts">
          Превращение редких подарков в пронумерованные передаваемые коллекционные.
        </InfoCard>
      </InfoGrid>

      <InlineCta text="Попробуйте новейшие возможности Stars — в боте в сумах за 10 секунд." />

      <h2 id="monetizatsiya">Монетизация и интеграция с Fragment</h2>
      <p>
        Важнейший поворот — авторам дали возможность выводить заработанные Stars через <strong>Fragment</strong> в TON, а
        затем в деньги. Так Stars превратились из простого «токена покупок» в реальный инструмент дохода. Этот процесс
        подробно — в статьях{" "}
        <Link href="/blog/telegram-stars-daromad-qilish-mumkinmi">«Можно ли заработать на Stars»</Link> и{" "}
        <Link href="/blog/telegram-creator-economy-stars">«Creator Economy»</Link>.
      </p>

      <KeyFacts label="Важные точки">
        <li>
          <b>2024</b> — год официального запуска Stars
        </li>
        <li>
          <b>Боты → Gifts → Reactions → Контент</b> — вектор расширения
        </li>
        <li>
          <b>Fragment ↔ TON</b> — основной канал вывода в деньги
        </li>
      </KeyFacts>

      <h2 id="bugun">Текущее состояние</h2>
      <p>
        Сегодня Stars — центральная валюта экосистемы Telegram: подарки, дарение Premium, оплата в ботах/Mini App,
        платный контент, подписка и реакции работают через них. Полный список возможностей — в статье{" "}
        <Link href="/blog/telegram-stars-nima-uchun-ishlatiladi-usullar">«Способы использования Stars»</Link>.
      </p>

      <h2 id="keyin">Что ожидается дальше?</h2>
      <ul>
        <li>
          <strong>Более широкий рынок collectible:</strong> обмен и коллекционирование цифровых подарков.
        </li>
        <li>
          <strong>E-commerce в Mini App:</strong> полноценная торговля внутри приложения.
        </li>
        <li>
          <strong>Более глубокая связка с TON:</strong> ещё более простой переход Stars ↔ TON.
        </li>
      </ul>
      <p>
        Как связана вся экосистема — в статье{" "}
        <Link href="/blog/telegram-ekotizimi-stars-premium-gifts-ton">«Экосистема Telegram»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "официальный анонс Stars" },
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "история обновлений" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "техническая документация" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "info",
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  keywords: [
    "telegram stars tarixi",
    "telegram stars yangilanishlar",
    "telegram stars updates",
    "telegram stars history",
    "telegram stars news",
    "telegram stars 2024 2026",
  ],
  locales: {
    uz: {
      title: "Telegram Stars tarixidagi eng katta yangilanishlar (2024–2026)",
      excerpt:
        "Telegram Stars’ning 2024-yildagi boshlanishidan bugungacha: Gifts, Star Reactions, pulli kontent, obuna, collectible va Fragment orqali monetizatsiya — asosiy bosqichlar.",
      metaTitle: "Telegram Stars tarixi va yangilanishlari — 2024–2026",
      metaDescription:
        "Telegram Stars tarixidagi eng katta yangilanishlar: 2024 joriy etilishi, Gifts, Star Reactions, pulli kontent, obuna, collectible va Fragment orqali monetizatsiya.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Yangi imkoniyatlarni sinaysizmi?",
      ctaBody: "Stars’ni so‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada oling.",
      faq: [
        {
          question: "Telegram Stars qachon paydo bo‘ldi?",
          answer:
            "Stars 2024-yilda Telegram’ning rasmiy ichki valyutasi sifatida joriy etildi. Dastlab bot va Mini App to‘lovlari uchun edi.",
        },
        {
          question: "Stars nega yaratildi?",
          answer:
            "Apple/Google raqamli tovar savdosini o‘z to‘lov tizimlari orqali talab qilardi. Stars ilova ichida ishlaydigan yagona yechim bo‘ldi.",
        },
        {
          question: "Qanday asosiy yangilanishlar bo‘ldi?",
          answer:
            "Bot to‘lovlaridan keyin Gifts, Star Reactions, pulli kontent va obuna, pulli xabarlar hamda collectible sovg‘alar qo‘shildi.",
        },
        {
          question: "Stars monetizatsiyasi qachon kuchaydi?",
          answer:
            "Ishlab topilgan Stars’ni Fragment orqali TON’ga chiqarish imkoni berilgach — Stars xarid tokenidan real daromad vositasiga aylandi.",
        },
        {
          question: "Keyin nima kutilyapti?",
          answer:
            "Kengroq collectible bozori, Mini App e-commerce va Stars bilan TON o‘rtasidagi chuqurroq integratsiya kutilmoqda.",
        },
      ],
    },
    ru: {
      title: "Крупнейшие обновления в истории Telegram Stars (2024–2026)",
      excerpt:
        "От запуска Telegram Stars в 2024 году до сегодня: Gifts, Star Reactions, платный контент, подписка, collectible и монетизация через Fragment — ключевые этапы.",
      metaTitle: "История и обновления Telegram Stars — 2024–2026",
      metaDescription:
        "Крупнейшие обновления в истории Telegram Stars: запуск 2024, Gifts, Star Reactions, платный контент, подписка, collectible и монетизация через Fragment.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Попробуете новые возможности?",
      ctaBody: "Купите Stars в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Когда появились Telegram Stars?",
          answer:
            "Stars были введены в 2024 году как официальная внутренняя валюта Telegram. Сначала — для оплаты в ботах и Mini App.",
        },
        {
          question: "Зачем создали Stars?",
          answer:
            "Apple/Google требовали проводить продажу цифровых товаров через свои платёжные системы. Stars стали единым решением внутри приложения.",
        },
        {
          question: "Какие были основные обновления?",
          answer:
            "После оплаты в ботах добавились Gifts, Star Reactions, платный контент и подписка, платные сообщения и collectible-подарки.",
        },
        {
          question: "Когда усилилась монетизация Stars?",
          answer:
            "Когда дали возможность выводить заработанные Stars через Fragment в TON — Stars превратились из токена покупок в реальный инструмент дохода.",
        },
        {
          question: "Что ожидается дальше?",
          answer:
            "Ожидаются более широкий рынок collectible, e-commerce в Mini App и более глубокая интеграция Stars с TON.",
        },
      ],
    },
  },
};
