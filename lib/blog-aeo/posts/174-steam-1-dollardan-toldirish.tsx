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
import {
  STEAM_MAX_USD,
  STEAM_MIN_USD,
  STEAM_RATE_UZS_PER_USD,
  formatUzs,
  steamPriceUzs,
} from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "steam-1-dollardan-toldirish";

/** Namuna summalar — kurs `lib/products.ts` dan, hisob shu yerda. */
const SAMPLE_USD = [1, 5, 10, 20, 50, 100];

function RateTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const t = {
    uz: { headers: ["Dollarda", "So‘mda", "Odatda nimaga yetadi"], notes: ["Kichik donat yoki chegirmadagi qo‘shimcha", "Arzon indie o‘yin", "O‘rtacha o‘yin yoki o‘yin ichidagi paket", "Katta chegirmadagi AAA o‘yin", "To‘liq narxdagi yangi o‘yin", "Bir necha o‘yin yoki yirik donat"] },
    ru: { headers: ["В долларах", "В сумах", "На что обычно хватает"], notes: ["Небольшой донат или доплата на скидке", "Недорогая инди-игра", "Средняя игра или внутриигровой набор", "AAA-игра на крупной скидке", "Новая игра по полной цене", "Несколько игр или крупный донат"] },
    en: { headers: ["In dollars", "In so‘m", "What it usually covers"], notes: ["A small top-up or a discount shortfall", "An inexpensive indie game", "A mid-range game or an in-game pack", "A AAA game on a deep discount", "A new full-price game", "Several games or a large top-up"] },
  }[locale];

  return (
    <CompareTable
      headers={t.headers}
      rows={SAMPLE_USD.map((usd, i) => [
        <strong key="a">${usd}</strong>,
        formatUzs(steamPriceUzs(usd), locale),
        t.notes[i],
      ])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Steam hamyonini <b>{STEAM_MIN_USD} dollardan</b> boshlab to‘ldirish mumkin. Kurs qat’iy —{" "}
      <b>1 dollar = {STEAM_RATE_UZS_PER_USD.toLocaleString("en-US").replace(/,/g, " ")} so‘m</b>, ya’ni yakuniy
      summa oldindan ma’lum va oxirgi daqiqada o‘zgarmaydi. Buyurtma @StarsPaymee_bot orqali, to‘lov esa odatiy
      so‘mda: UzCard, HUMO, Click, Payme, Uzum yoki Paynet.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#kurs", label: "Qat’iy kurs va hisob" },
          { href: "#minimal", label: "Nega 1 dollardan" },
          { href: "#qadamlar", label: "Qadam-baqadam to‘ldirish" },
          { href: "#kimga", label: "Kimga qulay" },
          { href: "#login", label: "Login nega so‘raladi" },
          { href: "#xatolar", label: "Ko‘p uchraydigan savollar" },
        ]}
      />

      <p>
        O‘zbekistondagi ko‘p o‘yinchiga tanish holat: Steam’da o‘yin yoki donat olmoqchisiz, lekin kartani
        to‘g‘ridan-to‘g‘ri bog‘lash yoki dollarda to‘lash yo‘lini topish alohida muammoga aylanadi. Qat’iy
        kursdagi to‘ldirish shu zanjirni butunlay chetlab o‘tadi.
      </p>

      <h2 id="kurs">Qat’iy kurs va tayyor hisob</h2>
      <p>
        Kurs <b>{STEAM_RATE_UZS_PER_USD.toLocaleString("en-US").replace(/,/g, " ")} so‘m = 1 dollar</b>. Bu
        shuni anglatadiki, summani oldindan o‘zingiz hisoblab olishingiz mumkin va to‘lov paytida raqam
        o‘zgarmaydi:
      </p>
      <RateTable locale="uz" />
      <p>
        Jadval sayt sozlamalaridagi kursdan avtomatik hisoblanadi. Uchinchi ustun — faqat mo‘ljal uchun:
        Steam’dagi narxlar chegirma va mintaqaga qarab o‘zgaradi.
      </p>

      <InlineCta text="Steam hamyonini so‘mda to‘ldiring — 1 dollardan boshlab." />

      <h2 id="minimal">Nega eng kichik summa {STEAM_MIN_USD} dollar</h2>
      <p>
        Kirish chegarasi ataylab past qilingan. Har doim ham katta summa kerak emas — ko‘pincha yetmayotgani
        atigi bir-ikki dollar bo‘ladi:
      </p>
      <InfoGrid>
        <InfoCard emoji="🏷️" title="Chegirmadagi o‘yin">
          Balansda 2 dollar yetmayapti — shuni qo‘shasiz, xolos.
        </InfoCard>
        <InfoCard emoji="🎮" title="Kichik donat">
          Sevimli o‘yindagi kichik xarid uchun katta summa shart emas.
        </InfoCard>
        <InfoCard emoji="🎁" title="Do‘stga sovg‘a">
          Steam’da arzon o‘yinni sovg‘a qilish uchun aynan kerakli miqdor.
        </InfoCard>
        <InfoCard emoji="🧪" title="Birinchi marta sinash">
          Xizmatni katta pul bilan emas, 1 dollar bilan sinab ko‘rish mumkin.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Qadam-baqadam: hamyonni qanday to‘ldirish</h2>
      <Steps>
        <Step title="1. Botni oching">
          Telegramda{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          ni ishga tushiring.
        </Step>
        <Step title="2. Steam hamyoni bo‘limini tanlang">GamPay javonida Steam alohida turadi.</Step>
        <Step title="3. Summani dollarda ko‘rsating">
          {STEAM_MIN_USD} dollardan boshlab istalgan miqdor — so‘mdagi qiymati darhol ko‘rinadi.
        </Step>
        <Step title="4. Steam login’ingizni kiriting">
          Bu — hisobingizning ochiq login nomi; parol so‘ralmaydi.
        </Step>
        <Step title="5. So‘mda to‘lang">UzCard, HUMO, Click, Payme, Uzum yoki Paynet.</Step>
        <Step title="6. Balansni tekshiring">
          Mablag‘ hisobga tushgach, uni o‘yin, donat yoki sovg‘aga sarflashingiz mumkin.
        </Step>
      </Steps>

      <h2 id="kimga">Kimga qulay</h2>
      <KeyFacts label="Odatdagi holatlar">
        <li>Chegirmadagi o‘yinni olmoqchi, lekin dollarda to‘lash yo‘li yo‘q o‘yinchilarga.</li>
        <li>O‘yin ichida kichik summalar bilan donat qiladiganlarga.</li>
        <li>Farzandiga tug‘ilgan kunga Steam balansini sovg‘a qilmoqchi bo‘lgan ota-onalarga.</li>
        <li>Valyutadagi bank kartasisiz Steam’ni to‘ldirish yo‘lini qidirayotganlarga.</li>
      </KeyFacts>

      <h2 id="tolov">To‘lov usullari, limit va komissiya</h2>
      <KeyFacts label="Nimani bilish kerak">
        <li>
          <b>To‘lov usullari:</b> UzCard, HUMO, Click, Payme va Uzum — hammasi so‘mda, xalqaro kartasiz.
        </li>
        <li>
          <b>Eng kichik summa:</b> {STEAM_MIN_USD} dollar, ya’ni{" "}
          {formatUzs(steamPriceUzs(STEAM_MIN_USD), "uz")}.
        </li>
        <li>
          <b>Bitta buyurtmadagi eng katta summa:</b> {STEAM_MAX_USD} dollar; kattaroq summa bir necha buyurtmaga
          bo‘linadi.
        </li>
        <li>
          <b>Komissiya:</b> botda ko‘rsatilgan summa yakuniy — ustiga alohida xizmat haqi qo‘shilmaydi. Bank
          tomonida karta shartlariga qarab o‘z komissiyasi bo‘lishi mumkin.
        </li>
        <li>
          <b>Valyuta:</b> to‘lov so‘mda, hisob esa Steam hamyoningiz valyutasida to‘ldiriladi —{" "}
          <Link href="/blog/steam-som-yoki-rubl-hamyon">qaysi valyuta ekanini shu yerda</Link> aniqlaysiz.
        </li>
      </KeyFacts>
      <p>
        Balans kelmay qolsa, avval Steam ilovasini qayta ishga tushiring, keyin buyurtma raqami bilan supportga
        yozing — bu holat{" "}
        <Link href="/blog/steam-balansi-tushmadi">«Steam balansi tushmadi»</Link> maqolasida batafsil.
      </p>

      <h2 id="login">Nega login so‘raladi, parol esa yo‘q</h2>
      <p>
        Mablag‘ aynan sizning hisobingizga tushishi uchun bot Steam <b>login (account name)</b> ni so‘raydi — bu
        akkaunt yaratganda tanlagan kirish nomingiz. Uni <b>profil nomi bilan aralashtirmang</b>: profil nomi
        istalgan vaqtda o‘zgartiriladi va hammaga ko‘rinadi, login esa o‘zgarmaydi va hisobni aniq belgilaydi.
        Login parol emas, lekin uni ham keraksiz joyda yozib yurmang. <b>Parol, Steam Guard kodi yoki pochtaga
        kelgan kod hech qachon so‘ralmaydi.</b>
      </p>
      <p>
        Agar biror xizmat sizdan parol yoki Steam Guard kodini so‘rasa — bu hisobni o‘g‘irlash urinishi.
        Batafsil:{" "}
        <Link href="/blog/steam-hisobini-himoya-qilish-10-maslahat">Steam hisobini himoya qilish</Link> va{" "}
        <Link href="/blog/steam-login-nima">Steam login nima</Link>.
      </p>

      <h2 id="xatolar">Ko‘p uchraydigan savollar</h2>
      <KeyFacts label="Diqqat qiling">
        <li>
          <b>Login’ni to‘g‘ri yozing.</b> Mablag‘ siz ko‘rsatgan hisobga tushadi — harf xatosi boshqa odamga
          olib boradi.
        </li>
        <li>
          <b>Hisob valyutasi.</b> Steam hisobingiz valyutasi dollar bo‘lmasa, konvertatsiya Steam tomonida
          bo‘ladi va yakuniy raqam farq qilishi mumkin.
        </li>
        <li>
          <b>Balans tushmasa.</b> Avval Steam’da sahifani yangilang, keyin buyurtma raqami bilan yozing —{" "}
          <Link href="/blog/steam-balansi-tushmadi">alohida qo‘llanma</Link> bor.
        </li>
        <li>
          <b>Kurs o‘zgarishi mumkin.</b> Bu sahifadagi raqam joriy sozlamadan olinadi; buyurtma paytidagi
          summani botda ko‘rasiz.
        </li>
      </KeyFacts>

      <p>
        Qarang: <Link href="/blog/steam-1-dollardan-toldirish">so‘mda Steam to‘ldirish</Link>,{" "}
        <Link href="/blog/steam-wallet-nima">Steam Wallet narxlari</Link>,{" "}
        <Link href="/blog/steam-wallet-xavfsizmi">xavfsizlik masalasi</Link>. Boshqa o‘yinlar —{" "}
        <Link href="/gampay">GamPay sahifasida</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "Steam do‘koni" },
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "Steam rasmiy yordami" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Пополнить кошелёк Steam можно начиная с <b>{STEAM_MIN_USD} доллара</b>. Курс фиксированный —{" "}
      <b>1 доллар = {STEAM_RATE_UZS_PER_USD.toLocaleString("ru-RU").replace(/ /g, " ")} сум</b>, то есть
      итоговая сумма известна заранее и не меняется в последний момент. Заказ через @StarsPaymee_bot, оплата
      привычными сумами: UzCard, Humo, Click, Payme, Uzum или Paynet.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#kurs", label: "Фиксированный курс и расчёт" },
          { href: "#minimal", label: "Почему от 1 доллара" },
          { href: "#qadamlar", label: "Пошаговое пополнение" },
          { href: "#kimga", label: "Кому удобно" },
          { href: "#login", label: "Зачем нужен логин" },
          { href: "#xatolar", label: "Частые вопросы" },
        ]}
      />

      <p>
        Многим геймерам в Узбекистане знакома ситуация: хочешь купить игру или донат в Steam, а привязать карту
        напрямую или найти способ оплаты в долларах — отдельная задача. Пополнение по фиксированному курсу
        убирает эту цепочку целиком.
      </p>

      <h2 id="kurs">Фиксированный курс и готовый расчёт</h2>
      <p>
        Курс — <b>{STEAM_RATE_UZS_PER_USD.toLocaleString("ru-RU").replace(/ /g, " ")} сум за 1 доллар</b>.
        Это значит, что сумму можно посчитать заранее, и при оплате цифра не изменится:
      </p>
      <RateTable locale="ru" />
      <p>
        Таблица считается автоматически из курса в настройках сайта. Третий столбец — только ориентир: цены в
        Steam зависят от скидок и региона.
      </p>

      <InlineCta text="Пополните кошелёк Steam в сумах — от 1 доллара." />

      <h2 id="minimal">Почему минимум — {STEAM_MIN_USD} доллар</h2>
      <p>
        Порог входа сделан намеренно низким. Крупная сумма нужна далеко не всегда — чаще не хватает буквально
        пары долларов:
      </p>
      <InfoGrid>
        <InfoCard emoji="🏷️" title="Игра на скидке">
          На балансе не хватает 2 долларов — вы просто добавляете их.
        </InfoCard>
        <InfoCard emoji="🎮" title="Небольшой донат">
          Для мелкой покупки в любимой игре крупная сумма не нужна.
        </InfoCard>
        <InfoCard emoji="🎁" title="Подарок другу">
          Ровно столько, сколько нужно на недорогую игру в подарок.
        </InfoCard>
        <InfoCard emoji="🧪" title="Первая проба">
          Попробовать сервис можно на 1 долларе, а не на крупной сумме.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Пошагово: как пополнить кошелёк</h2>
      <Steps>
        <Step title="1. Откройте бота">
          Запустите{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          в Telegram.
        </Step>
        <Step title="2. Выберите раздел кошелька Steam">На полке GamPay Steam стоит отдельно.</Step>
        <Step title="3. Укажите сумму в долларах">
          Любая сумма от {STEAM_MIN_USD} доллара — эквивалент в сумах виден сразу.
        </Step>
        <Step title="4. Введите логин Steam">Это открытое имя аккаунта; пароль не запрашивается.</Step>
        <Step title="5. Оплатите в сумах">UzCard, Humo, Click, Payme, Uzum или Paynet.</Step>
        <Step title="6. Проверьте баланс">
          Как только средства зачислены, их можно тратить на игры, донат или подарки.
        </Step>
      </Steps>

      <h2 id="kimga">Кому это удобно</h2>
      <KeyFacts label="Типичные ситуации">
        <li>Геймерам, которые хотят купить игру на скидке, но не имеют способа оплаты в долларах.</li>
        <li>Тем, кто донатит в играх небольшими суммами.</li>
        <li>Родителям, которые хотят подарить ребёнку пополнение Steam на день рождения.</li>
        <li>Всем, кто ищет, как пополнить Steam без банковской карты в валюте.</li>
      </KeyFacts>

      <h2 id="tolov">Способы оплаты, лимиты и комиссия</h2>
      <KeyFacts label="Что нужно знать">
        <li>
          <b>Способы оплаты:</b> UzCard, HUMO, Click, Payme и Uzum — всё в сумах, без международной карты.
        </li>
        <li>
          <b>Минимальная сумма:</b> {STEAM_MIN_USD} доллар, то есть{" "}
          {formatUzs(steamPriceUzs(STEAM_MIN_USD), "ru")}.
        </li>
        <li>
          <b>Максимум в одном заказе:</b> {STEAM_MAX_USD} долларов; больше — несколькими заказами.
        </li>
        <li>
          <b>Комиссия:</b> сумма в боте итоговая, отдельной сервисной надбавки сверху нет. Банк может удержать свою
          комиссию по условиям карты.
        </li>
        <li>
          <b>Валюта:</b> платёж в сумах, а кошелёк пополняется в валюте вашего аккаунта Steam —{" "}
          <Link href="/blog/steam-som-yoki-rubl-hamyon">как её определить</Link>.
        </li>
      </KeyFacts>
      <p>
        Если баланс не пришёл, сначала перезапустите Steam, затем напишите в поддержку с номером заказа — подробнее
        в <Link href="/blog/steam-balansi-tushmadi">«Баланс Steam не пришёл»</Link>.
      </p>

      <h2 id="login">Зачем нужен логин и почему не нужен пароль</h2>
      <p>
        Чтобы средства попали именно на ваш аккаунт, бот запрашивает <b>логин Steam (account name)</b> — имя
        входа, выбранное при регистрации. Не путайте его с <b>именем профиля</b>: имя профиля можно менять в любой
        момент и оно видно всем, а логин не меняется и однозначно определяет аккаунт. Логин — не пароль, но и его
        не стоит публиковать где попало. <b>Пароль, код Steam Guard или код из почты не запрашиваются никогда.</b>
      </p>
      <p>
        Если какой-то сервис просит пароль или код Steam Guard — это попытка угона аккаунта. Подробнее:{" "}
        <Link href="/blog/steam-hisobini-himoya-qilish-10-maslahat">защита аккаунта Steam</Link> и{" "}
        <Link href="/blog/steam-login-nima">что такое логин Steam</Link>.
      </p>

      <h2 id="xatolar">Частые вопросы и на что смотреть</h2>
      <KeyFacts label="Обратите внимание">
        <li>
          <b>Правильно введите логин.</b> Средства уйдут на указанный аккаунт — опечатка приведёт к чужому.
        </li>
        <li>
          <b>Валюта аккаунта.</b> Если валюта вашего аккаунта Steam не доллар, конвертация будет на стороне
          Steam и итоговая цифра может отличаться.
        </li>
        <li>
          <b>Если баланс не пришёл.</b> Сначала обновите страницу в Steam, затем напишите с номером заказа — есть{" "}
          <Link href="/blog/steam-balansi-tushmadi">отдельное руководство</Link>.
        </li>
        <li>
          <b>Курс может измениться.</b> Цифра на этой странице берётся из текущих настроек; сумму на момент
          заказа вы видите в боте.
        </li>
      </KeyFacts>

      <p>
        Смотрите: <Link href="/blog/steam-1-dollardan-toldirish">пополнение Steam в сумах</Link>,{" "}
        <Link href="/blog/steam-wallet-nima">цены Steam Wallet</Link>,{" "}
        <Link href="/blog/steam-wallet-xavfsizmi">вопрос безопасности</Link>. Другие игры — на{" "}
        <Link href="/gampay">странице GamPay</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "магазин Steam" },
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "официальная справка Steam" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      A Steam wallet can be topped up from <b>${STEAM_MIN_USD}</b>. The rate is fixed —{" "}
      <b>$1 = {STEAM_RATE_UZS_PER_USD.toLocaleString("en-US").replace(/,/g, " ")} UZS</b> — so the total is
      known in advance and does not shift at the last moment. Orders go through @StarsPaymee_bot and payment is
      in ordinary so‘m: UzCard, HUMO, Click, Payme, Uzum or Paynet.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#kurs", label: "The fixed rate and the maths" },
          { href: "#minimal", label: "Why the minimum is $1" },
          { href: "#qadamlar", label: "Topping up step by step" },
          { href: "#kimga", label: "Who it suits" },
          { href: "#login", label: "Why a login is asked for" },
          { href: "#xatolar", label: "Common questions" },
        ]}
      />

      <p>
        Plenty of players in Uzbekistan know the situation: you want a game or an in-game purchase on Steam, but
        linking a card directly or finding a way to pay in dollars turns into its own project. A fixed-rate
        top-up removes that chain entirely.
      </p>

      <h2 id="kurs">A fixed rate and the maths done for you</h2>
      <p>
        The rate is <b>{STEAM_RATE_UZS_PER_USD.toLocaleString("en-US").replace(/,/g, " ")} UZS per dollar</b>,
        which means you can work the total out beforehand and the number will not change at checkout:
      </p>
      <RateTable locale="en" />
      <p>
        The table is calculated automatically from the rate in the site’s settings. The third column is a rough
        guide only: Steam prices depend on discounts and region.
      </p>

      <InlineCta text="Top up your Steam wallet in so‘m — from one dollar." />

      <h2 id="minimal">Why the minimum is ${STEAM_MIN_USD}</h2>
      <p>
        The entry threshold is deliberately low. A large amount is rarely what you actually need — more often
        you are a dollar or two short:
      </p>
      <InfoGrid>
        <InfoCard emoji="🏷️" title="A game on sale">
          Two dollars short on the balance — you simply add them.
        </InfoCard>
        <InfoCard emoji="🎮" title="A small purchase">
          A minor in-game buy does not call for a big top-up.
        </InfoCard>
        <InfoCard emoji="🎁" title="A gift for a friend">
          Exactly what an inexpensive gifted game costs.
        </InfoCard>
        <InfoCard emoji="🧪" title="A first try">
          You can test the service with one dollar rather than a large sum.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Step by step: topping up the wallet</h2>
      <Steps>
        <Step title="1. Open the bot">
          Start{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          in Telegram.
        </Step>
        <Step title="2. Pick the Steam wallet section">Steam sits separately on the GamPay shelf.</Step>
        <Step title="3. Enter the amount in dollars">
          Anything from ${STEAM_MIN_USD} — the so‘m equivalent appears immediately.
        </Step>
        <Step title="4. Enter your Steam login">That is the public account name; no password is requested.</Step>
        <Step title="5. Pay in so‘m">UzCard, HUMO, Click, Payme, Uzum or Paynet.</Step>
        <Step title="6. Check the balance">
          Once the funds land, spend them on games, in-game purchases or gifts.
        </Step>
      </Steps>

      <h2 id="kimga">Who this suits</h2>
      <KeyFacts label="Typical situations">
        <li>Players who want a discounted game but have no way to pay in dollars.</li>
        <li>Anyone making small in-game purchases.</li>
        <li>Parents who want to gift a Steam top-up for a birthday.</li>
        <li>Anyone looking to top up Steam without a foreign-currency bank card.</li>
      </KeyFacts>

      <h2 id="tolov">Payment methods, limits and commission</h2>
      <KeyFacts label="What to know">
        <li>
          <b>Payment methods:</b> UzCard, HUMO, Click, Payme and Uzum — all in so&lsquo;m, with no international card.
        </li>
        <li>
          <b>Minimum:</b> {STEAM_MIN_USD} dollar, i.e. {formatUzs(steamPriceUzs(STEAM_MIN_USD), "en")}.
        </li>
        <li>
          <b>Maximum per order:</b> {STEAM_MAX_USD} dollars; larger amounts are split across several orders.
        </li>
        <li>
          <b>Commission:</b> the amount shown in the bot is final — no separate service fee on top. Your bank may
          still charge its own fee under the card&rsquo;s terms.
        </li>
        <li>
          <b>Currency:</b> you pay in so&lsquo;m, while the wallet is topped up in your Steam account&rsquo;s
          currency — <Link href="/blog/steam-som-yoki-rubl-hamyon">how to check which one</Link>.
        </li>
      </KeyFacts>
      <p>
        If the balance does not arrive, restart Steam first, then message support with the order number — covered in{" "}
        <Link href="/blog/steam-balansi-tushmadi">“the Steam balance did not arrive”</Link>.
      </p>

      <h2 id="login">Why a login is asked for and a password is not</h2>
      <p>
        So the funds reach your account, the bot asks for your <b>Steam login (account name)</b> — the sign-in name
        you chose at registration. Do not confuse it with the <b>profile name</b>: the profile name can be changed
        at any time and is shown to everyone, while the login never changes and identifies the account exactly. The
        login is not a password, but there is no reason to post it publicly either. <b>A password, a Steam Guard
        code or an emailed code is never requested.</b>
      </p>
      <p>
        If any service asks for your password or Steam Guard code, that is an account-theft attempt. More on
        this: <Link href="/blog/steam-hisobini-himoya-qilish-10-maslahat">protecting a Steam account</Link> and{" "}
        <Link href="/blog/steam-login-nima">what a Steam login is</Link>.
      </p>

      <h2 id="xatolar">Common questions and what to watch</h2>
      <KeyFacts label="Worth noting">
        <li>
          <b>Enter the login correctly.</b> The funds go to the account you name — a typo sends them elsewhere.
        </li>
        <li>
          <b>Your account currency.</b> If your Steam account is not in dollars, Steam handles the conversion and
          the final figure may differ.
        </li>
        <li>
          <b>If the balance does not arrive.</b> Refresh the page in Steam first, then get in touch with the
          order number — there is a{" "}
          <Link href="/blog/steam-balansi-tushmadi">dedicated guide</Link>.
        </li>
        <li>
          <b>The rate can change.</b> The figure on this page comes from the current settings; the amount at
          order time is shown in the bot.
        </li>
      </KeyFacts>

      <p>
        See also: <Link href="/blog/steam-1-dollardan-toldirish">topping up Steam in so‘m</Link>,{" "}
        <Link href="/blog/steam-wallet-nima">Steam Wallet pricing</Link>,{" "}
        <Link href="/blog/steam-wallet-xavfsizmi">the safety question</Link>. Other games live on the{" "}
        <Link href="/gampay">GamPay page</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "the Steam store" },
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "official Steam support" },
        ]}
      />
    </>
  );
}

