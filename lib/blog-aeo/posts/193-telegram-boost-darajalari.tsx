import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  Notice,
  Sources,
  Step,
  Steps,
  Toc,
} from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-boost-darajalari";

/**
 * Telegram boost darajalari: 1–10 daraja nimani ochadi (kanal va guruh jadvali).
 *
 * NEGA ALOHIDA SAHIFA (2026-10-23): «boost darajalari», «level nima beradi»,
 * «уровни буста» — ma'lumotnoma niyati. Boost seriyasida bor postlar boshqa
 * niyatda va TAKRORLANMAYDI: 60 — boost nima (darajalar 4 ta umumiy band),
 * 100 — boost ijarasini sotib olish, 106 — narxlar, 103 — reyting/level umumiy,
 * 31 — Premium giveaway. Bu maqola — aniq jadval + boost manbalari + guruhlar;
 * 60 va 103 unga havola beradi, u esa 100/106/31 ga.
 *
 * FAKTLAR TEKSHIRILGAN (2026-10-23):
 * - telegram.org/faq_premium (Boosts): Premium obunachilar havola orqali boost
 *   beradi; giveaway — har sovg'a obuna uchun 4 boost; admin Premium sovg'a qilsa
 *   3 boost; kerakli boost soni obunachilar soniga bog'liq; darajalar ro'yxati
 *   (story = daraja, reaksiya = daraja, 7 nom rangi, muqova 8/16 rang L5/L6,
 *   havola logotipi L4, muqova logotipi L7, emoji status L8, 8 fon L9, maxsus fon
 *   L10); guruhlar: muqova 8/16 rang L2/L3, emoji to'plami L4, muqova logotipi L5,
 *   cheksiz transkripsiya L6, emoji status L8, fonlar L9/L10.
 * - core.telegram.org/api/config: giveaway_boosts_per_premium=4,
 *   boosts_per_sent_gift=3, channel_autotranslation_level_min=3,
 *   channel_restrict_sponsored_level_min=50, boosts_channel_level_max=100,
 *   group_* daraja kalitlari FAQ bilan mos.
 * - core.telegram.org/api/boost: slotlar; ko'chirishda cooldown; sovg'a qilgan
 *   +3 slot, oluvchi +1 slot; next_level_boosts.
 * - telegram.org/blog/gift-marketplace-and-more (2025-05-08): boost talablari
 *   pasaytirildi, avtotarjima osonroq.
 * «Premium obunachida 4 ta slot» da'vosi TASDIQLANMADI — slot soni Premium qanday
 * olinganiga bog'liq (API) deb yozilgan. StarsPaymee orqali olingan Premium
 * sovg'asi admin'ga +3 boost BERMAYDI (sovg'a Telegram ichida uning akkauntidan
 * qilinmaydi) — halol yozilgan. Boost ijarasi faktlari 100/106-postlardan.
 */

const GIVEAWAY_BOOSTS = 4; // giveaway_boosts_per_premium
const GIFT_BOOSTS = 3; // boosts_per_sent_gift
const AUTOTRANSLATE_LEVEL = 3; // channel_autotranslation_level_min
const ADS_OFF_LEVEL = 50; // channel_restrict_sponsored_level_min
const MAX_LEVEL = 100; // boosts_channel_level_max

const SRC = {
  faq: "https://telegram.org/faq_premium",
  config: "https://core.telegram.org/api/config",
  api: "https://core.telegram.org/api/boost",
  blog2025: "https://telegram.org/blog/gift-marketplace-and-more",
};

type Locale = "uz" | "ru" | "en";

function ChannelTable({ locale }: { locale: Locale }) {
  const h = {
    uz: ["Daraja", "Kuniga story", "Maxsus reaksiya", "Qo‘shimcha nimani ochadi"],
    ru: ["Уровень", "Историй в день", "Особых реакций", "Что ещё открывает"],
    en: ["Level", "Stories a day", "Custom reactions", "What else it unlocks"],
  }[locale];
  const extra = {
    uz: ["Story joylash boshlanadi; kanal nomi uchun 7 rang", "—", "Avtomatik tarjima — barcha o‘quvchilar uchun", "Havola va iqtiboslar uchun maxsus logotip (emoji)", "Muqova (profil) uchun 8 rang", "Muqova uchun 16 rang", "Muqova uchun maxsus logotip", "1000+ emoji status", "8 ta kanal foni", "Istalgan maxsus fon"],
    ru: ["Можно публиковать истории; 7 цветов названия канала", "—", "Автоперевод — для всех читателей", "Особый логотип (эмодзи) для ссылок и цитат", "8 цветов обложки (профиля)", "16 цветов обложки", "Особый логотип для обложки", "1000+ эмодзи-статусов", "8 фонов канала", "Любой свой фон"],
    en: ["Stories unlocked; 7 channel name colours", "—", "Auto-translation for all readers", "A custom logo (emoji) for links and quotes", "8 cover (profile) colours", "16 cover colours", "A custom logo for the cover", "1,000+ emoji statuses", "8 channel wallpapers", "Any custom wallpaper"],
  }[locale];
  return (
    <CompareTable
      headers={h}
      rows={extra.map((x, i) => [<strong key="l">{String(i + 1)}</strong>, String(i + 1), String(i + 1), x])}
    />
  );
}

