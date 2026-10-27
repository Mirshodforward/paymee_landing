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

const SLUG = "telegram-akkauntni-ogirlashdan-himoya-2fa";

/**
 * Telegram akkauntni o'g'irlashdan himoya — 2FA, passkey va 10 bandlik ro'yxat.
 *
 * QAYTA YOZILDI (2026-10-27): avvalgi versiya yupqa edi (uz/ru, en yo'q; passkey,
 * notanish odam ma'lumot sahifasi, Login with Telegram yo'q). «Akkaunt xavfsizligi:
 * 10 bandlik ro'yxat» drafti shu niyatda — yangi slug 56 bilan raqobatlashardi,
 * shuning uchun 56 o'rnida yozildi, slug va anchorlar (#2fa, #seans, #belgi,
 * #qaytarish) saqlandi — 10 ta post shu sahifaga havola beradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-10-27):
 * - telegram.org/faq: 2FA yo'li, «you will need both an SMS code and a password»,
 *   tiklash e-pochtasini ham kuchli parol va 2FA bilan himoyalash; seanslar
 *   «Settings > Devices (or Privacy & Security > Active Sessions)»; kirish kodlari
 *   «Telegram» xizmat chatiga keladi va «should never be shared with anyone»;
 *   botlarga parol/kod bermaslik; telefon o'g'irlansa qadamlar; o'chirish 18 oy.
 *   FAQ'da 2FA parolini tiklash uchun kutish muddati YO'Q — «7 kun» yozilmagan.
 * - telegram.org/blog/passkeys-and-gift-offers (2025-12-12): Settings > Privacy and
 *   Security > Passkeys; SMS o'rniga PIN/biometrika; kalitlar qurilmada, iCloud/
 *   Google bilan sinxron; faol raqam saqlansin.
 * - telegram.org/blog/star-messages-gateway-2-0-and-more (2025-03-07): Contact
 *   Confirmation — mamlakat (raqam bo'yicha), umumiy guruhlar, qachon qo'shilgan,
 *   username/rasm qachon o'zgargan, rasmiy/tasdiqlangan belgilari.
 * - telegram.org/blog/member-tags-disable-sharing-and-more (2026-03-01): Login with
 *   Telegram — sayt va ilovalarga forma va parolsiz kirish.
 * - core.telegram.org/api/stars: kanal Stars'ini yechishda 2FA paroli so'raladi.
 * - Stars ToS §3 / Creator ToS 4.5: kirish yo'qolsa balans yonadi.
 * «Telegram orqali kirgan saytlar» ro'yxatining aniq menyu yo'li rasmiy manbada
 * tasdiqlanmadi — «nomi versiyaga qarab» deb yozilgan.
 * StarsPaymee: Stars, Premium (3/6/12 oy) va sovg'alar faqat @username bilan — shu
 * buyurtmalar uchun «kod so'ralmaydi» deyilgan (botda alohida, sukut bo'yicha
 * o'chiq «akkauntga kirib» Premium oqimi bor — «hech qachon» deb yozilmagan).
 */

type Locale = "uz" | "ru" | "en";

function ChecklistTable({ locale }: { locale: Locale }) {
  const c = {
    uz: {
      h: ["#", "Nima qilish", "Qayerda"],
      r: [
        ["Ikki bosqichli parol (2FA) o‘rnating", "Sozlamalar → Maxfiylik va xavfsizlik → Ikki bosqichli tekshirish"],
        ["Tiklash e-pochtasini qo‘shing va uni ham himoyalang", "O‘sha bo‘lim; e-pochtada ham kuchli parol va 2FA"],
        ["Passkey yarating", "Sozlamalar → Maxfiylik va xavfsizlik → Passkeys"],
        ["Raqam faol va sizniki bo‘lsin, SIM’ga PIN qo‘ying", "Telefon sozlamalari, mobil operator"],
        ["Faol seanslarni tekshiring", "Sozlamalar → Qurilmalar (Devices)"],
        ["Telegram orqali kirgan saytlarni ko‘rib chiqing", "Maxfiylik va xavfsizlik (nomi versiyaga qarab)"],
        ["Kirish kodini hech kimga bermang", "Kod faqat «Telegram» xizmat chatiga keladi"],
        ["Notanishning ma’lumot sahifasiga qarang", "Notanish birinchi marta yozganda chiqadi"],
        ["Havola va bot nomini harfma-harf o‘qing", "Brauzer manzili, bot @username’i"],
        ["Faqat rasmiy kanallardan, @username bilan xarid qiling", "Rasmiy sayt va bot; chek va buyurtma raqami"],
      ],
    },
    ru: {
      h: ["#", "Что сделать", "Где"],
      r: [
        ["Включите двухэтапную проверку (2FA)", "Настройки → Конфиденциальность → Двухэтапная проверка"],
        ["Добавьте почту для восстановления и защитите её", "Там же; у почты тоже сильный пароль и 2FA"],
        ["Создайте passkey", "Настройки → Конфиденциальность → Passkeys"],
        ["Номер активен и ваш, на SIM — PIN-код", "Настройки телефона, мобильный оператор"],
        ["Проверьте активные сеансы", "Настройки → Устройства (Devices)"],
        ["Проверьте сайты, куда входили через Telegram", "Конфиденциальность (название зависит от версии)"],
        ["Никому не сообщайте код входа", "Код приходит только в служебный чат «Telegram»"],
        ["Смотрите на инфо-страницу незнакомца", "Появляется, когда незнакомец пишет впервые"],
        ["Читайте ссылку и имя бота по буквам", "Адрес в браузере, @username бота"],
        ["Покупайте только через официальные каналы, по @username", "Официальный сайт и бот; чек и номер заказа"],
      ],
    },
    en: {
      h: ["#", "What to do", "Where"],
      r: [
        ["Turn on two-step verification (2FA)", "Settings → Privacy and Security → Two-Step Verification"],
        ["Add a recovery email and protect it too", "Same section; strong password and 2FA on the email"],
        ["Create a passkey", "Settings → Privacy and Security → Passkeys"],
        ["Keep an active number you control, set a SIM PIN", "Phone settings, your mobile carrier"],
        ["Check active sessions", "Settings → Devices"],
        ["Review sites you logged into with Telegram", "Privacy and Security (name varies by version)"],
        ["Never share a login code", "Codes arrive only in the “Telegram” service chat"],
        ["Check a stranger’s info page", "Shown when a stranger messages you first"],
        ["Read links and bot names letter by letter", "The browser address, the bot’s @username"],
        ["Buy only via official channels, by @username", "Official site and bot; receipt and order number"],
      ],
    },
  }[locale];
  return (
    <CompareTable headers={c.h} rows={c.r.map(([a, b], i) => [<strong key="n">{String(i + 1)}</strong>, a, b])} />
  );
}

