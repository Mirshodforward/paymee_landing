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

const SLUG = "telegram-stars-balansini-tekshirish";

/**
 * Telegram Stars balansini qayerdan ko'rish va xarid tushganini tekshirish.
 *
 * NEGA ALOHIDA SAHIFA (2026-10-15): «stars balansini ko'rish» — oddiy, muammosiz
 * tekshiruv niyati. 09-maqola (Stars kelmadi) — muammo yechimi; bu sahifa
 * esa odatiy holat: qayerda ko'rinadi, nimani nima bilan solishtirish,
 * uch xil balansni adashtirmaslik. Muammo bo'lsa — 09 ga havola, takror emas.
 *
 * Faktlar: botdagi «Buyurtmalarim» (History) sana, vaqt va holat ko'rsatadi;
 * yetkazish to'lov tasdiqlangach odatda 5 soniya (/stars FAQ bilan bir xil);
 * StarsPaymee'ning o'z so'm balansi bor (Stars sotish, to'ldirish — 181/180).
 * Telegram tomoni: Sozlamalar → My Stars — balans va tranzaksiyalar.
 */

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram ilovasida <b>Sozlamalar → My Stars</b> bo‘limini oching — u yerda joriy balans va barcha
      kirim-chiqimlar ro‘yxati turadi. <b>@StarsPaymee_bot</b> orqali olgan bo‘lsangiz, botdagi{" "}
      <b>«Buyurtmalarim»</b>da buyurtma holati «yetkazildi» bo‘lishi kerak — to‘lov tasdiqlangach yulduzlar
      odatda <b>5 soniyada</b> tushadi. Ikkisi mos kelmasa, ilovani qayta oching va 10 daqiqa kuting.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#telegramda", label: "Telegram’da balans qayerda ko‘rinadi" },
          { href: "#botda", label: "Botda buyurtma holatini tekshirish" },
          { href: "#uch-balans", label: "Uch xil balansni adashtirmang" },
          { href: "#tasdiqlash", label: "Xarid tushganini 3 qadamda tasdiqlash" },
          { href: "#boshqa-odam", label: "Boshqa odamga olgan bo‘lsangiz" },
          { href: "#korinmasa", label: "Yulduzlar ko‘rinmasa" },
        ]}
      />

      <h2 id="telegramda">Telegram’da balans qayerda ko‘rinadi</h2>
      <Steps>
        <Step title="Telefonda">
          Telegram → <b>Sozlamalar</b> → <b>My Stars</b> (ba’zi versiyalarda «Yulduzlarim»). Yuqorida
          balans, pastda tranzaksiyalar: qachon, qancha, qayerdan kelgan yoki qayerga sarflangan.
        </Step>
        <Step title="Kompyuterda">
          Telegram Desktop → <b>Settings</b> → <b>My Stars</b>. Ro‘yxat telefondagi bilan bir xil.
        </Step>
        <Step title="Yangilanmasa">
          Bo‘limni yopib qayta oching yoki ilovani qayta ishga tushiring — balans serverdan olinadi, eski
          ekran kesh bo‘lib qolishi mumkin.
        </Step>
      </Steps>
      <KeyFacts label="Tranzaksiyalar ro‘yxatida nima ko‘rinadi">
        <li>
          <b>Kirim</b> — yulduzlar tushgan sana va miqdor. StarsPaymee orqali kelgan Stars ham shu yerda.
        </li>
        <li>
          <b>Chiqim</b> — sovg‘a, bot ichidagi xarid yoki obunaga sarflangan yulduzlar.
        </li>
        <li>
          <b>Balans</b> — kirimdan chiqimni ayirgandagi qoldiq; aynan shu sonni botdagi buyurtma miqdori
          bilan solishtirasiz.
        </li>
      </KeyFacts>

      <h2 id="botda">Botda buyurtma holatini tekshirish</h2>
      <p>
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
          @StarsPaymee_bot
        </a>{" "}
        → <b>«Buyurtmalarim»</b>. Har bir buyurtmada sana, vaqt, miqdor va holat turadi:
      </p>
      <CompareTable
        headers={["Holat", "Ma’nosi", "Nima qilish"]}
        rows={[
          [<strong key="a">Kutilmoqda</strong>, "To‘lov hali tasdiqlanmagan", "Kartaga o‘tkazmada 1–2 daqiqa kuting; summa aynan ko‘rsatilgandek bo‘lsin"],
          [<strong key="b">To‘landi</strong>, "To‘lov keldi, yetkazish ketmoqda", "Odatda bir necha soniya"],
          [<strong key="c">Yetkazildi</strong>, "Yulduzlar qabul qiluvchi balansiga tushdi", "Telegram’da My Stars’ni tekshiring"],
          [<strong key="d">Muddati o‘tdi</strong>, "To‘lov belgilangan vaqtda kelmadi", "Pul yechilgan bo‘lsa — chek bilan @StarsPaymeeSupport"],
        ]}
      />

      <h2 id="uch-balans">Uch xil balansni adashtirmang</h2>
      <p>
        «Balans» so‘zi uch joyda uchraydi va ular bir-biriga <b>bog‘liq emas</b>. Eng ko‘p chalkashlik
        shundan chiqadi:
      </p>
      <CompareTable
        headers={["Balans", "Qayerda", "Unda nima bor"]}
        rows={[
          [<strong key="a">Telegram Stars</strong>, "Telegram → Sozlamalar → My Stars", "Yulduzlar — sovg‘a, reaksiya, bot ichidagi xarid uchun"],
          [<strong key="b">StarsPaymee balansi</strong>, "@StarsPaymee_bot → Balans", "So‘m — botdagi keyingi xaridlarni to‘lash uchun"],
          [<strong key="c">Bot yoki o‘yin ichidagi balans</strong>, "O‘sha ilovaning o‘zida", "Uning o‘z birligi — Stars bilan sotib olinadi, lekin Stars emas"],
        ]}
      />
      <p>
        Stars sotib olganingizda yulduzlar <b>birinchi</b> balansga tushadi. StarsPaymee’ning so‘m balansi
        esa Stars’ni botga sotganingizda yoki uni to‘ldirganingizda ishlaydi —{" "}
        <Link href="/blog/telegram-stars-sotish-premium-pubg-uc">Stars sotish va balans</Link> maqolasida.
      </p>

      <h2 id="tasdiqlash">Xarid tushganini 3 qadamda tasdiqlash</h2>
      <Steps>
        <Step title="1. Botda holat «yetkazildi»">
          «Buyurtmalarim»da oxirgi buyurtma — sana va miqdor to‘g‘ri, holat «yetkazildi».
        </Step>
        <Step title="2. Telegram’da kirim bor">
          My Stars → tranzaksiyalar: o‘sha vaqtga yaqin, o‘sha miqdorda kirim.
        </Step>
        <Step title="3. Balans oshgan">
          Xariddan oldingi balans + buyurtma miqdori = hozirgi balans. Orada sarflamagan bo‘lsangiz, son
          aynan mos keladi.
        </Step>
      </Steps>
      <InlineCta text="Qo‘shimcha Stars kerak bo‘lsa — paketni tanlang, 5 soniyada tushadi." product={{ kind: "stars", amount: 100 }} />

      <h2 id="boshqa-odam">Boshqa odamga olgan bo‘lsangiz</h2>
      <p>
        Buyurtmada do‘stingizning username’i yozilgan bo‘lsa, yulduzlar <b>uning</b> My Stars’ida
        ko‘rinadi, sizning balansingiz o‘zgarmaydi. Siz faqat botdagi «yetkazildi» holatini ko‘rasiz;
        tasdiqlash uchun do‘stingiz o‘z bo‘limini ochadi. Bu oqim to‘liq —{" "}
        <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">boshqa odamga Stars olib berish</Link>{" "}
        maqolasida.
      </p>

      <h2 id="korinmasa">Yulduzlar ko‘rinmasa</h2>
      <InfoGrid>
        <InfoCard emoji="🔄" title="Ekran eskirgan">
          My Stars’ni yopib-oching yoki ilovani qayta ishga tushiring. Ko‘pincha shu yetadi.
        </InfoCard>
        <InfoCard emoji="⏳" title="To‘lov hali tasdiqlanmagan">
          Botda holat «kutilmoqda» bo‘lsa, yulduzlar hali yuborilmagan. Kartaga o‘tkazmada summa aynan
          ko‘rsatilgandek bo‘lishi kerak.
        </InfoCard>
        <InfoCard emoji="👤" title="Boshqa akkaunt">
          Buyurtmada boshqa username turgan bo‘lsa, yulduzlar o‘sha odamda. Kartochkani buyurtma
          tafsilotidan tekshiring.
        </InfoCard>
        <InfoCard emoji="🧩" title="Boshqa balans">
          Bot ichidagi yoki StarsPaymee’ning so‘m balansiga qarayotgan bo‘lishingiz mumkin — yuqoridagi
          jadvalga qarang.
        </InfoCard>
      </InfoGrid>
      <p>
        Holat «yetkazildi», 10 daqiqa o‘tdi, lekin yulduzlar yo‘q — to‘liq tartib va qaytarish qoidalari{" "}
        <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Stars kelmadi — nima qilish kerak</Link>{" "}
        maqolasida. Murojaatda buyurtma raqami va to‘lov cheki kerak bo‘ladi.
      </p>
      <Notice label="Xavfsizlik">
        Balansni tekshirish uchun faqat o‘z Telegram’ingizga odatdagidek kirasiz. Hech kim — na bot, na
        «yordamchi» — sizdan <b>parol, SMS-kod yoki akkauntga kirishni</b> so‘ramasligi kerak.
      </Notice>

      <Sources
        label="Foydali havolalar"
        items={[
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "«Buyurtmalarim» — holat va sana" },
          { href: "/stars", label: "Telegram Stars sotib olish", note: "paketlar va narxlar" },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "buyurtma raqami va chek bilan" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      В приложении Telegram откройте <b>Настройки → My Stars</b> — там текущий баланс и список всех
      поступлений и списаний. Если покупали через <b>@StarsPaymee_bot</b>, в разделе <b>«Мои заказы»</b>{" "}
      статус заказа должен быть «доставлено» — после подтверждения оплаты звёзды обычно приходят{" "}
      <b>за 5 секунд</b>. Если одно с другим не сходится, перезапустите приложение и подождите до 10
      минут.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#telegramda", label: "Где баланс виден в Telegram" },
          { href: "#botda", label: "Проверка статуса заказа в боте" },
          { href: "#uch-balans", label: "Не путайте три разных баланса" },
          { href: "#tasdiqlash", label: "Подтвердить зачисление за 3 шага" },
          { href: "#boshqa-odam", label: "Если покупали другому человеку" },
          { href: "#korinmasa", label: "Если звёзд не видно" },
        ]}
      />

      <h2 id="telegramda">Где баланс виден в Telegram</h2>
      <Steps>
        <Step title="На телефоне">
          Telegram → <b>Настройки</b> → <b>My Stars</b> (в некоторых версиях «Мои звёзды»). Сверху баланс,
          ниже транзакции: когда, сколько, откуда пришло или на что потрачено.
        </Step>
        <Step title="На компьютере">
          Telegram Desktop → <b>Settings</b> → <b>My Stars</b>. Список тот же, что на телефоне.
        </Step>
        <Step title="Если не обновляется">
          Закройте и снова откройте раздел или перезапустите приложение — баланс берётся с сервера, а
          старый экран может быть из кеша.
        </Step>
      </Steps>
      <KeyFacts label="Что показывает список транзакций">
        <li>
          <b>Поступления</b> — дата и количество пришедших звёзд. Stars от StarsPaymee тоже здесь.
        </li>
        <li>
          <b>Списания</b> — звёзды, потраченные на подарок, покупку в боте или подписку.
        </li>
        <li>
          <b>Баланс</b> — остаток после списаний; именно это число сравнивают с количеством в заказе.
        </li>
      </KeyFacts>

      <h2 id="botda">Проверка статуса заказа в боте</h2>
      <p>
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
          @StarsPaymee_bot
        </a>{" "}
        → <b>«Мои заказы»</b>. У каждого заказа есть дата, время, количество и статус:
      </p>
      <CompareTable
        headers={["Статус", "Что значит", "Что делать"]}
        rows={[
          [<strong key="a">Ожидание</strong>, "Оплата ещё не подтверждена", "При переводе на карту подождите 1–2 минуты; сумма должна быть ровно как указано"],
          [<strong key="b">Оплачено</strong>, "Платёж получен, идёт доставка", "Обычно несколько секунд"],
          [<strong key="c">Доставлено</strong>, "Звёзды зачислены получателю", "Проверьте My Stars в Telegram"],
          [<strong key="d">Истёк</strong>, "Оплата не пришла в отведённое время", "Если деньги списаны — в @StarsPaymeeSupport с чеком"],
        ]}
      />

      <h2 id="uch-balans">Не путайте три разных баланса</h2>
      <p>
        Слово «баланс» встречается в трёх местах, и они <b>не связаны</b> между собой. Отсюда больше всего
        путаницы:
      </p>
      <CompareTable
        headers={["Баланс", "Где", "Что на нём"]}
        rows={[
          [<strong key="a">Telegram Stars</strong>, "Telegram → Настройки → My Stars", "Звёзды — на подарки, реакции, покупки в ботах"],
          [<strong key="b">Баланс StarsPaymee</strong>, "@StarsPaymee_bot → Баланс", "Сумы — на следующие покупки в боте"],
          [<strong key="c">Баланс внутри бота или игры</strong>, "В самом приложении", "Его собственная единица — покупается за Stars, но это не Stars"],
        ]}
      />
      <p>
        Купленные Stars приходят на <b>первый</b> баланс. Сумовый баланс StarsPaymee работает, когда вы
        продаёте Stars боту или пополняете его — об этом в статье{" "}
        <Link href="/blog/telegram-stars-sotish-premium-pubg-uc">продажа Stars и баланс</Link>.
      </p>

      <h2 id="tasdiqlash">Подтвердить зачисление за 3 шага</h2>
      <Steps>
        <Step title="1. В боте статус «доставлено»">
          В «Моих заказах» последний заказ — дата и количество верны, статус «доставлено».
        </Step>
        <Step title="2. В Telegram есть поступление">
          My Stars → транзакции: поступление на то же количество примерно в то же время.
        </Step>
        <Step title="3. Баланс вырос">
          Баланс до покупки + количество в заказе = текущий баланс. Если вы ничего не тратили, число
          сойдётся точно.
        </Step>
      </Steps>
      <InlineCta text="Нужны ещё Stars — выберите пакет, придут за 5 секунд." product={{ kind: "stars", amount: 100 }} />

      <h2 id="boshqa-odam">Если покупали другому человеку</h2>
      <p>
        Если в заказе стоял username друга, звёзды видны в <b>его</b> My Stars, а ваш баланс не меняется.
        Вы видите только статус «доставлено» в боте; для подтверждения друг открывает свой раздел. Весь
        этот порядок — в статье{" "}
        <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">покупка Stars другому человеку</Link>.
      </p>

      <h2 id="korinmasa">Если звёзд не видно</h2>
      <InfoGrid>
        <InfoCard emoji="🔄" title="Устаревший экран">
          Закройте и откройте My Stars или перезапустите приложение. Чаще всего этого достаточно.
        </InfoCard>
        <InfoCard emoji="⏳" title="Оплата ещё не подтверждена">
          Если в боте статус «ожидание», звёзды ещё не отправлены. При переводе на карту сумма должна быть
          ровно как указано.
        </InfoCard>
        <InfoCard emoji="👤" title="Другой аккаунт">
          Если в заказе был другой username, звёзды у того человека. Проверьте карточку в деталях заказа.
        </InfoCard>
        <InfoCard emoji="🧩" title="Другой баланс">
          Возможно, вы смотрите на баланс внутри бота или на сумовый баланс StarsPaymee — см. таблицу выше.
        </InfoCard>
      </InfoGrid>
      <p>
        Статус «доставлено», прошло 10 минут, а звёзд нет — полный порядок действий и правила возврата в
        статье <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Stars не пришли — что делать</Link>.
        Для обращения понадобятся номер заказа и чек об оплате.
      </p>
      <Notice label="Безопасность">
        Чтобы проверить баланс, вы просто заходите в свой Telegram как обычно. Никто — ни бот, ни
        «помощник» — не должен просить у вас <b>пароль, SMS-код или вход в аккаунт</b>.
      </Notice>

      <Sources
        label="Полезные ссылки"
        items={[
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "«Мои заказы» — статус и дата" },
          { href: "/stars", label: "Купить Telegram Stars", note: "пакеты и цены" },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "с номером заказа и чеком" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      In the Telegram app open <b>Settings → My Stars</b> — it shows your current balance and every
      incoming and outgoing transaction. If you bought through <b>@StarsPaymee_bot</b>, the order in{" "}
      <b>“My orders”</b> should read “delivered” — once the payment is confirmed, the Stars usually arrive{" "}
      <b>within 5 seconds</b>. If the two do not match, restart the app and allow up to 10 minutes.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#telegramda", label: "Where the balance shows in Telegram" },
          { href: "#botda", label: "Checking the order status in the bot" },
          { href: "#uch-balans", label: "Do not mix up three different balances" },
          { href: "#tasdiqlash", label: "Confirming the purchase in 3 steps" },
          { href: "#boshqa-odam", label: "If you bought for someone else" },
          { href: "#korinmasa", label: "If the Stars are not showing" },
        ]}
      />

      <h2 id="telegramda">Where the balance shows in Telegram</h2>
      <Steps>
        <Step title="On a phone">
          Telegram → <b>Settings</b> → <b>My Stars</b>. The balance is at the top, the transactions below:
          when, how many, where from or what they were spent on.
        </Step>
        <Step title="On a computer">
          Telegram Desktop → <b>Settings</b> → <b>My Stars</b>. The same list as on the phone.
        </Step>
        <Step title="If it does not update">
          Close and reopen the section or restart the app — the balance comes from the server, and an old
          screen may be cached.
        </Step>
      </Steps>
      <KeyFacts label="What the transaction list shows">
        <li>
          <b>Incoming</b> — the date and amount of Stars received. Stars from StarsPaymee appear here too.
        </li>
        <li>
          <b>Outgoing</b> — Stars spent on a gift, an in-bot purchase or a subscription.
        </li>
        <li>
          <b>Balance</b> — what is left after spending; this is the number you compare with the order
          amount.
        </li>
      </KeyFacts>

      <h2 id="botda">Checking the order status in the bot</h2>
      <p>
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
          @StarsPaymee_bot
        </a>{" "}
        → <b>“My orders”</b>. Each order shows a date, time, amount and status:
      </p>
      <CompareTable
        headers={["Status", "Meaning", "What to do"]}
        rows={[
          [<strong key="a">Pending</strong>, "Payment not confirmed yet", "For a card transfer wait 1–2 minutes; the amount must be exactly as shown"],
          [<strong key="b">Paid</strong>, "Payment received, delivery in progress", "Usually a few seconds"],
          [<strong key="c">Delivered</strong>, "Stars credited to the recipient", "Check My Stars in Telegram"],
          [<strong key="d">Expired</strong>, "Payment did not arrive in time", "If money was taken — @StarsPaymeeSupport with the receipt"],
        ]}
      />

      <h2 id="uch-balans">Do not mix up three different balances</h2>
      <p>
        The word “balance” appears in three places, and they are <b>not connected</b>. Most of the
        confusion comes from this:
      </p>
      <CompareTable
        headers={["Balance", "Where", "What it holds"]}
        rows={[
          [<strong key="a">Telegram Stars</strong>, "Telegram → Settings → My Stars", "Stars — for gifts, reactions, in-bot purchases"],
          [<strong key="b">StarsPaymee balance</strong>, "@StarsPaymee_bot → Balance", "Som — for your next purchases in the bot"],
          [<strong key="c">A bot’s or game’s own balance</strong>, "Inside that app", "Its own unit — bought with Stars, but not Stars"],
        ]}
      />
      <p>
        Stars you buy land on the <b>first</b> balance. StarsPaymee’s som balance comes into play when you
        sell Stars to the bot or top it up — see{" "}
        <Link href="/blog/telegram-stars-sotish-premium-pubg-uc">selling Stars and the balance</Link>.
      </p>

      <h2 id="tasdiqlash">Confirming the purchase in 3 steps</h2>
      <Steps>
        <Step title="1. The bot says “delivered”">
          In “My orders” the latest order has the right date and amount and the status “delivered”.
        </Step>
        <Step title="2. Telegram shows an incoming transaction">
          My Stars → transactions: an incoming entry for the same amount at about the same time.
        </Step>
        <Step title="3. The balance went up">
          Balance before the purchase + order amount = balance now. If you spent nothing in between, the
          numbers match exactly.
        </Step>
      </Steps>
      <InlineCta text="Need more Stars? Pick a pack — they arrive in 5 seconds." product={{ kind: "stars", amount: 100 }} />

      <h2 id="boshqa-odam">If you bought for someone else</h2>
      <p>
        If the order carried a friend’s username, the Stars show in <b>their</b> My Stars and your balance
        does not change. You only see the “delivered” status in the bot; to confirm, your friend opens
        their own section. The whole flow is in{" "}
        <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">buying Stars for someone else</Link>.
      </p>

      <h2 id="korinmasa">If the Stars are not showing</h2>
      <InfoGrid>
        <InfoCard emoji="🔄" title="A stale screen">
          Close and reopen My Stars or restart the app. That is usually enough.
        </InfoCard>
        <InfoCard emoji="⏳" title="Payment not confirmed yet">
          If the bot says “pending”, the Stars have not been sent yet. A card transfer must match the
          amount exactly.
        </InfoCard>
        <InfoCard emoji="👤" title="Another account">
          If the order had a different username, the Stars are with that person. Check the card in the
          order details.
        </InfoCard>
        <InfoCard emoji="🧩" title="Another balance">
          You may be looking at a bot’s own balance or StarsPaymee’s som balance — see the table above.
        </InfoCard>
      </InfoGrid>
      <p>
        Status “delivered”, 10 minutes gone, still no Stars — the full procedure and refund rules are in{" "}
        <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Stars did not arrive — what to do</Link>. You
        will need the order number and the payment receipt.
      </p>
      <Notice label="Security">
        Checking your balance only means opening your own Telegram as usual. Nobody — not the bot, not a
        “helper” — should ask you for a <b>password, SMS code or account login</b>.
      </Notice>

      <Sources
        label="Useful links"
        items={[
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "“My orders” — status and date" },
          { href: "/stars", label: "Buy Telegram Stars", note: "packs and prices" },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "with the order number and receipt" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Telegram Stars balansi qayerda ko‘rinadi?",
    answer: "Telegram → Sozlamalar → My Stars. U yerda joriy balans va barcha kirim-chiqim ro‘yxati turadi; kompyuterda Settings → My Stars.",
  },
  {
    question: "Sotib olgan Stars qachon balansga tushadi?",
    answer: "To‘lov tasdiqlangach odatda 5 soniyada. Kartaga o‘tkazmada tasdiq SMS orqali 1–2 daqiqa olishi mumkin — summa aynan ko‘rsatilgandek bo‘lsin.",
  },
  {
    question: "Buyurtma yetkazilganini botda qanday ko‘raman?",
    answer: "@StarsPaymee_bot → «Buyurtmalarim»: har buyurtmada sana, vaqt, miqdor va holat. «Yetkazildi» — yulduzlar tushgan.",
  },
  {
    question: "Botda «yetkazildi», Telegram’da ko‘rinmayapti — nima qilay?",
    answer: "My Stars’ni yopib-oching yoki ilovani qayta ishga tushiring. 10 daqiqadan keyin ham yo‘q bo‘lsa — «Stars kelmadi» maqolasidagi tartib: buyurtma raqami va chek bilan @StarsPaymeeSupport.",
  },
  {
    question: "StarsPaymee balansi bilan Telegram Stars balansi bir xilmi?",
    answer: "Yo‘q. Telegram Stars — yulduzlar, Telegram ichida; StarsPaymee balansi — so‘m, botdagi xaridlar uchun. Sotib olingan Stars Telegram balansiga tushadi.",
  },
  {
    question: "Do‘stimga olgan Stars mening balansimda ko‘rinadimi?",
    answer: "Yo‘q — yulduzlar buyurtmada yozilgan username egasining My Stars’ida ko‘rinadi. Siz faqat botdagi «yetkazildi» holatini ko‘rasiz.",
  },
  {
    question: "Balansni tekshirish uchun parol kerakmi?",
    answer: "Yo‘q, o‘z Telegram’ingizga odatdagidek kirasiz. Parol, SMS-kod yoki akkauntga kirishni hech kim so‘ramasligi kerak.",
  },
];

