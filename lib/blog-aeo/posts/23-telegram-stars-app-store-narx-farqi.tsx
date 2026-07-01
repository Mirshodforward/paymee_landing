import { Link } from "@/i18n/navigation";
import { Toc, CompareTable, InlineCta, KeyFacts, Yes, No, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-app-store-narx-farqi";

function UzAnswer() {
  return (
    <p>
      Telegram Stars’ni iPhone (App Store) orqali sotib olganda narx odatda qimmatroq, chunki Apple har bir ilova ichidagi
      xariddan <strong>~30% komissiya</strong> oladi va Telegram bu farqni narxga qo‘shadi. Android (Google Play) ham
      shunga o‘xshash. <strong>Fragment (TON)</strong> va <strong>mahalliy botlar</strong> bu komissiyani chetlab o‘tadi,
      shuning uchun Stars ularda arzonroq bo‘lishi mumkin. O‘zbekistonda eng qulayi — so‘mda, mahalliy karta bilan bot.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nega", label: "Nega App Store’da qimmatroq" },
          { href: "#taqqos", label: "Platformalar bo‘yicha taqqoslash" },
          { href: "#apple-soligi", label: "«Apple solig‘i» qanday ishlaydi" },
          { href: "#arzon", label: "Eng arzon yo‘l qaysi" },
          { href: "#ozbekiston", label: "O‘zbekiston uchun xulosa" },
        ]}
      />

      <h2 id="nega">Nega Telegram Stars App Store’da qimmatroq?</h2>
      <p>
        Sabab bitta — <strong>platforma komissiyasi</strong>. iPhone’dagi Telegram ilovasi ichida Stars sotib olsangiz,
        to‘lov Apple App Store tizimidan o‘tadi. Apple har bir raqamli xariddan taxminan 30% oladi. Telegram bu xarajatni
        qoplash uchun App Store narxini boshqa yo‘llarga nisbatan yuqoriroq belgilaydi. Google Play’da ham shunga o‘xshash
        holat.
      </p>

      <CompareTable
        headers={["Yo‘l", "Komissiya", "O‘zbekiston kartasi", "Odatiy narx darajasi"]}
        rows={[
          ["iPhone / App Store", "~30% (Apple)", <No key="1" />, "Eng yuqori"],
          ["Android / Google Play", "~komissiya bor", <No key="2" />, "Yuqori"],
          ["Fragment (TON)", "Minimal", <No key="3" />, "Past, lekin kripto kerak"],
          [<>Mahalliy bot / Mini App</>, "Yo‘q (Apple/Google)", <Yes key="4" />, "So‘mda, qulay"],
        ]}
      />
      <p>
        Ko‘rib turganingizdek, narx farqi Stars’ning «qiymati»da emas — u har uch platformada bir xil yulduz — balki
        <strong> to‘lov kanalidagi komissiya</strong>da. Platformalararo to‘liq narx tahlilini{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">«Stars narxlari taqqoslash»</Link>{" "}
        maqolasida ko‘ring.
      </p>

      <InlineCta text="App Store komissiyasiz — so‘mda, botda 10 soniyada." />

      <h2 id="apple-soligi">«Apple solig‘i» qanday ishlaydi?</h2>
      <p>
        «Apple tax» deb ataladigan bu qoida — App Store’dagi barcha raqamli xaridlarga tegishli. Ishlab chiquvchi (bu
        holda Telegram) Apple to‘lov tizimidan foydalanishga majbur va daromadning bir qismini Apple’ga beradi. Shu
        sabab bir xil 100 yulduz iPhone’da Fragment yoki mahalliy botga qaraganda ko‘proq turishi mumkin. Bu — Telegram’ning
        emas, platformaning narx siyosati.
      </p>

      <KeyFacts label="Muhim faktlar">
        <li>
          <b>~30%</b> — App Store ichidagi xaridlardan olinadigan taxminiy komissiya
        </li>
        <li>
          <b>Bir xil yulduz</b> — barcha platformada bir xil funksiya, faqat narx farqi
        </li>
        <li>
          <b>Fragment/bot</b> — App Store komissiyasidan xoli kanallar
        </li>
      </KeyFacts>

      <h2 id="arzon">Eng arzon yo‘l qaysi?</h2>
      <p>
        Sof narx bo‘yicha Fragment (TON) odatda arzonroq, lekin u kripto hamyon va TON talab qiladi — O‘zbekiston kartasi
        ishlamaydi. Shu sabab mahalliy foydalanuvchi uchun amaliy jihatdan eng qulayi — so‘mda, UzCard/HUMO/Click/Payme
        bilan ishlaydigan mahalliy bot. Qayerdan sotib olishning to‘liq qo‘llanmasi —{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Stars qayerdan sotib olish»</Link>.
      </p>

      <h2 id="ozbekiston">O‘zbekiston uchun xulosa</h2>
      <p>
        Agar iPhone’dan to‘g‘ridan-to‘g‘ri olsangiz, xorijiy kartaga qo‘shimcha Apple komissiyasini ham to‘laysiz.
        Mahalliy bot orqali esa so‘mda, komissiyasiz va tezroq olasiz. Eng yaxshi botni tanlash mezonlarini{" "}
        <Link href="/blog/telegram-stars-eng-yaxshi-botlar-2026">«Eng yaxshi botlar»</Link> maqolasida ko‘rasiz.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "texnik hujjat" },
          { href: "https://fragment.com", label: "fragment.com", note: "TON asosidagi narx" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      При покупке Telegram Stars через iPhone (App Store) цена обычно выше, потому что Apple берёт{" "}
      <strong>~30% комиссии</strong> с каждой внутриигровой покупки, и Telegram закладывает это в цену. В Android (Google
      Play) похоже. <strong>Fragment (TON)</strong> и <strong>локальные боты</strong> обходят эту комиссию, поэтому Stars
      там могут быть дешевле. В Узбекистане удобнее всего — в сумах локальной картой через бота.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nega", label: "Почему в App Store дороже" },
          { href: "#taqqos", label: "Сравнение по платформам" },
          { href: "#apple-soligi", label: "Как работает «налог Apple»" },
          { href: "#arzon", label: "Какой способ самый дешёвый" },
          { href: "#ozbekiston", label: "Вывод для Узбекистана" },
        ]}
      />

      <h2 id="nega">Почему Telegram Stars дороже в App Store?</h2>
      <p>
        Причина одна — <strong>комиссия платформы</strong>. Если покупать Stars внутри приложения Telegram на iPhone,
        оплата проходит через App Store. Apple берёт около 30% с каждой цифровой покупки. Чтобы покрыть это, Telegram
        задаёт для App Store цену выше, чем для других способов. В Google Play ситуация похожая.
      </p>

      <CompareTable
        headers={["Способ", "Комиссия", "Карта Узбекистана", "Обычный уровень цены"]}
        rows={[
          ["iPhone / App Store", "~30% (Apple)", <No key="1" />, "Самый высокий"],
          ["Android / Google Play", "~есть комиссия", <No key="2" />, "Высокий"],
          ["Fragment (TON)", "Минимальная", <No key="3" />, "Низкий, но нужна крипта"],
          [<>Локальный бот / Mini App</>, "Нет (Apple/Google)", <Yes key="4" />, "В сумах, удобно"],
        ]}
      />
      <p>
        Как видно, разница не в «ценности» Stars — звезда одинакова на всех платформах — а в{" "}
        <strong>комиссии платёжного канала</strong>. Полный разбор цен — в статье{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">«Сравнение цен Stars»</Link>.
      </p>

      <InlineCta text="Без комиссии App Store — в сумах, в боте за 10 секунд." />

      <h2 id="apple-soligi">Как работает «налог Apple»?</h2>
      <p>
        Так называемый «Apple tax» — правило для всех цифровых покупок в App Store. Разработчик (в данном случае Telegram)
        обязан использовать платёжную систему Apple и отдаёт ей часть дохода. Поэтому одни и те же 100 звёзд на iPhone
        могут стоить дороже, чем через Fragment или локального бота. Это ценовая политика платформы, а не Telegram.
      </p>

      <KeyFacts label="Важные факты">
        <li>
          <b>~30%</b> — примерная комиссия с покупок внутри App Store
        </li>
        <li>
          <b>Та же звезда</b> — одинаковая функция везде, разница только в цене
        </li>
        <li>
          <b>Fragment/бот</b> — каналы без комиссии App Store
        </li>
      </KeyFacts>

      <h2 id="arzon">Какой способ самый дешёвый?</h2>
      <p>
        По чистой цене обычно дешевле Fragment (TON), но он требует крипто-кошелёк и TON — карта Узбекистана не работает.
        Поэтому на практике для местного пользователя удобнее всего локальный бот с оплатой UzCard/HUMO/Click/Payme в
        сумах. Полное руководство по покупке — в статье{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Где купить Stars»</Link>.
      </p>

      <h2 id="ozbekiston">Вывод для Узбекистана</h2>
      <p>
        Если покупать прямо на iPhone, к зарубежной карте добавится ещё и комиссия Apple. Через локального бота вы
        получаете в сумах, без комиссии и быстрее. Критерии выбора лучшего бота — в статье{" "}
        <Link href="/blog/telegram-stars-eng-yaxshi-botlar-2026">«Лучшие боты»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "официальный анонс Stars" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "техническая документация" },
          { href: "https://fragment.com", label: "fragment.com", note: "цена на основе TON" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "comparison",
  datePublished: "2026-06-30",
  dateModified: "2026-06-30",
  keywords: [
    "telegram stars app store narxi",
    "telegram stars google play",
    "telegram stars narx farqi",
    "telegram stars apple komissiya",
    "telegram stars app store vs bot",
    "apple tax telegram stars",
  ],
  locales: {
    uz: {
      title: "Telegram Stars va App Store narxlari nega farq qiladi? (2026)",
      excerpt:
        "Nega iPhone’da Telegram Stars qimmatroq? Apple’ning ~30% komissiyasi, Google Play, Fragment va mahalliy botlar narxi — sabablar va eng arzon yo‘l.",
      metaTitle: "Telegram Stars App Store narx farqi — nega qimmat 2026",
      metaDescription:
        "Telegram Stars va App Store narxlari nega farq qiladi: Apple’ning ~30% komissiyasi, Google Play va Fragment taqqoslash, O‘zbekiston uchun eng arzon yo‘l.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Komissiyasiz Stars olasizmi?",
      ctaBody: "So‘mda, App Store komissiyasisiz — @StarsPaymee_bot orqali 10 soniyada.",
      faq: [
        {
          question: "Nega iPhone’da Telegram Stars qimmatroq?",
          answer:
            "Chunki App Store ichidagi xaridlardan Apple ~30% komissiya oladi va Telegram bu xarajatni narxga qo‘shadi. Yulduzning o‘zi bir xil, farq komissiyada.",
        },
        {
          question: "Android’da Stars arzonroqmi?",
          answer:
            "Google Play ham komissiya oladi, shuning uchun to‘g‘ridan-to‘g‘ri xarid odatda mahalliy botdan qimmatroq bo‘ladi.",
        },
        {
          question: "Eng arzon yo‘l qaysi?",
          answer:
            "Sof narxda Fragment (TON) arzonroq, lekin kripto talab qiladi. O‘zbekiston uchun amaliy eng qulayi — so‘mda ishlaydigan mahalliy bot.",
        },
        {
          question: "Yulduzning qiymati platformaga qarab o‘zgaradimi?",
          answer:
            "Yo‘q. Yulduz Telegram ichida hamma joyda bir xil ishlaydi. Faqat sotib olish narxi to‘lov kanaliga qarab farq qiladi.",
        },
        {
          question: "App Store komissiyasidan qanday qochsam bo‘ladi?",
          answer:
            "Stars’ni ilova ichidan emas, mahalliy bot yoki Mini App orqali so‘mda oling — u Apple/Google komissiyasiga bog‘liq emas.",
        },
      ],
    },
    ru: {
      title: "Почему цены на Telegram Stars отличаются от App Store? (2026)",
      excerpt:
        "Почему на iPhone Telegram Stars дороже? Комиссия Apple ~30%, Google Play, Fragment и локальные боты — причины разницы и самый дешёвый способ.",
      metaTitle: "Telegram Stars и App Store — почему цена выше 2026",
      metaDescription:
        "Почему цены на Telegram Stars отличаются от App Store: комиссия Apple ~30%, сравнение с Google Play и Fragment, самый выгодный способ для Узбекистана.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите Stars без комиссии?",
      ctaBody: "В сумах, без комиссии App Store — через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Почему на iPhone Telegram Stars дороже?",
          answer:
            "Потому что с покупок в App Store Apple берёт ~30% комиссии, и Telegram закладывает это в цену. Сама звезда одинакова, разница в комиссии.",
        },
        {
          question: "В Android Stars дешевле?",
          answer:
            "Google Play тоже берёт комиссию, поэтому прямая покупка обычно дороже, чем через локального бота.",
        },
        {
          question: "Какой способ самый дешёвый?",
          answer:
            "По чистой цене дешевле Fragment (TON), но нужна крипта. Для Узбекистана практичнее всего локальный бот с оплатой в сумах.",
        },
        {
          question: "Меняется ли ценность звезды в зависимости от платформы?",
          answer:
            "Нет. Звезда работает одинаково внутри Telegram везде. Отличается только цена покупки в зависимости от платёжного канала.",
        },
        {
          question: "Как избежать комиссии App Store?",
          answer:
            "Покупайте Stars не внутри приложения, а через локального бота или Mini App в сумах — это не зависит от комиссии Apple/Google.",
        },
      ],
    },
  },
};