function GroupTable({ locale }: { locale: Locale }) {
  const h = {
    uz: ["Daraja", "Kuniga story", "Qo‘shimcha nimani ochadi"],
    ru: ["Уровень", "Историй в день", "Что ещё открывает"],
    en: ["Level", "Stories a day", "What else it unlocks"],
  }[locale];
  const extra = {
    uz: ["Story joylash boshlanadi", "Muqova uchun 8 rang", "Muqova uchun 16 rang", "Guruhning o‘z emoji to‘plami", "Muqova uchun maxsus logotip", "Barcha a’zolar uchun cheksiz ovozni matnga aylantirish", "—", "1000+ emoji status", "8 ta guruh foni", "Istalgan maxsus fon"],
    ru: ["Можно публиковать истории", "8 цветов обложки", "16 цветов обложки", "Свой набор эмодзи группы", "Особый логотип для обложки", "Безлимитная расшифровка голосовых для всех участников", "—", "1000+ эмодзи-статусов", "8 фонов группы", "Любой свой фон"],
    en: ["Stories unlocked", "8 cover colours", "16 cover colours", "The group’s own emoji pack", "A custom logo for the cover", "Unlimited voice-to-text for all members", "—", "1,000+ emoji statuses", "8 group wallpapers", "Any custom wallpaper"],
  }[locale];
  return (
    <CompareTable headers={h} rows={extra.map((x, i) => [<strong key="l">{String(i + 1)}</strong>, String(i + 1), x])} />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Boost — Telegram Premium obunachisining kanal yoki guruhga beradigan «ovozi»: boost qancha ko‘p bo‘lsa, daraja
      shuncha yuqori. Har daraja kuniga shuncha story va shuncha maxsus reaksiya ochadi (1-daraja — 1 ta, 10-daraja — 10
      ta), qo‘shimcha: {AUTOTRANSLATE_LEVEL}-darajada avtomatik tarjima, 4-da havolalar uchun logotip, 5–6-da muqova
      ranglari, 7-da muqova logotipi, 8-da emoji status, 9–10-da fonlar. Boost uch yo‘ldan keladi: obunachi havolasi,
      Premium giveaway (har obuna uchun {GIVEAWAY_BOOSTS} boost) va admin qilgan Premium sovg‘asi ({GIFT_BOOSTS} boost).
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Boost nima va kim beradi" },
          { href: "#manba", label: "Boost qayerdan keladi — 3 rasmiy yo‘l va ijara" },
          { href: "#kanal", label: "Kanal darajalari jadvali 1–10" },
          { href: "#guruh", label: "Guruh darajalari" },
          { href: "#nechta", label: "Keyingi darajaga nechta boost kerak" },
          { href: "#maslahat", label: "Boostni tezroq yig‘ish — 5 maslahat" },
          { href: "#starspaymee", label: "StarsPaymee bilan nima qilsa bo‘ladi va nima bo‘lmaydi" },
        ]}
      />

      <h2 id="nima">Boost nima va kim beradi</h2>
      <p>
        Kanalingizda story joylash yoki maxsus reaksiya qo‘yish tugmasi ko‘rinmayaptimi? Buning kaliti — boost.
        Telegram Premium obunachisi o‘z boost slotini kanal yoki guruhga «beradi», kanal boostlar soniga qarab
        darajaga ko‘tariladi va har darajada yangi imkoniyatlar ochiladi. Boostsiz kanal 0-darajada: story yo‘q,
        maxsus reaksiya yo‘q.
      </p>
      <KeyFacts label="Asosiy qoidalar">
        <li>
          <b>Faqat Premium</b> obunachi boost bera oladi; Premium’siz foydalanuvchida slot yo‘q.
        </li>
        <li>
          <b>Slotlar soni</b> Premium qanday olinganiga bog‘liq; sovg‘a qilingan Premium ham slot beradi.
        </li>
        <li>
          <b>Ko‘chirish — kutish bilan:</b> slotni bir kanaldan boshqasiga o‘tkazsangiz, cooldown davri bor.
        </li>
        <li>
          <b>Boost muddatli:</b> obunachining Premium’i tugasa yoki u slotni olib qo‘ysa, boost ketadi va daraja
          pasayishi mumkin.
        </li>
        <li>
          <b>Maksimal daraja — {MAX_LEVEL}.</b> {ADS_OFF_LEVEL}-darajadan boshlab kanal egasi kanaldagi reklamani
          barcha foydalanuvchilar uchun o‘chira oladi.
        </li>
      </KeyFacts>

      <h2 id="manba">Boost qayerdan keladi — 3 rasmiy yo‘l va ijara</h2>
      <InfoGrid>
        <InfoCard emoji="🔗" title="1. Boost havolasi">
          Har kanalning o‘z havolasi bor (t.me/boost/username ko‘rinishida). Premium obunachi uni ochib boost beradi.
          Ochiq kanalni obuna bo‘lmagan Premium foydalanuvchi ham boost qila oladi.
        </InfoCard>
        <InfoCard emoji="🎁" title={`2. Premium giveaway — har obuna uchun ${GIVEAWAY_BOOSTS} boost`}>
          Kanal Telegram ichida Premium obunalarini o‘ynaydi; har bir sovg‘a qilinadigan obuna uchun kanal darhol{" "}
          {GIVEAWAY_BOOSTS} boost oladi. Giveaway qanday o‘tkaziladi —{" "}
          <Link href="/blog/telegram-premium-bepul-olish-haqiqat#giveaway">rasmiy boost giveaway</Link>.
        </InfoCard>
        <InfoCard emoji="👤" title={`3. Premium sovg‘asi — ${GIFT_BOOSTS} boost`}>
          Admin Telegram ichida do‘stiga Premium sovg‘a qilsa, o‘ziga {GIFT_BOOSTS} ta yangi slot oladi va ularni
          kanaliga beradi; sovg‘a olgan odamga ham 1 slot tushadi.
        </InfoCard>
        <InfoCard emoji="🏪" title="4. Boost ijarasi (StarsPaymee)">
          Tez va muddatli yo‘l: Boost Market’da 1–100 boost, 1–30 kunga, so‘mda. Muddat tugagach boostlar qaytariladi
          va daraja shunga mos tushadi. Batafsil —{" "}
          <Link href="/blog/telegram-kanalga-boost-sotib-olish">kanalga boost sotib olish</Link>.
        </InfoCard>
      </InfoGrid>

      <h2 id="kanal">Kanal darajalari jadvali 1–10</h2>
      <p>
        Ikki narsa har darajada o‘sadi: <b>kuniga story soni</b> va <b>maxsus reaksiyalar soni</b> — ikkalasi daraja
        raqamiga teng. Qolgan imkoniyatlar ma’lum darajada ochiladi va keyingi darajalarda saqlanib qoladi.
      </p>
      <ChannelTable locale="uz" />
      <Notice label="Eslatma">
        Jadval Telegram Premium FAQ va mijoz konfiguratsiyasidagi daraja kalitlari asosida (2026-yil oktabr holati).
        Telegram chegaralarni yangilanishlarda o‘zgartiradi — masalan, 2025-yil may yangilanishida boost talablari
        pasaytirildi va avtomatik tarjima {AUTOTRANSLATE_LEVEL}-darajadan ochiladigan bo‘ldi. 10-darajadan keyin ham
        daraja o‘sadi ({MAX_LEVEL} gacha).
      </Notice>

      <h2 id="guruh">Guruh darajalari</h2>
      <p>
        Guruhlar (supergruppalar) ham Premium a’zolaridan boost oladi va darajalar bo‘yicha o‘sadi. Story soni kanal
        bilan bir xil — daraja raqamiga teng; qolgan imkoniyatlar biroz boshqacha tartibda ochiladi.
      </p>
      <GroupTable locale="uz" />
      <p>
        Qo‘shimcha: guruh adminlari «cheklovlarni chetlab o‘tish uchun 1–8 boost» talabini qo‘yishi mumkin — shuncha
        boost bergan a’zo sekin rejim va ayrim cheklovlardan ozod bo‘ladi.
      </p>

      <h2 id="nechta">Keyingi darajaga nechta boost kerak</h2>
      <p>
        Aniq raqam har kanal uchun har xil: Telegram FAQ’iga ko‘ra kerakli boost soni <b>kanal obunachilari soniga</b>{" "}
        bog‘liq — shuning uchun kichik kanalga kamroq, katta kanalga ko‘proq boost kerak. Joriy daraja, boostlar soni
        va keyingi darajaga qancha qolgani kanalning boost sahifasida ko‘rinadi.
      </p>
      <Steps>
        <Step title="1. Kanal profilini oching">
          Kanal → «Boost» tugmasi (yoki Statistika → Boostlar). Guruhda — guruh profili → «Boost».
        </Step>
        <Step title="2. Daraja va kerakli sonni ko‘ring">
          Sahifada joriy daraja, hozirgi boostlar soni va keyingi darajaga nechta kerakligi ko‘rsatiladi; kim boost
          berganini ro‘yxatda ko‘rasiz.
        </Step>
        <Step title="3. Boost havolasini ulashing">
          «Havolani nusxalash» — t.me/boost/username ko‘rinishida. Uni qadab qo‘yilgan postga joylang va nima uchun
          kerakligini (story, reaksiya) tushuntiring.
        </Step>
      </Steps>

      <h2 id="maslahat">Boostni tezroq yig‘ish — 5 maslahat</h2>
      <KeyFacts label="Amaliy">
        <li>
          <b>Havolani ko‘rinadigan joyga qo‘ying:</b> pin post, kanal tavsifi, har haftalik eslatma — Premium
          obunachilar ko‘pincha so‘ralmagani uchun boost bermaydi.
        </li>
        <li>
          <b>Kichik giveaway:</b> 5 ta sovg‘a obuna — darhol {5 * GIVEAWAY_BOOSTS} boost; giveaway Telegram ichida
          to‘lanadi.
        </li>
        <li>
          <b>Jamoaga Premium:</b> adminlar bir-biriga Telegram ichida Premium sovg‘a qilsa, har sovg‘a {GIFT_BOOSTS}{" "}
          boost — ularni kanalga bering.
        </li>
        <li>
          <b>Story bilan so‘rang:</b> daraja ochilgach story orqali boost so‘rash eng ko‘p javob beradi.
        </li>
        <li>
          <b>Muddatli ko‘tarilish kerak bo‘lsa — ijara:</b> aksiya, konkurs yoki story seriyasi uchun 1–30 kunga boost
          olish, keyin daraja qaytadi.
        </li>
      </KeyFacts>

      <h2 id="starspaymee">StarsPaymee bilan nima qilsa bo‘ladi va nima bo‘lmaydi</h2>
      <KeyFacts label="Halol izoh">
        <li>
          <b>Bo‘ladi — Premium so‘mda:</b> obunachi yoki adminga 3, 6, 12 oylik Premium @username bo‘yicha. Premium
          olgan odam o‘zi kanalingizga boost bera oladi.
        </li>
        <li>
          <b>Bo‘lmaydi — admin’ga +{GIFT_BOOSTS} boost:</b> Telegram {GIFT_BOOSTS} slotni faqat Telegram ichida, o‘z
          akkauntingizdan sovg‘a qilganingizda beradi. StarsPaymee orqali olib berilgan Premium uchun sizga slot
          tushmaydi — Premium olgan odamning o‘zi boost beradi.
        </li>
        <li>
          <b>Bo‘lmaydi — giveaway:</b> Premium giveaway va uning {GIVEAWAY_BOOSTS} boosti faqat Telegram ichida
          to‘lanadi.
        </li>
        <li>
          <b>Bo‘ladi — boost ijarasi:</b> Boost Market’da 1–100 boost, 1–30 kun, so‘mda; narxlar —{" "}
          <Link href="/blog/telegram-boost-narxlari">boost narxlari</Link>.
        </li>
      </KeyFacts>
      <InlineCta text="Obunachi yoki jamoangizga Premium kerakmi? So‘mda, username bilan — 3, 6 yoki 12 oy." product={{ kind: "premium", months: 3 }} />
      <p>
        Boost nima ekanini boshidan tushunish uchun —{" "}
        <Link href="/blog/telegram-kanal-boost-nima">Telegram kanal boost nima</Link>; kanal reytingini umumiy
        oshirish — <Link href="/blog/telegram-kanal-reytingi">kanal reytingi va level</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: SRC.faq, label: "Telegram Premium FAQ — Boosts", note: "kim boost beradi, giveaway 4, sovg‘a 3, darajalar ro‘yxati, guruhlar" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "daraja kalitlari: avtotarjima 3, logotip 4, muqova 7, status 8, fon 9/10, reklama 50, maksimum 100" },
          { href: SRC.api, label: "core.telegram.org/api/boost", note: "slotlar, ko‘chirishda cooldown, sovg‘a qilgan +3 va oluvchi +1 slot" },
          { href: SRC.blog2025, label: "Telegram Blog — Gift Marketplace, Auto-Translate (2025-05-08)", note: "boost talablari pasaytirildi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Буст — «голос» подписчика Telegram Premium за канал или группу: чем больше бустов, тем выше уровень. Каждый
      уровень открывает столько же историй в день и особых реакций (уровень 1 — по одной, уровень 10 — по десять),
      плюс: на уровне {AUTOTRANSLATE_LEVEL} автоперевод, на 4 — логотип для ссылок, на 5–6 — цвета обложки, на 7 —
      логотип обложки, на 8 — эмодзи-статус, на 9–10 — фоны. Бусты приходят тремя путями: ссылка для подписчиков,
      Premium-giveaway ({GIVEAWAY_BOOSTS} буста за каждую подписку) и подарок Premium от админа ({GIFT_BOOSTS} буста).
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое буст и кто его даёт" },
          { href: "#manba", label: "Откуда берутся бусты — 3 официальных пути и аренда" },
          { href: "#kanal", label: "Таблица уровней канала 1–10" },
          { href: "#guruh", label: "Уровни групп" },
          { href: "#nechta", label: "Сколько бустов нужно до следующего уровня" },
          { href: "#maslahat", label: "Как собрать бусты быстрее — 5 советов" },
          { href: "#starspaymee", label: "Что можно сделать через StarsPaymee, а что нет" },
        ]}
      />

      <h2 id="nima">Что такое буст и кто его даёт</h2>
      <p>
        Не видите в канале кнопку публикации историй или особых реакций? Ключ — бусты. Подписчик Telegram Premium
        «отдаёт» свой слот буста каналу или группе, канал по числу бустов поднимается по уровням, и на каждом уровне
        открываются новые возможности. Канал без бустов — на уровне 0: ни историй, ни особых реакций.
      </p>
      <KeyFacts label="Основные правила">
        <li>
          <b>Бустить может только Premium</b> — у пользователя без Premium слотов нет.
        </li>
        <li>
          <b>Число слотов</b> зависит от того, как получен Premium; подаренный Premium тоже даёт слот.
        </li>
        <li>
          <b>Перенос — с ожиданием:</b> если переставить слот с одного канала на другой, действует период ожидания.
        </li>
        <li>
          <b>Буст временный:</b> когда Premium подписчика заканчивается или он забирает слот, буст уходит и уровень
          может снизиться.
        </li>
        <li>
          <b>Максимальный уровень — {MAX_LEVEL}.</b> С уровня {ADS_OFF_LEVEL} владелец канала может отключить рекламу в
          канале для всех пользователей.
        </li>
      </KeyFacts>

      <h2 id="manba">Откуда берутся бусты — 3 официальных пути и аренда</h2>
      <InfoGrid>
        <InfoCard emoji="🔗" title="1. Ссылка для буста">
          У каждого канала своя ссылка (вида t.me/boost/username). Подписчик с Premium открывает её и отдаёт буст.
          Открытый канал может бустить и Premium-пользователь, который на него не подписан.
        </InfoCard>
        <InfoCard emoji="🎁" title={`2. Premium-giveaway — ${GIVEAWAY_BOOSTS} буста за подписку`}>
          Канал разыгрывает подписки Premium внутри Telegram; за каждую подаренную подписку канал сразу получает{" "}
          {GIVEAWAY_BOOSTS} буста. Как проводится giveaway —{" "}
          <Link href="/blog/telegram-premium-bepul-olish-haqiqat#giveaway">официальный boost-giveaway</Link>.
        </InfoCard>
        <InfoCard emoji="👤" title={`3. Подарок Premium — ${GIFT_BOOSTS} буста`}>
          Если админ дарит другу Premium внутри Telegram, он получает {GIFT_BOOSTS} новых слота и отдаёт их своему
          каналу; получателю подарка тоже достаётся 1 слот.
        </InfoCard>
        <InfoCard emoji="🏪" title="4. Аренда бустов (StarsPaymee)">
          Быстрый и временный путь: в Boost Market 1–100 бустов на 1–30 дней за сумы. По окончании срока бусты
          возвращаются, и уровень соответственно снижается. Подробнее —{" "}
          <Link href="/blog/telegram-kanalga-boost-sotib-olish">купить бусты для канала</Link>.
        </InfoCard>
      </InfoGrid>

      <h2 id="kanal">Таблица уровней канала 1–10</h2>
      <p>
        Две вещи растут на каждом уровне: <b>число историй в день</b> и <b>число особых реакций</b> — оба равны номеру
        уровня. Остальные возможности открываются на определённом уровне и сохраняются дальше.
      </p>
      <ChannelTable locale="ru" />
      <Notice label="Примечание">
        Таблица составлена по Telegram Premium FAQ и ключам уровней в клиентской конфигурации (состояние на октябрь
        2026). Telegram меняет пороги в обновлениях — например, в майском обновлении 2025 года требования к бустам
        снизили, и автоперевод стал открываться с уровня {AUTOTRANSLATE_LEVEL}. После 10-го уровень продолжает расти
        (до {MAX_LEVEL}).
      </Notice>

      <h2 id="guruh">Уровни групп</h2>
      <p>
        Группы (супергруппы) тоже получают бусты от участников с Premium и растут по уровням. Число историй такое же,
        как у каналов — равно номеру уровня; остальные возможности открываются в немного другом порядке.
      </p>
      <GroupTable locale="ru" />
      <p>
        Дополнительно: админы группы могут задать требование «1–8 бустов для обхода ограничений» — участник, давший
        столько бустов, освобождается от медленного режима и части ограничений.
      </p>

      <h2 id="nechta">Сколько бустов нужно до следующего уровня</h2>
      <p>
        Точное число у каждого канала своё: по Telegram FAQ требуемое количество бустов зависит от{" "}
        <b>числа подписчиков канала</b> — поэтому маленькому каналу нужно меньше, большому больше. Текущий уровень,
        число бустов и сколько осталось до следующего уровня видны на странице бустов канала.
      </p>
      <Steps>
        <Step title="1. Откройте профиль канала">
          Канал → кнопка «Буст» (или Статистика → Бусты). В группе — профиль группы → «Буст».
        </Step>
        <Step title="2. Посмотрите уровень и нужное число">
          На странице показаны текущий уровень, число бустов сейчас и сколько нужно до следующего уровня; в списке
          видно, кто дал буст.
        </Step>
        <Step title="3. Поделитесь ссылкой для буста">
          «Скопировать ссылку» — вида t.me/boost/username. Закрепите её в посте и объясните, зачем она нужна (истории,
          реакции).
        </Step>
      </Steps>

      <h2 id="maslahat">Как собрать бусты быстрее — 5 советов</h2>
      <KeyFacts label="Практика">
        <li>
          <b>Держите ссылку на виду:</b> закреп, описание канала, еженедельное напоминание — Premium-подписчики часто
          не бустят просто потому, что их не просили.
        </li>
        <li>
          <b>Небольшой giveaway:</b> 5 подарочных подписок — сразу {5 * GIVEAWAY_BOOSTS} бустов; giveaway оплачивается
          внутри Telegram.
        </li>
        <li>
          <b>Premium команде:</b> если админы дарят друг другу Premium внутри Telegram, каждый подарок — {GIFT_BOOSTS}{" "}
          буста, отдайте их каналу.
        </li>
        <li>
          <b>Просите через истории:</b> когда уровень открыт, просьба о бусте в истории даёт больше всего откликов.
        </li>
        <li>
          <b>Нужен временный подъём — аренда:</b> на акцию, конкурс или серию историй возьмите бусты на 1–30 дней,
          потом уровень вернётся.
        </li>
      </KeyFacts>

      <h2 id="starspaymee">Что можно сделать через StarsPaymee, а что нет</h2>
      <KeyFacts label="Честно">
        <li>
          <b>Можно — Premium за сумы:</b> подписчику или админу на 3, 6 или 12 месяцев по @username. Человек с
          Premium сам может забустить ваш канал.
        </li>
        <li>
          <b>Нельзя — +{GIFT_BOOSTS} буста админу:</b> Telegram даёт {GIFT_BOOSTS} слота только при подарке внутри
          Telegram с вашего аккаунта. За Premium, купленный через StarsPaymee, слоты вам не начисляются — бустит сам
          получатель Premium.
        </li>
        <li>
          <b>Нельзя — giveaway:</b> Premium-giveaway и его {GIVEAWAY_BOOSTS} буста оплачиваются только внутри Telegram.
        </li>
        <li>
          <b>Можно — аренда бустов:</b> в Boost Market 1–100 бустов на 1–30 дней за сумы; цены —{" "}
          <Link href="/blog/telegram-boost-narxlari">цены на бусты</Link>.
        </li>
      </KeyFacts>
      <InlineCta text="Нужен Premium подписчику или команде? В сумах, по username — на 3, 6 или 12 месяцев." product={{ kind: "premium", months: 3 }} />
      <p>
        Что такое буст с самого начала — <Link href="/blog/telegram-kanal-boost-nima">что такое буст канала Telegram</Link>;
        как поднять рейтинг канала в целом — <Link href="/blog/telegram-kanal-reytingi">рейтинг и уровень канала</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: SRC.faq, label: "Telegram Premium FAQ — Boosts", note: "кто бустит, giveaway 4, подарок 3, список уровней, группы" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "ключи уровней: автоперевод 3, логотип 4, обложка 7, статус 8, фон 9/10, реклама 50, максимум 100" },
          { href: SRC.api, label: "core.telegram.org/api/boost", note: "слоты, ожидание при переносе, +3 слота дарителю и +1 получателю" },
          { href: SRC.blog2025, label: "Telegram Blog — Gift Marketplace, Auto-Translate (2025-05-08)", note: "требования к бустам снижены" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      A boost is a Telegram Premium subscriber’s “vote” for a channel or group: the more boosts, the higher the
      level. Each level unlocks as many stories a day and as many custom reactions as its number (level 1 — one each,
      level 10 — ten each), plus: auto-translation at level {AUTOTRANSLATE_LEVEL}, a logo for links at 4, cover
      colours at 5–6, a cover logo at 7, emoji status at 8, wallpapers at 9–10. Boosts come three ways: the
      subscriber link, a Premium giveaway ({GIVEAWAY_BOOSTS} boosts per subscription) and a Premium gift by an admin
      ({GIFT_BOOSTS} boosts).
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nima", label: "What a boost is and who gives it" },
          { href: "#manba", label: "Where boosts come from — 3 official ways and rental" },
          { href: "#kanal", label: "Channel level table 1–10" },
          { href: "#guruh", label: "Group levels" },
          { href: "#nechta", label: "How many boosts the next level needs" },
          { href: "#maslahat", label: "Collecting boosts faster — 5 tips" },
          { href: "#starspaymee", label: "What StarsPaymee can and cannot do here" },
        ]}
      />

      <h2 id="nima">What a boost is and who gives it</h2>
      <p>
        Can’t see the button to post stories or add custom reactions in your channel? The key is boosts. A Telegram
        Premium subscriber “gives” their boost slot to a channel or group, the channel rises through levels by its
        boost count, and each level unlocks new features. A channel with no boosts sits at level 0: no stories, no
        custom reactions.
      </p>
      <KeyFacts label="Core rules">
        <li>
          <b>Only Premium</b> subscribers can boost; a user without Premium has no slots.
        </li>
        <li>
          <b>The number of slots</b> depends on how Premium was obtained; gifted Premium gives a slot too.
        </li>
        <li>
          <b>Moving a slot takes a cooldown:</b> reassign a slot from one channel to another and a waiting period
          applies.
        </li>
        <li>
          <b>Boosts are temporary:</b> when the subscriber’s Premium ends or they take the slot back, the boost goes
          and the level may drop.
        </li>
        <li>
          <b>The maximum level is {MAX_LEVEL}.</b> From level {ADS_OFF_LEVEL} the owner can turn off ads in the channel
          for all users.
        </li>
      </KeyFacts>

      <h2 id="manba">Where boosts come from — 3 official ways and rental</h2>
      <InfoGrid>
        <InfoCard emoji="🔗" title="1. The boost link">
          Every channel has its own link (of the form t.me/boost/username). A Premium subscriber opens it and gives a
          boost. A public channel can be boosted even by a Premium user who is not subscribed.
        </InfoCard>
        <InfoCard emoji="🎁" title={`2. A Premium giveaway — ${GIVEAWAY_BOOSTS} boosts per subscription`}>
          The channel raffles Premium subscriptions inside Telegram; for each gifted subscription the channel instantly
          gets {GIVEAWAY_BOOSTS} boosts. How a giveaway is run —{" "}
          <Link href="/blog/telegram-premium-bepul-olish-haqiqat#giveaway">the official boost giveaway</Link>.
        </InfoCard>
        <InfoCard emoji="👤" title={`3. A Premium gift — ${GIFT_BOOSTS} boosts`}>
          When an admin gifts Premium to a friend inside Telegram, they get {GIFT_BOOSTS} new slots and give them to
          their channel; the recipient gets 1 slot as well.
        </InfoCard>
        <InfoCard emoji="🏪" title="4. Boost rental (StarsPaymee)">
          The fast, temporary route: 1–100 boosts for 1–30 days in the Boost Market, paid in som. When the term ends
          the boosts are returned and the level drops accordingly. Details —{" "}
          <Link href="/blog/telegram-kanalga-boost-sotib-olish">buying boosts for a channel</Link>.
        </InfoCard>
      </InfoGrid>

      <h2 id="kanal">Channel level table 1–10</h2>
      <p>
        Two things grow at every level: the <b>number of stories a day</b> and the <b>number of custom reactions</b> —
        both equal the level number. The other features unlock at a given level and stay unlocked above it.
      </p>
      <ChannelTable locale="en" />
      <Notice label="Note">
        The table follows the Telegram Premium FAQ and the level keys in the client configuration (as of October 2026).
        Telegram changes thresholds in updates — for example, the May 2025 update lowered boost requirements and
        auto-translation now unlocks at level {AUTOTRANSLATE_LEVEL}. Levels keep growing past 10 (up to {MAX_LEVEL}).
      </Notice>

      <h2 id="guruh">Group levels</h2>
      <p>
        Groups (supergroups) also receive boosts from Premium members and climb levels. Stories a day match channels —
        equal to the level number; the other features unlock in a slightly different order.
      </p>
      <GroupTable locale="en" />
      <p>
        In addition, group admins can require “1–8 boosts to bypass restrictions” — a member who gave that many boosts
        is freed from slow mode and some restrictions.
      </p>

      <h2 id="nechta">How many boosts the next level needs</h2>
      <p>
        The exact number differs per channel: according to the Telegram FAQ the boosts required depend on the{" "}
        <b>channel’s subscriber count</b> — a small channel needs fewer, a large one more. The current level, the boost
        count and how many remain until the next level are shown on the channel’s boost page.
      </p>
      <Steps>
        <Step title="1. Open the channel profile">
          Channel → the “Boost” button (or Statistics → Boosts). In a group — the group profile → “Boost”.
        </Step>
        <Step title="2. Check the level and the number needed">
          The page shows the current level, the boosts you have now and how many the next level needs; the list shows
          who boosted.
        </Step>
        <Step title="3. Share the boost link">
          “Copy link” — of the form t.me/boost/username. Pin it in a post and explain what it is for (stories,
          reactions).
        </Step>
      </Steps>

      <h2 id="maslahat">Collecting boosts faster — 5 tips</h2>
      <KeyFacts label="In practice">
        <li>
          <b>Keep the link visible:</b> a pinned post, the channel description, a weekly reminder — Premium subscribers
          often do not boost simply because nobody asked.
        </li>
        <li>
          <b>A small giveaway:</b> 5 gift subscriptions — {5 * GIVEAWAY_BOOSTS} boosts at once; a giveaway is paid
          inside Telegram.
        </li>
        <li>
          <b>Premium for the team:</b> if admins gift each other Premium inside Telegram, each gift is {GIFT_BOOSTS}{" "}
          boosts — give them to the channel.
        </li>
        <li>
          <b>Ask through stories:</b> once the level is open, asking for boosts in a story gets the most response.
        </li>
        <li>
          <b>Need a temporary lift — rent:</b> for a promotion, a contest or a story series, take boosts for 1–30 days,
          then the level returns.
        </li>
      </KeyFacts>

      <h2 id="starspaymee">What StarsPaymee can and cannot do here</h2>
      <KeyFacts label="Honestly">
        <li>
          <b>Can — Premium in som:</b> for a subscriber or an admin for 3, 6 or 12 months by @username. A person with
          Premium can boost your channel themselves.
        </li>
        <li>
          <b>Cannot — +{GIFT_BOOSTS} boosts for the admin:</b> Telegram grants the {GIFT_BOOSTS} slots only when the
          gift is made inside Telegram from your own account. For Premium bought through StarsPaymee no slots are
          credited to you — the Premium recipient boosts.
        </li>
        <li>
          <b>Cannot — a giveaway:</b> a Premium giveaway and its {GIVEAWAY_BOOSTS} boosts are paid only inside Telegram.
        </li>
        <li>
          <b>Can — boost rental:</b> 1–100 boosts for 1–30 days in the Boost Market, in som; prices —{" "}
          <Link href="/blog/telegram-boost-narxlari">boost prices</Link>.
        </li>
      </KeyFacts>
      <InlineCta text="Need Premium for a subscriber or your team? In som, by username — 3, 6 or 12 months." product={{ kind: "premium", months: 3 }} />
      <p>
        What a boost is from the start — <Link href="/blog/telegram-kanal-boost-nima">what a Telegram channel boost is</Link>;
        raising a channel’s rating overall — <Link href="/blog/telegram-kanal-reytingi">channel rating and level</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: SRC.faq, label: "Telegram Premium FAQ — Boosts", note: "who boosts, giveaway 4, gift 3, the level list, groups" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "level keys: auto-translation 3, logo 4, cover 7, status 8, wallpaper 9/10, ads 50, maximum 100" },
          { href: SRC.api, label: "core.telegram.org/api/boost", note: "slots, cooldown on reassignment, +3 slots for the gifter and +1 for the recipient" },
          { href: SRC.blog2025, label: "Telegram Blog — Gift Marketplace, Auto-Translate (2025-05-08)", note: "boost requirements lowered" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Premium’siz foydalanuvchi boost bera oladimi?",
    answer: "Yo‘q. Boost slotlari faqat Telegram Premium obunachilarida bo‘ladi. Premium sovg‘a qilib olingan bo‘lsa ham slot beriladi.",
  },
  {
    question: "Boost havolasini qayerdan topaman?",
    answer: "Kanal profili → «Boost» (yoki Statistika → Boostlar) → «Havolani nusxalash». Havola t.me/boost/username ko‘rinishida bo‘ladi.",
  },
  {
    question: "Nega boshqa kanalga kamroq boost kerak?",
    answer: "Telegram FAQ’iga ko‘ra keyingi darajaga kerakli boost soni kanal obunachilari soniga bog‘liq: kichik kanalga kamroq, katta kanalga ko‘proq. Aniq raqam kanalning boost sahifasida ko‘rinadi.",
  },
  {
    question: "Boost qancha vaqt turadi?",
    answer: "Obunachi slotni kanalda qoldirgan va Premium’i amal qilgan davrda. Premium tugasa yoki slot boshqa kanalga ko‘chirilsa, boost ketadi. Ijaraga olingan boostlar tanlangan muddat (1–30 kun) tugagach qaytariladi.",
  },
  {
    question: "Daraja pasayishi mumkinmi?",
    answer: "Ha. Boostlar soni keyingi chegaradan pastga tushsa, daraja ham tushadi va shu daraja bergan imkoniyatlar (masalan, kuniga story soni) qisqaradi.",
  },
  {
    question: "Giveaway nechta boost beradi?",
    answer: `Har bir sovg‘a qilinadigan Premium obuna uchun kanal darhol ${GIVEAWAY_BOOSTS} boost oladi. Giveaway Telegram ichida o‘tkaziladi va to‘lanadi.`,
  },
  {
    question: "Do‘stimga Premium sovg‘a qilsam, nechta boost olaman?",
    answer: `Telegram ichida o‘z akkauntingizdan sovg‘a qilsangiz — ${GIFT_BOOSTS} ta yangi slot (ularni istalgan kanalga berasiz); sovg‘a olgan odamga 1 slot. StarsPaymee orqali olib berilgan Premium uchun sizga slot tushmaydi — Premium olgan odam o‘zi boost beradi.`,
  },
  {
    question: "Guruhlar ham boost oladimi?",
    answer: "Ha. Supergruppalar Premium a’zolaridan boost oladi: har daraja kuniga 1 story qo‘shadi, 2–3-darajada muqova ranglari, 4-da guruh emoji to‘plami, 5-da muqova logotipi, 6-da cheksiz ovozni matnga aylantirish, 8-da emoji status, 9–10-da fonlar.",
  },
  {
    question: "Kanaldagi reklamani o‘chirish uchun qaysi daraja kerak?",
    answer: `Telegram konfiguratsiyasiga ko‘ra ${ADS_OFF_LEVEL}-darajadan boshlab kanal egasi kanaldagi reklamani barcha foydalanuvchilar uchun o‘chira oladi. Maksimal daraja — ${MAX_LEVEL}.`,
  },
  {
    question: "StarsPaymee orqali darajani ko‘tarsa bo‘ladimi?",
    answer: "Ikki yo‘l bilan: Boost Market’da 1–100 boostni 1–30 kunga ijaraga olish (daraja muddat davomida ko‘tariladi) va obunachi yoki adminlarga Premium so‘mda olib berish — ular keyin o‘zlari boost beradi. Giveaway va admin uchun +3 boost faqat Telegram ichida ishlaydi.",
  },
];