const SRC = {
  faq: "https://telegram.org/faq",
  passkeys: "https://telegram.org/blog/passkeys-and-gift-offers",
  contact: "https://telegram.org/blog/star-messages-gateway-2-0-and-more",
  login: "https://telegram.org/blog/member-tags-disable-sharing-and-more",
  apiStars: "https://core.telegram.org/api/stars",
  support: "https://telegram.org/support",
};

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram akkauntini himoyalash — 10 daqiqalik ish: <b>ikki bosqichli parol (2FA)</b> va tiklash e-pochtasini
      o‘rnating, passkey yarating, raqamingiz faol va o‘zingizniki ekaniga ishonch hosil qiling, faol seanslarni
      tekshiring. Kirish kodini hech kimga — «Telegram xodimi»ga ham — bermang, notanish yozganda uning ma’lumot
      sahifasiga qarang. Stars va Premium’ni faqat rasmiy kanallardan, @username bilan oling: StarsPaymee’da bunday
      buyurtma uchun parol va kod so‘ralmaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#royxat", label: "10 bandlik ro‘yxat bir qarashda" },
          { href: "#2fa", label: "1–2. Ikki bosqichli parol va tiklash e-pochtasi" },
          { href: "#passkey", label: "3. Passkey — SMS’siz kirish" },
          { href: "#sim", label: "4. Telefon raqami va SIM-karta" },
          { href: "#seans", label: "5–6. Faol seanslar va Telegram orqali kirgan saytlar" },
          { href: "#kod", label: "7–9. Kod, notanishlar va havolalar" },
          { href: "#xarid", label: "10. Xavfsiz xarid odatlari" },
          { href: "#belgi", label: "Akkauntni o‘g‘irlashning odatiy usullari" },
          { href: "#qaytarish", label: "Akkaunt yoki telefon o‘g‘irlansa" },
        ]}
      />

      <h2 id="royxat">10 bandlik ro‘yxat bir qarashda</h2>
      <p>
        Stars, Premium yoki kolleksion sovg‘alari bor akkaunt — qiymatga ega akkaunt. Telegram shartlariga ko‘ra
        akkauntga kirish yo‘qolsa, Stars balansi ham yo‘qoladi, kanal daromadi esa qoplanmaydi. Quyidagi ro‘yxatni bir
        marta bajarib chiqing, keyin har bir necha oyda seanslarni qayta ko‘rib turing.
      </p>
      <ChecklistTable locale="uz" />

      <h2 id="2fa">1–2. Ikki bosqichli parol va tiklash e-pochtasi</h2>
      <Steps>
        <Step title="1. Bo‘limni oching">Sozlamalar → Maxfiylik va xavfsizlik → Ikki bosqichli tekshirish.</Step>
        <Step title="2. Parol o‘ylab toping">
          Boshqa joyda ishlatmagan, uzun parol. Eslatma (hint) parolning o‘zini oshkor qilmasin.
        </Step>
        <Step title="3. Tiklash e-pochtasini qo‘shing">
          Parolni unutsangiz, shu e-pochta orqali tiklanadi — u ishlaydigan va faqat sizniki bo‘lsin.
        </Step>
        <Step title="4. E-pochtani ham himoyalang">
          Telegram FAQ’i tiklash e-pochtasini ham kuchli parol va iloji bo‘lsa 2FA bilan himoyalashni maslahat beradi.
        </Step>
      </Steps>
      <p>
        2FA yoqilgach, kirish uchun SMS-kod va parol ikkalasi kerak bo‘ladi — kod o‘g‘irlansa yoki SIM boshqa qo‘lga
        o‘tsa ham, parolsiz kirib bo‘lmaydi. Kanalingiz bo‘lsa, shu parol kanal Stars daromadini yechishda ham
        so‘raladi — <Link href="/blog/telegram-ads-stars-sarflash#yechish">yechib olish qanday ishlaydi</Link>.
      </p>

      <h2 id="passkey">3. Passkey — SMS’siz kirish</h2>
      <p>
        2025-yil 12-dekabrdan Telegram’ga passkey bilan kirish mumkin: SMS-kod o‘rniga PIN, barmoq izi yoki Face ID.
        Yaratish: Sozlamalar → Maxfiylik va xavfsizlik → Passkeys — buni istalgan qurilmada qilsa bo‘ladi.
      </p>
      <InfoGrid>
        <InfoCard emoji="🔑" title="Nima beradi">
          Kirish SMS-kodga bog‘liq bo‘lmaydi — kodni ushlab qolishga asoslangan hujumlar ishlamaydi.
        </InfoCard>
        <InfoCard emoji="📱" title="Qayerda saqlanadi">
          Shifrlangan kalitlar qurilmangizda; iCloud, Google va boshqa parol menejerlari bilan sinxronlash mumkin.
        </InfoCard>
        <InfoCard emoji="📶" title="SIM’ni tashlamang">
          Passkey bo‘lsa ham SMS-kod so‘rash imkoni qoladi — akkaunt siz boshqaradigan faol raqamda bo‘lishi shart.
        </InfoCard>
      </InfoGrid>

      <h2 id="sim">4. Telefon raqami va SIM-karta</h2>
      <KeyFacts label="Raqam — akkaunt kaliti">
        <li>
          <b>Raqam faol va sizniki bo‘lsin:</b> Telegram FAQ’i ogohlantiradi — raqam o‘zgarganda Telegram siz
          boshqaradigan raqamga ulanmagan bo‘lsa, akkauntga kirishni butunlay yo‘qotish mumkin.
        </li>
        <li>
          <b>SIM PIN:</b> telefon sozlamalarida SIM-karta PIN-kodini yoqing — telefon yo‘qolsa, SIM boshqa qurilmada
          darhol ishlamaydi.
        </li>
        <li>
          <b>Raqamni almashtirsangiz:</b> eski raqamni yopishdan oldin Telegram’dagi raqamni yangisiga o‘zgartiring.
        </li>
        <li>
          <b>Uzoq vaqt kirmaslik:</b> faol bo‘lmagan akkaunt standart bo‘yicha 18 oydan keyin o‘chadi; muddat
          Sozlamalarda o‘zgartiriladi.
        </li>
      </KeyFacts>

      <h2 id="seans">5–6. Faol seanslar va Telegram orqali kirgan saytlar</h2>
      <KeyFacts label="Kim akkauntingizda">
        <li>
          <b>Seanslar:</b> Sozlamalar → Qurilmalar (ba’zi versiyalarda Maxfiylik va xavfsizlik → Faol seanslar) — barcha
          kirishlar ro‘yxati.
        </li>
        <li>
          <b>Notanish qurilma yoki joy:</b> seansni darhol tugating; shubha bo‘lsa, «boshqa barcha seanslarni tugatish».
        </li>
        <li>
          <b>Muntazam:</b> oyiga bir marta ro‘yxatni ko‘zdan kechirish yaxshi odat.
        </li>
        <li>
          <b>Saytlar:</b> 2026-yil 1-martdan sayt va ilovalarga «Login with Telegram» bilan forma va parolsiz kirish
          mumkin. Qaysi saytlarga kirganingizni Maxfiylik va xavfsizlik bo‘limida ko‘rib, keraksizlaridan chiqing (bo‘lim
          nomi ilova versiyasiga qarab farq qiladi).
        </li>
      </KeyFacts>

      <h2 id="kod">7–9. Kod, notanishlar va havolalar</h2>
      <InfoGrid>
        <InfoCard emoji="🔢" title="7. Kodni hech kimga bermang">
          Kirish kodlari faqat «Telegram» nomli rasmiy xizmat chatiga keladi va Telegram FAQ’iga ko‘ra ularni hech kimga,
          boshqa xizmat yoki ilovaga ham berib bo‘lmaydi. Kod so‘ragan har kim — «Telegram xodimi», do‘st yoki
          «qo‘llab-quvvatlash» bo‘lsa ham — firibgar.
        </InfoCard>
        <InfoCard emoji="🪪" title="8. Notanishning ma’lumot sahifasi">
          2025-yil martidan notanish birinchi marta yozganda Telegram uning mamlakati (raqam bo‘yicha), umumiy guruhlar,
          Telegram’ga qachon qo‘shilgani va username yoki rasmini qachon o‘zgartirganini ko‘rsatadi.
        </InfoCard>
        <InfoCard emoji="🚩" title="Xavf belgilari">
          Yangi ochilgan akkaunt, yaqinda o‘zgargan username yoki rasm, umumiy guruh yo‘q, lekin «sizni taniyman» deydi
          — ehtiyot bo‘ling.
        </InfoCard>
        <InfoCard emoji="🔗" title="9. Havolani harfma-harf o‘qing">
          Soxta sayt va botlar ko‘pincha bitta harf bilan farq qiladi. Telegram FAQ’i: har qanday botga notanish kabi
          qarang — parol, kod va bank ma’lumotini bermang.
        </InfoCard>
      </InfoGrid>
      <p>
        Sovg‘a havolasi haqiqiyligini tekshirish — <Link href="/blog/telegram-gift-havolasini-tekshirish">alohida qo‘llanma</Link>;
        karta ma’lumotlarini himoyalash — <Link href="/blog/onlayn-tolovda-karta-xavfsizligi">onlayn to‘lovda karta xavfsizligi</Link>.
      </p>

      <h2 id="xarid">10. Xavfsiz xarid odatlari (StarsPaymee misolida)</h2>
      <KeyFacts label="Xariddan oldin va keyin">
        <li>
          <b>Faqat rasmiy manzillar:</b> starstg.uz sayti, @StarsPaymee_bot boti, @StarsPaymeeSupport qo‘llab-quvvatlash
          va @StarsPaymee kanali — nomni harfma-harf solishtiring.
        </li>
        <li>
          <b>Faqat @username:</b> Stars, Premium (3, 6, 12 oy) va sovg‘alar username bo‘yicha yetkaziladi — bu
          buyurtmalarda parol, SMS-kod yoki akkauntga kirish so‘ralmaydi.
        </li>
        <li>
          <b>Qabul qiluvchini tekshiring:</b> bot ism va rasmni ko‘rsatadi — yetkazilgan Stars qaytarilmaydi.
        </li>
        <li>
          <b>Chek va buyurtma raqamini saqlang:</b> buyurtma raqami botdagi «Buyurtmalarim»da; muammo bo‘lsa, ikkalasi
          ham kerak bo‘ladi.
        </li>
        <li>
          <b>Siz yozmagan «xodim»:</b> StarsPaymee nomidan o‘zingiz murojaat qilmagan holda kelgan xabar kod, parol yoki
          pul so‘rasa — firibgar; faqat @StarsPaymeeSupport bilan tekshiring.
        </li>
      </KeyFacts>
      <p>
        Xizmatni qanday tanlash kerak — <Link href="/blog/ishonchli-stars-xizmatini-tanlash">ishonchli Stars xizmati</Link>;
        StarsPaymee’ning o‘zi haqida — <Link href="/blog/starspaymee-ishonchli-xavfsizmi">StarsPaymee xavfsizmi</Link>.
      </p>
      <InlineCta text="Akkaunt himoyalandimi? Stars’ni so‘mda, faqat username bilan oling — parol va kod kerak emas." product={{ kind: "stars", amount: 100 }} />

      <h2 id="belgi">Akkauntni o‘g‘irlashning odatiy usullari</h2>
      <ul>
        <li>
          <strong>«Kod adashib keldi, ayting»:</strong> firibgar sizning raqamingizga kirish kodini so‘ratadi va uni
          ilinj bilan so‘raydi — kod faqat sizniki.
        </li>
        <li>
          <strong>Soxta «Telegram xodimi» yoki «support»:</strong> rasmiy kodlar faqat «Telegram» xizmat chatida keladi;
          shaxsiy xabarda kod yoki parol so‘ralmaydi.
        </li>
        <li>
          <strong>Fishing sahifalar:</strong> «bepul Premium», «tekin Stars» yoki soxta login sahifalari — kod va parolni
          shu yerda «o‘g‘irlaydi».
        </li>
        <li>
          <strong>SIM-almashtirish (SIM swap):</strong> raqamingizni boshqa SIM’ga o‘tkazish — 2FA paroli bunga qarshi
          asosiy himoya.
        </li>
        <li>
          <strong>Rasmiy bo‘lmagan ilovalar:</strong> Telegram’ni faqat rasmiy do‘kon yoki telegram.org’dan o‘rnating.
        </li>
      </ul>
      <p>
        «Bepul» va’dalar qanday ishlashi — <Link href="/blog/telegram-premium-bepul-olish-haqiqat">bepul Premium: haqiqat va afsonalar</Link>.
      </p>

      <h2 id="qaytarish">Akkaunt yoki telefon o‘g‘irlansa</h2>
      <Steps>
        <Step title="Boshqa qurilmada Telegram ochiq bo‘lsa">
          Sozlamalar → Qurilmalar → eski qurilmadagi seansni tugating. 2FA paroli bo‘lsa, telefon kimda bo‘lsa ham qayta
          kira olmaydi.
        </Step>
        <Step title="Boshqa qurilma yo‘q bo‘lsa">
          Operatordan eski raqam bilan yangi SIM oling, Telegram’ga kiring va eski qurilmadagi seansni tugating.
        </Step>
        <Step title="Parolni yangilang">
          2FA parolini va tiklash e-pochtasi parolini o‘zgartiring, passkey’larni tekshiring.
        </Step>
        <Step title="Telegram’ga murojaat qiling">
          Kirish umuman bo‘lmasa yoki akkauntda begona harakat bo‘lsa — Telegram’ning rasmiy qo‘llab-quvvatlash
          sahifasi (telegram.org/support) orqali.
        </Step>
      </Steps>
      <Notice label="Muhim">
        StarsPaymee o‘g‘irlangan akkauntni tiklay olmaydi va unga yuborilgan Stars yoki Premium’ni qaytara olmaydi —
        himoya oldindan qilinadi. Kanal egalari uchun: Telegram shartlariga ko‘ra kanalga kirish yo‘qolsa, uning
        balansi ham yo‘qoladi.
      </Notice>

      <Sources
        label="Manbalar"
        items={[
          { href: SRC.faq, label: "Telegram FAQ", note: "2FA, tiklash e-pochtasi, seanslar, kirish kodlari, botlar, telefon o‘g‘irlansa, 18 oy" },
          { href: SRC.passkeys, label: "Telegram Blog — Passkeys, Gift Purchase Offers and More (2025-12-12)", note: "passkey yo‘li va ogohlantirish" },
          { href: SRC.contact, label: "Telegram Blog — Star Messages… Contact Confirmation (2025-03-07)", note: "notanish odam ma’lumot sahifasi" },
          { href: SRC.login, label: "Telegram Blog — Member Tags, Login with Telegram… (2026-03-01)", note: "sayt va ilovalarga parolsiz kirish" },
          { href: SRC.apiStars, label: "core.telegram.org/api/stars", note: "kanal Stars’ini yechishda 2FA paroli" },
          { href: SRC.support, label: "telegram.org/support", note: "Telegram’ning rasmiy qo‘llab-quvvatlash sahifasi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Защитить аккаунт Telegram — дело 10 минут: включите <b>двухэтапную проверку (2FA)</b> и почту для восстановления,
      создайте passkey, убедитесь, что номер активен и принадлежит вам, проверьте активные сеансы. Никому — даже
      «сотруднику Telegram» — не сообщайте код входа, а когда пишет незнакомец, смотрите на его инфо-страницу. Stars и
      Premium покупайте только через официальные каналы, по @username: в StarsPaymee для таких заказов пароль и код не
      нужны.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#royxat", label: "Чек-лист из 10 пунктов" },
          { href: "#2fa", label: "1–2. Двухэтапная проверка и почта для восстановления" },
          { href: "#passkey", label: "3. Passkey — вход без SMS" },
          { href: "#sim", label: "4. Номер телефона и SIM-карта" },
          { href: "#seans", label: "5–6. Активные сеансы и сайты, куда входили через Telegram" },
          { href: "#kod", label: "7–9. Коды, незнакомцы и ссылки" },
          { href: "#xarid", label: "10. Привычки безопасной покупки" },
          { href: "#belgi", label: "Типичные способы угона аккаунта" },
          { href: "#qaytarish", label: "Если угнали аккаунт или украли телефон" },
        ]}
      />

      <h2 id="royxat">Чек-лист из 10 пунктов</h2>
      <p>
        Аккаунт со Stars, Premium или коллекционными подарками — ценный аккаунт. По условиям Telegram при потере доступа
        к аккаунту баланс Stars сгорает, а доход канала не компенсируется. Пройдите список один раз, а затем раз в
        несколько месяцев перепроверяйте сеансы.
      </p>
      <ChecklistTable locale="ru" />

      <h2 id="2fa">1–2. Двухэтапная проверка и почта для восстановления</h2>
      <Steps>
        <Step title="1. Откройте раздел">Настройки → Конфиденциальность → Двухэтапная проверка.</Step>
        <Step title="2. Придумайте пароль">
          Длинный и нигде больше не используемый. Подсказка (hint) не должна выдавать сам пароль.
        </Step>
        <Step title="3. Добавьте почту для восстановления">
          Если забудете пароль, восстановите его через эту почту — она должна работать и принадлежать только вам.
        </Step>
        <Step title="4. Защитите и почту">
          Telegram FAQ советует защитить почту для восстановления сильным паролем и, по возможности, 2FA.
        </Step>
      </Steps>
      <p>
        После включения 2FA для входа нужны и SMS-код, и пароль — даже если код перехватят или SIM окажется в чужих руках,
        без пароля не войти. Если у вас есть канал, этот же пароль запрашивается при выводе Stars канала —{" "}
        <Link href="/blog/telegram-ads-stars-sarflash#yechish">как работает вывод</Link>.
      </p>

      <h2 id="passkey">3. Passkey — вход без SMS</h2>
      <p>
        С 12 декабря 2025 года в Telegram можно входить по passkey: вместо SMS-кода — PIN, отпечаток пальца или Face ID.
        Создание: Настройки → Конфиденциальность → Passkeys — это можно сделать на любом устройстве.
      </p>
      <InfoGrid>
        <InfoCard emoji="🔑" title="Что даёт">
          Вход не зависит от SMS-кода — атаки на перехват кода перестают работать.
        </InfoCard>
        <InfoCard emoji="📱" title="Где хранится">
          Зашифрованные ключи хранятся на устройстве; их можно синхронизировать с iCloud, Google и другими менеджерами
          паролей.
        </InfoCard>
        <InfoCard emoji="📶" title="Не выбрасывайте SIM">
          Даже с passkey можно запросить SMS-код — аккаунт должен быть привязан к активному номеру, которым управляете вы.
        </InfoCard>
      </InfoGrid>

      <h2 id="sim">4. Номер телефона и SIM-карта</h2>
      <KeyFacts label="Номер — ключ от аккаунта">
        <li>
          <b>Номер активен и ваш:</b> Telegram FAQ предупреждает — если при смене номера Telegram не привязан к номеру под
          вашим контролем, можно навсегда потерять доступ к аккаунту.
        </li>
        <li>
          <b>PIN для SIM:</b> включите PIN-код SIM-карты в настройках телефона — при потере телефона SIM не заработает
          сразу в другом устройстве.
        </li>
        <li>
          <b>Меняете номер:</b> до отключения старого номера смените номер в Telegram на новый.
        </li>
        <li>
          <b>Долгое отсутствие:</b> неактивный аккаунт по умолчанию удаляется через 18 месяцев; срок меняется в
          Настройках.
        </li>
      </KeyFacts>

      <h2 id="seans">5–6. Активные сеансы и сайты, куда входили через Telegram</h2>
      <KeyFacts label="Кто в вашем аккаунте">
        <li>
          <b>Сеансы:</b> Настройки → Устройства (в некоторых версиях Конфиденциальность → Активные сеансы) — список всех
          входов.
        </li>
        <li>
          <b>Незнакомое устройство или место:</b> сразу завершите сеанс; при сомнении — «завершить все другие сеансы».
        </li>
        <li>
          <b>Регулярно:</b> полезная привычка — просматривать список раз в месяц.
        </li>
        <li>
          <b>Сайты:</b> с 1 марта 2026 года в сайты и приложения можно входить через «Login with Telegram» без форм и
          паролей. Проверьте в разделе конфиденциальности, куда вы входили, и выйдите из ненужного (название раздела
          зависит от версии приложения).
        </li>
      </KeyFacts>

      <h2 id="kod">7–9. Коды, незнакомцы и ссылки</h2>
      <InfoGrid>
        <InfoCard emoji="🔢" title="7. Никому не сообщайте код">
          Коды входа приходят только в официальный служебный чат «Telegram», и по Telegram FAQ их нельзя передавать
          никому, включая другие сервисы и приложения. Любой, кто просит код, — «сотрудник Telegram», друг или
          «поддержка», — мошенник.
        </InfoCard>
        <InfoCard emoji="🪪" title="8. Инфо-страница незнакомца">
          С марта 2025 года, когда незнакомец пишет впервые, Telegram показывает его страну (по номеру), общие группы,
          когда он присоединился к Telegram и когда менял username или фото.
        </InfoCard>
        <InfoCard emoji="🚩" title="Тревожные признаки">
          Свежий аккаунт, недавно сменённые username или фото, нет общих групп, но «мы знакомы» — будьте осторожны.
        </InfoCard>
        <InfoCard emoji="🔗" title="9. Читайте ссылку по буквам">
          Поддельные сайты и боты часто отличаются одной буквой. Telegram FAQ: относитесь к любому боту как к незнакомцу —
          не давайте пароли, коды и банковские данные.
        </InfoCard>
      </InfoGrid>
      <p>
        Как проверить ссылку на подарок — <Link href="/blog/telegram-gift-havolasini-tekshirish">отдельное руководство</Link>;
        защита данных карты — <Link href="/blog/onlayn-tolovda-karta-xavfsizligi">безопасность карты при онлайн-оплате</Link>.
      </p>

      <h2 id="xarid">10. Привычки безопасной покупки (на примере StarsPaymee)</h2>
      <KeyFacts label="До и после покупки">
        <li>
          <b>Только официальные адреса:</b> сайт starstg.uz, бот @StarsPaymee_bot, поддержка @StarsPaymeeSupport и канал
          @StarsPaymee — сверяйте название по буквам.
        </li>
        <li>
          <b>Только @username:</b> Stars, Premium (3, 6, 12 месяцев) и подарки доставляются по username — в этих заказах
          не нужны пароль, SMS-код или вход в аккаунт.
        </li>
        <li>
          <b>Проверьте получателя:</b> бот показывает имя и фото — доставленные Stars не возвращаются.
        </li>
        <li>
          <b>Сохраните чек и номер заказа:</b> номер — в «Моих заказах» в боте; при проблеме понадобится и то и другое.
        </li>
        <li>
          <b>«Сотрудник», которому вы не писали:</b> сообщение от имени StarsPaymee, которое пришло без вашего обращения и
          просит код, пароль или деньги, — мошенничество; проверяйте только через @StarsPaymeeSupport.
        </li>
      </KeyFacts>
      <p>
        Как выбрать сервис — <Link href="/blog/ishonchli-stars-xizmatini-tanlash">надёжный сервис Stars</Link>; о самом
        StarsPaymee — <Link href="/blog/starspaymee-ishonchli-xavfsizmi">безопасен ли StarsPaymee</Link>.
      </p>
      <InlineCta text="Аккаунт защищён? Покупайте Stars за сумы, только по username — без пароля и кода." product={{ kind: "stars", amount: 100 }} />

      <h2 id="belgi">Типичные способы угона аккаунта</h2>
      <ul>
        <li>
          <strong>«Код пришёл по ошибке, скажите»:</strong> мошенник запрашивает код входа на ваш номер и вежливо просит
          его переслать — код только ваш.
        </li>
        <li>
          <strong>Поддельный «сотрудник Telegram» или «поддержка»:</strong> официальные коды приходят только в служебный чат
          «Telegram»; в личных сообщениях код и пароль не запрашивают.
        </li>
        <li>
          <strong>Фишинговые страницы:</strong> «бесплатный Premium», «Stars даром» или поддельные страницы входа крадут код
          и пароль.
        </li>
        <li>
          <strong>Подмена SIM (SIM swap):</strong> перенос вашего номера на чужую SIM — главная защита от этого пароль 2FA.
        </li>
        <li>
          <strong>Неофициальные приложения:</strong> устанавливайте Telegram только из официального магазина или с
          telegram.org.
        </li>
      </ul>
      <p>
        Как работают обещания «бесплатно» —{" "}
        <Link href="/blog/telegram-premium-bepul-olish-haqiqat">бесплатный Premium: правда и мифы</Link>.
      </p>

      <h2 id="qaytarish">Если угнали аккаунт или украли телефон</h2>
      <Steps>
        <Step title="Если Telegram открыт на другом устройстве">
          Настройки → Устройства → завершите сеанс на старом устройстве. С паролем 2FA тот, у кого телефон, не сможет
          войти снова.
        </Step>
        <Step title="Если другого устройства нет">
          Получите у оператора новую SIM со старым номером, войдите в Telegram и завершите сеанс на старом устройстве.
        </Step>
        <Step title="Обновите пароли">
          Смените пароль 2FA и пароль почты для восстановления, проверьте passkey.
        </Step>
        <Step title="Обратитесь в Telegram">
          Если доступа нет совсем или в аккаунте чужие действия — через официальную страницу поддержки Telegram
          (telegram.org/support).
        </Step>
      </Steps>
      <Notice label="Важно">
        StarsPaymee не может восстановить угнанный аккаунт и вернуть отправленные на него Stars или Premium — защищаться
        нужно заранее. Для владельцев каналов: по условиям Telegram при потере доступа к каналу сгорает и его баланс.
      </Notice>

      <Sources
        label="Источники"
        items={[
          { href: SRC.faq, label: "Telegram FAQ", note: "2FA, почта для восстановления, сеансы, коды входа, боты, кража телефона, 18 месяцев" },
          { href: SRC.passkeys, label: "Telegram Blog — Passkeys, Gift Purchase Offers and More (2025-12-12)", note: "путь к passkey и предупреждение" },
          { href: SRC.contact, label: "Telegram Blog — Star Messages… Contact Confirmation (2025-03-07)", note: "инфо-страница незнакомца" },
          { href: SRC.login, label: "Telegram Blog — Member Tags, Login with Telegram… (2026-03-01)", note: "вход на сайты и в приложения без пароля" },
          { href: SRC.apiStars, label: "core.telegram.org/api/stars", note: "пароль 2FA при выводе Stars канала" },
          { href: SRC.support, label: "telegram.org/support", note: "официальная страница поддержки Telegram" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Protecting your Telegram account takes 10 minutes: turn on <b>two-step verification (2FA)</b> and a recovery email,
      create a passkey, make sure your number is active and yours, and check your active sessions. Never share a login
      code with anyone — not even a “Telegram employee” — and when a stranger messages you, look at their info page. Buy
      Stars and Premium only through official channels, by @username: at StarsPaymee such orders need no password or
      code.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#royxat", label: "The 10-point checklist at a glance" },
          { href: "#2fa", label: "1–2. Two-step verification and a recovery email" },
          { href: "#passkey", label: "3. Passkeys — logging in without SMS" },
          { href: "#sim", label: "4. Your phone number and SIM card" },
          { href: "#seans", label: "5–6. Active sessions and sites you logged into with Telegram" },
          { href: "#kod", label: "7–9. Codes, strangers and links" },
          { href: "#xarid", label: "10. Safe buying habits" },
          { href: "#belgi", label: "Common ways accounts get stolen" },
          { href: "#qaytarish", label: "If your account or phone is stolen" },
        ]}
      />

      <h2 id="royxat">The 10-point checklist at a glance</h2>
      <p>
        An account with Stars, Premium or collectible gifts is a valuable account. Under Telegram’s terms, if you lose
        access to your account, its Stars balance is forfeited, and channel income is not compensated. Go through the list
        once, then recheck your sessions every few months.
      </p>
      <ChecklistTable locale="en" />

      <h2 id="2fa">1–2. Two-step verification and a recovery email</h2>
      <Steps>
        <Step title="1. Open the section">Settings → Privacy and Security → Two-Step Verification.</Step>
        <Step title="2. Choose a password">
          Long and not used anywhere else. The hint must not give the password away.
        </Step>
        <Step title="3. Add a recovery email">
          If you forget the password, you recover it through this email — it must work and belong only to you.
        </Step>
        <Step title="4. Protect the email too">
          The Telegram FAQ advises protecting the recovery email with a strong password and, where possible, 2FA.
        </Step>
      </Steps>
      <p>
        With 2FA on, logging in takes both the SMS code and the password — even if the code is intercepted or your SIM ends
        up in someone else’s hands, there is no way in without the password. If you run a channel, the same password is
        requested when withdrawing the channel’s Stars —{" "}
        <Link href="/blog/telegram-ads-stars-sarflash#yechish">how withdrawal works</Link>.
      </p>

      <h2 id="passkey">3. Passkeys — logging in without SMS</h2>
      <p>
        Since 12 December 2025 you can log in to Telegram with a passkey: a PIN, fingerprint or Face ID instead of an SMS
        code. To create one: Settings → Privacy and Security → Passkeys — you can do this on any device.
      </p>
      <InfoGrid>
        <InfoCard emoji="🔑" title="What it gives you">
          Logging in no longer depends on an SMS code — attacks built on intercepting the code stop working.
        </InfoCard>
        <InfoCard emoji="📱" title="Where it is stored">
          The encrypted keys stay on your device and can be synced with iCloud, Google and other password managers.
        </InfoCard>
        <InfoCard emoji="📶" title="Keep your SIM">
          Even with a passkey you can still request an SMS code — the account must use an active number you control.
        </InfoCard>
      </InfoGrid>

      <h2 id="sim">4. Your phone number and SIM card</h2>
      <KeyFacts label="Your number is the key to the account">
        <li>
          <b>Keep the number active and yours:</b> the Telegram FAQ warns that if your number changes and Telegram is not
          connected to a number you control, you risk losing access to your account forever.
        </li>
        <li>
          <b>SIM PIN:</b> turn on the SIM PIN in your phone settings — if the phone is lost, the SIM will not work in
          another device straight away.
        </li>
        <li>
          <b>Changing numbers:</b> switch the number in Telegram to the new one before the old one is closed.
        </li>
        <li>
          <b>Long absence:</b> an inactive account is deleted after 18 months by default; the period can be changed in
          Settings.
        </li>
      </KeyFacts>

      <h2 id="seans">5–6. Active sessions and sites you logged into with Telegram</h2>
      <KeyFacts label="Who is in your account">
        <li>
          <b>Sessions:</b> Settings → Devices (in some versions Privacy and Security → Active Sessions) — a list of every
          login.
        </li>
        <li>
          <b>An unknown device or location:</b> end that session at once; if in doubt, “terminate all other sessions”.
        </li>
        <li>
          <b>Regularly:</b> reviewing the list once a month is a good habit.
        </li>
        <li>
          <b>Sites:</b> since 1 March 2026 you can sign in to sites and apps with “Login with Telegram”, without forms or
          passwords. Check in the privacy section which ones you have used and log out of the ones you no longer need (the
          section name varies by app version).
        </li>
      </KeyFacts>

      <h2 id="kod">7–9. Codes, strangers and links</h2>
      <InfoGrid>
        <InfoCard emoji="🔢" title="7. Never share a code">
          Login codes arrive only in the official “Telegram” service chat, and the Telegram FAQ says they should never be
          shared with anyone, including other services or apps. Anyone asking for a code — a “Telegram employee”, a friend
          or “support” — is a scammer.
        </InfoCard>
        <InfoCard emoji="🪪" title="8. A stranger’s info page">
          Since March 2025, when a stranger messages you for the first time, Telegram shows their country (by phone
          number), shared groups, when they joined Telegram and when they last changed their username or photo.
        </InfoCard>
        <InfoCard emoji="🚩" title="Warning signs">
          A fresh account, a recently changed username or photo, no shared groups, yet “we know each other” — be careful.
        </InfoCard>
        <InfoCard emoji="🔗" title="9. Read links letter by letter">
          Fake sites and bots often differ by a single letter. Telegram FAQ: treat any bot as a stranger — do not give it
          passwords, codes or bank details.
        </InfoCard>
      </InfoGrid>
      <p>
        Checking whether a gift link is genuine — <Link href="/blog/telegram-gift-havolasini-tekshirish">a separate guide</Link>;
        protecting your card details — <Link href="/blog/onlayn-tolovda-karta-xavfsizligi">card safety in online payments</Link>.
      </p>

      <h2 id="xarid">10. Safe buying habits (with StarsPaymee as the example)</h2>
      <KeyFacts label="Before and after you buy">
        <li>
          <b>Official addresses only:</b> the starstg.uz site, the @StarsPaymee_bot bot, @StarsPaymeeSupport for support
          and the @StarsPaymee channel — compare the name letter by letter.
        </li>
        <li>
          <b>Only an @username:</b> Stars, Premium (3, 6, 12 months) and gifts are delivered by username — these orders
          need no password, SMS code or account login.
        </li>
        <li>
          <b>Check the recipient:</b> the bot shows the name and photo — delivered Stars are not refunded.
        </li>
        <li>
          <b>Keep the receipt and order number:</b> the number is in “My orders” in the bot; you will need both if
          something goes wrong.
        </li>
        <li>
          <b>A “staff member” you never wrote to:</b> a message in StarsPaymee’s name that you did not ask for and that
          wants a code, password or money is a scam; check only with @StarsPaymeeSupport.
        </li>
      </KeyFacts>
      <p>
        How to choose a service — <Link href="/blog/ishonchli-stars-xizmatini-tanlash">a trustworthy Stars service</Link>;
        about StarsPaymee itself — <Link href="/blog/starspaymee-ishonchli-xavfsizmi">is StarsPaymee safe</Link>.
      </p>
      <InlineCta text="Account protected? Buy Stars in som, by username only — no password, no code." product={{ kind: "stars", amount: 100 }} />

      <h2 id="belgi">Common ways accounts get stolen</h2>
      <ul>
        <li>
          <strong>“A code came to you by mistake, tell me”:</strong> the scammer requests a login code for your number and
          politely asks you to pass it on — the code is yours alone.
        </li>
        <li>
          <strong>A fake “Telegram employee” or “support”:</strong> official codes arrive only in the “Telegram” service
          chat; nobody asks for codes or passwords in private messages.
        </li>
        <li>
          <strong>Phishing pages:</strong> “free Premium”, “free Stars” or fake login pages steal codes and passwords.
        </li>
        <li>
          <strong>SIM swapping:</strong> moving your number to someone else’s SIM — a 2FA password is the main defence.
        </li>
        <li>
          <strong>Unofficial apps:</strong> install Telegram only from an official store or telegram.org.
        </li>
      </ul>
      <p>
        How “free” promises work — <Link href="/blog/telegram-premium-bepul-olish-haqiqat">free Premium: facts and myths</Link>.
      </p>

      <h2 id="qaytarish">If your account or phone is stolen</h2>
      <Steps>
        <Step title="If Telegram is open on another device">
          Settings → Devices → end the session on the old device. With a 2FA password, whoever has the phone cannot log
          in again.
        </Step>
        <Step title="If there is no other device">
          Get a new SIM with your old number from your carrier, log in to Telegram and end the session on the old device.
        </Step>
        <Step title="Update your passwords">
          Change your 2FA password and your recovery email password, and check your passkeys.
        </Step>
        <Step title="Contact Telegram">
          If you have no access at all or see activity that is not yours — through Telegram’s official support page
          (telegram.org/support).
        </Step>
      </Steps>
      <Notice label="Important">
        StarsPaymee cannot recover a stolen account or return Stars or Premium sent to it — protection has to come first.
        For channel owners: under Telegram’s terms, losing access to a channel also means losing its balance.
      </Notice>

      <Sources
        label="Sources"
        items={[
          { href: SRC.faq, label: "Telegram FAQ", note: "2FA, recovery email, sessions, login codes, bots, stolen phone, 18 months" },
          { href: SRC.passkeys, label: "Telegram Blog — Passkeys, Gift Purchase Offers and More (2025-12-12)", note: "the passkey path and warning" },
          { href: SRC.contact, label: "Telegram Blog — Star Messages… Contact Confirmation (2025-03-07)", note: "a stranger’s info page" },
          { href: SRC.login, label: "Telegram Blog — Member Tags, Login with Telegram… (2026-03-01)", note: "password-free sign-in to sites and apps" },
          { href: SRC.apiStars, label: "core.telegram.org/api/stars", note: "the 2FA password when withdrawing channel Stars" },
          { href: SRC.support, label: "telegram.org/support", note: "Telegram’s official support page" },
        ]}
      />
    </>
  );
}

