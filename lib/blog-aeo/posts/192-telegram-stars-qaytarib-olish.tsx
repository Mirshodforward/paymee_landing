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

const SLUG = "telegram-stars-qaytarib-olish";

/**
 * Telegram Stars'ni qaytarib olish mumkinmi — Telegram'ning o'z refund qoidalari.
 *
 * NEGA ALOHIDA SAHIFA (2026-10-23): «stars qaytarib olish», «telegram stars refund»,
 * «возврат stars» — Telegram ICHIDA sarflangan yoki tasodifan olingan Stars haqida
 * niyat. Saytda yo'q edi. Yaqin postlar boshqa niyatda va TAKRORLANMAYDI:
 *   09 — StarsPaymee'dan olingan Stars KELMADI (yetkazish muammosi) → havola;
 *   165 — pullik xabar (qabul qiluvchi qaytarishi) → havola;
 *   48 — sovg'ani Stars'ga convert → havola; 52 — dasturchilar (refundStarPayment) → havola;
 *   33 — Premium obunani bekor qilish → havola; 186 — xato username → havola.
 *
 * FAKTLAR TEKSHIRILGAN (2026-10-23):
 * - telegram.org/tos/stars §3: «All sales of Telegram Stars are final… does not issue
 *   refunds for unwanted or unintentional purchases»; akkaunt o'chsa balans forfeit.
 *   §3.1: bot/mini app yetkazmasa dasturchi «at no penalty» qaytaradi; /paysupport →
 *   Settings > Your Stars → tranzaksiya ID → shikoyat (t.me/BotFather?start=starsdispute).
 *   §2.2/3.2/5: Apple/Google refund → Telegram Stars'ni yechishi, tovarlar yo'qolishi.
 *   §6.5: pullik xabar — qabul qiluvchi 85% oladi, istasa to'liq qaytaradi.
 * - core.telegram.org/bots/payments-stars: bot /paysupport'ga javob berishi shart,
 *   nizolar dasturchi mas'uliyati, refundStarPayment + telegram_payment_charge_id.
 * - core.telegram.org/api/auctions: bid qaytarib olinmaydi; chetlatilsa qaytadi;
 *   oxirida qolgan bidlar avtomatik qaytadi.
 * - core.telegram.org/api/gifts: xarid taklifi Stars'ni rezerv qiladi (6–72 soat);
 *   rad etilsa/muddati tugasa «full payment is instantly refunded».
 * Dasturchi javob muddati shartlarda YO'Q — «amaliy tavsiya» deb yozilgan.
 * StarsPaymee qoidasi — /stars FAQ va oferta: yetkazilgan Stars qaytarilmaydi,
 * texnik sabab bilan yetkazilmasa to'liq, o'sha usulda.
 */