const ruFaq = [
  {
    question: "Может ли бустить пользователь без Premium?",
    answer: "Нет. Слоты бустов есть только у подписчиков Telegram Premium. Если Premium получен в подарок, слот тоже даётся.",
  },
  {
    question: "Где найти ссылку для буста?",
    answer: "Профиль канала → «Буст» (или Статистика → Бусты) → «Скопировать ссылку». Ссылка имеет вид t.me/boost/username.",
  },
  {
    question: "Почему другому каналу нужно меньше бустов?",
    answer: "По Telegram FAQ число бустов до следующего уровня зависит от количества подписчиков канала: маленькому каналу нужно меньше, большому больше. Точное число видно на странице бустов канала.",
  },
  {
    question: "Сколько держится буст?",
    answer: "Пока подписчик оставляет слот на канале и его Premium действует. Когда Premium заканчивается или слот переносят на другой канал, буст уходит. Арендованные бусты возвращаются по окончании срока (1–30 дней).",
  },
  {
    question: "Может ли уровень снизиться?",
    answer: "Да. Если число бустов опускается ниже порога, уровень падает, и возможности этого уровня (например, число историй в день) сокращаются.",
  },
  {
    question: "Сколько бустов даёт giveaway?",
    answer: `За каждую подаренную подписку Premium канал сразу получает ${GIVEAWAY_BOOSTS} буста. Giveaway проводится и оплачивается внутри Telegram.`,
  },
  {
    question: "Сколько бустов я получу, подарив другу Premium?",
    answer: `При подарке внутри Telegram со своего аккаунта — ${GIFT_BOOSTS} новых слота (их можно отдать любому каналу); получателю — 1 слот. За Premium, купленный через StarsPaymee, слоты вам не начисляются — бустит сам получатель Premium.`,
  },
  {
    question: "Группы тоже получают бусты?",
    answer: "Да. Супергруппы получают бусты от участников с Premium: каждый уровень добавляет 1 историю в день, на уровнях 2–3 — цвета обложки, на 4 — набор эмодзи группы, на 5 — логотип обложки, на 6 — безлимитная расшифровка голосовых, на 8 — эмодзи-статус, на 9–10 — фоны.",
  },
  {
    question: "Какой уровень нужен, чтобы отключить рекламу в канале?",
    answer: `По конфигурации Telegram с уровня ${ADS_OFF_LEVEL} владелец канала может отключить рекламу для всех пользователей. Максимальный уровень — ${MAX_LEVEL}.`,
  },
  {
    question: "Можно ли поднять уровень через StarsPaymee?",
    answer: "Двумя способами: арендовать в Boost Market 1–100 бустов на 1–30 дней (уровень держится весь срок) и купить подписчикам или админам Premium за сумы — дальше они бустят сами. Giveaway и +3 буста админу работают только внутри Telegram.",
  },
];