const faqUz = [
  {
    question: "Telegram akkauntini o‘g‘irlashdan qanday himoya qilish mumkin?",
    answer:
      "Ikki bosqichli parol (2FA) va himoyalangan tiklash e-pochtasini o‘rnating, passkey yarating, raqamingiz faol va o‘zingizniki bo‘lsin, faol seanslarni muntazam tekshiring va kirish kodini hech kimga bermang.",
  },
  {
    question: "Passkey bo‘lsa, telefon raqami kerak emasmi?",
    answer:
      "Kerak. Passkey bo‘lsa ham SMS-kod so‘rash imkoni qoladi, shuning uchun Telegram akkaunt siz boshqaradigan faol raqamda bo‘lishini talab qiladi.",
  },
  {
    question: "2FA parolni unutsam nima bo‘ladi?",
    answer:
      "Parol tiklash e-pochtasi orqali tiklanadi — shuning uchun uni oldindan qo‘shing va e-pochtaning o‘zini ham kuchli parol va 2FA bilan himoyalang.",
  },
  {
    question: "SMS-kodni kimgadir aytsam bo‘ladimi?",
    answer:
      "Yo‘q. Telegram FAQ’iga ko‘ra kirish kodlari hech kimga, hatto boshqa xizmat yoki ilovaga ham berilmaydi. Kod so‘ragan odam — firibgar.",
  },
  {
    question: "Telegram xodimi parol yoki kod so‘rasa, bu haqiqiymi?",
    answer:
      "Yo‘q. Rasmiy kirish kodlari faqat «Telegram» xizmat chatiga keladi; shaxsiy xabarda kod yoki parol so‘ralmaydi — bu firibgarlik.",
  },
  {
    question: "Faol seanslarni qayerdan tekshirish mumkin?",
    answer:
      "Sozlamalar → Qurilmalar (ba’zi versiyalarda Maxfiylik va xavfsizlik → Faol seanslar). Notanish qurilmani darhol chiqarib yuboring.",
  },
  {
    question: "Notanish yozsa, nimaga qarash kerak?",
    answer:
      "Telegram ko‘rsatadigan ma’lumot sahifasiga: mamlakat, umumiy guruhlar, Telegram’ga qachon qo‘shilgani va username yoki rasm qachon o‘zgargani. Yangi akkaunt va yaqinda o‘zgargan nom — xavf belgisi.",
  },
  {
    question: "StarsPaymee mendan kod so‘rashi mumkinmi?",
    answer:
      "Stars, Premium (3, 6, 12 oy) va sovg‘a buyurtmalarida yo‘q — faqat @username kerak. StarsPaymee nomidan siz yozmagan holda kod, parol yoki pul so‘ralsa — firibgar; faqat @StarsPaymeeSupport bilan tekshiring.",
  },
  {
    question: "Telefonim o‘g‘irlansa nima qilaman?",
    answer:
      "Boshqa qurilmada Telegram ochiq bo‘lsa, Sozlamalar → Qurilmalar’dan eski seansni tugating. Bo‘lmasa, operatordan eski raqam bilan yangi SIM olib, kiring va eski seansni tugating. 2FA bo‘lsa, o‘g‘ri qayta kira olmaydi.",
  },
  {
    question: "Uzoq vaqt kirmasam akkaunt o‘chib ketadimi?",
    answer: "Ha, faol bo‘lmagan akkaunt standart bo‘yicha 18 oydan keyin o‘chadi. Muddatni Sozlamalarda o‘zgartirish mumkin.",
  },
];

