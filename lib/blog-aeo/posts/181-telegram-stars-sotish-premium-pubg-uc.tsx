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

const SLUG = "telegram-stars-sotish-premium-pubg-uc";

/**
 * Telegram Stars bilan StarsPaymee ichki balansini to'ldirish va o'sha
 * balansdan Premium yoki PUBG UC olish.
 *
 * FAKTLAR bot backend'idan tekshirilgan (`modules/balanceStars/index.js`):
 *   - kurs: `starRate()` → `BALANCE_STARS_RATE` env, serverda qo'yilmagan,
 *     ya'ni amaldagi qiymat 160 so'm;
 *   - chegaralar: `MIN_STARS = 15`, `MAX_STARS = 100000`;
 *   - tez tanlash tugmalari: `STAR_PRESETS = [15, 25, 50, 100, 250, 500, 1000]`,
 *     lekin oraliqdagi istalgan son ham qabul qilinadi (`normalizeStars`);
 *   - balansdan to'lash: `POST /api/balance/pay-order` — balans to'ldirishdan
 *     tashqari ISTALGAN buyurtmani qoplaydi, shu jumladan Premium va o'yin.
 *
 * ⚠️ 160 so'm — bugungi kurs, doimiy tarif EMAS. Matnda hamma joyda shunday
 * yozilgan: aniq summa har doim to'lov oynasidan tekshiriladi.
 */