const enFaq = [
  {
    question: "Can a user without Premium boost?",
    answer: "No. Boost slots exist only for Telegram Premium subscribers. Premium received as a gift gives a slot too.",
  },
  {
    question: "Where do I find the boost link?",
    answer: "Channel profile → “Boost” (or Statistics → Boosts) → “Copy link”. The link has the form t.me/boost/username.",
  },
  {
    question: "Why does another channel need fewer boosts?",
    answer: "According to the Telegram FAQ, the boosts needed for the next level depend on the channel’s subscriber count: a small channel needs fewer, a large one more. The exact number is shown on the channel’s boost page.",
  },
  {
    question: "How long does a boost last?",
    answer: "As long as the subscriber keeps the slot on the channel and their Premium is active. When Premium ends or the slot is moved to another channel, the boost goes. Rented boosts are returned when the term (1–30 days) ends.",
  },
  {
    question: "Can the level drop?",
    answer: "Yes. If the boost count falls below the threshold, the level drops and that level’s features (for example, stories a day) shrink.",
  },
  {
    question: "How many boosts does a giveaway give?",
    answer: `For each gifted Premium subscription the channel instantly gets ${GIVEAWAY_BOOSTS} boosts. A giveaway is run and paid inside Telegram.`,
  },
  {
    question: "How many boosts do I get for gifting a friend Premium?",
    answer: `When you gift inside Telegram from your own account — ${GIFT_BOOSTS} new slots (you can give them to any channel); the recipient gets 1 slot. For Premium bought through StarsPaymee no slots are credited to you — the Premium recipient boosts.`,
  },
  {
    question: "Do groups get boosts too?",
    answer: "Yes. Supergroups receive boosts from Premium members: each level adds 1 story a day, levels 2–3 add cover colours, level 4 the group’s emoji pack, level 5 a cover logo, level 6 unlimited voice-to-text, level 8 emoji status, levels 9–10 wallpapers.",
  },
  {
    question: "Which level is needed to turn off ads in a channel?",
    answer: `According to Telegram’s configuration, from level ${ADS_OFF_LEVEL} the channel owner can turn off ads for all users. The maximum level is ${MAX_LEVEL}.`,
  },
  {
    question: "Can I raise the level through StarsPaymee?",
    answer: "In two ways: rent 1–100 boosts for 1–30 days in the Boost Market (the level holds for the term), and buy Premium in som for subscribers or admins — they then boost themselves. A giveaway and the +3 boosts for an admin work only inside Telegram.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "info",
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
  keywords: [
    "telegram boost darajalari",
    "boost level jadvali",
    "kanal darajasi nima beradi",
    "telegram kanal level",
    "boost nechta kerak",
    "giveaway boost",
    "уровни буста telegram",
    "что даёт уровень канала telegram",
    "telegram boost levels",
    "telegram channel level perks",
  ],
  howToSteps: [
    { name: "Kanal profilini oching", text: "Kanal → «Boost» tugmasi yoki Statistika → Boostlar bo‘limiga kiring." },
    { name: "Daraja va kerakli sonni ko‘ring", text: "Joriy daraja, boostlar soni va keyingi darajaga qancha kerakligi ko‘rsatiladi." },
    { name: "Boost havolasini ulashing", text: "«Havolani nusxalash» — t.me/boost/username; uni qadab qo‘yilgan postga joylang." },
  ],
  locales: {
    uz: {
      title: "Telegram boost darajalari: 1–10 daraja nimani ochadi — kanal va guruh jadvali (2026)",
      excerpt:
        "Har daraja kuniga nechta story va maxsus reaksiya beradi, qaysi darajada avtotarjima, logotip, emoji status va fon ochiladi; boost qayerdan keladi — havola, giveaway (4 boost), Premium sovg‘asi (3 boost), ijara.",
      metaTitle: "Telegram boost darajalari — 1–10 daraja nimani ochadi",
      metaDescription: "Telegram boost darajalari jadvali: har daraja nechta story va reaksiya beradi, qaysi darajada avtotarjima, logotip, emoji status, fon ochiladi; boost manbalari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Darajaga ko‘tarilish uchun ikki yo‘l — so‘mda",
      ctaBody: "Obunachi va adminlarga Premium (3, 6, 12 oy) yoki Boost Market’da 1–30 kunlik boost ijarasi. Username bilan, kripto va xorijiy kartasiz.",
      faq: uzFaq,
    },
    ru: {
      title: "Уровни буста Telegram: что открывает каждый уровень 1–10 — таблица для каналов и групп (2026)",
      excerpt:
        "Сколько историй в день и особых реакций даёт каждый уровень, на каком уровне открываются автоперевод, логотип, эмодзи-статус и фоны; откуда берутся бусты — ссылка, giveaway (4 буста), подарок Premium (3 буста), аренда.",
      metaTitle: "Уровни буста Telegram — что даёт каждый уровень",
      metaDescription: "Уровни буста Telegram: сколько историй и реакций даёт каждый уровень, где открываются автоперевод, логотип, статус и фоны; откуда берутся бусты.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Два пути к уровню — за сумы",
      ctaBody: "Premium подписчикам и админам (3, 6, 12 месяцев) или аренда бустов на 1–30 дней в Boost Market. По username, без крипты и иностранной карты.",
      faq: ruFaq,
    },
    en: {
      title: "Telegram boost levels: what each level 1–10 unlocks — channel and group table (2026)",
      excerpt:
        "How many stories a day and custom reactions each level gives, at which level auto-translation, logos, emoji status and wallpapers unlock; where boosts come from — the link, a giveaway (4 boosts), a Premium gift (3 boosts), rental.",
      metaTitle: "Telegram boost levels — what each level unlocks",
      metaDescription: "Telegram boost levels 1–10: stories and reactions per level, where auto-translation, logos, emoji status and wallpapers unlock, and where boosts come from.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Two routes to a level — in som",
      ctaBody: "Premium for subscribers and admins (3, 6, 12 months) or boost rental for 1–30 days in the Boost Market. By username, no crypto, no foreign card.",
      faq: enFaq,
    },
  },
};
