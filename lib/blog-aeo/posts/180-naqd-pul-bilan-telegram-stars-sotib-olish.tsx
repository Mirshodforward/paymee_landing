import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  No,
  Notice,
  Sources,
  Step,
  Steps,
  Toc,
  Yes,
} from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "naqd-pul-bilan-telegram-stars-sotib-olish";

/**
 * Naqd pulni botga yetkazishning uchta yo'li.
 *
 * MUHIM: bot ichida «Paynet» degan alohida to'lov tugmasi yo'q. Naqd pul
 * har doim avval kartaga yoki hamyonga tushadi, keyin oddiy to'lov bo'ladi.
 * Shuning uchun jadval «qayerda naqd topshirasiz → botda nima tanlaysiz»
 * mantiqida tuzilgan.
 */
function RouteTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Naqdni qayerda topshirasiz", "Pul qayerga tushadi", "Botda nima tanlaysiz"],
      rows: [
        ["Terminal yoki o‘z-o‘ziga xizmat kioski", "O‘z kartangizga", "Kartaga o‘tkazma, Click yoki Payme"],
        ["Bank kassasi yoki cash-in bankomat", "O‘z kartangizga", "Kartaga o‘tkazma, Click yoki Payme"],
        ["Terminalda hamyon to‘ldirish", "Click yoki Payme hamyoniga", "Click yoki Payme"],
        ["Kartasi bor odamga naqd berasiz", "Uning kartasiga", "Kartaga o‘tkazma"],
      ],
    },
    ru: {
      headers: ["Где вносите наличные", "Куда попадают деньги", "Что выбираете в боте"],
      rows: [
        ["Терминал или киоск самообслуживания", "На вашу карту", "Перевод на карту, Click или Payme"],
        ["Касса банка или банкомат с cash-in", "На вашу карту", "Перевод на карту, Click или Payme"],
        ["Пополнение кошелька в терминале", "В кошелёк Click или Payme", "Click или Payme"],
        ["Отдаёте наличные владельцу карты", "На его карту", "Перевод на карту"],
      ],
    },
    en: {
      headers: ["Where you hand over the cash", "Where the money lands", "What you pick in the bot"],
      rows: [
        ["A terminal or self-service kiosk", "On your own card", "Card transfer, Click or Payme"],
        ["A bank desk or a cash-in ATM", "On your own card", "Card transfer, Click or Payme"],
        ["Wallet top-up at a terminal", "In a Click or Payme wallet", "Click or Payme"],
        ["You give cash to someone with a card", "On their card", "Card transfer"],
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
      Naqd pul bilan Telegram Stars va Premium olish <b>mumkin</b>, lekin bitta nuance bor:{" "}
      <b>@StarsPaymee_bot</b> ichida «naqd» yoki «Paynet» degan alohida tugma <b>yo‘q</b>. Naqd pul avval{" "}
      <b>kartaga yoki Click/Payme hamyoniga</b> tushadi — terminalda, bank kassasida yoki cash-in
      bankomatda — keyin botda oddiy to‘lovni tanlaysiz. Ya’ni <b>o‘z kartangiz bo‘lmasa ham bo‘ladi</b>.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#haqiqat", label: "Botda «naqd» tugmasi bormi" },
          { href: "#yollar", label: "Naqd puldan yulduzgacha: to‘rt yo‘l" },
          { href: "#aniq-summa", label: "Nega summa tiyinigacha to‘g‘ri bo‘lishi kerak" },
          { href: "#qadamlar", label: "Qadam-baqadam" },
          { href: "#vaqt", label: "Qancha vaqt oladi" },
          { href: "#kimga", label: "Kimga mos, kimga mos emas" },
          { href: "#xato", label: "Qanday xatolar uchraydi" },
        ]}
      />

      <h2 id="haqiqat">Botda «naqd» degan tugma bormi</h2>
      <p>
        Bu savolga to‘g‘ri javob berishni istaymiz, chunki internetda ko‘p joyda «Paynet orqali to‘lang»
        deb yoziladi va odam terminalga borib, u yerda «StarsPaymee» degan xizmatni qidiradi.
      </p>
      <Notice label="Aniq holat">
        Botda to‘lov usullari ro‘yxatida <b>Paynet alohida turmaydi</b>. Paynet va boshqa terminallar —
        bu <b>naqd pulni kartaga yoki hamyonga aylantiradigan vosita</b>, bot bilan bevosita bog‘liq
        emas. Naqd pul kartaga tushgandan keyin to‘lov oddiy tarzda kechadi.
      </Notice>
      <p>
        Bu yomon xabar emas — aksincha, shu sababli <b>bank kartangiz umuman bo‘lmasa ham</b> xarid
        qilishingiz mumkin. Faqat yo‘lni to‘g‘ri tanlash kerak.
      </p>

      <h2 id="yollar">Naqd puldan yulduzgacha: to‘rt yo‘l</h2>
      <RouteTable locale="uz" />

      <InfoGrid>
        <InfoCard emoji="🏧" title="Kartani to‘ldirish">
          Ko‘pchilik terminal va kiosklarda «kartani to‘ldirish» xizmati bor: karta raqamini kiritasiz,
          naqd pulni solasiz. Shundan keyin karta bilan oddiy to‘laysiz.
        </InfoCard>
        <InfoCard emoji="🏦" title="Bank kassasi">
          Eng ishonchli yo‘l. Kassada kartangizni to‘ldirasiz, kvitansiya olasiz. Cash-in bankomatlar
          ham xuddi shunday ishlaydi.
        </InfoCard>
        <InfoCard emoji="📱" title="Hamyonni to‘ldirish">
          Click yoki Payme hamyonini naqd bilan to‘ldirsangiz, botda shu usulni tanlaysiz va summa
          tayyor holda chiqadi.
        </InfoCard>
        <InfoCard emoji="🤝" title="Kartasi bor odam">
          Kartasi yo‘q o‘quvchilar ko‘pincha shunday qiladi: ota-ona yoki do‘stga naqd beradi, u
          kartadan o‘tkazadi.
        </InfoCard>
      </InfoGrid>

      <p>
        Uchinchi yo‘l — hamyon to‘ldirish — eng qulayi, chunki keyin botda{" "}
        <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">Payme</Link> yoki{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">Click</Link> ni tanlaysiz va
        summani qo‘lda yozish kerak bo‘lmaydi.
      </p>

      <InlineCta text="Botni oching va narxni ko‘ring — to‘lovni keyin tanlaysiz." product={{ kind: "stars", amount: 100 }} />

      <h2 id="aniq-summa">Nega summa tiyinigacha to‘g‘ri bo‘lishi kerak</h2>
      <p>
        Agar kartaga o‘tkazma yo‘lini tanlasangiz, bitta qoidani eslab qolish kerak:{" "}
        <b>summa aynan bot ko‘rsatgandek bo‘lishi shart</b>.
      </p>
      <p>
        Sababi oddiy: to‘lov bank SMS’i orqali <b>summa bo‘yicha</b> tanib olinadi. Bot 11 000 so‘m
        kutayotgan bo‘lsa-yu, siz 11 500 yuborsangiz, tizim bu to‘lovni buyurtmaga bog‘lay olmaydi —
        qo‘lda tekshirish kerak bo‘ladi va vaqt ketadi.
      </p>
      <KeyFacts label="Kartaga o‘tkazganda">
        <li>
          <b>Yaxlitlamang</b> — 11 000 bo‘lsa, aynan 11 000.
        </li>
        <li>
          <b>Komissiyani hisobga oling</b> — kartangizdan yechiladigan emas, kartaga{" "}
          <b>tushadigan</b> summa to‘g‘ri bo‘lishi kerak.
        </li>
        <li>
          <b>Ikkita buyurtmani birlashtirmang</b> — har biriga alohida to‘lov.
        </li>
        <li>
          <b>Kvitansiyani saqlang</b> — chalkashlik bo‘lsa, eng tez dalil shu.
        </li>
      </KeyFacts>
      <p>
        Click yoki Payme tanlasangiz bu muammo umuman yo‘q — summa ilovada tayyor turadi va uni
        o‘zgartirib bo‘lmaydi.
      </p>

      <h2 id="qadamlar">Qadam-baqadam: naqd pul bilan xarid</h2>
      <Steps>
        <Step title="1. Avval botda narxni bilib oling">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          da miqdorni yoki Premium muddatini tanlang. Aniq summani ko‘rasiz — terminalga borishdan
          oldin shu raqamni bilib olgan ma’qul.
        </Step>
        <Step title="2. Naqd pulni kartaga yoki hamyonga soling">
          Terminal, bank kassasi yoki cash-in bankomat. Kerakli summadan bir oz ko‘proq solish
          xavfsizroq — komissiya bo‘lishi mumkin.
        </Step>
        <Step title="3. Botga qayting va to‘lov usulini tanlang">
          Kartaga to‘ldirgan bo‘lsangiz — kartaga o‘tkazma yoki Click/Payme. Hamyonni to‘ldirgan
          bo‘lsangiz — Click yoki Payme.
        </Step>
        <Step title="4. To‘lang">
          Shlyuz (Click/Payme) bo‘lsa — tayyor summani tasdiqlaysiz. Kartaga o‘tkazma bo‘lsa —
          ko‘rsatilgan kartaga aynan o‘sha summani yuborasiz.
        </Step>
        <Step title="5. Yetkazishni kuting">
          To‘lov aniqlangach buyurtma avtomatik ishga tushadi. Chek yuborish kerak emas.
        </Step>
      </Steps>

      <h2 id="vaqt">Qancha vaqt oladi</h2>
      <CompareTable
        headers={["Bosqich", "Odatda"]}
        rows={[
          [<strong key="a">Terminalda naqdni solish</strong>, "1–3 daqiqa"],
          [<strong key="b">Pulning kartaga tushishi</strong>, "Ko‘pincha bir zumda"],
          [<strong key="c">Botda to‘lov</strong>, "1 daqiqa"],
          [<strong key="d">To‘lovning aniqlanishi</strong>, "Bir necha daqiqa"],
          [<strong key="e">Yetkazish</strong>, "To‘lovdan keyin avtomatik"],
        ]}
      />
      <p>
        Ya’ni naqd yo‘l karta yo‘lidan <b>sekinroq emas</b> — shunchaki bitta qo‘shimcha qadam bor.
      </p>

      <h2 id="kimga">Kimga mos, kimga mos emas</h2>
      <InfoGrid>
        <InfoCard emoji="✅" title="Juda mos">
          <Yes>Bank kartasi yo‘q o‘quvchi va talabalarga</Yes>
          <Yes>Naqd bilan ishlashni afzal ko‘radiganlarga</Yes>
          <Yes>Kartasini internetda ishlatishni istamaydiganlarga</Yes>
        </InfoCard>
        <InfoCard emoji="⚠️" title="Unchalik mos emas">
          <No>Juda shoshayotganlarga — bitta qo‘shimcha qadam bor</No>
          <No>Yaqinda terminal yoki bank bo‘lmaganlarga</No>
          <No>Har kuni kichik xarid qiladiganlarga — hamyon to‘ldirish qulayroq</No>
        </InfoCard>
      </InfoGrid>
      <p>
        Xalqaro Visa yoki Mastercard bu yo‘lda ham, boshqa yo‘llarda ham <b>kerak emas</b>. Bu haqda
        alohida:{" "}
        <Link href="/blog/telegram-stars-kartasiz-sotib-olish">kartasiz Telegram Stars sotib olish</Link>.
      </p>

      <h2 id="xato">Qanday xatolar uchraydi</h2>
      <InfoGrid>
        <InfoCard emoji="🔢" title="Summa mos kelmadi">
          Eng ko‘p uchraydigani. Kartaga o‘tkazganda summani yaxlitlab yuborish — to‘lov avtomatik
          topilmaydi. Kvitansiya bilan yozing, qo‘lda bog‘lanadi.
        </InfoCard>
        <InfoCard emoji="🏧" title="Terminalda xizmat topilmadi">
          «StarsPaymee» ni qidirmang — u yerda yo‘q. Siz qidirayotgan xizmat «kartani to‘ldirish»
          yoki «Click/Payme hamyonini to‘ldirish».
        </InfoCard>
        <InfoCard emoji="💸" title="Komissiya yeb qo‘ydi">
          Terminal komissiya olsa, kartaga kamroq tushadi. Shuning uchun biroz ko‘proq soling.
        </InfoCard>
        <InfoCard emoji="⏰" title="Pul tushmadi">
          Kvitansiyani saqlang va terminal egasiga murojaat qiling — bu bosqich bot bilan bog‘liq
          emas.
        </InfoCard>
      </InfoGrid>

      <Notice label="Diqqat">
        Hech kim sizdan Telegram <b>parolingizni yoki SMS-kodingizni</b> so‘ramasligi kerak — na bot,
        na terminal, na «yordam beruvchi» odam. Buyurtma uchun faqat ochiq @username yetarli.
      </Notice>

      <Sources
        label="Foydali havolalar"
        items={[
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "narxni ko‘rish uchun" },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "qo‘llab-quvvatlash" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Купить Telegram Stars и Premium за наличные <b>можно</b>, но есть нюанс: внутри{" "}
      <b>@StarsPaymee_bot</b> отдельной кнопки «наличные» или «Paynet» <b>нет</b>. Наличные сначала
      попадают <b>на карту или в кошелёк Click/Payme</b> — через терминал, кассу банка или банкомат с
      cash-in, — а уже потом вы выбираете в боте обычный способ оплаты. То есть{" "}
      <b>своя карта не обязательна</b>.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#haqiqat", label: "Есть ли в боте кнопка «наличные»" },
          { href: "#yollar", label: "От наличных до звёзд: четыре пути" },
          { href: "#aniq-summa", label: "Почему сумма должна совпадать точно" },
          { href: "#qadamlar", label: "Пошагово" },
          { href: "#vaqt", label: "Сколько времени занимает" },
          { href: "#kimga", label: "Кому подходит, кому нет" },
          { href: "#xato", label: "Какие бывают ошибки" },
        ]}
      />

      <h2 id="haqiqat">Есть ли в боте кнопка «наличные»</h2>
      <p>
        Хотим ответить на это честно, потому что во многих местах пишут «оплатите через Paynet», и
        человек идёт к терминалу и ищет там услугу «StarsPaymee».
      </p>
      <Notice label="Как на самом деле">
        В списке способов оплаты бота <b>Paynet отдельно не стоит</b>. Paynet и другие терминалы — это{" "}
        <b>способ превратить наличные в деньги на карте или в кошельке</b>, с ботом они напрямую не
        связаны. Как только наличные оказались на карте, оплата идёт обычным порядком.
      </Notice>
      <p>
        Это не плохая новость — наоборот, именно поэтому покупка возможна, даже если{" "}
        <b>банковской карты у вас нет совсем</b>. Нужно лишь выбрать правильный путь.
      </p>

      <h2 id="yollar">От наличных до звёзд: четыре пути</h2>
      <RouteTable locale="ru" />

      <InfoGrid>
        <InfoCard emoji="🏧" title="Пополнение карты">
          В большинстве терминалов и киосков есть услуга «пополнение карты»: вводите номер карты,
          вносите наличные. Дальше платите картой как обычно.
        </InfoCard>
        <InfoCard emoji="🏦" title="Касса банка">
          Самый надёжный вариант. В кассе пополняете карту и получаете квитанцию. Банкоматы с cash-in
          работают так же.
        </InfoCard>
        <InfoCard emoji="📱" title="Пополнение кошелька">
          Если пополнить наличными кошелёк Click или Payme, в боте вы выбираете этот способ, и сумма
          подставляется сама.
        </InfoCard>
        <InfoCard emoji="🤝" title="Человек с картой">
          Школьники без карты часто делают именно так: отдают наличные родителю или другу, а тот
          переводит с карты.
        </InfoCard>
      </InfoGrid>

      <p>
        Третий путь — пополнение кошелька — самый удобный: дальше в боте вы выбираете{" "}
        <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">Payme</Link> или{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">Click</Link>, и сумму вводить
        вручную не приходится.
      </p>

      <InlineCta text="Откройте бота и посмотрите цену — способ оплаты выберете потом." product={{ kind: "stars", amount: 100 }} />

      <h2 id="aniq-summa">Почему сумма должна совпадать точно</h2>
      <p>
        Если вы выбрали перевод на карту, запомните одно правило:{" "}
        <b>сумма должна быть ровно такой, какую показал бот</b>.
      </p>
      <p>
        Причина простая: платёж распознаётся <b>по сумме</b> из банковской SMS. Если бот ждёт 11 000
        сум, а вы отправили 11 500, система не сможет связать платёж с заказом — понадобится ручная
        проверка, а это время.
      </p>
      <KeyFacts label="При переводе на карту">
        <li>
          <b>Не округляйте</b> — если 11 000, то ровно 11 000.
        </li>
        <li>
          <b>Учитывайте комиссию</b> — совпасть должна сумма, которая <b>дойдёт</b> до карты, а не та,
          что списалась.
        </li>
        <li>
          <b>Не объединяйте два заказа</b> — на каждый отдельный платёж.
        </li>
        <li>
          <b>Сохраняйте квитанцию</b> — при путанице это самое быстрое доказательство.
        </li>
      </KeyFacts>
      <p>
        При выборе Click или Payme этой проблемы нет вообще — сумма готова в приложении, изменить её
        нельзя.
      </p>

      <h2 id="qadamlar">Пошагово: покупка за наличные</h2>
      <Steps>
        <Step title="1. Сначала узнайте цену в боте">
          В{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          выберите количество или срок Premium. Вы увидите точную сумму — лучше знать её до похода к
          терминалу.
        </Step>
        <Step title="2. Внесите наличные на карту или в кошелёк">
          Терминал, касса банка или банкомат с cash-in. Безопаснее внести чуть больше нужного —
          возможна комиссия.
        </Step>
        <Step title="3. Вернитесь в бота и выберите способ оплаты">
          Пополняли карту — перевод на карту либо Click/Payme. Пополняли кошелёк — Click или Payme.
        </Step>
        <Step title="4. Оплатите">
          Через шлюз (Click/Payme) — подтверждаете готовую сумму. Переводом на карту — отправляете на
          указанную карту ровно ту же сумму.
        </Step>
        <Step title="5. Дождитесь доставки">
          После распознавания платежа заказ запускается автоматически. Чек отправлять не нужно.
        </Step>
      </Steps>

      <h2 id="vaqt">Сколько времени занимает</h2>
      <CompareTable
        headers={["Этап", "Обычно"]}
        rows={[
          [<strong key="a">Внести наличные в терминале</strong>, "1–3 минуты"],
          [<strong key="b">Зачисление на карту</strong>, "Чаще всего мгновенно"],
          [<strong key="c">Оплата в боте</strong>, "1 минута"],
          [<strong key="d">Распознавание платежа</strong>, "Несколько минут"],
          [<strong key="e">Доставка</strong>, "Автоматически после оплаты"],
        ]}
      />
      <p>
        То есть путь с наличными <b>не медленнее</b> карточного — просто в нём на один шаг больше.
      </p>

      <h2 id="kimga">Кому подходит, кому нет</h2>
      <InfoGrid>
        <InfoCard emoji="✅" title="Отлично подходит">
          <Yes>Школьникам и студентам без банковской карты</Yes>
          <Yes>Тем, кто привык рассчитываться наличными</Yes>
          <Yes>Тем, кто не хочет вводить карту в интернете</Yes>
        </InfoCard>
        <InfoCard emoji="⚠️" title="Подходит хуже">
          <No>Тем, кто очень спешит — есть лишний шаг</No>
          <No>Тем, у кого рядом нет терминала или банка</No>
          <No>Тем, кто покупает понемногу каждый день — кошелёк удобнее</No>
        </InfoCard>
      </InfoGrid>
      <p>
        Международная Visa или Mastercard не нужна ни здесь, ни на других путях. Об этом отдельно:{" "}
        <Link href="/blog/telegram-stars-kartasiz-sotib-olish">покупка звёзд Telegram без карты</Link>.
      </p>

      <h2 id="xato">Какие бывают ошибки</h2>
      <InfoGrid>
        <InfoCard emoji="🔢" title="Сумма не совпала">
          Самое частое. При переводе на карту округлили сумму — платёж не находится автоматически.
          Напишите с квитанцией, его свяжут вручную.
        </InfoCard>
        <InfoCard emoji="🏧" title="В терминале нет такой услуги">
          Не ищите «StarsPaymee» — там её нет. Вам нужна услуга «пополнение карты» или «пополнение
          кошелька Click/Payme».
        </InfoCard>
        <InfoCard emoji="💸" title="Комиссия съела часть">
          Если терминал берёт комиссию, на карту дойдёт меньше. Поэтому вносите чуть больше.
        </InfoCard>
        <InfoCard emoji="⏰" title="Деньги не дошли">
          Сохраните квитанцию и обратитесь к владельцу терминала — этот этап с ботом не связан.
        </InfoCard>
      </InfoGrid>

      <Notice label="Внимание">
        Никто не должен спрашивать у вас <b>пароль от Telegram или SMS-код</b> — ни бот, ни терминал,
        ни «помогающий» человек. Для заказа достаточно открытого @username.
      </Notice>

      <Sources
        label="Полезные ссылки"
        items={[
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "чтобы узнать цену" },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "поддержка" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      You <b>can</b> buy Telegram Stars and Premium with cash, with one caveat: there is <b>no</b> separate
      “cash” or “Paynet” button inside <b>@StarsPaymee_bot</b>. Cash first goes <b>onto a card or into a
      Click/Payme wallet</b> — at a terminal, a bank desk or a cash-in ATM — and only then do you pick an
      ordinary payment method in the bot. Which means <b>you do not need a card of your own</b>.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#haqiqat", label: "Is there a “cash” button in the bot" },
          { href: "#yollar", label: "From cash to Stars: four routes" },
          { href: "#aniq-summa", label: "Why the amount has to match exactly" },
          { href: "#qadamlar", label: "Step by step" },
          { href: "#vaqt", label: "How long it takes" },
          { href: "#kimga", label: "Who it suits, who it does not" },
          { href: "#xato", label: "What tends to go wrong" },
        ]}
      />

      <h2 id="haqiqat">Is there a “cash” button in the bot</h2>
      <p>
        We would rather answer this plainly, because plenty of places write “pay through Paynet” and
        people then go to a terminal and look for a “StarsPaymee” service on the screen.
      </p>
      <Notice label="How it actually works">
        <b>Paynet is not listed separately</b> among the bot’s payment methods. Paynet and other terminals
        are a <b>way of turning cash into money on a card or in a wallet</b>; they are not connected to the
        bot directly. Once the cash is on a card, the payment proceeds in the ordinary way.
      </Notice>
      <p>
        That is not bad news — it is precisely why a purchase is possible <b>even with no bank card at
        all</b>. You only have to pick the right route.
      </p>

      <h2 id="yollar">From cash to Stars: four routes</h2>
      <RouteTable locale="en" />

      <InfoGrid>
        <InfoCard emoji="🏧" title="Topping up a card">
          Most terminals and kiosks offer a “top up a card” service: you enter the card number and feed in
          the cash. After that you pay by card as usual.
        </InfoCard>
        <InfoCard emoji="🏦" title="A bank desk">
          The most dependable option. You top up the card at the desk and get a receipt. Cash-in ATMs work
          the same way.
        </InfoCard>
        <InfoCard emoji="📱" title="Topping up a wallet">
          If you fund a Click or Payme wallet with cash, you then choose that method in the bot and the
          amount fills itself in.
        </InfoCard>
        <InfoCard emoji="🤝" title="Someone with a card">
          Pupils without a card usually do exactly this: hand cash to a parent or a friend, who transfers
          it from their card.
        </InfoCard>
      </InfoGrid>

      <p>
        The third route — funding a wallet — is the most convenient, because in the bot you then choose{" "}
        <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">Payme</Link> or{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">Click</Link> and never type an
        amount by hand.
      </p>

      <InlineCta text="Open the bot and check the price — you choose how to pay afterwards." product={{ kind: "stars", amount: 100 }} />

      <h2 id="aniq-summa">Why the amount has to match exactly</h2>
      <p>
        If you go the card-transfer route, there is one rule to remember:{" "}
        <b>the amount must be exactly what the bot showed you</b>.
      </p>
      <p>
        The reason is simple: the payment is recognised <b>by its amount</b>, from the bank’s SMS. If the
        bot is expecting 11,000 so‘m and you send 11,500, the system cannot tie that payment to the order —
        it needs a manual check, and that costs time.
      </p>
      <KeyFacts label="When transferring to a card">
        <li>
          <b>Do not round up</b> — if it says 11,000, send exactly 11,000.
        </li>
        <li>
          <b>Account for the fee</b> — what has to match is the amount that <b>arrives</b>, not the amount
          that left.
        </li>
        <li>
          <b>Do not combine two orders</b> — one payment each.
        </li>
        <li>
          <b>Keep the receipt</b> — if anything gets tangled, it is the quickest proof.
        </li>
      </KeyFacts>
      <p>
        With Click or Payme the problem does not arise at all — the amount is pre-filled in the app and
        cannot be edited.
      </p>

      <h2 id="qadamlar">Step by step: buying with cash</h2>
      <Steps>
        <Step title="1. Check the price in the bot first">
          In{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          pick the quantity or the Premium term. You will see the exact figure — better to know it before
          you head to a terminal.
        </Step>
        <Step title="2. Put the cash onto a card or into a wallet">
          A terminal, a bank desk or a cash-in ATM. Feeding in slightly more than you need is safer, since
          there may be a fee.
        </Step>
        <Step title="3. Go back to the bot and choose a payment method">
          Topped up a card — card transfer, or Click/Payme. Topped up a wallet — Click or Payme.
        </Step>
        <Step title="4. Pay">
          Through a gateway (Click/Payme) you confirm a ready-made amount. By card transfer you send
          exactly that figure to the card shown.
        </Step>
        <Step title="5. Wait for delivery">
          Once the payment is recognised the order runs automatically. No receipt to send.
        </Step>
      </Steps>

      <h2 id="vaqt">How long it takes</h2>
      <CompareTable
        headers={["Stage", "Typically"]}
        rows={[
          [<strong key="a">Feeding cash into a terminal</strong>, "1–3 minutes"],
          [<strong key="b">The money reaching the card</strong>, "Usually instant"],
          [<strong key="c">Paying in the bot</strong>, "1 minute"],
          [<strong key="d">The payment being recognised</strong>, "A few minutes"],
          [<strong key="e">Delivery</strong>, "Automatic once paid"],
        ]}
      />
      <p>
        So the cash route is <b>no slower</b> than the card route — it simply has one extra step.
      </p>

      <h2 id="kimga">Who it suits, who it does not</h2>
      <InfoGrid>
        <InfoCard emoji="✅" title="Suits it well">
          <Yes>Pupils and students with no bank card</Yes>
          <Yes>Anyone who prefers to deal in cash</Yes>
          <Yes>Anyone reluctant to enter card details online</Yes>
        </InfoCard>
        <InfoCard emoji="⚠️" title="Suits it less">
          <No>Anyone in a real hurry — there is an extra step</No>
          <No>Anyone with no terminal or bank nearby</No>
          <No>Anyone buying a little every day — a wallet is easier</No>
        </InfoCard>
      </InfoGrid>
      <p>
        An international Visa or Mastercard is not needed here, or on any other route. There is a separate
        piece on that:{" "}
        <Link href="/blog/telegram-stars-kartasiz-sotib-olish">buying Telegram Stars without a card</Link>.
      </p>

      <h2 id="xato">What tends to go wrong</h2>
      <InfoGrid>
        <InfoCard emoji="🔢" title="The amount did not match">
          The commonest one. Rounding the figure on a card transfer means the payment is not found
          automatically. Write in with the receipt and it gets matched by hand.
        </InfoCard>
        <InfoCard emoji="🏧" title="The terminal has no such service">
          Do not look for “StarsPaymee” — it is not there. What you want is “top up a card” or “top up a
          Click/Payme wallet”.
        </InfoCard>
        <InfoCard emoji="💸" title="A fee ate part of it">
          If the terminal charges a fee, less reaches the card. Feed in a little extra to cover it.
        </InfoCard>
        <InfoCard emoji="⏰" title="The money never arrived">
          Keep the receipt and take it up with the terminal operator — that stage has nothing to do with
          the bot.
        </InfoCard>
      </InfoGrid>

      <Notice label="One warning">
        Nobody should be asking you for your <b>Telegram password or SMS code</b> — not the bot, not the
        terminal, not a “helpful” stranger. A public @username is all an order needs.
      </Notice>

      <Sources
        label="Useful links"
        items={[
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "to check the price" },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "support" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Naqd pul bilan Telegram Stars sotib olsa bo‘ladimi?",
    answer:
      "Ha. Naqd pulni terminal, bank kassasi yoki cash-in bankomat orqali kartaga yoxud Click/Payme hamyoniga solasiz, keyin botda shu usul bilan to‘laysiz.",
  },
  {
    question: "Botda Paynet degan to‘lov tugmasi bormi?",
    answer:
      "Yo‘q. Paynet va boshqa terminallar naqd pulni kartaga yoki hamyonga o‘tkazish uchun ishlatiladi; bot ichida ular alohida usul sifatida turmaydi.",
  },
  {
    question: "Terminalda «StarsPaymee» xizmatini topa olmadim.",
    answer:
      "U yerda bunday xizmat yo‘q. Sizga kerak bo‘lgani — «kartani to‘ldirish» yoki «Click/Payme hamyonini to‘ldirish».",
  },
  {
    question: "O‘z bank kartam bo‘lmasa ham bo‘ladimi?",
    answer:
      "Ha. Naqd pulni Click yoki Payme hamyoniga solish yoki kartasi bor yaqin odam orqali to‘lash mumkin.",
  },
  {
    question: "Nega summa aynan mos kelishi kerak?",
    answer:
      "Kartaga o‘tkazma bank SMS’idagi summa bo‘yicha tanib olinadi. Yaxlitlangan summa avtomatik topilmaydi va qo‘lda tekshirish kerak bo‘ladi.",
  },
  {
    question: "Terminal komissiya olsa nima bo‘ladi?",
    answer:
      "Kartaga kamroq tushadi. Shuning uchun kerakli summadan bir oz ko‘proq solgan ma’qul — muhimi, kartaga tushadigan summa to‘g‘ri bo‘lsin.",
  },
  {
    question: "Naqd bilan Telegram Premium ham olinadimi?",
    answer: "Ha, jarayon bir xil: naqdni kartaga yoki hamyonga solasiz, botda Premium muddatini tanlab to‘laysiz.",
  },
  {
    question: "Bu usul qancha vaqt oladi?",
    answer:
      "Terminalda 1–3 daqiqa, pul odatda bir zumda tushadi, botdagi to‘lov bir daqiqa. Yetkazish to‘lovdan keyin avtomatik.",
  },
  {
    question: "Chek yoki kvitansiya yuborish kerakmi?",
    answer:
      "Odatda yo‘q — to‘lov avtomatik aniqlanadi. Kvitansiyani faqat summa mos kelmay qolgan holat uchun saqlab qo‘ying.",
  },
  {
    question: "Parolim so‘ralishi mumkinmi?",
    answer: "Yo‘q. Telegram paroli va SMS-kod hech qachon so‘ralmaydi — buyurtma uchun @username yetarli.",
  },
];

