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
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-gift-yuborilmayapti";

/**
 * Diagnostika jadvali — «belgi → nima tekshiriladi → keyingi qadam».
 *
 * Sabablar Telegramning Gifts hujjatidagi haqiqiy cheklovlarga asoslangan
 * (sold_out, limited/availability_remains, limited_per_user, require_premium,
 * locked_until_date, disallowed_gifts, can_transfer_at). Shuning uchun bu
 * yerda «balansni to‘ldiring» degan umumiy maslahat yetarli emas.
 */
function DiagnosisTable({ locale }: { locale: "uz" | "ru" }) {
  const copy = {
    uz: {
      headers: ["Ko‘rinadigan belgi", "Nima tekshiriladi", "Keyingi qadam"],
      rows: [
        [
          "Sovg‘a katalogda bor, lekin tanlab bo‘lmaydi",
          "Sovg‘a sotilib tugagan yoki tiraji tugagan bo‘lishi mumkin",
          "Boshqa sovg‘ani tanlang — tugagan tiraj qaytmaydi",
        ],
        [
          "«Bu foydalanuvchiga yuborib bo‘lmaydi» turidagi xabar",
          "Qabul qiluvchi sovg‘a qabul qilishni cheklagan bo‘lishi mumkin",
          "Undan sozlamalarini tekshirishni so‘rang yoki boshqa tur tanlang",
        ],
        [
          "Sovg‘a tugmasi umuman ko‘rinmayapti",
          "Ikkala tomonda sovg‘a tugmasi yoqilgan bo‘lishi kerak",
          "O‘z sozlamangizni tekshiring, keyin qabul qiluvchinikini",
        ],
        [
          "Ayni shu sovg‘a boshqalarga ketyapti, bunga ketmayapti",
          "Ba’zi sovg‘alar qabul qiluvchida faol Premium bo‘lishini talab qiladi",
          "Qabul qiluvchi profilida Premium rozetkasini tekshiring",
        ],
        [
          "Sovg‘a vaqtincha «yopiq» ko‘rinadi",
          "Sovg‘aga muddat qulfi qo‘yilgan bo‘lishi mumkin",
          "Ko‘rsatilgan sanani kuting yoki boshqasini tanlang",
        ],
        [
          "Bir nechta oldim, endi olinmayapti",
          "Bitta foydalanuvchi uchun chegara belgilangan bo‘lishi mumkin",
          "Boshqa kolleksiyadan tanlang",
        ],
        [
          "Mavjud kolleksion sovg‘ani o‘tkazolmayapman",
          "O‘tkazish uchun eng erta sana va o‘tkazish narxi bo‘lishi mumkin",
          "Sovg‘a kartochkasidagi sana va narxni ko‘ring",
        ],
        [
          "Pul yechildi, sovg‘a ko‘rinmaydi",
          "Buyurtma statusi «bajarilmoqda» bosqichida bo‘lishi mumkin",
          "Qayta to‘lamang — avval statusni va buyurtma ID ni tekshiring",
        ],
      ],
    },
    ru: {
      headers: ["Видимый признак", "Что проверяем", "Следующий шаг"],
      rows: [
        [
          "Подарок в каталоге есть, но выбрать нельзя",
          "Возможно, подарок распродан или тираж исчерпан",
          "Выберите другой — исчерпанный тираж не возвращается",
        ],
        [
          "Сообщение вида «этому пользователю нельзя отправить»",
          "Получатель мог ограничить приём подарков",
          "Попросите его проверить настройки или выберите другой тип",
        ],
        [
          "Кнопка подарка вообще не видна",
          "Кнопка подарков должна быть включена у обеих сторон",
          "Проверьте свои настройки, затем настройки получателя",
        ],
        [
          "Этот подарок уходит другим, а ему — нет",
          "Часть подарков требует активного Premium у получателя",
          "Проверьте значок Premium в его профиле",
        ],
        [
          "Подарок временно выглядит «закрытым»",
          "На подарок может быть установлена блокировка по дате",
          "Дождитесь указанной даты или выберите другой",
        ],
        [
          "Несколько взял, больше не даёт",
          "Возможен лимит на одного пользователя",
          "Выберите подарок из другой коллекции",
        ],
        [
          "Не получается передать имеющийся коллекционный подарок",
          "Может действовать самая ранняя дата передачи и её стоимость",
          "Посмотрите дату и цену в карточке подарка",
        ],
        [
          "Деньги списались, подарка не видно",
          "Заказ может быть на стадии «выполняется»",
          "Не платите повторно — сначала проверьте статус и ID заказа",
        ],
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
      Sovg‘a yuborilmasligining sababi deyarli har doim uchtadan biri: <b>sovg‘aning o‘zida cheklov bor</b>{" "}
      (tiraj tugagan, muddat qulfi, Premium talabi), <b>qabul qiluvchi tomonida to‘siq bor</b> (sovg‘a qabul
      qilishni cheklagan) yoki <b>to‘lov bosqichida uzilish</b> bo‘lgan. Avval qaysi bosqichda to‘xtaganini
      aniqlang — «balansni to‘ldirish» ko‘pincha yechim emas.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#bosqich", label: "Qaysi bosqichda xato chiqdi" },
          { href: "#jadval", label: "Belgi bo‘yicha diagnostika" },
          { href: "#balans", label: "Balans va yakuniy summa" },
          { href: "#sovga", label: "Sovg‘aning o‘zidagi cheklovlar" },
          { href: "#qabul", label: "Qabul qiluvchi tomoni" },
          { href: "#otkazish", label: "Kolleksion sovg‘ani o‘tkazish" },
          { href: "#tolov", label: "Pul yechilgan bo‘lsa" },
          { href: "#support", label: "Supportga nima yoziladi" },
        ]}
      />

      <h2 id="bosqich">Avval aniqlang: qaysi bosqichda xato chiqdi?</h2>
      <p>
        «Sovg‘a yuborilmayapti» degan bitta jumla ostida uchta butunlay boshqa muammo yashiringan bo‘lishi mumkin.
        Ularni aralashtirib yuborish vaqtni yo‘qotadi:
      </p>
      <InfoGrid>
        <InfoCard emoji="🛒" title="1. Xarid amalga oshmayapti">
          Sovg‘ani tanlash yoki to‘lash bosqichida to‘xtaydi. Sabab ko‘pincha sovg‘aning o‘zida.
        </InfoCard>
        <InfoCard emoji="📤" title="2. Mavjud sovg‘a o‘tmayapti">
          Sizda allaqachon bor sovg‘ani boshqa odamga o‘tkazolmayapsiz. Bu — alohida cheklovlar to‘plami.
        </InfoCard>
        <InfoCard emoji="⏳" title="3. To‘langan buyurtma yetmayapti">
          Pul yechilgan, lekin sovg‘a ko‘rinmayapti. Bu yetkazish bosqichi muammosi.
        </InfoCard>
      </InfoGrid>
      <p>
        Quyidagi bo‘limlar shu uch holatni alohida ko‘rib chiqadi. Sovg‘a yuborishning oddiy tartibi esa{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">alohida qo‘llanmada</Link>.
      </p>

      <h2 id="jadval">Belgi bo‘yicha tezkor diagnostika</h2>
      <DiagnosisTable locale="uz" />

      <h2 id="balans">Stars balansi va yakuniy summani tekshirish</h2>
      <p>
        Bu — eng oson tekshiruv, shuning uchun undan boshlagan ma’qul. Lekin shuni yodda tuting: balans
        yetishmasligi sabablarning faqat bittasi, va u odatda aniq xabar bilan bildiriladi.
      </p>
      <Steps>
        <Step title="1. Sovg‘aning yulduz qiymatini o‘qing">
          Katalogdagi raqam — aynan shu sovg‘aning narxi.
        </Step>
        <Step title="2. Balansingiz bilan solishtiring">
          Telegram sozlamalarida yulduzlar balansi ko‘rinadi.
        </Step>
        <Step title="3. Faqat shu sabab bo‘lsa, balansni to‘ldiring">
          Boshqa xabar chiqayotgan bo‘lsa, to‘ldirish muammoni hal qilmaydi — quyidagi bo‘limlarga qarang.
        </Step>
      </Steps>
      <p>
        Yulduz kerak bo‘lsa —{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">so‘mda Stars sotib olish</Link>.
      </p>

      <h2 id="sovga">Sovg‘aning o‘zida qanday cheklovlar bo‘lishi mumkin</h2>
      <p>
        Telegramning sovg‘alar hujjatida sovg‘aning yuborilishiga to‘sqinlik qiladigan bir necha holat
        tasvirlangan. Bular xato emas — bu mahsulotning qoidalari:
      </p>
      <KeyFacts label="Hujjatda ko‘rsatilgan cheklovlar">
        <li>
          <b>Sotilib tugagan</b> — sovg‘a «sold out» holatiga o‘tsa, uni endi sotib bo‘lmaydi.
        </li>
        <li>
          <b>Cheklangan tiraj</b> — sovg‘ada qolgan miqdor hisoblanadi; u tugasa xarid to‘xtaydi.
        </li>
        <li>
          <b>Bitta foydalanuvchi uchun chegara</b> — ayrim sovg‘alarda bir odam ololadigan soni cheklangan.
        </li>
        <li>
          <b>Premium talabi</b> — ayrim sovg‘alar uchun <b>qabul qiluvchida</b> faol Telegram Premium bo‘lishi
          talab qilinadi.
        </li>
        <li>
          <b>Muddat qulfi</b> — sovg‘a ma’lum sanagacha yopiq bo‘lishi mumkin; ilova yuborish mumkinligini
          oldindan tekshiradi va sababni ko‘rsatadi.
        </li>
        <li>
          <b>Auksion sovg‘alari</b> — ular odatdagi yuborish oqimidan o‘tmaydi, alohida tartibda ishlaydi.
        </li>
      </KeyFacts>
      <p>
        Diqqat qiling: <b>Premium talabi qabul qiluvchiga</b> tegishli, sizga emas. Ya’ni sizda Premium bo‘lishi
        bu muammoni hal qilmaydi.
      </p>

      <h2 id="qabul">Qabul qiluvchi tomonini tekshirish</h2>
      <p>
        Telegramda foydalanuvchi sovg‘a qabul qilishni o‘zi cheklashi mumkin — bu maxfiylik sozlamasi. Bundan
        tashqari, sovg‘a tugmasining ko‘rinishi ikkala tomonning sozlamalariga bog‘liq.
      </p>
      <Steps>
        <Step title="1. Boshqa odamga sinab ko‘ring">
          Xuddi shu sovg‘a boshqa do‘stingizga ketsa, muammo sovg‘ada emas — qabul qiluvchi tomonida.
        </Step>
        <Step title="2. Boshqa turdagi sovg‘ani sinang">
          Cheklov ayrim turlarga qo‘yilgan bo‘lishi mumkin; oddiy sovg‘a o‘tsa, sabab shunda.
        </Step>
        <Step title="3. Undan sozlamalarini tekshirishni so‘rang">
          Sovg‘a qabul qilish va sovg‘a tugmasi bilan bog‘liq sozlamalarni o‘zi ko‘rishi kerak.
        </Step>
        <Step title="4. Premium rozetkasini ko‘ring">
          Sovg‘a Premium talab qiladigan turdan bo‘lsa, uning profilida rozetka bo‘lishi shart.
        </Step>
      </Steps>

      <h2 id="otkazish">Mavjud kolleksion sovg‘ani o‘tkazishdagi cheklovlar</h2>
      <p>
        Sizda allaqachon bor kolleksion sovg‘ani boshqa odamga o‘tkazish — alohida amal va uning o‘z qoidalari
        bor. Hujjatda quyidagilar ko‘rsatilgan:
      </p>
      <KeyFacts label="O‘tkazish qoidalari">
        <li>
          <b>Eng erta o‘tkazish sanasi</b> — sovg‘ada shunday sana belgilangan bo‘lsa, undan oldin o‘tkazib
          bo‘lmaydi.
        </li>
        <li>
          <b>O‘tkazish narxi</b> — ayrim sovg‘alarni o‘tkazish uchun qo‘shimcha yulduz talab qilinadi; bo‘lmasa
          bepul.
        </li>
        <li>
          <b>Blokcheynga chiqarish</b> — TON’ga chiqarish uchun ham alohida eng erta sana bo‘lishi mumkin.
        </li>
        <li>
          <b>Auksionda olingan sovg‘alar</b> — ularni Stars’ga qaytarib bo‘lmaydi.
        </li>
      </KeyFacts>
      <p>
        Ya’ni «o‘tkazish tugmasi ishlamayapti» ko‘pincha nosozlik emas, balki sana yoki narx sharti. Sovg‘a
        kartochkasida shu ma’lumotlar ko‘rsatiladi.
      </p>

      <h2 id="tolov">Pul yechilgan bo‘lsa: qayta to‘lashdan oldin</h2>
      <p>
        Eng qimmatga tushadigan xato — javob kelmagach darhol qayta to‘lash. Buning natijasida ikkita buyurtma
        paydo bo‘ladi va ikkalasi ham bajarilishi mumkin.
      </p>
      <Steps>
        <Step title="1. Buyurtma statusini yangilang">Botni yopib qayta oching va statusni ko‘ring.</Step>
        <Step title="2. Qabul qiluvchi profilini tekshiring">Sovg‘a allaqachon yetgan bo‘lishi mumkin.</Step>
        <Step title="3. Bank xabarnomasini o‘qing">
          Pul haqiqatan yechilganmi yoki faqat «band qilingan»mi — ular boshqa narsa.
        </Step>
        <Step title="4. Shundan keyingina supportga yozing">Qayta to‘lov — eng oxirgi variant.</Step>
      </Steps>

      <InlineCta text="Yulduz yetishmayotgan bo‘lsa, so‘mda to‘ldiring." product={{ kind: "stars", amount: 100 }} />

      <h2 id="support">Supportga yuboriladigan ma’lumotlar</h2>
      <p>
        Murojaat qanchalik aniq bo‘lsa, javob shunchalik tez keladi. Quyidagilarni bitta xabarda yuboring:
      </p>
      <KeyFacts label="To‘rtta ma’lumot">
        <li>
          <b>Buyurtma ID</b> — to‘lovdan keyin berilgan raqam.
        </li>
        <li>
          <b>Aniq vaqt</b> — sana va taxminiy soat, vaqt mintaqasi bilan.
        </li>
        <li>
          <b>Sovg‘a nomi</b> — katalogda qanday atalgani, kolleksiyasi bilan.
        </li>
        <li>
          <b>Xato skrinshoti</b> — ekrandagi matn to‘liq ko‘rinsin; shaxsiy ma’lumotlarni yoping.
        </li>
      </KeyFacts>
      <p>
        Yozish manzili —{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>
        .
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "Gifts cheklovlari va qoidalari" },
          { href: "https://telegram.org/blog/gifts", label: "telegram.org/blog/gifts", note: "sovg‘alar e’loni" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Причина почти всегда одна из трёх: <b>ограничение у самого подарка</b> (распродан, блокировка по дате,
      требование Premium), <b>препятствие на стороне получателя</b> (он ограничил приём подарков) или{" "}
      <b>сбой на этапе оплаты</b>. Сначала определите, где именно всё остановилось — «пополнить баланс» чаще
      всего не решение.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#bosqich", label: "На каком этапе сбой" },
          { href: "#jadval", label: "Диагностика по признаку" },
          { href: "#balans", label: "Баланс и итоговая сумма" },
          { href: "#sovga", label: "Ограничения самого подарка" },
          { href: "#qabul", label: "Сторона получателя" },
          { href: "#otkazish", label: "Передача коллекционного" },
          { href: "#tolov", label: "Если деньги списались" },
          { href: "#support", label: "Что писать в поддержку" },
        ]}
      />

      <h2 id="bosqich">Сначала определите: на каком этапе возникла ошибка?</h2>
      <p>
        За одной фразой «подарок не отправляется» могут скрываться три совершенно разные проблемы. Смешивать их —
        значит терять время:
      </p>
      <InfoGrid>
        <InfoCard emoji="🛒" title="1. Не проходит покупка">
          Останавливается на выборе или оплате подарка. Причина чаще всего в самом подарке.
        </InfoCard>
        <InfoCard emoji="📤" title="2. Не передаётся имеющийся">
          Не получается передать подарок, который у вас уже есть. Это отдельный набор ограничений.
        </InfoCard>
        <InfoCard emoji="⏳" title="3. Оплаченный заказ не доходит">
          Деньги списались, подарка не видно. Это проблема этапа доставки.
        </InfoCard>
      </InfoGrid>
      <p>
        Разделы ниже разбирают эти три случая по отдельности. Обычный порядок отправки подарка — в{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">отдельном руководстве</Link>.
      </p>

      <h2 id="jadval">Быстрая диагностика по признаку</h2>
      <DiagnosisTable locale="ru" />

      <h2 id="balans">Проверка баланса Stars и итоговой суммы</h2>
      <p>
        Это самая простая проверка, поэтому с неё и стоит начать. Но помните: нехватка баланса — лишь одна из
        причин, и о ней обычно сообщают отдельным понятным сообщением.
      </p>
      <Steps>
        <Step title="1. Посмотрите стоимость подарка в звёздах">Число в каталоге — цена именно этого подарка.</Step>
        <Step title="2. Сравните с балансом">Баланс звёзд виден в настройках Telegram.</Step>
        <Step title="3. Пополняйте, только если причина в этом">
          Если появляется другое сообщение, пополнение не поможет — смотрите разделы ниже.
        </Step>
      </Steps>
      <p>
        Если звёзды нужны —{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">покупка Stars в сумах</Link>.
      </p>

      <h2 id="sovga">Какие ограничения могут быть у самого подарка</h2>
      <p>
        В документации Telegram по подаркам описано несколько состояний, при которых отправка невозможна. Это не
        ошибки — это правила продукта:
      </p>
      <KeyFacts label="Ограничения из документации">
        <li>
          <b>Распродан</b> — если подарок перешёл в состояние «sold out», купить его уже нельзя.
        </li>
        <li>
          <b>Ограниченный тираж</b> — у подарка считается остаток; когда он заканчивается, покупка прекращается.
        </li>
        <li>
          <b>Лимит на одного пользователя</b> — у части подарков ограничено количество на человека.
        </li>
        <li>
          <b>Требование Premium</b> — для некоторых подарков активная подписка Telegram Premium нужна{" "}
          <b>у получателя</b>.
        </li>
        <li>
          <b>Блокировка по дате</b> — подарок может быть закрыт до определённой даты; приложение заранее проверяет
          возможность отправки и показывает причину.
        </li>
        <li>
          <b>Аукционные подарки</b> — они не проходят по обычному сценарию отправки и работают отдельно.
        </li>
      </KeyFacts>
      <p>
        Обратите внимание: <b>требование Premium относится к получателю</b>, а не к вам. То есть ваша подписка эту
        проблему не решит.
      </p>

      <h2 id="qabul">Проверка стороны получателя</h2>
      <p>
        В Telegram пользователь может сам ограничить приём подарков — это настройка приватности. Кроме того,
        видимость кнопки подарка зависит от настроек обеих сторон.
      </p>
      <Steps>
        <Step title="1. Попробуйте другого человека">
          Если тот же подарок уходит другому другу, проблема не в подарке, а на стороне получателя.
        </Step>
        <Step title="2. Попробуйте подарок другого типа">
          Ограничение может касаться отдельных типов; если обычный проходит, причина в этом.
        </Step>
        <Step title="3. Попросите его проверить настройки">
          Настройки приёма подарков и кнопки подарков он должен посмотреть сам.
        </Step>
        <Step title="4. Посмотрите значок Premium">
          Если подарок из тех, что требуют Premium, значок в его профиле обязателен.
        </Step>
      </Steps>

      <h2 id="otkazish">Ограничения при передаче коллекционного подарка</h2>
      <p>
        Передача уже имеющегося коллекционного подарка — отдельное действие со своими правилами. В документации
        указано следующее:
      </p>
      <KeyFacts label="Правила передачи">
        <li>
          <b>Самая ранняя дата передачи</b> — если у подарка она задана, раньше передать нельзя.
        </li>
        <li>
          <b>Стоимость передачи</b> — часть подарков требует дополнительных звёзд; если поле не задано, бесплатно.
        </li>
        <li>
          <b>Вывод в блокчейн</b> — для вывода в TON тоже может действовать своя самая ранняя дата.
        </li>
        <li>
          <b>Подарки с аукциона</b> — их нельзя обменять обратно на Stars.
        </li>
      </KeyFacts>
      <p>
        То есть «кнопка передачи не работает» — чаще не сбой, а условие по дате или стоимости. Эти данные видны в
        карточке подарка.
      </p>

      <h2 id="tolov">Если деньги списались: перед повторной оплатой</h2>
      <p>
        Самая дорогая ошибка — сразу заплатить ещё раз, не дождавшись ответа. В итоге появляются два заказа, и оба
        могут быть выполнены.
      </p>
      <Steps>
        <Step title="1. Обновите статус заказа">Закройте и снова откройте бота, посмотрите статус.</Step>
        <Step title="2. Проверьте профиль получателя">Подарок мог уже дойти.</Step>
        <Step title="3. Прочитайте уведомление банка">
          Деньги действительно списаны или только «заморожены» — это разные вещи.
        </Step>
        <Step title="4. И только потом пишите в поддержку">Повторная оплата — самый последний вариант.</Step>
      </Steps>

      <InlineCta text="Если не хватает звёзд — пополните в сумах." product={{ kind: "stars", amount: 100 }} />

      <h2 id="support">Что отправить в поддержку</h2>
      <p>Чем точнее обращение, тем быстрее ответ. Отправьте всё одним сообщением:</p>
      <KeyFacts label="Четыре пункта">
        <li>
          <b>ID заказа</b> — номер, выданный после оплаты.
        </li>
        <li>
          <b>Точное время</b> — дата и примерный час с указанием часового пояса.
        </li>
        <li>
          <b>Название подарка</b> — как он называется в каталоге, вместе с коллекцией.
        </li>
        <li>
          <b>Скриншот ошибки</b> — текст на экране должен быть виден целиком; личные данные закройте.
        </li>
      </KeyFacts>
      <p>
        Писать сюда —{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>
        .
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "ограничения и правила Gifts" },
          { href: "https://telegram.org/blog/gifts", label: "telegram.org/blog/gifts", note: "анонс подарков" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Sovg‘a yuborilmayapti — birinchi navbatda nima qilaman?",
    answer:
      "Qaysi bosqichda to‘xtaganini aniqlang: xarid, mavjud sovg‘ani o‘tkazish yoki to‘langan buyurtmaning yetkazilishi. Ular uchun yechim boshqa-boshqa.",
  },
  {
    question: "Balansni to‘ldirsam hammasi hal bo‘ladimi?",
    answer:
      "Yo‘q. Balans yetishmasligi sabablarning faqat bittasi; tiraj tugashi, muddat qulfi yoki qabul qiluvchi sozlamalari to‘ldirish bilan hal bo‘lmaydi.",
  },
  {
    question: "Nega bu sovg‘a boshqa odamga ketdi-yu, bunga ketmadi?",
    answer:
      "Qabul qiluvchi sovg‘a qabul qilishni cheklagan bo‘lishi yoki sovg‘a undan faol Premium talab qilishi mumkin.",
  },
  {
    question: "Sovg‘a Premium talab qilsa, menda Premium bo‘lsa yetarlimi?",
    answer: "Yo‘q. Talab qabul qiluvchiga tegishli — Premium aynan uning akkauntida faol bo‘lishi kerak.",
  },
  {
    question: "Sovg‘a tugmasi umuman ko‘rinmayapti, sababi nima?",
    answer: "Sovg‘a tugmasining ko‘rinishi ikkala tomonning sozlamalariga bog‘liq — ikkalasini ham tekshiring.",
  },
  {
    question: "Kolleksion sovg‘ani nega o‘tkazolmayapman?",
    answer:
      "Sovg‘ada eng erta o‘tkazish sanasi belgilangan bo‘lishi yoki o‘tkazish uchun qo‘shimcha yulduz talab qilinishi mumkin.",
  },
  {
    question: "Pul yechildi, sovg‘a yo‘q — qayta to‘layaymi?",
    answer:
      "Yo‘q. Avval buyurtma statusini, qabul qiluvchi profilini va bank xabarnomasini tekshiring; qayta to‘lov ikkita buyurtmaga olib kelishi mumkin.",
  },
  {
    question: "Supportga nima yozaman?",
    answer: "Buyurtma ID, aniq vaqt, sovg‘a nomi va xato skrinshoti — bitta xabarda.",
  },
];

const ruFaq = [
  {
    question: "Подарок не отправляется — с чего начать?",
    answer:
      "Определите этап: покупка, передача имеющегося подарка или доставка оплаченного заказа. Решения у них разные.",
  },
  {
    question: "Если пополнить баланс, всё заработает?",
    answer:
      "Нет. Нехватка баланса — лишь одна из причин; исчерпанный тираж, блокировка по дате или настройки получателя пополнением не решаются.",
  },
  {
    question: "Почему этот подарок ушёл другому, а ему нет?",
    answer:
      "Получатель мог ограничить приём подарков, либо подарок требует от него активной подписки Premium.",
  },
  {
    question: "Если подарок требует Premium, хватит ли моей подписки?",
    answer: "Нет. Требование относится к получателю — Premium должен быть активен именно у него.",
  },
  {
    question: "Кнопка подарка вообще не видна, почему?",
    answer: "Видимость кнопки зависит от настроек обеих сторон — проверьте и свои, и его.",
  },
  {
    question: "Почему не получается передать коллекционный подарок?",
    answer:
      "У подарка может быть задана самая ранняя дата передачи либо требоваться дополнительные звёзды за передачу.",
  },
  {
    question: "Деньги списались, подарка нет — платить ещё раз?",
    answer:
      "Нет. Сначала проверьте статус заказа, профиль получателя и уведомление банка; повторная оплата может создать два заказа.",
  },
  {
    question: "Что писать в поддержку?",
    answer: "ID заказа, точное время, название подарка и скриншот ошибки — одним сообщением.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "problem",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  keywords: [
    "telegram gift yuborilmayapti",
    "telegram sovg‘a yuborib bo‘lmayapti",
    "gift yuborishda xatolik",
    "telegram gift tugmasi chiqmayapti",
    "stars bor lekin gift olmayapti",
    "telegram sovg‘a ketmayapti",
  ],
  locales: {
    uz: {
      title: "Telegram Gift yuborilmayapti: sababini qanday aniqlash mumkin?",
      excerpt:
        "Xarid, o‘tkazish va yetkazish muammolarini ajratish, belgi bo‘yicha diagnostika jadvali va sovg‘aning o‘zidagi rasmiy cheklovlar.",
      metaTitle: "Telegram Gift yuborilmayapti — sababini aniqlash",
      metaDescription:
        "Telegram sovg‘asi yuborilmasa: qaysi bosqichda to‘xtagani, tiraj va Premium talabi, qabul qiluvchi sozlamalari va pul yechilgan holat.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Yulduz yetishmayaptimi?",
      ctaBody: "@StarsPaymee_bot — so‘mda to‘ldiring, Click, Payme, Uzum, UzCard yoki HUMO orqali.",
      faq: uzFaq,
    },
    ru: {
      title: "Подарок в Telegram не отправляется: как найти причину",
      excerpt:
        "Как отделить покупку от передачи и доставки, таблица диагностики по признаку и официальные ограничения самого подарка.",
      metaTitle: "Подарок Telegram не отправляется — ищем причину",
      metaDescription:
        "Если подарок Telegram не отправляется: на каком этапе сбой, тираж и требование Premium, настройки получателя и что делать при списании.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Не хватает звёзд?",
      ctaBody: "@StarsPaymee_bot — пополните в сумах через Click, Payme, Uzum, UzCard или HUMO.",
      faq: ruFaq,
    },
  },
};
