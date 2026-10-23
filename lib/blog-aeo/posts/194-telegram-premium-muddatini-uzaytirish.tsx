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
import { PREMIUM_PLANS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-muddatini-uzaytirish";

/**
 * Telegram Premium muddatini uzaytirish mumkinmi — faol obuna ustiga muddat
 * qo'shish, qayta xarid tartibi, muddat tanlash.
 *
 * NEGA ALOHIDA SAHIFA (2026-10-23): «premium uzaytirish», «premium ustiga
 * premium», «tugashiga bir hafta qoldi» — o'z obunasini davom ettirish niyati.
 * Yaqin postlar boshqa niyatda: 188 — tugash sanasini TEKSHIRISH (havola),
 * 169 — tugasa nima bo'ladi (havola), 33 — avtoto'lovni o'chirish (havola),
 * 167/13 — BOSHQA odamga sovg'a (havola). Takrorlanmaydi.
 *
 * FAKT (bot kodi, 2026-10-23): usdtPremium/routes.js va orderCreate.js —
 * qabul qiluvchi qidiruvida `found.premium === true` bo'lsa buyurtma
 * bloklanadi: «Bu foydalanuvchida allaqachon Telegram Premium mavjud»
 * (search 404, order 409). Ya'ni StarsPaymee'da faol Premium ustiga muddat
 * QO'SHILMAYDI — obuna tugashini kutish kerak. Shu sana saytdagi aksincha
 * da'volar (167, 13, 39, 139, 188, 169, /premium FAQ) tuzatildi.
 * Telegram: faq_premium — bekor qilish provayder orqali, joriy davr oxirigacha
 * kirish saqlanadi; API payments.applyGiftCode — faol obuna paytida
 * PREMIUM_SUB_ACTIVE_UNTIL xatosi (kod keyin ishlatiladi). Telegram FAQ'ida
 * «ustiga qo'shilish» hujjatlanmagan — shunday deb yozilgan.
 * Narxlar PREMIUM_PLANS'dan (1 oylik ataylab ko'rsatilmaydi).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/ /g, " ");
const PLANS = PREMIUM_PLANS.filter((p) => p.months !== 1);

function PlanTable({ locale }: { locale: Locale }) {
  const h = {
    uz: ["Muddat", "Narx (karta · balans)", "Oyiga to‘g‘ri keladi", "Qachon qulay"],
    ru: ["Срок", "Цена (карта · баланс)", "В месяц", "Когда удобно"],
    en: ["Term", "Price (card · balance)", "Per month", "When it suits"],
  }[locale];
  const when = {
    uz: ["Yaqin bir necha oy uchun", "Muntazam foydalansangiz va tez-tez qayta xarid qilishni istamasangiz", "Yil davomida foydalanishni rejalashtirsangiz"],
    ru: ["На ближайшие несколько месяцев", "Если пользуетесь регулярно и не хотите часто покупать заново", "Если планируете пользоваться весь год"],
    en: ["For the next few months", "If you use it regularly and do not want to re-buy often", "If you plan to use it all year"],
  }[locale];
  const unit = { uz: "so‘m", ru: "сум", en: "som" }[locale];
  const mo = { uz: "oy", ru: "мес", en: "months" }[locale];
  return (
    <CompareTable
      headers={h}
      rows={PLANS.map((p, i) => [
        <strong key="m">{`${p.months} ${mo}`}</strong>,
        `${fmt(p.priceUzs, locale)} ${unit}`,
        `≈ ${fmt(Math.round(p.priceUzs / p.months), locale)} ${unit}`,
        when[i],
      ])}
    />
  );
}

const SRC = {
  faq: "https://telegram.org/faq_premium",
  api: "https://core.telegram.org/method/payments.applyGiftCode",
};

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      <b>StarsPaymee orqali — yo‘q:</b> faol Premium ustiga yana 3, 6 yoki 12 oy qo‘shib bo‘lmaydi. Username
      kiritilganda akkauntda Premium faol bo‘lsa, bot «Bu foydalanuvchida allaqachon Telegram Premium mavjud» deb
      buyurtmani ochmaydi. Amaldagi obuna tugagach yangi muddatga Premium olasiz — to‘lovdan keyin bir necha
      soniyada faollashadi. Doimiy foydalansangiz, keyingi xaridda 6 yoki 12 oyni tanlang: oyiga arzonroq va qayta
      xarid kamroq.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#savol", label: "Tugashiga bir hafta qoldi — hozir 3 oy qo‘shsam bo‘ladimi?" },
          { href: "#nega", label: "Nega faol Premium ustiga muddat qo‘shilmaydi" },
          { href: "#holatlar", label: "«Uzaytirish» qaysi holatda nimani anglatadi" },
          { href: "#tekshirish", label: "Qachon tugashini bilish" },
          { href: "#muddat", label: "Tugagach necha oylik olish ma’qul" },
          { href: "#qayta", label: "Qayta olish: 7 qadam" },
          { href: "#oldindan", label: "Tugashidan oldin nima qilsa bo‘ladi" },
        ]}
      />

      <h2 id="savol">Tugashiga bir hafta qoldi — hozir 3 oy qo‘shsam bo‘ladimi?</h2>
      <p>
        Masalan, Premium’ingiz 10-noyabrda tugaydi, bugun 3-noyabr. Hozir 3 oylik olib, muddatni fevralgacha
        cho‘zmoqchisiz. StarsPaymee’da bu amalga oshmaydi: akkauntingizda Premium faol ekan, bot buyurtmani qabul
        qilmaydi — tugashiga yetti kun, bir kun yoki bir necha soat qolganida ham. Avval joriy obuna tugaydi,
        keyin yangisi olinadi.
      </p>
      <KeyFacts label="Qoida qisqacha">
        <li>
          <b>Faol Premium ustiga muddat qo‘shilmaydi</b> — bot username tekshiruvida to‘xtaydi.
        </li>
        <li>
          <b>Qolgan kunlar yangi paketga o‘tkazilmaydi</b> — ulardan foydalanib bo‘ling, so‘ng yangisini oling.
        </li>
        <li>
          <b>Tugagan kuni</b> buyurtma bering — faollashuv to‘lovdan keyin bir necha soniya, uzilish deyarli yo‘q.
        </li>
        <li>
          <b>Boshqa odamga sovg‘a</b> ham shu qoidaga bo‘ysunadi — Premium bor akkauntga buyurtma ochilmaydi.
        </li>
      </KeyFacts>

      <h2 id="nega">Nega faol Premium ustiga muddat qo‘shilmaydi</h2>
      <p>
        Premium xaridini telefon balansini to‘ldirishga o‘xshatish oson — «oy qo‘shsam, umumiy muddat ortadi». Lekin
        Premium muddati Telegram tomonida bitta obuna sifatida yuritiladi va yangi muddatni faol obunaga «qo‘shish»
        barcha usullarda bir xil ishlamaydi. StarsPaymee buyurtma ochishdan oldin akkauntni tekshiradi va Premium
        faol bo‘lsa xaridni to‘xtatadi — siz pul to‘lab, muddat qo‘shilmay qolishining oldini olish uchun.
      </p>
      <Notice label="Telegram tomonida">
        Telegram’ning ochiq FAQ’ida faol obuna ustiga yangi muddat qo‘shilishi hujjatlanmagan. Texnik hujjatda esa
        sovg‘a kodini faol obuna paytida ishlatish «PREMIUM_SUB_ACTIVE_UNTIL» xatosi bilan rad etilishi yozilgan —
        kod saqlanib, muddat tugagach ishlatiladi. Shuning uchun «yangi Premium har doim qolgan kunlar ustiga
        qo‘shiladi» degan fikrga tayanmang; foydalanayotgan xizmatingizning qoidasiga qarang.
      </Notice>

      <h2 id="holatlar">«Uzaytirish» qaysi holatda nimani anglatadi</h2>
      <CompareTable
        headers={["Holat", "Nima qilish kerak"]}
        rows={[
          [<strong key="a">Premium faol, StarsPaymee’dan yana muddat olmoqchisiz</strong>, "Joriy obuna tugashini kuting, keyin buyurtma bering"],
          [<strong key="b">Premium tugagan, yana foydalanmoqchisiz</strong>, "Botda yangi muddatga buyurtma bering — bir necha soniyada faollashadi"],
          [<strong key="c">Obuna App Store, Google Play yoki @PremiumBot orqali</strong>, "O‘sha provayderda avtomatik yangilanish holatini tekshiring"],
          [<strong key="d">Premium sovg‘asi yoki kodi keldi</strong>, "Faol obuna paytida faollashtirilmaydi — kodni saqlang, muddat tugagach ishlating"],
          [<strong key="e">Premium bor odamga sovg‘a qilmoqchisiz</strong>, "Uning obunasi tugashini kuting yoki boshqa sovg‘a tanlang"],
        ]}
      />
      <p>
        Avtomatik to‘lovli obunani boshqarish bilan StarsPaymee’da yangi buyurtma berish — ikki xil jarayon. Telegram
        FAQ’iga ko‘ra obuna uni sotib olgan provayder orqali boshqariladi, avtomatik yangilanishni bekor qilish esa
        joriy to‘langan davrni darhol tugatmaydi — kirish davr oxirigacha saqlanadi. Qanday o‘chiriladi —{" "}
        <Link href="/blog/telegram-premium-avtotolovni-ochirish">avtoto‘lovni o‘chirish</Link>; boshqa odamga sovg‘a
        holatlari — <Link href="/blog/premium-bor-odamga-premium-sovga">Premium bor odamga Premium</Link>.
      </p>

      <h2 id="tekshirish">Qachon tugashini bilish</h2>
      <InfoGrid>
        <InfoCard emoji="📱" title="Telegram ilovasida">
          Sozlamalar → Telegram Premium — obuna holati va muddati shu yerda. Bo‘lim nomlari ilova tili va versiyasiga
          qarab farq qiladi.
        </InfoCard>
        <InfoCard emoji="🧾" title="StarsPaymee’da olgan bo‘lsangiz">
          Botdagi «Buyurtmalarim»da buyurtma sanasi va muddati bor: tugash = faollashgan sana + tanlangan oylar.
        </InfoCard>
        <InfoCard emoji="🍎" title="App Store yoki Google Play">
          Apple ID → Obunalar yoki Google Play → To‘lovlar va obunalar — yangilanish sanasi va holati.
        </InfoCard>
        <InfoCard emoji="⏰" title="Eslatma qo‘ying">
          Sanani topgach kalendarga «Premium holatini tekshirish va yangi muddat tanlash» deb yozing; aniq vaqt
          bo‘lsa, uni ham.
        </InfoCard>
      </InfoGrid>
      <p>
        Sanani topishning barcha yo‘llari va rozetka belgisi haqida —{" "}
        <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">Premium qachon tugashini bilish</Link>. Muddat
        tugaganda ma’lumotlar yo‘qolmasligi haqida —{" "}
        <Link href="/blog/telegram-premium-tugasa-nima-boladi">Premium tugasa nima bo‘ladi</Link>.
      </p>

      <h2 id="muddat">Tugagach necha oylik olish ma’qul</h2>
      <p>
        Tanlovni Premium’dan qancha foydalanishingizga qarab qiling. Uzoq paketning foydasi oddiy formula bilan
        ko‘rinadi: <b>oyiga xarajat = paket narxi ÷ oylar soni</b>. Jadvalda karta o‘tkazmasi narxi; Click, Payme,
        Uzum yoki Paynet tanlansa, yakuniy summa botda ko‘rsatiladi.
      </p>
      <PlanTable locale="uz" />
      <p>
        Uzoq muddatni faqat chegirma uchun emas, undan haqiqatan foydalanishingizni hisobga olib tanlang. Joriy
        narxlar — <Link href="/premium">Telegram Premium sahifasida</Link>.
      </p>

      <h2 id="qayta">Qayta olish: 7 qadam</h2>
      <Steps>
        <Step title="1. Joriy obuna tugaganini tekshiring">
          Sozlamalar → Telegram Premium. Faol bo‘lsa, bot buyurtmani qabul qilmaydi.
        </Step>
        <Step title="2. Botni oching">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → Premium bo‘limi.
        </Step>
        <Step title="3. Muddatni tanlang">3, 6 yoki 12 oy — yuqoridagi jadvalga qarab.</Step>
        <Step title="4. Username’ni kiriting">
          O‘zingiz uchun — «O‘zim» tugmasi; boshqa akkaunt uchun — uning @username’i. Parol va kod kerak emas.
        </Step>
        <Step title="5. Ma’lumotlarni tekshiring">
          Bot qabul qiluvchining ismi va rasmini ko‘rsatadi — aynan kerakli akkaunt ekaniga ishonch hosil qiling.
        </Step>
        <Step title="6. To‘lang">
          UzCard/HUMO o‘tkazma, Click, Payme, Uzum yoki Paynet — summa to‘lovdan oldin ko‘rinadi.
        </Step>
        <Step title="7. Faollashuvni tekshiring">
          To‘lov tasdiqlangach Premium bir necha soniyada yoqiladi; «Buyurtmalarim»da «yetkazildi» holati.
        </Step>
      </Steps>
      <Notice label="Bot «allaqachon Premium mavjud» desa">
        Obuna haqiqatan tugagan deb hisoblasangiz, Sozlamalar → Telegram Premium’ni qayta oching va bir necha daqiqa
        kutib yana urinib ko‘ring. Holat o‘zgarmasa, qayta-qayta buyurtma berish o‘rniga @StarsPaymeeSupport ga
        yozing.
      </Notice>
      <InlineCta text="Obuna tugadimi? 3, 6 yoki 12 oy — so‘mda, username bilan, bir necha soniyada." product={{ kind: "premium", months: 6 }} />

      <h2 id="oldindan">Tugashidan oldin nima qilsa bo‘ladi</h2>
      <KeyFacts label="Tayyorgarlik — buyurtmasiz">
        <li>Tugash sanasini aniqlang va eslatma qo‘ying.</li>
        <li>3, 6 va 12 oylik variantlarni oyiga xarajat bo‘yicha solishtiring.</li>
        <li>Xarid uchun budjet ajrating.</li>
        <li>Avvalgi provayderdagi avtomatik yangilanish holatini tekshiring — ikki marta to‘lab qo‘ymaslik uchun.</li>
      </KeyFacts>
      <p>
        Bu ishlar keyingi buyurtmani o‘z vaqtida berishga yordam beradi, lekin obuna muddatini o‘z-o‘zidan
        uzaytirmaydi. Bugungi buyurtma kelajakdagi sanada avtomatik faollashadi deb hisoblamang — StarsPaymee’da
        bunday «kechiktirilgan faollashtirish» yo‘q.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: SRC.faq, label: "Telegram Premium FAQ", note: "obuna provayder orqali boshqariladi; bekor qilinganda kirish davr oxirigacha saqlanadi" },
          { href: SRC.api, label: "Telegram API — payments.applyGiftCode", note: "faol obuna paytida sovg‘a kodi: PREMIUM_SUB_ACTIVE_UNTIL xatosi" },
          { href: "/premium", label: "StarsPaymee — Telegram Premium", note: "muddatlar va narxlar" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      <b>Через StarsPaymee — нет:</b> добавить ещё 3, 6 или 12 месяцев поверх активного Premium нельзя. Если при
      вводе username на аккаунте Premium активен, бот не открывает заказ и сообщает, что у пользователя уже есть
      Telegram Premium. Когда текущая подписка закончится, вы покупаете новый срок — он включается через несколько
      секунд после оплаты. Если пользуетесь постоянно, в следующий раз выберите 6 или 12 месяцев: в месяц дешевле и
      покупать заново придётся реже.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#savol", label: "До конца неделя — можно ли добавить 3 месяца сейчас?" },
          { href: "#nega", label: "Почему срок не добавляется поверх активного Premium" },
          { href: "#holatlar", label: "Что значит «продлить» в разных ситуациях" },
          { href: "#tekshirish", label: "Как узнать, когда заканчивается" },
          { href: "#muddat", label: "На сколько месяцев брать после окончания" },
          { href: "#qayta", label: "Покупка заново: 7 шагов" },
          { href: "#oldindan", label: "Что можно сделать до окончания" },
        ]}
      />

      <h2 id="savol">До конца неделя — можно ли добавить 3 месяца сейчас?</h2>
      <p>
        Например, ваш Premium заканчивается 10 ноября, сегодня 3 ноября. Вы хотите купить 3 месяца сейчас и продлить
        срок до февраля. В StarsPaymee так не получится: пока на аккаунте Premium активен, бот не принимает заказ —
        будь до конца семь дней, один день или несколько часов. Сначала заканчивается текущая подписка, потом
        покупается новая.
      </p>
      <KeyFacts label="Правило коротко">
        <li>
          <b>Поверх активного Premium срок не добавляется</b> — бот останавливается на проверке username.
        </li>
        <li>
          <b>Оставшиеся дни не переносятся</b> в новый пакет — используйте их, потом берите новый.
        </li>
        <li>
          <b>Заказывайте в день окончания</b> — активация через несколько секунд после оплаты, перерыва почти нет.
        </li>
        <li>
          <b>Подарок другому человеку</b> подчиняется тому же правилу — заказ для аккаунта с Premium не открывается.
        </li>
      </KeyFacts>

      <h2 id="nega">Почему срок не добавляется поверх активного Premium</h2>
      <p>
        Покупку Premium легко сравнить с пополнением телефона — «добавлю месяцы, общий срок вырастет». Но срок Premium
        ведётся на стороне Telegram как одна подписка, и «добавление» нового срока к активной подписке работает не
        одинаково во всех способах. StarsPaymee проверяет аккаунт до открытия заказа и останавливает покупку, если
        Premium активен — чтобы вы не заплатили за срок, который не добавится.
      </p>
      <Notice label="На стороне Telegram">
        В открытом FAQ Telegram добавление нового срока поверх активной подписки не описано. В технической
        документации же сказано, что активация подарочного кода при действующей подписке отклоняется с ошибкой
        «PREMIUM_SUB_ACTIVE_UNTIL» — код сохраняется и используется после окончания срока. Поэтому не рассчитывайте,
        что «новый Premium всегда добавится к оставшимся дням»; смотрите правила того сервиса, которым пользуетесь.
      </Notice>

      <h2 id="holatlar">Что значит «продлить» в разных ситуациях</h2>
      <CompareTable
        headers={["Ситуация", "Что делать"]}
        rows={[
          [<strong key="a">Premium активен, хотите ещё срок через StarsPaymee</strong>, "Дождитесь окончания текущей подписки, затем оформите заказ"],
          [<strong key="b">Premium закончился, хотите пользоваться дальше</strong>, "Закажите новый срок в боте — включится через несколько секунд"],
          [<strong key="c">Подписка через App Store, Google Play или @PremiumBot</strong>, "Проверьте статус автопродления у этого провайдера"],
          [<strong key="d">Пришёл подарок или код Premium</strong>, "При активной подписке не активируется — сохраните код и используйте после окончания"],
          [<strong key="e">Хотите подарить Premium тому, у кого он есть</strong>, "Дождитесь окончания его подписки или выберите другой подарок"],
        ]}
      />
      <p>
        Управление подпиской с автоплатежом и новый заказ в StarsPaymee — разные процессы. По Telegram FAQ подписка
        управляется через провайдера, у которого куплена, а отмена автопродления не прекращает текущий оплаченный
        период — доступ сохраняется до его конца. Как отключить —{" "}
        <Link href="/blog/telegram-premium-avtotolovni-ochirish">отключение автоплатежа</Link>; случаи с подарком
        другому человеку — <Link href="/blog/premium-bor-odamga-premium-sovga">Premium тому, у кого он уже есть</Link>.
      </p>

      <h2 id="tekshirish">Как узнать, когда заканчивается</h2>
      <InfoGrid>
        <InfoCard emoji="📱" title="В приложении Telegram">
          Настройки → Telegram Premium — статус и срок подписки здесь. Названия разделов зависят от языка и версии
          приложения.
        </InfoCard>
        <InfoCard emoji="🧾" title="Если покупали в StarsPaymee">
          В «Моих заказах» в боте есть дата и срок заказа: окончание = дата активации + выбранные месяцы.
        </InfoCard>
        <InfoCard emoji="🍎" title="App Store или Google Play">
          Apple ID → Подписки или Google Play → Платежи и подписки — дата продления и статус.
        </InfoCard>
        <InfoCard emoji="⏰" title="Поставьте напоминание">
          Найдя дату, запишите в календарь: «Проверить статус Premium и выбрать новый срок»; если известно точное
          время — укажите и его.
        </InfoCard>
      </InfoGrid>
      <p>
        Все способы узнать дату и значок подписки —{" "}
        <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">когда заканчивается Premium</Link>. О том, что
        данные не пропадают после окончания —{" "}
        <Link href="/blog/telegram-premium-tugasa-nima-boladi">что будет, когда Premium закончится</Link>.
      </p>

      <h2 id="muddat">На сколько месяцев брать после окончания</h2>
      <p>
        Выбирайте по тому, сколько вы пользуетесь Premium. Выгода длинного пакета видна по простой формуле:{" "}
        <b>расход в месяц = цена пакета ÷ число месяцев</b>. В таблице цена при переводе на карту; при выборе Click,
        Payme, Uzum или Paynet итоговая сумма показывается в боте.
      </p>
      <PlanTable locale="ru" />
      <p>
        Берите длинный срок не ради скидки, а если действительно будете пользоваться. Актуальные цены — на{" "}
        <Link href="/premium">странице Telegram Premium</Link>.
      </p>

      <h2 id="qayta">Покупка заново: 7 шагов</h2>
      <Steps>
        <Step title="1. Убедитесь, что текущая подписка закончилась">
          Настройки → Telegram Premium. Если активна, бот заказ не примет.
        </Step>
        <Step title="2. Откройте бота">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → раздел Premium.
        </Step>
        <Step title="3. Выберите срок">3, 6 или 12 месяцев — по таблице выше.</Step>
        <Step title="4. Введите username">
          Для себя — кнопка «Я»; для другого аккаунта — его @username. Пароль и код не нужны.
        </Step>
        <Step title="5. Проверьте данные">
          Бот показывает имя и фото получателя — убедитесь, что это нужный аккаунт.
        </Step>
        <Step title="6. Оплатите">
          Перевод UzCard/HUMO, Click, Payme, Uzum или Paynet — сумма видна до оплаты.
        </Step>
        <Step title="7. Проверьте активацию">
          После подтверждения оплаты Premium включается за несколько секунд; в «Моих заказах» — статус «доставлено».
        </Step>
      </Steps>
      <Notice label="Если бот пишет, что Premium уже есть">
        Если вы уверены, что подписка закончилась, заново откройте Настройки → Telegram Premium и попробуйте через
        несколько минут. Если статус не меняется, вместо повторных заказов напишите в @StarsPaymeeSupport.
      </Notice>
      <InlineCta text="Подписка закончилась? 3, 6 или 12 месяцев — в сумах, по username, за несколько секунд." product={{ kind: "premium", months: 6 }} />

      <h2 id="oldindan">Что можно сделать до окончания</h2>
      <KeyFacts label="Подготовка — без заказа">
        <li>Узнайте дату окончания и поставьте напоминание.</li>
        <li>Сравните 3, 6 и 12 месяцев по расходу в месяц.</li>
        <li>Отложите бюджет на покупку.</li>
        <li>Проверьте статус автопродления у прежнего провайдера — чтобы не заплатить дважды.</li>
      </KeyFacts>
      <p>
        Это поможет оформить следующий заказ вовремя, но само по себе срок подписки не продлевает. Не считайте, что
        сегодняшний заказ автоматически активируется в будущую дату — «отложенной активации» в StarsPaymee нет.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: SRC.faq, label: "Telegram Premium FAQ", note: "подписка управляется через провайдера; при отмене доступ сохраняется до конца периода" },
          { href: SRC.api, label: "Telegram API — payments.applyGiftCode", note: "подарочный код при активной подписке: ошибка PREMIUM_SUB_ACTIVE_UNTIL" },
          { href: "/premium", label: "StarsPaymee — Telegram Premium", note: "сроки и цены" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      <b>Through StarsPaymee — no:</b> you cannot add another 3, 6 or 12 months on top of an active Premium. If Premium
      is active on the account when you enter the username, the bot does not open the order and says the user already
      has Telegram Premium. Once the current subscription ends, you buy a new term — it switches on within seconds of
      payment. If you use Premium all the time, pick 6 or 12 months next time: cheaper per month and fewer repeat
      purchases.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#savol", label: "A week left — can I add 3 months now?" },
          { href: "#nega", label: "Why a term is not added on top of active Premium" },
          { href: "#holatlar", label: "What “extending” means in each situation" },
          { href: "#tekshirish", label: "Finding out when it ends" },
          { href: "#muddat", label: "How many months to buy after it ends" },
          { href: "#qayta", label: "Buying again: 7 steps" },
          { href: "#oldindan", label: "What you can do before it ends" },
        ]}
      />

      <h2 id="savol">A week left — can I add 3 months now?</h2>
      <p>
        Say your Premium ends on 10 November and today is 3 November. You want to buy 3 months now and stretch the
        term to February. At StarsPaymee that does not work: while Premium is active on your account, the bot does not
        accept the order — whether seven days, one day or a few hours remain. The current subscription ends first,
        then the new one is bought.
      </p>
      <KeyFacts label="The rule in short">
        <li>
          <b>A term is not added on top of active Premium</b> — the bot stops at the username check.
        </li>
        <li>
          <b>Remaining days are not carried over</b> to a new plan — use them up, then buy the new one.
        </li>
        <li>
          <b>Order on the day it ends</b> — activation takes seconds after payment, so there is almost no gap.
        </li>
        <li>
          <b>A gift for someone else</b> follows the same rule — no order opens for an account that has Premium.
        </li>
      </KeyFacts>

      <h2 id="nega">Why a term is not added on top of active Premium</h2>
      <p>
        It is tempting to treat a Premium purchase like a phone top-up — “add months and the total grows”. But the
        Premium term is kept on Telegram’s side as one subscription, and “adding” a new term to an active one does not
        work the same way everywhere. StarsPaymee checks the account before opening an order and stops the purchase
        if Premium is active — so you do not pay for a term that would not be added.
      </p>
      <Notice label="On Telegram’s side">
        Telegram’s public FAQ does not document adding a new term on top of an active subscription. The technical
        documentation does say that applying a gift code during an active subscription is rejected with the
        “PREMIUM_SUB_ACTIVE_UNTIL” error — the code is kept and used after the term ends. So do not rely on “new
        Premium always stacks on the remaining days”; check the rules of the service you use.
      </Notice>

      <h2 id="holatlar">What “extending” means in each situation</h2>
      <CompareTable
        headers={["Situation", "What to do"]}
        rows={[
          [<strong key="a">Premium is active and you want more time via StarsPaymee</strong>, "Wait for the current subscription to end, then order"],
          [<strong key="b">Premium has ended and you want to continue</strong>, "Order a new term in the bot — it switches on within seconds"],
          [<strong key="c">Subscribed via the App Store, Google Play or @PremiumBot</strong>, "Check the auto-renewal status with that provider"],
          [<strong key="d">A Premium gift or code arrived</strong>, "It cannot be activated during an active subscription — keep the code and use it after the term ends"],
          [<strong key="e">You want to gift Premium to someone who has it</strong>, "Wait for their subscription to end, or pick a different gift"],
        ]}
      />
      <p>
        Managing an auto-renewing subscription and placing a new order at StarsPaymee are two different processes.
        According to the Telegram FAQ a subscription is managed through the provider it was bought from, and cancelling
        auto-renewal does not end the current paid period — access stays until it ends. How to turn it off —{" "}
        <Link href="/blog/telegram-premium-avtotolovni-ochirish">turning off auto-renewal</Link>; gifting to someone
        else — <Link href="/blog/premium-bor-odamga-premium-sovga">Premium for someone who already has it</Link>.
      </p>

      <h2 id="tekshirish">Finding out when it ends</h2>
      <InfoGrid>
        <InfoCard emoji="📱" title="In the Telegram app">
          Settings → Telegram Premium — the subscription status and term are there. Section names vary with the app
          language and version.
        </InfoCard>
        <InfoCard emoji="🧾" title="If you bought at StarsPaymee">
          “My orders” in the bot shows the order date and term: the end = the activation date + the months chosen.
        </InfoCard>
        <InfoCard emoji="🍎" title="App Store or Google Play">
          Apple ID → Subscriptions, or Google Play → Payments and subscriptions — the renewal date and status.
        </InfoCard>
        <InfoCard emoji="⏰" title="Set a reminder">
          Once you have the date, put “Check Premium status and choose a new term” in your calendar; add the exact
          time if known.
        </InfoCard>
      </InfoGrid>
      <p>
        All the ways to find the date, and the badge —{" "}
        <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">when Premium ends</Link>. On your data staying
        safe after expiry — <Link href="/blog/telegram-premium-tugasa-nima-boladi">what happens when Premium ends</Link>.
      </p>

      <h2 id="muddat">How many months to buy after it ends</h2>
      <p>
        Choose by how much you use Premium. The value of a long plan shows in a simple formula:{" "}
        <b>cost per month = plan price ÷ number of months</b>. The table shows the card-transfer price; with Click,
        Payme, Uzum or Paynet the final amount is shown in the bot.
      </p>
      <PlanTable locale="en" />
      <p>
        Pick a long term because you will really use it, not just for the discount. Current prices — on the{" "}
        <Link href="/premium">Telegram Premium page</Link>.
      </p>

      <h2 id="qayta">Buying again: 7 steps</h2>
      <Steps>
        <Step title="1. Make sure the current subscription has ended">
          Settings → Telegram Premium. If it is active, the bot will not accept the order.
        </Step>
        <Step title="2. Open the bot">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → the Premium section.
        </Step>
        <Step title="3. Choose the term">3, 6 or 12 months — see the table above.</Step>
        <Step title="4. Enter the username">
          For yourself — the “Me” button; for another account — its @username. No password or code.
        </Step>
        <Step title="5. Check the details">
          The bot shows the recipient’s name and photo — make sure it is the right account.
        </Step>
        <Step title="6. Pay">
          UzCard/HUMO transfer, Click, Payme, Uzum or Paynet — the total shows before you pay.
        </Step>
        <Step title="7. Check activation">
          Once the payment is confirmed, Premium switches on within seconds; “My orders” shows “delivered”.
        </Step>
      </Steps>
      <Notice label="If the bot says Premium is already active">
        If you are sure the subscription has ended, reopen Settings → Telegram Premium and try again in a few
        minutes. If the status does not change, write to @StarsPaymeeSupport instead of ordering repeatedly.
      </Notice>
      <InlineCta text="Subscription ended? 3, 6 or 12 months — in som, by username, within seconds." product={{ kind: "premium", months: 6 }} />

      <h2 id="oldindan">What you can do before it ends</h2>
      <KeyFacts label="Preparation — without ordering">
        <li>Find the end date and set a reminder.</li>
        <li>Compare 3, 6 and 12 months by cost per month.</li>
        <li>Set aside the budget.</li>
        <li>Check the auto-renewal status with your previous provider — so you do not pay twice.</li>
      </KeyFacts>
      <p>
        This helps you place the next order on time, but it does not extend the subscription by itself. Do not assume
        an order placed today activates automatically on a future date — StarsPaymee has no “deferred activation”.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: SRC.faq, label: "Telegram Premium FAQ", note: "subscriptions are managed through the provider; after cancelling, access stays until the period ends" },
          { href: SRC.api, label: "Telegram API — payments.applyGiftCode", note: "a gift code during an active subscription: the PREMIUM_SUB_ACTIVE_UNTIL error" },
          { href: "/premium", label: "StarsPaymee — Telegram Premium", note: "terms and prices" },
        ]}
      />
    </>
  );
}

const faqUz = [
  {
    question: "Telegram Premium muddatini uzaytirish mumkinmi?",
    answer:
      "Premium’dan foydalanishni davom ettirish mumkin, lekin StarsPaymee orqali faol obuna ustiga qo‘shimcha oylar qo‘shilmaydi: bot Premium bor akkauntga buyurtma ochmaydi. Mavjud muddat tugagach yangi Premium olinadi.",
  },
  {
    question: "Premiumim tugashiga bir hafta qoldi. Hozirdan yana 3 oy olsam bo‘ladimi?",
    answer:
      "StarsPaymee orqali — yo‘q. Qolgan bir haftaning ustiga hozirdan uch oy qo‘sha olmaysiz: avval joriy Premium tugaydi, keyin yangi buyurtma berasiz.",
  },
  {
    question: "Tugashiga bir kun qolsa ham kutish kerakmi?",
    answer: "Ha. Bot username tekshiruvida akkauntda Premium faol ekanini ko‘rsa, buyurtmani qabul qilmaydi — muddat tugaguncha, hatto bir kun qolgan bo‘lsa ham.",
  },
  {
    question: "Qolgan kunlarimni yangi paketga o‘tkazish mumkinmi?",
    answer: "Yo‘q. Faol obunadagi qolgan kunlar yangi paketga qo‘shilmaydi va o‘tkazilmaydi — ulardan foydalanib bo‘ling, so‘ng yangi paket oling.",
  },
  {
    question: "Avtomatik yangilanishni o‘chirsam, Premium darhol tugaydimi?",
    answer: "Yo‘q. Telegram FAQ’iga ko‘ra, bekor qilganda kelajakdagi to‘lovlar to‘xtaydi, joriy to‘langan davr oxirigacha esa barcha imkoniyatlar saqlanadi.",
  },
  {
    question: "Premium sovg‘asi yoki kodi kelsa, faol obuna ustiga qo‘shiladimi?",
    answer:
      "Darhol emas: Telegram API’sida faol obuna paytida sovg‘a kodini ishlatish PREMIUM_SUB_ACTIVE_UNTIL xatosi bilan rad etiladi — kodni saqlab, muddat tugagach faollashtirasiz.",
  },
  {
    question: "Premium bor do‘stimga StarsPaymee’dan Premium olib bersam bo‘ladimi?",
    answer:
      "Uning obunasi faol ekan — yo‘q, bot buyurtmani ochmaydi. Obunasi tugagach olib bering yoki boshqa sovg‘a tanlang.",
  },
  {
    question: "Premium tugagach 3 oylikmi yoki 12 oylikmi olgan yaxshi?",
    answer: `Bir necha oy uchun kerak bo‘lsa — 3 oy (${fmt(PLANS[0].priceUzs, "uz")} so‘m). Doimiy foydalansangiz 6 yoki 12 oy qulayroq: 12 oyda oyiga ≈ ${fmt(Math.round(PLANS[2].priceUzs / 12), "uz")} so‘m. Umumiy narxni va oyiga xarajatni solishtiring.`,
  },
  {
    question: "Bot «allaqachon Premium mavjud» deyapti, lekin obunam tugagan — nima qilay?",
    answer:
      "Sozlamalar → Telegram Premium’ni qayta ochib tekshiring va bir necha daqiqadan keyin yana urinib ko‘ring. Holat o‘zgarmasa, qayta-qayta buyurtma bermasdan @StarsPaymeeSupport ga yozing.",
  },
  {
    question: "Qayerdan qayta Premium olsam bo‘ladi?",
    answer: "Saytdagi Telegram Premium sahifasi yoki @StarsPaymee_bot: joriy obuna tugagach, 3, 6 yoki 12 oyni tanlang — so‘mda, username bilan.",
  },
];

const faqRu = [
  {
    question: "Можно ли продлить Telegram Premium?",
    answer:
      "Пользоваться Premium дальше можно, но через StarsPaymee месяцы поверх активной подписки не добавляются: бот не открывает заказ для аккаунта с Premium. Новый Premium покупается после окончания текущего срока.",
  },
  {
    question: "До конца Premium неделя. Можно купить ещё 3 месяца сейчас?",
    answer: "Через StarsPaymee — нет. Добавить три месяца поверх оставшейся недели нельзя: сначала заканчивается текущий Premium, потом оформляется новый заказ.",
  },
  {
    question: "Нужно ли ждать, если остался один день?",
    answer: "Да. Если при проверке username бот видит активный Premium, заказ не принимается — до окончания срока, даже если остался один день.",
  },
  {
    question: "Можно ли перенести оставшиеся дни в новый пакет?",
    answer: "Нет. Оставшиеся дни активной подписки не добавляются и не переносятся в новый пакет — используйте их, затем берите новый пакет.",
  },
  {
    question: "Если отключить автопродление, Premium закончится сразу?",
    answer: "Нет. По Telegram FAQ при отмене прекращаются будущие платежи, а все возможности сохраняются до конца текущего оплаченного периода.",
  },
  {
    question: "Если пришёл подарок или код Premium, он добавится к активной подписке?",
    answer:
      "Не сразу: в API Telegram активация подарочного кода при действующей подписке отклоняется с ошибкой PREMIUM_SUB_ACTIVE_UNTIL — сохраните код и активируйте после окончания срока.",
  },
  {
    question: "Можно ли купить через StarsPaymee Premium другу, у которого он уже есть?",
    answer: "Пока его подписка активна — нет, бот не откроет заказ. Купите после окончания его подписки или выберите другой подарок.",
  },
  {
    question: "После окончания лучше взять 3 месяца или 12?",
    answer: `Если нужно на несколько месяцев — 3 месяца (${fmt(PLANS[0].priceUzs, "ru")} сум). При постоянном использовании удобнее 6 или 12: на 12 месяцев выходит ≈ ${fmt(Math.round(PLANS[2].priceUzs / 12), "ru")} сум в месяц. Сравните общую цену и расход в месяц.`,
  },
  {
    question: "Бот пишет «Premium уже есть», но подписка закончилась — что делать?",
    answer: "Заново откройте Настройки → Telegram Premium и попробуйте через несколько минут. Если статус не меняется, вместо повторных заказов напишите в @StarsPaymeeSupport.",
  },
  {
    question: "Где купить Premium заново?",
    answer: "На странице Telegram Premium на сайте или в @StarsPaymee_bot: когда текущая подписка закончится, выберите 3, 6 или 12 месяцев — в сумах, по username.",
  },
];

const faqEn = [
  {
    question: "Can Telegram Premium be extended?",
    answer:
      "You can keep using Premium, but through StarsPaymee months are not added on top of an active subscription: the bot does not open an order for an account that has Premium. A new Premium is bought after the current term ends.",
  },
  {
    question: "My Premium ends in a week. Can I buy 3 more months now?",
    answer: "Through StarsPaymee — no. You cannot add three months on top of the remaining week: the current Premium ends first, then you place a new order.",
  },
  {
    question: "Do I have to wait even if one day is left?",
    answer: "Yes. If the bot sees active Premium at the username check, the order is not accepted — until the term ends, even with one day left.",
  },
  {
    question: "Can my remaining days be carried over to a new plan?",
    answer: "No. The remaining days of an active subscription are not added or carried over to a new plan — use them up, then buy the new plan.",
  },
  {
    question: "If I turn off auto-renewal, does Premium end immediately?",
    answer: "No. According to the Telegram FAQ, cancelling stops future payments, and all features stay until the end of the current paid period.",
  },
  {
    question: "If a Premium gift or code arrives, is it added to my active subscription?",
    answer:
      "Not immediately: in Telegram’s API, applying a gift code during an active subscription is rejected with the PREMIUM_SUB_ACTIVE_UNTIL error — keep the code and activate it after the term ends.",
  },
  {
    question: "Can I buy Premium through StarsPaymee for a friend who already has it?",
    answer: "Not while their subscription is active — the bot will not open the order. Buy it once their subscription ends, or choose a different gift.",
  },
  {
    question: "After it ends, is 3 months or 12 months better?",
    answer: `For a few months — 3 months (${fmt(PLANS[0].priceUzs, "en")} som). For constant use, 6 or 12 is more convenient: 12 months works out at ≈ ${fmt(Math.round(PLANS[2].priceUzs / 12), "en")} som a month. Compare the total price and the cost per month.`,
  },
  {
    question: "The bot says Premium is already active, but my subscription has ended — what now?",
    answer: "Reopen Settings → Telegram Premium and try again in a few minutes. If the status does not change, write to @StarsPaymeeSupport instead of ordering repeatedly.",
  },
  {
    question: "Where do I buy Premium again?",
    answer: "On the Telegram Premium page of the site or in @StarsPaymee_bot: once the current subscription ends, choose 3, 6 or 12 months — in som, by username.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "info",
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
  keywords: [
    "telegram premium muddatini uzaytirish",
    "premium tugashidan oldin uzaytirish",
    "premium ustiga premium olish",
    "premium tugashiga bir hafta qoldi",
    "telegram premium qayta olish",
    "3 oylik premium qo‘shish",
    "продлить telegram premium",
    "premium поверх активной подписки",
    "extend telegram premium",
    "renew telegram premium early",
  ],
  howToSteps: [
    { name: "Joriy obuna tugaganini tekshiring", text: "Sozlamalar → Telegram Premium: faol bo‘lsa, bot buyurtmani qabul qilmaydi." },
    { name: "Botni oching", text: "@StarsPaymee_bot → Premium bo‘limi." },
    { name: "Muddatni tanlang", text: "3, 6 yoki 12 oy." },
    { name: "Username’ni kiriting", text: "O‘zingiz uchun «O‘zim», boshqa akkaunt uchun uning @username’i." },
    { name: "Ma’lumotlarni tekshiring", text: "Bot ko‘rsatgan ism va rasm kerakli akkauntga mos ekaniga ishonch hosil qiling." },
    { name: "To‘lang", text: "UzCard/HUMO o‘tkazma, Click, Payme, Uzum yoki Paynet." },
    { name: "Faollashuvni tekshiring", text: "To‘lovdan keyin bir necha soniyada Premium yoqiladi; «Buyurtmalarim»da «yetkazildi»." },
  ],
  locales: {
    uz: {
      title: "Telegram Premium muddatini uzaytirish mumkinmi? Tugashidan oldin bilishingiz kerak bo‘lganlar",
      excerpt:
        "Faol Premium ustiga qo‘shimcha oylar qo‘shiladimi? StarsPaymee’da — yo‘q: obuna tugashini kutish kerak. Tugash sanasi, qayta xarid tartibi va 3, 6 yoki 12 oylik muddatni tanlash haqida amaliy qo‘llanma.",
      metaTitle: "Telegram Premium muddatini uzaytirish mumkinmi?",
      metaDescription: "Telegram Premium tugashiga bir hafta qolsa, ustiga yana 3 oy qo‘shish mumkinmi? StarsPaymee’da qayta xarid tartibi va uzoq muddat tanlash bo‘yicha tavsiyalar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium tugadimi? Keyingi muddatni uzoqroq oling",
      ctaBody: "Amaldagi obunangiz tugagach 6 yoki 12 oylikni ko‘rib chiqing — oyiga arzonroq, qayta xarid kamroq. So‘mda, username bilan, bir necha soniyada.",
      faq: faqUz,
    },
    ru: {
      title: "Можно ли продлить Telegram Premium? Что нужно знать до окончания подписки",
      excerpt:
        "Добавляются ли месяцы поверх активного Premium? В StarsPaymee — нет: нужно дождаться окончания подписки. Дата окончания, порядок повторной покупки и выбор срока 3, 6 или 12 месяцев.",
      metaTitle: "Можно ли продлить Telegram Premium заранее?",
      metaDescription: "До конца Premium неделя — добавить 3 месяца сейчас? В StarsPaymee срок поверх активной подписки не добавляется: когда покупать снова и какой срок выбрать.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Premium закончился? Возьмите следующий срок длиннее",
      ctaBody: "Когда текущая подписка закончится, посмотрите 6 или 12 месяцев — дешевле в месяц и реже покупать заново. В сумах, по username, за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Can Telegram Premium be extended? What to know before it ends",
      excerpt:
        "Are months added on top of active Premium? At StarsPaymee — no: you wait for the subscription to end. The end date, how to buy again and choosing a 3, 6 or 12-month term.",
      metaTitle: "Can Telegram Premium be extended early?",
      metaDescription: "Can Telegram Premium be extended early? At StarsPaymee a term is not added on top of an active subscription: when to buy again and which term to choose.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Premium ended? Take a longer term next",
      ctaBody: "Once the current subscription ends, consider 6 or 12 months — cheaper per month and fewer repeat purchases. In som, by username, within seconds.",
      faq: faqEn,
    },
  },
};