const ruFaq = [
  {
    question: "Где виден баланс Telegram Stars?",
    answer: "Telegram → Настройки → My Stars. Там текущий баланс и список всех поступлений и списаний; на компьютере — Settings → My Stars.",
  },
  {
    question: "Когда купленные Stars приходят на баланс?",
    answer: "Обычно за 5 секунд после подтверждения оплаты. При переводе на карту подтверждение по SMS может занять 1–2 минуты — сумма должна быть ровно как указано.",
  },
  {
    question: "Как увидеть в боте, что заказ доставлен?",
    answer: "@StarsPaymee_bot → «Мои заказы»: у каждого заказа дата, время, количество и статус. «Доставлено» — звёзды зачислены.",
  },
  {
    question: "В боте «доставлено», а в Telegram не видно — что делать?",
    answer: "Закройте и откройте My Stars или перезапустите приложение. Если через 10 минут пусто — порядок из статьи «Stars не пришли»: в @StarsPaymeeSupport с номером заказа и чеком.",
  },
  {
    question: "Баланс StarsPaymee и баланс Telegram Stars — одно и то же?",
    answer: "Нет. Telegram Stars — звёзды внутри Telegram; баланс StarsPaymee — сумы для покупок в боте. Купленные Stars приходят на баланс Telegram.",
  },
  {
    question: "Stars, купленные другу, видны на моём балансе?",
    answer: "Нет — звёзды видны в My Stars владельца username из заказа. Вы видите только статус «доставлено» в боте.",
  },
  {
    question: "Нужен ли пароль, чтобы проверить баланс?",
    answer: "Нет, вы просто заходите в свой Telegram как обычно. Пароль, SMS-код или вход в аккаунт никто просить не должен.",
  },
];