const DISPUTE_URL = "https://t.me/BotFather?start=starsdispute";
const SRC = {
  tos: "https://telegram.org/tos/stars",
  bots: "https://core.telegram.org/bots/payments-stars",
  gifts: "https://core.telegram.org/api/gifts",
  auctions: "https://core.telegram.org/api/auctions",
};

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Odatda <b>yo‘q</b>: Telegram Stars shartlariga ko‘ra Stars sotuvi yakuniy, tasodifiy yoki keraksiz xarid uchun
      Telegram pul qaytarmaydi. Istisnolar bor: bot yoki Mini App xaridni yetkazmasa, dasturchi Stars’ni jarimasiz
      qaytaradi (/paysupport → shikoyat); pullik xabarni qabul qiluvchi qaytarishi mumkin; sovg‘a auksionidagi
      yutqazgan taklif va rad etilgan xarid taklifi avtomatik qaytadi. Yetkazilgan Stars pulga aylantirilmaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#qoida", label: "Asosiy qoida: Stars sotuvi yakuniy" },
          { href: "#jadval", label: "Holatlar jadvali — qaytadimi?" },
          { href: "#bot", label: "Holat 1. Bot yetkazmadi — /paysupport tartibi" },
          { href: "#fikr", label: "Holat 2. Fikringizdan qaytdingiz" },
          { href: "#xabar", label: "Holat 3. Pullik xabar" },
          { href: "#sovga", label: "Holat 4. Sovg‘a auksioni va xarid taklifi" },
          { href: "#obuna", label: "Holat 5. Obunalar" },
          { href: "#dokon", label: "Apple yoki Google’dan refund — nega xavfli" },
          { href: "#starspaymee", label: "StarsPaymee orqali olingan Stars" },
          { href: "#dasturchi", label: "Dasturchilar uchun eslatma" },
        ]}
      />

      <h2 id="qoida">Asosiy qoida: Stars sotuvi yakuniy</h2>
      <p>
        Telegram Stars shartlarining 3-bo‘limida aniq yozilgan: <b>«All sales of Telegram Stars are final»</b> — Telegram
        keraksiz yoki tasodifiy Stars xaridi uchun pul qaytarmaydi. Lekin bu «hech qachon qaytmaydi» degani emas:
        Stars’ni Telegram ichida <b>sarflaganingizda</b> qaytarish ko‘pincha sotuvchining — bot dasturchisi yoki xabar
        qabul qiluvchining — qo‘lida, ba’zi holatlarda esa avtomatik.
      </p>
      <KeyFacts label="Bilib qo‘ying">
        <li>
          <b>Telegram pul qaytarmaydi</b> — Stars tasodifan yoki ko‘p olingan bo‘lsa ham (shartlar, 3-bo‘lim).
        </li>
        <li>
          <b>Qaytarish Stars sifatida</b> — balansga tushadi, kartaga pul sifatida emas.
        </li>
        <li>
          <b>Pulga chiqarish yo‘q</b> — oddiy foydalanuvchi Stars’ni sotolmaydi va boshqa akkauntga o‘tkazolmaydi.
        </li>
        <li>
          <b>Akkaunt o‘chirilsa yoki kirish yo‘qolsa</b> — qolgan balans yonadi, Telegram qoplamaydi.
        </li>
        <li>
          <b>Sotib olingan Stars’ning amal muddati yo‘q</b> — balansda turadi (kreatorlarning mukofot Stars’i bundan
          mustasno — 3 yil).
        </li>
      </KeyFacts>

      <h2 id="jadval">Holatlar jadvali — qaytadimi?</h2>
      <CompareTable
        headers={["Holat", "Qaytadimi?", "Kim va qanday"]}
        rows={[
          [<strong key="a">Bot yoki Mini App xaridni yetkazmadi</strong>, "Ha", "Dasturchi — /paysupport; rad etsa, tranzaksiya ID bilan Telegram’ga shikoyat"],
          [<strong key="b">Xarid yetkazildi, fikringizdan qaytdingiz</strong>, "Odatda yo‘q", "Faqat dasturchi o‘z ixtiyori bilan"],
          [<strong key="c">Pullik xabar yubordingiz</strong>, "Qabul qiluvchi ixtiyorida", "U to‘liq summani bir bosishda qaytarishi mumkin"],
          [<strong key="d">Sovg‘a auksionida yutqazdingiz yoki chetlatildingiz</strong>, "Ha, avtomatik", "Telegram — bid chetlatilganda yoki barcha sovg‘alar tarqatilgach"],
          [<strong key="e">Sovg‘a xarid taklifi rad etildi yoki muddati tugadi</strong>, "Ha, darhol", "Telegram — rezerv qilingan Stars avtomatik qaytadi"],
          [<strong key="f">Kanal yoki bot obunasi</strong>, "Yo‘q", "Bekor qilish faqat keyingi yangilanishni to‘xtatadi"],
          [<strong key="g">Sovg‘a yubordingiz</strong>, "Yo‘q", "Qabul qiluvchi uni Stars’ga convert qilishi mumkin — asl narxdan kam"],
          [<strong key="h">Stars sotib oldingiz (App Store, Google Play, Fragment, reseller)</strong>, "Yo‘q", "Yetkazilgach yakuniy; do‘kon refundi — xavfli (quyida)"],
          [<strong key="i">Reseller’ga to‘ladingiz, Stars kelmadi</strong>, "Ha — texnik sabab bo‘lsa", "Sotuvchi — StarsPaymee’da to‘liq, to‘lagan usulingizda"],
        ]}
      />

      <h2 id="bot">Holat 1. Bot yoki Mini App yetkazmadi — /paysupport tartibi</h2>
      <p>
        Shartlarning 3.1-bandi: bot yoki Mini App xaridni <b>reklama qilinganidek va kelishilgan muddatda</b> yetkazmasa,
        dasturchi Stars’ni jarimasiz qaytara oladi. Telegram har bir to‘lov qabul qiladigan botdan /paysupport
        buyrug‘iga javob berishni talab qiladi — nizoni hal qilish dasturchining mas’uliyati.
      </p>
      <Steps>
        <Step title="1. Botga /paysupport yuboring">
          Qisqa yozing: nima sotib oldingiz, qachon, nima kelmadi. To‘lov xabari va bot javobining skrinshotini
          saqlang.
        </Step>
        <Step title="2. Tranzaksiya ID’ni oling">
          Javob yo‘q yoki asosli qaytarish rad etilsa: Sozlamalar → «Mening yulduzlarim» (My Stars) → tranzaksiyani
          oching → ID’ni nusxalang.
        </Step>
        <Step title="3. Telegram’ga shikoyat yuboring">
          Shartlardagi rasmiy manzil —{" "}
          <a href={DISPUTE_URL} target="_blank" rel="noopener noreferrer">
            @BotFather’dagi «starsdispute» shakli
          </a>
          . Tranzaksiya ID, bot nomi, sana va summani yozing.
        </Step>
      </Steps>
      <Notice label="Amaliy tavsiya">
        Shartlarda dasturchiga javob uchun aniq muddat yo‘q — «kelishilgan muddat» botning o‘z shartlarida. Bir-ikki
        ish kuni kuting, keyin shikoyat qiling. Qaytarilgan Stars balansga Stars sifatida tushadi.
      </Notice>

      <h2 id="fikr">Holat 2. Fikringizdan qaytdingiz</h2>
      <p>
        Mahsulot to‘g‘ri yetkazilgan bo‘lsa, Telegram tasodifiy xarid uchun pul qaytarmaydi — bu umumiy qoida. Faqat
        dasturchi o‘z ixtiyori bilan qaytarishi mumkin: /paysupport orqali xushmuomala so‘rab ko‘ring, lekin talab
        qila olmaysiz. Mini App’da «Tasdiqlash» bosilgan zahoti Stars yechiladi — narx va nimani olayotganingizni
        shundan oldin tekshiring.
      </p>

      <h2 id="xabar">Holat 3. Pullik xabar</h2>
      <p>
        Pullik xabarlar yoqilgan chatda yuborilgan Stars’ning 85% qabul qiluvchiga tushadi. Shartlarning 6.5-bandiga
        ko‘ra qabul qiluvchi <b>istasa</b>, xabar uchun to‘langan Stars’ni to‘liq qaytarishi mumkin — Telegram uni
        majburlamaydi, avtomatik qaytarish yo‘q. Nega Telegram xabar uchun Stars so‘raydi va buni qanday sozlash
        mumkin — <Link href="/blog/telegram-xabar-yuborish-stars">alohida maqolada</Link>.
      </p>

      <h2 id="sovga">Holat 4. Sovg‘a auksioni va xarid taklifi</h2>
      <InfoGrid>
        <InfoCard emoji="🔨" title="Auksion">
          Qo‘yilgan bid qaytarib olinmaydi («a placed bid cannot be retracted»). Lekin bid yetakchi o‘rinlardan
          chetlatilsa, Stars sizga qaytadi va qatnashish uchun yangi bid kerak; auksion tugab, yutqazsangiz, barcha
          sovg‘alar tarqatilgach qolgan bidlar avtomatik qaytariladi.
        </InfoCard>
        <InfoCard emoji="🤝" title="Xarid taklifi">
          Kolleksion sovg‘a egasiga Stars’da taklif yuborganingizda summa 6–72 soatga rezerv qilinadi. Taklif rad
          etilsa yoki muddati tugasa — «your full payment is instantly refunded». Qabul qilinsa, sovg‘a sizga o‘tadi.
        </InfoCard>
        <InfoCard emoji="🎁" title="Yuborilgan sovg‘a">
          Qaytarilmaydi. Qabul qiluvchi oddiy sovg‘ani Stars’ga convert qilishi mumkin — asl narxdan kam summa;
          qanday qilinadi — <Link href="/blog/telegram-gift-stars-ga-aylantirish">sovg‘ani Stars’ga qaytarish</Link>.
          Auksionda olingan sovg‘alar convert qilinmaydi.
        </InfoCard>
        <InfoCard emoji="🧾" title="Kolleksion sovg‘a xaridi">
          Market yoki boshqa egadan sotib olingan sovg‘a — yakuniy bitim. Sotuv muammolari haqida —{" "}
          <Link href="/blog/telegram-gift-sotilmayapti">sovg‘a sotilmayapti</Link>.
        </InfoCard>
      </InfoGrid>

      <h2 id="obuna">Holat 5. Obunalar — kanal, bot, Premium</h2>
      <p>
        Stars shartlarida obunalar uchun alohida refund bandi yo‘q — umumiy qoida amal qiladi: joriy davr to‘lovi
        qaytmaydi, bekor qilish faqat keyingi yangilanishni to‘xtatadi. Kanal va bot obunalari Sozlamalar → «Mening
        yulduzlarim» bo‘limida ko‘rinadi va o‘sha yerda bekor qilinadi; pullik kanal qanday ishlashi —{" "}
        <Link href="/blog/telegram-pullik-kanal-stars-obuna">Stars obunali pullik kanal</Link>. Telegram Premium
        obunasi haqida — <Link href="/blog/telegram-premium-avtotolovni-ochirish">avtoto‘lovni o‘chirish</Link>.
      </p>

      <h2 id="dokon">Apple yoki Google’dan refund so‘rash — nega xavfli</h2>
      <Notice label="Ogohlantirish">
        Stars’ni App Store yoki Google Play orqali olgan bo‘lsangiz, to‘lov munosabati o‘sha do‘kon bilan — refundni
        ulardan so‘rash mumkin. Lekin shartlarning 5-bandiga ko‘ra Telegram bunday refundga javoban Stars’ni
        balansdan <b>vaqtincha ushlab turishi yoki butunlay yechishi</b> mumkin, qoplamaydi, va ular bilan olingan
        raqamli tovarlar, xizmatlar va obunalar yo‘qolishi mumkin. Chargeback qilsangiz, Telegram akkaunt holati
        haqidagi ma’lumotni do‘konga berishga rozi bo‘lasiz (3.2-band).
      </Notice>
      <p>
        Shuning uchun do‘kon refundini faqat haqiqiy muammo — masalan, pul yechilgan, Stars umuman tushmagan — bo‘lsa
        so‘rang, avval Telegram ichida tekshirib ko‘ring. «Fikrdan qaytdim» uchun do‘kon refundi odatda zararini
        oqlamaydi.
      </p>

      <h2 id="starspaymee">StarsPaymee orqali olingan Stars</h2>
      <KeyFacts label="Qoidalar qisqacha">
        <li>
          <b>Yetkazilgan Stars</b> — Telegram balansingizda; Telegram qoidasi bo‘yicha ular qaytarilmaydi, pulga
          aylantirilmaydi, StarsPaymee ularni qaytarib sotib olmaydi.
        </li>
        <li>
          <b>To‘ladingiz, Stars kelmadi</b> — texnik sabab bo‘lsa to‘lov to‘liq, to‘lagan usulingizda qaytariladi.
          Tekshirish tartibi — <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Stars kelmadi: nima qilish</Link>.
        </li>
        <li>
          <b>So‘rov:</b> @StarsPaymeeSupport ga «Buyurtmalarim»dagi buyurtma raqami va chek bilan yozing.
        </li>
        <li>
          <b>Username xato</b> — ko‘rsatilgan @username’ga yetkazilgan buyurtma bajarilgan hisoblanadi; oldindan
          tekshirish — <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">boshqa odamga Stars olish</Link>.
        </li>
        <li>
          <b>Telegram ichida sarflagan Stars</b> (bot, xabar, sovg‘a) — StarsPaymee aralasha olmaydi; yuqoridagi
          Telegram tartibi ishlaydi.
        </li>
      </KeyFacts>
      <InlineCta text="Stars kerakmi? Miqdor va username’ni tekshirib oling — so‘mda, 5 soniyada balansda." product={{ kind: "stars", amount: 100 }} />

      <h2 id="dasturchi">Dasturchilar uchun eslatma</h2>
      <KeyFacts label="Bot egasi bo‘lsangiz">
        <li>
          Har to‘lovning <b>telegram_payment_charge_id</b> qiymatini saqlang — refund aynan shu ID bilan
          (refundStarPayment) qilinadi.
        </li>
        <li>Botingiz /paysupport buyrug‘iga javob berishi shart; nizolarni hal qilish — sizning mas’uliyatingiz.</li>
        <li>Raqamli tovar va xizmatlar faqat Stars (XTR) bilan sotiladi.</li>
      </KeyFacts>
      <p>
        To‘lovni ulash va qaytarish kodi — <Link href="/blog/telegram-botga-stars-tolovini-ulash">botga Stars to‘lovini ulash</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: SRC.tos, label: "Telegram — Terms of Service for Telegram Stars", note: "3, 3.1, 3.2, 5 va 6.5-bandlar: yakuniy sotuv, nizo, do‘kon refundi, pullik xabar" },
          { href: SRC.bots, label: "Telegram Bot API — Payments in Telegram Stars", note: "/paysupport talabi, refundStarPayment, dasturchi mas’uliyati" },
          { href: SRC.gifts, label: "core.telegram.org/api/gifts", note: "xarid taklifi: rezerv va darhol qaytarish" },
          { href: SRC.auctions, label: "core.telegram.org/api/auctions", note: "bid qaytarib olinmaydi, yutqazgan bidlar avtomatik qaytadi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Обычно <b>нет</b>: по условиям Telegram Stars продажа звёзд окончательна, за случайную или ненужную покупку
      Telegram деньги не возвращает. Исключения есть: если бот или Mini App не доставил покупку, разработчик возвращает
      Stars без штрафа (/paysupport → жалоба); получатель платного сообщения может вернуть звёзды; проигравшие ставки
      на аукционе подарков и отклонённые предложения о покупке возвращаются автоматически. Доставленные Stars в деньги
      не превращаются.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#qoida", label: "Главное правило: продажа Stars окончательна" },
          { href: "#jadval", label: "Таблица ситуаций — вернут или нет?" },
          { href: "#bot", label: "Случай 1. Бот не доставил — порядок /paysupport" },
          { href: "#fikr", label: "Случай 2. Вы передумали" },
          { href: "#xabar", label: "Случай 3. Платное сообщение" },
          { href: "#sovga", label: "Случай 4. Аукцион подарков и предложение о покупке" },
          { href: "#obuna", label: "Случай 5. Подписки" },
          { href: "#dokon", label: "Возврат через Apple или Google — почему рискованно" },
          { href: "#starspaymee", label: "Stars, купленные через StarsPaymee" },
          { href: "#dasturchi", label: "Заметка для разработчиков" },
        ]}
      />

      <h2 id="qoida">Главное правило: продажа Stars окончательна</h2>
      <p>
        В разделе 3 условий Telegram Stars сказано прямо: <b>«All sales of Telegram Stars are final»</b> — за ненужную
        или случайную покупку Stars Telegram деньги не возвращает. Но это не значит «не вернут никогда»: когда вы{" "}
        <b>тратите</b> Stars внутри Telegram, возврат чаще всего в руках продавца — разработчика бота или получателя
        сообщения, — а в некоторых случаях происходит автоматически.
      </p>
      <KeyFacts label="Имейте в виду">
        <li>
          <b>Telegram деньги не возвращает</b> — даже если Stars куплены случайно или в избытке (условия, раздел 3).
        </li>
        <li>
          <b>Возврат приходит в Stars</b> — на баланс, а не деньгами на карту.
        </li>
        <li>
          <b>Вывода в деньги нет</b> — обычный пользователь не может продать Stars или передать их на другой аккаунт.
        </li>
        <li>
          <b>Удалили аккаунт или потеряли доступ</b> — остаток баланса сгорает, Telegram не компенсирует.
        </li>
        <li>
          <b>У купленных Stars нет срока действия</b> — они лежат на балансе (исключение — награды авторов, 3 года).
        </li>
      </KeyFacts>

      <h2 id="jadval">Таблица ситуаций — вернут или нет?</h2>
      <CompareTable
        headers={["Ситуация", "Вернут?", "Кто и как"]}
        rows={[
          [<strong key="a">Бот или Mini App не доставил покупку</strong>, "Да", "Разработчик — /paysupport; при отказе — жалоба в Telegram с ID транзакции"],
          [<strong key="b">Покупка доставлена, вы передумали</strong>, "Обычно нет", "Только разработчик по своему усмотрению"],
          [<strong key="c">Отправили платное сообщение</strong>, "На усмотрение получателя", "Он может вернуть всю сумму одним нажатием"],
          [<strong key="d">Проиграли или выбыли на аукционе подарков</strong>, "Да, автоматически", "Telegram — при выбывании ставки или после раздачи всех подарков"],
          [<strong key="e">Предложение о покупке подарка отклонено или истекло</strong>, "Да, сразу", "Telegram — зарезервированные Stars возвращаются автоматически"],
          [<strong key="f">Подписка на канал или бота</strong>, "Нет", "Отмена лишь останавливает следующее продление"],
          [<strong key="g">Отправили подарок</strong>, "Нет", "Получатель может конвертировать его в Stars — меньше исходной цены"],
          [<strong key="h">Купили Stars (App Store, Google Play, Fragment, реселлер)</strong>, "Нет", "После доставки окончательно; возврат через магазин — рискованно (ниже)"],
          [<strong key="i">Заплатили реселлеру, Stars не пришли</strong>, "Да — при технической причине", "Продавец — в StarsPaymee полностью, тем же способом"],
        ]}
      />

      <h2 id="bot">Случай 1. Бот или Mini App не доставил — порядок /paysupport</h2>
      <p>
        Пункт 3.1 условий: если бот или Mini App не доставил покупку <b>как заявлено и в согласованный срок</b>,
        разработчик может вернуть Stars без штрафа. Telegram требует, чтобы каждый бот, принимающий платежи, отвечал на
        команду /paysupport — разбор спора лежит на разработчике.
      </p>
      <Steps>
        <Step title="1. Отправьте боту /paysupport">
          Коротко: что купили, когда, что не пришло. Сохраните скриншоты сообщения об оплате и ответа бота.
        </Step>
        <Step title="2. Возьмите ID транзакции">
          Если ответа нет или в обоснованном возврате отказали: Настройки → «Мои звёзды» (My Stars) → откройте
          транзакцию → скопируйте ID.
        </Step>
        <Step title="3. Отправьте жалобу в Telegram">
          Официальный адрес из условий —{" "}
          <a href={DISPUTE_URL} target="_blank" rel="noopener noreferrer">
            форма «starsdispute» в @BotFather
          </a>
          . Укажите ID транзакции, имя бота, дату и сумму.
        </Step>
      </Steps>
      <Notice label="Практический совет">
        В условиях нет точного срока ответа разработчика — «согласованный срок» задаётся правилами самого бота.
        Подождите один-два рабочих дня, затем подавайте жалобу. Возвращённые Stars приходят на баланс как Stars.
      </Notice>

      <h2 id="fikr">Случай 2. Вы передумали</h2>
      <p>
        Если товар доставлен корректно, Telegram за случайную покупку деньги не возвращает — это общее правило. Вернуть
        может только разработчик по своему усмотрению: вежливо спросите через /paysupport, но требовать нельзя. В Mini
        App Stars списываются сразу после «Подтвердить» — проверяйте цену и то, что покупаете, до этого момента.
      </p>

      <h2 id="xabar">Случай 3. Платное сообщение</h2>
      <p>
        В чате с включёнными платными сообщениями 85% отправленных Stars получает адресат. По пункту 6.5 условий
        получатель <b>по желанию</b> может вернуть всю сумму, уплаченную за сообщения, — Telegram его не обязывает,
        автоматического возврата нет. Почему Telegram просит Stars за сообщения и как это настроить —{" "}
        <Link href="/blog/telegram-xabar-yuborish-stars">в отдельной статье</Link>.
      </p>

      <h2 id="sovga">Случай 4. Аукцион подарков и предложение о покупке</h2>
      <InfoGrid>
        <InfoCard emoji="🔨" title="Аукцион">
          Поставленную ставку отозвать нельзя («a placed bid cannot be retracted»). Но если ставка выбывает из
          лидирующих позиций, Stars возвращаются и для участия нужна новая ставка; если аукцион завершился и вы
          проиграли, оставшиеся ставки автоматически возвращаются после раздачи всех подарков.
        </InfoCard>
        <InfoCard emoji="🤝" title="Предложение о покупке">
          Когда вы предлагаете владельцу коллекционного подарка цену в Stars, сумма резервируется на 6–72 часа. Если
          предложение отклонено или истекло — «your full payment is instantly refunded». Если принято, подарок
          переходит к вам.
        </InfoCard>
        <InfoCard emoji="🎁" title="Отправленный подарок">
          Не возвращается. Получатель может конвертировать обычный подарок в Stars — на сумму меньше исходной цены;
          как это сделать — <Link href="/blog/telegram-gift-stars-ga-aylantirish">вернуть подарок в Stars</Link>.
          Подарки с аукциона не конвертируются.
        </InfoCard>
        <InfoCard emoji="🧾" title="Покупка коллекционного подарка">
          Подарок, купленный на рынке или у другого владельца, — окончательная сделка. О проблемах с продажей —{" "}
          <Link href="/blog/telegram-gift-sotilmayapti">подарок не продаётся</Link>.
        </InfoCard>
      </InfoGrid>

      <h2 id="obuna">Случай 5. Подписки — канал, бот, Premium</h2>
      <p>
        Отдельного пункта о возврате подписок в условиях Stars нет — действует общее правило: оплата текущего периода
        не возвращается, отмена лишь останавливает следующее продление. Подписки на каналы и ботов видны в Настройки →
        «Мои звёзды», там же их отменяют; как устроен платный канал —{" "}
        <Link href="/blog/telegram-pullik-kanal-stars-obuna">платный канал с подпиской за Stars</Link>. О подписке
        Telegram Premium — <Link href="/blog/telegram-premium-avtotolovni-ochirish">отключение автоплатежа</Link>.
      </p>

      <h2 id="dokon">Возврат через Apple или Google — почему рискованно</h2>
      <Notice label="Предупреждение">
        Если Stars куплены через App Store или Google Play, платёжные отношения у вас с магазином — возврат можно
        запросить у него. Но по пункту 5 условий Telegram в ответ на такой возврат может <b>временно удержать или
        полностью списать</b> Stars с баланса без компенсации, а купленные на них цифровые товары, услуги и подписки
        могут пропасть. Оформляя чарджбэк, вы соглашаетесь, что Telegram передаст магазину данные о статусе аккаунта
        (пункт 3.2).
      </Notice>
      <p>
        Поэтому запрашивайте возврат в магазине только при реальной проблеме — например, деньги списаны, а Stars так и
        не пришли, — и сначала проверьте всё внутри Telegram. Из-за «передумал» возврат через магазин обычно не
        окупается.
      </p>

      <h2 id="starspaymee">Stars, купленные через StarsPaymee</h2>
      <KeyFacts label="Правила коротко">
        <li>
          <b>Доставленные Stars</b> — на вашем балансе Telegram; по правилам Telegram они не возвращаются и не
          превращаются в деньги, StarsPaymee их обратно не выкупает.
        </li>
        <li>
          <b>Заплатили, Stars не пришли</b> — при технической причине оплата возвращается полностью, тем же способом.
          Порядок проверки — <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Stars не пришли: что делать</Link>.
        </li>
        <li>
          <b>Запрос:</b> напишите в @StarsPaymeeSupport с номером заказа из «Моих заказов» и чеком.
        </li>
        <li>
          <b>Ошибка в username</b> — заказ, доставленный на указанный @username, считается выполненным; как проверить
          заранее — <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">купить Stars другому человеку</Link>.
        </li>
        <li>
          <b>Stars, потраченные внутри Telegram</b> (бот, сообщение, подарок) — StarsPaymee вмешаться не может;
          действует порядок Telegram выше.
        </li>
      </KeyFacts>
      <InlineCta text="Нужны Stars? Проверьте количество и username — в сумах, на балансе за 5 секунд." product={{ kind: "stars", amount: 100 }} />

      <h2 id="dasturchi">Заметка для разработчиков</h2>
      <KeyFacts label="Если вы владелец бота">
        <li>
          Сохраняйте <b>telegram_payment_charge_id</b> каждого платежа — возврат (refundStarPayment) делается именно по
          этому ID.
        </li>
        <li>Бот обязан отвечать на /paysupport; разбор споров — ваша ответственность.</li>
        <li>Цифровые товары и услуги продаются только за Stars (XTR).</li>
      </KeyFacts>
      <p>
        Подключение оплаты и код возврата —{" "}
        <Link href="/blog/telegram-botga-stars-tolovini-ulash">подключить оплату Stars к боту</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: SRC.tos, label: "Telegram — Terms of Service for Telegram Stars", note: "пункты 3, 3.1, 3.2, 5 и 6.5: окончательность, споры, возврат через магазин, платные сообщения" },
          { href: SRC.bots, label: "Telegram Bot API — Payments in Telegram Stars", note: "требование /paysupport, refundStarPayment, ответственность разработчика" },
          { href: SRC.gifts, label: "core.telegram.org/api/gifts", note: "предложение о покупке: резерв и мгновенный возврат" },
          { href: SRC.auctions, label: "core.telegram.org/api/auctions", note: "ставку нельзя отозвать, проигравшие ставки возвращаются автоматически" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Usually <b>not</b>: under the Telegram Stars terms every sale is final, and Telegram does not refund accidental
      or unwanted purchases. There are exceptions: if a bot or Mini App fails to deliver, the developer can refund your
      Stars at no penalty (/paysupport → report); the recipient of a paid message may refund it; losing bids in gift
      auctions and declined purchase offers are refunded automatically. Delivered Stars cannot be turned back into
      money.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#qoida", label: "The main rule: Stars sales are final" },
          { href: "#jadval", label: "Situation table — refunded or not?" },
          { href: "#bot", label: "Case 1. A bot did not deliver — the /paysupport procedure" },
          { href: "#fikr", label: "Case 2. You changed your mind" },
          { href: "#xabar", label: "Case 3. A paid message" },
          { href: "#sovga", label: "Case 4. Gift auctions and purchase offers" },
          { href: "#obuna", label: "Case 5. Subscriptions" },
          { href: "#dokon", label: "Refunds through Apple or Google — why it is risky" },
          { href: "#starspaymee", label: "Stars bought through StarsPaymee" },
          { href: "#dasturchi", label: "A note for developers" },
        ]}
      />

      <h2 id="qoida">The main rule: Stars sales are final</h2>
      <p>
        Section 3 of the Telegram Stars terms is explicit: <b>“All sales of Telegram Stars are final”</b> — Telegram does
        not refund unwanted or accidental purchases of Stars. That does not mean “never”: when you <b>spend</b> Stars
        inside Telegram, a refund is usually in the seller’s hands — the bot developer or the message recipient — and
        in some cases it is automatic.
      </p>
      <KeyFacts label="Keep in mind">
        <li>
          <b>Telegram does not refund money</b> — even if Stars were bought by accident or in excess (terms, section 3).
        </li>
        <li>
          <b>Refunds arrive as Stars</b> — to your balance, not as money to your card.
        </li>
        <li>
          <b>No cash-out</b> — an ordinary user cannot sell Stars or move them to another account.
        </li>
        <li>
          <b>Delete the account or lose access</b> — the remaining balance is forfeited; Telegram does not compensate.
        </li>
        <li>
          <b>Purchased Stars do not expire</b> — they stay on the balance (the exception is creators’ reward Stars, 3
          years).
        </li>
      </KeyFacts>

      <h2 id="jadval">Situation table — refunded or not?</h2>
      <CompareTable
        headers={["Situation", "Refunded?", "Who and how"]}
        rows={[
          [<strong key="a">A bot or Mini App did not deliver the purchase</strong>, "Yes", "The developer — /paysupport; if refused, a report to Telegram with the transaction ID"],
          [<strong key="b">Delivered, but you changed your mind</strong>, "Usually no", "Only the developer, at their discretion"],
          [<strong key="c">You sent a paid message</strong>, "Up to the recipient", "They can refund the full amount in one tap"],
          [<strong key="d">You lost or were knocked out in a gift auction</strong>, "Yes, automatically", "Telegram — when the bid is removed or after all gifts are awarded"],
          [<strong key="e">A gift purchase offer was declined or expired</strong>, "Yes, instantly", "Telegram — the reserved Stars come back automatically"],
          [<strong key="f">A channel or bot subscription</strong>, "No", "Cancelling only stops the next renewal"],
          [<strong key="g">You sent a gift</strong>, "No", "The recipient can convert it to Stars — for less than the original price"],
          [<strong key="h">You bought Stars (App Store, Google Play, Fragment, a reseller)</strong>, "No", "Final once delivered; a store refund is risky (below)"],
          [<strong key="i">You paid a reseller and the Stars did not arrive</strong>, "Yes — for a technical reason", "The seller — at StarsPaymee in full, by the same method"],
        ]}
      />

      <h2 id="bot">Case 1. A bot or Mini App did not deliver — the /paysupport procedure</h2>
      <p>
        Clause 3.1 of the terms: if a bot or Mini App fails to deliver your purchase <b>as advertised and within the
        agreed timeframe</b>, the developer can refund your Stars at no penalty. Telegram requires every bot that takes
        payments to answer the /paysupport command — resolving the dispute is the developer’s responsibility.
      </p>
      <Steps>
        <Step title="1. Send /paysupport to the bot">
          Keep it short: what you bought, when, and what did not arrive. Save screenshots of the payment message and
          the bot’s reply.
        </Step>
        <Step title="2. Get the transaction ID">
          If there is no reply or a legitimate refund is refused: Settings → “My Stars” → open the transaction → copy
          the ID.
        </Step>
        <Step title="3. Submit a report to Telegram">
          The official address from the terms —{" "}
          <a href={DISPUTE_URL} target="_blank" rel="noopener noreferrer">
            the “starsdispute” form in @BotFather
          </a>
          . Include the transaction ID, the bot’s name, the date and the amount.
        </Step>
      </Steps>
      <Notice label="Practical tip">
        The terms set no exact deadline for the developer’s reply — the “agreed timeframe” comes from the bot’s own
        terms. Wait one or two working days, then file the report. Refunded Stars return to your balance as Stars.
      </Notice>

      <h2 id="fikr">Case 2. You changed your mind</h2>
      <p>
        If the product was delivered correctly, Telegram does not refund an accidental purchase — that is the general
        rule. Only the developer can refund at their discretion: ask politely through /paysupport, but you cannot
        demand it. In a Mini App the Stars are debited the moment you tap “Confirm” — check the price and what you are
        buying before that.
      </p>

      <h2 id="xabar">Case 3. A paid message</h2>
      <p>
        In a chat with paid messages enabled, the recipient receives 85% of the Stars sent. Under clause 6.5 of the
        terms the recipient <b>may</b>, if they wish, refund the full amount paid for the messages — Telegram does not
        oblige them, and there is no automatic refund. Why Telegram asks for Stars to send a message and how to set it
        up — <Link href="/blog/telegram-xabar-yuborish-stars">in a separate article</Link>.
      </p>

      <h2 id="sovga">Case 4. Gift auctions and purchase offers</h2>
      <InfoGrid>
        <InfoCard emoji="🔨" title="Auction">
          A placed bid cannot be retracted. But if your bid drops out of the leading positions, the Stars come back and
          you need a new bid to take part; if the auction ends and you lost, the remaining bids are refunded
          automatically once all gifts are awarded.
        </InfoCard>
        <InfoCard emoji="🤝" title="Purchase offer">
          When you offer the owner of a collectible gift a price in Stars, the amount is reserved for 6–72 hours. If
          the offer is declined or expires — “your full payment is instantly refunded”. If accepted, the gift is
          transferred to you.
        </InfoCard>
        <InfoCard emoji="🎁" title="A gift you sent">
          Not refundable. The recipient can convert a regular gift into Stars — for less than the original price; how
          — <Link href="/blog/telegram-gift-stars-ga-aylantirish">converting a gift to Stars</Link>. Gifts won at
          auction cannot be converted.
        </InfoCard>
        <InfoCard emoji="🧾" title="Buying a collectible gift">
          A gift bought on a market or from another owner is a final deal. On selling problems —{" "}
          <Link href="/blog/telegram-gift-sotilmayapti">the gift is not selling</Link>.
        </InfoCard>
      </InfoGrid>

      <h2 id="obuna">Case 5. Subscriptions — channel, bot, Premium</h2>
      <p>
        The Stars terms have no separate refund clause for subscriptions — the general rule applies: the current
        period is not refunded, and cancelling only stops the next renewal. Channel and bot subscriptions are listed
        under Settings → “My Stars”, where they are cancelled; how a paid channel works —{" "}
        <Link href="/blog/telegram-pullik-kanal-stars-obuna">a paid channel with a Stars subscription</Link>. On the
        Telegram Premium subscription — <Link href="/blog/telegram-premium-avtotolovni-ochirish">turning off auto-renewal</Link>.
      </p>

      <h2 id="dokon">Refunds through Apple or Google — why it is risky</h2>
      <Notice label="Warning">
        If you bought Stars through the App Store or Google Play, your billing relationship is with that store — you
        can request a refund from it. But under section 5 of the terms Telegram may respond by <b>temporarily
        withholding or permanently debiting</b> Stars from your balance without compensation, and digital goods,
        services and subscriptions bought with them may be lost. By filing a chargeback you agree that Telegram may
        release data about your account status to the store (clause 3.2).
      </Notice>
      <p>
        So request a store refund only for a real problem — for example, money was charged and the Stars never
        arrived — and check inside Telegram first. For “I changed my mind” a store refund is usually not worth the
        damage.
      </p>

      <h2 id="starspaymee">Stars bought through StarsPaymee</h2>
      <KeyFacts label="The rules in short">
        <li>
          <b>Delivered Stars</b> are on your Telegram balance; under Telegram’s rules they are not refunded or turned
          into money, and StarsPaymee does not buy them back.
        </li>
        <li>
          <b>You paid and the Stars did not arrive</b> — for a technical reason the payment is refunded in full, by
          the method you paid with. The checking procedure —{" "}
          <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Stars did not arrive: what to do</Link>.
        </li>
        <li>
          <b>Request:</b> write to @StarsPaymeeSupport with the order number from “My orders” and the receipt.
        </li>
        <li>
          <b>Wrong username</b> — an order delivered to the @username given is considered complete; how to check
          beforehand — <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">buying Stars for someone else</Link>.
        </li>
        <li>
          <b>Stars spent inside Telegram</b> (a bot, a message, a gift) — StarsPaymee cannot intervene; the Telegram
          procedure above applies.
        </li>
      </KeyFacts>
      <InlineCta text="Need Stars? Check the amount and the username — in som, on your balance in 5 seconds." product={{ kind: "stars", amount: 100 }} />

      <h2 id="dasturchi">A note for developers</h2>
      <KeyFacts label="If you run a bot">
        <li>
          Store each payment’s <b>telegram_payment_charge_id</b> — a refund (refundStarPayment) is issued by exactly
          that ID.
        </li>
        <li>Your bot must answer /paysupport; resolving disputes is your responsibility.</li>
        <li>Digital goods and services are sold for Stars (XTR) only.</li>
      </KeyFacts>
      <p>
        Connecting payments and the refund code —{" "}
        <Link href="/blog/telegram-botga-stars-tolovini-ulash">adding Stars payments to a bot</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: SRC.tos, label: "Telegram — Terms of Service for Telegram Stars", note: "sections 3, 3.1, 3.2, 5 and 6.5: final sales, disputes, store refunds, paid messages" },
          { href: SRC.bots, label: "Telegram Bot API — Payments in Telegram Stars", note: "the /paysupport requirement, refundStarPayment, developer responsibility" },
          { href: SRC.gifts, label: "core.telegram.org/api/gifts", note: "purchase offers: reservation and instant refund" },
          { href: SRC.auctions, label: "core.telegram.org/api/auctions", note: "bids cannot be retracted, losing bids are refunded automatically" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Telegram Stars’ni pulga qaytarib olish mumkinmi?",
    answer:
      "Yo‘q. Stars sotuvi yakuniy, Telegram tasodifiy yoki keraksiz xarid uchun pul qaytarmaydi, oddiy foydalanuvchi Stars’ni pulga chiqarolmaydi. Qaytarish faqat Stars sifatida va faqat ayrim holatlarda — masalan, bot xaridni yetkazmasa.",
  },
  {
    question: "Bot Stars oldi, lekin mahsulotni bermadi — nima qilay?",
    answer:
      "Botga /paysupport yuboring. Javob bo‘lmasa yoki asosli qaytarish rad etilsa, Sozlamalar → «Mening yulduzlarim» bo‘limidan tranzaksiya ID’ni olib, @BotFather’dagi «starsdispute» shakli orqali Telegram’ga shikoyat qiling.",
  },
  {
    question: "Dasturchi qancha vaqtda javob berishi kerak?",
    answer:
      "Telegram shartlarida aniq muddat yo‘q — «kelishilgan muddat» botning o‘z shartlarida. Amaliy tavsiya: bir-ikki ish kuni kuting, keyin tranzaksiya ID bilan shikoyat yuboring.",
  },
  {
    question: "Tasodifan Stars sotib oldim — qaytariladimi?",
    answer:
      "Yo‘q. Shartlarning 3-bo‘limiga ko‘ra Stars sotuvi yakuniy; keraksiz yoki tasodifiy xarid uchun Telegram pul qaytarmaydi. Stars balansda qoladi — sovg‘a, reaksiya yoki bot xaridiga sarflash mumkin.",
  },
  {
    question: "Pullik xabar uchun to‘langan Stars qaytadimi?",
    answer:
      "Faqat qabul qiluvchi istasa: u to‘liq summani bir bosishda qaytarishi mumkin, lekin Telegram uni majburlamaydi. Avtomatik qaytarish yo‘q, uchinchi tomon xizmatlari ham qaytara olmaydi.",
  },
  {
    question: "Sovg‘a auksionida yutqazsam, Stars qaytadimi?",
    answer:
      "Ha, avtomatik. Bid yetakchi o‘rinlardan chetlatilsa Stars darhol qaytadi (qatnashish uchun yangi bid kerak); auksion tugagach qolgan yutqazgan bidlar barcha sovg‘alar tarqatilgach qaytariladi. Bidni o‘zingiz qaytarib ololmaysiz.",
  },
  {
    question: "Sovg‘a xarid taklifi rad etilsa nima bo‘ladi?",
    answer:
      "Taklif yuborilganda Stars 6–72 soatga rezerv qilinadi. Rad etilsa yoki muddati tugasa to‘liq summa darhol qaytadi; qabul qilinsa sovg‘a sizga o‘tadi.",
  },
  {
    question: "Apple yoki Google’dan refund so‘rasam nima bo‘ladi?",
    answer:
      "Do‘kon pulni qaytarishi mumkin, lekin Telegram bunga javoban Stars’ni balansdan yechishi yoki ushlab turishi, ular bilan olingan tovar va obunalar yo‘qolishi mumkin — qoplanmaydi. Faqat haqiqiy muammo bo‘lsa so‘rang.",
  },
  {
    question: "StarsPaymee orqali olingan Stars’ni qaytarsa bo‘ladimi?",
    answer:
      "Yetkazilgan Stars — Telegram balansingizda, ular Telegram qoidasi bo‘yicha qaytarilmaydi va StarsPaymee ularni qaytarib sotib olmaydi. To‘lov qilingan, lekin texnik sabab bilan yetkazilmagan buyurtma to‘liq, to‘lagan usulingizda qaytariladi — @StarsPaymeeSupport ga buyurtma raqami va chek bilan yozing.",
  },
  {
    question: "Akkauntni o‘chirsam, Stars balansim nima bo‘ladi?",
    answer:
      "Yonadi. Shartlarga ko‘ra akkaunt o‘chirilsa yoki unga kirish yo‘qolsa, qolgan Stars balansi qaytarilmaydi. O‘chirishdan oldin Stars’ni sarflang.",
  },
];

