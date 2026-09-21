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
  Yes,
} from "@/components/blog/aeo-blocks";
import { PremiumPlanBoard } from "@/components/blog/premium-plan-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-eng-oson-usul";

/** Ikki oqim — uchala tilda bir xil ustunlar. */
function FlowCompare({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Xususiyat", "Username orqali", "Login orqali"],
      rows: [
        ["Akkauntga kirish", "no", "Rasmiy login"],
        ["Parol / SMS-kod", "yes", "Kirish zarur"],
        ["Kerakli ma’lumot", "Faqat @username", "Rasmiy kirish"],
        ["Faollashish", "~5 soniya, avtomatik", "Operator orqali"],
        ["Muddatlar", "3, 6, 12 oy", "1 oy, 1 yil"],
        ["Kimga mos", "Ko‘pchilikka", "1 oylik yoki maxsus holatlarga"],
      ],
      yes: "So‘ralmaydi",
      no: "Kerak emas",
    },
    ru: {
      headers: ["Свойство", "По username", "Через логин"],
      rows: [
        ["Вход в аккаунт", "no", "Официальный логин"],
        ["Пароль / SMS-код", "yes", "Нужен вход"],
        ["Что нужно", "Только @username", "Официальный вход"],
        ["Активация", "~5 секунд, авто", "Через оператора"],
        ["Сроки", "3, 6, 12 месяцев", "1 месяц, 1 год"],
        ["Кому подходит", "Большинству", "Для 1 месяца или особых случаев"],
      ],
      yes: "Не запрашивается",
      no: "Не нужен",
    },
    en: {
      headers: ["Property", "By username", "Through sign-in"],
      rows: [
        ["Account sign-in", "no", "An official login"],
        ["Password / SMS code", "yes", "Sign-in required"],
        ["What is needed", "Only an @username", "An official sign-in"],
        ["Activation", "~5 seconds, automatic", "Handled by an operator"],
        ["Terms", "3, 6, 12 months", "1 month, 1 year"],
        ["Who it suits", "Most people", "The 1-month plan or special cases"],
      ],
      yes: "Not requested",
      no: "Not needed",
    },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([label, username, login]) => [
        <strong key="l">{label}</strong>,
        username === "no" ? <Yes key="a">{copy.no}</Yes> : username === "yes" ? <Yes key="a">{copy.yes}</Yes> : username,
        login,
      ])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram Premium’ni eng oson olish — <b>@StarsPaymee_bot</b> orqali <b>username oqimida</b>: akkauntga kirish,
      parol yoki SMS-kod kerak emas, faqat @username yetarli va Premium o‘rtacha 5 soniyada faollashadi. To‘lov
      so‘mda — UzCard, HUMO, Click, Payme, Uzum yoki Paynet. Muddatlar: 1, 3, 6 va 12 oy — hammasi username orqali.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#muammo", label: "Nega rasmiy yo‘l ishlamaydi" },
          { href: "#oqim", label: "Ikki oqim: username va login" },
          { href: "#narx", label: "Tariflar va narxlar" },
          { href: "#tolov", label: "To‘lov usullari va qadamlari" },
          { href: "#bosqichlar", label: "Bosqichma-bosqich xarid" },
          { href: "#tekshirish", label: "Faollashuvni tekshirish" },
          { href: "#muddat", label: "Muddat tugagach nima bo‘ladi" },
        ]}
      />

      <h2 id="muammo">Nega ko‘pchilik rasmiy yo‘ldan foydalana olmaydi</h2>
      <p>
        O‘zbekistondagi ko‘p foydalanuvchida faqat <b>UzCard</b> yoki <b>HUMO</b> milliy kartasi bor. Telegram’ning
        rasmiy to‘lov oqimi esa App Store yoki Google Play hisobi orqali xalqaro Visa/Mastercard kartani so‘raydi.
        Aynan shu — Premium sotib olishdagi eng katta to‘siq: obuna kerak, karta esa mos emas.
      </p>
      <p>
        Bitta obuna uchun chet el kartasini rasmiylashtirish uzoq va har doim ham imkonli emas. Shuning uchun
        mahalliy to‘lovni qabul qiladigan oqim eng qisqa yechim bo‘lib qoladi.
      </p>

      <h2 id="oqim">Ikki oqim: username va login</h2>
      <p>StarsPaymee Premium’ni ikki yo‘l bilan beradi — ehtiyojingizga qarab tanlaysiz:</p>
      <FlowCompare locale="uz" />
      <p>
        Aksar foydalanuvchi uchun <b>username orqali</b> oqim eng qulay va xavfsiz: hech qanday maxfiy ma’lumot
        bermaysiz. 2026-yil sentabridan boshlab <b>1 oylik tarif ham shu oqimda</b>; eng qisqa muddat
        3 oy. Batafsil:{" "}
        <Link href="/blog/ozbekistonda-oylik-premium-uza-humo">1 oylik Premium haqida alohida maqola</Link>.
      </p>

      <h2 id="narx">Tariflar va narxlar</h2>
      <PremiumPlanBoard locale="uz" flow="username" />
      <PremiumPlanBoard locale="uz" flow="login" />
      <p>
        12 oylik paket oyiga hisoblaganda eng tejamkor variant. Narxlar bo‘yicha to‘liq tahlil —{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">Premium narxi O‘zbekistonda</Link>.
      </p>

      <InlineCta
        text="Premium’ni username bilan 5 soniyada faollashtiring."
        product={{ kind: "premium", months: 6 }}
      />

      <h2 id="tolov">To‘lov usullari va to‘lov qadamlari</h2>
      <KeyFacts label="Qabul qilinadigan usullar">
        <li>
          <b>UzCard</b>, <b>HUMO</b> — milliy kartalar, to‘g‘ridan-to‘g‘ri karta raqami bilan.
        </li>
        <li>
          <b>Click</b>, <b>Payme</b> — ilova orqali bir bosishda, rekvizit qayta kiritilmaydi.
        </li>
        <li>
          <b>Paynet</b> — naqd pul bilan to‘lash uchun.
        </li>
        <li>
          Rossiyadan to‘laydiganlar uchun — <b>SBP</b> orqali rublda.
        </li>
      </KeyFacts>
      <p>To‘lovning o‘zi qanday kechadi:</p>
      <Steps>
        <Step title="1. Summani tasdiqlang">
          Bot yakuniy summani so‘mda ko‘rsatadi — konvertatsiya va yashirin komissiya qo‘shilmaydi.
        </Step>
        <Step title="2. Usulni tanlang">
          Karta bilan to‘lasangiz karta raqamini kiritasiz; Click yoki Payme tanlansangiz ilova ochiladi.
        </Step>
        <Step title="3. Bank tasdig‘ini kiriting">
          Bank SMS yoki o‘z ilovasi orqali kod yuboradi. Kod kechiksa, bank ilovasini ochiq qoldiring.
        </Step>
        <Step title="4. Chekni saqlang">
          To‘lovdan keyin buyurtma raqami beriladi — savol tug‘ilsa, qo‘llab-quvvatlashga aynan shu raqam bilan
          murojaat qilinadi.
        </Step>
      </Steps>
      <p>
        To‘lov o‘tmasa, odatda sabab ikkitadan biri: kartaning kunlik limiti tugagan yoki tasdiq kodi kechikkan.
        Ikkala holatda ham buyurtmani qaytadan boshlash kifoya — pul yechilmagan bo‘ladi.
      </p>

      <h3 id="tez-oqim">Eng tez oqim va Visa’siz to‘lov</h3>
      <KeyFacts label="Vaqtni tejaydigan uch narsa">
        <li>
          <b>Eng kam qadam</b> — Click yoki Payme ilovasi telefoningizda bo‘lsa, rekvizit qayta kiritilmaydi:
          to‘lov bir bosishda tasdiqlanadi.
        </li>
        <li>
          <b>Promokodni to‘lovdan oldin qo‘llang</b> — summa tasdiqlangandan keyin uni qo‘shib bo‘lmaydi.
        </li>
        <li>
          <b>Bank ilovasi ochiq tursin</b> — tasdiq kodi o‘sha ilovaga keladi va OTP kechikmaydi.
        </li>
      </KeyFacts>
      <p>
        Visa yoki Mastercard bu yerda umuman talab qilinmaydi: rasmiy oqimda xalqaro karta so‘raladigan joyda
        UzCard, HUMO, Click, Payme, Uzum yoki Paynet ishlaydi. Kartangizda internet-to‘lov yoqilganini bank
        ilovasidan bir marta tekshirib qo‘ysangiz kifoya — keyingi buyurtmalarda bu savol chiqmaydi.
      </p>

      <h2 id="bosqichlar">Bosqichma-bosqich: Premium olish</h2>
      <Steps>
        <Step title="1. Botni oching">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          yoki Mini App’ni ishga tushiring.
        </Step>
        <Step title="2. Premium’ni tanlang">Mahsulotlar ichidan Telegram Premium’ni belgilang.</Step>
        <Step title="3. Muddatni tanlang">3, 6 yoki 12 oy — narx darhol so‘mda ko‘rinadi.</Step>
        <Step title="4. @username kiriting">
          Kimga ekanini username bilan kiriting — o‘zingiz yoki sovg‘a qilayotgan odam.
        </Step>
        <Step title="5. To‘lang">UzCard, HUMO, Click, Payme, Uzum yoki Paynet orqali so‘mda.</Step>
        <Step title="6. Faollashuvni tekshiring">Quyidagi uchta tekshiruvdan o‘ting.</Step>
      </Steps>

      <h2 id="avtomatik">Avtomatik aktivatsiya qanday ishlaydi va nega parol kerak emas</h2>
      <p>
        «Username bilan» oqim to‘liq avtomatlashtirilgan: to‘lov tasdiqlangach tizim buyurtmani o‘zi aniqlaydi va
        Premium’ni Telegramning rasmiy mexanizmi orqali o‘sha akkauntga ulaydi — xuddi do‘stingiz sizga Premium
        sovg‘a qilgandek. Operator ham, navbat ham yo‘q, o‘rtacha 5 soniya.
      </p>
      <p>
        Aynan shu sabab login, parol yoki 2FA hech qachon so‘ralmaydi: obuna akkauntga «ichkaridan kirish» orqali
        emas, tashqaridan, sovg‘a sifatida biriktiriladi. Akkauntingizga hech kim kirmaydi.
      </p>

      <h2 id="tekshirish">Premium faollashganini qanday tekshirish kerak</h2>
      <p>
        To‘lov o‘tgani hali obuna yoqilgani degani emas — quyidagi uchta belgi buni aniq tasdiqlaydi:
      </p>
      <InfoGrid>
        <InfoCard emoji="⭐" title="Profil rozetkasi">
          Ism yonida Premium yulduzchasi paydo bo‘ladi; uni boshqalar ham ko‘radi.
        </InfoCard>
        <InfoCard emoji="⚙️" title="Sozlamalardagi sana">
          Telegram sozlamalarida «Telegram Premium» bo‘limi ochiladi va obuna tugash sanasi ko‘rsatiladi.
        </InfoCard>
        <InfoCard emoji="📁" title="Amaliy sinov">
          2 GB dan katta fayl yuboring yoki Premium stikerni oching — ishlasa, obuna faol.
        </InfoCard>
        <InfoCard emoji="🔄" title="Ko‘rinmasa">
          Telegram’ni to‘liq yopib qayta oching; ilova holatni ba’zan darrov yangilamaydi.
        </InfoCard>
      </InfoGrid>
      <p>
        Shundan keyin ham o‘zgarmasa, buyurtma raqami bilan{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>{" "}
        ga yozing.
      </p>

      <h2 id="muddat">Muddat tugagach nima bo‘ladi</h2>
      <p>
        Akkaunt bloklanmaydi — chatlar, kanallar va fayllar joyida qoladi, faqat Premium imtiyozlari to‘xtaydi.
        Avtoto‘lov ulanmaydi, ya’ni hisobingizdan o‘z-o‘zidan pul yechilmaydi. Uzaytirish uchun yangi buyurtma
        berasiz va buni muddat tugashini kutmasdan ham qilish mumkin.
      </p>

      <KeyFacts label="Premium nima beradi (asosiy)">
        <li>
          <b>4 GB</b> gacha fayl yuklash (oddiy hisobda 2 GB)
        </li>
        <li>
          <b>1000</b> kanalga obuna, <b>20</b> ta chat papkasi
        </li>
        <li>Reklamasiz, tezroq yuklash, eksklyuziv stiker va emoji</li>
        <li>Profil rozetkasi, kengaytirilgan Stories imkoniyatlari</li>
      </KeyFacts>
      <p>
        Premium’ning to‘liq foydalari va «arziydimi?» savoliga javob —{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">alohida maqolada</Link>. Sovg‘a qilmoqchi
        bo‘lsangiz — <Link href="/blog/telegram-premium-sovga-username-orqali">username orqali sovg‘a qilish</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Premium rasmiy FAQ" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard milliy to‘lov tizimi" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "buyurtma" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Самый простой способ оформить Telegram Premium — через <b>@StarsPaymee_bot</b> в потоке <b>по username</b>:
      вход в аккаунт, пароль или SMS не нужны, достаточно @username, и Premium активируется в среднем за 5 секунд.
      Оплата в сумах — UzCard, HUMO, Click, Payme, Uzum или Paynet. Сроки: 3, 6 и 12 месяцев; месячный — в отдельном
      потоке со входом.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#muammo", label: "Почему официальный путь не работает" },
          { href: "#oqim", label: "Два потока: username и логин" },
          { href: "#narx", label: "Тарифы и цены" },
          { href: "#tolov", label: "Способы и шаги оплаты" },
          { href: "#bosqichlar", label: "Пошаговая покупка" },
          { href: "#tekshirish", label: "Проверка активации" },
          { href: "#muddat", label: "Что будет после окончания срока" },
        ]}
      />

      <h2 id="muammo">Почему многие не могут воспользоваться официальным путём</h2>
      <p>
        У многих пользователей в Узбекистане есть только национальная карта <b>UzCard</b> или <b>HUMO</b>. А
        официальный платёжный сценарий Telegram через App Store или Google Play запрашивает международную карту
        Visa/Mastercard. Это и есть главное препятствие: подписка нужна, а карта не подходит.
      </p>
      <p>
        Оформлять зарубежную карту ради одной подписки долго и не всегда возможно. Поэтому поток с местной оплатой
        оказывается самым коротким решением.
      </p>

      <h2 id="oqim">Два потока: username и логин</h2>
      <p>StarsPaymee выдаёт Premium двумя способами — выбираете по потребности:</p>
      <FlowCompare locale="ru" />
      <p>
        Для большинства поток <b>по username</b> удобнее и безопаснее: вы не передаёте секретные данные. Важный
        момент — <b>с сентября 2026 года месячный тариф тоже здесь</b>; минимальный срок 1
        месяца. Подробнее:{" "}
        <Link href="/blog/ozbekistonda-oylik-premium-uza-humo">отдельная статья о месячном Premium</Link>.
      </p>

      <h2 id="narx">Тарифы и цены</h2>
      <PremiumPlanBoard locale="ru" flow="username" />
      <PremiumPlanBoard locale="ru" flow="login" />
      <p>
        Годовой пакет в пересчёте на месяц — самый выгодный. Полный разбор цен —{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">цена Premium в Узбекистане</Link>.
      </p>

      <InlineCta
        text="Активируйте Premium по username за 5 секунд."
        product={{ kind: "premium", months: 6 }}
      />

      <h2 id="tolov">Способы оплаты и шаги платежа</h2>
      <KeyFacts label="Принимаемые способы">
        <li>
          <b>UzCard</b>, <b>HUMO</b> — национальные карты, напрямую по номеру карты.
        </li>
        <li>
          <b>Click</b>, <b>Payme</b> — в один клик в приложении, без повторного ввода реквизитов.
        </li>
        <li>
          <b>Paynet</b> — для оплаты наличными.
        </li>
        <li>
          Для тех, кто платит из России, — <b>СБП</b> в рублях.
        </li>
      </KeyFacts>
      <p>Как проходит сам платёж:</p>
      <Steps>
        <Step title="1. Подтвердите сумму">
          Бот показывает итоговую сумму в сумах — без конвертации и скрытых комиссий.
        </Step>
        <Step title="2. Выберите способ">
          При оплате картой вводите номер карты; при выборе Click или Payme открывается приложение.
        </Step>
        <Step title="3. Введите код банка">
          Банк присылает код по SMS или в своём приложении. Если код задерживается, оставьте приложение открытым.
        </Step>
        <Step title="4. Сохраните чек">
          После оплаты выдаётся номер заказа — именно с ним обращаются в поддержку, если возникнут вопросы.
        </Step>
      </Steps>
      <p>
        Если платёж не проходит, причина обычно одна из двух: исчерпан дневной лимит карты или задержался код
        подтверждения. В обоих случаях достаточно оформить заказ заново — деньги при этом не списываются.
      </p>

      <h3 id="tez-oqim">Самый быстрый поток и оплата без Visa</h3>
      <KeyFacts label="Три вещи, которые экономят время">
        <li>
          <b>Минимум шагов</b> — если приложение Click или Payme уже стоит на телефоне, реквизиты вводить не нужно:
          платёж подтверждается в одно касание.
        </li>
        <li>
          <b>Промокод применяйте до оплаты</b> — после подтверждения суммы добавить его уже нельзя.
        </li>
        <li>
          <b>Держите приложение банка открытым</b> — код подтверждения приходит именно туда, и OTP не задержится.
        </li>
      </KeyFacts>
      <p>
        Visa или Mastercard здесь не нужны вовсе: там, где официальный путь требует международную карту, работают
        UzCard, HUMO, Click, Payme, Uzum или Paynet. Достаточно один раз проверить в приложении банка, разрешены ли
        интернет-платежи по карте — в следующих заказах этот вопрос уже не возникнет.
      </p>

      <h2 id="bosqichlar">Пошагово: оформление Premium</h2>
      <Steps>
        <Step title="1. Откройте бота">
          Запустите{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          или Mini App.
        </Step>
        <Step title="2. Выберите Premium">Среди товаров отметьте Telegram Premium.</Step>
        <Step title="3. Выберите срок">3, 6 или 12 месяцев — цена сразу в сумах.</Step>
        <Step title="4. Введите @username">Кому оформляете — себе или в подарок.</Step>
        <Step title="5. Оплатите">UzCard, HUMO, Click, Payme, Uzum или Paynet в сумах.</Step>
        <Step title="6. Проверьте активацию">Пройдите три проверки ниже.</Step>
      </Steps>

      <h2 id="avtomatik">Как работает автоматическая активация и почему не нужен пароль</h2>
      <p>
        Поток «по username» полностью автоматизирован: после подтверждения оплаты система сама определяет заказ и
        подключает Premium к указанному аккаунту через официальный механизм Telegram — так же, как если бы подписку
        подарил друг. Ни оператора, ни очереди, в среднем 5 секунд.
      </p>
      <p>
        Именно поэтому логин, пароль или 2FA не запрашиваются никогда: подписка привязывается не «входом внутрь»
        аккаунта, а снаружи, как подарок. В ваш аккаунт никто не заходит.
      </p>

      <h2 id="tekshirish">Как проверить, что Premium активировался</h2>
      <p>Прошедшая оплата ещё не означает, что подписка включена. Это подтверждают три признака:</p>
      <InfoGrid>
        <InfoCard emoji="⭐" title="Значок в профиле">
          Рядом с именем появляется звёздочка Premium; её видят и другие пользователи.
        </InfoCard>
        <InfoCard emoji="⚙️" title="Дата в настройках">
          В настройках Telegram открывается раздел «Telegram Premium» с датой окончания подписки.
        </InfoCard>
        <InfoCard emoji="📁" title="Практическая проверка">
          Отправьте файл больше 2 ГБ или откройте премиум-стикер — если работает, подписка активна.
        </InfoCard>
        <InfoCard emoji="🔄" title="Если не видно">
          Полностью закройте и снова откройте Telegram — приложение не всегда обновляет состояние сразу.
        </InfoCard>
      </InfoGrid>
      <p>
        Если и после этого ничего не изменилось, напишите в{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>{" "}
        с номером заказа.
      </p>

      <h2 id="muddat">Что происходит после окончания срока</h2>
      <p>
        Аккаунт не блокируется — чаты, каналы и файлы остаются на месте, отключаются только привилегии Premium.
        Автоплатёж не подключается, то есть деньги сами по себе не списываются. Для продления оформляется новый
        заказ, и сделать это можно, не дожидаясь конца срока.
      </p>

      <KeyFacts label="Что даёт Premium (основное)">
        <li>
          Загрузка файлов до <b>4 ГБ</b> (в обычном аккаунте 2 ГБ)
        </li>
        <li>
          Подписка на <b>1000</b> каналов, <b>20</b> папок чатов
        </li>
        <li>Без рекламы, быстрее загрузки, эксклюзивные стикеры и эмодзи</li>
        <li>Бейдж профиля, расширенные возможности Stories</li>
      </KeyFacts>
      <p>
        Полные преимущества Premium и ответ «стоит ли?» — в{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">отдельной статье</Link>. Если оформляете в подарок —{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">Premium в подарок по username</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "официальный FAQ Premium" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "национальная платёжная система UzCard" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "заказ" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      The easiest way to get Telegram Premium is <b>@StarsPaymee_bot</b> in the <b>username flow</b>: no account
      sign-in, no password and no SMS code — an @username is enough, and Premium activates in about 5 seconds.
      Payment is in so‘m via UzCard, HUMO, Click, Payme, Uzum or Paynet. Terms are 3, 6 and 12 months; the 1-month plan
      lives in a separate sign-in flow.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#muammo", label: "Why the official route fails" },
          { href: "#oqim", label: "Two flows: username and sign-in" },
          { href: "#narx", label: "Plans and prices" },
          { href: "#tolov", label: "Payment methods and steps" },
          { href: "#bosqichlar", label: "Buying step by step" },
          { href: "#tekshirish", label: "Verifying activation" },
          { href: "#muddat", label: "What happens when the term ends" },
        ]}
      />

      <h2 id="muammo">Why the official route does not work for many people</h2>
      <p>
        Most users in Uzbekistan carry only a national <b>UzCard</b> or <b>HUMO</b> card. Telegram’s official
        payment flow, however, goes through an App Store or Google Play account and asks for an international
        Visa/Mastercard. That is the real obstacle: the subscription is wanted, the card does not fit.
      </p>
      <p>
        Issuing a foreign card for a single subscription is slow and not always possible, which is why a flow that
        accepts local payment ends up being the shortest path.
      </p>

      <h2 id="oqim">Two flows: username and sign-in</h2>
      <p>StarsPaymee delivers Premium in two ways — pick whichever fits:</p>
      <FlowCompare locale="en" />
      <p>
        For most people the <b>username flow</b> is both easier and safer: no secret data changes hands. One
        important detail — <b>since September 2026 the monthly plan is here too</b>; in the username flow the
        shortest term is 3 months. More on that:{" "}
        <Link href="/blog/ozbekistonda-oylik-premium-uza-humo">the dedicated article on monthly Premium</Link>.
      </p>

      <h2 id="narx">Plans and prices</h2>
      <PremiumPlanBoard locale="en" flow="username" />
      <PremiumPlanBoard locale="en" flow="login" />
      <p>
        The 12-month pack is the cheapest per month. For the full price breakdown, see{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">Premium pricing in Uzbekistan</Link>.
      </p>

      <InlineCta text="Activate Premium by username in 5 seconds." product={{ kind: "premium", months: 6 }} />

      <h2 id="tolov">Payment methods and payment steps</h2>
      <KeyFacts label="Accepted methods">
        <li>
          <b>UzCard</b>, <b>HUMO</b> — national cards, straight from the card number.
        </li>
        <li>
          <b>Click</b>, <b>Payme</b> — one tap in the app, no re-entering details.
        </li>
        <li>
          <b>Paynet</b> — for paying in cash.
        </li>
        <li>
          For anyone paying from Russia — <b>SBP</b> in roubles.
        </li>
      </KeyFacts>
      <p>How the payment itself goes:</p>
      <Steps>
        <Step title="1. Confirm the total">
          The bot shows the final amount in so‘m — no conversion and no hidden fees.
        </Step>
        <Step title="2. Choose a method">
          Paying by card means entering the card number; picking Click or Payme opens the app.
        </Step>
        <Step title="3. Enter the bank’s code">
          The bank sends a code by SMS or inside its app. If it is slow, leave the banking app open.
        </Step>
        <Step title="4. Keep the receipt">
          An order number is issued after payment — that is what support asks for if anything comes up.
        </Step>
      </Steps>
      <p>
        When a payment fails, it is usually one of two things: the card’s daily limit is spent, or the confirmation
        code arrived late. In both cases simply start the order again — no money was taken.
      </p>

      <h3 id="tez-oqim">The fastest flow, and paying without Visa</h3>
      <KeyFacts label="Three things that save time">
        <li>
          <b>The fewest steps</b> — if the Click or Payme app is already on your phone, no card details are retyped:
          the payment is confirmed in one tap.
        </li>
        <li>
          <b>Apply a promo code before paying</b> — once the total is confirmed it can no longer be added.
        </li>
        <li>
          <b>Keep the banking app open</b> — the confirmation code arrives there, so the OTP does not lag behind.
        </li>
      </KeyFacts>
      <p>
        Visa or Mastercard is not needed at all here: where the official route asks for an international card,
        UzCard, HUMO, Click, Payme, Uzum or Paynet works instead. Checking once in your banking app that internet
        payments are enabled for the card is enough — the question will not come up on later orders.
      </p>

      <h2 id="bosqichlar">Step by step: getting Premium</h2>
      <Steps>
        <Step title="1. Open the bot">
          Start{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          or the Mini App.
        </Step>
        <Step title="2. Pick Premium">Select Telegram Premium among the products.</Step>
        <Step title="3. Choose a term">3, 6 or 12 months — the price shows in so‘m immediately.</Step>
        <Step title="4. Enter an @username">Who it is for — yourself or the person you are gifting.</Step>
        <Step title="5. Pay">UzCard, HUMO, Click, Payme, Uzum or Paynet, in so‘m.</Step>
        <Step title="6. Verify activation">Run the three checks below.</Step>
      </Steps>

      <h2 id="avtomatik">How automatic activation works, and why no password is needed</h2>
      <p>
        The “by username” flow is fully automated: once payment is confirmed, the system matches the order itself and
        attaches Premium to that account through Telegram&rsquo;s official mechanism — the same way a friend gifting
        you a subscription works. No operator, no queue, about 5 seconds.
      </p>
      <p>
        That is exactly why a login, password or 2FA is never requested: the subscription is attached from the
        outside, as a gift, not by signing into the account. Nobody logs into your account.
      </p>

      <h2 id="tekshirish">How to verify that Premium activated</h2>
      <p>A completed payment does not yet mean the subscription is on. Three signs confirm it:</p>
      <InfoGrid>
        <InfoCard emoji="⭐" title="The profile badge">
          A Premium star appears next to the name, visible to other people too.
        </InfoCard>
        <InfoCard emoji="⚙️" title="The date in settings">
          A “Telegram Premium” section opens in Telegram’s settings, showing the subscription’s end date.
        </InfoCard>
        <InfoCard emoji="📁" title="A practical test">
          Send a file larger than 2 GB or open a Premium sticker — if it works, the subscription is live.
        </InfoCard>
        <InfoCard emoji="🔄" title="If nothing shows">
          Close Telegram completely and reopen it — the app does not always refresh its state right away.
        </InfoCard>
      </InfoGrid>
      <p>
        If nothing changes after that, message{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>{" "}
        with the order number.
      </p>

      <h2 id="muddat">What happens when the term ends</h2>
      <p>
        The account is not blocked — chats, channels and files stay put, and only the Premium perks switch off. No
        auto-renewal is attached, so nothing is charged on its own. Renewing means placing a new order, and that can
        be done without waiting for the term to run out.
      </p>

      <KeyFacts label="What Premium gives you (the essentials)">
        <li>
          Uploads up to <b>4 GB</b> (2 GB on a regular account)
        </li>
        <li>
          <b>1000</b> channel subscriptions and <b>20</b> chat folders
        </li>
        <li>No ads, faster downloads, exclusive stickers and emoji</li>
        <li>A profile badge and extended Stories features</li>
      </KeyFacts>
      <p>
        The full list of benefits and the “is it worth it?” question live in{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">a separate article</Link>. Buying it as a present?
        See <Link href="/blog/telegram-premium-sovga-username-orqali">gifting Premium by username</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "official Premium FAQ" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard national payment system" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "ordering" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Premium uchun akkauntimga kirish kerakmi?",
    answer:
      "Username orqali oqimda yo‘q — faqat @username yetarli. Parol, SMS-kod yoki 2FA so‘ralmaydi. Login oqimi alohida xizmat sifatida mavjud.",
  },
  {
    question: "Premium qancha vaqtda faollashadi?",
    answer: "Username orqali to‘lovdan so‘ng Premium o‘rtacha 5 soniyada avtomatik yoqiladi.",
  },
  {
    question: "Narxlar qanday?",
    answer:
      "Username orqali: 3 oy — 160 000, 6 oy — 215 000, 12 oy — 388 000 so‘m. Barcha muddat username orqali, parolsiz.",
  },
  {
    question: "Nega 1 oylik tarif username oqimida yo‘q?",
    answer:
      "Endi bor. 2026-yil sentabridan 1 oylik ham username oqimida — 45 000 so‘m, parolsiz.",
  },
  {
    question: "Qaysi to‘lov usullari qabul qilinadi?",
    answer: "UzCard, HUMO, Click, Payme, Uzum va Paynet — so‘mda. Rossiyadan to‘laydiganlar uchun SBP orqali rublda.",
  },
  {
    question: "Premium faollashganini qanday tekshiraman?",
    answer:
      "Profilda Premium rozetkasi chiqadi, sozlamalardagi «Telegram Premium» bo‘limida tugash sanasi ko‘rinadi va 2 GB dan katta fayl yuborish ishlaydi.",
  },
  {
    question: "Premium’ni do‘stimga sovg‘a qila olamanmi?",
    answer: "Ha. Qabul qiluvchi maydoniga do‘stingizning @username’ini kiriting — Premium o‘shaning akkauntida yoqiladi.",
  },
  {
    question: "Visa kartam yo‘q — Premium olsam bo‘ladimi?",
    answer:
      "Ha. Xalqaro karta talab qilinmaydi: UzCard, HUMO, Click, Payme, Uzum yoki Paynet yetarli. Kartada internet-to‘lov yoqilgan bo‘lsa kifoya.",
  },
  {
    question: "Eng tez to‘lov usuli qaysi?",
    answer:
      "Click yoki Payme ilovasi telefonda bo‘lsa — eng kam qadam: rekvizit kiritilmaydi, to‘lov bir bosishda tasdiqlanadi va bank kodi o‘sha ilovaga keladi.",
  },
  {
    question: "Muddat tugasa akkaunt bloklanadimi?",
    answer:
      "Yo‘q. Chatlar va kanallar qoladi, faqat Premium imtiyozlari to‘xtaydi. Avtoto‘lov ulanmaydi; istalgan vaqtda yangi buyurtma berasiz.",
  },
];

const ruFaq = [
  {
    question: "Нужен ли вход в аккаунт для Premium?",
    answer:
      "В потоке по username — нет, достаточно @username. Пароль, SMS-код или 2FA не запрашиваются. Поток через логин доступен как отдельная услуга.",
  },
  {
    question: "За сколько активируется Premium?",
    answer: "По username после оплаты Premium включается автоматически в среднем за 5 секунд.",
  },
  {
    question: "Какие цены?",
    answer:
      "По username: 3 мес — 160 000, 6 мес — 215 000, 12 мес — 388 000 сум. Все сроки — по username, без пароля.",
  },
  {
    question: "Почему тарифа на 1 месяц нет в потоке по username?",
    answer:
      "Месячный тариф выдаётся только в потоке со входом — это отдельная услуга с официальной активацией. В потоке по username минимальный срок 3 месяца.",
  },
  {
    question: "Какие способы оплаты принимаются?",
    answer: "UzCard, HUMO, Click, Payme, Uzum и Paynet — в сумах. Для тех, кто платит из России, — СБП в рублях.",
  },
  {
    question: "Как проверить, что Premium активировался?",
    answer:
      "В профиле появляется значок Premium, в настройках в разделе «Telegram Premium» видна дата окончания, и начинает работать отправка файлов больше 2 ГБ.",
  },
  {
    question: "Можно ли подарить Premium другу?",
    answer: "Да. Введите @username друга в поле получателя — Premium включится на его аккаунте.",
  },
  {
    question: "У меня нет карты Visa — можно ли купить Premium?",
    answer:
      "Да. Международная карта не нужна: достаточно UzCard, HUMO, Click, Payme, Uzum или Paynet. Главное, чтобы по карте были разрешены интернет-платежи.",
  },
  {
    question: "Какой способ оплаты самый быстрый?",
    answer:
      "Если приложение Click или Payme уже установлено — шагов меньше всего: реквизиты не вводятся, платёж подтверждается в одно касание, а код банка приходит туда же.",
  },
  {
    question: "Блокируется ли аккаунт по окончании срока?",
    answer:
      "Нет. Чаты и каналы остаются, отключаются только привилегии Premium. Автоплатёж не подключается; новый заказ оформляете когда угодно.",
  },
];

const enFaq = [
  {
    question: "Do I need to sign in to my account for Premium?",
    answer:
      "Not in the username flow — an @username is enough. No password, SMS code or 2FA is requested. The sign-in flow exists as a separate service.",
  },
  {
    question: "How fast does Premium activate?",
    answer: "In the username flow Premium switches on automatically in about 5 seconds after payment.",
  },
  {
    question: "What are the prices?",
    answer:
      "By username: 3 months — 160,000, 6 months — 215,000, 12 months — 388,000 UZS. Every term goes by username, with no password.",
  },
  {
    question: "Why is the 1-month plan missing from the username flow?",
    answer:
      "It is there now. Since September 2026 the monthly plan runs by username too — 45,000 UZS, no password.",
  },
  {
    question: "Which payment methods are accepted?",
    answer: "UzCard, HUMO, Click, Payme, Uzum and Paynet in so‘m. For anyone paying from Russia, SBP in roubles.",
  },
  {
    question: "How do I verify Premium activated?",
    answer:
      "A Premium badge appears on the profile, the “Telegram Premium” section in settings shows an end date, and sending files over 2 GB starts working.",
  },
  {
    question: "Can I gift Premium to a friend?",
    answer: "Yes. Enter your friend’s @username in the recipient field — Premium switches on for their account.",
  },
  {
    question: "I have no Visa card — can I still buy Premium?",
    answer:
      "Yes. No international card is required: UzCard, HUMO, Click, Payme, Uzum or Paynet is enough, as long as internet payments are enabled for the card.",
  },
  {
    question: "Which payment method is the fastest?",
    answer:
      "If the Click or Payme app is already installed, that is the shortest route: no card details to retype, one tap to confirm, and the bank code arrives in the same app.",
  },
  {
    question: "Is the account blocked when the term ends?",
    answer:
      "No. Chats and channels remain; only the Premium perks stop. No auto-renewal is attached, and you can place a new order whenever you like.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-06-22",
  dateModified: "2026-09-18",
  keywords: [
    "telegram premium olish",
    "telegram premium uzbekistan",
    "telegram premium username",
    "telegram premium sotib olish",
    "telegram premium oson",
    "telegram premium uzcard humo",
    "telegram premium to‘lov qadamlari",
    "telegram premium tez otkazilish",
    "telegram premium vizasiz",
    "telegram premium visa kartasiz",
    "premium olish",
    "telegram premium sotib olish 2026",
    "telegram premium avtomatik aktivatsiya",
  ],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot yoki Mini App’ni ishga tushiring." },
    { name: "Premium’ni tanlang", text: "Telegram Premium mahsulotini belgilang." },
    { name: "Muddatni tanlang", text: "3, 6 yoki 12 oy — narx so‘mda ko‘rinadi." },
    { name: "@username kiriting", text: "Kimga ekanini username bilan kiriting." },
    { name: "To‘lang", text: "UzCard, HUMO, Click, Payme, Uzum yoki Paynet orqali so‘mda to‘lang." },
    {
      name: "Faollashuvni tekshiring",
      text: "Profil rozetkasi, sozlamalardagi tugash sanasi va 2 GB dan katta fayl sinovi.",
    },
  ],
  locales: {
    uz: {
      title: "Telegram Premium sotib olishning eng oson usuli (2026)",
      excerpt:
        "Premium xaridining to‘liq qo‘llanmasi: username va login oqimlari farqi, tariflar, to‘lov qadamlari hamda faollashuvni tekshirishning uchta usuli.",
      metaTitle: "Telegram Premium sotib olishning eng oson usuli — 2026",
      metaDescription:
        "Telegram Premium’ni O‘zbekistonda eng oson olish: username oqimi, parol kerak emas, so‘mda to‘lov, to‘lov qadamlari va faollashuvni tekshirish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Telegram Premium olmoqchimisiz?",
      ctaBody: "Username bilan, parolsiz, 5 soniyada. Botda muddatni tanlang va so‘mda to‘lang.",
      faq: uzFaq,
    },
    ru: {
      title: "Самый простой способ купить Telegram Premium (2026)",
      excerpt:
        "Полное руководство по покупке Premium: разница потоков username и логина, тарифы, шаги оплаты и три способа проверить активацию.",
      metaTitle: "Самый простой способ купить Telegram Premium — 2026",
      metaDescription:
        "Как проще всего оформить Telegram Premium в Узбекистане: поток по username, без пароля, оплата в сумах, шаги платежа и проверка активации.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите Telegram Premium?",
      ctaBody: "По username, без пароля, за 5 секунд. Выберите срок в боте и оплатите в сумах.",
      faq: ruFaq,
    },
    en: {
      title: "The easiest way to buy Telegram Premium (2026)",
      excerpt:
        "The complete Premium buying guide: how the username and sign-in flows differ, the plans, the payment steps and three ways to verify activation.",
      metaTitle: "The easiest way to buy Telegram Premium — 2026",
      metaDescription:
        "The easiest way to get Telegram Premium in Uzbekistan: the username flow, no password, payment in so‘m, the payment steps and verifying activation.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Want Telegram Premium?",
      ctaBody: "By username, no password, in 5 seconds. Pick a term in the bot and pay in so‘m.",
      faq: enFaq,
    },
  },
};
