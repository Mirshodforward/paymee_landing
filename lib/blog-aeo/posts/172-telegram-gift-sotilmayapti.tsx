import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  KeyFacts,
  Sources,
  Step,
  Steps,
  Toc,
} from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-gift-sotilmayapti";

/** Ikki holat — sotuvga qo‘yib bo‘lmayapti va qo‘yilgan-u olinmayapti. */
function CaseTable({ locale }: { locale: "uz" | "ru" }) {
  const copy = {
    uz: {
      headers: ["Belgi", "Ehtimoliy sabab", "Nima qilinadi"],
      rows: [
        ["Sotuv tugmasi umuman yo‘q", "Bu tur sovg‘a qayta sotishga mo‘ljallanmagan bo‘lishi mumkin", "Sovg‘a turini va kolleksiyasini tekshiring"],
        ["Tugma bor, lekin ishlamaydi", "Qayta sotish uchun eng erta sana belgilangan bo‘lishi mumkin", "Sovg‘a kartochkasidagi sanani ko‘ring"],
        ["«Narx juda past/yuqori» xabari", "Qayta sotish uchun eng kam va eng ko‘p summa chegarasi bor", "Narxni chegara ichiga kiriting"],
        ["Auksionda olingan sovg‘a", "Bunday sovg‘alarni Stars’ga qaytarib bo‘lmaydi", "Sotuv yo‘lini alohida tekshiring"],
        ["E’lon turibdi, ko‘rish yo‘q", "Narx o‘xshash nusxalardan sezilarli yuqori bo‘lishi mumkin", "O‘xshash e’lonlar bilan solishtiring"],
        ["Ko‘rish bor, sotib olish yo‘q", "Narx bozorga mos, lekin talab past bo‘lishi mumkin", "Sabr qiling yoki narxni qayta ko‘rib chiqing"],
      ],
    },
    ru: {
      headers: ["Признак", "Возможная причина", "Что делать"],
      rows: [
        ["Кнопки продажи нет вовсе", "Этот тип подарка может быть не предназначен для перепродажи", "Проверьте тип подарка и коллекцию"],
        ["Кнопка есть, но не срабатывает", "Может быть задана самая ранняя дата перепродажи", "Посмотрите дату в карточке подарка"],
        ["Сообщение «цена слишком низкая/высокая»", "Для перепродажи есть минимальная и максимальная сумма", "Впишите цену в допустимый диапазон"],
        ["Подарок получен на аукционе", "Такие подарки нельзя обменять обратно на Stars", "Проверьте путь продажи отдельно"],
        ["Объявление висит, просмотров нет", "Цена может быть заметно выше похожих экземпляров", "Сравните с похожими объявлениями"],
        ["Просмотры есть, покупок нет", "Цена рыночная, но спрос низкий", "Подождите или пересмотрите цену"],
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
      Avval ikki holatni ajrating: <b>sotuvga qo‘yib bo‘lmayapti</b> — bu texnik yoki mahsulot cheklovi (sovg‘a
      turi, eng erta qayta sotish sanasi, narx chegarasi); <b>qo‘yilgan-u olinmayapti</b> — bu narx va talab
      masalasi. Sabablari boshqa, shuning uchun yechimlari ham boshqa.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#ikki", label: "Ikki holatni ajratish" },
          { href: "#tur", label: "Sovg‘a turi va sotuv imkoniyati" },
          { href: "#muddat", label: "Kutish muddati va cheklovlar" },
          { href: "#elon", label: "E’lon haqiqatan faolmi" },
          { href: "#narx", label: "Narxni qanday solishtirish" },
          { href: "#komissiya", label: "Komissiyadan keyin qancha qoladi" },
          { href: "#xaridor", label: "Xaridor yo‘q bo‘lsa" },
          { href: "#aldov", label: "«Avval yuboring» takliflari" },
        ]}
      />

      <p>
        Bu maqola sotuvni <b>boshlash</b> haqida emas — sotuv <b>nega amalga oshmayotgani</b> haqida. Sotuvni
        umuman qanday boshlash kerakligi{" "}
        <Link href="/blog/telegram-gift-sotish">alohida maqolada</Link> yozilgan.
      </p>
      <p>
        Darrov aytib qo‘yamiz: bu yerda «tez sotiladi» yoki «foyda kafolatlanadi» degan va’dalar yo‘q. Kolleksion
        sovg‘alar bozori talabga bog‘liq va narx tushishi ham mumkin.
      </p>

      <h2 id="ikki">Ikki holatni ajratish</h2>
      <CaseTable locale="uz" />

      <h2 id="tur">Sovg‘a turi va sotuvga qo‘yish imkoniyati</h2>
      <p>
        Barcha sovg‘a bir xil emas. Telegram hujjatida sovg‘alarning qayta sotilishi bilan bog‘liq alohida
        holatlar ko‘rsatilgan:
      </p>
      <KeyFacts label="Hujjatdagi holatlar">
        <li>
          <b>Qayta sotish sanasi</b> — sovg‘aga qayta sotish uchun eng erta sana belgilangan bo‘lishi mumkin;
          undan oldin sotuvga qo‘yib bo‘lmaydi.
        </li>
        <li>
          <b>O‘tkazish sanasi va narxi</b> — boshqa odamga o‘tkazish uchun ham alohida sana va qo‘shimcha to‘lov
          bo‘lishi mumkin.
        </li>
        <li>
          <b>Auksionda olingan sovg‘alar</b> — ularni Stars’ga qaytarib bo‘lmaydi.
        </li>
        <li>
          <b>Yasalgan (crafted) sovg‘alar</b> — ularda qayta sotish cheklovlari bo‘lishi mumkin.
        </li>
        <li>
          <b>Blokcheynga chiqarish</b> — TON’ga chiqarish uchun ham o‘z eng erta sanasi bo‘lishi mumkin.
        </li>
      </KeyFacts>
      <p>
        Ya’ni «sotuv tugmasi yo‘q» degan holat ko‘pincha nosozlik emas — sovg‘aning shu turdagi qoidasi.
      </p>

      <h2 id="muddat">Kutish muddati yoki boshqa cheklov bormi</h2>
      <Steps>
        <Step title="1. Sovg‘a kartochkasini oching">Sana va shartlar odatda o‘sha yerda ko‘rsatiladi.</Step>
        <Step title="2. Qayta sotish sanasini toping">Belgilangan bo‘lsa, undan oldin qo‘ya olmaysiz.</Step>
        <Step title="3. Narx chegarasini tekshiring">
          Qayta sotish uchun eng kam va eng ko‘p summa mavjud; chegaradan chiqsangiz, tizim qabul qilmaydi.
        </Step>
        <Step title="4. Boshqa sovg‘angizni sinang">
          Ikkinchisi qo‘yilsa, muammo umumiy emas — aynan shu sovg‘ada.
        </Step>
      </Steps>

      <h2 id="elon">E’lon haqiqatan faolmi</h2>
      <p>
        Ba’zan sotuvchi e’lon qo‘yganiga ishonadi, lekin u aslida faol emas. Buni tekshirish oson:
      </p>
      <KeyFacts label="Uchta tekshiruv">
        <li>Sovg‘angiz sotuvdagi ro‘yxatda ko‘rinyaptimi — o‘zingiz qidirib ko‘ring.</li>
        <li>Narx siz kiritgan summa bilan bir xilmi.</li>
        <li>Sovg‘a hali ham sizning egalikda turibdimi — o‘tkazib yuborilmaganmi.</li>
      </KeyFacts>

      <h2 id="narx">O‘xshash sovg‘alar bilan narxni qanday solishtirish kerak</h2>
      <p>
        Eng ko‘p uchraydigan xato — «mening sovg‘am ham shu kolleksiyadan, demak narxi ham shuncha» deb
        hisoblash. Bir kolleksiya ichida ham nusxalar bir xil emas.
      </p>
      <InfoGrid>
        <InfoCard emoji="🏷️" title="Bir xil kolleksiya">
          Solishtirish faqat bir kolleksiya ichida ma’noga ega.
        </InfoCard>
        <InfoCard emoji="🎨" title="Model, fon, belgi">
          Bu uch xususiyat narxga sezilarli ta’sir qiladi — ularni ham moslashtiring.
        </InfoCard>
        <InfoCard emoji="🔢" title="Nusxa raqami">
          Kichik yoki «chiroyli» raqamlar alohida qadrlanishi mumkin.
        </InfoCard>
        <InfoCard emoji="📉" title="So‘ralgan va sotilgan narx">
          E’londagi narx — bu faqat taklif. Haqiqiy ko‘rsatkich — amalga oshgan savdo.
        </InfoCard>
      </InfoGrid>
      <p>
        Eng past e’lon narxi («floor») — bozorning pastki chegarasi, o‘rtacha narx emas. Undan yuqori qo‘ysangiz,
        farqni oqlaydigan sabab (noyob xususiyat, raqam) bo‘lishi kerak.
      </p>

      <h2 id="komissiya">Komissiyadan keyin qancha qoladi</h2>
      <p>
        Telegram hujjatida qayta sotishdan olinadigan komissiya nazarda tutilgani ko‘rsatilgan. Ya’ni siz
        qo‘ygan narx — <b>xaridor to‘laydigan</b> summa, sizga tushadigan emas.
      </p>
      <KeyFacts label="Hisoblashda yodda tuting">
        <li>Yakuniy summadan komissiya ushlab qolinadi.</li>
        <li>Sizga tushadigan miqdorni oldindan hisoblang — «shuncha turadi» degan raqam sof daromad emas.</li>
        <li>Sovg‘ani sotib olish narxi bilan solishtirsangiz, komissiyani ham hisobga oling.</li>
      </KeyFacts>

      <h2 id="xaridor">Xaridor yo‘q bo‘lsa qaysi ma’lumotni qayta ko‘ramiz</h2>
      <p>Narxni tushirish — birinchi emas, oxirgi qadam. Avval quyidagilarni tekshiring:</p>
      <Steps>
        <Step title="1. Solishtirish to‘g‘rimi?">
          O‘xshash nusxalar haqiqatan bir xil model, fon va belgiga egami?
        </Step>
        <Step title="2. Narx bozor bilan mosmi?">
          Eng past e’lonlardan qanchalik yuqoridasiz va bu farqni nima oqlaydi?
        </Step>
        <Step title="3. Vaqt yetarli o‘tdimi?">
          Noyob nusxalarga xaridor uzoqroq izlanishi mumkin — bir necha soat bu ko‘rsatkich emas.
        </Step>
        <Step title="4. Sotish shartmi?">
          Shoshilinch sotuv har doim eng past narxda bo‘ladi. Shoshilmasangiz, kutish ham strategiya.
        </Step>
      </Steps>

      <h2 id="aldov">«Avval Gift’ni yuboring, keyin pul beraman»</h2>
      <p>
        Bu — sovg‘a savdosidagi eng keng tarqalgan aldov sxemasi. Sovg‘a o‘tkazilgandan keyin uni qaytarish
        imkoniyati yo‘q.
      </p>
      <KeyFacts label="Qoidalar">
        <li>Sovg‘ani rasmiy sotuv oqimidan tashqarida oldindan o‘tkazmang.</li>
        <li>Sotuvchi tanlagan «kafil» — tomonsiz kafil emas.</li>
        <li>Shoshiltirish, chegirma va «boshqa xaridor bor» bosimi — ogohlantiruvchi belgilar.</li>
        <li>To‘lov skrinshoti — bu pul kelgani degani emas; hisobingizni o‘zingiz tekshiring.</li>
      </KeyFacts>
      <p>
        Havola va sotuvchini tekshirish bo‘yicha —{" "}
        <Link href="/blog/telegram-gift-havolasini-tekshirish">Gift havolasini tekshirish</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          {
            href: "https://core.telegram.org/api/gifts",
            label: "core.telegram.org/api/gifts",
            note: "qayta sotish sanasi, narx chegarasi va komissiya",
          },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Сначала разделите два случая: <b>не получается выставить на продажу</b> — это техническое или продуктовое
      ограничение (тип подарка, самая ранняя дата перепродажи, границы цены); <b>выставлен, но не покупают</b> —
      это вопрос цены и спроса. Причины разные, значит и решения разные.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#ikki", label: "Разделяем два случая" },
          { href: "#tur", label: "Тип подарка и продажа" },
          { href: "#muddat", label: "Срок ожидания и ограничения" },
          { href: "#elon", label: "Активно ли объявление" },
          { href: "#narx", label: "Как сравнивать цену" },
          { href: "#komissiya", label: "Сколько останется после комиссии" },
          { href: "#xaridor", label: "Если покупателя нет" },
          { href: "#aldov", label: "«Сначала отправьте»" },
        ]}
      />

      <p>
        Эта статья не о том, как <b>начать</b> продажу, а о том, почему продажа <b>не происходит</b>. Как
        выставить подарок вообще — в{" "}
        <Link href="/blog/telegram-gift-sotish">отдельной статье</Link>.
      </p>
      <p>
        Сразу оговоримся: здесь нет обещаний «быстро продастся» или «прибыль гарантирована». Рынок коллекционных
        подарков зависит от спроса, и цена может снижаться.
      </p>

      <h2 id="ikki">Разделяем два случая</h2>
      <CaseTable locale="ru" />

      <h2 id="tur">Тип подарка и возможность выставить на продажу</h2>
      <p>
        Не все подарки одинаковы. В документации Telegram описаны отдельные состояния, связанные с
        перепродажей:
      </p>
      <KeyFacts label="Состояния из документации">
        <li>
          <b>Дата перепродажи</b> — у подарка может быть задана самая ранняя дата; до неё выставить нельзя.
        </li>
        <li>
          <b>Дата и стоимость передачи</b> — для передачи другому человеку тоже может действовать своя дата и
          дополнительная оплата.
        </li>
        <li>
          <b>Подарки с аукциона</b> — их нельзя обменять обратно на Stars.
        </li>
        <li>
          <b>Изготовленные (crafted) подарки</b> — у них могут быть ограничения на перепродажу.
        </li>
        <li>
          <b>Вывод в блокчейн</b> — у вывода в TON тоже может быть своя самая ранняя дата.
        </li>
      </KeyFacts>
      <p>
        То есть «нет кнопки продажи» — чаще не сбой, а правило для этого типа подарка.
      </p>

      <h2 id="muddat">Есть ли срок ожидания или другое ограничение</h2>
      <Steps>
        <Step title="1. Откройте карточку подарка">Дата и условия обычно указаны там же.</Step>
        <Step title="2. Найдите дату перепродажи">Если она задана, раньше выставить не получится.</Step>
        <Step title="3. Проверьте границы цены">
          Для перепродажи есть минимальная и максимальная сумма; за их пределами система не примет.
        </Step>
        <Step title="4. Попробуйте другой свой подарок">
          Если второй выставляется, проблема не общая — она в этом конкретном подарке.
        </Step>
      </Steps>

      <h2 id="elon">Активно ли объявление на самом деле</h2>
      <p>Иногда продавец уверен, что объявление размещено, но фактически оно не активно. Проверить просто:</p>
      <KeyFacts label="Три проверки">
        <li>Виден ли ваш подарок в списке продающихся — поищите сами.</li>
        <li>Совпадает ли цена с той, что вы вводили.</li>
        <li>Остаётся ли подарок в вашем владении — не был ли он передан.</li>
      </KeyFacts>

      <h2 id="narx">Как сравнивать цену с похожими подарками</h2>
      <p>
        Самая частая ошибка — считать «мой подарок из той же коллекции, значит и цена такая же». Внутри одной
        коллекции экземпляры тоже не одинаковы.
      </p>
      <InfoGrid>
        <InfoCard emoji="🏷️" title="Одна коллекция">
          Сравнение имеет смысл только внутри одной коллекции.
        </InfoCard>
        <InfoCard emoji="🎨" title="Модель, фон, символ">
          Эти три свойства заметно влияют на цену — их тоже нужно сопоставить.
        </InfoCard>
        <InfoCard emoji="🔢" title="Номер экземпляра">
          Маленькие или «красивые» номера могут цениться отдельно.
        </InfoCard>
        <InfoCard emoji="📉" title="Запрошенная и сделочная цена">
          Цена в объявлении — только предложение. Показательна состоявшаяся сделка.
        </InfoCard>
      </InfoGrid>
      <p>
        Минимальная цена объявления («floor») — нижняя граница рынка, а не средняя цена. Выставляя выше, нужно
        иметь причину, которая эту разницу объясняет: редкое свойство или номер.
      </p>

      <h2 id="komissiya">Сколько останется после комиссии</h2>
      <p>
        В документации Telegram предусмотрена комиссия с перепродажи. То есть указанная вами цена — это сумма,{" "}
        <b>которую платит покупатель</b>, а не та, что придёт вам.
      </p>
      <KeyFacts label="Учитывайте при расчёте">
        <li>Из итоговой суммы удерживается комиссия.</li>
        <li>Посчитайте свою сумму заранее — «стоит столько-то» это не чистый доход.</li>
        <li>Сравнивая с ценой покупки подарка, учитывайте и комиссию.</li>
      </KeyFacts>

      <h2 id="xaridor">Что пересмотреть, если покупателя нет</h2>
      <p>Снижение цены — последний шаг, а не первый. Сначала проверьте следующее:</p>
      <Steps>
        <Step title="1. Правильное ли сравнение?">
          У похожих экземпляров действительно те же модель, фон и символ?
        </Step>
        <Step title="2. Соответствует ли цена рынку?">
          Насколько вы выше минимальных объявлений и чем это объясняется?
        </Step>
        <Step title="3. Прошло ли достаточно времени?">
          На редкие экземпляры покупателя ищут дольше — несколько часов ни о чём не говорят.
        </Step>
        <Step title="4. Обязательно ли продавать?">
          Срочная продажа всегда идёт по самой низкой цене. Если не спешите, ожидание — тоже стратегия.
        </Step>
      </Steps>

      <h2 id="aldov">«Сначала отправьте Gift, потом заплачу»</h2>
      <p>
        Это самая распространённая схема обмана в торговле подарками. После передачи подарка вернуть его
        невозможно.
      </p>
      <KeyFacts label="Правила">
        <li>Не передавайте подарок заранее вне официального сценария продажи.</li>
        <li>«Гарант», выбранный продавцом или покупателем, — не независимый гарант.</li>
        <li>Спешка, скидка и давление «есть другой покупатель» — тревожные признаки.</li>
        <li>Скриншот перевода не означает поступление денег; проверяйте свой счёт сами.</li>
      </KeyFacts>
      <p>
        О проверке ссылки и продавца —{" "}
        <Link href="/blog/telegram-gift-havolasini-tekshirish">проверка ссылки на Gift</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          {
            href: "https://core.telegram.org/api/gifts",
            label: "core.telegram.org/api/gifts",
            note: "дата перепродажи, границы цены и комиссия",
          },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Sovg‘amni sotuvga qo‘yolmayapman, sababi nima?",
    answer:
      "Ehtimol, sovg‘a turi qayta sotishga mo‘ljallanmagan yoki unga eng erta qayta sotish sanasi belgilangan. Sovg‘a kartochkasidagi shartlarni ko‘ring.",
  },
  {
    question: "Nega narxim qabul qilinmayapti?",
    answer: "Qayta sotish uchun eng kam va eng ko‘p summa chegarasi mavjud; narx shu oraliqda bo‘lishi kerak.",
  },
  {
    question: "E’lon turibdi, lekin hech kim olmayapti.",
    answer:
      "Avval solishtirishni tekshiring: bir xil kolleksiya, model, fon, belgi va raqamdagi nusxalar bilan taqqoslang. Narxni tushirish — oxirgi qadam.",
  },
  {
    question: "Qo‘ygan narxim to‘liq menga tushadimi?",
    answer: "Yo‘q. Qayta sotishdan komissiya ushlab qolinadi, shuning uchun sizga tushadigan summa kamroq bo‘ladi.",
  },
  {
    question: "Auksionda olingan sovg‘ani Stars’ga qaytarsa bo‘ladimi?",
    answer: "Hujjatga ko‘ra, auksionda olingan sovg‘alarni Stars’ga qaytarib bo‘lmaydi.",
  },
  {
    question: "Sovg‘am tez sotiladimi?",
    answer:
      "Buni hech kim kafolatlay olmaydi. Bozor talabga bog‘liq va narx pasayishi ham mumkin; sotuv muddati oldindan ma’lum emas.",
  },
  {
    question: "«Avval yuboring, keyin to‘layman» desa nima qilaman?",
    answer:
      "Rozi bo‘lmang. Sovg‘a o‘tkazilgach uni qaytarib bo‘lmaydi; bu — eng keng tarqalgan aldov sxemasi.",
  },
];