const ruFaq = [
  {
    question: "Можно ли вернуть Telegram Stars деньгами?",
    answer:
      "Нет. Продажа Stars окончательна, за случайную или ненужную покупку Telegram деньги не возвращает, а обычный пользователь не может вывести Stars в деньги. Возврат бывает только в Stars и только в отдельных случаях — например, если бот не доставил покупку.",
  },
  {
    question: "Бот забрал Stars, но товар не выдал — что делать?",
    answer:
      "Отправьте боту /paysupport. Если ответа нет или в обоснованном возврате отказали, возьмите ID транзакции в Настройки → «Мои звёзды» и подайте жалобу в Telegram через форму «starsdispute» в @BotFather.",
  },
  {
    question: "Сколько времени разработчик должен отвечать?",
    answer:
      "Точного срока в условиях Telegram нет — «согласованный срок» задаётся правилами самого бота. Практический совет: подождите один-два рабочих дня, затем подавайте жалобу с ID транзакции.",
  },
  {
    question: "Случайно купил Stars — вернут?",
    answer:
      "Нет. По разделу 3 условий продажа Stars окончательна; за ненужную или случайную покупку Telegram деньги не возвращает. Stars остаются на балансе — их можно потратить на подарок, реакцию или покупку в боте.",
  },
  {
    question: "Вернутся ли Stars за платное сообщение?",
    answer:
      "Только если захочет получатель: он может вернуть всю сумму одним нажатием, но Telegram его не обязывает. Автоматического возврата нет, сторонние сервисы тоже вернуть не могут.",
  },
  {
    question: "Проиграл на аукционе подарков — Stars вернутся?",
    answer:
      "Да, автоматически. Если ставка выбывает из лидирующих позиций, Stars возвращаются сразу (для участия нужна новая ставка); после завершения аукциона оставшиеся проигравшие ставки возвращаются после раздачи всех подарков. Сами отозвать ставку нельзя.",
  },
  {
    question: "Что будет, если предложение о покупке подарка отклонят?",
    answer:
      "При отправке предложения Stars резервируются на 6–72 часа. Если его отклонили или срок истёк, вся сумма возвращается сразу; если приняли, подарок переходит к вам.",
  },
  {
    question: "Что будет, если запросить возврат у Apple или Google?",
    answer:
      "Магазин может вернуть деньги, но Telegram в ответ может списать или удержать Stars с баланса, а купленные на них товары и подписки могут пропасть — без компенсации. Запрашивайте только при реальной проблеме.",
  },
  {
    question: "Можно ли вернуть Stars, купленные через StarsPaymee?",
    answer:
      "Доставленные Stars — на вашем балансе Telegram, по правилам Telegram они не возвращаются, и StarsPaymee их обратно не выкупает. Оплаченный, но не доставленный по технической причине заказ возвращается полностью тем же способом — напишите в @StarsPaymeeSupport с номером заказа и чеком.",
  },
  {
    question: "Что станет с балансом Stars, если удалить аккаунт?",
    answer:
      "Он сгорит. По условиям при удалении аккаунта или потере доступа остаток Stars не возвращается. Потратьте Stars до удаления.",
  },
];

