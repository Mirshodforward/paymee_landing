import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "getgems-muqobili-nft-sovga-bozori";

/**
 * Getgems muqobili: NFT sovg‘ani VPN’siz, so‘mda qaysi bozordan olsa bo‘ladi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-11): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Getgems VPN bilan ochilmay qolgan o'zbek Telegram foydalanuvchisi NFT sovg'ani VPN'siz va so'mda qaysi bozordan xavfsiz ko'rish yoki olish mumkinligini «Getgems muqobili NFT sovg'a» deb qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-11):
 *   https://telegram.org/blog/collectible-gifts-and-more
 *   https://telegram.org/blog/wear-gifts-blockchain-and-more
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Getgems ochilmay qolsa, NFT sovg‘asiz qolmaysiz: boshqa yo‘llar bor. Kolleksion sovg‘a Telegram ichida bir egadan boshqasiga o‘tadi, shuning uchun tashqi sayt majburiy emas. Sovg‘ani so‘mda olmoqchi bo‘lsangiz, @StarsPaymee_bot’dagi NFT Market’dan foydalanasiz. U yerda VPN, TON hamyon va xalqaro karta so‘ralmaydi, oluvchining @username’i yetarli.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#getgems-ishlamasa-boshqa-bozor-izlash", label: "Getgems ishlamasa, boshqa bozor izlash shartmi?" },
          { href: "#muqobil-bozorlar-nimasi-bilan-farq", label: "Muqobil bozorlar nimasi bilan farq qiladi: sovg‘a qayerda turadi?" },
          { href: "#tort-yol-yonma-yon-qaysi", label: "To‘rt yo‘l yonma-yon: qaysi biri VPN’siz va so‘mda ishlaydi?" },
          { href: "#qaysi-vaziyatda-qaysi-yol-uch", label: "Qaysi vaziyatda qaysi yo‘l: uch misol" },
          { href: "#tashqi-ton-bozorini-tanlasangiz-nimani", label: "Tashqi TON bozorini tanlasangiz, nimani tayyorlaysiz?" },
          { href: "#botdagi-nft-marketdan-somda-xarid", label: "Botdagi NFT Market’dan so‘mda xarid: besh qadam" },
          { href: "#tolovdan-oldin-har-qanday-bozorda", label: "To‘lovdan oldin: har qanday bozorda ishlaydigan tekshiruv" },
          { href: "#muqobil-bozor-va-support-niqobidagi", label: "«Muqobil bozor» va «support» niqobidagi aldovlar" },
          { href: "#keyin-sotmoqchi-yoki-hamyonga-chiqarmoqchi", label: "Keyin sotmoqchi yoki hamyonga chiqarmoqchi bo‘lsangiz" },
        ]}
      />
      <h2 id="getgems-ishlamasa-boshqa-bozor-izlash">Getgems ishlamasa, boshqa bozor izlash shartmi?</h2>
      <p>Ba’zi kanallarda «Getgems VPN bilan kirganda “Kirish taqiqlangan” deb chiqaryapti» degan postlar tarqaldi. Bu gap faqat norasmiy kanallarda uchraydi. Rasmiy tasdiq ham, aniq sabab ham yo‘q. Getgems shartlarida qaysi davlatlar cheklangani va VPN’ga qanday qarashi ham bu maqolada tasdiqlanmagan.</p>
      <p>Telegram blogi birorta marketpleysni nomi bilan tilga olmaydi. U faqat umumiy qoidani aytadi: kolleksion sovg‘ani boshqa foydalanuvchiga berish yoki NFT marketplace’larda auksionga qo‘yish mumkin (<a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>). Getgems shu bozorlardan biri, yagonasi emas.</p>
      <p>Shuning uchun «sayt qachon ochiladi?» deb kutib o‘tirishdan ko‘ra, «mening vaziyatimda qaysi yo‘l qulay?» deb so‘rash foydaliroq. Quyida bloklov sababi taxmin qilinmaydi. Yo‘llar uch belgi bo‘yicha solishtiriladi: qayerda ochiladi, nima bilan to‘lanadi va qanday xavfi bor.</p>
      <h2 id="muqobil-bozorlar-nimasi-bilan-farq">Muqobil bozorlar nimasi bilan farq qiladi: sovg‘a qayerda turadi?</h2>
      <p>Bozorlar orasidagi asosiy farq — sovg‘aning qayerda saqlanishi. Bu yerda ikki holat bor.</p>
      <p><b>Birinchi holat: sovg‘a Telegram profilida.</b> Oddiy sovg‘a upgrade qilingach kolleksionga aylanadi va maxsus atributlar oladi. Upgrade uchun oz miqdorda Stars to‘lanadi, ular blokcheyn to‘lovlarini qoplashga ketadi. Shundan keyin ham sovg‘a ko‘pincha profilda qoladi va uni boshqa foydalanuvchiga darhol berish mumkin.</p>
      <p><b>Ikkinchi holat: sovg‘a TON hamyonida.</b> Egasi sovg‘ani blokcheynga chiqarishi mumkin. Telegram buni rasman qo‘llab-quvvatlaydi: sovg‘ani TON orqali boshqa egaga o‘tkazish yoki auksionga qo‘yish mumkin. Hamyondagi sovg‘ani auksion saytlari kabi tashqi xizmatlarga ham ulasa bo‘ladi (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>).</p>
      <p>Xaridor uchun bu shuni anglatadi. Tashqi marketpleysdagi e’lon odatda blokcheynga chiqarilgan nusxa bo‘ladi va uni olish uchun hamyon kerak. Telegram ichidagi nusxa esa hamyonsiz, profildan profilga o‘tadi. Sovg‘a qanday chiqarilishi <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">NFT sovg‘ani blokcheynga o‘tkazish</Link> maqolasida qadamlari bilan yozilgan.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="tort-yol-yonma-yon-qaysi">To‘rt yo‘l yonma-yon: qaysi biri VPN’siz va so‘mda ishlaydi?</h2>
      <CompareTable
        headers={["Yo‘l", "Qayerda ochiladi", "To‘lov", "TON hamyon", "VPN", "Kimga mos"]}
        rows={[
          ["Telegram ichida sovg‘a olib, upgrade qilish", "Telegram ilovasi", "Stars", "Kerak emas", "Kerak emas", "Kolleksiyani noldan boshlovchiga"],
          ["Tashqi TON marketpleyslar (Getgems va boshqalar)", "Brauzer yoki mini ilova", "Sayt shartiga qarab, odatda kripto", "Kerak", "Tasdiqlanmagan, sayt shartiga bog‘liq", "Hamyoni bor va kriptoni tushunadiganga"],
          ["@StarsPaymee_bot, NFT Market", "Telegram boti", "So‘m: Click, Payme, Uzum, Paynet, UzCard/HUMO, bot balansi", "Kerak emas", "Kerak emas", "Tayyor nusxani so‘mda olmoqchi bo‘lganga"],
          ["Egasidan to‘g‘ridan-to‘g‘ri", "Shaxsiy chat", "Kelishuvga qarab", "Holatga bog‘liq", "Kerak emas", "Faqat tanish, ishonchli odam bilan"],
        ]}
      />
      <p>Birinchi yo‘l uchun Stars kerak. Ularni so‘mda <Link href="/stars">/stars</Link> sahifasi orqali olish mumkin. 1 ta Stars karta o‘tkazmasi yoki bot balansidan {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali esa {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")} turadi. Eng kam buyurtma — 50 Stars.</p>
      <p>Tashqi saytlarning komissiyasi, ishlash tartibi va qaysi hududlarga ochiqligi bu maqolada tekshirilmagan. Ulardan foydalansangiz, qoidalarini o‘zingiz o‘qib chiqing.</p>
      <Notice label={"Muhim"}>Getgems haqidagi postlarda boshqa bozorlar va VPN botlar referal havola bilan reklama qilingan. Ular tekshirilmagan, shuning uchun bu yerda tavsiya qilinmaydi.</Notice>
      <h2 id="qaysi-vaziyatda-qaysi-yol-uch">Qaysi vaziyatda qaysi yo‘l: uch misol</h2>
      <p><b>Aziza do‘stining tug‘ilgan kuniga tayyor nusxa olmoqchi.</b> Uning Click’i bor, kripto hamyoni yo‘q. Unga botdagi NFT Market qulay: nusxani tanlaydi, do‘stining @username’ini yozadi va so‘mda to‘laydi.</p>
      <p><b>Jasur kolleksiyani o‘zi boshlamoqchi.</b> U tayyor noyob nusxa izlamayapti, sovg‘ani o‘zi upgrade qilmoqchi. Bunga Telegram ichidagi yo‘l mos keladi, faqat Stars balansi kerak bo‘ladi. Upgrade’ning aniq narxini Telegram ilovada ko‘rsatadi.</p>
      <p><b>Bekzodning TON hamyoni bor, kriptoni biladi.</b> U ma’lum bir atributli nusxani izlayapti. Tashqi bozor unga ko‘proq tanlov berishi mumkin. Lekin VPN yoki notanish proksi orqali hamyon ulashdan oldin sayt shartlarini o‘qishi kerak.</p>
      <p>Agar hozircha faqat ko‘rib chiqmoqchi bo‘lsangiz, tashqi saytga kirishingiz shart emas. Kolleksion sovg‘alar egalarining profilidagi sovg‘alar bo‘limida va sovg‘a havolasi orqali Telegram ichida ko‘rinadi. Botdagi bozorda esa nusxa narxini tanlash bosqichida so‘mda ko‘rasiz.</p>
      <h2 id="tashqi-ton-bozorini-tanlasangiz-nimani">Tashqi TON bozorini tanlasangiz, nimani tayyorlaysiz?</h2>
      <p>Click yoki UzCard bilan to‘lashga o‘rgangan odam uchun bu yo‘lda qo‘shimcha bosqichlar bor. Avval kripto olinadi, so‘ng hamyonga o‘tkaziladi. Keyin hamyon saytga ulanadi va tranzaksiya tasdiqlanadi.</p>
      <ul>
        <li><b>TON hamyon va balans.</b> Sovg‘ani tashqi xizmatlarga ulash hamyon orqali ishlaydi, shuning uchun avval hamyon ochilgan bo‘lishi kerak.</li>
        <li><b>Seed ibora.</b> Blokcheyndagi sovg‘a ustidan nazorat egasida qoladi, hatto u Telegram akkauntiga kira olmay qolsa yoki uni o‘chirsa ham. Lekin buning teskari tomoni bor: seed iborani yo‘qotgan yoki birovga bergan odam sovg‘asidan ham ayriladi.</li>
        <li><b>Sayt shartlari.</b> Getgems’ning taqiqlangan davlatlar ro‘yxati va VPN haqidagi bandi topilmadi. Xariddan oldin amaldagi qoidalarni saytning o‘zida o‘qing.</li>
        <li><b>Notanish VPN yoki proksi.</b> Hamyon ulash va tranzaksiya imzolashni begona server orqali o‘tkazish qo‘shimcha xavf tug‘diradi. Ulanish operatori nimalarni ko‘ra olishi <Link href="/blog/telegram-proksi-ulash-xavfsizmi">Telegram proksi xavfsizligi</Link> maqolasida tushuntirilgan.</li>
      </ul>
      <h2 id="botdagi-nft-marketdan-somda-xarid">Botdagi NFT Market’dan so‘mda xarid: besh qadam</h2>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> ga kiring va NFT Market bo‘limini tanlang.</Step>
        <Step title={"Nusxani tanlang"}>kolleksiyani, ko‘rinishini va nusxa raqamini solishtiring. Har bir nusxaning narxi botda ko‘rsatiladi.</Step>
        <Step title={"@username kiriting"}>o‘zingizniki yoki sovg‘a oluvchiniki. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi. Username’ni qayerdan topish va tekshirishni <Link href="/blog/telegram-stars-username-qanday-topiladi">username qo‘llanmasi</Link>dan ko‘ring.</Step>
        <Step title={"To‘lov usulini tanlang"}>Click, Payme, Uzum, Paynet (ilova yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Xalqaro karta, kripto hamyon va VPN kerak emas.</Step>
        <Step title={"Yetib kelganini tekshiring"}>buyurtma odatda bir necha soniyada avtomatik yetkaziladi. Sovg‘a oluvchi profilidagi sovg‘alar bo‘limida paydo bo‘ladi.</Step>
      </Steps>
      <p>Bozor qanday ishlashi <Link href="/blog/starspaymee-nft-market">NFT Market</Link> maqolasida, sovg‘a turlari esa <Link href="/gifts">/gifts</Link> sahifasida jamlangan.</p>
      <p>Bir istisnoni yodda tuting: Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi. Botdagi NFT Market’da tayyor kolleksion (NFT) nusxalar sotiladi.</p>
      <h2 id="tolovdan-oldin-har-qanday-bozorda">To‘lovdan oldin: har qanday bozorda ishlaydigan tekshiruv</h2>
      <p>Qaysi yo‘lni tanlasangiz ham, pul o‘tkazishdan oldin quyidagilarni ko‘zdan kechiring.</p>
      <ul>
        <li><b>Nom va raqam.</b> Kolleksiya nomi, nusxa raqami va sovg‘a havolasi e’londagi ma’lumot bilan bir xil bo‘lishi kerak.</li>
        <li><b>Atributlar.</b> Nusxaning ko‘rinishi narxga ta’sir qiladi. Shuning uchun bir kolleksiyadagi ikki o‘xshash nusxa har xil narxda turishi mumkin.</li>
        <li><b>Blokcheyn izi.</b> Hamyonga chiqarilgan nusxaning tranzaksiyalari ko‘rinadi, ammo barcha oldingi egalar doim ham ko‘rinavermaydi. Batafsil tartib <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">NFT sovg‘a tarixini tekshirish</Link> maqolasida bor.</li>
        <li><b>G‘ayrioddiy arzon narx.</b> O‘xshash nusxalardan ancha arzon taklif ko‘pincha aldovdan darak beradi.</li>
        <li><b>Shoshiltirish.</b> «Faqat 10 daqiqa qoldi» kabi bosim sotuvchi tekshiruvdan qochayotganini bildirishi mumkin.</li>
      </ul>
      <h2 id="muqobil-bozor-va-support-niqobidagi">«Muqobil bozor» va «support» niqobidagi aldovlar</h2>
      <p>Postlarda Getgems yordam xizmati bloklovni olib tashlash uchun IP manzil so‘ragani aytiladi. Bu rasman tasdiqlanmagan. Lekin bunday shov-shuv paytida firibgarlar faollashadi: o‘zini «yordamchi» deb tanishtirib, shaxsiy xabar yozishni boshlaydi.</p>
      <Notice label={"Muhim"}>Hech kimga bermang: seed ibora, Telegram SMS kodi, 2FA paroli va hamyon kalitlari. Haqiqiy xizmat bularni chatda so‘ramaydi.</Notice>
      <p>Quyidagi so‘rovlardan birini olsangiz, suhbatni to‘xtating:</p>
      <ul>
        <li>«Bloklovni yechish uchun sovg‘ani vaqtincha bizga o‘tkazing.»</li>
        <li>«Hamyoningiz faolligini tasdiqlash uchun ozgina TON yuboring.»</li>
        <li>«Bizning yangi bozorimizda komissiya yo‘q, hamyoningizni shu havola orqali ulang.»</li>
      </ul>
      <p>Sayt manzilini postdagi havoladan emas, o‘zingiz qo‘lda yozib oching. Referal havola sizni o‘xshash nomli boshqa domenga olib borishi mumkin. Sizga birinchi bo‘lib yozgan «yordamchi»ga javob bermang. Murojaatni xizmat o‘zi ko‘rsatgan kanal orqali qiling.</p>
      <h2 id="keyin-sotmoqchi-yoki-hamyonga-chiqarmoqchi">Keyin sotmoqchi yoki hamyonga chiqarmoqchi bo‘lsangiz</h2>
      <p>Telegram qoidasiga ko‘ra, kolleksion sovg‘ani ilova ichida boshqa foydalanuvchiga berish yoki NFT marketplace’da auksionga qo‘yish mumkin. Xaridor tanish odam bo‘lsa, birinchi yo‘l tashqi saytsiz ishlaydi. Faqat to‘lov masalasini o‘zingiz hal qilasiz.</p>
      <p>Tashqi auksionga qo‘yish uchun sovg‘a avval blokcheynga chiqariladi. Buning uchun My Profile &gt; Gifts bo‘limida sovg‘ani tanlab, Transfer &gt; Send via Blockchain tugmalarini bosasiz. Qo‘shimcha shartlar bo‘lsa, Telegram ularni ilovaning o‘zida ko‘rsatadi.</p>
      <p>StarsPaymee Stars va sovg‘alarni foydalanuvchilardan sotib olmaydi, shuning uchun bot sotish kanali emas. Sotuvchilar uchun maslahatlar <Link href="/blog/telegram-gift-sotish">gift sotish qo‘llanmasi</Link>da jamlangan.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Getgems’ning O‘zbekistondagi holati haqida rasmiy ma’lumot bormi?", answer: "Topilmadi. VPN bilan kirishda xato chiqishi haqidagi gaplar norasmiy kanallardan tarqalgan, sayt shartlarida O‘zbekiston borligi ham tasdiqlanmagan." },
  { question: "Botdan olingan nusxa haqiqiy kolleksion sovg‘ami?", answer: "Ha, bu o‘sha Telegram kolleksion sovg‘asi. Farq sovg‘aning sotilish yo‘lida: tashqi bozordagi nusxa odatda hamyonda turadi, botdagisi esa so‘mda to‘lovdan keyin to‘g‘ridan-to‘g‘ri Telegram profiliga tushadi." },
  { question: "Kripto hamyonim yo‘q. NFT sovg‘a ola olamanmi?", answer: "Ola olasiz. Telegram ichidagi sovg‘a hamyonsiz o‘tadi, botdagi NFT Market’da esa @username va so‘mdagi to‘lov kifoya." },
  { question: "Sovg‘ani o‘zimga emas, singlimga olsam bo‘ladimi?", answer: "Bo‘ladi, buyurtmada uning @username’ini yozasiz. Har bir harfini qayta solishtiring: xato username bilan sovg‘a begona akkauntga ketadi." },
  { question: "Sayt ochilmasa, hamyonimdagi NFT sovg‘aga biror narsa bo‘ladimi?", answer: "Blokcheyndagi sovg‘a ustidan nazorat hamyon egasida qoladi, saytga kira olmaslik buni o‘zgartirmaydi. Asosiy xavf — o‘zini «support» deb tanishtirgan odamga seed iborani berib qo‘yish." },
  { question: "Referal havolali «yangi marketpleys» postini qanday baholayman?", answer: "Reklama ishonch belgisi emas. Hamyon ulashdan oldin domen manzilini, foydalanish shartlarini va mustaqil foydalanuvchilar fikrini o‘zingiz tekshiring." },
  { question: "Bir kolleksiyadagi nusxalar nega har xil narxda?", answer: "Har bir nusxaning atributlari va raqami har xil, narx shunga qarab o‘zgaradi. Botda har bir nusxaning so‘mdagi narxi tanlash paytida ko‘rinadi." },
  { question: "Telegram sotuvdan olgan limited sovg‘ani botdan olsa bo‘ladimi?", answer: "Yo‘q, bunday sovg‘alarni botlar yubora olmaydi. Botda tayyor kolleksion nusxalarni tanlash mumkin." },
  { question: "Botdan olgan sovg‘amni keyin TON hamyonga o‘tkaza olamanmi?", answer: "Telegram kolleksion sovg‘ani blokcheynga chiqarishga ruxsat beradi: My Profile > Gifts, so‘ng Transfer > Send via Blockchain. Kerakli shartlarni ilova o‘zi ko‘rsatadi." },
  { question: "To‘lov qildim, sovg‘a profilda ko‘rinmayapti. Nima qilaman?", answer: "Avval sovg‘alar bo‘limini yangilab, buyurtmadagi username’ni tekshiring. Baribir ko‘rinmasa, buyurtma ma’lumotlari bilan @StarsPaymeeSupport ga yozing." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Если Getgems перестал открываться, без NFT-подарка вы не останетесь: есть другие пути. Коллекционный подарок переходит от одного владельца к другому прямо внутри Telegram, поэтому внешний сайт не обязателен. Чтобы купить подарок за сумы, используйте NFT Market в @StarsPaymee_bot. Там не нужны VPN, TON-кошелёк и международная карта — достаточно @username получателя.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#getgems-ishlamasa-boshqa-bozor-izlash", label: "Если Getgems не работает, нужно ли искать другую площадку?" },
          { href: "#muqobil-bozorlar-nimasi-bilan-farq", label: "Чем отличаются альтернативные площадки: где хранится подарок?" },
          { href: "#tort-yol-yonma-yon-qaysi", label: "Четыре способа рядом: какой работает без VPN и за сумы?" },
          { href: "#qaysi-vaziyatda-qaysi-yol-uch", label: "Какой способ в какой ситуации: три примера" },
          { href: "#tashqi-ton-bozorini-tanlasangiz-nimani", label: "Если выбираете внешнюю TON-площадку: что подготовить?" },
          { href: "#botdagi-nft-marketdan-somda-xarid", label: "Покупка за сумы в NFT Market бота: пять шагов" },
          { href: "#tolovdan-oldin-har-qanday-bozorda", label: "Перед оплатой: проверка, которая работает на любой площадке" },
          { href: "#muqobil-bozor-va-support-niqobidagi", label: "Обман под видом «альтернативной площадки» и «поддержки»" },
          { href: "#keyin-sotmoqchi-yoki-hamyonga-chiqarmoqchi", label: "Если потом захотите продать или вывести в кошелёк" },
        ]}
      />
      <h2 id="getgems-ishlamasa-boshqa-bozor-izlash">Если Getgems не работает, нужно ли искать другую площадку?</h2>
      <p>В некоторых каналах разошлись посты о том, что «Getgems при входе через VPN выдаёт „Доступ запрещён“». Такие сообщения встречаются только в неофициальных каналах. Официального подтверждения нет, точной причины тоже. Какие страны ограничены в правилах Getgems и как площадка относится к VPN, в этой статье не подтверждено.</p>
      <p>Блог Telegram не называет ни одну площадку по имени. Он описывает только общее правило: коллекционный подарок можно передать другому пользователю или выставить на аукцион на NFT-маркетплейсах (<a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">блог Telegram</a>). Getgems — одна из таких площадок, но не единственная.</p>
      <p>Поэтому полезнее не ждать, «когда откроется сайт», а спросить себя: «какой путь удобнее в моей ситуации?». Ниже мы не гадаем о причинах блокировки. Способы сравниваются по трём признакам: где открываются, чем оплачиваются и какие риски несут.</p>
      <h2 id="muqobil-bozorlar-nimasi-bilan-farq">Чем отличаются альтернативные площадки: где хранится подарок?</h2>
      <p>Главное различие между площадками — где хранится подарок. Тут возможны два варианта.</p>
      <p><b>Вариант первый: подарок в профиле Telegram.</b> Обычный подарок после улучшения (upgrade) становится коллекционным и получает особые атрибуты. За улучшение платится небольшое количество Stars — они идут на покрытие комиссий блокчейна. После этого подарок чаще всего остаётся в профиле, и его можно мгновенно передать другому пользователю.</p>
      <p><b>Вариант второй: подарок в TON-кошельке.</b> Владелец может вывести подарок в блокчейн. Telegram официально это поддерживает: подарок можно передать другому владельцу или выставить на аукцион через TON. Подарок из кошелька можно подключить и к внешним сервисам, например к аукционным сайтам (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">блог Telegram</a>).</p>
      <p>Для покупателя это значит следующее. Объявление на внешнем маркетплейсе обычно касается экземпляра, уже выведенного в блокчейн, и для покупки нужен кошелёк. Экземпляр внутри Telegram переходит из профиля в профиль без кошелька. Как выводится подарок, пошагово описано в статье <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">о переводе NFT-подарка в блокчейн</Link>.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="tort-yol-yonma-yon-qaysi">Четыре способа рядом: какой работает без VPN и за сумы?</h2>
      <CompareTable
        headers={["Способ", "Где открывается", "Оплата", "TON-кошелёк", "VPN", "Кому подходит"]}
        rows={[
          ["Получить подарок внутри Telegram и улучшить его", "Приложение Telegram", "Stars", "Не нужен", "Не нужен", "Тем, кто начинает коллекцию с нуля"],
          ["Внешние TON-маркетплейсы (Getgems и другие)", "Браузер или мини-приложение", "По правилам сайта, обычно крипта", "Нужен", "Не подтверждено, зависит от правил сайта", "Тем, у кого есть кошелёк и кто разбирается в крипте"],
          ["@StarsPaymee_bot, NFT Market", "Telegram-бот", "Сумы: Click, Payme, Uzum, Paynet, UzCard/HUMO, баланс бота", "Не нужен", "Не нужен", "Тем, кто хочет купить готовый экземпляр за сумы"],
          ["Напрямую у владельца", "Личный чат", "По договорённости", "Зависит от ситуации", "Не нужен", "Только со знакомым, надёжным человеком"],
        ]}
      />
      <p>Для первого способа нужны Stars. Их можно купить за сумы на странице <Link href="/stars">/stars</Link>. 1 Star стоит {som(STARS_PER_UNIT_UZS, "ru")} при переводе на карту или с баланса бота и {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} — через Click, Payme, Uzum или Paynet. Минимальный заказ — 50 Stars.</p>
      <p>Комиссии внешних сайтов, порядок их работы и доступность в разных регионах в этой статье не проверялись. Если пользуетесь ими, прочитайте правила сами.</p>
      <Notice label={"Важно"}>В постах о Getgems другие площадки и VPN-боты рекламировались по реферальным ссылкам. Они не проверены, поэтому здесь не рекомендуются.</Notice>
      <h2 id="qaysi-vaziyatda-qaysi-yol-uch">Какой способ в какой ситуации: три примера</h2>
      <p><b>Азиза хочет купить готовый экземпляр на день рождения подруги.</b> У неё есть Click, а криптокошелька нет. Ей удобен NFT Market в боте: она выбирает экземпляр, вписывает @username подруги и платит в сумах.</p>
      <p><b>Жасур хочет начать коллекцию сам.</b> Готовый редкий экземпляр он не ищет — хочет улучшить подарок самостоятельно. Ему подходит путь внутри Telegram, нужен только баланс Stars. Точную стоимость улучшения покажет приложение Telegram.</p>
      <p><b>У Бекзода есть TON-кошелёк, и он разбирается в крипте.</b> Он ищет экземпляр с конкретным атрибутом. Внешняя площадка может дать ему больший выбор. Но прежде чем подключать кошелёк через VPN или незнакомый прокси, ему стоит прочитать правила сайта.</p>
      <p>Если вы пока просто присматриваетесь, заходить на внешний сайт не обязательно. Коллекционные подарки видны внутри Telegram — в разделе подарков в профиле владельцев и по ссылке на подарок. А в NFT Market бота цену экземпляра в сумах вы увидите уже на этапе выбора.</p>
      <h2 id="tashqi-ton-bozorini-tanlasangiz-nimani">Если выбираете внешнюю TON-площадку: что подготовить?</h2>
      <p>Для того, кто привык платить через Click или UzCard, в этом пути есть лишние этапы. Сначала покупается крипта, затем она переводится в кошелёк. Потом кошелёк подключается к сайту и подтверждается транзакция.</p>
      <ul>
        <li><b>TON-кошелёк и баланс.</b> Подключение подарка к внешним сервисам работает через кошелёк, поэтому сначала его нужно создать.</li>
        <li><b>Сид-фраза.</b> Контроль над подарком в блокчейне остаётся у владельца, даже если он потеряет доступ к аккаунту Telegram или удалит его. Но есть и обратная сторона: кто потерял сид-фразу или отдал её другому, тот лишается и подарка.</li>
        <li><b>Правила сайта.</b> Список запрещённых стран и пункт о VPN в правилах Getgems найти не удалось. Перед покупкой прочитайте действующие правила на самом сайте.</li>
        <li><b>Незнакомый VPN или прокси.</b> Подключать кошелёк и подписывать транзакции через чужой сервер — дополнительный риск. Что может видеть оператор подключения, объясняется в статье <Link href="/blog/telegram-proksi-ulash-xavfsizmi">о безопасности прокси в Telegram</Link>.</li>
      </ul>
      <h2 id="botdagi-nft-marketdan-somda-xarid">Покупка за сумы в NFT Market бота: пять шагов</h2>
      <Steps>
        <Step title={"Откройте бота"}>зайдите в <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> и выберите раздел NFT Market.</Step>
        <Step title={"Выберите экземпляр"}>сравните коллекцию, внешний вид и номер экземпляра. Цена каждого экземпляра указана в боте.</Step>
        <Step title={"Введите @username"}>свой или получателя подарка. Пароль, SMS-код и вход в аккаунт не запрашиваются. Где найти и как проверить username, смотрите в <Link href="/blog/telegram-stars-username-qanday-topiladi">инструкции по username</Link>.</Step>
        <Step title={"Выберите способ оплаты"}>Click, Payme, Uzum, Paynet (в приложении или наличными через терминал), перевод на карту UzCard/HUMO или баланс бота. Международная карта, криптокошелёк и VPN не нужны.</Step>
        <Step title={"Проверьте доставку"}>заказ обычно доставляется автоматически за несколько секунд. Подарок появится в разделе подарков в профиле получателя.</Step>
      </Steps>
      <p>Как устроен маркет, рассказано в статье <Link href="/blog/starspaymee-nft-market">о NFT Market</Link>, а виды подарков собраны на странице <Link href="/gifts">/gifts</Link>.</p>
      <p>Помните об одном исключении: лимитированные подарки, которые Telegram снял с продажи, боты отправить не могут. В NFT Market бота продаются готовые коллекционные (NFT) экземпляры.</p>
      <h2 id="tolovdan-oldin-har-qanday-bozorda">Перед оплатой: проверка, которая работает на любой площадке</h2>
      <p>Какой бы путь вы ни выбрали, перед переводом денег проверьте следующее.</p>
      <ul>
        <li><b>Название и номер.</b> Название коллекции, номер экземпляра и ссылка на подарок должны совпадать с данными в объявлении.</li>
        <li><b>Атрибуты.</b> Внешний вид экземпляра влияет на цену. Поэтому два похожих экземпляра из одной коллекции могут стоить по-разному.</li>
        <li><b>След в блокчейне.</b> У экземпляра, выведенного в кошелёк, видны транзакции, но все прежние владельцы видны не всегда. Подробный порядок — в статье <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">о проверке истории NFT-подарка</Link>.</li>
        <li><b>Подозрительно низкая цена.</b> Предложение заметно дешевле похожих экземпляров часто говорит об обмане.</li>
        <li><b>Давление по времени.</b> Фразы вроде «осталось всего 10 минут» могут означать, что продавец уходит от проверки.</li>
      </ul>
      <h2 id="muqobil-bozor-va-support-niqobidagi">Обман под видом «альтернативной площадки» и «поддержки»</h2>
      <p>В постах утверждается, что поддержка Getgems просила IP-адрес, чтобы снять блокировку. Официально это не подтверждено. Но на волне такого ажиотажа активизируются мошенники: представляются «помощниками» и начинают писать в личку.</p>
      <Notice label={"Важно"}>Никому не передавайте: сид-фразу, SMS-код Telegram, пароль 2FA и ключи от кошелька. Настоящий сервис не просит их в чате.</Notice>
      <p>Если получили одну из таких просьб, прекращайте разговор:</p>
      <ul>
        <li>«Чтобы снять блокировку, временно переведите подарок нам».</li>
        <li>«Отправьте немного TON, чтобы подтвердить активность кошелька».</li>
        <li>«На нашей новой площадке нет комиссии, подключите кошелёк по этой ссылке».</li>
      </ul>
      <p>Открывайте адрес сайта, набрав его вручную, а не по ссылке из поста. Реферальная ссылка может привести на другой домен с похожим названием. Не отвечайте «помощнику», который написал вам первым. Обращайтесь через канал, который указал сам сервис.</p>
      <h2 id="keyin-sotmoqchi-yoki-hamyonga-chiqarmoqchi">Если потом захотите продать или вывести в кошелёк</h2>
      <p>По правилам Telegram коллекционный подарок можно передать другому пользователю внутри приложения или выставить на аукцион на NFT-маркетплейсе. Если покупатель — знакомый человек, первый путь работает без внешнего сайта. Вопрос оплаты в этом случае вы решаете сами.</p>
      <p>Чтобы выставить подарок на внешний аукцион, его сначала выводят в блокчейн. Для этого в разделе My Profile &gt; Gifts выберите подарок и нажмите Transfer &gt; Send via Blockchain. Если есть дополнительные условия, Telegram покажет их прямо в приложении.</p>
      <p>StarsPaymee не покупает Stars и подарки у пользователей, поэтому бот — не канал продажи. Советы для продавцов собраны в <Link href="/blog/telegram-gift-sotish">инструкции по продаже подарков</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Есть ли официальная информация о работе Getgems в Узбекистане?", answer: "Найти её не удалось. Разговоры об ошибке при входе через VPN идут из неофициальных каналов, а наличие Узбекистана в правилах сайта тоже не подтверждено." },
  { question: "Экземпляр из бота — это настоящий коллекционный подарок?", answer: "Да, это тот же коллекционный подарок Telegram. Разница в способе продажи: на внешней площадке экземпляр обычно лежит в кошельке, а из бота он после оплаты в сумах сразу попадает в профиль Telegram." },
  { question: "У меня нет криптокошелька. Смогу ли я получить NFT-подарок?", answer: "Сможете. Подарок внутри Telegram передаётся без кошелька, а в NFT Market бота хватит @username и оплаты в сумах." },
  { question: "Можно купить подарок не себе, а сестре?", answer: "Можно — укажите в заказе её @username. Сверьте каждую букву: с ошибкой в username подарок уйдёт на чужой аккаунт." },
  { question: "Если сайт не открывается, что-то случится с NFT-подарком в моём кошельке?", answer: "Контроль над подарком в блокчейне остаётся у владельца кошелька, и недоступность сайта этого не меняет. Главный риск — отдать сид-фразу человеку, который назвался «поддержкой»." },
  { question: "Как оценить пост про «новый маркетплейс» с реферальной ссылкой?", answer: "Реклама — не признак надёжности. Прежде чем подключать кошелёк, сами проверьте адрес домена, условия использования и отзывы независимых пользователей." },
  { question: "Почему экземпляры из одной коллекции стоят по-разному?", answer: "У каждого экземпляра свои атрибуты и номер, от них и зависит цена. В боте цена каждого экземпляра в сумах видна при выборе." },
  { question: "Можно ли купить в боте лимитированный подарок, снятый Telegram с продажи?", answer: "Нет, такие подарки боты отправить не могут. В боте можно выбрать готовые коллекционные экземпляры." },
  { question: "Смогу ли я потом перевести подарок из бота в TON-кошелёк?", answer: "Telegram разрешает выводить коллекционный подарок в блокчейн: My Profile > Gifts, затем Transfer > Send via Blockchain. Нужные условия приложение покажет само." },
  { question: "Я оплатил, а подарка в профиле нет. Что делать?", answer: "Сначала обновите раздел подарков и проверьте username в заказе. Если подарок так и не появился, напишите в @StarsPaymeeSupport с данными заказа." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>If Getgems won’t open, you can still get an NFT gift. Collectible gifts move from one owner to another inside Telegram, so an outside website isn’t required. To pay in Uzbek so’m, use the NFT Market in @StarsPaymee_bot. It doesn’t ask for a VPN, a TON wallet or an international card. The recipient’s @username is enough.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#getgems-ishlamasa-boshqa-bozor-izlash", label: "If Getgems isn’t working, do you need another marketplace?" },
          { href: "#muqobil-bozorlar-nimasi-bilan-farq", label: "How do the alternatives differ: where does the gift live?" },
          { href: "#tort-yol-yonma-yon-qaysi", label: "Four routes side by side: which work without a VPN and in so’m?" },
          { href: "#qaysi-vaziyatda-qaysi-yol-uch", label: "Which route for which situation: three examples" },
          { href: "#tashqi-ton-bozorini-tanlasangiz-nimani", label: "Choosing an outside TON marketplace: what do you need to prepare?" },
          { href: "#botdagi-nft-marketdan-somda-xarid", label: "Buying from the bot’s NFT Market in so’m: five steps" },
          { href: "#tolovdan-oldin-har-qanday-bozorda", label: "Before you pay: a check that works on any marketplace" },
          { href: "#muqobil-bozor-va-support-niqobidagi", label: "Scams disguised as an “alternative marketplace” or “support”" },
          { href: "#keyin-sotmoqchi-yoki-hamyonga-chiqarmoqchi", label: "If you later want to sell or move the gift to a wallet" },
        ]}
      />
      <h2 id="getgems-ishlamasa-boshqa-bozor-izlash">If Getgems isn’t working, do you need another marketplace?</h2>
      <p>Some channels have shared posts claiming that “Getgems shows ‘Access denied’ when you connect through a VPN.” These claims appear only in unofficial channels. There is no official confirmation and no stated reason. This article also couldn’t confirm which countries Getgems restricts in its terms or how it treats VPN use.</p>
      <p>The Telegram blog doesn’t name any specific marketplace. It only states the general rule: a collectible gift can be transferred to another user or auctioned on NFT marketplaces (<a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a>). Getgems is one of those marketplaces, not the only one.</p>
      <p>So instead of waiting for the site to come back, ask which route suits your situation. This article doesn’t guess why the site is blocked. It compares the routes on three points: where it opens, how you pay and what the risks are.</p>
      <h2 id="muqobil-bozorlar-nimasi-bilan-farq">How do the alternatives differ: where does the gift live?</h2>
      <p>The main difference between marketplaces is where the gift is stored. There are two cases.</p>
      <p><b>Case one: the gift is in a Telegram profile.</b> A regular gift becomes collectible after an upgrade and receives special attributes. The upgrade costs a small amount of Stars, which go toward blockchain fees. Even after that, the gift usually stays in the profile and can be passed to another user instantly.</p>
      <p><b>Case two: the gift is in a TON wallet.</b> The owner can move the gift to the blockchain. Telegram officially supports this: a gift can be transferred to another owner or auctioned via TON. A gift in a wallet can also be connected to outside services such as auction sites (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a>).</p>
      <p>For a buyer, this means the following. A listing on an outside marketplace is usually a copy that has been moved to the blockchain, and you need a wallet to buy it. A copy inside Telegram moves from profile to profile with no wallet at all. The steps for moving a gift on-chain are in our guide on <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">moving an NFT gift to the blockchain</Link>.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="tort-yol-yonma-yon-qaysi">Four routes side by side: which work without a VPN and in so’m?</h2>
      <CompareTable
        headers={["Route", "Where it opens", "Payment", "TON wallet", "VPN", "Best for"]}
        rows={[
          ["Buy a gift in Telegram and upgrade it", "Telegram app", "Stars", "Not needed", "Not needed", "Someone starting a collection from scratch"],
          ["Outside TON marketplaces (Getgems and others)", "Browser or mini app", "Depends on the site, usually crypto", "Needed", "Unconfirmed, depends on site terms", "Someone with a wallet who understands crypto"],
          ["@StarsPaymee_bot, NFT Market", "Telegram bot", "So’m: Click, Payme, Uzum, Paynet, UzCard/HUMO, bot balance", "Not needed", "Not needed", "Someone who wants a ready-made copy paid in so’m"],
          ["Directly from the owner", "Private chat", "By agreement", "Depends on the case", "Not needed", "Only with someone you know and trust"],
        ]}
      />
      <p>The first route needs Stars. You can buy them in so’m on the <Link href="/stars">/stars</Link> page. One Star costs {som(STARS_PER_UNIT_UZS, "en")} by card transfer or from the bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. The minimum order is 50 Stars.</p>
      <p>This article hasn’t checked the fees, procedures or regional availability of outside sites. If you use them, read their rules yourself.</p>
      <Notice label={"Important"}>Posts about Getgems have promoted other marketplaces and VPN bots through referral links. They haven’t been checked, so they aren’t recommended here.</Notice>
      <h2 id="qaysi-vaziyatda-qaysi-yol-uch">Which route for which situation: three examples</h2>
      <p><b>Aziza wants a ready-made copy for a friend’s birthday.</b> She has Click but no crypto wallet. The bot’s NFT Market suits her: she picks a copy, enters her friend’s @username and pays in so’m.</p>
      <p><b>Jasur wants to start his own collection.</b> He isn’t looking for a rare ready-made copy. He wants to upgrade a gift himself. The in-Telegram route fits him, as long as he has a Stars balance. Telegram shows the exact upgrade cost in the app.</p>
      <p><b>Bekzod has a TON wallet and knows crypto.</b> He’s hunting for a copy with a specific attribute. An outside marketplace may give him more choice. But before connecting his wallet through a VPN or an unknown proxy, he should read the site’s terms.</p>
      <p>If you only want to browse for now, you don’t need an outside site. Collectible gifts are visible inside Telegram, in the gifts section of their owners’ profiles and through gift links. In the bot’s market, you see each copy’s price in so’m when you select it.</p>
      <h2 id="tashqi-ton-bozorini-tanlasangiz-nimani">Choosing an outside TON marketplace: what do you need to prepare?</h2>
      <p>If you’re used to paying with Click or UzCard, this route has extra steps. First you buy crypto, then send it to a wallet. Next you connect the wallet to the site and confirm the transaction.</p>
      <ul>
        <li><b>A TON wallet with a balance.</b> Connecting a gift to outside services works through a wallet, so you need one set up first.</li>
        <li><b>Your seed phrase.</b> The owner keeps control of an on-chain gift, even after losing access to or deleting their Telegram account. The flip side: anyone who loses their seed phrase or hands it to someone else loses the gift too.</li>
        <li><b>The site’s terms.</b> We couldn’t find Getgems’ list of restricted countries or any clause about VPNs. Read the current rules on the site itself before buying.</li>
        <li><b>An unknown VPN or proxy.</b> Routing wallet connections and transaction signing through a stranger’s server adds risk. What a connection operator can see is explained in our article on <Link href="/blog/telegram-proksi-ulash-xavfsizmi">Telegram proxy safety</Link>.</li>
      </ul>
      <h2 id="botdagi-nft-marketdan-somda-xarid">Buying from the bot’s NFT Market in so’m: five steps</h2>
      <Steps>
        <Step title={"Open the bot"}>go to <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> and choose the NFT Market section.</Step>
        <Step title={"Pick a copy"}>compare the collection, the look and the copy number. Each copy’s price is shown in the bot.</Step>
        <Step title={"Enter the @username"}>yours or the recipient’s. No password, SMS code or account access is requested. See the <Link href="/blog/telegram-stars-username-qanday-topiladi">username guide</Link> for how to find and double-check it.</Step>
        <Step title={"Choose a payment method"}>Click, Payme, Uzum, Paynet (including cash via the app or a terminal), UzCard/HUMO card transfer or bot balance. No international card, crypto wallet or VPN is needed.</Step>
        <Step title={"Confirm delivery"}>orders are usually delivered automatically within a few seconds. The gift appears in the gifts section of the recipient’s profile.</Step>
      </Steps>
      <p>How the market works is covered in the <Link href="/blog/starspaymee-nft-market">NFT Market</Link> article, and gift types are collected on the <Link href="/gifts">/gifts</Link> page.</p>
      <p>Keep one exception in mind: bots can’t send limited gifts that Telegram has removed from sale. The bot’s NFT Market sells ready-made collectible (NFT) copies.</p>
      <h2 id="tolovdan-oldin-har-qanday-bozorda">Before you pay: a check that works on any marketplace</h2>
      <p>Whichever route you choose, review the following before sending money.</p>
      <ul>
        <li><b>Name and number.</b> The collection name, copy number and gift link should match the listing.</li>
        <li><b>Attributes.</b> A copy’s look affects its price. That’s why two similar copies from the same collection can cost different amounts.</li>
        <li><b>Blockchain trail.</b> Transactions of a copy moved to a wallet are visible, but not every previous owner always shows up. The full process is in our guide on <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">checking an NFT gift’s history</Link>.</li>
        <li><b>A suspiciously low price.</b> An offer far cheaper than similar copies is often a sign of a scam.</li>
        <li><b>Pressure.</b> Lines like “only 10 minutes left” may mean the seller is trying to dodge your checks.</li>
      </ul>
      <h2 id="muqobil-bozor-va-support-niqobidagi">Scams disguised as an “alternative marketplace” or “support”</h2>
      <p>Some posts say Getgems support asked users for their IP address to lift the block. This isn’t officially confirmed. But scammers get busy whenever there’s buzz like this: they introduce themselves as “helpers” and start sending private messages.</p>
      <Notice label={"Important"}>Never share your seed phrase, Telegram SMS code, 2FA password or wallet keys. A genuine service won’t ask for them in a chat.</Notice>
      <p>If you receive any of these requests, end the conversation:</p>
      <ul>
        <li>“Transfer the gift to us temporarily so we can lift the block.”</li>
        <li>“Send a little TON to verify your wallet is active.”</li>
        <li>“Our new marketplace has zero fees — connect your wallet through this link.”</li>
      </ul>
      <p>Type the site address yourself instead of tapping a link in a post. A referral link can lead to a lookalike domain. Don’t reply to a “helper” who messages you first. Contact a service only through the channel it lists itself.</p>
      <h2 id="keyin-sotmoqchi-yoki-hamyonga-chiqarmoqchi">If you later want to sell or move the gift to a wallet</h2>
      <p>Under Telegram’s rules, a collectible gift can be transferred to another user inside the app or auctioned on an NFT marketplace. If the buyer is someone you know, the first option works without any outside site. You just handle the payment between yourselves.</p>
      <p>To list it on an outside auction, the gift first has to be moved to the blockchain. Go to My Profile &gt; Gifts, tap the gift, then select Transfer &gt; Send via Blockchain. If there are extra conditions, Telegram shows them in the app.</p>
      <p>StarsPaymee doesn’t buy Stars or gifts from users, so the bot isn’t a sales channel. Tips for sellers are collected in our <Link href="/blog/telegram-gift-sotish">gift selling guide</Link>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Is there any official information about Getgems’ status in Uzbekistan?", answer: "None was found. Reports of errors when connecting through a VPN come from unofficial channels, and it isn’t confirmed whether Uzbekistan appears in the site’s terms." },
  { question: "Is a copy bought through the bot a genuine collectible gift?", answer: "Yes, it’s the same Telegram collectible gift. The difference is how it’s sold: a copy on an outside marketplace usually sits in a wallet, while one from the bot lands straight in a Telegram profile after you pay in so’m." },
  { question: "I don’t have a crypto wallet. Can I still get an NFT gift?", answer: "You can. Gifts inside Telegram move without a wallet, and the bot’s NFT Market only needs an @username and a payment in so’m." },
  { question: "Can I buy the gift for my sister instead of myself?", answer: "Yes, just enter her @username in the order. Check every character carefully, because a wrong username sends the gift to someone else’s account." },
  { question: "If the site won’t open, does anything happen to the NFT gift in my wallet?", answer: "The wallet owner keeps control of an on-chain gift, and being unable to reach a website doesn’t change that. The real risk is handing your seed phrase to someone posing as “support.”" },
  { question: "How should I judge a post promoting a “new marketplace” with a referral link?", answer: "Advertising isn’t a sign of trust. Before connecting a wallet, check the domain, the terms of use and independent user feedback yourself." },
  { question: "Why do copies from the same collection have different prices?", answer: "Each copy has its own attributes and number, and the price varies accordingly. In the bot, each copy’s price in so’m is shown when you select it." },
  { question: "Can I buy a limited gift that Telegram has removed from sale through the bot?", answer: "No, bots can’t send those gifts. In the bot you can choose from ready-made collectible copies." },
  { question: "Can I move a gift I bought through the bot to a TON wallet later?", answer: "Telegram lets you move a collectible gift to the blockchain via My Profile > Gifts, then Transfer > Send via Blockchain. The app itself shows any conditions that apply." },
  { question: "I’ve paid, but the gift isn’t showing in the profile. What should I do?", answer: "First refresh the gifts section and check the username on the order. If it still doesn’t appear, message @StarsPaymeeSupport with your order details." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  keywords: ["getgems muqobili nft sovga","getgems ochilmayapti","nft sovga somda sotib olish","nft sovga bozori vpnsiz","telegram nft gift qayerdan olish","kolleksion sovga sotib olish","альтернатива getgems","getgems не открывается vpn","купить nft подарок telegram","маркетплейс подарков telegram","nft подарки без vpn"],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot ga kiring va NFT Market bo‘limini tanlang." },
    { name: "Nusxani tanlang", text: "kolleksiyani, ko‘rinishini va nusxa raqamini solishtiring. Har bir nusxaning narxi botda ko‘rsatiladi." },
    { name: "@username kiriting", text: "o‘zingizniki yoki sovg‘a oluvchiniki. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi. Username’ni qayerdan topish va tekshirishni username qo‘llanmasidan ko‘ring." },
    { name: "To‘lov usulini tanlang", text: "Click, Payme, Uzum, Paynet (ilova yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Xalqaro karta, kripto hamyon va VPN kerak emas." },
    { name: "Yetib kelganini tekshiring", text: "buyurtma odatda bir necha soniyada avtomatik yetkaziladi. Sovg‘a oluvchi profilidagi sovg‘alar bo‘limida paydo bo‘ladi." },
  ],
  locales: {
    uz: {
      title: "Getgems muqobili: NFT sovg‘ani VPN’siz, so‘mda qaysi bozordan olsa bo‘ladi?",
      excerpt: "Getgems ochilmasa, NFT sovg‘ani Telegram ichida yoki @StarsPaymee_bot’dagi NFT Market’dan so‘mda, VPN’siz olsa bo‘ladi. Maqolada to‘rt yo‘l, xarid qadamlari va aldov belgilari bor.",
      metaTitle: "Getgems muqobili: NFT sovg‘ani VPN’siz",
      metaDescription: "Getgems ochilmasa, NFT sovg‘ani Telegram ichida yoki @StarsPaymee_bot’dagi NFT Market’dan so‘mda, VPN’siz olsa bo‘ladi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Альтернатива Getgems: где купить NFT-подарок без VPN и за сумы?",
      excerpt: "Если Getgems не открывается, NFT-подарок можно получить внутри Telegram или купить за сумы в NFT Market бота @StarsPaymee_bot без VPN. В статье — четыре способа, шаги покупки и признаки обмана.",
      metaTitle: "Альтернатива Getgems: где купить NFT-подарок без VPN",
      metaDescription: "Если Getgems не открывается, NFT-подарок можно получить внутри Telegram или купить за сумы в NFT Market бота @StarsPaymee_bot без VPN.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Getgems Alternative: Where to Buy a Telegram NFT Gift Without a VPN, in UZS",
      excerpt: "If Getgems won’t open, you can get an NFT gift inside Telegram or from the NFT Market in @StarsPaymee_bot, paying in so’m with no VPN. This guide covers four routes, buying steps and scam signs.",
      metaTitle: "Getgems Alternative: Where to Buy a Telegram NFT Gift",
      metaDescription: "If Getgems won’t open, you can get an NFT gift inside Telegram or from the NFT Market in @StarsPaymee_bot, paying in so’m with no VPN.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