const enFaq = [
  {
    question: "Where does the Telegram Stars balance show?",
    answer: "Telegram → Settings → My Stars. It shows the current balance and every incoming and outgoing transaction; on a computer, Settings → My Stars.",
  },
  {
    question: "When do purchased Stars reach the balance?",
    answer: "Usually within 5 seconds of the payment being confirmed. A card transfer is confirmed by SMS and may take 1–2 minutes — the amount must be exactly as shown.",
  },
  {
    question: "How do I see in the bot that the order was delivered?",
    answer: "@StarsPaymee_bot → “My orders”: each order shows a date, time, amount and status. “Delivered” means the Stars were credited.",
  },
  {
    question: "The bot says “delivered” but Telegram shows nothing — what now?",
    answer: "Close and reopen My Stars or restart the app. If still empty after 10 minutes, follow the “Stars did not arrive” article: contact @StarsPaymeeSupport with the order number and receipt.",
  },
  {
    question: "Are the StarsPaymee balance and the Telegram Stars balance the same?",
    answer: "No. Telegram Stars are stars inside Telegram; the StarsPaymee balance is som for purchases in the bot. Purchased Stars go to the Telegram balance.",
  },
  {
    question: "Do Stars I bought for a friend show on my balance?",
    answer: "No — they show in the My Stars of whoever owns the username in the order. You only see the “delivered” status in the bot.",
  },
  {
    question: "Do I need a password to check the balance?",
    answer: "No, you just open your own Telegram as usual. Nobody should ask for a password, SMS code or account login.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  keywords: [
    "telegram stars balansini ko‘rish",
    "stars balansi qayerda",
    "my stars telegram",
    "stars tushganini tekshirish",
    "telegram stars tranzaksiyalar",
    "где посмотреть баланс звёзд в телеграм",
    "как проверить баланс stars",
    "check telegram stars balance",
  ],
  howToSteps: [
    { name: "My Stars’ni oching", text: "Telegram → Sozlamalar → My Stars — balans va tranzaksiyalar." },
    { name: "Botda holatni ko‘ring", text: "@StarsPaymee_bot → «Buyurtmalarim» — holat «yetkazildi» bo‘lishi kerak." },
    { name: "Kirimni solishtiring", text: "Tranzaksiyalarda buyurtma miqdoridagi kirim bor; balans shunga oshgan." },
    { name: "Ko‘rinmasa", text: "Ilovani qayta oching; 10 daqiqadan keyin ham yo‘q bo‘lsa — buyurtma raqami bilan @StarsPaymeeSupport." },
  ],
  locales: {
    uz: {
      title: "Telegram Stars balansini qanday tekshirish mumkin: qayerda ko‘rinadi va xarid tushganini bilish",
      excerpt:
        "Stars balansi Telegram’ning qaysi bo‘limida turadi, botdagi buyurtma holati nimani bildiradi, uch xil balansni qanday farqlash va yulduz ko‘rinmasa nimadan boshlash.",
      metaTitle: "Telegram Stars balansini qanday tekshirish",
      metaDescription:
        "Stars balansi Telegram → Sozlamalar → My Stars’da; botda «Buyurtmalarim» holati «yetkazildi» bo‘lishi kerak. Uch xil balansni farqlash va yulduz ko‘rinmasa nima qilish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars kerakmi?",
      ctaBody: "Paketni tanlang va to‘lang — yulduzlar 5 soniyada My Stars’da ko‘rinadi, botda esa «yetkazildi» holati.",
      faq: uzFaq,
    },
    ru: {
      title: "Как проверить баланс Telegram Stars: где он виден и как убедиться, что звёзды пришли",
      excerpt:
        "В каком разделе Telegram лежит баланс Stars, что значат статусы заказа в боте, как не спутать три разных баланса и с чего начать, если звёзд не видно.",
      metaTitle: "Как проверить баланс Telegram Stars",
      metaDescription:
        "Баланс Stars — в Telegram → Настройки → My Stars; в боте статус заказа в «Моих заказах» должен быть «доставлено». Три разных баланса и что делать, если звёзд нет.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars?",
      ctaBody: "Выберите пакет и оплатите — звёзды появятся в My Stars за 5 секунд, а в боте будет статус «доставлено».",
      faq: ruFaq,
    },
    en: {
      title: "How to check your Telegram Stars balance: where it shows and how to confirm a purchase arrived",
      excerpt:
        "Which Telegram section holds the Stars balance, what the order statuses in the bot mean, how to keep three different balances apart and where to start if the Stars are not showing.",
      metaTitle: "How to check your Telegram Stars balance",
      metaDescription:
        "The Stars balance is under Telegram → Settings → My Stars; in the bot, the order in “My orders” should read “delivered”. Three different balances and what to do if Stars are missing.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars?",
      ctaBody: "Pick a pack and pay — the Stars show in My Stars within 5 seconds, and the bot shows “delivered”.",
      faq: enFaq,
    },
  },
};
