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
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-star-reaksiyalari";

/**
 * Telegram kanallarida Star reaksiyalari — muallif (yoqish, daromad) va o'quvchi
 * (yuborish, maxfiylik, so'mdagi narx) nigohida.
 *
 * NEGA ALOHIDA SAHIFA (2026-10-25): «star reaksiya», «pullik reaksiya qanday
 * yoqiladi», «yulduzli reaksiya» — saytda alohida yo'q edi; 21 (monetizatsiya)
 * va 06 (ishlatish usullari) bir kartochkada eslatadi — ular endi bu maqolaga
 * havola beradi. Takrorlanmaydi: daromadni yechish qoidalari 191-maqolada,
 * refund — 192, Gram — 190.
 *
 * FAKTLAR TEKSHIRILGAN (2026-10-25):
 * - telegram.org/blog/superchannels-star-reactions-subscriptions (2024-08-14):
 *   «Channel Settings > Reactions > Enable Paid Reactions»; reyting (top senders)
 *   va undan chiqish; «Channel owners receive 100% of the stars»; Toncoin
 *   mukofoti yoki Ads — «a further 30% discount»; «next to zero commission».
 * - core.telegram.org/api/reactions: faqat kanal postlari (sendPaidReaction →
 *   kanal balansi); maxfiylik: default / anonymous / peer (kanal nomidan);
 *   yuborilgandan keyin ham o'zgartiriladi (togglePaidReactionPrivacy);
 *   top_reactors reytingi; qaytarish/undo hujjatlanmagan.
 * - core.telegram.org/api/config: stars_paid_reaction_amount_max = 10000.
 * - Kreatorlar shartlari: reaksiya = «donation» (2.3); 21 kun; min 1000;
 *   Fragment; Ads krediti 0,02 USD/Stars; yechish 1000 Stars ≈ 13 USD (config).
 * - Stars shartlari §3: shaxsiy balans Stars sotilmaydi/yechilmaydi, sotuv yakuniy.
 * «Kanal egasi anonim yuboruvchini statistikada ko'radi» — faqat uchinchi tomon
 * manbasi, ehtiyotkor yozilgan. «Uzoq bosib miqdor tanlash» — ilova odati,
 * blogda yo'q; umumiy tarzda yozilgan.
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/ /g, " ");
const MAX_PER_REACTION = 10_000; // stars_paid_reaction_amount_max
const ADS_DISCOUNT = "30%";
const HOLD_DAYS = 21;
const WITHDRAW_MIN = 1_000;

function CostTable({ locale }: { locale: Locale }) {
  const h = {
    uz: ["Reaksiya", "Karta · balans", "Click · Payme · Uzum · Paynet"],
    ru: ["Реакция", "Карта · баланс", "Click · Payme · Uzum · Paynet"],
    en: ["Reaction", "Card · balance", "Click · Payme · Uzum · Paynet"],
  }[locale];
  const unit = { uz: "so‘m", ru: "сум", en: "som" }[locale];
  return (
    <CompareTable
      headers={h}
      rows={[1, 10, 50, 100, 500].map((n) => [
        <strong key="n">{`${fmt(n, locale)} ⭐`}</strong>,
        `${fmt(n * STARS_PER_UNIT_UZS, locale)} ${unit}`,
        `${fmt(n * STARS_PER_UNIT_GATEWAY_UZS, locale)} ${unit}`,
      ])}
    />
  );
}

const SRC = {
  blog: "https://telegram.org/blog/superchannels-star-reactions-subscriptions",
  api: "https://core.telegram.org/api/reactions",
  config: "https://core.telegram.org/api/config",
  tosCreators: "https://telegram.org/tos/content-creator-rewards",
  tosStars: "https://telegram.org/tos/stars",
};

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Star reaksiyasi — kanal postiga <b>Stars yuborib</b> muallifni qo‘llab-quvvatlash: oddiy reaksiya «yoqdi»
      desa, bu «yoqdi va buning uchun to‘lashga tayyorman» degani. Kanal egasi uni Kanal sozlamalari → Reaksiyalar →
      «Enable Paid Reactions» orqali yoqadi va yuborilgan Stars’ning <b>100%</b> ini kanal balansiga oladi. O‘quvchi
      yulduzcha reaksiyani bosib miqdorni tanlaydi, Stars shaxsiy balansidan yechiladi; post ostida eng faol
      yuboruvchilar reytingi ko‘rinadi, undan chiqish mumkin. Reaksiya uchun Stars StarsPaymee’da so‘mda olinadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Star reaksiyasi nima" },
          { href: "#yoqish", label: "Muallif uchun: qanday yoqiladi" },
          { href: "#daromad", label: "Pul qayerga tushadi va nima qilsa bo‘ladi" },
          { href: "#maslahat", label: "Reaksiyalarni ko‘paytirish — 4 maslahat" },
          { href: "#yuborish", label: "O‘quvchi uchun: qanday yuboriladi" },
          { href: "#maxfiylik", label: "Maxfiylik: reyting va anonim yuborish" },
          { href: "#narx", label: "Qancha sarflash — so‘mda" },
          { href: "#stars", label: "Reaksiya uchun Stars qayerdan olinadi" },
        ]}
      />

      <h2 id="nima">Star reaksiyasi nima</h2>
      <p>
        2024-yil 14-avgustda — Telegram’ning 11 yilligida — kanallarga <b>Star Reactions</b> qo‘shildi: o‘quvchi
        postga oddiy emoji o‘rniga yulduzcha reaksiya bosadi va shu bilan muallifga Stars yuboradi. Bu kanal
        mualliflari uchun eng sodda daromad manbalaridan biri: alohida bot, to‘lov havolasi yoki obuna shart emas —
        post ostidagi tugma yetarli.
      </p>
      <KeyFacts label="Asosiy faktlar">
        <li>
          <b>Faqat kanal postlarida:</b> API’da pullik reaksiya kanal postlariga yuboriladi va Stars kanal balansiga
          o‘tadi; shaxsiy chat va guruhlarda bu reaksiya yo‘q.
        </li>
        <li>
          <b>Egasiga 100%:</b> Telegram e’loniga ko‘ra kanal egasi reaksiyalardagi Stars’ning hammasini oladi.
        </li>
        <li>
          <b>Miqdor:</b> 1 ta yulduzdan boshlab, bir postga {fmt(MAX_PER_REACTION, "uz")} Stars gacha (Telegram
          konfiguratsiyasi).
        </li>
        <li>
          <b>Reyting:</b> har postda eng ko‘p yuborganlar ro‘yxati ko‘rinadi; yuboruvchi undan chiqishi mumkin.
        </li>
        <li>
          <b>Qaytarilmaydi:</b> yuborilgan reaksiya — xayriya; API’da bekor qilish yo‘q, Stars shartlari bo‘yicha
          sotuv yakuniy.
        </li>
      </KeyFacts>

      <h2 id="yoqish">Muallif uchun: qanday yoqiladi</h2>
      <Steps>
        <Step title="1. Kanal sozlamalari → Reaksiyalar">
          Kanal profilida «Tahrirlash» → «Reaksiyalar» (Reactions) bo‘limiga kiring.
        </Step>
        <Step title="2. «Enable Paid Reactions» ni yoqing">
          Pullik (Star) reaksiyalarni yoqing — Telegram e’lonidagi yo‘l: Channel Settings → Reactions → Enable Paid
          Reactions. Odatiy emoji reaksiyalar o‘z joyida qoladi.
        </Step>
        <Step title="3. Postlarni tekshiring">
          Endi har post ostida yulduzcha reaksiya ko‘rinadi. Tushgan Stars va reyting kanal profili → Statistika →
          Monetizatsiya bo‘limida.
        </Step>
      </Steps>
      <Notice label="Eslatma">
        Menyu nomlari Telegram tiliga qarab farq qiladi; inglizcha interfeysdagi yo‘l rasmiy e’londan olingan. Star
        reaksiyasi uchun obunachilar soni bo‘yicha chegara yo‘q — kanal yangi bo‘lsa ham ishlaydi.
      </Notice>

      <h2 id="daromad">Pul qayerga tushadi va nima qilsa bo‘ladi</h2>
      <p>
        Reaksiyalardagi Stars <b>kanal balansida</b> yig‘iladi (shaxsiy balansga emas). Telegram kreatorlar
        shartlarida bu «obunachi xayriyasi» (donation) deb yuritiladi. Ikki yo‘l bor:
      </p>
      <InfoGrid>
        <InfoCard emoji="📣" title="Telegram Ads">
          Stars’ni shu kanalni reklama qilishga sarflaysiz. E’londa Telegram bunday reklamaga qo‘shimcha{" "}
          {ADS_DISCOUNT} chegirma berishini aytgan; shartlarda 1 Stars = 0,02 USD reklama krediti.
        </InfoCard>
        <InfoCard emoji="💎" title="Fragment → Gram">
          Stars Fragment orqali Gram’ga (sobiq Toncoin) yechiladi — Telegram «deyarli nol komissiya» deydi. Gram
          nima — <Link href="/blog/toncoin-endi-gram">Toncoin endi Gram</Link>.
        </InfoCard>
        <InfoCard emoji="⏳" title={`${HOLD_DAYS} kun va ${fmt(WITHDRAW_MIN, "uz")} Stars`}>
          Stars mukofoti {HOLD_DAYS} kundan keyin yechishga tayyor bo‘ladi, balansda kamida{" "}
          {fmt(WITHDRAW_MIN, "uz")} Stars bo‘lishi kerak; yechishda 1000 Stars ≈ 13 USD (Telegram konfiguratsiyasi,
          o‘zgarishi mumkin).
        </InfoCard>
        <InfoCard emoji="🔐" title="Kirishni yo‘qotmang">
          Akkaunt yoki kanalga kirish yo‘qolsa balans yonadi — ikki bosqichli tasdiqlash:{" "}
          <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA qo‘llanmasi</Link>.
        </InfoCard>
      </InfoGrid>
      <p>
        Yechish qoidalari to‘liq —{" "}
        <Link href="/blog/telegram-pullik-kanal-stars-obuna#daromad">pullik kanal maqolasining «Daromad» bo‘limida</Link>;
        reaksiyani boshqa daromad usullari bilan birga ishlatish —{" "}
        <Link href="/blog/telegram-kanal-stars-monetizatsiya">kanalni Stars bilan monetizatsiya qilish</Link>.
      </p>

      <h2 id="maslahat">Reaksiyalarni ko‘paytirish — 4 maslahat</h2>
      <KeyFacts label="Amaliy">
        <li>
          <b>Eng qimmatli postlar ostida bir marta</b>, odobli eslatib qo‘ying — har postda so‘rash auditoriyani
          charchatadi.
        </li>
        <li>
          <b>Reytingdagi faollarga rahmat ayting</b> — ochiq minnatdorchilik boshqalarni ham ilhomlantiradi.
        </li>
        <li>
          <b>Obunachilarga Stars qayerdan olishni ayting:</b> ko‘pchilikda balans yo‘q; so‘mda olish yo‘lini bir
          marta tushuntiring.
        </li>
        <li>
          <b>Muntazam qo‘llab-quvvatlash kerak bo‘lsa — obuna:</b> reaksiya bir martalik «rahmat»; har oy daromad
          uchun <Link href="/blog/telegram-pullik-kanal-stars-obuna">Stars obunali pullik kanal</Link>.
        </li>
      </KeyFacts>

      <h2 id="yuborish">O‘quvchi uchun: qanday yuboriladi</h2>
      <InfoGrid>
        <InfoCard emoji="⭐" title="Yulduzchani bosing">
          Star reaksiyasi yoqilgan postda yulduzcha belgisi bo‘ladi. Bosganingizda Telegram miqdorni tanlash oynasini
          ko‘rsatadi — 1 dan {fmt(MAX_PER_REACTION, "uz")} gacha.
        </InfoCard>
        <InfoCard emoji="💫" title="Balansdan yechiladi">
          Stars shaxsiy balansingizdan ketadi. Yetmasa, Telegram sotib olishni taklif qiladi — yoki oldindan so‘mda
          to‘ldiring (quyida).
        </InfoCard>
        <InfoCard emoji="🏆" title="Reyting">
          Post ostida eng ko‘p yuborganlar ko‘rinadi. Ismingiz chiqishini istamasangiz, yuborish oynasida ko‘rinishni
          o‘chiring.
        </InfoCard>
        <InfoCard emoji="📣" title="Kanal nomidan">
          O‘zingizga tegishli kanal nomidan ham yuborish mumkin — reytingda sizning ismingiz o‘rniga kanal ko‘rinadi.
        </InfoCard>
      </InfoGrid>

      <h2 id="maxfiylik">Maxfiylik: reyting va anonim yuborish</h2>
      <Notice label="Nimani bilish kerak">
        Telegram reytingdan chiqish imkonini beradi — muallif qo‘llab-quvvatlashni baribir oladi, boshqa o‘quvchilar
        ismingizni ko‘rmaydi. API’ga ko‘ra bu tanlov yuborilgandan keyin ham o‘zgartiriladi, odatiy holatni esa
        sozlamalarda saqlab qo‘yish mumkin. Anonimlik ommaviy reyting uchun; kanal egasining o‘z statistikasida
        yuboruvchi ko‘rinishi mumkinligi haqida rasmiy hujjat yo‘q, uchinchi tomon manbalari shunday deydi —
        to‘liq anonimlik deb hisoblamang.
      </Notice>

      <h2 id="narx">Qancha sarflash — so‘mda</h2>
      <p>
        Stars’ni so‘mda hisoblash qulay: StarsPaymee’da donasi {STARS_PER_UNIT_UZS} so‘m (UzCard/HUMO o‘tkazma va
        balans) yoki {STARS_PER_UNIT_GATEWAY_UZS} so‘m (Click, Payme, Uzum, Paynet). Reaksiya qanchaga tushishi:
      </p>
      <CostTable locale="uz" />
      <Notice label="Muhim">
        Shaxsiy balansdagi Stars sotilmaydi va pulga yechilmaydi — faqat Telegram ichida sarflanadi, yuborilgan
        reaksiya qaytarilmaydi. Shuning uchun reaksiyalarga qancha sarflashni oldindan belgilab oling. Qaytarish
        qoidalari — <Link href="/blog/telegram-stars-qaytarib-olish">Stars refund qoidalari</Link>.
      </Notice>

      <h2 id="stars">Reaksiya uchun Stars qayerdan olinadi</h2>
      <p>
        Balans tugasa, Stars’ni Telegram ichida (App Store yoki Google Play orqali) yoki O‘zbekistonda <b>so‘mda</b>{" "}
        — StarsPaymee’da olasiz: 50 dan 10 000 gacha, faqat @username, UzCard/HUMO o‘tkazma, Click, Payme, Uzum yoki
        Paynet, balansga 5 soniyada. Kripto hamyon va xorijiy karta kerak emas.
      </p>
      <InlineCta text="Reaksiya uchun Stars kerakmi? So‘mda, username bilan — 5 soniyada balansda." product={{ kind: "stars", amount: 100 }} />
      <p>
        Kanal egasi uchun eslatma: StarsPaymee kanal balansidagi Stars’ni sotib olmaydi va so‘mga aylantirmaydi —
        yechish faqat Telegram’ning rasmiy yo‘li (Fragment) orqali. Stars nimaga yana sarflanishi —{" "}
        <Link href="/blog/telegram-stars-nima-uchun-ishlatiladi-usullar">Stars’ni ishlatish usullari</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: SRC.blog, label: "Telegram Blog — Super Channels, Star Reactions and Subscriptions", note: "2024-08-14: yoqish yo‘li, reyting, 100%, Ads chegirmasi" },
          { href: SRC.api, label: "core.telegram.org/api/reactions", note: "faqat kanal postlari, maxfiylik variantlari, reyting" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "stars_paid_reaction_amount_max = 10 000" },
          { href: SRC.tosCreators, label: "Telegram — Terms of Service for Content Creators", note: "donation, 21 kun, Fragment, reklama krediti" },
          { href: SRC.tosStars, label: "Telegram — Terms of Service for Telegram Stars", note: "shaxsiy balans Stars sotilmaydi, sotuv yakuniy" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Star-реакция — способ поддержать автора, <b>отправив Stars</b> на пост канала: обычная реакция значит
      «понравилось», а эта — «понравилось, и я готов за это заплатить». Владелец включает её через Настройки
      канала → Реакции → «Enable Paid Reactions» и получает <b>100%</b> отправленных Stars на баланс канала.
      Читатель нажимает звёздную реакцию и выбирает количество, Stars списываются с личного баланса; под постом
      виден рейтинг самых активных отправителей, из него можно выйти. Stars для реакций покупают в StarsPaymee за
      сумы.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое Star-реакция" },
          { href: "#yoqish", label: "Для автора: как включить" },
          { href: "#daromad", label: "Куда приходят деньги и что с ними делать" },
          { href: "#maslahat", label: "Как получать больше реакций — 4 совета" },
          { href: "#yuborish", label: "Для читателя: как отправить" },
          { href: "#maxfiylik", label: "Приватность: рейтинг и анонимная отправка" },
          { href: "#narx", label: "Сколько это стоит в сумах" },
          { href: "#stars", label: "Где взять Stars для реакций" },
        ]}
      />

      <h2 id="nima">Что такое Star-реакция</h2>
      <p>
        14 августа 2024 года — в 11-й день рождения Telegram — в каналах появились <b>Star Reactions</b>: вместо
        обычного эмодзи читатель ставит на пост звёздную реакцию и тем самым отправляет автору Stars. Это один из
        самых простых источников дохода для авторов каналов: не нужен отдельный бот, ссылка на оплату или подписка —
        достаточно кнопки под постом.
      </p>
      <KeyFacts label="Главные факты">
        <li>
          <b>Только посты каналов:</b> по API платная реакция отправляется на пост канала, и Stars идут на баланс
          канала; в личных чатах и группах этой реакции нет.
        </li>
        <li>
          <b>Владельцу 100%:</b> по объявлению Telegram владелец канала получает все Stars из реакций.
        </li>
        <li>
          <b>Количество:</b> от 1 звезды до {fmt(MAX_PER_REACTION, "ru")} Stars на один пост (конфигурация Telegram).
        </li>
        <li>
          <b>Рейтинг:</b> под каждым постом виден список тех, кто отправил больше всех; отправитель может из него
          выйти.
        </li>
        <li>
          <b>Не возвращается:</b> отправленная реакция — пожертвование; в API нет отмены, по условиям Stars продажа
          окончательна.
        </li>
      </KeyFacts>

      <h2 id="yoqish">Для автора: как включить</h2>
      <Steps>
        <Step title="1. Настройки канала → Реакции">
          В профиле канала «Изменить» → раздел «Реакции» (Reactions).
        </Step>
        <Step title="2. Включите «Enable Paid Reactions»">
          Включите платные (Star) реакции — путь из объявления Telegram: Channel Settings → Reactions → Enable Paid
          Reactions. Обычные эмодзи-реакции остаются на месте.
        </Step>
        <Step title="3. Проверьте посты">
          Теперь под каждым постом есть звёздная реакция. Поступившие Stars и рейтинг — в профиле канала →
          Статистика → Монетизация.
        </Step>
      </Steps>
      <Notice label="Примечание">
        Названия пунктов зависят от языка Telegram; путь для английского интерфейса взят из официального объявления.
        Порога по числу подписчиков для Star-реакций нет — работает и в новом канале.
      </Notice>

      <h2 id="daromad">Куда приходят деньги и что с ними делать</h2>
      <p>
        Stars из реакций накапливаются на <b>балансе канала</b> (не на личном). В условиях Telegram для авторов это
        называется «пожертвование подписчика» (donation). Путей два:
      </p>
      <InfoGrid>
        <InfoCard emoji="📣" title="Telegram Ads">
          Тратите Stars на продвижение этого канала. В объявлении Telegram обещал на такую рекламу дополнительную
          скидку {ADS_DISCOUNT}; по условиям 1 Star = 0,02 USD рекламного кредита.
        </InfoCard>
        <InfoCard emoji="💎" title="Fragment → Gram">
          Stars выводятся через Fragment в Gram (бывший Toncoin) — Telegram говорит о «почти нулевой комиссии». Что
          такое Gram — <Link href="/blog/toncoin-endi-gram">Toncoin теперь Gram</Link>.
        </InfoCard>
        <InfoCard emoji="⏳" title={`${HOLD_DAYS} день и ${fmt(WITHDRAW_MIN, "ru")} Stars`}>
          Награда в Stars доступна для вывода через {HOLD_DAYS} день, на балансе должно быть не меньше{" "}
          {fmt(WITHDRAW_MIN, "ru")} Stars; при выводе 1000 Stars ≈ 13 USD (конфигурация Telegram, может меняться).
        </InfoCard>
        <InfoCard emoji="🔐" title="Не потеряйте доступ">
          При потере доступа к аккаунту или каналу баланс сгорает — двухэтапная аутентификация:{" "}
          <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">руководство по 2FA</Link>.
        </InfoCard>
      </InfoGrid>
      <p>
        Правила вывода полностью —{" "}
        <Link href="/blog/telegram-pullik-kanal-stars-obuna#daromad">в разделе «Доход» статьи о платном канале</Link>;
        реакции вместе с другими способами дохода —{" "}
        <Link href="/blog/telegram-kanal-stars-monetizatsiya">монетизация канала через Stars</Link>.
      </p>

      <h2 id="maslahat">Как получать больше реакций — 4 совета</h2>
      <KeyFacts label="Практика">
        <li>
          <b>Под самыми ценными постами — один раз</b>, вежливо напомните; просьба в каждом посте утомляет аудиторию.
        </li>
        <li>
          <b>Благодарите активных из рейтинга</b> — открытая благодарность вдохновляет остальных.
        </li>
        <li>
          <b>Скажите подписчикам, где взять Stars:</b> у многих баланса нет; один раз объясните путь покупки за сумы.
        </li>
        <li>
          <b>Нужна регулярная поддержка — подписка:</b> реакция — разовое «спасибо»; для дохода каждый месяц —{" "}
          <Link href="/blog/telegram-pullik-kanal-stars-obuna">платный канал с подпиской за Stars</Link>.
        </li>
      </KeyFacts>

      <h2 id="yuborish">Для читателя: как отправить</h2>
      <InfoGrid>
        <InfoCard emoji="⭐" title="Нажмите на звёздочку">
          Под постом с включённой Star-реакцией есть значок звезды. При нажатии Telegram показывает окно выбора
          количества — от 1 до {fmt(MAX_PER_REACTION, "ru")}.
        </InfoCard>
        <InfoCard emoji="💫" title="Списывается с баланса">
          Stars уходят с вашего личного баланса. Если не хватает, Telegram предложит купить — или пополните заранее
          за сумы (ниже).
        </InfoCard>
        <InfoCard emoji="🏆" title="Рейтинг">
          Под постом видны те, кто отправил больше всех. Не хотите показывать имя — отключите видимость в окне
          отправки.
        </InfoCard>
        <InfoCard emoji="📣" title="От имени канала">
          Можно отправить и от имени своего канала — в рейтинге вместо вашего имени будет канал.
        </InfoCard>
      </InfoGrid>

      <h2 id="maxfiylik">Приватность: рейтинг и анонимная отправка</h2>
      <Notice label="Что нужно знать">
        Telegram позволяет выйти из рейтинга — автор всё равно получит поддержку, а другие читатели не увидят вашего
        имени. По API этот выбор можно изменить и после отправки, а настройку по умолчанию сохранить. Анонимность
        относится к публичному рейтингу; официального документа о том, видит ли владелец канала отправителя в своей
        статистике, нет — сторонние источники говорят, что видит, — не считайте отправку полностью анонимной.
      </Notice>

      <h2 id="narx">Сколько это стоит в сумах</h2>
      <p>
        Удобно считать Stars в сумах: в StarsPaymee звезда стоит {STARS_PER_UNIT_UZS} сум (перевод UzCard/HUMO и
        баланс) или {STARS_PER_UNIT_GATEWAY_UZS} сум (Click, Payme, Uzum, Paynet). Во сколько обходится реакция:
      </p>
      <CostTable locale="ru" />
      <Notice label="Важно">
        Stars на личном балансе не продаются и не выводятся в деньги — только тратятся внутри Telegram, отправленная
        реакция не возвращается. Поэтому заранее решите, сколько тратить на реакции. Правила возврата —{" "}
        <Link href="/blog/telegram-stars-qaytarib-olish">правила возврата Stars</Link>.
      </Notice>

      <h2 id="stars">Где взять Stars для реакций</h2>
      <p>
        Когда баланс кончился, Stars покупают внутри Telegram (через App Store или Google Play) или в Узбекистане{" "}
        <b>за сумы</b> — в StarsPaymee: от 50 до 10 000, только @username, перевод UzCard/HUMO, Click, Payme, Uzum или
        Paynet, на балансе за 5 секунд. Криптокошелёк и иностранная карта не нужны.
      </p>
      <InlineCta text="Нужны Stars для реакций? В сумах, по username — на балансе за 5 секунд." product={{ kind: "stars", amount: 100 }} />
      <p>
        Для владельцев каналов: StarsPaymee не выкупает Stars с баланса канала и не конвертирует их в сумы — вывод
        только официальным путём Telegram (Fragment). На что ещё тратятся Stars —{" "}
        <Link href="/blog/telegram-stars-nima-uchun-ishlatiladi-usullar">способы использовать Stars</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: SRC.blog, label: "Telegram Blog — Super Channels, Star Reactions and Subscriptions", note: "2024-08-14: путь включения, рейтинг, 100%, скидка на Ads" },
          { href: SRC.api, label: "core.telegram.org/api/reactions", note: "только посты каналов, варианты приватности, рейтинг" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "stars_paid_reaction_amount_max = 10 000" },
          { href: SRC.tosCreators, label: "Telegram — Terms of Service for Content Creators", note: "donation, 21 день, Fragment, рекламный кредит" },
          { href: SRC.tosStars, label: "Telegram — Terms of Service for Telegram Stars", note: "Stars личного баланса не продаются, продажа окончательна" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      A Star reaction is a way to support an author by <b>sending Stars</b> to a channel post: a regular reaction says
      “I like it”, this one says “I like it and I am willing to pay for it”. The owner turns it on under Channel
      Settings → Reactions → “Enable Paid Reactions” and receives <b>100%</b> of the Stars sent on the channel
      balance. A reader taps the star reaction and picks the amount; Stars are debited from their personal balance.
      Each post shows a leaderboard of top senders, which you can opt out of. Stars for reactions are bought at
      StarsPaymee in som.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nima", label: "What a Star reaction is" },
          { href: "#yoqish", label: "For authors: how to enable it" },
          { href: "#daromad", label: "Where the money goes and what to do with it" },
          { href: "#maslahat", label: "Getting more reactions — 4 tips" },
          { href: "#yuborish", label: "For readers: how to send one" },
          { href: "#maxfiylik", label: "Privacy: the leaderboard and anonymous sending" },
          { href: "#narx", label: "What it costs in som" },
          { href: "#stars", label: "Where to get Stars for reactions" },
        ]}
      />

      <h2 id="nima">What a Star reaction is</h2>
      <p>
        On 14 August 2024 — Telegram’s 11th birthday — channels got <b>Star Reactions</b>: instead of a regular emoji,
        a reader puts a star reaction on a post and thereby sends the author Stars. It is one of the simplest income
        sources for channel authors: no separate bot, payment link or subscription — the button under the post is
        enough.
      </p>
      <KeyFacts label="Key facts">
        <li>
          <b>Channel posts only:</b> in the API a paid reaction is sent to a channel post and the Stars go to the
          channel balance; private chats and groups do not have this reaction.
        </li>
        <li>
          <b>100% to the owner:</b> according to Telegram’s announcement the channel owner receives all the Stars from
          reactions.
        </li>
        <li>
          <b>Amount:</b> from 1 star up to {fmt(MAX_PER_REACTION, "en")} Stars per post (Telegram configuration).
        </li>
        <li>
          <b>Leaderboard:</b> every post shows the top senders; a sender can opt out.
        </li>
        <li>
          <b>Non-refundable:</b> a sent reaction is a donation; the API has no undo, and under the Stars terms sales
          are final.
        </li>
      </KeyFacts>

      <h2 id="yoqish">For authors: how to enable it</h2>
      <Steps>
        <Step title="1. Channel Settings → Reactions">
          In the channel profile open “Edit” → the “Reactions” section.
        </Step>
        <Step title="2. Turn on “Enable Paid Reactions”">
          Enable paid (Star) reactions — the path from Telegram’s announcement: Channel Settings → Reactions → Enable
          Paid Reactions. Regular emoji reactions stay in place.
        </Step>
        <Step title="3. Check your posts">
          Every post now shows a star reaction. Incoming Stars and the leaderboard are under the channel profile →
          Statistics → Monetization.
        </Step>
      </Steps>
      <Notice label="Note">
        Menu names depend on your Telegram language; the English path comes from the official announcement. There is
        no subscriber threshold for Star reactions — they work in a brand-new channel too.
      </Notice>

      <h2 id="daromad">Where the money goes and what to do with it</h2>
      <p>
        Stars from reactions accumulate on the <b>channel balance</b> (not your personal one). Telegram’s creator terms
        call this a “subscriber donation”. There are two routes:
      </p>
      <InfoGrid>
        <InfoCard emoji="📣" title="Telegram Ads">
          Spend the Stars on promoting this channel. The announcement promised an extra {ADS_DISCOUNT} discount on such
          ads; under the terms 1 Star = $0.02 of advertising credit.
        </InfoCard>
        <InfoCard emoji="💎" title="Fragment → Gram">
          Stars are withdrawn through Fragment in Gram (formerly Toncoin) — Telegram speaks of “next to zero
          commission”. What Gram is — <Link href="/blog/toncoin-endi-gram">Toncoin is now Gram</Link>.
        </InfoCard>
        <InfoCard emoji="⏳" title={`${HOLD_DAYS} days and ${fmt(WITHDRAW_MIN, "en")} Stars`}>
          A Stars reward becomes withdrawable after {HOLD_DAYS} days, and the balance must hold at least{" "}
          {fmt(WITHDRAW_MIN, "en")} Stars; on withdrawal 1,000 Stars ≈ $13 (Telegram configuration, may change).
        </InfoCard>
        <InfoCard emoji="🔐" title="Do not lose access">
          If you lose access to the account or the channel, the balance is forfeited — two-step verification:{" "}
          <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">the 2FA guide</Link>.
        </InfoCard>
      </InfoGrid>
      <p>
        The full withdrawal rules —{" "}
        <Link href="/blog/telegram-pullik-kanal-stars-obuna#daromad">the “Income” section of the paid-channel article</Link>;
        reactions alongside other income methods —{" "}
        <Link href="/blog/telegram-kanal-stars-monetizatsiya">monetising a channel with Stars</Link>.
      </p>

      <h2 id="maslahat">Getting more reactions — 4 tips</h2>
      <KeyFacts label="In practice">
        <li>
          <b>Under your most valuable posts, once</b> — a polite reminder; asking in every post wears the audience out.
        </li>
        <li>
          <b>Thank the active supporters on the leaderboard</b> — public gratitude inspires the others.
        </li>
        <li>
          <b>Tell subscribers where to get Stars:</b> many have no balance; explain the som route once.
        </li>
        <li>
          <b>For regular support — a subscription:</b> a reaction is a one-off “thank you”; for monthly income —{" "}
          <Link href="/blog/telegram-pullik-kanal-stars-obuna">a paid channel with a Stars subscription</Link>.
        </li>
      </KeyFacts>

      <h2 id="yuborish">For readers: how to send one</h2>
      <InfoGrid>
        <InfoCard emoji="⭐" title="Tap the star">
          A post with Star reactions enabled shows a star icon. When you tap it, Telegram shows an amount picker —
          from 1 to {fmt(MAX_PER_REACTION, "en")}.
        </InfoCard>
        <InfoCard emoji="💫" title="Debited from your balance">
          Stars leave your personal balance. If there are not enough, Telegram offers to buy some — or top up in som
          beforehand (below).
        </InfoCard>
        <InfoCard emoji="🏆" title="Leaderboard">
          The post shows the top senders. If you do not want your name shown, turn visibility off in the sending
          dialog.
        </InfoCard>
        <InfoCard emoji="📣" title="As a channel">
          You can also send on behalf of a channel you own — the leaderboard shows the channel instead of your name.
        </InfoCard>
      </InfoGrid>

      <h2 id="maxfiylik">Privacy: the leaderboard and anonymous sending</h2>
      <Notice label="What to know">
        Telegram lets you opt out of the leaderboard — the author still receives the support, and other readers do not
        see your name. According to the API this choice can be changed after sending, and a default can be saved in
        your settings. Anonymity applies to the public leaderboard; there is no official document on whether the
        channel owner sees the sender in their own statistics — third-party sources say they do — so do not treat it
        as fully anonymous.
      </Notice>

      <h2 id="narx">What it costs in som</h2>
      <p>
        It is handy to count Stars in som: at StarsPaymee a star costs {STARS_PER_UNIT_UZS} som (UzCard/HUMO transfer
        and balance) or {STARS_PER_UNIT_GATEWAY_UZS} som (Click, Payme, Uzum, Paynet). What a reaction costs:
      </p>
      <CostTable locale="en" />
      <Notice label="Important">
        Stars on a personal balance cannot be sold or cashed out — they are only spent inside Telegram, and a sent
        reaction is not refunded. So decide in advance how much to spend on reactions. The refund rules —{" "}
        <Link href="/blog/telegram-stars-qaytarib-olish">Stars refund rules</Link>.
      </Notice>

      <h2 id="stars">Where to get Stars for reactions</h2>
      <p>
        When the balance runs out, buy Stars inside Telegram (through the App Store or Google Play) or, in Uzbekistan,{" "}
        <b>in som</b> at StarsPaymee: 50 to 10,000, just an @username, UzCard/HUMO transfer, Click, Payme, Uzum or
        Paynet, on the balance in 5 seconds. No crypto wallet or foreign card needed.
      </p>
      <InlineCta text="Need Stars for reactions? In som, by username — on your balance in 5 seconds." product={{ kind: "stars", amount: 100 }} />
      <p>
        For channel owners: StarsPaymee does not buy Stars from a channel balance or convert them into som — withdrawal
        goes only through Telegram’s official route (Fragment). What else Stars are spent on —{" "}
        <Link href="/blog/telegram-stars-nima-uchun-ishlatiladi-usullar">ways to use Stars</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: SRC.blog, label: "Telegram Blog — Super Channels, Star Reactions and Subscriptions", note: "2024-08-14: enable path, leaderboard, 100%, Ads discount" },
          { href: SRC.api, label: "core.telegram.org/api/reactions", note: "channel posts only, privacy options, leaderboard" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "stars_paid_reaction_amount_max = 10,000" },
          { href: SRC.tosCreators, label: "Telegram — Terms of Service for Content Creators", note: "donation, 21 days, Fragment, ad credit" },
          { href: SRC.tosStars, label: "Telegram — Terms of Service for Telegram Stars", note: "personal-balance Stars cannot be sold; sales are final" },
        ]}
      />
    </>
  );
}

const faqUz = [
  {
    question: "Star reaksiyasi yuborsam, ismim hammaga ko‘rinadimi?",
    answer:
      "Odatda post ostidagi eng faol yuboruvchilar reytingida ko‘rinadi, lekin yuborish oynasida ko‘rinishni o‘chirib, reytingdan chiqish mumkin — muallif qo‘llab-quvvatlashni baribir oladi. Bu ommaviy reyting uchun; kanal egasi o‘z statistikasida ko‘rishi mumkinligi haqida rasmiy hujjat yo‘q.",
  },
  {
    question: "Kanal egasi reaksiyalardagi Stars’ni qanday ishlatadi?",
    answer:
      "Stars kanal balansiga tushadi (Statistika → Monetizatsiya). Ikki yo‘l: shu kanalni Telegram Ads’da reklama qilish (1 Stars = 0,02 USD kredit, e’londa 30% qo‘shimcha chegirma) yoki Fragment orqali Gram’ga yechish — 21 kundan keyin, kamida 1000 Stars bo‘lsa.",
  },
  {
    question: "Reaksiya uchun Stars’ni qayerdan olaman?",
    answer: `Telegram ichida (App Store yoki Google Play) yoki so‘mda — StarsPaymee’da: donasi ${STARS_PER_UNIT_UZS} so‘m (karta o‘tkazmasi, balans) yoki ${STARS_PER_UNIT_GATEWAY_UZS} so‘m (Click, Payme, Uzum, Paynet), 50 dan 10 000 gacha, faqat @username.`,
  },
  {
    question: "Star reaksiyasi qanday yoqiladi?",
    answer: "Kanal sozlamalari → Reaksiyalar → «Enable Paid Reactions». Shundan keyin har post ostida yulduzcha reaksiya chiqadi; obunachilar soni bo‘yicha chegara yo‘q.",
  },
  {
    question: "Kanal egasi Stars’ning qancha qismini oladi?",
    answer: "Telegram e’loniga ko‘ra — 100%. Yechishda Telegram «deyarli nol komissiya» deydi; yechish qiymati konfiguratsiyada 1000 Stars ≈ 13 USD va o‘zgarishi mumkin.",
  },
  {
    question: "Bir reaksiyada nechta Stars yuborsa bo‘ladi?",
    answer: `1 tadan ${fmt(MAX_PER_REACTION, "uz")} tagacha — Telegram konfiguratsiyasidagi chegara. Miqdor yuborish oynasida tanlanadi.`,
  },
  {
    question: "Guruhda yoki shaxsiy chatda Star reaksiyasi bormi?",
    answer: "Yo‘q. API’ga ko‘ra pullik reaksiya faqat kanal postlariga yuboriladi va Stars kanal balansiga o‘tadi.",
  },
  {
    question: "Yuborgan reaksiyamni qaytarib olsam bo‘ladimi?",
    answer: "Yo‘q. Bu xayriya: API’da bekor qilish yo‘q, Stars shartlari bo‘yicha sotuv yakuniy. Miqdorni yuborishdan oldin tekshiring.",
  },
  {
    question: "Reaksiya va pullik obuna — qaysi biri yaxshiroq?",
    answer: "Reaksiya — bir martalik «rahmat», obuna — har oy barqaror daromad. Muallif ikkalasini birga yoqishi mumkin; obuna haqida «Stars obunali pullik kanal» maqolasida.",
  },
  {
    question: "StarsPaymee kanal balansidagi Stars’ni so‘mga aylantiradimi?",
    answer: "Yo‘q. StarsPaymee Stars sotadi, lekin kanal balansidagi Stars’ni sotib olmaydi — yechish faqat Telegram’ning rasmiy yo‘li, Fragment orqali Gram’ga.",
  },
];

const faqRu = [
  {
    question: "Если отправить Star-реакцию, моё имя увидят все?",
    answer:
      "По умолчанию оно видно в рейтинге самых активных отправителей под постом, но в окне отправки можно отключить видимость и выйти из рейтинга — автор всё равно получит поддержку. Это касается публичного рейтинга; официального документа о том, видит ли владелец канала отправителя в своей статистике, нет.",
  },
  {
    question: "Как владелец канала использует Stars из реакций?",
    answer:
      "Stars приходят на баланс канала (Статистика → Монетизация). Два пути: реклама этого канала в Telegram Ads (1 Star = 0,02 USD кредита, в объявлении — дополнительная скидка 30%) или вывод через Fragment в Gram — через 21 день, при остатке не меньше 1000 Stars.",
  },
  {
    question: "Где взять Stars для реакций?",
    answer: `Внутри Telegram (App Store или Google Play) или за сумы — в StarsPaymee: звезда ${STARS_PER_UNIT_UZS} сум (перевод на карту, баланс) или ${STARS_PER_UNIT_GATEWAY_UZS} сум (Click, Payme, Uzum, Paynet), от 50 до 10 000, только @username.`,
  },
  {
    question: "Как включить Star-реакции?",
    answer: "Настройки канала → Реакции → «Enable Paid Reactions». После этого под каждым постом появится звёздная реакция; порога по числу подписчиков нет.",
  },
  {
    question: "Какую часть Stars получает владелец канала?",
    answer: "По объявлению Telegram — 100%. При выводе Telegram говорит о «почти нулевой комиссии»; стоимость вывода в конфигурации — 1000 Stars ≈ 13 USD и может меняться.",
  },
  {
    question: "Сколько Stars можно отправить одной реакцией?",
    answer: `От 1 до ${fmt(MAX_PER_REACTION, "ru")} — предел в конфигурации Telegram. Количество выбирается в окне отправки.`,
  },
  {
    question: "Есть ли Star-реакции в группах или личных чатах?",
    answer: "Нет. По API платная реакция отправляется только на посты каналов, и Stars идут на баланс канала.",
  },
  {
    question: "Можно ли вернуть отправленную реакцию?",
    answer: "Нет. Это пожертвование: в API нет отмены, по условиям Stars продажа окончательна. Проверяйте количество до отправки.",
  },
  {
    question: "Реакция или платная подписка — что лучше?",
    answer: "Реакция — разовое «спасибо», подписка — стабильный доход каждый месяц. Автор может включить и то и другое; о подписке — в статье «Платный канал с подпиской за Stars».",
  },
  {
    question: "Конвертирует ли StarsPaymee Stars с баланса канала в сумы?",
    answer: "Нет. StarsPaymee продаёт Stars, но не выкупает Stars с баланса канала — вывод только официальным путём Telegram, через Fragment в Gram.",
  },
];

const faqEn = [
  {
    question: "If I send a Star reaction, will everyone see my name?",
    answer:
      "By default it appears on the post’s leaderboard of top senders, but you can turn visibility off in the sending dialog and opt out — the author still receives the support. That covers the public leaderboard; there is no official document on whether the channel owner sees the sender in their own statistics.",
  },
  {
    question: "How does a channel owner use the Stars from reactions?",
    answer:
      "The Stars land on the channel balance (Statistics → Monetization). Two routes: promoting that channel in Telegram Ads (1 Star = $0.02 of credit, with an extra 30% discount per the announcement) or withdrawing through Fragment in Gram — after 21 days, with at least 1,000 Stars.",
  },
  {
    question: "Where do I get Stars for reactions?",
    answer: `Inside Telegram (App Store or Google Play) or in som at StarsPaymee: a star costs ${STARS_PER_UNIT_UZS} som (card transfer, balance) or ${STARS_PER_UNIT_GATEWAY_UZS} som (Click, Payme, Uzum, Paynet), 50 to 10,000, with just an @username.`,
  },
  {
    question: "How do I enable Star reactions?",
    answer: "Channel Settings → Reactions → “Enable Paid Reactions”. After that every post shows a star reaction; there is no subscriber threshold.",
  },
  {
    question: "What share of the Stars does the channel owner get?",
    answer: "According to Telegram’s announcement — 100%. On withdrawal Telegram speaks of “next to zero commission”; the withdrawal value in the configuration is 1,000 Stars ≈ $13 and may change.",
  },
  {
    question: "How many Stars can one reaction send?",
    answer: `From 1 to ${fmt(MAX_PER_REACTION, "en")} — the limit in Telegram’s configuration. The amount is chosen in the sending dialog.`,
  },
  {
    question: "Are there Star reactions in groups or private chats?",
    answer: "No. According to the API a paid reaction is sent only to channel posts, and the Stars go to the channel balance.",
  },
  {
    question: "Can I take back a reaction I sent?",
    answer: "No. It is a donation: the API has no undo, and under the Stars terms sales are final. Check the amount before sending.",
  },
  {
    question: "A reaction or a paid subscription — which is better?",
    answer: "A reaction is a one-off “thank you”; a subscription is steady monthly income. An author can enable both; subscriptions are covered in “A paid channel with a Stars subscription”.",
  },
  {
    question: "Does StarsPaymee convert a channel’s Stars into som?",
    answer: "No. StarsPaymee sells Stars but does not buy Stars from a channel balance — withdrawal goes only through Telegram’s official route, Fragment, in Gram.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-10-25",
  dateModified: "2026-10-25",
  keywords: [
    "telegram star reaksiya",
    "star reactions qanday yoqiladi",
    "pullik reaksiya telegram",
    "yulduzli reaksiya kanal",
    "star reaction stars qayerga tushadi",
    "звёздные реакции telegram",
    "платные реакции канал как включить",
    "star reactions telegram",
    "telegram paid reactions channel",
  ],
  howToSteps: [
    { name: "Kanal sozlamalari → Reaksiyalar", text: "Kanal profilida Tahrirlash → Reaksiyalar (Reactions) bo‘limiga kiring." },
    { name: "Enable Paid Reactions ni yoqing", text: "Pullik (Star) reaksiyalarni yoqing — odatiy emoji reaksiyalar qoladi." },
    { name: "Postlarni tekshiring", text: "Har post ostida yulduzcha reaksiya chiqadi; tushgan Stars — Statistika → Monetizatsiya." },
  ],
  locales: {
    uz: {
      title: "Telegram kanallarida Star reaksiyalari: qanday yoqiladi va qanday ishlatiladi (2026)",
      excerpt:
        "Star reaksiyalari muallif va o‘quvchi nigohida: kanalda yoqish yo‘li, Stars qayerga tushadi va qanday yechiladi, reyting va anonim yuborish, reaksiya so‘mda qanchaga tushadi, Stars qayerdan olinadi.",
      metaTitle: "Telegram Star reaksiyalari — yoqish va ishlatish",
      metaDescription: "Telegram kanalida Star reaksiyasi: Enable Paid Reactions orqali yoqish, Stars egasiga 100% va kanal balansi, reyting va anonim yuborish, reaksiya so‘mda qancha.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Reaksiyalar uchun Stars — so‘mda, 5 soniyada",
      ctaBody: `StarsPaymee’da Stars donasi ${STARS_PER_UNIT_UZS} so‘mdan, 50 dan 10 000 gacha, @username bo‘yicha. Kripto hamyon va xorijiy karta kerak emas.`,
      faq: faqUz,
    },
    ru: {
      title: "Star-реакции в каналах Telegram: как включить и как пользоваться (2026)",
      excerpt:
        "Star-реакции глазами автора и читателя: как включить в канале, куда приходят Stars и как их вывести, рейтинг и анонимная отправка, сколько реакция стоит в сумах, где взять Stars.",
      metaTitle: "Star-реакции Telegram — как включить и пользоваться",
      metaDescription: "Star-реакции в канале Telegram: включение через Enable Paid Reactions, 100% Stars владельцу и баланс канала, рейтинг и анонимная отправка, цена реакции в сумах.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Stars для реакций — за сумы, за 5 секунд",
      ctaBody: `В StarsPaymee звезда от ${STARS_PER_UNIT_UZS} сум, от 50 до 10 000, по @username. Криптокошелёк и иностранная карта не нужны.`,
      faq: faqRu,
    },
    en: {
      title: "Star reactions in Telegram channels: how to enable and use them (2026)",
      excerpt:
        "Star reactions from the author’s and the reader’s side: how to enable them in a channel, where the Stars go and how to withdraw them, the leaderboard and anonymous sending, what a reaction costs in som, where to get Stars.",
      metaTitle: "Telegram Star reactions — how to enable and use them",
      metaDescription: "Telegram Star reactions: how to enable them in a channel, where the Stars go (100% to the owner), the leaderboard, anonymous sending and the cost in som.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Stars for reactions — in som, in 5 seconds",
      ctaBody: `At StarsPaymee a star costs from ${STARS_PER_UNIT_UZS} som, 50 to 10,000, by @username. No crypto wallet or foreign card needed.`,
      faq: faqEn,
    },
  },
};