const ruFaq = [
  {
    question: "Можно ли купить звёзды Telegram за наличные?",
    answer:
      "Да. Наличные вносите на карту или в кошелёк Click/Payme через терминал, кассу банка или банкомат с cash-in, а затем платите этим способом в боте.",
  },
  {
    question: "Есть ли в боте кнопка оплаты Paynet?",
    answer:
      "Нет. Paynet и другие терминалы служат для перевода наличных на карту или в кошелёк; отдельным способом оплаты в боте они не стоят.",
  },
  {
    question: "Не нашёл в терминале услугу «StarsPaymee».",
    answer:
      "Такой услуги там нет. Вам нужна услуга «пополнение карты» или «пополнение кошелька Click/Payme».",
  },
  {
    question: "Можно ли обойтись без собственной банковской карты?",
    answer:
      "Да. Можно внести наличные в кошелёк Click или Payme либо заплатить через близкого человека, у которого карта есть.",
  },
  {
    question: "Почему сумма должна совпадать точно?",
    answer:
      "Перевод на карту распознаётся по сумме из банковской SMS. Округлённая сумма не находится автоматически, и нужна ручная проверка.",
  },
  {
    question: "Что если терминал возьмёт комиссию?",
    answer:
      "На карту дойдёт меньше. Поэтому лучше внести чуть больше нужного — важно, чтобы совпала сумма, которая дошла до карты.",
  },
  {
    question: "За наличные можно купить и Telegram Premium?",
    answer: "Да, порядок тот же: вносите наличные на карту или в кошелёк, в боте выбираете срок Premium и платите.",
  },
  {
    question: "Сколько времени это занимает?",
    answer:
      "В терминале 1–3 минуты, зачисление обычно мгновенное, оплата в боте — минута. Доставка автоматическая после оплаты.",
  },
  {
    question: "Нужно ли отправлять чек или квитанцию?",
    answer:
      "Обычно нет — платёж определяется автоматически. Квитанцию сохраните на случай, если сумма не совпала.",
  },
  {
    question: "Могут ли запросить мой пароль?",
    answer: "Нет. Пароль от Telegram и SMS-код не запрашиваются никогда — для заказа достаточно @username.",
  },
];