const faqRu = [
  {
    question: "Как защитить аккаунт Telegram от угона?",
    answer:
      "Включите двухэтапную проверку (2FA) и защищённую почту для восстановления, создайте passkey, держите активный номер под своим контролем, регулярно проверяйте сеансы и никому не сообщайте код входа.",
  },
  {
    question: "Если есть passkey, номер телефона не нужен?",
    answer: "Нужен. Даже с passkey можно запросить SMS-код, поэтому Telegram требует, чтобы аккаунт был привязан к активному номеру под вашим контролем.",
  },
  {
    question: "Что будет, если я забуду пароль 2FA?",
    answer:
      "Пароль восстанавливается через почту для восстановления — поэтому добавьте её заранее и защитите саму почту сильным паролем и 2FA.",
  },
  {
    question: "Можно ли кому-то сказать SMS-код?",
    answer: "Нет. По Telegram FAQ коды входа нельзя передавать никому, даже другим сервисам и приложениям. Тот, кто просит код, — мошенник.",
  },
  {
    question: "Сотрудник Telegram просит пароль или код — это правда?",
    answer: "Нет. Официальные коды входа приходят только в служебный чат «Telegram»; в личных сообщениях код и пароль не запрашивают — это мошенничество.",
  },
  {
    question: "Где проверить активные сеансы?",
    answer: "Настройки → Устройства (в некоторых версиях Конфиденциальность → Активные сеансы). Незнакомое устройство сразу отключайте.",
  },
  {
    question: "На что смотреть, если пишет незнакомец?",
    answer:
      "На инфо-страницу от Telegram: страна, общие группы, когда присоединился к Telegram и когда менял username или фото. Свежий аккаунт и недавно сменённое имя — тревожный признак.",
  },
  {
    question: "Может ли StarsPaymee попросить у меня код?",
    answer:
      "В заказах Stars, Premium (3, 6, 12 месяцев) и подарков — нет, нужен только @username. Если от имени StarsPaymee без вашего обращения просят код, пароль или деньги — это мошенник; проверяйте только через @StarsPaymeeSupport.",
  },
  {
    question: "Что делать, если украли телефон?",
    answer:
      "Если Telegram открыт на другом устройстве, завершите старый сеанс в Настройки → Устройства. Если нет — получите у оператора новую SIM со старым номером, войдите и завершите старый сеанс. С 2FA вор не сможет войти снова.",
  },
  {
    question: "Удалится ли аккаунт, если долго не заходить?",
    answer: "Да, неактивный аккаунт по умолчанию удаляется через 18 месяцев. Срок можно изменить в Настройках.",
  },
];