const rateUz = STEAM_RATE_UZS_PER_USD.toLocaleString("en-US").replace(/,/g, " ");
const rateRu = STEAM_RATE_UZS_PER_USD.toLocaleString("ru-RU").replace(/ /g, " ");

const uzFaq = [
  { question: "Steam hamyonini eng kam qancha to‘ldirsa bo‘ladi?", answer: `${STEAM_MIN_USD} dollardan boshlab.` },
  { question: "Kurs qanday?", answer: `Qat’iy kurs: 1 dollar = ${rateUz} so‘m.` },
  {
    question: "Yakuniy summa to‘lov paytida o‘zgaradimi?",
    answer: "Yo‘q. Kurs qat’iy bo‘lgani uchun summa oldindan ma’lum; buyurtma paytidagi raqamni botda ko‘rasiz.",
  },
  { question: "Parolim so‘raladimi?", answer: "Yo‘q. Faqat ochiq Steam login nomi so‘raladi; parol va Steam Guard kodi hech qachon emas." },
  {
    question: "Qaysi to‘lov usullari bor?",
    answer: "UzCard, HUMO, Click, Payme, Uzum va Paynet — hammasi so‘mda. Xalqaro karta kerak emas.",
  },
  {
    question: "Hisobim valyutasi dollar bo‘lmasa-chi?",
    answer: "Konvertatsiya Steam tomonida amalga oshadi va hisobingizdagi yakuniy summa farq qilishi mumkin.",
  },
  {
    question: "Balans tushmasa nima qilaman?",
    answer: "Avval Steam’da sahifani yangilang; keyin buyurtma raqami bilan qo‘llab-quvvatlashga yozing.",
  },
  {
    question: "Do‘stimning hisobiga to‘ldirsam bo‘ladimi?",
    answer: "Ha, buyurtmada uning Steam login nomini ko‘rsatsangiz kifoya — login’ni diqqat bilan tekshiring.",
  },
];