const ruFaq = [
  {
    question: "Не получается выставить подарок на продажу, почему?",
    answer:
      "Возможно, этот тип подарка не предназначен для перепродажи либо задана самая ранняя дата перепродажи. Посмотрите условия в карточке подарка.",
  },
  {
    question: "Почему не принимается моя цена?",
    answer: "Для перепродажи есть минимальная и максимальная сумма; цена должна быть в этом диапазоне.",
  },
  {
    question: "Объявление висит, но никто не покупает.",
    answer:
      "Сначала проверьте корректность сравнения: та же коллекция, модель, фон, символ и номер. Снижение цены — последний шаг.",
  },
  {
    question: "Придёт ли мне вся указанная сумма?",
    answer: "Нет. С перепродажи удерживается комиссия, поэтому вы получите меньше указанной цены.",
  },
  {
    question: "Можно ли обменять аукционный подарок обратно на Stars?",
    answer: "Согласно документации, подарки, полученные на аукционе, обменять обратно на Stars нельзя.",
  },
  {
    question: "Быстро ли продастся мой подарок?",
    answer:
      "Гарантировать этого никто не может. Рынок зависит от спроса, цена может снижаться, а срок продажи заранее неизвестен.",
  },
  {
    question: "Что делать, если предлагают «сначала отправьте, потом заплачу»?",
    answer:
      "Не соглашайтесь. После передачи подарок вернуть нельзя; это самая распространённая схема обмана.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "problem",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  keywords: [
    "telegram gift sotilmayapti",
    "telegram gift sotuvga qo‘yib bo‘lmayapti",
    "gift sell tugmasi yo‘q",
    "telegram nft sotilmayapti",
    "giftga xaridor topish",
    "telegram gift sotish cheklovi",
  ],
  locales: {
    uz: {
      title: "Telegram Gift sotilmayapti: narx, cheklov va xaridor topish",
      excerpt:
        "Sotuvga qo‘yib bo‘lmayapti va qo‘yilgan-u olinmayapti — ikki boshqa muammo. Qayta sotish sanasi, narx chegarasi, komissiya va narxni to‘g‘ri solishtirish.",
      metaTitle: "Telegram Gift sotilmayapti — sabab va yechim",
      metaDescription:
        "Telegram Gift sotilmasa: sotuv tugmasi yo‘qligi, qayta sotish sanasi, narx chegarasi va komissiya, o‘xshash e’lonlar bilan solishtirish va aldov sxemalari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Gift Market",
      ctaBody: "@StarsPaymee_bot — katalog, so‘mda narx va buyurtma raqami.",
      faq: uzFaq,
    },
    ru: {
      title: "Подарок Telegram не продаётся: цена, ограничения и поиск покупателя",
      excerpt:
        "Не выставляется и не покупают — две разные проблемы. Дата перепродажи, границы цены, комиссия и корректное сравнение с похожими объявлениями.",
      metaTitle: "Подарок Telegram не продаётся — причины и решения",
      metaDescription:
        "Если подарок Telegram не продаётся: нет кнопки продажи, дата перепродажи, границы цены и комиссия, сравнение с похожими объявлениями и схемы обмана.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Gift Market",
      ctaBody: "@StarsPaymee_bot — каталог, цена в сумах и номер заказа.",
      faq: ruFaq,
    },
  },
};
