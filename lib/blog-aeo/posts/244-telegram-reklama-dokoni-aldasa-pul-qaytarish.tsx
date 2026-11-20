import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-reklama-dokoni-aldasa-pul-qaytarish";

/**
 * Telegram reklamasidagi do‘kon aldadi: pulni qaytarsa bo‘ladimi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-20): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Telegram reklamasida ko‘rgan do‘kondan (masalan, Notcoin reklama qilgan Toygers) buyurtma berib aldangan yoki xarid qilmoqchi bo‘lgan foydalanuvchi «telegram reklamadagi do‘kon aldadi pulni qaytarish» so‘zi bilan qidiradi: pul Stars, karta yoki kripto bilan to‘langanda qaytariladimi va qaytarish e’lonini qanday tekshirish kerakligini bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-20):
 *   https://telegram.org/verify
 *   https://telegram.org/tos/eu-dsa
 *   https://telegram.org/faq
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;
const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.priceUzs ?? 0;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Telegram reklamasida ko‘rgan do‘kon aldagan bo‘lsa, pul o‘zicha qaytmaydi. Imkoniyat bor, lekin u qanday to‘laganingizga bog‘liq: Stars, bank kartasi, Click yoki Payme, kripto. Avval dalillarni saqlang va kartani himoyalang. Keyin to‘lov qilingan yo‘l orqali murojaat qiling. «Pulingizni qaytaramiz» deb yozganlarni esa alohida tekshiring.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#reklamada-korgan-dokon-aldasa-pul", label: "Reklamada ko‘rgan do‘kon aldasa, pul umuman qaytadimi?" },
          { href: "#pulni-qanday-tolagan-bolsangiz-qaysi", label: "Pulni qanday to‘lagan bo‘lsangiz, qaysi yo‘l bilan qaytarishga urinasiz?" },
          { href: "#aldanganingizni-sezgach-birinchi-soatlarda-nima", label: "Aldanganingizni sezgach, birinchi soatlarda nima qilasiz?" },
          { href: "#pul-qaytarilyapti-degan-elonni-qanday", label: "«Pul qaytarilyapti» degan e’lonni qanday tekshirasiz?" },
          { href: "#qaytarish-botiga-yozishdan-oldin-qaysi", label: "Qaytarish botiga yozishdan oldin: qaysi ma’lumotingiz ochiq qoladi?" },
          { href: "#ikkinchi-aldov-qanday-korinadi", label: "«Ikkinchi aldov» qanday ko‘rinadi?" },
          { href: "#telegram-ichida-va-undan-tashqarida", label: "Telegram ichida va undan tashqarida qayerga shikoyat qilinadi?" },
          { href: "#keyingi-xaridda-reklamadagi-dokonni-qanday", label: "Keyingi xaridda reklamadagi do‘konni qanday tekshirasiz?" },
          { href: "#stars-premium-va-sovgani-xavfsizroq", label: "Stars, Premium va sovg‘ani xavfsizroq qanday olsa bo‘ladi?" },
        ]}
      />
      <h2 id="reklamada-korgan-dokon-aldasa-pul">Reklamada ko‘rgan do‘kon aldasa, pul umuman qaytadimi?</h2>
      <p>Hech kim qaytishga kafolat bermaydi. Natija uch narsaga bog‘liq: sotuvchi qaytarishga rozi bo‘ladimi, to‘lovda vositachi bormidi va siz qanchalik tez harakat qildingiz. Shuning uchun dastlab pulni emas, dalillarni o‘ylang. Ikkinchi vazifa — yana aldanib qolmaslik: pul yo‘qotgan odamga firibgarlar ko‘pincha qayta yozadi.</p>
      <p>Kanalda reklama chiqqani do‘konni Telegram tekshirganini bildirmaydi. Telegram FAQ’da yozilishicha, uchinchi tomon bot yoki mini ilovasidan foydalansangiz, bu Telegram emas, boshqa tomonning xizmati hisoblanadi (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>). Bu gap AI xizmatlari misolida aytilgan, lekin mantiq do‘kon botlariga ham to‘g‘ri keladi: buyurtma uchun javobni sotuvchi beradi.</p>
      <p>Bir voqeani misol qilib olaylik. Telegram kanallarida tarqalgan xabarga ko‘ra, Notcoin loyihasi o‘zi reklama qilgan Toygers o‘yinchoqlari uchun to‘langan pulni qaytarishni boshlagan. Postda bot, unga yoziladigan buyruq, ajratilgan summa va to‘lov USDT (TON) bilan bo‘lishi ham ko‘rsatilgan. Bu tafsilotlarning birortasi rasmiy manbada tasdiqlanmagan. Bunday xabarni fakt deb emas, tekshirilishi kerak bo‘lgan da’vo deb qabul qiling. Stars tizimining o‘zi qanchalik xavfsiz ekanini <Link href="/blog/telegram-stars-xavfsizmi">Telegram Stars xavfsizmi</Link> maqolasida o‘qishingiz mumkin.</p>
      <h2 id="pulni-qanday-tolagan-bolsangiz-qaysi">Pulni qanday to‘lagan bo‘lsangiz, qaysi yo‘l bilan qaytarishga urinasiz?</h2>
      <p>Pul qaysi yo‘ldan ketgan bo‘lsa, murojaat ham avval o‘sha yo‘lga qilinadi. Quyidagi jadval taxminiy yo‘nalish beradi. Aniq tartibni har doim bank yoki xizmatning o‘zidan so‘rang.</p>
      <CompareTable
        headers={["To‘lov usuli", "Kimga murojaat qilasiz", "Nima tayyorlaysiz", "Qaytish imkoniyati"]}
        rows={[
          ["Telegram Stars (bot ichidagi to‘lov)", "Sotuvchi botning o‘zi va uning yordam xizmati", "Bot @username’i, sana, Stars miqdori, buyurtma raqami", "Sotuvchining shartlariga bog‘liq, botda tekshiring"],
          ["UzCard, HUMO yoki xalqaro karta", "Kartani chiqargan bank", "Chek, sana, summa, qabul qiluvchi nomi yoki karta raqami", "Bank tartibiga bog‘liq, bu maqolada tasdiqlanmagan"],
          ["Click, Payme, Uzum, Paynet", "To‘lov ilovasining yordam xizmati", "Tranzaksiya ID, chek skrinshoti", "Ilova qoidasiga bog‘liq, supportdan so‘rang"],
          ["Kripto (TON, USDT)", "Faqat sotuvchining o‘zi", "Tranzaksiya xeshi, ikki tomonning hamyon manzili", "Past: majburan qaytaradigan vositachi yo‘q deb hisoblang"],
          ["Shaxsiy kartaga o‘tkazma yoki naqd", "Bank, katta summada huquq-tartibot organlari", "Chek, yozishmalar, sotuvchi haqidagi barcha ma’lumot", "Eng qiyin holat"],
        ]}
      />
      <p>Bir misol. Dilnoza bot ichida Stars bilan sumka uchun to‘ladi, Jasur esa o‘sha do‘konga notanish shaxsning kartasiga pul o‘tkazdi. Dilnoza avval botning yordam xizmatiga yozadi, Jasur esa o‘z bankiga qo‘ng‘iroq qiladi. Ikkalasini bitta do‘kon aldagan, lekin yo‘llari har xil. Stars’ni qaytarishning umumiy tartibi <Link href="/blog/telegram-stars-qaytarib-olish">Telegram Stars’ni qaytarib olish</Link> maqolasida bor.</p>
      <p>Kripto bo‘yicha alohida eslatma: blokcheyndagi o‘tkazmalarni qaytarish qoidasi bu maqolada rasmiy manba bilan tasdiqlanmagan. Amalda pulni o‘sha hamyon egasidan boshqa hech kim qaytarmaydi deb hisoblash xavfsizroq.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="aldanganingizni-sezgach-birinchi-soatlarda-nima">Aldanganingizni sezgach, birinchi soatlarda nima qilasiz?</h2>
      <p>Tartib muhim. Xabarlar va chek o‘chib ketishidan oldin hammasini saqlab oling.</p>
      <Steps>
        <Step title={"Dalillarni saqlang"}>reklama postining skrinshoti, do‘kon bot yoki kanalining @username’i, chek, tranzaksiya ID va butun yozishmalar. Do‘kon kanalni o‘chirib yuborishi mumkin, skrinshot esa sizda qoladi.</Step>
        <Step title={"Kartani himoyalang"}>karta ma’lumotini do‘kon saytiga kiritgan bo‘lsangiz, bankka qo‘ng‘iroq qilib kartani bloklatib qo‘ying yoki limit qo‘yishni so‘rang. Batafsil: <Link href="/blog/onlayn-tolovda-karta-xavfsizligi">onlayn to‘lovda karta xavfsizligi</Link>.</Step>
        <Step title={"Sotuvchiga bir marta yozing"}>buyurtma raqami va sanasini ko‘rsatib, qisqa yozing. Telefon raqam, SMS kod va karta ma’lumotini bermang.</Step>
        <Step title={"To‘lov kanaliga murojaat qiling"}>bank yoki to‘lov ilovasining yordam xizmatiga chek va tranzaksiya ID’ni yuboring.</Step>
        <Step title={"Telegram ichida shikoyat qiling"}>reklama posti, bot yoki kanaldagi «Report» tugmasidan foydalaning. Notanish odam yozgan bo‘lsa, o‘sha ekranning o‘zida uni bloklab, shikoyat qilsa bo‘ladi (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</Step>
        <Step title={"Yangi «yordamchilar»ga javob bermang"}>pulni qaytarib berishni taklif qilib yozganlarni keyingi bo‘limdagi belgilar bo‘yicha tekshiring.</Step>
      </Steps>
      <h2 id="pul-qaytarilyapti-degan-elonni-qanday">«Pul qaytarilyapti» degan e’lonni qanday tekshirasiz?</h2>
      <p>Aldovdan keyin «qaytarish boshlandi» degan xabarlar tez tarqaladi. Ularning bir qismi rost bo‘ladi, bir qismi esa yangi tuzoq. Botga yozishdan oldin quyidagilarni ko‘rib chiqing:</p>
      <ul>
        <li><b>E’lon kimdan chiqqan.</b> Loyihaning o‘z kanali yoki saytida turibdimi, yoki faqat boshqa kanallardagi forwardlarda aylanib yuribdimi? Forward dalil bo‘lmaydi.</li>
        <li><b>Belgi qanday ko‘rinadi.</b> Rasmiy tasdiq belgisini chatlarga faqat Telegram qo‘ya oladi. Uchinchi tomon tasdiqlovchilarining belgisi esa butunlay boshqacha ko‘rinadi (<a href={"https://telegram.org/verify"} target="_blank" rel="noopener noreferrer">Page Verification Guidelines</a>). Ism yoniga qo‘yilgan emoji-belgi tasdiq hisoblanmaydi.</li>
        <li><b>Profilda FAKE yoki SCAM yorlig‘i bormi.</b> Boshqa birov bo‘lib ko‘rinayotgan yoki aldashga urinayotgan akkaunt va botlarga Telegram shunday yorliq qo‘yishi mumkin, u ochiq profilda ko‘rinadi (<a href={"https://telegram.org/tos/eu-dsa"} target="_blank" rel="noopener noreferrer">telegram.org/tos/eu-dsa</a>).</li>
        <li><b>Username harfma-harf mosmi.</b> Nusxa botlar asl nomdan bitta harf, pastki chiziq yoki raqam bilan farq qiladi.</li>
        <li><b>Shartlar rasmiy joyda yozilganmi.</b> Summa, muddat va qaysi valyutada to‘lanishi rasmiy manbada bo‘lishi kerak. Toygers misolida bular tasdiqlanmagan.</li>
        <li><b>Sizdan nima so‘ralyapti.</b> Qaytarish uchun pul, kod yoki hamyon kaliti so‘ralsa, bu firibgarlik belgisi.</li>
      </ul>
      <p>Telegram’ning ma’lum vazifalar uchun rasmiy botlari ham bor (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>). Lekin istalgan do‘kon yoki loyiha boti uchinchi tomonniki bo‘lib qolaveradi.</p>
      <h2 id="qaytarish-botiga-yozishdan-oldin-qaysi">Qaytarish botiga yozishdan oldin: qaysi ma’lumotingiz ochiq qoladi?</h2>
      <p>Botga birinchi buyruqni yuborishingiz bilan u sizning ochiq ismingiz, username’ingiz, profil rasmingiz va unga yozgan xabarlaringizni ko‘radi. Telefon raqamingiz, oxirgi faollik vaqtingiz va boshqa chatlaringiz esa o‘zingiz ulashmaguningizcha botga ko‘rinmaydi (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</p>
      <p>Shuning uchun bot «raqamni tasdiqlang» deb kontakt ulashish tugmasini chiqarsa, bosmang. Pulni qaytarish uchun raqamingiz kerak emas: to‘lovni chek va tranzaksiya bo‘yicha topish mumkin.</p>
      <p>Havolalarga ham ehtiyot bo‘ling. Bot yuborgan havolani ochsangiz, sayt IP manzilingizni ko‘radi. Sahifa karta raqami, SMS kod yoki hamyonning zaxira so‘zlarini so‘rasa, darhol yoping.</p>
      <p>Buyruq yozishning o‘zi akkauntingizni o‘g‘irlamaydi. Xavf keyingi qadamlarda boshlanadi: kod kiritish, karta ma’lumotini yozish, hamyonni ulash yoki «tasdiqlash uchun» pul jo‘natish.</p>
      <h2 id="ikkinchi-aldov-qanday-korinadi">«Ikkinchi aldov» qanday ko‘rinadi?</h2>
      <p>Aldangan odam pulini qaytarishga shoshadi. Firibgarlar aynan shundan foydalanadi. Odatda ular quyidagi iboralar bilan yozadi:</p>
      <ul>
        <li>«Qaytarish uchun avval komissiya to‘lang».</li>
        <li>«Hamyoningizni tasdiqlash uchun ulang».</li>
        <li>«SMS orqali kelgan kodni yuboring».</li>
        <li>«Avval kichik summa jo‘nating, keyin hammasini qaytaramiz».</li>
      </ul>
      <Notice label={"Muhim"}>Pulni qaytarayotgan tomon sizdan oldindan pul, kod yoki hamyon kalitini so‘rashi uchun asos yo‘q. Shunday talab qo‘yilsa, suhbatni to‘xtating va shikoyat qiling.</Notice>
      <p>Ba’zan firibgar sizning nomingizdan boshqalarga yoza boshlaydi. Masalan, do‘stlaringizga «men ham pulimni qaytarib oldim, mana havola» deb yuboradi. Bunday holatda Telegram FAQ @NoToScam’ga murojaat qilishni maslahat beradi. Shunga o‘xshash holatlar <Link href="/blog/telegram-nomimdan-xabar-yuborilyapti">Telegram nomimdan xabar yuborilyapti</Link> maqolasida batafsil yozilgan.</p>
      <p>Shikoyat qilish behuda emas. Foydalanuvchilar biror akkauntdan kelgan keraksiz xabarlar ustidan shikoyat qilsa, Telegram o‘sha akkauntni cheklaydi (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>). Sizning shikoyatingiz keyingi aldanuvchini ham himoya qiladi.</p>
      <h2 id="telegram-ichida-va-undan-tashqarida">Telegram ichida va undan tashqarida qayerga shikoyat qilinadi?</h2>
      <p>Har bir muammoning o‘z manzili bor:</p>
      <ul>
        <li><b>Reklama posti, do‘kon boti yoki kanali</b> — ilova ichidagi «Report» tugmasi. Bunday tugma Telegram’ning barcha ilovalarida bor.</li>
        <li><b>Sizga yozgan notanish odam</b> — chat ekranining o‘zidan bloklash va shikoyat qilish.</li>
        <li><b>Noqonuniy kontent</b> — Telegram’ning maxsus sahifasi: <a href={"https://telegram.org/tos/eu-dsa"} target="_blank" rel="noopener noreferrer">telegram.org/tos/eu-dsa</a>.</li>
        <li><b>Kimdir sizning nomingizdan aldayotgan bo‘lsa</b> — @NoToScam.</li>
        <li><b>Pulning o‘zi bo‘yicha</b> — bank yoki to‘lov ilovasining yordam xizmati. Summa katta bo‘lsa, huquq-tartibot organlariga ham murojaat qilish mumkin. Bu umumiy maslahat, tartibi bu maqolada tasdiqlanmagan.</li>
      </ul>
      <p>Bir narsani bilib qo‘ying: Telegram’ga qilingan shikoyat pulni qaytarmaydi. U do‘kon va botni cheklashga, boshqalarni ogohlantirishga yordam beradi. Pul uchun bank va to‘lov xizmati bilan alohida ish olib borish kerak.</p>
      <h2 id="keyingi-xaridda-reklamadagi-dokonni-qanday">Keyingi xaridda reklamadagi do‘konni qanday tekshirasiz?</h2>
      <p>Reklama chiroyli bo‘lishi mumkin, lekin to‘lov paytidagi belgilar haqiqatni ko‘rsatadi. To‘lashdan oldin jadvaldagi belgilarni solishtirib ko‘ring:</p>
      <CompareTable
        headers={["Belgi", "Ishonsa bo‘ladigan do‘kon", "Shubhali do‘kon"]}
        rows={[
          ["To‘lov", "Tanish mahalliy usullar, chek beriladi", "Faqat kripto yoki shaxsiy kartaga o‘tkazma"],
          ["So‘raladigan ma’lumot", "Faqat buyurtma uchun keragi", "Kod, parol, zaxira so‘zlar"],
          ["Yordam xizmati", "Ochiq username, odam javob beradi", "Yo‘q yoki faqat avtomatik javob"],
          ["Narx", "Oldindan, to‘liq ko‘rinadi", "«Faqat bugun» bosimi, bozordan ancha past narx"],
          ["Tasdiq belgisi", "Telegram belgisi yoki belgisiz, lekin shaffof", "Ism ichidagi emoji-belgi"],
        ]}
      />
      <p>Ikki va undan ortiq belgi «shubhali» ustuniga to‘g‘ri kelsa, xaridni kechiktiring. Ishonchli xizmatni tanlash mezonlari <Link href="/blog/ishonchli-stars-xizmatini-tanlash">Ishonchli Telegram Stars xizmatini qanday tanlash kerak</Link> maqolasida bor.</p>
      <h2 id="stars-premium-va-sovgani-xavfsizroq">Stars, Premium va sovg‘ani xavfsizroq qanday olsa bo‘ladi?</h2>
      <p>Raqamli Telegram mahsulotlarida xavfni kamaytirishning oddiy yo‘li bor: xizmatga akkauntingizga kirish huquqini bermaysiz. StarsPaymee’da faqat @username so‘raladi. Parol, SMS kod yoki akkauntga kirish kerak emas.</p>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. Username’ni harfma-harf tekshiring.</Step>
        <Step title={"Mahsulotni tanlang"}>Stars (eng kam buyurtma — 50 dona), Premium yoki sovg‘a.</Step>
        <Step title={"Oluvchining @username’ini kiriting"}>o‘zingizniki yoki sovg‘a qilinadigan odamniki.</Step>
        <Step title={"So‘mda to‘lang"}>Stars karta o‘tkazmasi (UzCard/HUMO) yoki bot balansidan bir donasi {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Premium: 3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}, barcha to‘lov usulida bir xil.</Step>
        <Step title={"Yetkazilganini tekshiring"}>buyurtma odatda bir necha soniyada avtomatik keladi. Muammo bo‘lsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>’ga yozing.</Step>
      </Steps>
      <p>Hisobingizda faol Premium obunasi bo‘lsa, bot yangi Premium buyurtmasini ochmaydi. StarsPaymee — Telegram’dan alohida, mustaqil xizmat va Telegram nomidan ish olib bormaydi. Xizmat Stars va sovg‘alarni foydalanuvchilardan sotib olmaydi. Kimdir «StarsPaymee nomidan» yulduzingizni sotib olishni taklif qilsa, bu boshqa odam. Narx va tariflar <Link href="/stars">/stars</Link> va <Link href="/premium">/premium</Link> sahifalarida ham bor.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/verify", label: "Page Verification Guidelines" },
          { href: "https://telegram.org/tos/eu-dsa", label: "User guidance for the EU Digital Services Act" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Do‘kon reklamasi Telegram kanalida chiqqan bo‘lsa, Telegram pulimni qaytaradimi?", answer: "Reklama chiqqani do‘konni Telegram kafolatlaganini bildirmaydi. Bot va mini ilovalar uchinchi tomon xizmati, shuning uchun pul bo‘yicha sotuvchi, bank yoki to‘lov ilovasiga murojaat qilinadi." },
  { question: "Stars bilan to‘lagan buyurtmam kelmadi — kimga yozaman?", answer: "Avval to‘lov qilgan botning o‘ziga va uning yordam xizmatiga yozing. Bot nomi, sana va Stars miqdorini ko‘rsating, qaytarish shartlarini esa botning o‘zidan so‘rang." },
  { question: "Do‘konga UzCard yoki HUMO bilan to‘laganman — bankka qo‘ng‘iroq qilishdan foyda bormi?", answer: "Bor, lekin natijani faqat kartangizni chiqargan bank aytadi va tartib har bir bankda o‘zgacha bo‘lishi mumkin. Qo‘ng‘iroqdan oldin chek, summa, sana va pul qabul qilgan tomonning nomini tayyorlab qo‘ying." },
  { question: "Kripto bilan to‘langan pulni qaytarish mumkinmi?", answer: "Hamyon egasining o‘zi qaytarmasa, imkoniyat juda kam deb hisoblang: bu yerda bank kabi vositachi yo‘q. Tranzaksiya xeshini saqlab qo‘ying, lekin «qaytarib beramiz» degan notanish odamlarga hamyonni ulamang." },
  { question: "Toygers o‘yinchoqlari uchun pul qaytarilishi rostmi?", answer: "Bu da’vo Telegram kanallaridagi postlarda tarqalgan, lekin summa, bot va to‘lov tartibini tasdiqlaydigan rasmiy manba topilmadi. Loyihaning o‘z kanali yoki saytida e’lon chiqmaguncha, unga tekshirilmagan xabar deb qarang." },
  { question: "Qaytarish botiga buyruq yozdim, endi akkauntim xavf ostidami?", answer: "Faqat buyruq yozgan bo‘lsangiz, bot ochiq ismingiz, username, profil rasmingiz va unga yuborgan xabarlaringizni ko‘radi, xolos. Raqam ulashmagan, kod va karta ma’lumoti kiritmagan bo‘lsangiz, akkaunt shuning o‘zidan xavfga tushmaydi." },
  { question: "Menga «pulni qaytarish uchun hamyoningizni ulang» deb yozishdi. Nima qilaman?", answer: "Rad eting: pul qabul qilish uchun hamyonni ulash yoki zaxira so‘zlarni kiritish kerak emas, buni hech kim so‘rashga haqli emas. Yozishmani skrinshot qilib, yozgan akkauntni bloklang va shikoyat qiling." },
  { question: "Ko‘k galochka do‘kon ishonchli ekanini isbotlaydimi?", answer: "Telegram’ning rasmiy belgisini faqat Telegram qo‘yadi, uchinchi tomon belgilari esa boshqacha ko‘rinadi. Ism ichiga qo‘shib yozilgan emoji tasdiq emas, shuning uchun username’ni ham alohida tekshiring." },
  { question: "Firibgar do‘kon nomimdan boshqalarga yozayotgan bo‘lsa nima qilaman?", answer: "Telegram bunday holatda @NoToScam’ga murojaat qilishni maslahat beradi. Do‘stlaringizni ham ogohlantiring, ular sizdan kelgandek ko‘ringan havolalarni ochmasin." },
  { question: "Stars yoki Premium olayotganda yana aldanib qolmaslik uchun nimaga qarayman?", answer: "Faqat @username so‘raydigan, narxni to‘lovdan oldin ko‘rsatadigan va yordam xizmati ochiq bo‘lgan servisni tanlang. @StarsPaymee_bot’da to‘lov so‘mda qilinadi, parol va SMS kod esa umuman so‘ralmaydi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Если магазин из рекламы в Telegram вас обманул, деньги сами не вернутся. Шанс есть, но он зависит от способа оплаты: Stars, банковская карта, Click или Payme, криптовалюта. Сначала сохраните доказательства и защитите карту. Потом обращайтесь туда, через что прошёл платёж. А тех, кто пишет «вернём ваши деньги», проверяйте отдельно.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#reklamada-korgan-dokon-aldasa-pul", label: "Вернут ли вообще деньги, если обманул магазин из рекламы?" },
          { href: "#pulni-qanday-tolagan-bolsangiz-qaysi", label: "Как вы платили — и куда обращаться за возвратом?" },
          { href: "#aldanganingizni-sezgach-birinchi-soatlarda-nima", label: "Что делать в первые часы, когда поняли, что вас обманули?" },
          { href: "#pul-qaytarilyapti-degan-elonni-qanday", label: "Как проверить объявление «деньги возвращаются»?" },
          { href: "#qaytarish-botiga-yozishdan-oldin-qaysi", label: "Перед тем как писать боту возврата: какие ваши данные он увидит?" },
          { href: "#ikkinchi-aldov-qanday-korinadi", label: "Как выглядит «второй обман»?" },
          { href: "#telegram-ichida-va-undan-tashqarida", label: "Куда жаловаться в Telegram и за его пределами?" },
          { href: "#keyingi-xaridda-reklamadagi-dokonni-qanday", label: "Как проверить магазин из рекламы перед следующей покупкой?" },
          { href: "#stars-premium-va-sovgani-xavfsizroq", label: "Как безопаснее купить Stars, Premium и подарки?" },
        ]}
      />
      <h2 id="reklamada-korgan-dokon-aldasa-pul">Вернут ли вообще деньги, если обманул магазин из рекламы?</h2>
      <p>Гарантий возврата не даст никто. Результат зависит от трёх вещей: согласится ли продавец вернуть деньги, был ли в платеже посредник и насколько быстро вы начали действовать. Поэтому сначала думайте не о деньгах, а о доказательствах. Вторая задача — не попасться снова: тем, кто уже потерял деньги, мошенники часто пишут повторно.</p>
      <p>Реклама в канале не означает, что Telegram проверял магазин. В Telegram FAQ сказано: если вы пользуетесь сторонним ботом или мини-приложением, это сервис третьей стороны, а не Telegram (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>). Фраза приведена на примере ИИ-сервисов, но логика подходит и для ботов-магазинов: за заказ отвечает продавец.</p>
      <p>Возьмём для примера одну историю. По сообщению, которое разошлось по Telegram-каналам, проект Notcoin начал возвращать деньги за игрушки Toygers, которые сам же рекламировал. В посте указаны бот, команда для него, выделенная сумма и то, что выплаты идут в USDT (TON). Ни одна из этих деталей не подтверждена официальными источниками. Относитесь к такому сообщению не как к факту, а как к заявлению, которое нужно проверить. Насколько безопасна сама система Stars, разобрано в статье <Link href="/blog/telegram-stars-xavfsizmi">Безопасны ли Telegram Stars</Link>.</p>
      <h2 id="pulni-qanday-tolagan-bolsangiz-qaysi">Как вы платили — и куда обращаться за возвратом?</h2>
      <p>Куда ушли деньги, туда и нужно обращаться в первую очередь. Таблица ниже даёт примерное направление. Точный порядок всегда уточняйте у самого банка или сервиса.</p>
      <CompareTable
        headers={["Способ оплаты", "Куда обращаться", "Что подготовить", "Шансы на возврат"]}
        rows={[
          ["Telegram Stars (оплата внутри бота)", "Сам бот-продавец и его поддержка", "@username бота, дата, количество Stars, номер заказа", "Зависит от условий продавца, уточняйте в боте"],
          ["UzCard, HUMO или международная карта", "Банк, выпустивший карту", "Чек, дата, сумма, имя получателя или номер карты", "Зависит от правил банка, в этой статье не подтверждено"],
          ["Click, Payme, Uzum, Paynet", "Поддержка платёжного приложения", "ID транзакции, скриншот чека", "Зависит от правил приложения, спросите поддержку"],
          ["Криптовалюта (TON, USDT)", "Только сам продавец", "Хеш транзакции, адреса кошельков обеих сторон", "Низкие: считайте, что посредника, который вернёт деньги принудительно, нет"],
          ["Перевод на личную карту или наличные", "Банк, при крупной сумме — правоохранительные органы", "Чек, переписка, всё, что известно о продавце", "Самый сложный случай"],
        ]}
      />
      <p>Пример. Дилноза оплатила сумку через Stars прямо в боте, а Жасур перевёл деньги тому же магазину на карту незнакомого человека. Дилноза сначала пишет в поддержку бота, Жасур звонит в свой банк. Обманул их один и тот же магазин, но пути у них разные. Общий порядок возврата Stars описан в статье <Link href="/blog/telegram-stars-qaytarib-olish">Как вернуть Telegram Stars</Link>.</p>
      <p>Отдельно о крипте: правила отмены переводов в блокчейне в этой статье официальным источником не подтверждены. На практике безопаснее исходить из того, что вернуть деньги может только владелец кошелька, на который вы их отправили.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="aldanganingizni-sezgach-birinchi-soatlarda-nima">Что делать в первые часы, когда поняли, что вас обманули?</h2>
      <p>Порядок важен. Сохраните всё, пока переписка и чеки не исчезли.</p>
      <Steps>
        <Step title={"Сохраните доказательства"}>скриншот рекламного поста, @username бота или канала магазина, чек, ID транзакции и всю переписку. Магазин может удалить канал, а скриншоты останутся у вас.</Step>
        <Step title={"Защитите карту"}>если вводили данные карты на сайте магазина, позвоните в банк и попросите заблокировать карту или поставить лимит. Подробнее: <Link href="/blog/onlayn-tolovda-karta-xavfsizligi">безопасность карты при онлайн-оплате</Link>.</Step>
        <Step title={"Напишите продавцу один раз"}>коротко, с номером заказа и датой. Не сообщайте номер телефона, СМС-код и данные карты.</Step>
        <Step title={"Обратитесь в платёжный канал"}>отправьте чек и ID транзакции в поддержку банка или платёжного приложения.</Step>
        <Step title={"Пожалуйтесь внутри Telegram"}>используйте кнопку «Report» в рекламном посте, боте или канале. Если написал незнакомый человек, его можно заблокировать и пожаловаться на него прямо с того же экрана (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</Step>
        <Step title={"Не отвечайте новым «помощникам»"}>тех, кто сам пишет и предлагает вернуть деньги, проверьте по признакам из следующего раздела.</Step>
      </Steps>
      <h2 id="pul-qaytarilyapti-degan-elonni-qanday">Как проверить объявление «деньги возвращаются»?</h2>
      <p>После обмана быстро разлетаются сообщения «возврат начался». Часть из них правдива, часть — новая ловушка. Прежде чем писать боту, проверьте:</p>
      <ul>
        <li><b>Кто опубликовал объявление.</b> Оно есть в собственном канале или на сайте проекта — или только гуляет пересылками по чужим каналам? Пересылка не доказательство.</li>
        <li><b>Как выглядит отметка.</b> Официальную галочку верификации чатам может поставить только Telegram. Отметки сторонних верификаторов выглядят совсем иначе (<a href={"https://telegram.org/verify"} target="_blank" rel="noopener noreferrer">Page Verification Guidelines</a>). Эмодзи-галочка рядом с именем верификацией не считается.</li>
        <li><b>Есть ли в профиле метка FAKE или SCAM.</b> Telegram может пометить так аккаунты и ботов, которые выдают себя за других или пытаются обмануть пользователей; метка видна в публичном профиле (<a href={"https://telegram.org/tos/eu-dsa"} target="_blank" rel="noopener noreferrer">telegram.org/tos/eu-dsa</a>).</li>
        <li><b>Совпадает ли username буква в букву.</b> Боты-клоны отличаются от оригинала одной буквой, нижним подчёркиванием или цифрой.</li>
        <li><b>Опубликованы ли условия в официальном месте.</b> Сумма, сроки и валюта выплат должны быть указаны в официальном источнике. В истории с Toygers это не подтверждено.</li>
        <li><b>Что у вас просят.</b> Если ради возврата требуют деньги, код или ключ от кошелька — это признак мошенничества.</li>
      </ul>
      <p>У Telegram есть официальные боты для отдельных задач (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>). Но бот любого магазина или проекта всё равно остаётся сторонним.</p>
      <h2 id="qaytarish-botiga-yozishdan-oldin-qaysi">Перед тем как писать боту возврата: какие ваши данные он увидит?</h2>
      <p>Как только вы отправите боту первую команду, он увидит ваше публичное имя, username, фото профиля и сообщения, которые вы ему пишете. Номер телефона, время последнего посещения и другие чаты бот не видит, пока вы сами ими не поделитесь (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</p>
      <p>Поэтому если бот показывает кнопку «подтвердите номер» для отправки контакта — не нажимайте. Для возврата денег ваш номер не нужен: платёж находят по чеку и транзакции.</p>
      <p>С ссылками тоже осторожнее. Если открыть ссылку, присланную ботом, сайт увидит ваш IP-адрес. Если страница просит номер карты, СМС-код или секретную фразу кошелька — сразу закрывайте.</p>
      <p>Сама по себе отправленная команда аккаунт не угонит. Опасность начинается на следующих шагах: ввод кода, данные карты, подключение кошелька или перевод денег «для подтверждения».</p>
      <h2 id="ikkinchi-aldov-qanday-korinadi">Как выглядит «второй обман»?</h2>
      <p>Обманутый человек торопится вернуть деньги. Именно этим пользуются мошенники. Обычно они пишут так:</p>
      <ul>
        <li>«Чтобы получить возврат, сначала оплатите комиссию».</li>
        <li>«Подключите кошелёк для подтверждения».</li>
        <li>«Пришлите код из СМС».</li>
        <li>«Сначала отправьте небольшую сумму, потом вернём всё».</li>
      </ul>
      <Notice label={"Важно"}>У того, кто возвращает деньги, нет причин требовать от вас предоплату, код или ключ от кошелька. Если такое требуют — прекратите разговор и пожалуйтесь.</Notice>
      <p>Иногда мошенник начинает писать другим от вашего имени. Например, рассылает друзьям: «Я тоже вернул деньги, вот ссылка». На этот случай Telegram FAQ советует обращаться в @NoToScam. Похожие ситуации подробно разобраны в статье <Link href="/blog/telegram-nomimdan-xabar-yuborilyapti">От моего имени в Telegram рассылают сообщения</Link>.</p>
      <p>Жаловаться не бесполезно. Когда пользователи жалуются на нежелательные сообщения от аккаунта, Telegram ограничивает этот аккаунт (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>). Ваша жалоба защищает и следующую потенциальную жертву.</p>
      <h2 id="telegram-ichida-va-undan-tashqarida">Куда жаловаться в Telegram и за его пределами?</h2>
      <p>У каждой проблемы свой адрес:</p>
      <ul>
        <li><b>Рекламный пост, бот или канал магазина</b> — кнопка «Report» в приложении. Она есть во всех приложениях Telegram.</li>
        <li><b>Незнакомец, который вам написал</b> — блокировка и жалоба прямо с экрана чата.</li>
        <li><b>Незаконный контент</b> — специальная страница Telegram: <a href={"https://telegram.org/tos/eu-dsa"} target="_blank" rel="noopener noreferrer">telegram.org/tos/eu-dsa</a>.</li>
        <li><b>Кто-то обманывает людей от вашего имени</b> — @NoToScam.</li>
        <li><b>По самим деньгам</b> — поддержка банка или платёжного приложения. При крупной сумме можно обратиться и в правоохранительные органы. Это общий совет, порядок в этой статье не подтверждён.</li>
      </ul>
      <p>Важно понимать: жалоба в Telegram деньги не вернёт. Она помогает ограничить магазин и бота и предупредить других. Возвратом нужно заниматься отдельно — через банк и платёжный сервис.</p>
      <h2 id="keyingi-xaridda-reklamadagi-dokonni-qanday">Как проверить магазин из рекламы перед следующей покупкой?</h2>
      <p>Реклама может быть красивой, но правду показывают детали в момент оплаты. Перед платежом сверьтесь с таблицей:</p>
      <CompareTable
        headers={["Признак", "Магазин, которому можно доверять", "Подозрительный магазин"]}
        rows={[
          ["Оплата", "Знакомые местные способы, выдаётся чек", "Только крипта или перевод на личную карту"],
          ["Какие данные просят", "Только нужное для заказа", "Код, пароль, секретная фраза"],
          ["Поддержка", "Открытый username, отвечает живой человек", "Нет или только автоответы"],
          ["Цена", "Видна заранее и полностью", "Давление «только сегодня», цена сильно ниже рынка"],
          ["Отметка верификации", "Галочка Telegram или без отметки, но всё прозрачно", "Эмодзи-галочка внутри имени"],
        ]}
      />
      <p>Если два признака и больше попадают в колонку «подозрительный», отложите покупку. Критерии выбора надёжного сервиса собраны в статье <Link href="/blog/ishonchli-stars-xizmatini-tanlash">Как выбрать надёжный сервис Telegram Stars</Link>.</p>
      <h2 id="stars-premium-va-sovgani-xavfsizroq">Как безопаснее купить Stars, Premium и подарки?</h2>
      <p>Для цифровых продуктов Telegram есть простой способ снизить риск: не давать сервису доступ к своему аккаунту. В StarsPaymee нужен только @username. Пароль, СМС-код или вход в аккаунт не требуются.</p>
      <Steps>
        <Step title={"Откройте бота"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. Сверьте username буква в букву.</Step>
        <Step title={"Выберите продукт"}>Stars (минимальный заказ — 50 штук), Premium или подарок.</Step>
        <Step title={"Укажите @username получателя"}>свой или того, кому дарите.</Step>
        <Step title={"Оплатите в сумах"}>Stars переводом на карту (UzCard/HUMO) или с баланса бота по {som(STARS_PER_UNIT_UZS, "ru")} за штуку, через Click, Payme, Uzum или Paynet — по {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Premium: 3 месяца {som(premium(3), "ru")}, 6 месяцев {som(premium(6), "ru")}, 12 месяцев {som(premium(12), "ru")} — одинаково при любом способе оплаты.</Step>
        <Step title={"Проверьте доставку"}>обычно заказ приходит автоматически за несколько секунд. Если что-то пошло не так, пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Step>
      </Steps>
      <p>Если на аккаунте уже есть активная подписка Premium, бот не откроет новый заказ Premium. StarsPaymee — независимый сервис, отдельный от Telegram, и не действует от имени Telegram. Сервис не покупает Stars и подарки у пользователей. Если кто-то предлагает купить ваши звёзды «от имени StarsPaymee», это посторонний человек. Цены и тарифы есть также на страницах <Link href="/stars">/stars</Link> и <Link href="/premium">/premium</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/verify", label: "Page Verification Guidelines" },
          { href: "https://telegram.org/tos/eu-dsa", label: "User guidance for the EU Digital Services Act" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Реклама магазина вышла в Telegram-канале — вернёт ли мне деньги Telegram?", answer: "То, что реклама вышла в канале, не значит, что Telegram ручается за магазин. Боты и мини-приложения — сервисы третьих лиц, поэтому по деньгам обращаются к продавцу, в банк или платёжное приложение." },
  { question: "Оплатил заказ через Stars, а он не пришёл — куда писать?", answer: "Сначала в бот, через который платили, и в его поддержку. Укажите название бота, дату и количество Stars, а условия возврата уточните у самого бота." },
  { question: "Платил магазину картой UzCard или HUMO — есть смысл звонить в банк?", answer: "Есть, но результат может назвать только банк, выпустивший карту, и порядок в разных банках может отличаться. Перед звонком приготовьте чек, сумму, дату и имя получателя денег." },
  { question: "Можно ли вернуть деньги, отправленные в криптовалюте?", answer: "Если владелец кошелька сам не вернёт, считайте шансы очень низкими: посредника вроде банка здесь нет. Сохраните хеш транзакции, но не подключайте кошелёк по просьбе незнакомцев, обещающих возврат." },
  { question: "Правда ли, что за игрушки Toygers возвращают деньги?", answer: "Это утверждение разошлось в постах Telegram-каналов, но официального источника, подтверждающего сумму, бота и порядок выплат, не нашлось. Пока объявления нет в канале или на сайте самого проекта, считайте его непроверенным." },
  { question: "Я отправил команду боту возврата — мой аккаунт теперь в опасности?", answer: "Если вы только отправили команду, бот видит лишь ваше публичное имя, username, фото профиля и сообщения ему. Если вы не делились номером и не вводили код или данные карты, сам по себе аккаунт от этого не пострадает." },
  { question: "Мне пишут: «Чтобы вернуть деньги, подключите кошелёк». Что делать?", answer: "Откажитесь: чтобы получить деньги, не нужно подключать кошелёк или вводить секретную фразу, и никто не вправе этого требовать. Сделайте скриншот переписки, заблокируйте аккаунт и пожалуйтесь на него." },
  { question: "Синяя галочка доказывает, что магазину можно доверять?", answer: "Официальную отметку Telegram ставит только сам Telegram, а отметки сторонних верификаторов выглядят иначе. Эмодзи, вписанное в имя, верификацией не является, поэтому отдельно проверяйте и username." },
  { question: "Мошенник пишет людям от моего имени — что делать?", answer: "В таком случае Telegram советует обращаться в @NoToScam. Предупредите и друзей, чтобы не открывали ссылки, которые будто бы пришли от вас." },
  { question: "На что смотреть, чтобы не попасться снова при покупке Stars или Premium?", answer: "Выбирайте сервис, который просит только @username, показывает цену до оплаты и имеет открытую поддержку. В @StarsPaymee_bot оплата идёт в сумах, а пароль и СМС-код не запрашиваются вовсе." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>If a shop from a Telegram ad scammed you, the money won’t come back on its own. You may still get it back, but that depends on how you paid: Stars, bank card, Click or Payme, or crypto. First, save the evidence and protect your card. Then complain through the service you paid with. Check anyone who offers to “refund you” before you reply.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#reklamada-korgan-dokon-aldasa-pul", label: "Will you get your money back if an advertised shop scammed you?" },
          { href: "#pulni-qanday-tolagan-bolsangiz-qaysi", label: "Which refund route matches the way you paid?" },
          { href: "#aldanganingizni-sezgach-birinchi-soatlarda-nima", label: "What should you do in the first hours after you realize you’ve been scammed?" },
          { href: "#pul-qaytarilyapti-degan-elonni-qanday", label: "How do you check a “refunds are being paid” announcement?" },
          { href: "#qaytarish-botiga-yozishdan-oldin-qaysi", label: "Before you message a refund bot, what data does it see?" },
          { href: "#ikkinchi-aldov-qanday-korinadi", label: "What does a “second scam” look like?" },
          { href: "#telegram-ichida-va-undan-tashqarida", label: "Where should you report it, inside Telegram and outside?" },
          { href: "#keyingi-xaridda-reklamadagi-dokonni-qanday", label: "How can you check an advertised shop before your next purchase?" },
          { href: "#stars-premium-va-sovgani-xavfsizroq", label: "How can you buy Stars, Premium and gifts more safely?" },
        ]}
      />
      <h2 id="reklamada-korgan-dokon-aldasa-pul">Will you get your money back if an advertised shop scammed you?</h2>
      <p>Nobody can promise you will. It depends on three things: whether the seller agrees to refund you, whether a payment service handled the payment, and how fast you act. So start by saving your evidence. The money comes later. Your second job is to avoid being scammed again, because scammers often go back to people who have already lost money.</p>
      <p>An ad in a channel doesn’t mean Telegram checked the shop. The Telegram FAQ says that if you use a third-party bot or mini app, you are using a third-party service, not Telegram (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>). That line is about AI services, but the same logic applies to shop bots: the seller is responsible for your order.</p>
      <p>Here’s an example. A message spreading through Telegram channels claimed that the Notcoin project had started refunding buyers of Toygers toys it had promoted. The post named a bot and a command to send it. It also gave a refund budget and said payouts would be in USDT (TON). None of these details is confirmed by an official source. Treat posts like this as unverified claims. To learn how safe the Stars system itself is, read <Link href="/blog/telegram-stars-xavfsizmi">Are Telegram Stars safe</Link>.</p>
      <h2 id="pulni-qanday-tolagan-bolsangiz-qaysi">Which refund route matches the way you paid?</h2>
      <p>Start your complaint wherever the money went out. The table below gives a rough guide. Always check the exact process with your bank or the payment service.</p>
      <CompareTable
        headers={["Payment method", "Who to contact", "What to prepare", "Chance of a refund"]}
        rows={[
          ["Telegram Stars (in-bot payment)", "The seller’s bot and its support team", "The bot’s @username, date, number of Stars, order number", "Depends on the seller’s terms. Check in the bot"],
          ["UzCard, HUMO or an international card", "The bank that issued your card", "Receipt, date, amount, recipient’s name or card number", "Depends on the bank’s rules. Not confirmed in this article"],
          ["Click, Payme, Uzum, Paynet", "The payment app’s support team", "Transaction ID, screenshot of the receipt", "Depends on the app’s rules. Ask support"],
          ["Crypto (TON, USDT)", "Only the seller", "Transaction hash, both wallet addresses", "Low. Assume no middleman can force a refund"],
          ["Transfer to a personal card, or cash", "Your bank, and the police for large amounts", "Receipt, chat history, everything you know about the seller", "The hardest case"],
        ]}
      />
      <p>Here’s how that works in practice. Dilnoza paid for a bag with Stars inside a bot. Jasur paid the same shop by sending money to a stranger’s card. Dilnoza writes to the bot’s support first. Jasur calls his bank. The same shop scammed them both, but each has to take a different route. For the general Stars refund process, see <Link href="/blog/telegram-stars-qaytarib-olish">How to get Telegram Stars refunded</Link>.</p>
      <p>A note on crypto: this article has no official source confirming how blockchain transfers can be reversed. In practice, it’s safer to assume only the owner of the receiving wallet can send the money back.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="aldanganingizni-sezgach-birinchi-soatlarda-nima">What should you do in the first hours after you realize you’ve been scammed?</h2>
      <p>Order matters. Save everything before messages or receipts disappear.</p>
      <Steps>
        <Step title={"Save the evidence"}>Take screenshots of the ad post. Save the shop’s bot or channel @username, the receipt, the transaction ID and the full chat history. The shop may delete its channel, but your screenshots stay with you.</Step>
        <Step title={"Protect your card"}>If you entered card details on the shop’s website, call your bank and ask them to block the card or set a limit. More detail: <Link href="/blog/onlayn-tolovda-karta-xavfsizligi">Card safety when paying online</Link>.</Step>
        <Step title={"Message the seller once"}>Keep it short and include the order number and date. Don’t share your phone number, SMS codes or card details.</Step>
        <Step title={"Contact your payment service"}>Send the receipt and transaction ID to your bank or the payment app’s support team.</Step>
        <Step title={"Report it inside Telegram"}>Use the “Report” button on the ad post, the bot or the channel. If a stranger messaged you, you can block and report them from the same screen (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</Step>
        <Step title={"Ignore new “helpers”"}>If someone writes offering to get your money back, check them against the signs in the next section.</Step>
      </Steps>
      <h2 id="pul-qaytarilyapti-degan-elonni-qanday">How do you check a “refunds are being paid” announcement?</h2>
      <p>After a scam, posts saying “refunds have started” spread fast. Some are real. Others are new traps. Before you message any bot, check the following:</p>
      <ul>
        <li><b>Who published it.</b> Is it on the project’s own channel or website, or only in forwards on other channels? A forwarded post doesn’t prove anything.</li>
        <li><b>What the badge looks like.</b> Only Telegram can put its official verification checkmark on a chat. Badges from third-party verifiers look completely different (<a href={"https://telegram.org/verify"} target="_blank" rel="noopener noreferrer">Page Verification Guidelines</a>). An emoji added to a name doesn’t verify anything.</li>
        <li><b>Whether the profile shows a FAKE or SCAM label.</b> Telegram may label accounts and bots that pretend to be someone else or try to cheat users. The label appears on their public profile (<a href={"https://telegram.org/tos/eu-dsa"} target="_blank" rel="noopener noreferrer">telegram.org/tos/eu-dsa</a>).</li>
        <li><b>Whether the username matches letter for letter.</b> Copycat bots differ from the real name by one letter, an underscore or a digit.</li>
        <li><b>Whether the terms are published officially.</b> The amount, deadline and payout currency should appear in an official source. In the Toygers case, none of these is confirmed.</li>
        <li><b>What you’re being asked for.</b> If a refund requires a payment, a code or a wallet key, it’s a scam.</li>
      </ul>
      <p>Telegram has some official bots for specific purposes (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>). Even so, every shop or project bot is still a third party.</p>
      <h2 id="qaytarish-botiga-yozishdan-oldin-qaysi">Before you message a refund bot, what data does it see?</h2>
      <p>As soon as you send a bot its first command, it sees your public name, username, profile picture and the messages you send it. It can’t see your phone number, your last seen time or your other chats unless you share them (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</p>
      <p>So if a bot shows a contact-sharing button asking you to “confirm your number”, don’t tap it. A refund doesn’t need your phone number. The payment can be traced by its receipt and transaction ID.</p>
      <p>Be careful with links too. If you open a link a bot sends you, the website can see your IP address. If the page asks for a card number, an SMS code or your wallet’s recovery phrase, close it right away.</p>
      <p>Sending a command won’t hand over your account. The danger comes with what follows: entering a code, typing card details, connecting a wallet or sending money “for verification”.</p>
      <h2 id="ikkinchi-aldov-qanday-korinadi">What does a “second scam” look like?</h2>
      <p>People who’ve been scammed want their money back fast, and scammers take advantage of that. They usually write things like:</p>
      <ul>
        <li>“Pay a fee first to process your refund.”</li>
        <li>“Connect your wallet to verify it.”</li>
        <li>“Send us the code you got by SMS.”</li>
        <li>“Send a small amount first and we’ll return everything.”</li>
      </ul>
      <Notice label={"Important"}>Someone returning your money has no reason to ask you for an upfront payment, a code or a wallet key. If they do, stop the conversation and report them.</Notice>
      <p>Sometimes the scammer starts messaging other people in your name. For example, they might send your friends “I got my money back too, here’s the link.” For this situation, the Telegram FAQ advises contacting @NoToScam. Similar cases are covered in <Link href="/blog/telegram-nomimdan-xabar-yuborilyapti">Someone is sending messages in my name on Telegram</Link>.</p>
      <p>Reporting is worth it. When users report unwanted messages from an account, Telegram limits that account (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>). Your report can protect the next person they target.</p>
      <h2 id="telegram-ichida-va-undan-tashqarida">Where should you report it, inside Telegram and outside?</h2>
      <p>Each problem has its own place to report:</p>
      <ul>
        <li><b>An ad post, a shop bot or a channel:</b> the in-app “Report” button. Every Telegram app has one.</li>
        <li><b>A stranger who messaged you:</b> block and report them from the chat screen.</li>
        <li><b>Illegal content:</b> Telegram’s dedicated page at <a href={"https://telegram.org/tos/eu-dsa"} target="_blank" rel="noopener noreferrer">telegram.org/tos/eu-dsa</a>.</li>
        <li><b>Someone scamming people in your name:</b> @NoToScam.</li>
        <li><b>The money itself:</b> your bank or the payment app’s support team. For a large amount, you can also go to the police. This is general advice. The exact procedure isn’t confirmed in this article.</li>
      </ul>
      <p>Keep in mind that reporting to Telegram won’t get your money back. It helps get the shop and bot restricted and warns other people. To recover the money, you have to deal with your bank or payment service separately.</p>
      <h2 id="keyingi-xaridda-reklamadagi-dokonni-qanday">How can you check an advertised shop before your next purchase?</h2>
      <p>An ad can look polished, but the checkout shows you what the shop is really like. Before paying, compare it with the signs in this table:</p>
      <CompareTable
        headers={["Sign", "Shop you can trust", "Suspicious shop"]}
        rows={[
          ["Payment", "Familiar local methods, receipt provided", "Crypto only, or transfer to a personal card"],
          ["Data requested", "Only what the order needs", "Codes, passwords, recovery phrases"],
          ["Support", "Public username, a real person answers", "None, or automated replies only"],
          ["Price", "Shown upfront and in full", "“Today only” pressure, far below market price"],
          ["Verification badge", "Telegram’s badge, or no badge but open about who they are", "An emoji badge inside the name"],
        ]}
      />
      <p>If two or more signs fall in the “suspicious” column, hold off on buying. For how to choose a reliable service, see <Link href="/blog/ishonchli-stars-xizmatini-tanlash">How to choose a reliable Telegram Stars service</Link>.</p>
      <h2 id="stars-premium-va-sovgani-xavfsizroq">How can you buy Stars, Premium and gifts more safely?</h2>
      <p>There’s a simple way to lower the risk when buying digital Telegram products: don’t give any service access to your account. StarsPaymee asks only for an @username. It doesn’t need your password, an SMS code or access to your account.</p>
      <Steps>
        <Step title={"Open the bot"}>Go to <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> and check the username letter by letter.</Step>
        <Step title={"Choose a product"}>Pick Stars (minimum order: 50), Premium or a gift.</Step>
        <Step title={"Enter the recipient’s @username"}>Use your own, or the username of the person you’re gifting.</Step>
        <Step title={"Pay in som"}>One Star costs {som(STARS_PER_UNIT_UZS, "en")} by card transfer (UzCard/HUMO) or from your bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. Premium costs {som(premium(3), "en")} for 3 months, {som(premium(6), "en")} for 6 months and {som(premium(12), "en")} for 12 months. Premium prices are the same for every payment method.</Step>
        <Step title={"Check delivery"}>Orders usually arrive automatically within a few seconds. If something goes wrong, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Step>
      </Steps>
      <p>If the account already has an active Premium subscription, the bot won’t create a new Premium order. StarsPaymee is an independent service, separate from Telegram, and doesn’t act on Telegram’s behalf. It doesn’t buy Stars or gifts from users. If someone offers to buy your Stars “on behalf of StarsPaymee”, it isn’t StarsPaymee. Prices and plans are also listed on the <Link href="/stars">/stars</Link> and <Link href="/premium">/premium</Link> pages.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/verify", label: "Page Verification Guidelines" },
          { href: "https://telegram.org/tos/eu-dsa", label: "User guidance for the EU Digital Services Act" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "The shop’s ad ran on a Telegram channel. Will Telegram refund my money?", answer: "No. An ad doesn’t mean Telegram vouches for the shop. Bots and mini apps are third-party services, so contact the seller, your bank or your payment app about the money." },
  { question: "I paid with Stars and my order never arrived. Who do I contact?", answer: "Start with the bot you paid and its support team. Give the bot’s name, the date and the number of Stars, and ask the bot about its refund terms." },
  { question: "I paid the shop with UzCard or HUMO. Is it worth calling my bank?", answer: "Yes, but only the bank that issued your card can tell you what’s possible, and each bank has its own process. Before you call, have the receipt, amount, date and recipient’s name ready." },
  { question: "Can I get back money I paid in crypto?", answer: "Unless the wallet owner sends it back, assume the chances are very low, because there’s no middleman like a bank. Keep the transaction hash, but never connect your wallet for strangers who promise a refund." },
  { question: "Are the Toygers toy refunds real?", answer: "The claim spread through posts on Telegram channels. No official source confirms the amount, the bot or the payout process. Treat it as unverified until the project posts it on its own channel or website." },
  { question: "I sent a command to a refund bot. Is my account at risk now?", answer: "If all you did was send a command, the bot only sees your public name, username, profile picture and the messages you sent it. If you didn’t share your number or enter codes or card details, that alone doesn’t put your account at risk." },
  { question: "Someone told me to “connect your wallet to receive the refund.” What should I do?", answer: "Say no. You never need to connect a wallet or enter a recovery phrase to receive money, and nobody has a legitimate reason to ask. Screenshot the chat, then block and report the account." },
  { question: "Does a blue checkmark prove a shop is trustworthy?", answer: "Only Telegram can add its official checkmark, and third-party badges look different. An emoji typed into a name doesn’t verify anything, so check the username separately too." },
  { question: "What if the scam shop is messaging people in my name?", answer: "Telegram advises contacting @NoToScam in this case. Warn your friends too, so they don’t open links that seem to come from you." },
  { question: "How do I avoid getting scammed again when buying Stars or Premium?", answer: "Pick a service that asks only for an @username, shows the price before you pay and has a reachable support team. With @StarsPaymee_bot, you pay in som and are never asked for a password or SMS code." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "howto",
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  keywords: ["telegram reklamadagi do'kon aldadi pulni qaytarish","telegram do'kon aldadi nima qilish","telegramda aldanib qolsam pul qaytadimi","telegram firibgar do'kon shikoyat","stars bilan to'lagan pul qaytarish","kartadan firibgarga ketgan pulni qaytarish","pul qaytarish e'loni firibgarlikmi","магазин из рекламы в телеграм обманул как вернуть деньги","возврат денег за скам телеграм","как пожаловаться на мошенника в телеграм","Toygers возврат средств","обманули в телеграм оплата картой возврат"],
  howToSteps: [
    { name: "Dalillarni saqlang", text: "reklama postining skrinshoti, do‘kon bot yoki kanalining @username’i, chek, tranzaksiya ID va butun yozishmalar. Do‘kon kanalni o‘chirib yuborishi mumkin, skrinshot esa sizda qoladi." },
    { name: "Kartani himoyalang", text: "karta ma’lumotini do‘kon saytiga kiritgan bo‘lsangiz, bankka qo‘ng‘iroq qilib kartani bloklatib qo‘ying yoki limit qo‘yishni so‘rang. Batafsil: onlayn to‘lovda karta xavfsizligi." },
    { name: "Sotuvchiga bir marta yozing", text: "buyurtma raqami va sanasini ko‘rsatib, qisqa yozing. Telefon raqam, SMS kod va karta ma’lumotini bermang." },
    { name: "To‘lov kanaliga murojaat qiling", text: "bank yoki to‘lov ilovasining yordam xizmatiga chek va tranzaksiya ID’ni yuboring." },
    { name: "Telegram ichida shikoyat qiling", text: "reklama posti, bot yoki kanaldagi «Report» tugmasidan foydalaning. Notanish odam yozgan bo‘lsa, o‘sha ekranning o‘zida uni bloklab, shikoyat qilsa bo‘ladi (Telegram FAQ)." },
    { name: "Yangi «yordamchilar»ga javob bermang", text: "pulni qaytarib berishni taklif qilib yozganlarni keyingi bo‘limdagi belgilar bo‘yicha tekshiring." },
  ],
  locales: {
    uz: {
      title: "Telegram reklamasidagi do‘kon aldadi: pulni qaytarsa bo‘ladimi?",
      excerpt: "Bunday pul o‘zicha qaytmaydi: Stars uchun sotuvchi botga, karta uchun bankka, Click yoki Payme uchun ilova supportiga yoziladi, kripto esa deyarli qaytmaydi. Qaytarish e’lonini ham avval tekshiring.",
      metaTitle: "Telegram reklamasidagi do‘kon aldadi",
      metaDescription: "Bunday pul o‘zicha qaytmaydi: Stars uchun sotuvchi botga, karta uchun bankka, Click yoki Payme uchun ilova supportiga yoziladi, kripto esa deyarli qaytmaydi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Обманул магазин из рекламы в Telegram: можно ли вернуть деньги?",
      excerpt: "Сами такие деньги не вернутся: за Stars пишут боту-продавцу, за карту — в банк, за Click или Payme — в поддержку приложения, а крипту почти не вернуть. Объявления о возврате тоже стоит проверять.",
      metaTitle: "Обманул магазин из рекламы в Telegram",
      metaDescription: "Сами такие деньги не вернутся: за Stars пишут боту-продавцу, за карту — в банк, за Click или Payme — в поддержку приложения, а крипту почти не вернуть.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Scammed by a shop advertised on Telegram: can you get your money back?",
      excerpt: "Refunds don’t happen on their own. For Stars, contact the seller’s bot. For a card, call your bank. For Click or Payme, contact the app’s support. Crypto rarely comes back. Check any refund announcement before you reply.",
      metaTitle: "Scammed by a shop advertised on Telegram",
      metaDescription: "Refunds don’t happen on their own. For Stars, contact the seller’s bot. For a card, call your bank. For Click or Payme, contact the app’s support.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
