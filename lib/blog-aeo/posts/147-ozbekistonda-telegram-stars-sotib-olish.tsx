import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InlineCta,
  Sources,
  KeyFacts,
  Steps,
  Step,
  InfoGrid,
  InfoCard,
  Yes,
  No,
} from "@/components/blog/aeo-blocks";
import { StarsPriceBoard } from "@/components/blog/stars-price-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "ozbekistonda-telegram-stars-sotib-olish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      O‘zbekistonda Stars sotib olishning eng qulay yo‘li — <b>@StarsPaymee_bot</b>: mahalliy to‘lov tizimlari
      (UzCard, HUMO, Click, Payme, Paynet), o‘zbek tilida qo‘llab-quvvatlash va so‘mdagi narx. Xalqaro karta yoki
      qo‘shimcha hisob kerak emas.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="usullar">Stars sotib olishning barcha yo‘llari</h2>
      <p>
        Telegram Stars (o‘zbekchada ko‘pincha «yulduz» deyiladi) — Telegramning rasmiy ichki valyutasi. Uni olishning
        to‘rtta yo‘li bor, lekin ularning hammasi ham O‘zbekiston kartasi bilan ishlamaydi:
      </p>
      <CompareTable
        headers={["Yo‘l", "To‘lov", "O‘zbekiston kartasi", "Tezlik"]}
        rows={[
          ["Telegram ichida (Apple/Google)", "App Store / Google Play", <No key="1" />, "Xorijiy karta kerak"],
          ["Fragment.com", "TON kripto", <No key="2" />, "Hamyon va kripto kerak"],
          ["@PremiumBot (rasmiy)", "Visa / Mastercard", <No key="3" />, "Karta qabul qilinmaydi"],
          [
            <>@StarsPaymee_bot / Mini App</>,
            "UzCard, HUMO, Click, Payme, Uzum",
            <Yes key="4" />,
            "~10 soniya, avtomatik",
          ],
        ]}
      />

      <h2 id="muammo">Rasmiy usulning O‘zbekistondagi muammolari</h2>
      <p>
        Telegram ilovasi orqali Stars sotib olishda App Store yoki Google Play hisobi kerak bo‘ladi, bu esa odatda
        xalqaro to‘lov tizimlariga ulangan kartani talab qiladi. Ko‘p foydalanuvchida bunday karta yo‘q yoki uni
        ishlatish qulay emas.
      </p>
      <p>
        Fragment.com ham muqobil emas: u TON kriptovalyutasi va tashqi hamyon talab qiladi, ya’ni texnik jihatdan
        butunlay boshqa auditoriyaga mo‘ljallangan. Rasmiy @PremiumBot esa faqat Visa/Mastercard qabul qiladi. Aynan
        shu bo‘shliqni mahalliy to‘lovni qabul qiladigan vositachi bot to‘ldiradi.
      </p>

      <h2 id="yechim">Mahalliy yechim</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="Mahalliy to‘lov">
          UzCard, HUMO, Click, Payme, Paynet.
        </InfoCard>
        <InfoCard emoji="🇺🇿" title="O‘zbek tilida">
          Butun jarayon va yordam ona tilida.
        </InfoCard>
        <InfoCard emoji="⚡" title="Bir necha daqiqa">
          Buyurtma avtomatik bajariladi.
        </InfoCard>
        <InfoCard emoji="🚫" title="Kartasiz ham">
          Xalqaro karta yoki qo‘shimcha hisob shart emas.
        </InfoCard>
      </InfoGrid>

      <h2 id="tolov">Qaysi to‘lov usullari ishlaydi?</h2>
      <KeyFacts label="Qabul qilinadigan usullar">
        <li>
          <b>UzCard va HUMO</b> — milliy kartalar, to‘g‘ridan-to‘g‘ri karta raqami bilan, konvertatsiyasiz.
        </li>
        <li>
          <b>Click</b> — ilova o‘rnatilgan bo‘lsa, rekvizit kiritilmaydi:{" "}
          <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">Click orqali xarid qo‘llanmasi</Link>.
        </li>
        <li>
          <b>Payme</b> — keng tarqalgan mahalliy tizim:{" "}
          <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">Payme orqali xarid qo‘llanmasi</Link>.
        </li>
        <li>
          <b>Naqd pul</b> — kartasi yo‘qlar uchun alohida yo‘l:{" "}
          <Link href="/blog/naqd-pul-bilan-telegram-stars-sotib-olish">naqd pul bilan sotib olish</Link>.
        </li>
        <li>
          <b>Rubl (SBP)</b> — Rossiyadan to‘laydiganlar uchun; qolgan tartib bir xil.
        </li>
      </KeyFacts>

      <h2 id="narx">Narxlar</h2>
      <StarsPriceBoard locale="uz" />
      <KeyFacts label="Nega so‘mda to‘lash qulay">
        <li>Valyuta ayirboshlash xarajati yo‘q — kurs farqi summaga qo‘shilmaydi.</li>
        <li>Visa yoki Mastercard talab qilinmaydi.</li>
        <li>Pul mahalliy bank tizimi orqali o‘tadi.</li>
        <li>Summa oldindan aniq: botda ko‘rsatilgan raqam yakuniy.</li>
      </KeyFacts>

      <InlineCta text="So‘mda to‘lab, Stars’ni oling." />

      <h2 id="qadamlar">Qadam-baqadam qo‘llanma</h2>
      <Steps>
        <Step title="1. Botga /start yuboring">@StarsPaymee_bot yoki Mini App.</Step>
        <Step title="2. Miqdorni tanlang">Kerakli Stars sonini belgilang.</Step>
        <Step title="3. Username kiriting">Yulduzlar tushadigan hisob.</Step>
        <Step title="4. Mahalliy usulda to‘lang">UzCard, HUMO, Click, Payme yoki Paynet.</Step>
        <Step title="5. Qabul qiling">Stars bir necha daqiqada hisobga tushadi.</Step>
      </Steps>

      <h2 id="username">Username va yetkazish tartibi</h2>
      <p>
        Yulduzlar akkauntga <b>@username orqali</b> ulanadi — parol, SMS-kod yoki 2FA hech qachon so‘ralmaydi. Shuning
        uchun o‘zingizga ham, do‘stingizga ham bir xil tartibda olasiz: qabul qiluvchi maydoniga kimning username’i
        yozilsa, yulduzlar o‘shanga tushadi.
      </p>
      <p>
        To‘lov tasdiqlangach buyurtma avtomatik bajariladi va yulduzlar o‘rtacha <b>10 soniyada</b> hisobda ko‘rinadi.
        Butun jarayon — botni ochishdan yulduz tushgunicha — odatda besh daqiqadan oshmaydi. Kechikish bo‘lsa, sabab
        deyarli har doim to‘lov tomonida bo‘ladi: karta limiti, 3-D Secure tasdig‘ining kechikishi yoki bankning
        vaqtinchalik bloki. Bunday holatda statusni yangilab, buyurtmani qaytadan boshlash kifoya.
      </p>

      <h2 id="tekshiruv">Xariddan oldin va keyin: qisqa tekshiruv</h2>
      <p>
        Mahalliy karta bilan to‘lov odatda birinchi urinishdayoq o‘tadi. Muammo chiqadigan joylar sanoqli va
        ularning hammasini oldindan tekshirib qo‘yish mumkin:
      </p>
      <Steps>
        <Step title="1. Kartada onlayn to‘lov yoqilganini tekshiring">
          Bank ilovasida kunlik limit va internet-to‘lov ruxsatiga qarang. Xalqaro Visa yoki Mastercard talab
          qilinmaydi — UzCard va HUMO yetarli.
        </Step>
        <Step title="2. Tasdiq kodini tayyorlab qo‘ying">
          Bank SMS yoki o‘z ilovasi orqali kod yuboradi. Bank ilovasi ochiq tursa, kod tezroq keladi va to‘lov
          uzilib qolmaydi.
        </Step>
        <Step title="3. Qabul qiluvchini solishtiring">
          Bot to‘lovdan oldin @username’ni ko‘rsatadi — uni yulduzlar tushishi kerak bo‘lgan hisob bilan
          solishtiring. Noto‘g‘ri username — eng ko‘p uchraydigan xato.
        </Step>
        <Step title="4. Bitta aniq summa bilan to‘lang">
          Kerakli paketni bir martada to‘lang; summani bo‘lib yuborish buyurtmani chalkashtiradi.
        </Step>
        <Step title="5. Buyurtma ID’sini saqlang">
          To‘lovdan keyin bot buyurtma raqamini beradi va u tarixda qoladi. Savol tug‘ilsa, qo‘llab-quvvatlashga
          aynan shu raqam bilan murojaat qilinadi.
        </Step>
      </Steps>

      <h2 id="nega">Nega mahalliy xizmatni tanlash kerak?</h2>
      <KeyFacts label="Asosiy sabablar">
        <li><b>Til to‘sig‘i yo‘q</b> — jarayon o‘zbek tilida tushuntiriladi.</li>
        <li><b>Tezkor yordam</b> — mahalliy vaqt zonasida ishlaydigan qo‘llab-quvvatlash.</li>
        <li><b>Ishonch</b> — ko‘plab O‘zbekiston foydalanuvchilari sinovdan o‘tkazgan.</li>
        <li><b>Konvertatsiya yo‘q</b> — to‘lov to‘g‘ridan-to‘g‘ri so‘mda.</li>
      </KeyFacts>

      <p>
        Qarang: <Link href="/blog/telegram-stars-narxi">narxlar va paketlar</Link>,{" "}
        <Link href="/blog/telegram-stars-kelmadi-nima-qilish">yulduz kelmasa nima qilish</Link> va{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">xavfsizlik mezonlari</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard milliy to‘lov tizimi" },
          { href: "https://cbu.uz/", label: "cbu.uz", note: "Markaziy bank — valyuta kurslari" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Самый удобный способ купить Stars в Узбекистане — <b>@StarsPaymee_bot</b>: местные платёжные системы (UzCard,
      HUMO, Click, Payme, Paynet), поддержка на узбекском языке и цена в сумах. Международная карта или
      дополнительный счёт не нужны.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="usullar">Все способы купить Stars</h2>
      <p>
        Telegram Stars — официальная внутренняя валюта Telegram. Купить их можно четырьмя путями, но не каждый из них
        работает с узбекской картой:
      </p>
      <CompareTable
        headers={["Способ", "Оплата", "Узбекская карта", "Скорость"]}
        rows={[
          ["Внутри Telegram (Apple/Google)", "App Store / Google Play", <No key="1" />, "Нужна зарубежная карта"],
          ["Fragment.com", "Криптовалюта TON", <No key="2" />, "Нужны кошелёк и крипта"],
          ["@PremiumBot (официальный)", "Visa / Mastercard", <No key="3" />, "Карта не принимается"],
          [
            <>@StarsPaymee_bot / Mini App</>,
            "UzCard, HUMO, Click, Payme, Uzum",
            <Yes key="4" />,
            "~10 секунд, автоматически",
          ],
        ]}
      />

      <h2 id="muammo">Проблемы официального способа в Узбекистане</h2>
      <p>
        Для покупки Stars через приложение Telegram нужен аккаунт App Store или Google Play, а это обычно требует
        карты, подключённой к международным платёжным системам. У многих пользователей такой карты нет или
        пользоваться ею неудобно.
      </p>
      <p>
        Fragment.com тоже не выход: он требует криптовалюту TON и внешний кошелёк, то есть технически рассчитан на
        совсем другую аудиторию. Официальный @PremiumBot принимает только Visa/Mastercard. Именно этот пробел
        закрывает бот, принимающий местную оплату.
      </p>

      <h2 id="yechim">Местное решение</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="Местная оплата">
          UzCard, HUMO, Click, Payme, Paynet.
        </InfoCard>
        <InfoCard emoji="🇺🇿" title="На узбекском">
          Весь процесс и поддержка на родном языке.
        </InfoCard>
        <InfoCard emoji="⚡" title="Несколько минут">
          Заказ выполняется автоматически.
        </InfoCard>
        <InfoCard emoji="🚫" title="И без карты">
          Международная карта или доп. счёт не требуются.
        </InfoCard>
      </InfoGrid>

      <h2 id="tolov">Какие способы оплаты работают?</h2>
      <KeyFacts label="Принимаемые способы">
        <li>
          <b>UzCard и HUMO</b> — национальные карты, напрямую по номеру карты, без конвертации.
        </li>
        <li>
          <b>Click</b> — если приложение установлено, реквизиты вводить не нужно:{" "}
          <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">руководство по оплате через Click</Link>.
        </li>
        <li>
          <b>Payme</b> — распространённая местная система:{" "}
          <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">руководство по оплате через Payme</Link>.
        </li>
        <li>
          <b>Наличные</b> — отдельный путь для тех, у кого нет карты:{" "}
          <Link href="/blog/naqd-pul-bilan-telegram-stars-sotib-olish">покупка за наличные</Link>.
        </li>
        <li>
          <b>Рубли (СБП)</b> — для оплаты из России; остальной порядок тот же.
        </li>
      </KeyFacts>

      <h2 id="narx">Цены</h2>
      <StarsPriceBoard locale="ru" />
      <KeyFacts label="Почему удобно платить в сумах">
        <li>Нет расходов на обмен валюты — курсовая разница не добавляется к сумме.</li>
        <li>Visa или Mastercard не требуются.</li>
        <li>Деньги проходят через местную банковскую систему.</li>
        <li>Сумма известна заранее: число, показанное в боте, и есть итоговое.</li>
      </KeyFacts>

      <InlineCta text="Оплатите в сумах и получите Stars." />

      <h2 id="qadamlar">Пошаговое руководство</h2>
      <Steps>
        <Step title="1. Отправьте /start">@StarsPaymee_bot или Mini App.</Step>
        <Step title="2. Выберите количество">Укажите нужное число Stars.</Step>
        <Step title="3. Введите username">Аккаунт, куда поступят звёзды.</Step>
        <Step title="4. Оплатите местным способом">UzCard, HUMO, Click, Payme или Paynet.</Step>
        <Step title="5. Получите">Stars поступят за несколько минут.</Step>
      </Steps>

      <h2 id="username">Username и порядок доставки</h2>
      <p>
        Звёзды привязываются к аккаунту <b>по @username</b> — пароль, SMS-код или 2FA не запрашиваются никогда.
        Поэтому себе и другу покупка оформляется одинаково: звёзды поступят тому, чей username указан в поле
        получателя.
      </p>
      <p>
        После подтверждения оплаты заказ выполняется автоматически, и звёзды видны на балансе в среднем за{" "}
        <b>10 секунд</b>. Весь путь — от открытия бота до зачисления — обычно занимает не больше пяти минут. Если
        есть задержка, причина почти всегда на стороне оплаты: лимит карты, задержка подтверждения 3-D Secure или
        временная блокировка банка. В этом случае достаточно обновить статус и оформить заказ заново.
      </p>

      <h2 id="tekshiruv">Короткая проверка до и после покупки</h2>
      <p>
        Оплата местной картой обычно проходит с первой попытки. Мест, где может возникнуть заминка, немного — и все
        они проверяются заранее:
      </p>
      <Steps>
        <Step title="1. Проверьте, разрешены ли онлайн-платежи">
          В приложении банка посмотрите дневной лимит и разрешение на интернет-платежи. Международная Visa или
          Mastercard не нужны — достаточно UzCard и HUMO.
        </Step>
        <Step title="2. Подготовьте код подтверждения">
          Банк присылает код по SMS или в своём приложении. Если приложение банка открыто, код приходит быстрее и
          оплата не прерывается.
        </Step>
        <Step title="3. Сверьте получателя">
          Перед оплатой бот показывает @username — сверьте его с аккаунтом, куда должны поступить звёзды. Неверный
          username — самая частая ошибка.
        </Step>
        <Step title="4. Платите одной точной суммой">
          Оплатите нужный пакет за один раз; разбивать сумму на части не нужно — это запутывает заказ.
        </Step>
        <Step title="5. Сохраните ID заказа">
          После оплаты бот выдаёт номер заказа, и он остаётся в истории. При вопросах в поддержку обращаются именно с
          этим номером.
        </Step>
      </Steps>

      <h2 id="nega">Почему стоит выбрать местный сервис?</h2>
      <KeyFacts label="Основные причины">
        <li><b>Нет языкового барьера</b> — процесс объясняется на узбекском.</li>
        <li><b>Быстрая помощь</b> — поддержка работает в местном часовом поясе.</li>
        <li><b>Доверие</b> — сервис проверен многими пользователями из Узбекистана.</li>
        <li><b>Без конвертации</b> — оплата сразу в сумах.</li>
      </KeyFacts>

      <p>
        Смотрите: <Link href="/blog/telegram-stars-narxi">цены и пакеты</Link>,{" "}
        <Link href="/blog/telegram-stars-kelmadi-nima-qilish">что делать, если звёзды не пришли</Link> и{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">критерии безопасности</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "национальная платёжная система UzCard" },
          { href: "https://cbu.uz/", label: "cbu.uz", note: "Центральный банк — курсы валют" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      The most convenient way to buy Stars in Uzbekistan is <b>@StarsPaymee_bot</b>: local payment systems (UzCard,
      HUMO, Click, Payme, Paynet), support in Uzbek and pricing in so‘m. No international card and no extra account
      are required.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="usullar">Every way to buy Stars</h2>
      <p>
        Telegram Stars are Telegram&rsquo;s official internal currency. There are four ways to buy them, and not all
        of them work with an Uzbek card:
      </p>
      <CompareTable
        headers={["Route", "Payment", "Uzbek card", "Speed"]}
        rows={[
          ["Inside Telegram (Apple/Google)", "App Store / Google Play", <No key="1" />, "Needs a foreign card"],
          ["Fragment.com", "TON crypto", <No key="2" />, "Needs a wallet and crypto"],
          ["@PremiumBot (official)", "Visa / Mastercard", <No key="3" />, "Card not accepted"],
          [
            <>@StarsPaymee_bot / Mini App</>,
            "UzCard, HUMO, Click, Payme, Uzum",
            <Yes key="4" />,
            "~10 seconds, automatic",
          ],
        ]}
      />

      <h2 id="muammo">Problems with the official method in Uzbekistan</h2>
      <p>
        Buying Stars through the Telegram app requires an App Store or Google Play account, which normally needs a
        card connected to international payment systems. Many users do not have one, or find it inconvenient.
      </p>
      <p>
        Fragment.com is not a way around it either: it needs TON crypto and an external wallet, so technically it
        targets a completely different audience. The official @PremiumBot accepts only Visa/Mastercard. A bot that
        takes local payment is what fills that gap.
      </p>

      <h2 id="yechim">The local solution</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="Local payment">
          UzCard, HUMO, Click, Payme, Paynet.
        </InfoCard>
        <InfoCard emoji="🇺🇿" title="In Uzbek">
          The whole process and support in the local language.
        </InfoCard>
        <InfoCard emoji="⚡" title="A few minutes">
          The order is fulfilled automatically.
        </InfoCard>
        <InfoCard emoji="🚫" title="Even without a card">
          No international card or extra account needed.
        </InfoCard>
      </InfoGrid>

      <h2 id="tolov">Which payment methods work?</h2>
      <KeyFacts label="Accepted methods">
        <li>
          <b>UzCard and HUMO</b> — national cards, straight from the card number, with no conversion.
        </li>
        <li>
          <b>Click</b> — with the app installed, no card details are retyped:{" "}
          <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">the Click payment guide</Link>.
        </li>
        <li>
          <b>Payme</b> — a widely used local system:{" "}
          <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">the Payme payment guide</Link>.
        </li>
        <li>
          <b>Cash</b> — a separate route for people without a card:{" "}
          <Link href="/blog/naqd-pul-bilan-telegram-stars-sotib-olish">buying with cash</Link>.
        </li>
        <li>
          <b>Roubles (SBP)</b> — for payments from Russia; everything else is the same.
        </li>
      </KeyFacts>

      <h2 id="narx">Prices</h2>
      <StarsPriceBoard locale="en" />
      <KeyFacts label="Why paying in so&lsquo;m is convenient">
        <li>No currency-exchange cost — no rate spread is added to the total.</li>
        <li>No Visa or Mastercard required.</li>
        <li>The money moves through the local banking system.</li>
        <li>The total is known upfront: the number shown in the bot is the final one.</li>
      </KeyFacts>

      <InlineCta text="Pay in so‘m and get your Stars." />

      <h2 id="qadamlar">Step-by-step guide</h2>
      <Steps>
        <Step title="1. Send /start">@StarsPaymee_bot or the Mini App.</Step>
        <Step title="2. Choose an amount">Set the number of Stars you need.</Step>
        <Step title="3. Enter a username">The account the Stars should land on.</Step>
        <Step title="4. Pay locally">UzCard, HUMO, Click, Payme or Paynet.</Step>
        <Step title="5. Receive">Stars arrive within a few minutes.</Step>
      </Steps>

      <h2 id="username">Username and how delivery works</h2>
      <p>
        Stars are attached to an account <b>by @username</b> — a password, SMS code or 2FA is never requested. So
        buying for yourself and buying for a friend work the same way: the Stars go to whoever&rsquo;s username is in
        the recipient field.
      </p>
      <p>
        Once payment is confirmed the order runs automatically and the Stars show up on the balance in about{" "}
        <b>10 seconds</b>. The whole path — from opening the bot to the Stars landing — normally takes under five
        minutes. When there is a delay, the cause is almost always on the payment side: a card limit, a slow 3-D
        Secure confirmation, or a temporary block from the bank. Refreshing the status and starting the order again
        is enough.
      </p>

      <h2 id="tekshiruv">A short checklist before and after the purchase</h2>
      <p>
        A local card usually goes through on the first attempt. There are only a few places where it can stall, and
        all of them can be checked in advance:
      </p>
      <Steps>
        <Step title="1. Check that online payments are enabled">
          In your banking app, look at the daily limit and the permission for internet payments. An international
          Visa or Mastercard is not required — UzCard and HUMO are enough.
        </Step>
        <Step title="2. Have the confirmation code ready">
          The bank sends a code by SMS or inside its own app. With the banking app open, the code arrives faster and
          the payment is not interrupted.
        </Step>
        <Step title="3. Double-check the recipient">
          Before payment the bot shows the @username — compare it with the account the Stars should land on. A
          wrong username is the most common mistake.
        </Step>
        <Step title="4. Pay one exact amount">
          Pay for the package in a single transaction; splitting the sum only confuses the order.
        </Step>
        <Step title="5. Keep the order ID">
          After payment the bot issues an order number and it stays in your history. Support requests are handled
          with exactly that number.
        </Step>
      </Steps>

      <h2 id="nega">Why choose a local service?</h2>
      <KeyFacts label="The main reasons">
        <li><b>No language barrier</b> — the process is explained in Uzbek.</li>
        <li><b>Fast help</b> — support operating in the local time zone.</li>
        <li><b>Trust</b> — tested by many users in Uzbekistan.</li>
        <li><b>No conversion</b> — payment goes directly in so‘m.</li>
      </KeyFacts>

      <p>
        See: <Link href="/blog/telegram-stars-narxi">prices and packages</Link>,{" "}
        <Link href="/blog/telegram-stars-kelmadi-nima-qilish">what to do if the Stars do not arrive</Link> and{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">safety criteria</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard national payment system" },
          { href: "https://cbu.uz/", label: "cbu.uz", note: "Central Bank — exchange rates" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "O‘zbekistonda Stars qanday sotib olinadi?", answer: "@StarsPaymee_bot orqali, mahalliy to‘lov usullari bilan so‘mda." },
  { question: "Xalqaro karta kerakmi?", answer: "Yo‘q. UzCard, HUMO, Click, Payme yoki Paynet yetarli." },
  { question: "Qo‘llab-quvvatlash o‘zbek tilidami?", answer: "Ha, butun jarayon va yordam o‘zbek tilida." },
  { question: "Qancha vaqt oladi?", answer: "Odatda bir necha daqiqa." },
  { question: "Narx qancha?", answer: "1 dona 220 so‘m, 50 ta 11 000 so‘m." },
  { question: "Naqd to‘lash mumkinmi?", answer: "Ha, Paynet orqali." },
  { question: "Konvertatsiya bo‘ladimi?", answer: "Yo‘q, to‘lov to‘g‘ridan-to‘g‘ri so‘mda." },
  { question: "Qanday ma’lumot so‘raladi?", answer: "Faqat Telegram username yoki ID." },
  {
    question: "Visa yoki Mastercard bo‘lmasa Stars sotib olsa bo‘ladimi?",
    answer:
      "Ha. Xalqaro karta umuman talab qilinmaydi: UzCard, HUMO, Click, Payme yoki Paynet yetarli. Kartada internet-to‘lov yoqilganini bank ilovasidan tekshirib qo‘ying.",
  },
  {
    question: "Buyurtmani qanday kuzataman?",
    answer:
      "To‘lovdan keyin bot buyurtma raqamini beradi va u botdagi tarixda saqlanadi. Yulduzlar kechiksa, qo‘llab-quvvatlashga aynan shu raqam bilan murojaat qilasiz.",
  },
  {
    question: "«Yulduz» va «Stars» — bir xil narsami?",
    answer:
      "Ha. Telegram rasmiy hujjatlarida Stars deb yuritiladi, o‘zbek tilida ko‘pchilik «yulduz» deb qidiradi. Valyuta bitta, narx va buyurtma tartibi ham bir xil.",
  },
  {
    question: "Fragment orqali olsam bo‘ladimi?",
    answer:
      "Texnik jihatdan mumkin, lekin Fragment TON kriptovalyutasi va tashqi hamyon talab qiladi. O‘zbekiston kartasi bilan to‘lamoqchi bo‘lsangiz, bu yo‘l ishlamaydi.",
  },
  {
    question: "Eng kichik paket qancha?",
    answer: "Eng kichik paket — 50 yulduz, narxi 11 000 so‘m. Keyingilari 75, 100, 150, 250, 500, 1000 va undan yuqori.",
  },
  {
    question: "Rublda to‘lash mumkinmi?",
    answer:
      "Ha, Rossiyadan to‘laydiganlar uchun SBP (СБП) orqali rublda. Qolgan tartib bir xil: miqdor → username → to‘lov → yetkazish.",
  },
  {
    question: "Noto‘g‘ri username kiritsam nima bo‘ladi?",
    answer:
      "Bot to‘lovdan oldin username’ni ko‘rsatadi — shu paytda tekshirish kerak. Xato yuborilgan buyurtma bo‘yicha darhol buyurtma raqami bilan qo‘llab-quvvatlashga yozing.",
  },
];

const ruFaq = [
  { question: "Как купить Stars в Узбекистане?", answer: "Через @StarsPaymee_bot, местными способами оплаты в сумах." },
  { question: "Нужна ли международная карта?", answer: "Нет. Достаточно UzCard, HUMO, Click, Payme или Paynet." },
  { question: "Поддержка на узбекском?", answer: "Да, весь процесс и помощь на узбекском языке." },
  { question: "Сколько времени занимает?", answer: "Обычно несколько минут." },
  { question: "Какая цена?", answer: "1 штука 220 сум, 50 штук 11 000 сум." },
  { question: "Можно ли платить наличными?", answer: "Да, через Paynet." },
  { question: "Будет ли конвертация?", answer: "Нет, оплата сразу в сумах." },
  { question: "Какие данные запрашиваются?", answer: "Только Telegram username или ID." },
  {
    question: "Можно ли купить Stars без Visa или Mastercard?",
    answer:
      "Да. Международная карта не нужна: достаточно UzCard, HUMO, Click, Payme или Paynet. Проверьте в приложении банка, разрешены ли интернет-платежи по карте.",
  },
  {
    question: "Как отследить заказ?",
    answer:
      "После оплаты бот выдаёт номер заказа, и он сохраняется в истории бота. Если звёзды задерживаются, в поддержку обращаются именно с этим номером.",
  },
  {
    question: "«Юлдуз» и «Stars» — это одно и то же?",
    answer:
      "Да. В документации Telegram это Stars, по-узбекски многие ищут «yulduz». Валюта одна, цена и порядок заказа тоже одинаковые.",
  },
  {
    question: "Можно ли купить через Fragment?",
    answer:
      "Технически да, но Fragment требует криптовалюту TON и внешний кошелёк. Если вы платите узбекской картой, этот путь не сработает.",
  },
  {
    question: "Какой минимальный пакет?",
    answer: "Минимальный пакет — 50 звёзд за 11 000 сум. Далее 75, 100, 150, 250, 500, 1000 и больше.",
  },
  {
    question: "Можно ли оплатить в рублях?",
    answer:
      "Да, из России — через СБП в рублях. Остальной порядок тот же: количество → username → оплата → доставка.",
  },
  {
    question: "Что делать, если ввёл неверный username?",
    answer:
      "Бот показывает username перед оплатой — сверить нужно именно в этот момент. Если заказ уже ушёл не туда, сразу напишите в поддержку с номером заказа.",
  },
];

const enFaq = [
  { question: "How do you buy Stars in Uzbekistan?", answer: "Through @StarsPaymee_bot, with local payment methods in so‘m." },
  { question: "Do I need an international card?", answer: "No. UzCard, HUMO, Click, Payme or Paynet is enough." },
  { question: "Is support available in Uzbek?", answer: "Yes, the whole process and help are in Uzbek." },
  { question: "How long does it take?", answer: "Usually a few minutes." },
  { question: "What is the price?", answer: "220 UZS each; 11,000 UZS for fifty." },
  { question: "Can I pay in cash?", answer: "Yes, through Paynet." },
  { question: "Will there be conversion?", answer: "No, payment is directly in so‘m." },
  { question: "What data is requested?", answer: "Only a Telegram username or ID." },
  {
    question: "Can I buy Stars without a Visa or Mastercard?",
    answer:
      "Yes. No international card is needed: UzCard, HUMO, Click, Payme or Paynet is enough. Check in your banking app that internet payments are enabled for the card.",
  },
  {
    question: "How do I track an order?",
    answer:
      "After payment the bot issues an order number and keeps it in your history. If the Stars are delayed, support requests are handled with that number.",
  },
  {
    question: "Are “yulduz” and “Stars” the same thing?",
    answer:
      "Yes. Telegram\u2019s documentation calls them Stars, while in Uzbek most people search for “yulduz”. It is one currency, with the same price and the same ordering flow.",
  },
  {
    question: "Can I buy through Fragment?",
    answer:
      "Technically yes, but Fragment requires TON crypto and an external wallet. If you are paying with an Uzbek card, that route does not work.",
  },
  {
    question: "What is the smallest package?",
    answer: "The smallest is 50 Stars for 11,000 UZS. After that come 75, 100, 150, 250, 500, 1,000 and above.",
  },
  {
    question: "Can I pay in roubles?",
    answer:
      "Yes, from Russia via SBP in roubles. Everything else is the same: amount → username → payment → delivery.",
  },
  {
    question: "What if I enter the wrong username?",
    answer:
      "The bot shows the username before payment — that is the moment to check it. If an order has already gone to the wrong account, message support with the order number right away.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-08-02",
  dateModified: "2026-09-18",
  keywords: [
    "ozbekistonda telegram stars sotib olish",
    "uzbekistanda stars olish",
    "stars sotib olish toshkent",
    "ozbekiston stars xizmati",
    "mahalliy stars xizmati",
    "stars uzbekistan 2026",
    "telegram stars qanday sotib olinadi",
    "telegram stars visasiz sotib olish",
    "stars xaridi visa kartasiz",
    "stars buyurtma id kuzatish",
    "telegram stars qanday olinadi",
    "telegram stars kerak",
    "stars olish",
    "som evaziga stars olish",
    "telegram yulduz sotib olish",
    "visa kartasiz stars olish",
    "telegram stars qayerdan sotib olish",
    "stars uzcard humo mini app",
    "fragment muqobili stars",
  ],
  howToSteps: [
    { name: "Botga /start yuboring", text: "@StarsPaymee_bot yoki Mini App’ni oching." },
    { name: "Miqdorni tanlang", text: "Kerakli Stars sonini belgilang." },
    { name: "Username kiriting", text: "Yulduzlar tushadigan hisobni ko‘rsating." },
    { name: "Mahalliy usulda to‘lang", text: "UzCard, HUMO, Click, Payme yoki Paynet." },
    { name: "Qabul qiling", text: "Stars bir necha daqiqada hisobga tushadi." },
  ],
  locales: {
    uz: {
      title: "O‘zbekistonda Telegram Stars sotib olish — to‘liq qo‘llanma",
      excerpt:
        "Telegram Stars (yulduz) sotib olishning barcha yo‘llari: nega rasmiy oqim ishlamaydi, qaysi to‘lov usullari qabul qilinadi, narxlar, username orqali yetkazish va xariddan oldingi tekshiruv.",
      metaTitle: "Telegram Stars sotib olish — O‘zbekiston qo‘llanmasi",
      metaDescription:
        "O‘zbekistonda Telegram Stars sotib olish: barcha yo‘llar taqqoslandi, UzCard/HUMO/Click/Payme bilan so‘mda to‘lov, narxlar va username orqali 10 soniyada yetkazish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "O‘zbekistonda Stars oling",
      ctaBody: "@StarsPaymee_bot — mahalliy to‘lov, so‘mda narx, o‘zbekcha yordam.",
      faq: uzFaq,
    },
    ru: {
      title: "Как купить Telegram Stars в Узбекистане — полное руководство",
      excerpt:
        "Все способы купить Telegram Stars: почему не работает официальный путь, какие способы оплаты принимаются, цены, доставка по username и проверка перед покупкой.",
      metaTitle: "Как купить Telegram Stars в Узбекистане",
      metaDescription:
        "Покупка Telegram Stars в Узбекистане: сравнение всех способов, оплата в сумах через UzCard/HUMO/Click/Payme, цены и доставка по username за 10 секунд.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купите Stars в Узбекистане",
      ctaBody: "@StarsPaymee_bot — местная оплата, цена в сумах, помощь на узбекском.",
      faq: ruFaq,
    },
    en: {
      title: "How to buy Telegram Stars in Uzbekistan — the full guide",
      excerpt:
        "Every way to buy Telegram Stars: why the official route fails, which payment methods are accepted, prices, delivery by username and a pre-purchase checklist.",
      metaTitle: "How to buy Telegram Stars in Uzbekistan",
      metaDescription:
        "Buying Telegram Stars in Uzbekistan: all routes compared, payment in so‘m via UzCard/HUMO/Click/Payme, prices and delivery by username in 10 seconds.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Buy Stars in Uzbekistan",
      ctaBody: "@StarsPaymee_bot — local payment, so‘m pricing, help in Uzbek.",
      faq: enFaq,
    },
  },
};