const enFaq = [
  {
    question: "Can I get Telegram Stars back as money?",
    answer:
      "No. Stars sales are final, Telegram does not refund accidental or unwanted purchases, and an ordinary user cannot cash Stars out. Refunds come only as Stars and only in specific cases — for example, when a bot fails to deliver.",
  },
  {
    question: "A bot took my Stars but did not deliver — what do I do?",
    answer:
      "Send /paysupport to the bot. If there is no reply or a legitimate refund is refused, take the transaction ID from Settings → “My Stars” and submit a report to Telegram through the “starsdispute” form in @BotFather.",
  },
  {
    question: "How quickly must the developer reply?",
    answer:
      "Telegram’s terms set no exact deadline — the “agreed timeframe” comes from the bot’s own terms. Practical tip: wait one or two working days, then file the report with the transaction ID.",
  },
  {
    question: "I bought Stars by accident — will I be refunded?",
    answer:
      "No. Under section 3 of the terms Stars sales are final; Telegram does not refund unwanted or accidental purchases. The Stars stay on your balance — spend them on a gift, a reaction or a bot purchase.",
  },
  {
    question: "Do I get Stars back for a paid message?",
    answer:
      "Only if the recipient wants to: they can refund the full amount in one tap, but Telegram does not oblige them. There is no automatic refund, and third-party services cannot refund it either.",
  },
  {
    question: "If I lose a gift auction, do my Stars come back?",
    answer:
      "Yes, automatically. If your bid drops out of the leading positions the Stars return immediately (you need a new bid to take part); after the auction ends, the remaining losing bids are refunded once all gifts are awarded. You cannot retract a bid yourself.",
  },
  {
    question: "What happens if a gift purchase offer is declined?",
    answer:
      "When you send an offer, the Stars are reserved for 6–72 hours. If it is declined or expires, the full amount comes back instantly; if accepted, the gift is transferred to you.",
  },
  {
    question: "What happens if I request a refund from Apple or Google?",
    answer:
      "The store may refund the money, but Telegram may respond by debiting or withholding Stars from your balance, and goods and subscriptions bought with them may be lost — without compensation. Request it only for a real problem.",
  },
  {
    question: "Can Stars bought through StarsPaymee be refunded?",
    answer:
      "Delivered Stars are on your Telegram balance; under Telegram’s rules they are not refunded, and StarsPaymee does not buy them back. A paid order that was not delivered for a technical reason is refunded in full by the same method — write to @StarsPaymeeSupport with the order number and the receipt.",
  },
  {
    question: "What happens to my Stars balance if I delete my account?",
    answer:
      "It is forfeited. Under the terms, if the account is deleted or access is lost, the remaining Stars are not refunded. Spend your Stars before deleting.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "problem",
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
  keywords: [
    "telegram stars qaytarib olish",
    "telegram stars refund",
    "stars qaytariladimi",
    "paysupport telegram",
    "telegram stars pulni qaytarish",
    "bot stars qaytarmadi",
    "возврат telegram stars",
    "вернуть звёзды telegram",
    "telegram stars refund policy",
    "refund telegram stars bot",
  ],
  howToSteps: [
    { name: "/paysupport yuboring", text: "Botga /paysupport buyrug‘ini yuborib, nima sotib olganingiz va nima kelmaganini qisqa yozing." },
    { name: "Tranzaksiya ID’ni oling", text: "Sozlamalar → Mening yulduzlarim bo‘limida tranzaksiyani ochib ID’ni nusxalang." },
    { name: "Telegram’ga shikoyat qiling", text: "@BotFather’dagi starsdispute shaklini ochib, ID, bot nomi, sana va summani yuboring." },
  ],
  locales: {
    uz: {
      title: "Telegram Stars’ni qaytarib olish mumkinmi? /paysupport va refund qoidalari (2026)",
      excerpt:
        "Qaysi hollarda Telegram Stars qaytariladi va qaysi hollarda yo‘q: bot xaridni yetkazmasa, fikrdan qaytish, pullik xabar, sovg‘a auksioni va xarid taklifi, obunalar, Apple/Google refund xavfi. /paysupport va shikoyat tartibi.",
      metaTitle: "Telegram Stars refund: qaytarib olish mumkinmi?",
      metaDescription: "Telegram Stars qaytariladimi: bot yetkazmasa /paysupport va shikoyat, fikrdan qaytish, pullik xabar, sovg‘a auksioni va taklifi, Apple/Google refund xavfi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars’ni to‘g‘ri miqdorda, to‘g‘ri username’ga oling",
      ctaBody: "Yetkazilgan Stars qaytarilmaydi — shuning uchun StarsPaymee buyurtmadan oldin username’ni tekshiradi. So‘mda, 50 dan 10 000 gacha, 5 soniyada.",
      faq: uzFaq,
    },
    ru: {
      title: "Можно ли вернуть Telegram Stars? Правила /paysupport и возврата (2026)",
      excerpt:
        "Когда Telegram Stars возвращаются, а когда нет: бот не доставил покупку, передумали, платное сообщение, аукцион подарков и предложение о покупке, подписки, риск возврата через Apple/Google. Порядок /paysupport и жалобы.",
      metaTitle: "Возврат Telegram Stars: когда звёзды вернут",
      metaDescription: "Возврат Telegram Stars: бот не доставил — /paysupport и жалоба, передумали, платное сообщение, аукцион и оффер на подарок, риск возврата через Apple/Google.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Покупайте Stars в нужном количестве и на верный username",
      ctaBody: "Доставленные Stars не возвращаются — поэтому StarsPaymee проверяет username до заказа. В сумах, от 50 до 10 000, за 5 секунд.",
      faq: ruFaq,
    },
    en: {
      title: "Can you get Telegram Stars back? /paysupport and refund rules (2026)",
      excerpt:
        "When Telegram Stars are refunded and when they are not: a bot did not deliver, you changed your mind, paid messages, gift auctions and purchase offers, subscriptions, the risk of Apple/Google refunds. The /paysupport and report procedure.",
      metaTitle: "Telegram Stars refunds: when you get Stars back",
      metaDescription: "Telegram Stars refunds: a bot did not deliver — the /paysupport and report procedure, paid messages, gift auctions and offers, the risk of Apple/Google refunds.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Buy Stars in the right amount, to the right username",
      ctaBody: "Delivered Stars are not refunded — which is why StarsPaymee checks the username before the order. In som, 50 to 10,000, within 5 seconds.",
      faq: enFaq,
    },
  },
};