const ruFaq = [
  { question: "Какая минимальная сумма пополнения Steam?", answer: `От ${STEAM_MIN_USD} доллара.` },
  { question: "Какой курс?", answer: `Фиксированный курс: 1 доллар = ${rateRu} сум.` },
  {
    question: "Меняется ли итоговая сумма при оплате?",
    answer: "Нет. Курс фиксированный, поэтому сумма известна заранее; цифру на момент заказа видно в боте.",
  },
  {
    question: "Запрашивают ли пароль?",
    answer: "Нет. Запрашивается только открытый логин Steam; пароль и код Steam Guard — никогда.",
  },
  {
    question: "Какие есть способы оплаты?",
    answer: "UzCard, Humo, Click, Payme, Uzum и Paynet — всё в сумах. Иностранная карта не нужна.",
  },
  {
    question: "А если валюта моего аккаунта не доллар?",
    answer: "Конвертация выполняется на стороне Steam, и итоговая сумма на аккаунте может отличаться.",
  },
  {
    question: "Что делать, если баланс не пришёл?",
    answer: "Сначала обновите страницу в Steam, затем напишите в поддержку с номером заказа.",
  },
  {
    question: "Можно ли пополнить аккаунт друга?",
    answer: "Да, достаточно указать в заказе его логин Steam — внимательно проверьте написание.",
  },
];

