import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  Sources,
  Step,
  Steps,
  Toc,
} from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-bir-nechta-akkaunt";

/** Uchta oddiy vaziyat — javob har birida boshqacha. */
function ScenarioTable({ locale }: { locale: "uz" | "ru" }) {
  const copy = {
    uz: {
      headers: ["Vaziyat", "Premium ishlaydimi?", "Nega"],
      rows: [
        [
          "Shu akkaunt — telefonda va kompyuterda",
          "Ha",
          "Obuna akkauntga bog‘langan; u ulangan barcha qurilmalarda amal qiladi",
        ],
        [
          "Shu telefonda — ikkinchi, boshqa akkaunt",
          "Yo‘q",
          "Har bir akkaunt uchun alohida obuna kerak",
        ],
        [
          "Yangi telefon, o‘sha akkaunt",
          "Ha",
          "Akkauntga kirsangiz, obuna o‘zi bilan keladi",
        ],
        [
          "Akkaunt raqamini o‘zgartirdingiz",
          "Ha",
          "Akkaunt o‘sha akkauntligicha qoladi, faqat raqami almashadi",
        ],
        [
          "Yangi raqamga yangi akkaunt ochdingiz",
          "Yo‘q",
          "Bu — boshqa akkaunt, ya’ni boshqa obuna",
        ],
      ],
    },
    ru: {
      headers: ["Ситуация", "Работает ли Premium?", "Почему"],
      rows: [
        [
          "Тот же аккаунт — на телефоне и на компьютере",
          "Да",
          "Подписка привязана к аккаунту и действует на всех подключённых устройствах",
        ],
        [
          "На этом же телефоне — второй, другой аккаунт",
          "Нет",
          "Каждому аккаунту нужна своя подписка",
        ],
        [
          "Новый телефон, тот же аккаунт",
          "Да",
          "Входите в аккаунт — подписка приходит вместе с ним",
        ],
        [
          "Вы сменили номер аккаунта",
          "Да",
          "Аккаунт остаётся тем же, меняется только номер",
        ],
        [
          "Завели новый аккаунт на новый номер",
          "Нет",
          "Это другой аккаунт, а значит и другая подписка",
        ],
      ],
    },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([a, b, c]) => [<strong key="a">{a}</strong>, b, c])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Yo‘q — Telegram Premium <b>bitta akkauntga</b> bog‘lanadi. Rasmiy FAQ’da aniq yozilgan: har bir akkaunt
      uchun alohida obuna kerak. Ammo <b>o‘sha akkauntning o‘zi</b> ulangan barcha qurilmalarda — telefon,
      planshet, kompyuter — Premium imkoniyatlaridan foydalanadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#jadval", label: "Uchta vaziyat" },
          { href: "#qurilma", label: "Bitta akkaunt, ko‘p qurilma" },
          { href: "#akkaunt", label: "Bitta telefon, ikki akkaunt" },
          { href: "#yangi", label: "Yangi telefon olganda" },
          { href: "#raqam", label: "Raqam almashtirish va yangi akkaunt" },
          { href: "#xato", label: "Noto‘g‘ri akkauntga olmaslik" },
        ]}
      />

      <p>
        Bu savol Premium imkoniyatlari haqida emas — u <b>obuna qayerga bog‘lanishi</b> haqida. Farqni tushunib
        olish bitta jumlada mumkin: Premium <b>qurilmaga emas, akkauntga</b> beriladi.
      </p>

      <h2 id="jadval">Uchta oddiy vaziyat</h2>
      <ScenarioTable locale="uz" />

      <h2 id="qurilma">Bitta akkaunt — telefon, planshet va kompyuter</h2>
      <p>
        Bu yerda hammasi oddiy. Rasmiy FAQ’da aytilishicha, obuna bo‘lganingizdan keyin{" "}
        <b>o‘sha akkaunt ulangan har qanday qurilmada</b> Premium imkoniyatlaridan foydalana oladi.
      </p>
      <InfoGrid>
        <InfoCard emoji="📱" title="Telefon">
          Asosiy qurilma — odatda obuna shu yerda ko‘rinadi.
        </InfoCard>
        <InfoCard emoji="💻" title="Desktop">
          Kompyuterdagi Telegram’da ham xuddi shu akkaunt bo‘lsa, imkoniyatlar ishlaydi.
        </InfoCard>
        <InfoCard emoji="🌐" title="Telegram Web">
          Brauzerdan kirsangiz ham — akkaunt bir xil bo‘lsa, farq yo‘q.
        </InfoCard>
        <InfoCard emoji="🔢" title="Qurilma soni">
          Alohida chegara yo‘q; muhimi — bu o‘sha akkaunt bo‘lsin.
        </InfoCard>
      </InfoGrid>
      <p>
        Ya’ni «kompyuterda ishlashi uchun ikkinchi obuna kerakmi?» degan savolning javobi — yo‘q, kerak emas.
      </p>

      <h2 id="akkaunt">Bitta telefon — ikkita alohida akkaunt</h2>
      <p>
        Telegram bitta ilovada bir nechta akkauntni saqlashga imkon beradi va aynan shu yerda chalkashlik paydo
        bo‘ladi. Ilova bitta bo‘lsa ham, akkauntlar mustaqil: obuna ulardan faqat <b>bittasiga</b> tegishli
        bo‘ladi.
      </p>
      <KeyFacts label="Amalda bu nimani anglatadi">
        <li>Ish akkauntingizda Premium bor bo‘lsa, shaxsiy akkauntingizda u yo‘q.</li>
        <li>Akkauntlar orasida almashganingizda Premium rozetkasi ham «yo‘qoladi» — bu nosozlik emas.</li>
        <li>Ikkala akkauntda ham kerak bo‘lsa, ikkita alohida obuna rasmiylashtiriladi.</li>
        <li>Obunani bir akkauntdan boshqasiga «ko‘chirish» imkoniyati rasmiy FAQ’da ko‘rsatilmagan.</li>
      </KeyFacts>

      <h2 id="yangi">Yangi telefon olganda nima qilish kerak</h2>
      <p>Hech qanday maxsus amal talab qilinmaydi — obuna telefonda emas, akkauntda:</p>
      <Steps>
        <Step title="1. Yangi telefonga Telegram o‘rnating">Rasmiy ilova do‘konidan.</Step>
        <Step title="2. O‘sha akkauntingizga kiring">Raqam va tasdiq kodi bilan.</Step>
        <Step title="3. Premium rozetkasini tekshiring">
          Ism yonida rozetka bo‘lsa, obuna o‘z joyida. Ko‘rinmasa, ilovani yopib qayta oching.
        </Step>
      </Steps>
      <p>
        Eski telefonni sotayotgan bo‘lsangiz, u yerdagi seansni yopishni unutmang — bu obunaga emas, xavfsizlikka
        taalluqli.
      </p>

      <h2 id="raqam">Raqamni almashtirish va yangi akkaunt ochish — bir xil emas</h2>
      <p>Bu ikki amal butunlay boshqacha natija beradi va ko‘pchilik aynan shu yerda adashadi:</p>
      <InfoGrid>
        <InfoCard emoji="🔄" title="Raqamni o‘zgartirish">
          Akkaunt o‘sha akkauntligicha qoladi — chatlar, kanallar va obuna joyida. Faqat raqam almashadi.
        </InfoCard>
        <InfoCard emoji="🆕" title="Yangi akkaunt ochish">
          Bu — noldan boshlangan boshqa akkaunt. Undagi Premium ham noldan, ya’ni alohida obuna kerak.
        </InfoCard>
      </InfoGrid>

      <h2 id="xato">Noto‘g‘ri akkauntga xarid qilishning oldini olish</h2>
      <p>
        Bu eng ko‘p uchraydigan va eng achinarli xato: obuna rasmiylashtiriladi, lekin boshqa akkauntda. Uni
        oldini olish oson:
      </p>
      <KeyFacts label="Buyurtmadan oldin">
        <li>
          <b>Qaysi akkauntga kerakligini aniqlang</b> — ish yoki shaxsiy. Ilovada shu akkauntga o‘ting.
        </li>
        <li>
          <b>Username’ni o‘sha akkaunt profilidan nusxa oling</b> — xotiradan yozmang.
        </li>
        <li>
          <b>Username borligini tekshiring</b> — agar akkauntda username o‘rnatilmagan bo‘lsa, avval o‘rnatiladi.
        </li>
        <li>
          <b>Buyurtmada qayta o‘qing</b> — botga qo‘ygandan keyin bir marta ko‘z yugurtiring.
        </li>
      </KeyFacts>

      <InlineCta text="To‘g‘ri akkauntni tanlab, Premium’ni so‘mda oling." product={{ kind: "premium", months: 6 }} />

      <p>
        Xarid tartibi —{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">Premium olishning eng oson usuli</Link>; narxlar —{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">Premium narxi</Link>; boshqa odamga
        olayotgan bo‘lsangiz —{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">username orqali sovg‘a</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "obuna va akkauntlar haqida rasmiy FAQ" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Нет — Telegram Premium привязывается <b>к одному аккаунту</b>. В официальном FAQ сказано прямо: каждому
      аккаунту нужна своя подписка. Зато <b>сам этот аккаунт</b> пользуется возможностями Premium на всех
      подключённых устройствах — телефоне, планшете, компьютере.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#jadval", label: "Три ситуации" },
          { href: "#qurilma", label: "Один аккаунт, много устройств" },
          { href: "#akkaunt", label: "Один телефон, два аккаунта" },
          { href: "#yangi", label: "Когда купили новый телефон" },
          { href: "#raqam", label: "Смена номера и новый аккаунт" },
          { href: "#xato", label: "Как не купить не на тот аккаунт" },
        ]}
      />

      <p>
        Этот вопрос не о возможностях Premium — он о том, <b>к чему привязана подписка</b>. Разницу можно уложить
        в одну фразу: Premium выдаётся <b>аккаунту, а не устройству</b>.
      </p>

      <h2 id="jadval">Три простые ситуации</h2>
      <ScenarioTable locale="ru" />

      <h2 id="qurilma">Один аккаунт — телефон, планшет и компьютер</h2>
      <p>
        Здесь всё просто. В официальном FAQ сказано, что после оформления подписки{" "}
        <b>этот аккаунт получает доступ к возможностям Premium на любых подключённых устройствах</b>.
      </p>
      <InfoGrid>
        <InfoCard emoji="📱" title="Телефон">
          Основное устройство — обычно подписка видна именно здесь.
        </InfoCard>
        <InfoCard emoji="💻" title="Десктоп">
          Если в Telegram на компьютере тот же аккаунт, возможности работают.
        </InfoCard>
        <InfoCard emoji="🌐" title="Telegram Web">
          Через браузер — то же самое, если аккаунт один и тот же.
        </InfoCard>
        <InfoCard emoji="🔢" title="Сколько устройств">
          Отдельного лимита нет; важно лишь, чтобы это был тот же аккаунт.
        </InfoCard>
      </InfoGrid>
      <p>
        То есть ответ на вопрос «нужна ли вторая подписка для компьютера» — нет, не нужна.
      </p>

      <h2 id="akkaunt">Один телефон — два разных аккаунта</h2>
      <p>
        Telegram позволяет держать несколько аккаунтов в одном приложении, и именно здесь возникает путаница.
        Приложение одно, но аккаунты независимы: подписка относится только к <b>одному</b> из них.
      </p>
      <KeyFacts label="Что это значит на практике">
        <li>Если Premium на рабочем аккаунте, на личном его нет.</li>
        <li>При переключении между аккаунтами значок Premium «пропадает» — это не сбой.</li>
        <li>Если нужен на обоих, оформляются две отдельные подписки.</li>
        <li>Возможность «перенести» подписку с одного аккаунта на другой в официальном FAQ не описана.</li>
      </KeyFacts>

      <h2 id="yangi">Что делать при покупке нового телефона</h2>
      <p>Никаких особых действий не требуется — подписка не в телефоне, а в аккаунте:</p>
      <Steps>
        <Step title="1. Установите Telegram на новый телефон">Из официального магазина приложений.</Step>
        <Step title="2. Войдите в тот же аккаунт">По номеру и коду подтверждения.</Step>
        <Step title="3. Проверьте значок Premium">
          Значок рядом с именем — подписка на месте. Не видно — закройте и снова откройте приложение.
        </Step>
      </Steps>
      <p>
        Если продаёте старый телефон, не забудьте завершить сессию на нём — это касается уже не подписки, а
        безопасности.
      </p>

      <h2 id="raqam">Смена номера и создание нового аккаунта — это не одно и то же</h2>
      <p>Эти два действия дают совершенно разный результат, и большинство путается именно здесь:</p>
      <InfoGrid>
        <InfoCard emoji="🔄" title="Смена номера">
          Аккаунт остаётся тем же — чаты, каналы и подписка на месте. Меняется только номер.
        </InfoCard>
        <InfoCard emoji="🆕" title="Создание нового аккаунта">
          Это другой аккаунт с нуля. Premium в нём тоже с нуля, то есть нужна отдельная подписка.
        </InfoCard>
      </InfoGrid>

      <h2 id="xato">Как не купить подписку не на тот аккаунт</h2>
      <p>
        Это самая частая и самая обидная ошибка: подписка оформлена, но на другом аккаунте. Предотвратить её
        несложно:
      </p>
      <KeyFacts label="Перед заказом">
        <li>
          <b>Определите нужный аккаунт</b> — рабочий или личный. Переключитесь на него в приложении.
        </li>
        <li>
          <b>Скопируйте username из профиля именно этого аккаунта</b> — не пишите по памяти.
        </li>
        <li>
          <b>Проверьте, что username вообще задан</b> — если нет, сначала установите его.
        </li>
        <li>
          <b>Перечитайте при заказе</b> — один раз пробегитесь глазами после вставки в бота.
        </li>
      </KeyFacts>

      <InlineCta text="Выберите нужный аккаунт и оформите Premium в сумах." product={{ kind: "premium", months: 6 }} />

      <p>
        Порядок покупки —{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">самый простой способ купить Premium</Link>; цены —{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">стоимость Premium</Link>; если берёте для
        другого человека —{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">подарок по username</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "официальный FAQ о подписке и аккаунтах" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Bitta Premium ikkita akkauntga ishlaydimi?",
    answer: "Yo‘q. Rasmiy FAQ’da har bir akkaunt uchun alohida obuna kerakligi aytilgan.",
  },
  {
    question: "Premium kompyuterda ham ishlaydimi?",
    answer: "Ha. Obuna akkauntga bog‘langan va u ulangan barcha qurilmalarda amal qiladi.",
  },
  {
    question: "Telefon almashtirsam Premium qoladimi?",
    answer: "Ha. Yangi telefonda o‘sha akkauntga kirsangiz, obuna o‘zi bilan keladi.",
  },
  {
    question: "Premium’ni boshqa akkauntga o‘tkazsa bo‘ladimi?",
    answer: "Bunday imkoniyat rasmiy FAQ’da ko‘rsatilmagan; obuna o‘zi rasmiylashtirilgan akkauntda qoladi.",
  },
  {
    question: "Akkaunt raqamini o‘zgartirsam Premium yo‘qoladimi?",
    answer: "Yo‘q. Raqam almashadi, akkaunt esa o‘sha akkauntligicha qoladi.",
  },
  {
    question: "Akkauntlar orasida almashsam rozetka yo‘qolyapti — bu xatolikmi?",
    answer: "Yo‘q. Rozetka faqat obunasi bor akkauntda ko‘rinadi; bu kutilgan holat.",
  },
  {
    question: "Noto‘g‘ri akkauntga olib qo‘ysam nima qilaman?",
    answer: "Buyurtma ID va ikkala username bilan @StarsPaymeeSupport ga yozing — qanchalik tez bo‘lsa, shunchalik yaxshi.",
  },
];