const enFaq = [
  {
    question: "Can I buy Telegram Stars with cash?",
    answer:
      "Yes. You put the cash onto a card or into a Click/Payme wallet at a terminal, a bank desk or a cash-in ATM, then pay with that method in the bot.",
  },
  {
    question: "Is there a Paynet payment button in the bot?",
    answer:
      "No. Paynet and other terminals are used to move cash onto a card or into a wallet; they are not listed as a payment method inside the bot.",
  },
  {
    question: "I could not find a “StarsPaymee” service at the terminal.",
    answer:
      "There is no such service there. What you are looking for is “top up a card” or “top up a Click/Payme wallet”.",
  },
  {
    question: "Can I manage without a bank card of my own?",
    answer:
      "Yes. You can fund a Click or Payme wallet with cash, or pay through someone close to you who does have a card.",
  },
  {
    question: "Why does the amount have to match exactly?",
    answer:
      "A card transfer is recognised by the amount in the bank’s SMS. A rounded figure is not found automatically and needs a manual check.",
  },
  {
    question: "What if the terminal charges a fee?",
    answer:
      "Less reaches the card. Feed in a little more than you need — what matters is that the amount arriving on the card is right.",
  },
  {
    question: "Can I buy Telegram Premium with cash too?",
    answer: "Yes, the process is the same: cash onto a card or into a wallet, then pick the Premium term in the bot and pay.",
  },
  {
    question: "How long does it take?",
    answer:
      "One to three minutes at the terminal, the money usually lands instantly, and a minute to pay in the bot. Delivery is automatic once paid.",
  },
  {
    question: "Do I need to send a receipt?",
    answer:
      "Usually not — the payment is detected automatically. Keep the receipt only in case the amount does not match.",
  },
  {
    question: "Could anyone ask for my password?",
    answer: "No. Your Telegram password and SMS codes are never requested — a @username is all an order needs.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-09-16",
  dateModified: "2026-09-16",
  keywords: [
    "naqd pul bilan stars olish",
    "naqd pul bilan telegram premium",
    "paynet orqali telegram stars",
    "terminal orqali stars sotib olish",
    "купить звёзды telegram за наличные",
    "телеграм премиум за наличные узбекистан",
    "buy telegram stars with cash",
  ],
  howToSteps: [
    { name: "Botda narxni bilib oling", text: "@StarsPaymee_bot da miqdorni tanlang va aniq summani ko‘ring." },
    { name: "Naqdni kartaga soling", text: "Terminal, bank kassasi yoki cash-in bankomat orqali." },
    { name: "Botga qayting", text: "Kartaga o‘tkazma, Click yoki Payme usulini tanlang." },
    { name: "To‘lang", text: "Kartaga o‘tkazsangiz — summa aynan mos bo‘lsin." },
    { name: "Yetkazishni kuting", text: "To‘lov aniqlangach buyurtma avtomatik bajariladi." },
  ],
  locales: {
    uz: {
      title: "Naqd pul bilan Telegram Stars va Premium sotib olish",
      excerpt:
        "Bank kartasi bo‘lmasa ham xarid qilish mumkin. Naqd pulni terminal, bank kassasi yoki hamyon orqali o‘tkazishning to‘rt yo‘li va nega summa tiyinigacha to‘g‘ri bo‘lishi kerak.",
      metaTitle: "Naqd pul bilan Telegram Stars sotib olish",
      metaDescription:
        "Kartasiz, naqd pul bilan Telegram Stars va Premium olish: terminal, bank kassasi yoki Click/Payme hamyoni orqali to‘rt yo‘l va aniq summa qoidasi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Avval narxni ko‘ring",
      ctaBody: "@StarsPaymee_bot — aniq summani bilib oling, keyin naqdni kartaga yoki hamyonga soling.",
      faq: uzFaq,
    },
    ru: {
      title: "Покупка Telegram Stars и Premium за наличные",
      excerpt:
        "Купить можно и без банковской карты. Четыре пути, как перевести наличные через терминал, кассу банка или кошелёк, и почему сумма должна совпадать точь-в-точь.",
      metaTitle: "Купить звёзды Telegram за наличные без карты",
      metaDescription:
        "Покупка Telegram Stars и Premium за наличные без карты: четыре пути через терминал, кассу банка или кошелёк Click/Payme и правило точной суммы.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Сначала узнайте цену",
      ctaBody: "@StarsPaymee_bot — посмотрите точную сумму, затем внесите наличные на карту или в кошелёк.",
      faq: ruFaq,
    },
    en: {
      title: "Buying Telegram Stars and Premium with cash",
      excerpt:
        "A purchase is possible with no bank card at all. Four routes for moving cash through a terminal, a bank desk or a wallet, and why the amount has to match to the last so‘m.",
      metaTitle: "Buy Telegram Stars with cash, no card needed",
      metaDescription:
        "Buying Telegram Stars and Premium with cash and no card: four routes via a terminal, a bank desk or a Click/Payme wallet, plus the exact-amount rule.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Check the price first",
      ctaBody: "@StarsPaymee_bot — find the exact figure, then put the cash on a card or into a wallet.",
      faq: enFaq,
    },
  },
};