const enFaq = [
  { question: "What is the minimum Steam top-up?", answer: `From $${STEAM_MIN_USD}.` },
  { question: "What is the rate?", answer: `A fixed rate: $1 = ${rateUz} UZS.` },
  {
    question: "Does the total change at checkout?",
    answer: "No. The rate is fixed, so the amount is known in advance; the figure at order time is shown in the bot.",
  },
  {
    question: "Is my password requested?",
    answer: "No. Only the public Steam login is asked for; never a password or a Steam Guard code.",
  },
  {
    question: "Which payment methods are available?",
    answer: "UzCard, HUMO, Click, Payme, Uzum and Paynet — all in so‘m. No international card is needed.",
  },
  {
    question: "What if my account currency is not dollars?",
    answer: "Steam handles the conversion, and the final amount on the account may differ.",
  },
  {
    question: "What if the balance does not arrive?",
    answer: "Refresh the page in Steam first, then contact support with the order number.",
  },
  {
    question: "Can I top up a friend's account?",
    answer: "Yes — just give their Steam login in the order, and check the spelling carefully.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Steam",
  type: "howto",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  keywords: [
    "steam 1 dollardan toldirish",
    "steam kursi qancha",
    "steam hamyonini somda toldirish",
    "steam eng kam summa",
    "пополнить steam от 1 доллара",
    "steam кошелёк курс сум",
    "ozbek somida steam balansini toldirish",
    "steam hisobini toldirish",
    "steam wallet uzcard humo",
    "steam wallet narxlari",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegramda @StarsPaymee_bot ni ishga tushiring." },
    { name: "Steam bo‘limini tanlang", text: "GamPay javonidagi Steam hamyoni bo‘limi." },
    { name: "Summani ko‘rsating", text: "1 dollardan boshlab istalgan miqdor." },
    { name: "Login kiriting", text: "Ochiq Steam login nomi; parol so‘ralmaydi." },
    { name: "So‘mda to‘lang", text: "UzCard, HUMO, Click, Payme, Uzum yoki Paynet." },
    { name: "Balansni tekshiring", text: "Mablag‘ hisobga tushgach sarflashingiz mumkin." },
  ],
  locales: {
    uz: {
      title: "Steam hamyonini 1 dollardan to‘ldirish: qat’iy kurs, so‘mda to‘lov",
      excerpt:
        "Qat’iy kurs bo‘yicha hisob jadvali, nega eng kam summa 1 dollar, qadam-baqadam to‘ldirish va nega parol emas, faqat login so‘raladi.",
      metaTitle: "Steam’ni 1 dollardan to‘ldirish — qat’iy kurs",
      metaDescription:
        "Steam hamyonini 1 dollardan so‘mda to‘ldirish: qat’iy kurs bo‘yicha tayyor hisob jadvali, qadamlar, to‘lov usullari va login bilan bog‘liq xavfsizlik.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Steam balansini to‘ldiring",
      ctaBody: "@StarsPaymee_bot — 1 dollardan, qat’iy kurs, so‘mda to‘lov.",
      faq: uzFaq,
    },
    ru: {
      title: "Пополнение Steam от 1 доллара: фиксированный курс и оплата в сумах",
      excerpt:
        "Таблица расчёта по фиксированному курсу, почему минимум 1 доллар, пошаговое пополнение и почему нужен логин, а не пароль.",
      metaTitle: "Пополнить Steam от 1 доллара — фиксированный курс",
      metaDescription:
        "Пополнение кошелька Steam от 1 доллара в сумах: готовая таблица по фиксированному курсу, шаги, способы оплаты и безопасность с логином.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Пополните баланс Steam",
      ctaBody: "@StarsPaymee_bot — от 1 доллара, фиксированный курс, оплата в сумах.",
      faq: ruFaq,
    },
    en: {
      title: "Topping up Steam from $1: a fixed rate, paid in so‘m",
      excerpt:
        "A conversion table at the fixed rate, why the minimum is one dollar, the top-up steps, and why a login is asked for but never a password.",
      metaTitle: "Top up Steam from $1 — a fixed rate",
      metaDescription:
        "Top up a Steam wallet from $1 in so‘m: a ready conversion table at the fixed rate, the steps, payment methods and login safety.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Top up your Steam balance",
      ctaBody: "@StarsPaymee_bot — from $1, a fixed rate, paid in so‘m.",
      faq: enFaq,
    },
  },
};