const ruFaq = [
  {
    question: "Работает ли одна подписка на двух аккаунтах?",
    answer: "Нет. В официальном FAQ сказано, что каждому аккаунту нужна своя подписка.",
  },
  {
    question: "Работает ли Premium на компьютере?",
    answer: "Да. Подписка привязана к аккаунту и действует на всех подключённых устройствах.",
  },
  {
    question: "Останется ли Premium при смене телефона?",
    answer: "Да. Войдите на новом телефоне в тот же аккаунт — подписка придёт вместе с ним.",
  },
  {
    question: "Можно ли перенести Premium на другой аккаунт?",
    answer: "Такая возможность в официальном FAQ не описана; подписка остаётся на том аккаунте, где оформлена.",
  },
  {
    question: "Пропадёт ли Premium при смене номера аккаунта?",
    answer: "Нет. Меняется номер, а аккаунт остаётся тем же.",
  },
  {
    question: "При переключении аккаунтов значок пропадает — это ошибка?",
    answer: "Нет. Значок виден только на аккаунте с подпиской, это ожидаемое поведение.",
  },
  {
    question: "Что делать, если оформил не на тот аккаунт?",
    answer: "Напишите в @StarsPaymeeSupport с ID заказа и обоими username — чем быстрее, тем лучше.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "info",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  keywords: [
    "telegram premium ikkita akkauntga ishlaydimi",
    "bitta premium ikki akkaunt",
    "premium boshqa telefonda ishlaydimi",
    "telegram premium kompyuterda ishlaydimi",
    "premium boshqa akkauntga o‘tkazish",
    "telefon almashtirsam premium qoladimi",
  ],
  locales: {
    uz: {
      title: "Premium olsam, telefonimdagi barcha Telegram akkauntlariga ishlaydimi?",
      excerpt:
        "Premium qurilmaga emas, akkauntga bog‘lanadi. Bitta akkaunt ko‘p qurilmada, bitta telefonda ikki akkaunt, telefon va raqam almashtirish holatlari.",
      metaTitle: "Premium barcha Telegram akkauntlarimga ishlaydimi?",
      metaDescription:
        "Telegram Premium bitta akkauntga bog‘lanadi: kompyuterda ishlaydi, ikkinchi akkauntga esa alohida obuna kerak. Telefon va raqam almashtirish holatlari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "To‘g‘ri akkauntga Premium",
      ctaBody: "@StarsPaymee_bot — username’ni tekshiring va so‘mda to‘lang.",
      faq: uzFaq,
    },
    ru: {
      title: "Будет ли Premium работать на всех аккаунтах Telegram в телефоне?",
      excerpt:
        "Premium привязан к аккаунту, а не к устройству. Один аккаунт на многих устройствах, два аккаунта в одном телефоне, смена телефона и номера.",
      metaTitle: "Premium будет работать на всех моих аккаунтах?",
      metaDescription:
        "Telegram Premium привязан к одному аккаунту: на компьютере работает, а второму аккаунту нужна своя подписка. Смена телефона и номера.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Premium на нужный аккаунт",
      ctaBody: "@StarsPaymee_bot — проверьте username и оплатите в сумах.",
      faq: ruFaq,
    },
  },
};