const faqEn = [
  {
    question: "How do I protect my Telegram account from theft?",
    answer:
      "Turn on two-step verification (2FA) with a protected recovery email, create a passkey, keep an active number you control, check your sessions regularly and never share a login code.",
  },
  {
    question: "If I have a passkey, do I still need a phone number?",
    answer: "Yes. Even with a passkey you can still request an SMS code, so Telegram requires the account to use an active number you control.",
  },
  {
    question: "What happens if I forget my 2FA password?",
    answer: "You recover it through the recovery email — so add one in advance and protect the email itself with a strong password and 2FA.",
  },
  {
    question: "Can I tell someone my SMS code?",
    answer: "No. According to the Telegram FAQ, login codes should never be shared with anyone, including other services or apps. Whoever asks for a code is a scammer.",
  },
  {
    question: "A Telegram employee is asking for my password or code — is that real?",
    answer: "No. Official login codes arrive only in the “Telegram” service chat; nobody asks for codes or passwords in private messages — it is a scam.",
  },
  {
    question: "Where do I check active sessions?",
    answer: "Settings → Devices (in some versions Privacy and Security → Active Sessions). End any unknown device at once.",
  },
  {
    question: "What should I look at when a stranger messages me?",
    answer:
      "Telegram’s info page: country, shared groups, when they joined Telegram and when they last changed their username or photo. A fresh account and a recently changed name are warning signs.",
  },
  {
    question: "Can StarsPaymee ask me for a code?",
    answer:
      "Not for Stars, Premium (3, 6, 12 months) or gift orders — only an @username is needed. If someone in StarsPaymee’s name asks for a code, password or money without you contacting them, it is a scam; check only with @StarsPaymeeSupport.",
  },
  {
    question: "What do I do if my phone is stolen?",
    answer:
      "If Telegram is open on another device, end the old session in Settings → Devices. If not, get a new SIM with your old number from your carrier, log in and end the old session. With 2FA, the thief cannot log in again.",
  },
  {
    question: "Will my account be deleted if I do not log in for a long time?",
    answer: "Yes, an inactive account is deleted after 18 months by default. You can change the period in Settings.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "howto",
  datePublished: "2026-07-05",
  dateModified: "2026-10-27",
  keywords: ["telegram akkaunt ogirlandi", "telegram parol qoyish", "telegram 2fa yoqish", "telegram ikki bosqichli parol", "telegram akkauntni himoya qilish", "telegram akkaunt xavfsizligi", "telegram passkey", "telegram faol seanslar", "telegram kodni hech kimga bermang", "безопасность аккаунта telegram", "двухэтапная проверка telegram", "passkey telegram", "telegram account security checklist"],
  howToSteps: [
    { name: "2FA paroli", text: "Sozlamalar → Maxfiylik va xavfsizlik → Ikki bosqichli tekshirish: parol o‘rnating." },
    { name: "Tiklash e-pochtasi", text: "E-pochta qo‘shing va uni ham kuchli parol va 2FA bilan himoyalang." },
    { name: "Passkey", text: "Sozlamalar → Maxfiylik va xavfsizlik → Passkeys: PIN yoki biometrika bilan kirish." },
    { name: "Raqam va SIM", text: "Raqam faol va sizniki bo‘lsin, SIM-kartaga PIN qo‘ying." },
    { name: "Faol seanslar", text: "Sozlamalar → Qurilmalar: notanish seanslarni tugating." },
    { name: "Ulangan saytlar", text: "Telegram orqali kirgan keraksiz sayt va ilovalardan chiqing." },
    { name: "Kirish kodi", text: "Kodni hech kimga bermang — u faqat «Telegram» xizmat chatiga keladi." },
    { name: "Notanishlar", text: "Notanish yozganda uning ma’lumot sahifasini tekshiring." },
    { name: "Havolalar", text: "Sayt va bot nomini harfma-harf o‘qing." },
    { name: "Xavfsiz xarid", text: "Faqat rasmiy kanallardan, @username bilan oling; chek va buyurtma raqamini saqlang." },
  ],
  locales: {
    uz: {
      title: "Telegram akkauntni o‘g‘irlashdan himoya: 2FA, passkey va 10 bandlik tekshiruv ro‘yxati (2026)",
      excerpt:
        "Telegram akkaunt xavfsizligi bo‘yicha amaliy ro‘yxat: 2FA va tiklash e-pochtasi, passkey, raqam va SIM, faol seanslar, kirish kodlari, notanish odam ma’lumot sahifasi, xavfsiz xarid va akkaunt o‘g‘irlansa nima qilish.",
      metaTitle: "Telegram akkaunt xavfsizligi — 2FA, passkey va 10 band",
      metaDescription: "Telegram akkauntini himoyalash: 2FA va tiklash e-pochtasi, passkey, faol seanslar, kodni hech kimga bermaslik, notanishlarni tekshirish — 10 bandlik ro‘yxat.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Himoyalangan akkaunt — xotirjam xarid",
      ctaBody: "StarsPaymee’da Stars va Premium faqat @username bilan olinadi — parol, SMS-kod yoki akkauntga kirish kerak emas. So‘mda, 5 soniyada.",
      faq: faqUz,
    },
    ru: {
      title: "Защита аккаунта Telegram от угона: 2FA, passkey и чек-лист из 10 пунктов (2026)",
      excerpt:
        "Практический чек-лист безопасности Telegram: 2FA и почта для восстановления, passkey, номер и SIM, активные сеансы, коды входа, инфо-страница незнакомца, безопасные покупки и что делать при угоне.",
      metaTitle: "Безопасность аккаунта Telegram: 2FA, passkey, чек-лист",
      metaDescription: "Как защитить аккаунт Telegram: 2FA и почта для восстановления, passkey, активные сеансы, коды входа, проверка незнакомцев — чек-лист из 10 пунктов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Защищённый аккаунт — спокойная покупка",
      ctaBody: "В StarsPaymee Stars и Premium покупаются только по @username — без пароля, SMS-кода и входа в аккаунт. В сумах, за 5 секунд.",
      faq: faqRu,
    },
    en: {
      title: "Protecting your Telegram account from theft: 2FA, passkeys and a 10-point checklist (2026)",
      excerpt:
        "A practical Telegram security checklist: 2FA and a recovery email, passkeys, your number and SIM, active sessions, login codes, a stranger’s info page, safe buying, and what to do if your account is stolen.",
      metaTitle: "Telegram account security: 2FA, passkeys and a checklist",
      metaDescription: "How to protect your Telegram account: 2FA and a recovery email, passkeys, active sessions, login codes and checking strangers — a 10-point checklist.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "A protected account — a worry-free purchase",
      ctaBody: "At StarsPaymee, Stars and Premium are bought with just an @username — no password, SMS code or account login. In som, within 5 seconds.",
      faq: faqEn,
    },
  },
};
