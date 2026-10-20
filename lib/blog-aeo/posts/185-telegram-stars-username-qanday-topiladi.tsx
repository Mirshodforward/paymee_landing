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

const SLUG = "telegram-stars-username-qanday-topiladi";

/**
 * Stars xaridi uchun @username qayerdan topiladi va qanday tekshiriladi.
 *
 * NEGA ALOHIDA SAHIFA (2026-10-15): «username qayerdan topiladi / kimniki
 * yoziladi» — alohida qidiruv niyati, saytda to'liq maqola yo'q edi. Yaqin
 * sahifalar: 24 (xatolar ro'yxati — username bitta guruh), /stars (FAQ),
 * 13 (Premium sovg'a). Bu sahifa faqat username'ni topish, qo'yish va
 * tekshirishni yoritadi; xarid oqimini takrorlamaydi — /stars va
 * «boshqa odamga Stars» maqolasiga havola beradi.
 *
 * Botdagi faktlar (frontend/src/pages/Stars/Stars.jsx, 2026-10-15):
 *   - username yozilgach 2 soniyada profil avtomatik qidiriladi;
 *   - topilmasa buyurtma ochilmaydi — «Foydalanuvchi topilmadi!»;
 *   - «O'zim» tugmasi Telegram'dan o'z username'ini oladi; username yo'q
 *     bo'lsa — «Telegram username topilmadi» va qo'llanma;
 *   - @ belgisi va bo'sh joylar tozalanadi (cleanUsernameValue).
 * Telegram qoidalari: username 5–32 belgi, lotin harf, raqam va «_»,
 * katta-kichik harf farqlanmaydi; ko'rinadigan ism — boshqa narsa.
 */

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram username — profilingizdagi <b>@ bilan boshlanadigan noyob nom</b>. O‘zingiznikini{" "}
      <b>Sozlamalar → Profilni tahrirlash → Username</b> qatoridan ko‘rasiz; do‘stingiznikini uning
      profilini ochib olasiz. Stars xaridida aynan shu nom yoziladi — ism yoki telefon raqami emas.{" "}
      <b>@StarsPaymee_bot</b> username’ni 2 soniyada tekshiradi: profil topilmasa, buyurtma ochilmaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Username nima va u ismdan qanday farq qiladi" },
          { href: "#ozimniki", label: "O‘z username’ingizni topish" },
          { href: "#boshqaniki", label: "Boshqa odamning username’ini olish" },
          { href: "#yoq", label: "Username yo‘q bo‘lsa — qanday qo‘yiladi" },
          { href: "#botda", label: "Botda username qanday tekshiriladi" },
          { href: "#xatolar", label: "Eng ko‘p uchraydigan xatolar" },
        ]}
      />

      <h2 id="nima">Username nima va u ismdan qanday farq qiladi</h2>
      <p>
        Telegram’da har bir odamning ikki xil «nomi» bor. <b>Ism</b> — profil ustida ko‘rinadigan matn,
        uni istalgan odam istalgan ko‘rinishda yozishi mumkin, shuning uchun bir xil ismli odamlar juda
        ko‘p. <b>Username</b> esa noyob: bitta nom faqat bitta akkauntga tegishli va u @ bilan yoziladi,
        masalan <b>@example_user</b>.
      </p>
      <CompareTable
        headers={["", "Ism", "Username"]}
        rows={[
          [<strong key="a">Ko‘rinishi</strong>, "Ali, Aziza, «Boss» — istalgan matn", "@ali_tashkent — lotin harf, raqam, pastki chiziq"],
          [<strong key="b">Noyobmi</strong>, "Yo‘q — bir xil ismlilar ko‘p", "Ha — bitta akkauntga tegishli"],
          [<strong key="c">Stars xaridida</strong>, "Ishlatilmaydi", "Aynan shu yoziladi"],
          [<strong key="d">Telefon raqami o‘rniga</strong>, "—", "Ha — raqamni bermasdan topish mumkin"],
        ]}
      />
      <KeyFacts label="Telegram qoidalari">
        <li>
          <b>5–32 belgi</b>, faqat lotin harflar, raqamlar va pastki chiziq «_».
        </li>
        <li>
          <b>Katta-kichik harf farqlanmaydi</b>: @Ali_Tashkent va @ali_tashkent — bitta akkaunt.
        </li>
        <li>
          <b>Hamma uchun ochiq</b>: username’ni bilgan odam profilni topa oladi, lekin hech qanday kirish
          huquqi olmaydi.
        </li>
      </KeyFacts>

      <h2 id="ozimniki">O‘z username’ingizni topish</h2>
      <Steps>
        <Step title="1. Telefonda (iPhone yoki Android)">
          Telegram’ni oching → <b>Sozlamalar</b> → yuqoridagi profilingiz → <b>Username</b> qatori. Shu
          yerda yozilgan nom — sizning username’ingiz. Bosib ushlab tursangiz, nusxalash mumkin.
        </Step>
        <Step title="2. Kompyuterda (Telegram Desktop)">
          Chap yuqoridagi menyu → <b>Settings</b> → <b>Edit profile</b> → <b>Username</b>.
        </Step>
        <Step title="3. Eng tez yo‘li — botning o‘zida">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          da Stars bo‘limini ochib <b>«O‘zim»</b> tugmasini bossangiz, bot username’ingizni Telegram’dan
          o‘zi oladi — qo‘lda yozish shart emas.
        </Step>
      </Steps>

      <h2 id="boshqaniki">Boshqa odamning username’ini olish</h2>
      <p>
        Stars’ni do‘stingizga olib bermoqchi bo‘lsangiz, uning username’ini <b>profilidan</b> oling: chatni
        oching → yuqoridagi ismini bosing → profil oynasida @ bilan yozilgan qator chiqadi. Uni bosib
        nusxalang va botga <b>joylashtiring</b> — qo‘lda terib yozganda bitta harf xato bo‘lsa, yulduzlar
        boshqa odamga ketadi.
      </p>
      <InfoGrid>
        <InfoCard emoji="✅" title="Ishonchli yo‘l">
          Username’ni odamning o‘zidan so‘rang yoki profilidan nusxalang, keyin botdagi tekshiruvda{" "}
          <b>ism va rasm</b> aynan o‘sha odamniki ekanini ko‘ring.
        </InfoCard>
        <InfoCard emoji="⚠️" title="Xavfli yo‘l">
          Ismga qarab qidirish, guruhdagi xabar ostidagi nomga ishonish yoki eski skrinshotdan yozish —
          username o‘zgargan bo‘lishi mumkin.
        </InfoCard>
      </InfoGrid>
      <p>
        Boshqa odamga olib berishning to‘liq tartibi (narx, qadamlar, u nima ko‘radi) —{" "}
        <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">alohida maqolada</Link>.
      </p>

      <h2 id="yoq">Username yo‘q bo‘lsa — qanday qo‘yiladi</h2>
      <p>
        Telegram’da username <b>majburiy emas</b>, shuning uchun ko‘pchilikda u yo‘q. Username’siz
        akkauntga Stars olib bo‘lmaydi — bot <b>«Telegram username topilmadi»</b> deb ko‘rsatadi. Qo‘yish
        bir daqiqa:
      </p>
      <Steps>
        <Step title="1. Sozlamalar → Username">
          Telefonda Sozlamalar → profil → <b>Username</b>; kompyuterda Settings → Edit profile → Username.
        </Step>
        <Step title="2. Nom yozing">
          Kamida 5 belgi, faqat lotin harflar, raqamlar va «_». Band bo‘lsa, Telegram darhol aytadi —
          boshqasini sinang.
        </Step>
        <Step title="3. Saqlang va tekshiring">
          Saqlagach, profilda @ bilan ko‘rinadi. Endi botda «O‘zim» tugmasi ishlaydi.
        </Step>
      </Steps>
      <Notice label="Boshqa odamga olib berayotgan bo‘lsangiz">
        Username’ni o‘sha odamning o‘zi qo‘yishi kerak — siz uning akkauntini sozlay olmaysiz. Unga shu
        maqolani yuboring; qo‘ygach, nomini sizga aytadi.
      </Notice>

      <h2 id="botda">Botda username qanday tekshiriladi</h2>
      <p>
        Botga username yozganingizdan <b>2 soniya o‘tgach</b> u profilni o‘zi qidiradi va topilsa{" "}
        <b>ism, rasm va @nom</b> bilan kartochka ko‘rsatadi. Buyurtma faqat profil topilganda ochiladi:
        yozuv xato bo‘lsa, <b>«Foydalanuvchi topilmadi!»</b> chiqadi va to‘lovgacha bormaysiz — ya’ni
        mavjud bo‘lmagan nomga pul to‘lab qo‘yish mumkin emas.
      </p>
      <KeyFacts label="Yozishda bilib qo‘ying">
        <li>
          <b>@ belgisi shart emas</b> — @ bilan ham, @siz ham qabul qilinadi, bo‘sh joylar olib tashlanadi.
        </li>
        <li>
          <b>Katta-kichik harf</b> ahamiyatsiz.
        </li>
        <li>
          <b>Havola ham bo‘ladi</b>: t.me/example_user ko‘rinishidagi havoladagi oxirgi qism — username.
        </li>
        <li>
          Kartochkadagi <b>ism va rasmga qarang</b> — nom to‘g‘ri, lekin boshqa odam bo‘lishi mumkin.
        </li>
      </KeyFacts>
      <InlineCta text="Username’ni tekshirib ko‘ring — bot profilni 2 soniyada topadi." product={{ kind: "stars", amount: 100 }} />

      <h2 id="xatolar">Eng ko‘p uchraydigan xatolar</h2>
      <InfoGrid>
        <InfoCard emoji="🔤" title="Bitta harf xato">
          @ali_tashkent o‘rniga @ali_tashkent1 — boshqa odamning akkaunti. Yetkazilgan Stars’ni qaytarib
          bo‘lmaydi, shuning uchun kartochkadagi ismni tekshiring.
        </InfoCard>
        <InfoCard emoji="👤" title="Ism yozib qo‘yish">
          «Ali Valiyev» — bu username emas. Bot uni topa olmaydi.
        </InfoCard>
        <InfoCard emoji="🔄" title="O‘zgargan username">
          Do‘stingiz nomini o‘zgartirgan bo‘lishi mumkin; eski nom bo‘sh qolsa, bot topmaydi, boshqa odam
          olgan bo‘lsa — unga ketadi. Yuborishdan oldin so‘rang.
        </InfoCard>
        <InfoCard emoji="🙃" title="O‘zinikini yozib qo‘yish">
          Sovg‘a qilaman deb o‘z username’ingizni qoldirish — yulduzlar o‘zingizga tushadi. Kartochkani
          ko‘ring.
        </InfoCard>
      </InfoGrid>
      <p>
        Stars xarididagi barcha tipik xatolar — to‘lov va firibgarlik bilan bog‘liqlari ham —{" "}
        <Link href="/blog/telegram-stars-sotib-olishda-xatolar">alohida ro‘yxatda</Link>.
      </p>
      <Notice label="Xavfsizlik">
        Username — ochiq ma’lumot, uni berish xavfsiz. Lekin Stars uchun hech kim sizdan{" "}
        <b>Telegram parolini, SMS-kodini yoki akkauntga kirishni</b> so‘ramasligi kerak — username oqimida
        bu kerak emas.
      </Notice>

      <Sources
        label="Foydali havolalar"
        items={[
          { href: "/stars", label: "Telegram Stars sotib olish", note: "narxlar va buyurtma" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "«O‘zim» tugmasi username’ni o‘zi oladi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Username в Telegram — <b>уникальное имя, которое начинается с @</b>. Свой вы видите в{" "}
      <b>Настройки → Изменить профиль → Имя пользователя</b>; чужой — в профиле этого человека. При
      покупке Stars вводится именно оно, а не имя и не номер телефона. <b>@StarsPaymee_bot</b> проверяет
      username за 2 секунды: если профиль не найден, заказ не откроется.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое username и чем он отличается от имени" },
          { href: "#ozimniki", label: "Как найти свой username" },
          { href: "#boshqaniki", label: "Как взять username другого человека" },
          { href: "#yoq", label: "Если username нет — как его задать" },
          { href: "#botda", label: "Как бот проверяет username" },
          { href: "#xatolar", label: "Самые частые ошибки" },
        ]}
      />

      <h2 id="nima">Что такое username и чем он отличается от имени</h2>
      <p>
        У каждого в Telegram два «имени». <b>Имя</b> — текст над профилем, его можно написать как угодно,
        поэтому людей с одинаковыми именами очень много. <b>Username</b> уникален: одно имя принадлежит
        только одному аккаунту и пишется с @, например <b>@example_user</b>.
      </p>
      <CompareTable
        headers={["", "Имя", "Username"]}
        rows={[
          [<strong key="a">Как выглядит</strong>, "Али, Азиза, «Boss» — любой текст", "@ali_tashkent — латиница, цифры, подчёркивание"],
          [<strong key="b">Уникально</strong>, "Нет — тёзок много", "Да — принадлежит одному аккаунту"],
          [<strong key="c">При покупке Stars</strong>, "Не используется", "Вводится именно оно"],
          [<strong key="d">Вместо номера телефона</strong>, "—", "Да — вас найдут, не зная номера"],
        ]}
      />
      <KeyFacts label="Правила Telegram">
        <li>
          <b>5–32 символа</b>, только латинские буквы, цифры и подчёркивание «_».
        </li>
        <li>
          <b>Регистр не важен</b>: @Ali_Tashkent и @ali_tashkent — один аккаунт.
        </li>
        <li>
          <b>Открытая информация</b>: тот, кто знает username, может найти профиль, но не получает доступа
          к аккаунту.
        </li>
      </KeyFacts>

      <h2 id="ozimniki">Как найти свой username</h2>
      <Steps>
        <Step title="1. На телефоне (iPhone или Android)">
          Откройте Telegram → <b>Настройки</b> → ваш профиль сверху → строка <b>Имя пользователя</b>. Это
          и есть ваш username; долгое нажатие — копировать.
        </Step>
        <Step title="2. На компьютере (Telegram Desktop)">
          Меню слева сверху → <b>Settings</b> → <b>Edit profile</b> → <b>Username</b>.
        </Step>
        <Step title="3. Самый быстрый путь — в самом боте">
          В{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          откройте раздел Stars и нажмите <b>«Я»</b> — бот возьмёт ваш username из Telegram сам,
          вводить вручную не нужно.
        </Step>
      </Steps>

      <h2 id="boshqaniki">Как взять username другого человека</h2>
      <p>
        Если покупаете Stars другу, берите username <b>из его профиля</b>: откройте чат → нажмите на имя
        сверху → в профиле будет строка с @. Нажмите на неё, скопируйте и <b>вставьте</b> в бота — при
        наборе вручную одна ошибочная буква отправит звёзды другому человеку.
      </p>
      <InfoGrid>
        <InfoCard emoji="✅" title="Надёжный путь">
          Спросите username у самого человека или скопируйте из профиля, а затем в карточке проверки в
          боте убедитесь, что <b>имя и фото</b> — именно его.
        </InfoCard>
        <InfoCard emoji="⚠️" title="Рискованный путь">
          Искать по имени, доверять подписи под сообщением в группе или переписывать со старого скриншота —
          username мог измениться.
        </InfoCard>
      </InfoGrid>
      <p>
        Полный порядок покупки для другого человека (цена, шаги, что он увидит) — в{" "}
        <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">отдельной статье</Link>.
      </p>

      <h2 id="yoq">Если username нет — как его задать</h2>
      <p>
        Username в Telegram <b>не обязателен</b>, поэтому у многих его нет. На аккаунт без username
        купить Stars нельзя — бот покажет <b>«Telegram username не найден»</b>. Задать его — минута:
      </p>
      <Steps>
        <Step title="1. Настройки → Имя пользователя">
          На телефоне: Настройки → профиль → <b>Имя пользователя</b>; на компьютере: Settings → Edit
          profile → Username.
        </Step>
        <Step title="2. Введите имя">
          Не меньше 5 символов, только латиница, цифры и «_». Если занято, Telegram сразу скажет —
          попробуйте другое.
        </Step>
        <Step title="3. Сохраните и проверьте">
          После сохранения оно появится в профиле с @. Теперь в боте работает кнопка «Я».
        </Step>
      </Steps>
      <Notice label="Если покупаете другому человеку">
        Username должен задать он сам — настроить чужой аккаунт вы не можете. Отправьте ему эту статью;
        когда задаст, пусть пришлёт имя.
      </Notice>

      <h2 id="botda">Как бот проверяет username</h2>
      <p>
        Через <b>2 секунды</b> после ввода бот сам ищет профиль и, если находит, показывает карточку с{" "}
        <b>именем, фото и @именем</b>. Заказ открывается только при найденном профиле: при ошибке в
        написании появится <b>«Пользователь не найден!»</b>, и до оплаты вы не дойдёте — заплатить за
        несуществующее имя невозможно.
      </p>
      <KeyFacts label="Полезно знать при вводе">
        <li>
          <b>Символ @ не обязателен</b> — принимается и с ним, и без; пробелы убираются.
        </li>
        <li>
          <b>Регистр</b> не важен.
        </li>
        <li>
          <b>Подойдёт и ссылка</b>: в t.me/example_user последняя часть — это username.
        </li>
        <li>
          Смотрите на <b>имя и фото в карточке</b> — имя может быть верным, а человек другим.
        </li>
      </KeyFacts>
      <InlineCta text="Проверьте username — бот найдёт профиль за 2 секунды." product={{ kind: "stars", amount: 100 }} />

      <h2 id="xatolar">Самые частые ошибки</h2>
      <InfoGrid>
        <InfoCard emoji="🔤" title="Одна буква не та">
          @ali_tashkent1 вместо @ali_tashkent — чужой аккаунт. Доставленные Stars вернуть нельзя, поэтому
          проверяйте имя в карточке.
        </InfoCard>
        <InfoCard emoji="👤" title="Ввести имя вместо username">
          «Али Валиев» — не username. Бот его не найдёт.
        </InfoCard>
        <InfoCard emoji="🔄" title="Username изменился">
          Друг мог сменить имя; если старое свободно, бот его не найдёт, а если занято другим — звёзды
          уйдут ему. Уточните перед отправкой.
        </InfoCard>
        <InfoCard emoji="🙃" title="Оставить своё имя">
          Хотели подарить, а оставили свой username — звёзды придут вам. Смотрите карточку.
        </InfoCard>
      </InfoGrid>
      <p>
        Все типичные ошибки при покупке Stars, включая оплату и мошенничество, —{" "}
        <Link href="/blog/telegram-stars-sotib-olishda-xatolar">в отдельном списке</Link>.
      </p>
      <Notice label="Безопасность">
        Username — открытые данные, сообщать его безопасно. Но для Stars никто не должен просить у вас{" "}
        <b>пароль от Telegram, SMS-код или вход в аккаунт</b> — в покупке по username это не нужно.
      </Notice>

      <Sources
        label="Полезные ссылки"
        items={[
          { href: "/stars", label: "Купить Telegram Stars", note: "цены и заказ" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "кнопка «Я» подставит username сама" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      A Telegram username is the <b>unique name that starts with @</b> in your profile. You will find
      yours under <b>Settings → Edit profile → Username</b>; a friend’s is in their profile. When you buy
      Stars, that name is what you enter — not a display name and not a phone number.{" "}
      <b>@StarsPaymee_bot</b> checks the username within 2 seconds: if the profile is not found, the order
      will not open.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nima", label: "What a username is and how it differs from a name" },
          { href: "#ozimniki", label: "Finding your own username" },
          { href: "#boshqaniki", label: "Getting someone else’s username" },
          { href: "#yoq", label: "No username yet — how to set one" },
          { href: "#botda", label: "How the bot checks the username" },
          { href: "#xatolar", label: "The most common mistakes" },
        ]}
      />

      <h2 id="nima">What a username is and how it differs from a name</h2>
      <p>
        Everyone on Telegram has two kinds of “name”. The <b>name</b> is the text above the profile; anyone
        can write anything there, so there are many people with the same name. A <b>username</b> is
        unique: one name belongs to one account only, and it is written with @, for example{" "}
        <b>@example_user</b>.
      </p>
      <CompareTable
        headers={["", "Name", "Username"]}
        rows={[
          [<strong key="a">What it looks like</strong>, "Ali, Aziza, “Boss” — any text", "@ali_tashkent — Latin letters, digits, underscore"],
          [<strong key="b">Unique</strong>, "No — many people share a name", "Yes — belongs to one account"],
          [<strong key="c">When buying Stars</strong>, "Not used", "This is what you enter"],
          [<strong key="d">Instead of a phone number</strong>, "—", "Yes — people find you without your number"],
        ]}
      />
      <KeyFacts label="Telegram’s rules">
        <li>
          <b>5–32 characters</b>, Latin letters, digits and the underscore “_” only.
        </li>
        <li>
          <b>Case does not matter</b>: @Ali_Tashkent and @ali_tashkent are the same account.
        </li>
        <li>
          <b>It is public</b>: anyone who knows the username can find the profile, but gets no access to
          the account.
        </li>
      </KeyFacts>

      <h2 id="ozimniki">Finding your own username</h2>
      <Steps>
        <Step title="1. On a phone (iPhone or Android)">
          Open Telegram → <b>Settings</b> → your profile at the top → the <b>Username</b> line. That is your
          username; press and hold to copy it.
        </Step>
        <Step title="2. On a computer (Telegram Desktop)">
          Menu at the top left → <b>Settings</b> → <b>Edit profile</b> → <b>Username</b>.
        </Step>
        <Step title="3. The quickest way — inside the bot">
          In{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          open the Stars section and tap <b>“Me”</b> — the bot takes your username from Telegram
          itself, nothing to type.
        </Step>
      </Steps>

      <h2 id="boshqaniki">Getting someone else’s username</h2>
      <p>
        If you are buying Stars for a friend, take the username <b>from their profile</b>: open the chat
        → tap their name at the top → the profile shows a line starting with @. Tap it to copy, then{" "}
        <b>paste</b> it into the bot — typing it by hand with one wrong letter sends the Stars to someone
        else.
      </p>
      <InfoGrid>
        <InfoCard emoji="✅" title="The safe way">
          Ask the person for their username or copy it from their profile, then make sure the{" "}
          <b>name and photo</b> in the bot’s check card are theirs.
        </InfoCard>
        <InfoCard emoji="⚠️" title="The risky way">
          Searching by name, trusting the label under a group message, or copying from an old screenshot
          — the username may have changed.
        </InfoCard>
      </InfoGrid>
      <p>
        The full process of buying for someone else (price, steps, what they see) is in{" "}
        <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">a separate article</Link>.
      </p>

      <h2 id="yoq">No username yet — how to set one</h2>
      <p>
        A username is <b>optional</b> on Telegram, so many people do not have one. Stars cannot be bought
        for an account without a username — the bot shows <b>“Telegram username not found”</b>. Setting
        one takes a minute:
      </p>
      <Steps>
        <Step title="1. Settings → Username">
          On a phone: Settings → profile → <b>Username</b>; on a computer: Settings → Edit profile →
          Username.
        </Step>
        <Step title="2. Type a name">
          At least 5 characters, Latin letters, digits and “_” only. If it is taken, Telegram says so at
          once — try another.
        </Step>
        <Step title="3. Save and check">
          Once saved it appears in your profile with @. The “Me” button in the bot now works.
        </Step>
      </Steps>
      <Notice label="If you are buying for someone else">
        The username has to be set by that person — you cannot change someone else’s account. Send them
        this article; once set, they can tell you the name.
      </Notice>

      <h2 id="botda">How the bot checks the username</h2>
      <p>
        <b>Two seconds</b> after you type the username, the bot looks the profile up itself and, if found,
        shows a card with the <b>name, photo and @name</b>. An order opens only when the profile is found:
        a misspelt name gives <b>“User not found!”</b> and you never reach payment — so you cannot pay for
        a name that does not exist.
      </p>
      <KeyFacts label="Good to know when typing">
        <li>
          <b>The @ is optional</b> — accepted with or without it; spaces are removed.
        </li>
        <li>
          <b>Case</b> does not matter.
        </li>
        <li>
          <b>A link works too</b>: in t.me/example_user, the last part is the username.
        </li>
        <li>
          Check the <b>name and photo on the card</b> — the name can be right and the person wrong.
        </li>
      </KeyFacts>
      <InlineCta text="Try the username — the bot finds the profile in 2 seconds." product={{ kind: "stars", amount: 100 }} />

      <h2 id="xatolar">The most common mistakes</h2>
      <InfoGrid>
        <InfoCard emoji="🔤" title="One letter off">
          @ali_tashkent1 instead of @ali_tashkent is someone else’s account. Delivered Stars cannot be
          taken back, so check the name on the card.
        </InfoCard>
        <InfoCard emoji="👤" title="Typing a name instead of a username">
          “Ali Valiyev” is not a username. The bot will not find it.
        </InfoCard>
        <InfoCard emoji="🔄" title="A changed username">
          Your friend may have changed theirs; if the old one is free, the bot will not find it, and if
          someone else took it, the Stars go to them. Ask before sending.
        </InfoCard>
        <InfoCard emoji="🙃" title="Leaving your own name in">
          Meant it as a gift but left your own username — the Stars land on you. Look at the card.
        </InfoCard>
      </InfoGrid>
      <p>
        Every typical mistake when buying Stars, including payment and scams, is{" "}
        <Link href="/blog/telegram-stars-sotib-olishda-xatolar">listed separately</Link>.
      </p>
      <Notice label="Security">
        A username is public information and safe to share. But nobody should ask you for your{" "}
        <b>Telegram password, SMS code or account access</b> for Stars — the username flow never needs
        them.
      </Notice>

      <Sources
        label="Useful links"
        items={[
          { href: "/stars", label: "Buy Telegram Stars", note: "prices and ordering" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "the “Me” button fills in your username" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Stars olishda username kimniki yoziladi?",
    answer:
      "Yulduzlar kimga tushishi kerak bo‘lsa — o‘shaniki. O‘zingizga olsangiz, botdagi «O‘zim» tugmasi username’ingizni o‘zi oladi; do‘stingizga olsangiz, uning profilidan nusxalang.",
  },
  {
    question: "Username bilan ism bir xilmi?",
    answer:
      "Yo‘q. Ism — profil ustidagi istalgan matn, bir xil ismlilar ko‘p. Username — @ bilan boshlanadigan noyob nom, faqat bitta akkauntga tegishli. Xaridda faqat username ishlatiladi.",
  },
  {
    question: "Username’im yo‘q — Stars ololmaymanmi?",
    answer:
      "Avval username qo‘ying: Sozlamalar → profil → Username, kamida 5 ta lotin belgi. Bir daqiqa oladi; keyin botda «O‘zim» tugmasi ishlaydi.",
  },
  {
    question: "@ belgisini yozish kerakmi?",
    answer: "Shart emas — bot @ bilan ham, @siz ham qabul qiladi, bo‘sh joylarni olib tashlaydi. Katta-kichik harf ham farq qilmaydi.",
  },
  {
    question: "Username’ni xato yozsam nima bo‘ladi?",
    answer:
      "Mavjud bo‘lmagan nomda bot «Foydalanuvchi topilmadi!» deydi va buyurtma ochilmaydi. Nom boshqa odamniki bo‘lsa, yulduzlar unga ketadi va qaytarib bo‘lmaydi — shuning uchun to‘lovdan oldin kartochkadagi ism va rasmni tekshiring.",
  },
  {
    question: "Telefon raqami bilan olib bo‘ladimi?",
    answer: "Yo‘q. Telegram raqam bo‘yicha Stars yuborishga ruxsat bermaydi — faqat username orqali.",
  },
  {
    question: "Username’ni berish xavfsizmi?",
    answer:
      "Ha, bu ochiq ma’lumot — uni bilgan odam profilni topadi, lekin akkauntga kira olmaydi. Parol, SMS-kod yoki kirish esa hech qachon so‘ralmaydi.",
  },
];

const ruFaq = [
  {
    question: "Чей username вводить при покупке Stars?",
    answer:
      "Того, кому должны прийти звёзды. Покупаете себе — кнопка «Я» в боте подставит ваш username; другу — скопируйте из его профиля.",
  },
  {
    question: "Username и имя — одно и то же?",
    answer:
      "Нет. Имя — любой текст над профилем, тёзок много. Username — уникальное имя с @, принадлежит одному аккаунту. При покупке используется только username.",
  },
  {
    question: "У меня нет username — я не смогу купить Stars?",
    answer:
      "Сначала задайте его: Настройки → профиль → Имя пользователя, не меньше 5 латинских символов. Это минута; после этого в боте работает кнопка «Я».",
  },
  {
    question: "Нужно ли писать символ @?",
    answer: "Не обязательно — бот принимает и с @, и без, пробелы убирает. Регистр тоже не важен.",
  },
  {
    question: "Что будет, если ввести username с ошибкой?",
    answer:
      "Если такого имени нет, бот скажет «Пользователь не найден!» и заказ не откроется. Если имя принадлежит другому человеку, звёзды уйдут ему и вернуть их нельзя — поэтому перед оплатой проверьте имя и фото в карточке.",
  },
  {
    question: "Можно купить по номеру телефона?",
    answer: "Нет. Telegram не позволяет отправлять Stars по номеру — только по username.",
  },
  {
    question: "Безопасно ли сообщать username?",
    answer:
      "Да, это открытые данные: зная его, профиль найдут, но в аккаунт не войдут. Пароль, SMS-код или вход никогда не запрашиваются.",
  },
];

const enFaq = [
  {
    question: "Whose username do I enter when buying Stars?",
    answer:
      "The person who should receive the Stars. Buying for yourself — the “Me” button in the bot fills in your username; for a friend — copy it from their profile.",
  },
  {
    question: "Are a username and a name the same thing?",
    answer:
      "No. The name is any text above the profile, and many people share one. A username is a unique name with @ that belongs to one account. Only the username is used for a purchase.",
  },
  {
    question: "I have no username — can I still buy Stars?",
    answer:
      "Set one first: Settings → profile → Username, at least 5 Latin characters. It takes a minute; after that the “Me” button in the bot works.",
  },
  {
    question: "Do I need to type the @?",
    answer: "No — the bot accepts it with or without @ and removes spaces. Case does not matter either.",
  },
  {
    question: "What happens if I misspell the username?",
    answer:
      "If no such name exists, the bot says “User not found!” and the order does not open. If the name belongs to someone else, the Stars go to them and cannot be recovered — so check the name and photo on the card before paying.",
  },
  {
    question: "Can I buy by phone number?",
    answer: "No. Telegram does not allow sending Stars by number — only by username.",
  },
  {
    question: "Is it safe to share my username?",
    answer:
      "Yes, it is public: anyone who knows it can find the profile but cannot get into the account. A password, SMS code or login is never asked for.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  keywords: [
    "telegram username qayerdan topiladi",
    "telegram username qanday qo‘yiladi",
    "stars olishda username",
    "username bilan ism farqi",
    "foydalanuvchi topilmadi telegram",
    "как узнать свой username в телеграм",
    "как создать username в телеграм",
    "find telegram username",
  ],
  howToSteps: [
    { name: "Sozlamalarni oching", text: "Telegram → Sozlamalar → profil → Username qatori." },
    { name: "Username’ni nusxalang", text: "Bosib ushlab turing va nusxalang; yo‘q bo‘lsa, 5+ lotin belgili nom qo‘ying." },
    { name: "Botga joylashtiring", text: "@StarsPaymee_bot da Stars bo‘limida username’ni yozing yoki «O‘zim»ni bosing." },
    { name: "Kartochkani tekshiring", text: "2 soniyada chiqqan ism va rasm kerakli odamniki ekanini ko‘ring." },
  ],
  locales: {
    uz: {
      title: "Telegram Stars sotib olish uchun username qanday topiladi va tekshiriladi",
      excerpt:
        "Username qayerda turadi, ismdan qanday farq qiladi, yo‘q bo‘lsa qanday qo‘yiladi va bot uni qanday tekshiradi. Xato akkauntga yulduz yubormaslik uchun qisqa qo‘llanma.",
      metaTitle: "Stars uchun Telegram username qayerdan topiladi",
      metaDescription:
        "Telegram username’ni Sozlamalar → Profil → Username’dan toping; yo‘q bo‘lsa 5+ belgili nom qo‘ying. Bot uni 2 soniyada tekshiradi — xato akkauntga yulduz ketmaydi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Username tayyormi? Stars oling",
      ctaBody: "Botda username’ni yozing yoki «O‘zim»ni bosing — profil 2 soniyada tekshiriladi, keyin miqdorni tanlaysiz.",
      faq: uzFaq,
    },
    ru: {
      title: "Как найти и проверить username для покупки Telegram Stars",
      excerpt:
        "Где находится username, чем он отличается от имени, как его задать, если его нет, и как бот его проверяет. Короткое руководство, чтобы звёзды не ушли не тому.",
      metaTitle: "Где найти Telegram username для покупки Stars",
      metaDescription:
        "Username в Telegram: Настройки → Профиль → Имя пользователя; если нет — задайте имя от 5 символов. Бот проверяет его за 2 секунды, звёзды не уйдут не тому.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Username готов? Купите Stars",
      ctaBody: "Введите username в боте или нажмите «Я» — профиль проверится за 2 секунды, затем выберите количество.",
      faq: ruFaq,
    },
    en: {
      title: "How to find and check a username before buying Telegram Stars",
      excerpt:
        "Where the username lives, how it differs from a name, how to set one if you have none, and how the bot checks it. A short guide so your Stars do not go to the wrong account.",
      metaTitle: "Where to find a Telegram username for Stars",
      metaDescription:
        "Find your Telegram username under Settings → Profile → Username; if you have none, set one of 5+ characters. The bot checks it in 2 seconds, so Stars never go astray.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Username ready? Buy Stars",
      ctaBody: "Enter the username in the bot or tap “Me” — the profile is checked in 2 seconds, then pick the amount.",
      faq: enFaq,
    },
  },
};