/** Ikki xil balans chalkashmasligi uchun — qaysi biri nima uchun. */
function BalanceTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Balans", "Unda nima turadi", "Bu jarayondagi vazifasi"],
      rows: [
        ["Telegram Stars balansi", "Telegram hisobingizdagi yulduzlar", "Stars bilan to‘lov qilasiz"],
        ["StarsPaymee ichki balansi", "So‘mda hisoblangan mablag‘", "Premium yoki UC buyurtmasini to‘laydi"],
      ],
    },
    ru: {
      headers: ["Баланс", "Что на нём лежит", "Его роль в этом процессе"],
      rows: [
        ["Баланс Telegram Stars", "Звёзды на вашем аккаунте Telegram", "Вы платите звёздами"],
        ["Внутренний баланс StarsPaymee", "Сумма, посчитанная в сумах", "Оплачивает заказ Premium или UC"],
      ],
    },
    en: {
      headers: ["Balance", "What sits on it", "Its role in this flow"],
      rows: [
        ["Telegram Stars balance", "The stars on your Telegram account", "You pay with stars"],
        ["StarsPaymee internal balance", "An amount counted in som", "Pays for the Premium or UC order"],
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

/**
 * Hisoblash jadvali — botdagi tez tanlash tugmalari (`STAR_PRESETS`) va
 * amaldagi kurs bo'yicha. Qo'lda yozilgan son yo'q: hammasi 160 ga ko'paytma.
 */
function RateTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const RATE = 160;
  const presets = [15, 25, 50, 100, 250, 500, 1000];
  const fmt = (n: number) => n.toLocaleString("ru-RU").replace(/\u00a0/g, " ");
  const copy = {
    uz: { headers: ["Stars", "Hisoblash", "Balansga qo‘shiladi"], unit: "so‘m" },
    ru: { headers: ["Stars", "Расчёт", "Зачислится на баланс"], unit: "сум" },
    en: { headers: ["Stars", "Calculation", "Credited to the balance"], unit: "som" },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={presets.map((s) => [
        <strong key="s">{fmt(s)}</strong>,
        `${fmt(s)} × ${RATE}`,
        `${fmt(s * RATE)} ${copy.unit}`,
      ])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram hisobingizdagi Stars bilan <b>@StarsPaymee_bot</b> ichki balansini to‘ldirasiz, so‘ng
      o‘sha balansdan <b>Telegram Premium</b> yoki <b>PUBG Mobile UC</b> buyurtmasini to‘laysiz.
      Bugungi kurs — <b>1 Stars = 160 so‘m</b>, eng kami <b>15 Stars</b>. Ya‘ni 32 Stars balansga{" "}
      <b>5 120 so‘m</b> qo‘shadi. Kartaga pul yechish bu yerda ko‘zda tutilmagan.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Sahifada"
        items={[
          { href: "#nima", label: "Balansdagi Starsni sotish nimani anglatadi" },
          { href: "#toldirish", label: "Stars bilan balans qanday to‘ldiriladi" },
          { href: "#kurs", label: "1 Stars necha so‘m — hisoblash" },
          { href: "#premium", label: "Stars orqali Premium olish" },
          { href: "#uc", label: "Stars orqali PUBG UC olish" },
          { href: "#hisob", label: "Nechta Stars kerakligini hisoblash" },
          { href: "#muammo", label: "Stars yechildi, balans ko‘rinmayapti" },
        ]}
      />

      <KeyFacts label="Qisqa ma‘lumot">
        <li>
          Kurs: <b>1 Stars = 160 so‘m</b> (bugungi holat, o‘zgarishi mumkin).
        </li>
        <li>
          Eng kami <b>15 Stars</b>, eng ko‘pi <b>100 000 Stars</b>.
        </li>
        <li>Tez tanlash: 15, 25, 50, 100, 250, 500, 1000 — oraliqdagi boshqa son ham bo‘ladi.</li>
        <li>Balans balans to‘ldirishdan tashqari istalgan buyurtmani to‘laydi.</li>
      </KeyFacts>

      <h2 id="nima">Balansdagi Telegram Starsni sotish nimani anglatadi?</h2>
      <p>
        «Telegram Stars sotish» deganda odamlar turli narsani tushunadi. StarsPaymee’dagi bu
        imkoniyatda siz Telegram hisobingizdagi yulduzlar bilan <b>xizmat balansini to‘ldirasiz</b>.
        Yulduzlar amaldagi qabul qilish kursi bo‘yicha so‘mda hisoblanadi va hosil bo‘lgan mablag‘
        raqamli mahsulot xaridiga ishlatiladi.
      </p>
      <p>Jarayonda ikki xil balans qatnashadi va ularni chalkashtirmaslik kerak:</p>
      <BalanceTable locale="uz" />
      <p>
        Demak, bu — yulduzlaringizdan kerakli xarid uchun foydalanish usuli. Bank kartasiga pul
        chiqarish bu oqimga kirmaydi: quyidagi hamma narsa <b>ichki balansga</b> taalluqli.
      </p>

      <h2 id="toldirish">Stars bilan balans qanday to‘ldiriladi?</h2>
      <Steps>
        <Step title="Botni oching">
          starstg.uz saytidagi havoladan yoki to‘g‘ridan-to‘g‘ri <b>@StarsPaymee_bot</b> orqali kiring.
        </Step>
        <Step title="Balansni to‘ldirish bo‘limiga o‘ting">
          To‘lov usullari orasidan <b>Stars bilan to‘lash</b> variantini tanlang.
        </Step>
        <Step title="Miqdorni belgilang">
          Tayyor tugmalardan birini bosing yoki o‘z sonini kiriting. Ekranda kurs va balansga
          tushadigan summa ko‘rinadi.
        </Step>
        <Step title="Telegram to‘lov oynasini tekshiring">
          To‘lov oluvchi va yechiladigan yulduzlar soni buyurtmangizga mos bo‘lishi kerak.
        </Step>
        <Step title="To‘lovni tasdiqlang">
          Amal Telegram ichidagi to‘lov oynasida yakunlanadi.
        </Step>
        <Step title="Balansni tekshiring">
          Muvaffaqiyatli operatsiyadan keyin hisobingizga qo‘shilgan mablag‘ni ko‘rasiz.
        </Step>
      </Steps>
      <p>
        Bo‘lim nomlari interfeys yangilanishiga qarab farq qilishi mumkin. Tekshiradigan ikki
        ma‘lumot esa o‘zgarmaydi: <b>qancha Stars sarflanadi</b> va <b>balansga qancha qo‘shiladi</b>.
      </p>

      <h2 id="kurs">1 Stars necha so‘m? Hisoblash misoli</h2>
      <p>
        Balansga tushadigan summa ko‘rsatilgan qabul qilish kursiga bog‘liq. Hisob oddiy:
        <b> Stars soni × bir Stars kursi</b>. Quyidagi jadval bugungi kurs va botdagi tez tanlash
        tugmalari bo‘yicha:
      </p>
      <RateTable locale="uz" />
      <p>
        Jadvaldagi sonlar — tez tanlash tugmalari, yagona ruxsat etilgan miqdorlar emas. 15 dan
        100 000 gacha istalgan sonni kiritish mumkin. Masalan, <b>32 Stars</b> balansga{" "}
        <b>5 120 so‘m</b> qo‘shadi.
      </p>
      <Notice label="Kurs doimiy tarif emas">
        160 so‘m — shu maqola yozilgandagi qabul qilish kursi. U o‘zgarishi mumkin, shuning uchun
        yakuniy summani har doim to‘lov oynasidan tekshiring. Stars <i>sotib olish</i> narxi bilan
        mavjud Starsni balansga <i>qabul qilish</i> kursi bir xil bo‘lishi shart emas.
      </Notice>

      <h2 id="premium">Stars orqali Telegram Premium olish</h2>
      <p>
        Telegram Stars bilan Premium olish ikki bosqichda bo‘ladi: avval balansni to‘ldirasiz,
        keyin Premium buyurtmasini shu mablag‘dan to‘laysiz.
      </p>
      <Steps>
        <Step title="Balansni to‘ldiring">Stars orqali kerakli mablag‘ni kiriting.</Step>
        <Step title="Premium bo‘limini oching">Mavjud obuna muddatlaridan keraklisini tanlang.</Step>
        <Step title="Username’ni kiriting">
          Premium kimga olinayotgan bo‘lsa, o‘sha akkauntning @username’ini yozing va tekshiring.
        </Step>
        <Step title="Narxni solishtiring">Paket narxi ichki balansingizga yetadimi — ko‘ring.</Step>
        <Step title="Balansdan to‘lang">Tasdiqlang va buyurtma holatini kuzating.</Step>
      </Steps>
      <p>
        Mablag‘ yetmasa, yetishmayotgan qismini qo‘shimcha to‘ldirasiz. Premium boshqa akkauntga
        olinayotgan bo‘lsa, username’ni alohida tekshiring: buyurtma aynan yozilgan akkauntga ketadi.
      </p>
      <p>
        <b>Nechta Starsga Premium olish mumkin?</b> Javob tanlangan obuna narxiga, mavjud balansga va
        joriy kursga bog‘liq. Qulayi: avval paketni tanlab narxini ko‘ring, keyin kerakli miqdorni
        to‘ldiring. Narxlarning to‘liq jadvali{" "}
        <Link href="/premium">Telegram Premium sahifasida</Link> turadi.
      </p>

      <InlineCta text="Balansingizni Stars bilan to‘ldirib ko‘ring — kurs va summa to‘lovdan oldin ko‘rinadi." />

      <h2 id="uc">Stars orqali PUBG UC olish</h2>
      <p>
        Starsni UC ga «almashtirish» ham xuddi shu yo‘l bilan: Stars bilan balans to‘ldirasiz va o‘sha
        mablag‘ga PUBG Mobile UC buyurtma qilasiz.
      </p>
      <Steps>
        <Step title="Balansni to‘ldiring">Stars orqali ichki balansingizni to‘ldiring.</Step>
        <Step title="PUBG Mobile’ni tanlang">O‘yinlar bo‘limidan toping.</Step>
        <Step title="Player ID kiriting">O‘yin hisobingizdagi raqamni yozing.</Step>
        <Step title="UC paketini belgilang">Kerakli hajmni tanlang.</Step>
        <Step title="Tekshiring va to‘lang">
          Player ID, paket va yakuniy narxni ko‘rib, balansdan to‘lovni yakunlang.
        </Step>
      </Steps>
      <InfoGrid>
        <InfoCard title="Player ID qayerdan olinadi" emoji="✅">
          O‘yindagi profilingizda, ismingiz ostida turadi. Raqamni tushirib qoldirmang — UC aynan
          kiritilgan hisobga boradi.
        </InfoCard>
        <InfoCard title="Parol kerak emas" emoji="✅">
          Bu jarayon uchun o‘yin akkauntingiz parolini hech kimga yuborish shart emas.
        </InfoCard>
      </InfoGrid>
      <p>
        <b>32 Starsga qancha UC olsa bo‘ladi?</b> 32 Stars balansga 5 120 so‘m qo‘shadi. Bu summa
        qaysi UC paketiga yetishini amaldagi narxlardan ko‘rasiz — Stars sonining o‘zi doimiy UC
        miqdorini anglatmaydi. Player ID va buyurtma bosqichlari haqida batafsil:{" "}
        <Link href="/blog/pubg-mobile-uc-sotib-olish">PUBG Mobile UC sotib olish qo‘llanmasi</Link>.
      </p>

      <h2 id="hisob">Premium yoki UC uchun nechta Stars kerak?</h2>
      <p>
        Avval mahsulot narxini va ichki balansingizni ko‘ring, keyin yetishmayotgan summani bir Stars
        kursiga bo‘ling:
      </p>
      <p>
        <b>Kerakli Stars ≈ (mahsulot narxi − mavjud balans) ÷ kurs</b>
      </p>
      <p>
        Masalan, xaridga 40 000 so‘m yetishmasa va bir Stars 160 so‘mdan hisoblansa, 250 Stars kerak
        bo‘ladi. Natija kasr chiqsa, mablag‘ yetishi uchun keyingi butun songacha yaxlitlanadi. Shu
        hisobni to‘lovdan oldin qilish ortiqcha to‘ldirishning oldini oladi.
      </p>

      <h2 id="muammo">Stars yechildi, lekin balans ko‘rinmayapti</h2>
      <p>
        Avval Telegramdagi to‘lov holatini tekshiring. To‘lov o‘tgan bo‘lsa, botni qayta ochib balans
        va operatsiyalar tarixini ko‘ring. Muammo davom etsa, qo‘llab-quvvatlashga <b>to‘lov vaqti</b>,{" "}
        <b>Stars miqdori</b> va <b>to‘lov identifikatorini</b> yuboring; skrinshot bo‘lsa, uni ham.
      </p>
      <Notice label="Shoshilmang">
        Avvalgi operatsiya holati aniqlanmaguncha aynan shu to‘lovni qayta bajarmang. Premium yoki UC
        buyurtmasi bo‘yicha murojaatda esa buyurtma raqami va qabul qiluvchi username yoki Player ID
        kerak bo‘ladi.
      </Notice>

      <Sources
        label="Tegishli sahifalar"
        items={[
          { href: "/uz/premium", label: "Telegram Premium narxlari", note: "barcha muddatlar" },
          { href: "/uz/stars", label: "Telegram Stars narxlari", note: "paketlar va to‘lov usullari" },
          {
            href: "/uz/blog/pubg-mobile-uc-sotib-olish",
            label: "PUBG Mobile UC sotib olish",
            note: "Player ID va buyurtma bosqichlari",
          },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Telegram balansimdagi Starsni sotsam bo‘ladimi?",
    answer:
      "StarsPaymee’da mavjud Stars bilan ichki balansni to‘ldirib, hosil bo‘lgan mablag‘ni xizmatdagi xaridlarga ishlatishingiz mumkin. To‘lovdan oldin amaldagi kursni tekshiring.",
  },
  {
    question: "Stars orqali Premium olsa bo‘ladimi?",
    answer:
      "Ha. Stars bilan StarsPaymee balansini to‘ldirasiz, keyin kerakli Premium paketini tanlab, ichki balansdan to‘laysiz. Mablag‘ paket narxiga yetishi kerak.",
  },
  {
    question: "Telegram Stars orqali PUBG UC olsa bo‘ladimi?",
    answer:
      "Ha. Stars bilan to‘ldirilgan balansdan PUBG Mobile UC xaridi uchun foydalanasiz. Buyurtma uchun to‘g‘ri Player ID va kerakli UC paketini ko‘rsatish zarur.",
  },
  {
    question: "32 Stars qancha so‘m bo‘ladi?",
    answer:
      "Bir Stars 160 so‘mdan qabul qilinganda 32 Stars 5 120 so‘m bo‘ladi. Kurs o‘zgarsa, hisoblangan summa ham o‘zgaradi.",
  },
  {
    question: "Eng kam nechta Stars bilan balans to‘ldirish mumkin?",
    answer:
      "Eng kami 15 Stars, eng ko‘pi 100 000 Stars. Tez tanlash tugmalari 15, 25, 50, 100, 250, 500 va 1000, lekin oraliqdagi istalgan sonni kiritish mumkin.",
  },
  {
    question: "Balansdagi pulni bank kartasiga yechib olsa bo‘ladimi?",
    answer:
      "Bu maqolada Stars orqali ichki balansni to‘ldirish va undan mahsulot xaridida foydalanish tushuntirilgan. Kartaga mablag‘ chiqarish imkoniyatini xizmatdan alohida aniqlashtiring.",
  },
  {
    question: "Premium yoki UC uchun qancha kutish kerak?",
    answer:
      "Buyurtmaning amaldagi holatiga qarang. Balans to‘ldirilgani haqidagi xabar mahsulot buyurtmasi yakunlanganini anglatmaydi — xarid alohida tasdiqlanadi.",
  },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Звёздами с вашего аккаунта Telegram вы пополняете внутренний баланс <b>@StarsPaymee_bot</b>, а
      затем оплачиваете с него заказ <b>Telegram Premium</b> или <b>PUBG Mobile UC</b>. Текущий курс —{" "}
      <b>1 Stars = 160 сум</b>, минимум <b>15 Stars</b>. То есть 32 Stars дают <b>5 120 сум</b>.
      Вывод денег на карту в этот процесс не входит.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="На странице"
        items={[
          { href: "#nima", label: "Что значит продать Stars с баланса" },
          { href: "#toldirish", label: "Как пополнить баланс звёздами" },
          { href: "#kurs", label: "Сколько сум за 1 Stars" },
          { href: "#premium", label: "Premium через Stars" },
          { href: "#uc", label: "PUBG UC через Stars" },
          { href: "#hisob", label: "Сколько нужно звёзд" },
          { href: "#muammo", label: "Звёзды списались, баланса нет" },
        ]}
      />

      <KeyFacts label="Коротко">
        <li>
          Курс: <b>1 Stars = 160 сум</b> (на сегодня, может измениться).
        </li>
        <li>
          Минимум <b>15 Stars</b>, максимум <b>100 000 Stars</b>.
        </li>
        <li>Быстрый выбор: 15, 25, 50, 100, 250, 500, 1000 — можно и любое другое число.</li>
        <li>С баланса оплачивается любой заказ, кроме самого пополнения баланса.</li>
      </KeyFacts>

      <h2 id="nima">Что значит «продать Stars с баланса»?</h2>
      <p>
        Под «продажей Telegram Stars» люди понимают разное. В StarsPaymee это значит, что звёздами с
        вашего аккаунта Telegram вы <b>пополняете баланс сервиса</b>. Звёзды пересчитываются в сумы по
        действующему курсу приёма, а полученная сумма идёт на покупку цифровых товаров.
      </p>
      <p>В процессе участвуют два разных баланса, и их не стоит путать:</p>
      <BalanceTable locale="ru" />
      <p>
        То есть это способ использовать свои звёзды для нужной покупки. Вывод на банковскую карту сюда
        не входит: всё описанное ниже касается <b>внутреннего баланса</b>.
      </p>

      <h2 id="toldirish">Как пополнить баланс звёздами</h2>
      <Steps>
        <Step title="Откройте бота">
          По ссылке с сайта starstg.uz или напрямую через <b>@StarsPaymee_bot</b>.
        </Step>
        <Step title="Перейдите в пополнение баланса">
          Среди способов оплаты выберите <b>оплату звёздами</b>.
        </Step>
        <Step title="Укажите количество">
          Нажмите готовую кнопку или введите своё число. На экране видны курс и сумма зачисления.
        </Step>
        <Step title="Проверьте окно оплаты Telegram">
          Получатель платежа и число списываемых звёзд должны совпадать с вашим заказом.
        </Step>
        <Step title="Подтвердите оплату">Операция завершается в окне оплаты внутри Telegram.</Step>
        <Step title="Проверьте баланс">После успешной операции вы увидите зачисленную сумму.</Step>
      </Steps>
      <p>
        Названия разделов могут отличаться после обновлений интерфейса. Но проверять всегда нужно две
        вещи: <b>сколько звёзд спишется</b> и <b>сколько зачислится на баланс</b>.
      </p>

      <h2 id="kurs">Сколько сум за 1 Stars: пример расчёта</h2>
      <p>
        Сумма зачисления зависит от указанного курса приёма. Формула простая:{" "}
        <b>количество Stars × курс за одну звезду</b>. Таблица ниже — по текущему курсу и кнопкам
        быстрого выбора в боте:
      </p>
      <RateTable locale="ru" />
      <p>
        Числа в таблице — это кнопки быстрого выбора, а не единственные допустимые суммы. Ввести можно
        любое число от 15 до 100 000. Например, <b>32 Stars</b> дают <b>5 120 сум</b>.
      </p>
      <Notice label="Курс — не постоянный тариф">
        160 сум — курс приёма на момент публикации. Он может измениться, поэтому итоговую сумму всегда
        сверяйте в окне оплаты. Цена <i>покупки</i> звёзд и курс <i>приёма</i> имеющихся звёзд не
        обязаны совпадать.
      </Notice>

      <h2 id="premium">Как получить Telegram Premium через Stars</h2>
      <p>
        Это два шага: сначала пополнение баланса, затем оплата заказа Premium с этих денег.
      </p>
      <Steps>
        <Step title="Пополните баланс">Внесите нужную сумму через Stars.</Step>
        <Step title="Откройте раздел Premium">Выберите подходящий срок подписки.</Step>
        <Step title="Укажите username">Впишите и проверьте @username того, кому оформляется Premium.</Step>
        <Step title="Сравните цену">Проверьте, хватает ли внутреннего баланса на пакет.</Step>
        <Step title="Оплатите с баланса">Подтвердите и следите за статусом заказа.</Step>
      </Steps>
      <p>
        Если средств не хватает, доложите недостающую часть. Когда Premium оформляется на другой
        аккаунт, отдельно проверьте username: заказ уйдёт именно на указанный аккаунт.
      </p>
      <p>
        <b>На сколько звёзд можно взять Premium?</b> Ответ зависит от цены выбранной подписки,
        текущего баланса и курса. Удобнее сначала выбрать пакет и посмотреть цену, а потом пополнить
        баланс. Полная таблица цен — на{" "}
        <Link href="/premium">странице Telegram Premium</Link>.
      </p>

      <InlineCta text="Попробуйте пополнить баланс звёздами — курс и сумма видны до оплаты." />

      <h2 id="uc">Как получить PUBG UC через Stars</h2>
      <p>
        «Обменять» Stars на UC можно тем же путём: пополняете баланс звёздами и заказываете PUBG
        Mobile UC с этих денег.
      </p>
      <Steps>
        <Step title="Пополните баланс">Внесите сумму через Stars.</Step>
        <Step title="Выберите PUBG Mobile">Найдите игру в разделе игр.</Step>
        <Step title="Введите Player ID">Укажите номер вашего игрового аккаунта.</Step>
        <Step title="Выберите пакет UC">Отметьте нужный объём.</Step>
        <Step title="Проверьте и оплатите">
          Сверьте Player ID, пакет и итоговую цену, затем оплатите с баланса.
        </Step>
      </Steps>
      <InfoGrid>
        <InfoCard title="Где взять Player ID" emoji="✅">
          В профиле внутри игры, под вашим именем. Не пропустите ни одной цифры — UC уйдёт именно на
          указанный аккаунт.
        </InfoCard>
        <InfoCard title="Пароль не нужен" emoji="✅">
          Для этой операции пароль от игрового аккаунта никому отправлять не требуется.
        </InfoCard>
      </InfoGrid>
      <p>
        <b>Сколько UC дадут 32 Stars?</b> 32 Stars зачисляют на баланс 5 120 сум. На какой пакет UC
        хватит этой суммы, видно в действующих ценах — само число звёзд не означает постоянного объёма
        UC. Подробнее о Player ID и шагах заказа:{" "}
        <Link href="/blog/pubg-mobile-uc-sotib-olish">руководство по покупке PUBG Mobile UC</Link>.
      </p>

      <h2 id="hisob">Сколько звёзд нужно на Premium или UC</h2>
      <p>
        Сначала посмотрите цену товара и свой баланс, затем разделите недостающую сумму на курс одной
        звезды:
      </p>
      <p>
        <b>Нужно Stars ≈ (цена товара − текущий баланс) ÷ курс</b>
      </p>
      <p>
        Например, если до покупки не хватает 40 000 сум, а одна звезда считается по 160 сум,
        понадобится 250 Stars. Если получается дробь, округляйте вверх до целого. Такой расчёт до
        оплаты избавляет от лишнего пополнения.
      </p>

      <h2 id="muammo">Звёзды списались, а баланса нет</h2>
      <p>
        Сначала проверьте статус платежа в Telegram. Если оплата прошла, откройте бота заново и
        посмотрите баланс и историю операций. Если проблема осталась, отправьте в поддержку{" "}
        <b>время платежа</b>, <b>количество звёзд</b> и <b>идентификатор платежа</b>; если есть
        скриншот подтверждения — приложите и его.
      </p>
      <Notice label="Не торопитесь">
        Не повторяйте тот же платёж, пока не выяснен статус предыдущей операции. По заказу Premium или
        UC понадобятся номер заказа и username получателя либо Player ID.
      </Notice>

      <Sources
        label="Связанные страницы"
        items={[
          { href: "/ru/premium", label: "Цены на Telegram Premium", note: "все сроки" },
          { href: "/ru/stars", label: "Цены на Telegram Stars", note: "пакеты и способы оплаты" },
          {
            href: "/ru/blog/pubg-mobile-uc-sotib-olish",
            label: "Покупка PUBG Mobile UC",
            note: "Player ID и шаги заказа",
          },
        ]}
      />
    </>
  );
}

const ruFaq = [
  {
    question: "Можно ли продать звёзды с баланса Telegram?",
    answer:
      "В StarsPaymee имеющимися звёздами можно пополнить внутренний баланс и потратить полученную сумму на покупки в сервисе. Перед оплатой сверьте действующий курс.",
  },
  {
    question: "Можно ли получить Premium через Stars?",
    answer:
      "Да. Звёздами пополняете баланс StarsPaymee, затем выбираете нужный пакет Premium и оплачиваете его с внутреннего баланса. Суммы должно хватать на пакет.",
  },
  {
    question: "Можно ли получить PUBG UC через Telegram Stars?",
    answer:
      "Да. С баланса, пополненного звёздами, оплачивается покупка PUBG Mobile UC. Для заказа нужно указать правильный Player ID и нужный пакет UC.",
  },
  {
    question: "Сколько сум составляют 32 Stars?",
    answer:
      "При курсе приёма 160 сум за звезду 32 Stars дают 5 120 сум. Если курс изменится, изменится и расчётная сумма.",
  },
  {
    question: "Какой минимум звёзд для пополнения баланса?",
    answer:
      "Минимум 15 Stars, максимум 100 000 Stars. Кнопки быстрого выбора — 15, 25, 50, 100, 250, 500 и 1000, но ввести можно любое число из этого диапазона.",
  },
  {
    question: "Можно ли вывести деньги с баланса на карту?",
    answer:
      "В этой статье описано пополнение внутреннего баланса звёздами и покупка товаров с него. Возможность вывода на карту уточняйте в сервисе отдельно.",
  },
  {
    question: "Сколько ждать Premium или UC?",
    answer:
      "Смотрите текущий статус заказа. Сообщение о зачислении на баланс не означает, что заказ товара выполнен — покупка подтверждается отдельно.",
  },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      You top up the <b>@StarsPaymee_bot</b> internal balance with the stars on your Telegram account,
      then pay for a <b>Telegram Premium</b> or <b>PUBG Mobile UC</b> order from that balance. The
      current rate is <b>1 Stars = 160 som</b>, with a <b>15 Stars</b> minimum, so 32 Stars credit{" "}
      <b>5,120 som</b>. Cashing out to a bank card is not part of this flow.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="On this page"
        items={[
          { href: "#nima", label: "What selling stars from your balance means" },
          { href: "#toldirish", label: "Topping the balance up with stars" },
          { href: "#kurs", label: "What one star is worth" },
          { href: "#premium", label: "Premium through stars" },
          { href: "#uc", label: "PUBG UC through stars" },
          { href: "#hisob", label: "How many stars you need" },
          { href: "#muammo", label: "Stars charged, balance missing" },
        ]}
      />

      <KeyFacts label="In short">
        <li>
          Rate: <b>1 Stars = 160 som</b> (today, and it can change).
        </li>
        <li>
          Minimum <b>15 Stars</b>, maximum <b>100,000 Stars</b>.
        </li>
        <li>Quick picks: 15, 25, 50, 100, 250, 500, 1000, and any other figure in between.</li>
        <li>The balance pays for any order except a balance top-up itself.</li>
      </KeyFacts>

      <h2 id="nima">What does selling stars from your balance mean?</h2>
      <p>
        People mean different things by «selling Telegram Stars». At StarsPaymee it means you use the
        stars on your Telegram account to <b>top up the service balance</b>. The stars are converted
        into som at the current acceptance rate, and that money buys digital goods.
      </p>
      <p>Two different balances take part, and they are worth keeping apart:</p>
      <BalanceTable locale="en" />
      <p>
        So this is a way to spend the stars you already hold. Withdrawing to a bank card is not part of
        it: everything below concerns the <b>internal balance</b>.
      </p>

      <h2 id="toldirish">How to top the balance up with stars</h2>
      <Steps>
        <Step title="Open the bot">
          Through the link on starstg.uz or straight at <b>@StarsPaymee_bot</b>.
        </Step>
        <Step title="Go to the balance top-up">
          Among the payment methods choose <b>paying with stars</b>.
        </Step>
        <Step title="Set the amount">
          Tap a ready button or type your own figure. The screen shows the rate and what gets credited.
        </Step>
        <Step title="Check the Telegram payment sheet">
          The payee and the number of stars must match your order.
        </Step>
        <Step title="Confirm the payment">The action finishes inside Telegram’s payment sheet.</Step>
        <Step title="Check the balance">After a successful payment you see the credited amount.</Step>
      </Steps>
      <p>
        Section names may differ after interface updates. The two things to check never change:{" "}
        <b>how many stars are spent</b> and <b>how much lands on the balance</b>.
      </p>

      <h2 id="kurs">What one star is worth: a worked example</h2>
      <p>
        The credited amount follows the acceptance rate on screen. The maths is simple:{" "}
        <b>number of stars × the rate for one star</b>. The table below uses today’s rate and the
        quick-pick buttons in the bot:
      </p>
      <RateTable locale="en" />
      <p>
        The figures are quick-pick buttons, not the only amounts allowed. Any number from 15 to 100,000
        works. For instance, <b>32 Stars</b> credit <b>5,120 som</b>.
      </p>
      <Notice label="The rate is not a fixed tariff">
        160 som is the acceptance rate at the time of writing. It can change, so always check the final
        figure in the payment sheet. The price of <i>buying</i> stars and the rate for{" "}
        <i>accepting</i> stars you already hold need not be the same.
      </Notice>

      <h2 id="premium">Getting Telegram Premium through stars</h2>
      <p>Two steps: top the balance up first, then pay for the Premium order from that money.</p>
      <Steps>
        <Step title="Top up the balance">Put in what you need through stars.</Step>
        <Step title="Open the Premium section">Pick the subscription length you want.</Step>
        <Step title="Enter the username">Type and check the @username Premium is being bought for.</Step>
        <Step title="Compare the price">See whether your balance covers the plan.</Step>
        <Step title="Pay from the balance">Confirm and watch the order status.</Step>
      </Steps>
      <p>
        If the money falls short, add the missing part. When Premium goes to someone else’s account,
        check the username separately: the order goes exactly where you typed it.
      </p>
      <p>
        <b>How many stars buy Premium?</b> It depends on the plan’s price, your balance and the current
        rate. It is easier to pick the plan, read its price, and only then top up. The full price table
        is on the <Link href="/premium">Telegram Premium page</Link>.
      </p>

      <InlineCta text="Try topping the balance up with stars — the rate and the amount are shown before you pay." />

      <h2 id="uc">Getting PUBG UC through stars</h2>
      <p>
        «Swapping» stars for UC works the same way: top the balance up with stars and order PUBG Mobile
        UC from that money.
      </p>
      <Steps>
        <Step title="Top up the balance">Put money in through stars.</Step>
        <Step title="Pick PUBG Mobile">Find it in the games section.</Step>
        <Step title="Enter the Player ID">Type the number from your game account.</Step>
        <Step title="Choose the UC pack">Mark the size you want.</Step>
        <Step title="Check and pay">
          Verify the Player ID, the pack and the final price, then pay from the balance.
        </Step>
      </Steps>
      <InfoGrid>
        <InfoCard title="Where the Player ID is" emoji="✅">
          In your in-game profile, under your name. Do not drop a digit — the UC goes to exactly the
          account you typed.
        </InfoCard>
        <InfoCard title="No password needed" emoji="✅">
          You never have to send anyone the password to your game account for this.
        </InfoCard>
      </InfoGrid>
      <p>
        <b>How much UC do 32 Stars buy?</b> 32 Stars credit 5,120 som. Which UC pack that covers is
        shown in the current prices — the star count itself does not map to a fixed amount of UC. More
        on the Player ID and the ordering steps:{" "}
        <Link href="/blog/pubg-mobile-uc-sotib-olish">the PUBG Mobile UC guide</Link>.
      </p>

      <h2 id="hisob">How many stars you need for Premium or UC</h2>
      <p>
        Read the product’s price and your balance first, then divide what is missing by the rate for
        one star:
      </p>
      <p>
        <b>Stars needed ≈ (product price − current balance) ÷ rate</b>
      </p>
      <p>
        If a purchase is 40,000 som short and a star counts as 160 som, that is 250 Stars. When the
        result is fractional, round up so the money covers it. Doing this before paying saves you from
        topping up more than you need.
      </p>

      <h2 id="muammo">Stars were charged but the balance is missing</h2>
      <p>
        Check the payment status in Telegram first. If it went through, reopen the bot and look at the
        balance and the operation history. If the problem persists, send support the{" "}
        <b>payment time</b>, the <b>number of stars</b> and the <b>payment identifier</b>, plus a
        confirmation screenshot if you have one.
      </p>
      <Notice label="Do not rush">
        Do not repeat the same payment until the status of the previous one is clear. For a Premium or
        UC order, support also needs the order number and the recipient’s username or Player ID.
      </Notice>

      <Sources
        label="Related pages"
        items={[
          { href: "/en/premium", label: "Telegram Premium prices", note: "every plan" },
          { href: "/en/stars", label: "Telegram Stars prices", note: "packs and payment methods" },
          {
            href: "/en/blog/pubg-mobile-uc-sotib-olish",
            label: "Buying PUBG Mobile UC",
            note: "Player ID and the ordering steps",
          },
        ]}
      />
    </>
  );
}

const enFaq = [
  {
    question: "Can I sell the stars on my Telegram balance?",
    answer:
      "At StarsPaymee you can top up the internal balance with the stars you hold and spend the resulting amount on purchases in the service. Check the current rate before paying.",
  },
  {
    question: "Can I get Premium through stars?",
    answer:
      "Yes. You top up the StarsPaymee balance with stars, then pick the Premium plan you want and pay for it from the internal balance. The money has to cover the plan.",
  },
  {
    question: "Can I get PUBG UC through Telegram Stars?",
    answer:
      "Yes. A balance topped up with stars pays for a PUBG Mobile UC purchase. The order needs the correct Player ID and the UC pack you want.",
  },
  {
    question: "How much is 32 Stars in som?",
    answer:
      "At an acceptance rate of 160 som per star, 32 Stars come to 5,120 som. If the rate changes, so does the calculated amount.",
  },
  {
    question: "What is the minimum number of stars for a top-up?",
    answer:
      "The minimum is 15 Stars and the maximum is 100,000. The quick-pick buttons are 15, 25, 50, 100, 250, 500 and 1000, but any figure in that range can be typed.",
  },
  {
    question: "Can I withdraw the balance to a bank card?",
    answer:
      "This article covers topping up the internal balance with stars and buying products with it. Ask the service separately about withdrawing to a card.",
  },
  {
    question: "How long do Premium or UC take?",
    answer:
      "Watch the order's current status. A message about the balance being credited does not mean the product order is done — the purchase is confirmed separately.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  keywords: [
    "telegram stars sotish",
    "balansdagi starsni sotish",
    "stars bilan balans to‘ldirish",
    "stars orqali premium olish",
    "stars orqali pubg uc olish",
    "starsni uc ga almashtirish",
    "telegram yulduzlarini sotish",
    "продать звёзды телеграм",
    "премиум через звёзды телеграм",
    "pubg uc за звёзды telegram",
    "sell telegram stars",
  ],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot da balansni to‘ldirish bo‘limiga o‘ting." },
    { name: "Stars bilan to‘lashni tanlang", text: "To‘lov usullari orasidan Stars variantini belgilang." },
    { name: "Miqdorni kiriting", text: "15 dan 100 000 gacha son; ekranda kurs va summa ko‘rinadi." },
    { name: "To‘lovni tasdiqlang", text: "Telegram to‘lov oynasida yulduzlar sonini tekshirib tasdiqlang." },
    { name: "Mahsulotni buyurtma qiling", text: "Premium yoki PUBG UC ni tanlab, ichki balansdan to‘lang." },
  ],
  locales: {
    uz: {
      title: "Telegram Stars sotish: balansdagi Stars orqali Premium va PUBG UC olish",
      excerpt:
        "Telegram hisobingizda yulduzlar bormi? Ular bilan StarsPaymee balansini to‘ldirib, Telegram Premium yoki PUBG Mobile UC olish tartibi, kurs hisobi va savol-javoblar.",
      metaTitle: "Telegram Stars sotish: Premium va PUBG UC",
      metaDescription:
        "Balansdagi Telegram Stars bilan StarsPaymee hisobini to‘ldiring. Stars orqali Premium va PUBG UC olish tartibi, kurs hisobi va savol-javoblar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Starslaringizni kerakli xaridga ishlating",
      ctaBody:
        "Avval Premium yoki PUBG UC paketining narxini ko‘ring, keyin joriy kurs bo‘yicha balansni to‘ldiring.",
      faq: uzFaq,
    },
    ru: {
      title: "Продать Telegram Stars: Premium и PUBG UC за звёзды с баланса",
      excerpt:
        "На аккаунте Telegram лежат звёзды? Разберитесь, как пополнить ими баланс StarsPaymee и оплатить Telegram Premium или PUBG Mobile UC, как считается курс и что делать при сбое.",
      metaTitle: "Продать звёзды Telegram: Premium и PUBG UC",
      metaDescription:
        "Пополните баланс StarsPaymee звёздами с аккаунта Telegram. Как получить Premium и PUBG UC через Stars, расчёт курса и ответы на вопросы.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Потратьте звёзды на нужную покупку",
      ctaBody:
        "Сначала посмотрите цену пакета Premium или PUBG UC, затем пополните баланс по текущему курсу.",
      faq: ruFaq,
    },
    en: {
      title: "Selling Telegram Stars: Premium and PUBG UC from your balance",
      excerpt:
        "Stars sitting on your Telegram account? Here is how to top up the StarsPaymee balance with them and pay for Telegram Premium or PUBG Mobile UC, how the rate is counted, and what to do if it fails.",
      metaTitle: "Sell Telegram Stars: Premium and PUBG UC",
      metaDescription:
        "Top up your StarsPaymee balance with the Telegram Stars you hold. How to get Premium and PUBG UC through stars, the rate maths, and answers to common questions.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Put your stars towards a purchase",
      ctaBody:
        "Read the price of the Premium or PUBG UC pack first, then top the balance up at the current rate.",
      faq: enFaq,
    },
  },
};
