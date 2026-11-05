import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "auksiondan-olingan-raqamda-telegram-akkaunt";

/**
 * Sotib olingan raqamda eski Telegram akkaunt chiqdi: nima qilish kerak?
 *
 * Avtoblogyoz yasagan maqola (2026-11-06): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: O'zbekistonda mobil raqam auksionidan chiroyli raqam sotib olgan yoki olmoqchi bo'lgan Telegram foydalanuvchisi «sotib olingan raqamda eski telegram akkaunt» deb qidiradi va raqamga avvalgi egasining akkaunti bog'langan bo'lsa, o'z akkauntini qanday ochish yoki raqamni qanday ko'chirishni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-06):
 *   https://fragment.com/about
 *   https://telegram.org/blog/ultimate-privacy-topics-2-0
 *   https://core.telegram.org/api/fragment
 *   https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms
 *   https://fragment.com/terms
 *   https://fragment.com/number/88800888000
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Auksiondan yoki sotuvchidan olgan raqamingizga oldingi egasining Telegram akkaunti bog‘langan bo‘lsa, SIM endi sizniki, lekin akkaunt avvalgidek uniki bo‘lib qoladi. Unga kirmang va yozishmalariga tegmang. To‘g‘ri yo‘l — o‘z akkauntingizda raqamni almashtirish bandi orqali yangi raqamni ulash. Raqam bo‘sh chiqsa, unda alohida akkaunt ochish ham mumkin.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#raqam-sizniki-akkaunt-esa-yoq", label: "Raqam sizniki, akkaunt esa yo‘q: bu qanday bo‘ladi?" },
          { href: "#ekranda-nima-koryapsiz-holatlar-jadvali", label: "Ekranda nima ko‘ryapsiz: holatlar jadvali" },
          { href: "#nega-oldingi-egasining-akkauntiga-kirmaslik", label: "Nega oldingi egasining akkauntiga kirmaslik kerak?" },
          { href: "#oz-akkauntingizni-yangi-raqamga-kochirish", label: "O‘z akkauntingizni yangi raqamga ko‘chirish: 6 qadam" },
          { href: "#raqam-band-bolsa-yoki-kimdir", label: "Raqam band bo‘lsa yoki kimdir kod so‘rasa nima qilinadi?" },
          { href: "#chiroyli-raqamda-alohida-ikkinchi-akkaunt", label: "Chiroyli raqamda alohida ikkinchi akkaunt ochsa bo‘ladimi?" },
          { href: "#operator-auksionidagi-sim-va-fragmentdagi", label: "Operator auksionidagi SIM va Fragment’dagi +888: qaysi birini olgansiz?" },
          { href: "#888-raqamga-kirish-kodi-qayerdan", label: "+888 raqamga kirish kodi qayerdan olinadi?" },
          { href: "#888-raqam-olishdan-oldin-fragment", label: "+888 raqam olishdan oldin Fragment shartlarida nimani o‘qish kerak?" },
          { href: "#raqam-almashganda-stars-premium-va", label: "Raqam almashganda Stars, Premium va sovg‘alar nima bo‘ladi?" },
        ]}
      />
      <h2 id="raqam-sizniki-akkaunt-esa-yoq">Raqam sizniki, akkaunt esa yo‘q: bu qanday bo‘ladi?</h2>
      <p>SIM-karta va Telegram akkaunti — ikki alohida narsa. SIM operator bazasida yangi egaga rasmiylashtiriladi. Telegram akkaunti esa shu raqam bilan qachondir ochilgan hisob: unda chatlar, kontaktlar, kanallar, sovg‘alar va xaridlar saqlanadi.</p>
      <p>Operator raqamni sizga o‘tkazganda Telegram’dagi hisob o‘z-o‘zidan yangi egaga o‘tmaydi. Shuning uchun chiroyli raqamni telefonga qo‘yib, Telegram’ga kirmoqchi bo‘lganingizda notanish odamning profili ochilishi mumkin.</p>
      <p>Telegram eski yoki nofaol akkauntlarni qachon va qanday o‘chirishi bu maqolada rasmiy manba bilan tasdiqlanmagan. «Bir necha oy kuting, o‘zi o‘chib ketadi» degan maslahatga tayanmang. Aniq javob kerak bo‘lsa, <a href={"https://telegram.org/support"} target="_blank" rel="noopener noreferrer">Telegram yordam sahifasi</a> orqali so‘rang.</p>
      <h2 id="ekranda-nima-koryapsiz-holatlar-jadvali">Ekranda nima ko‘ryapsiz: holatlar jadvali</h2>
      <p>Raqamni Telegram’ga kiritganingizdan keyin ko‘radigan oynaga qarab harakat qiling:</p>
      <CompareTable
        headers={["Ekranda nima ko‘ryapsiz", "Bu nimani bildiradi", "Nima qilasiz"]}
        rows={[
          ["Kod keldi va notanish chatlar ochildi", "Raqamga oldingi egasining akkaunti bog‘langan", "Darhol chiqing, hech narsani o‘qimang va o‘zgartirmang"],
          ["Koddan keyin parol so‘ralyapti", "Akkauntda ikki bosqichli tekshiruv yoqilgan", "Parolni topishga urinmang, o‘z akkauntingizni ko‘chiring"],
          ["Kod SMS’da kelmayapti", "SIM hali faol emas yoki kod boshqa yo‘l bilan yuborilgan bo‘lishi mumkin", <span key="r2c2">Oddiy SMS tushishini tekshiring, keyin <Link href="/blog/telegram-sms-kod-kelmayotganda">kod kelmaganda nima qilish</Link></span>],
          ["Telegram yangi akkaunt ochishni taklif qilyapti", "Raqam bo‘sh", "Yangi akkaunt oching yoki mavjud akkauntingizni ko‘chiring"],
          ["Ko‘chirishda raqam band ekani aytilyapti", "Raqamda hali boshqa akkaunt turgan bo‘lishi mumkin", "Pastdagi «band raqam» bo‘limiga qarang"],
          ["Kimdir «oldingi egaman» deb kod so‘rab yozyapti", "Akkauntni qaytarish urinishi yoki firibgarlik", "Kodni bermang, yozishmani to‘xtating"],
        ]}
      />
      <p>Menyu va ogohlantirish matnlari ilova versiyasiga qarab farq qilishi mumkin. Jadval ekranda ko‘rinadigan belgilar bo‘yicha yo‘l-yo‘riq beradi, Telegram’ning ichki qoidalari emas.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="nega-oldingi-egasining-akkauntiga-kirmaslik">Nega oldingi egasining akkauntiga kirmaslik kerak?</h2>
      <p>SMS kod telefoningizga kelgani sizga bu akkauntga kirish huquqini bermaydi. Bunga bir necha sabab bor:</p>
      <ul>
        <li><b>Bu boshqa odamning shaxsiy yozishmalari.</b> Chatlar, suratlar, kontaktlar va fayllar oldingi egaga tegishli. Ularni o‘qish yoki o‘zgartirish keyin nizoga olib kelishi mumkin.</li>
        <li><b>Parol bo‘lsa, baribir kira olmaysiz.</b> Ikki bosqichli tekshiruv yoqilgan akkauntda koddan keyin parol so‘raladi. Uni taxmin qilish vaqt yo‘qotishdan boshqa narsa emas.</li>
        <li><b>Akkaunt sizga hech narsa bermaydi.</b> Undagi xaridlar, kanallar va sovg‘alar oldingi egasiga tegishli. Sizga kerak bo‘lgani — o‘z akkauntingizni shu raqamga ulash.</li>
        <li><b>Raqam bo‘sh bo‘lishi ham mumkin.</b> Oldingi ega akkauntini boshqa raqamga ko‘chirib ulgurgan bo‘lsa, Telegram sizga oddiy ro‘yxatdan o‘tishni taklif qiladi.</li>
      </ul>
      <p>O‘z akkauntingizni shunday holatlardan himoyalash bo‘yicha: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">Telegram akkauntini o‘g‘irlashdan himoya va 2FA</Link>.</p>
      <h2 id="oz-akkauntingizni-yangi-raqamga-kochirish">O‘z akkauntingizni yangi raqamga ko‘chirish: 6 qadam</h2>
      <p>Yangi raqamdagi eski akkauntga umuman kirmasdan, o‘z akkauntingiz ichida raqamni almashtirasiz. Chatlar, kanallar va xaridlar sizda qoladi, faqat kirish raqami yangilanadi.</p>
      <Steps>
        <Step title={"SIM’ni faollashtiring"}>boshqa telefondan yangi raqamga oddiy SMS yuboring va u tushayotganini tekshiring.</Step>
        <Step title={"O‘z akkauntingizni oching"}>hozirgi raqamingiz bilan kirilgan telefon yoki kompyuterda.</Step>
        <Step title={"Raqamni almashtirish bandini toping"}>u sozlamalarda, profil va telefon raqami qatorida turadi; nomi ilova versiyasiga qarab farq qilishi mumkin.</Step>
        <Step title={"Yangi raqamni kiriting"}>mamlakat kodi bilan, to‘liq va xatosiz.</Step>
        <Step title={"Kodni faqat ilovaga yozing"}>SMS’dagi kodni hech kimga aytmang, o‘zini «Telegram xodimi» yoki «operator» deb tanishtirgan odamga ham.</Step>
        <Step title={"Natijani tekshiring"}>profilda yangi raqam ko‘rinsa, ko‘chirish tugagan.</Step>
      </Steps>
      <p>Tasdiqlashdan oldin ekrandagi matnni oxirigacha o‘qing. Ma’nosini tushunmasangiz, tugmani bosmang.</p>
      <p>Ko‘chirish tugagach, ikki bosqichli parolni yoqing yoki yangilang. Shunda keyinchalik raqamingiz boshqa odamga o‘tsa ham, u faqat SMS kod bilan akkauntingizga kira olmaydi.</p>
      <h2 id="raqam-band-bolsa-yoki-kimdir">Raqam band bo‘lsa yoki kimdir kod so‘rasa nima qilinadi?</h2>
      <p>Raqamda oldingi egasining akkaunti hali turgan bo‘lsa, Telegram uni sizning akkauntingizga ulashni rad etishi mumkin. Bu holatda Telegram qaysi xabarni ko‘rsatishi va qanday yo‘l taklif qilishi rasmiy manba bilan tekshirilmagan. Xavfsiz harakatlar:</p>
      <ul>
        <li><b>Eski akkauntni o‘zingiz o‘chirishga urinmang.</b> Bu uchun unga kirish kerak bo‘ladi, bu esa boshqa odamning hisobiga aralashish degani.</li>
        <li><b>Telegram yordamiga o‘zingiz yozing.</b> Vaziyatni qisqa tushuntiring: raqam qachon va qayerdan olingan, nima qilmoqchisiz. Murojaatni <a href={"https://telegram.org/support"} target="_blank" rel="noopener noreferrer">telegram.org</a> orqali yuboring.</li>
        <li><b>Operator Telegram akkauntini boshqarmaydi.</b> U SIM bo‘yicha savollarga javob beradi, Telegram’dagi hisobni o‘chira olmaydi.</li>
        <li><b>Vaqti-vaqti bilan qayta urinib ko‘ring.</b> Oldingi ega akkauntini boshqa raqamga o‘tkazsa, raqam bo‘shaydi.</li>
      </ul>
      <p>Raqam almashgan paytda quyidagi xabarlar shubhali:</p>
      <ul>
        <li>«Men bu raqamning oldingi egasiman, kelgan kodni yuboring.»</li>
        <li>«Operator xizmatidanmiz, raqamni tasdiqlash uchun kodni ayting.»</li>
        <li>«Eski akkauntni o‘chirib beramiz, oldindan to‘lang.»</li>
        <li>«Raqamni qayta ro‘yxatdan o‘tkazish uchun havolaga kiring» — notanish saytga olib boradigan havola.</li>
      </ul>
      <p>Har qanday kod faqat ilovaga kiritiladi. Kod so‘ragan odam bilan yozishmani to‘xtating.</p>
      <h2 id="chiroyli-raqamda-alohida-ikkinchi-akkaunt">Chiroyli raqamda alohida ikkinchi akkaunt ochsa bo‘ladimi?</h2>
      <p>Ha, agar raqam bo‘sh bo‘lsa. Telegram ro‘yxatdan o‘tishni taklif qilsa, yangi akkaunt ochasiz va uni asosiysi bilan bitta ilovada yonma-yon ishlatasiz. Masalan, eski akkaunt oila va do‘stlar uchun, chiroyli raqamdagisi esa do‘kon yoki mijozlar bilan yozishish uchun.</p>
      <p>Premium va boshqa xaridlar telefonga emas, aniq akkauntga bog‘lanadi. Bir akkauntga olingan obuna ikkinchisida ishlamaydi. Batafsil: <Link href="/blog/telegram-premium-bir-nechta-akkaunt">Premium bir nechta akkauntda ishlaydimi</Link>.</p>
      <p>Raqam faqat Telegram uchun kerak bo‘lsa, operator auksionida qimmat raqam qidirish shart emas. Boshqa yo‘l haqida: <Link href="/blog/telegram-raqam-sotib-olish">Telegram uchun virtual raqam</Link>.</p>
      <h2 id="operator-auksionidagi-sim-va-fragmentdagi">Operator auksionidagi SIM va Fragment’dagi +888: qaysi birini olgansiz?</h2>
      <p>Kanallarda oddiy fuqarolar ham mobil raqamini auksionga qo‘yishi mumkinligi va e’lon uchun haq olinishi haqida postlar tarqalgan. Bu shartlar Telegram yoki Fragment manbalarida topilmadi. Ular mobil operatorlar auksioniga tegishli bo‘lishi mumkin, shuning uchun narx va to‘lovlarni operatorning o‘zida tekshiring.</p>
      <p>Fragment — boshqa bozor. Telegram 2022-yil oxirida TON blokcheynida soni cheklangan kolleksion virtual raqamlar chiqargan (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment haqida</a>). Egalar ularni istalgan paytda xususiy sotishi yoki ochiq auksionga qo‘yishi mumkin (<a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Fragment shartlari</a>).</p>
      <CompareTable
        headers={["Belgi", "Operator auksionidagi raqam", "Fragment’dagi +888 raqam"]}
        rows={[
          ["Nima olasiz", "SIM-karta", "Hamyonga yozilgan kolleksion raqam"],
          ["Telegram kodi qayerga keladi", "SMS’ga", "Fragment sahifasiga"],
          ["Kirish uchun nima kerak", "Faol SIM", "Raqam egasi bo‘lgan hamyon"],
          ["Qo‘ng‘iroq va SMS", "Bor", "Fragment ma’lumotiga ko‘ra yo‘q"],
          ["«Eski akkaunt» muammosi", "Oldingi egasining akkaunti raqamda qolgan bo‘lishi mumkin", "Kodni faqat hamyon egasi ko‘radi"],
        ]}
      />
      <p>Telegram blogida yozilishicha, bunday raqam bilan SIM-kartasiz akkaunt ochish va unga kirish mumkin (<a href={"https://telegram.org/blog/ultimate-privacy-topics-2-0"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>). Texnik hujjatga ko‘ra, kolleksion raqamlar Telegram akkauntini odatiy ro‘yxatdan o‘tish va kirish jarayoni orqali yaratishda ishlatiladi (<a href={"https://core.telegram.org/api/fragment"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>). Bank yoki boshqa ilovalarda ro‘yxatdan o‘tish uchun +888 raqamga tayanmang.</p>
      <h2 id="888-raqamga-kirish-kodi-qayerdan">+888 raqamga kirish kodi qayerdan olinadi?</h2>
      <p>+888 raqamda kod SMS bilan kelmaydi — uni faqat raqam egasi bo‘lgan hamyon ko‘ra oladi. Tartib quyidagicha:</p>
      <Steps>
        <Step title={"Raqamni kiriting"}>Telegram kirish oynasida yoki raqamni almashtirish bandida +888 raqamni yozing.</Step>
        <Step title={"Hamyonni Fragment’ga ulang"}>bir martalik kod (OTP) so‘ralganda.</Step>
        <Step title={"Fragment’ga to‘g‘ri hamyon bilan kiring"}>fragment.com’ga aynan shu raqam egasi bo‘lgan hamyon bilan kirilgandagina kod ko‘rinadi.</Step>
        <Step title={"Kodni ilovaga kiriting"}>kirish yakunlanadi.</Step>
      </Steps>
      <p>Fragment’dagi raqam sahifasida Tonkeeper hamyonini yaratish va unga qo‘llab-quvvatlanadigan birjadan yoki Telegram’dagi @wallet orqali mablag‘ kiritish ko‘rsatilgan.</p>
      <p>Texnik hujjatga ko‘ra, Telegram API orqali kolleksion raqamning xarid sanasi va narxi haqida ma’lumot olish mumkin. Bu dasturchilar uchun ma’lumot manbai, oddiy xaridor uchun tayyor tekshiruv vositasi emas.</p>
      <h2 id="888-raqam-olishdan-oldin-fragment">+888 raqam olishdan oldin Fragment shartlarida nimani o‘qish kerak?</h2>
      <p>Fragment shartlarida xaridorga to‘g‘ridan-to‘g‘ri ta’sir qiladigan bandlar bor (<a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Terms of Service</a>):</p>
      <Notice label={"Pul qaytarilmaydi"}>Egalik doimiy deb belgilangan va uni kompaniya ham bekor qila olmaydi, shuning uchun xaridlar qaytarilmaydi.</Notice>
      <Notice label={"Hamyonga kirish yo‘qolsa, raqam ham yo‘qoladi"}>Kirish ma’lumotlari yo‘qolsa, kompaniya hamyonni ham, undagi kolleksiyalarni ham tiklay olmaydi.</Notice>
      <Notice label={"Akkaunt bloklansa, zarar qoplanmaydi"}>Akkaunt Telegram yoki egasining o‘zi tomonidan bloklansa yoki o‘chirilsa va raqamdan foydalanib bo‘lmay qolsa, kompaniya javobgar emas.</Notice>
      <Notice label={"Xizmat mamlakatga qarab cheklanishi mumkin"}>Kompaniya qaysi mamlakatlarda qaysi xizmatlar ishlashini ogohlantirmasdan o‘zgartirishi mumkin.</Notice>
      <p>Fragment’ning komissiyasi, auksion qadami va muddatlari bu maqolada tasdiqlanmagan — ularni platformaning o‘zida tekshiring.</p>
      <h2 id="raqam-almashganda-stars-premium-va">Raqam almashganda Stars, Premium va sovg‘alar nima bo‘ladi?</h2>
      <p>Stars balansi, Premium obunasi va sovg‘alar raqamga emas, akkauntga yozilgan. Raqamni o‘z akkauntingiz ichida almashtirsangiz, akkaunt o‘zgarmaydi va ular joyida qoladi. Oldingi egasining akkauntidagi yulduz va sovg‘alar esa sizga o‘tmaydi — raqamni qimmatga olganingiz bunga ta’sir qilmaydi.</p>
      <p>StarsPaymee boti buyurtma uchun faqat @username so‘raydi: parol, SMS kod yoki akkauntga kirish kerak emas. Shu sababli raqam almashishi bot orqali xaridga xalaqit bermaydi. Stars narxi to‘lov usuliga bog‘liq: UzCard/HUMO kartaga o‘tkazma yoki bot balansidan donasi {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Eng kam buyurtma — 50 Stars. Batafsil: <Link href="/stars">Stars</Link> va <Link href="/premium">Premium</Link> sahifalari.</p>
      <p>Ikkita akkaunt bilan ishlasangiz, buyurtmadan oldin yulduz yoki obuna qaysi akkauntga kerakligini aniqlang. Har birining @username’i boshqa, shuning uchun buyurtmaga aynan keraklisini yozing.</p>
      <p>Premium bo‘yicha bitta cheklov bor: akkauntda faol obuna bo‘lsa, bot yangi Premium buyurtmasini ochmaydi — muddat faol obuna ustiga qo‘shilmaydi. Obuna tugashini kutib, keyin 3, 6 yoki 12 oylik tarifni tanlaysiz. Batafsil: <Link href="/blog/telegram-premium-muddatini-uzaytirish">Premium muddatini uzaytirish</Link>.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://telegram.org/blog/ultimate-privacy-topics-2-0", label: "No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More" },
          { href: "https://core.telegram.org/api/fragment", label: "Fragment collectibles" },
          { href: "https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms", label: "auth.sentCodeTypeFragmentSms" },
          { href: "https://fragment.com/terms", label: "Terms of Service" },
          { href: "https://fragment.com/number/88800888000", label: "+888 0088 8000" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Auksiondan raqam oldim, Telegram ochilganda boshqa odamning chatlari chiqdi. Bular endi menikimi?", answer: "Yo‘q. Sizga faqat SIM o‘tgan, hisob va undagi yozishmalar avvalgi egasiniki bo‘lib qoladi. Undan chiqing va o‘z akkauntingizda raqamni almashtirish bandidan foydalaning." },
  { question: "Raqam endi menda bo‘lsa, oldingi ega o‘z akkauntidan foydalanishda davom eta oladimi?", answer: "Akkaunt uning qurilmalarida ochiq qolgan bo‘lsa, u undan foydalanishi va raqamni boshqasiga almashtirishi mumkin. Yangi SMS kodlar esa endi sizning SIM’ingizga keladi, shuning uchun u so‘rasa ham kodni bermang." },
  { question: "Raqamni olganimdan keyin Telegram kodi kelmayapti, nimadan boshlay?", answer: "Avval SIM faolligini tekshiring: boshqa telefondan oddiy SMS yuborib ko‘ring. SMS tushsa-yu, Telegram kodi kelmasa, kod boshqa yo‘l bilan yuborilgan bo‘lishi mumkin — ilovadagi variantlarni ko‘rib chiqing." },
  { question: "Raqamni o‘z akkauntimga ulasam, guruhlar va saqlangan fayllar yo‘qolmaydimi?", answer: "Yo‘qolmaydi. Raqam akkaunt ichida almashtirilganda yangi hisob ochilmaydi, faqat kirish raqami yangilanadi." },
  { question: "Telegram raqamni band deb ko‘chirmayapti. Operatorga borsam, eski akkauntni o‘chirib beradimi?", answer: "Operator faqat SIM bilan ishlaydi, Telegram’dagi hisobga uning ta’siri yo‘q. Bu holda Telegram yordamiga o‘zingiz yozing yoki raqam bo‘shashini kutib, keyinroq qayta urinib ko‘ring." },
  { question: "Fragment’dagi +888 raqamni operator auksionidan olsa bo‘ladimi?", answer: "Bular ikki xil bozor. Operator auksionida SIM-kartali raqam sotiladi, +888 raqamlar esa Fragment’da egalari tomonidan xususiy yoki ochiq auksion orqali sotiladi." },
  { question: "Chiroyli +888 raqam faqat Telegram profilim uchun kerak. SIM o‘rnini bosa oladimi?", answer: "Telegram’ga kirish uchun bunday raqam yetarli, kod Fragment orqali olinadi. Lekin Fragment ma’lumotiga ko‘ra u bilan qo‘ng‘iroq qilib ham, SMS yuborib ham bo‘lmaydi, shuning uchun boshqa xizmatlar uchun oddiy raqam kerak bo‘ladi." },
  { question: "Oldingi egasining akkauntidagi Stars yoki sovg‘alarni o‘zimga o‘tkazib olsam bo‘ladimi?", answer: "Yo‘q, ular uning hisobiga yozilgan va raqam bilan birga sizga o‘tmaydi. O‘zingizga yulduz kerak bo‘lsa, ularni o‘z akkauntingizga alohida oling." },
  { question: "Raqam almashgandan keyin StarsPaymee orqali Stars yoki Premium olish uchun nimani yozaman?", answer: "Faqat yulduz yoki obuna tushadigan akkauntning @username’ini. Bot telefon raqami, parol yoki SMS kod so‘ramaydi, shuning uchun raqam o‘zgargani buyurtmaga ta’sir qilmaydi." },
  { question: "Kimdir «raqamdagi eski akkauntni tozalab beraman» deb oldindan pul so‘rayapti. Ishonsa bo‘ladimi?", answer: "Ishonmang va hech qanday kod bermang. Bunday xizmatni hech kim kafolatlay olmaydi. Savolingiz bo‘lsa, Telegram yordamiga o‘zingiz murojaat qiling." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Если на номер, купленный на аукционе или у продавца, зарегистрирован Telegram-аккаунт прежнего владельца, SIM-карта теперь ваша, а аккаунт по-прежнему принадлежит ему. Не входите в него и не трогайте чужую переписку. Правильный путь — привязать новый номер к своему аккаунту через пункт смены номера. Если номер окажется свободным, на нём можно завести и отдельный аккаунт.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#raqam-sizniki-akkaunt-esa-yoq", label: "Номер ваш, а аккаунт нет: как так получается?" },
          { href: "#ekranda-nima-koryapsiz-holatlar-jadvali", label: "Что вы видите на экране: таблица ситуаций" },
          { href: "#nega-oldingi-egasining-akkauntiga-kirmaslik", label: "Почему не стоит входить в аккаунт прежнего владельца?" },
          { href: "#oz-akkauntingizni-yangi-raqamga-kochirish", label: "Как перенести свой аккаунт на новый номер: 6 шагов" },
          { href: "#raqam-band-bolsa-yoki-kimdir", label: "Что делать, если номер занят или кто-то просит код?" },
          { href: "#chiroyli-raqamda-alohida-ikkinchi-akkaunt", label: "Можно ли завести на красивом номере второй аккаунт?" },
          { href: "#operator-auksionidagi-sim-va-fragmentdagi", label: "SIM с аукциона оператора или +888 на Fragment: что у вас?" },
          { href: "#888-raqamga-kirish-kodi-qayerdan", label: "Где взять код входа для номера +888?" },
          { href: "#888-raqam-olishdan-oldin-fragment", label: "Что прочитать в условиях Fragment перед покупкой +888?" },
          { href: "#raqam-almashganda-stars-premium-va", label: "Что будет со Stars, Premium и подарками при смене номера?" },
        ]}
      />
      <h2 id="raqam-sizniki-akkaunt-esa-yoq">Номер ваш, а аккаунт нет: как так получается?</h2>
      <p>SIM-карта и аккаунт Telegram — это две разные вещи. SIM-карту оператор переоформляет на нового владельца в своей базе. Аккаунт Telegram — это профиль, который когда-то зарегистрировали на этот номер. В нём хранятся чаты, контакты, каналы, подарки и покупки.</p>
      <p>Когда оператор передаёт вам номер, аккаунт в Telegram сам к новому владельцу не переходит. Поэтому, вставив SIM-карту с красивым номером и попытавшись войти в Telegram, вы можете увидеть профиль незнакомого человека.</p>
      <p>Когда и как Telegram удаляет старые или неактивные аккаунты, в этой статье официальным источником не подтверждено. Не полагайтесь на советы вроде «подождите пару месяцев, сам удалится». Если нужен точный ответ, спросите через <a href={"https://telegram.org/support"} target="_blank" rel="noopener noreferrer">страницу поддержки Telegram</a>.</p>
      <h2 id="ekranda-nima-koryapsiz-holatlar-jadvali">Что вы видите на экране: таблица ситуаций</h2>
      <p>Действуйте по тому, какое окно появилось после ввода номера в Telegram:</p>
      <CompareTable
        headers={["Что на экране", "Что это значит", "Что делать"]}
        rows={[
          ["Код пришёл, открылись чужие чаты", "К номеру привязан аккаунт прежнего владельца", "Сразу выйдите, ничего не читайте и не меняйте"],
          ["После кода запрашивается пароль", "В аккаунте включена двухэтапная проверка", "Не пытайтесь подобрать пароль, перенесите свой аккаунт"],
          ["Код не приходит по SMS", "SIM ещё не активна или код отправлен другим способом", <span key="r2c2">Проверьте, доходят ли обычные SMS, затем смотрите <Link href="/blog/telegram-sms-kod-kelmayotganda">что делать, если не приходит код</Link></span>],
          ["Telegram предлагает создать новый аккаунт", "Номер свободен", "Создайте новый аккаунт или перенесите существующий"],
          ["При переносе сообщается, что номер занят", "На номере, вероятно, ещё числится другой аккаунт", "Смотрите раздел о занятом номере ниже"],
          ["Кто-то пишет «я прежний владелец» и просит код", "Попытка вернуть аккаунт или мошенничество", "Не отдавайте код, прекратите переписку"],
        ]}
      />
      <p>Названия пунктов меню и тексты предупреждений зависят от версии приложения. Таблица ориентирует по тому, что видно на экране, а не описывает внутренние правила Telegram.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="nega-oldingi-egasining-akkauntiga-kirmaslik">Почему не стоит входить в аккаунт прежнего владельца?</h2>
      <p>То, что SMS-код пришёл на ваш телефон, не даёт вам права пользоваться этим аккаунтом. Причин несколько:</p>
      <ul>
        <li><b>Это чужая личная переписка.</b> Чаты, фото, контакты и файлы принадлежат прежнему владельцу. Если читать или менять их, позже может возникнуть конфликт.</li>
        <li><b>Если стоит пароль, вы всё равно не войдёте.</b> В аккаунте с двухэтапной проверкой после кода запрашивается пароль. Угадывать его — пустая трата времени.</li>
        <li><b>Вам этот аккаунт ничего не даёт.</b> Покупки, каналы и подарки в нём остаются за прежним владельцем. Вам нужно другое — привязать к этому номеру собственный аккаунт.</li>
        <li><b>Номер может оказаться свободным.</b> Если прежний владелец уже перенёс аккаунт на другой номер, Telegram просто предложит обычную регистрацию.</li>
      </ul>
      <p>Как защитить свой аккаунт от подобных ситуаций: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">защита Telegram-аккаунта от взлома и 2FA</Link>.</p>
      <h2 id="oz-akkauntingizni-yangi-raqamga-kochirish">Как перенести свой аккаунт на новый номер: 6 шагов</h2>
      <p>В старый аккаунт на новом номере вы вообще не заходите — номер меняется внутри вашего собственного аккаунта. Чаты, каналы и покупки остаются с вами, обновляется только номер для входа.</p>
      <Steps>
        <Step title={"Активируйте SIM-карту"}>отправьте на новый номер обычное SMS с другого телефона и убедитесь, что оно дошло.</Step>
        <Step title={"Откройте свой аккаунт"}>на телефоне или компьютере, где вы вошли со своим текущим номером.</Step>
        <Step title={"Найдите пункт смены номера"}>он в настройках, в строке профиля и номера телефона; название зависит от версии приложения.</Step>
        <Step title={"Введите новый номер"}>с кодом страны, полностью и без ошибок.</Step>
        <Step title={"Вводите код только в приложение"}>никому не сообщайте код из SMS, даже тому, кто представляется «сотрудником Telegram» или «оператором».</Step>
        <Step title={"Проверьте результат"}>если в профиле отображается новый номер, перенос завершён.</Step>
      </Steps>
      <p>Перед подтверждением дочитайте текст на экране до конца. Если смысл непонятен, не нажимайте кнопку.</p>
      <p>После переноса включите или обновите облачный пароль двухэтапной проверки. Тогда, даже если ваш номер когда-нибудь достанется другому человеку, одного SMS-кода ему не хватит, чтобы войти в ваш аккаунт.</p>
      <h2 id="raqam-band-bolsa-yoki-kimdir">Что делать, если номер занят или кто-то просит код?</h2>
      <p>Если на номере всё ещё числится аккаунт прежнего владельца, Telegram может отказать в привязке номера к вашему аккаунту. Какое сообщение при этом показывает Telegram и какой путь предлагает, официальным источником не проверено. Безопасные действия:</p>
      <ul>
        <li><b>Не пытайтесь сами удалить старый аккаунт.</b> Для этого придётся в него войти, а это вмешательство в чужой профиль.</li>
        <li><b>Напишите в поддержку Telegram сами.</b> Коротко опишите ситуацию: когда и где получен номер и что вы хотите сделать. Обращение отправьте через <a href={"https://telegram.org/support"} target="_blank" rel="noopener noreferrer">telegram.org</a>.</li>
        <li><b>Оператор не управляет аккаунтами Telegram.</b> Он отвечает на вопросы по SIM-карте, но удалить профиль в Telegram не может.</li>
        <li><b>Периодически пробуйте снова.</b> Если прежний владелец перенесёт аккаунт на другой номер, ваш номер освободится.</li>
      </ul>
      <p>В период смены номера подозрительны такие сообщения:</p>
      <ul>
        <li>«Я прежний владелец этого номера, пришлите пришедший код».</li>
        <li>«Мы из службы оператора, назовите код для подтверждения номера».</li>
        <li>«Удалим старый аккаунт, нужна предоплата».</li>
        <li>«Для перерегистрации номера перейдите по ссылке» — со ссылкой на незнакомый сайт.</li>
      </ul>
      <p>Любой код вводится только в приложение. С тем, кто просит код, переписку прекращайте.</p>
      <h2 id="chiroyli-raqamda-alohida-ikkinchi-akkaunt">Можно ли завести на красивом номере второй аккаунт?</h2>
      <p>Да, если номер свободен. Когда Telegram предлагает регистрацию, вы создаёте новый аккаунт и пользуетесь им в одном приложении рядом с основным. Например, старый аккаунт — для семьи и друзей, а аккаунт на красивом номере — для магазина или общения с клиентами.</p>
      <p>Premium и другие покупки привязываются не к телефону, а к конкретному аккаунту. Подписка, оформленная на один аккаунт, на втором работать не будет. Подробнее: <Link href="/blog/telegram-premium-bir-nechta-akkaunt">работает ли Premium на нескольких аккаунтах</Link>.</p>
      <p>Если номер нужен только для Telegram, искать дорогой номер на аукционе оператора не обязательно. О другом варианте: <Link href="/blog/telegram-raqam-sotib-olish">виртуальный номер для Telegram</Link>.</p>
      <h2 id="operator-auksionidagi-sim-va-fragmentdagi">SIM с аукциона оператора или +888 на Fragment: что у вас?</h2>
      <p>В каналах расходятся посты о том, что обычные граждане тоже могут выставить свой мобильный номер на аукцион и что за объявление взимается плата. В источниках Telegram и Fragment эти условия не найдены. Скорее всего, они относятся к аукционам мобильных операторов, поэтому цены и платежи уточняйте у самого оператора.</p>
      <p>Fragment — совсем другой рынок. В конце 2022 года Telegram выпустил ограниченную серию коллекционных виртуальных номеров на блокчейне TON (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">о Fragment</a>). Владельцы могут в любой момент продать их частным образом или выставить на открытый аукцион (<a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">условия Fragment</a>).</p>
      <CompareTable
        headers={["Признак", "Номер с аукциона оператора", "Номер +888 на Fragment"]}
        rows={[
          ["Что вы получаете", "SIM-карту", "Коллекционный номер, записанный на кошелёк"],
          ["Куда приходит код Telegram", "В SMS", "На страницу Fragment"],
          ["Что нужно для входа", "Активная SIM-карта", "Кошелёк, которому принадлежит номер"],
          ["Звонки и SMS", "Есть", "По данным Fragment, нет"],
          ["Проблема «старого аккаунта»", "На номере может остаться аккаунт прежнего владельца", "Код видит только владелец кошелька"],
        ]}
      />
      <p>Как пишет блог Telegram, с таким номером можно создать аккаунт без SIM-карты и входить в него (<a href={"https://telegram.org/blog/ultimate-privacy-topics-2-0"} target="_blank" rel="noopener noreferrer">блог Telegram</a>). По технической документации, коллекционные номера используются для создания аккаунтов Telegram через обычный процесс регистрации и входа (<a href={"https://core.telegram.org/api/fragment"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>). Не рассчитывайте на номер +888 для регистрации в банковских и других приложениях.</p>
      <h2 id="888-raqamga-kirish-kodi-qayerdan">Где взять код входа для номера +888?</h2>
      <p>На номер +888 код по SMS не приходит — его видит только кошелёк, которому принадлежит номер. Порядок такой:</p>
      <Steps>
        <Step title={"Введите номер"}>в окне входа Telegram или в пункте смены номера укажите номер +888.</Step>
        <Step title={"Подключите кошелёк к Fragment"}>когда приложение запросит одноразовый код (OTP).</Step>
        <Step title={"Войдите на Fragment нужным кошельком"}>код отображается, только если войти на fragment.com именно тем кошельком, которому принадлежит номер.</Step>
        <Step title={"Введите код в приложение"}>вход завершится.</Step>
      </Steps>
      <p>На странице номера на Fragment указано, что нужно создать кошелёк Tonkeeper и пополнить его с поддерживаемой биржи или через @wallet в Telegram.</p>
      <p>По технической документации, через API Telegram можно получить информацию о дате покупки и цене коллекционного номера. Это источник данных для разработчиков, а не готовый инструмент проверки для обычного покупателя.</p>
      <h2 id="888-raqam-olishdan-oldin-fragment">Что прочитать в условиях Fragment перед покупкой +888?</h2>
      <p>В условиях Fragment есть пункты, которые напрямую касаются покупателя (<a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Terms of Service</a>):</p>
      <Notice label={"Деньги не возвращаются"}>Владение объявлено постоянным, и даже компания не может его отменить, поэтому покупки возврату не подлежат.</Notice>
      <Notice label={"Потеряли доступ к кошельку — потеряли и номер"}>Если данные для входа утеряны, компания не сможет восстановить ни кошелёк, ни коллекционные предметы в нём.</Notice>
      <Notice label={"Блокировка аккаунта не компенсируется"}>Если аккаунт заблокирован или удалён Telegram либо самим владельцем и номером больше нельзя пользоваться, компания ответственности не несёт.</Notice>
      <Notice label={"Сервис может быть ограничен по странам"}>Компания вправе без предупреждения менять, в каких странах и какие её сервисы доступны.</Notice>
      <p>Комиссия Fragment, шаг ставки и сроки аукциона в этой статье не подтверждены — уточняйте их на самой платформе.</p>
      <h2 id="raqam-almashganda-stars-premium-va">Что будет со Stars, Premium и подарками при смене номера?</h2>
      <p>Баланс Stars, подписка Premium и подарки записаны не на номер, а на аккаунт. Если сменить номер внутри своего аккаунта, сам аккаунт не меняется, и всё остаётся на месте. А звёзды и подарки из аккаунта прежнего владельца к вам не перейдут — даже если номер обошёлся дорого.</p>
      <p>Бот StarsPaymee для заказа просит только @username: пароль, SMS-код или вход в аккаунт не нужны. Поэтому смена номера не мешает покупкам через бота. Цена Stars зависит от способа оплаты: при переводе на карту UzCard/HUMO или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")} за штуку, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars. Подробнее на страницах <Link href="/stars">Stars</Link> и <Link href="/premium">Premium</Link>.</p>
      <p>Если вы пользуетесь двумя аккаунтами, перед заказом решите, на какой из них нужны звёзды или подписка. У каждого свой @username, поэтому в заказе указывайте именно нужный.</p>
      <p>По Premium есть одно ограничение: если на аккаунте действует подписка, бот не откроет новый заказ Premium — срок не добавляется поверх активной подписки. Дождитесь окончания подписки и затем выберите тариф на 3, 6 или 12 месяцев. Подробнее: <Link href="/blog/telegram-premium-muddatini-uzaytirish">можно ли продлить Premium</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://telegram.org/blog/ultimate-privacy-topics-2-0", label: "No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More" },
          { href: "https://core.telegram.org/api/fragment", label: "Fragment collectibles" },
          { href: "https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms", label: "auth.sentCodeTypeFragmentSms" },
          { href: "https://fragment.com/terms", label: "Terms of Service" },
          { href: "https://fragment.com/number/88800888000", label: "+888 0088 8000" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Купил номер на аукционе, открыл Telegram — а там чужие чаты. Теперь они мои?", answer: "Нет. Вам перешла только SIM-карта, а профиль и переписка по-прежнему принадлежат прежнему владельцу. Выйдите из него и воспользуйтесь сменой номера в своём аккаунте." },
  { question: "Номер теперь у меня. Может ли прежний владелец и дальше пользоваться своим аккаунтом?", answer: "Если аккаунт остался открытым на его устройствах, он может им пользоваться и сменить номер на другой. Новые SMS-коды при этом приходят уже на вашу SIM-карту, так что даже по его просьбе код не отдавайте." },
  { question: "После покупки номера не приходит код Telegram. С чего начать?", answer: "Сначала убедитесь, что SIM-карта активна: отправьте на неё обычное SMS с другого телефона. Если SMS доходят, а кода Telegram нет, возможно, он отправлен другим способом — посмотрите варианты в приложении." },
  { question: "Если привязать номер к своему аккаунту, не пропадут ли группы и сохранённые файлы?", answer: "Не пропадут. При смене номера внутри аккаунта новый профиль не создаётся, меняется только номер для входа." },
  { question: "Telegram не даёт перенести номер, пишет, что он занят. Оператор может удалить старый аккаунт?", answer: "Оператор работает только с SIM-картой и на профиль в Telegram не влияет. В такой ситуации напишите в поддержку Telegram сами или дождитесь, пока номер освободится, и попробуйте позже." },
  { question: "Можно ли купить номер +888 на аукционе оператора?", answer: "Это два разных рынка. У оператора продаются номера с SIM-картой, а номера +888 продают их владельцы на Fragment — частным образом или через открытый аукцион." },
  { question: "Красивый +888 нужен только для профиля в Telegram. Заменит ли он SIM-карту?", answer: "Для входа в Telegram такого номера достаточно, код получают через Fragment. Но, по данным Fragment, с него нельзя ни звонить, ни отправлять SMS, так что для других сервисов понадобится обычный номер." },
  { question: "Можно ли забрать себе Stars или подарки из аккаунта прежнего владельца?", answer: "Нет, они записаны на его профиль и вместе с номером к вам не переходят. Если нужны звёзды, купите их отдельно на свой аккаунт." },
  { question: "Что указать, чтобы после смены номера купить Stars или Premium через StarsPaymee?", answer: "Только @username аккаунта, на который должны прийти звёзды или подписка. Бот не спрашивает номер телефона, пароль или SMS-код, поэтому смена номера на заказ не влияет." },
  { question: "Предлагают «очистить номер от старого аккаунта» за предоплату. Можно верить?", answer: "Не верьте и не передавайте никаких кодов. Гарантировать такую услугу никто не может. Если есть вопрос, обращайтесь в поддержку Telegram напрямую." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>If the number you bought at auction or from a seller is still linked to the previous owner’s Telegram account, the SIM is yours, but the account still belongs to them. Don’t log in or touch their chats. The right move is to link the new number to your own account using the change number option. If the number is free, you can also open a separate account on it.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#raqam-sizniki-akkaunt-esa-yoq", label: "The number is yours, the account isn’t: how does that happen?" },
          { href: "#ekranda-nima-koryapsiz-holatlar-jadvali", label: "What you see on screen: a situation table" },
          { href: "#nega-oldingi-egasining-akkauntiga-kirmaslik", label: "Why you shouldn’t log in to the previous owner’s account" },
          { href: "#oz-akkauntingizni-yangi-raqamga-kochirish", label: "Moving your own account to the new number: 6 steps" },
          { href: "#raqam-band-bolsa-yoki-kimdir", label: "What if the number is in use or someone asks for a code?" },
          { href: "#chiroyli-raqamda-alohida-ikkinchi-akkaunt", label: "Can you open a separate second account on the nice number?" },
          { href: "#operator-auksionidagi-sim-va-fragmentdagi", label: "Carrier auction SIM or Fragment +888: which one did you get?" },
          { href: "#888-raqamga-kirish-kodi-qayerdan", label: "Where do you get the login code for a +888 number?" },
          { href: "#888-raqam-olishdan-oldin-fragment", label: "What to read in Fragment’s terms before buying a +888 number" },
          { href: "#raqam-almashganda-stars-premium-va", label: "What happens to Stars, Premium and gifts when the number changes?" },
        ]}
      />
      <h2 id="raqam-sizniki-akkaunt-esa-yoq">The number is yours, the account isn’t: how does that happen?</h2>
      <p>A SIM card and a Telegram account are two separate things. The SIM is registered to its new owner in the carrier’s database. The Telegram account is a profile that was created with that number at some point, and it holds chats, contacts, channels, gifts and purchases.</p>
      <p>When the carrier transfers the number to you, the Telegram account does not move to the new owner automatically. So when you put that nice-looking number in your phone and try to log in, a stranger’s profile may open.</p>
      <p>When and how Telegram deletes old or inactive accounts is not confirmed by an official source in this article. Don’t rely on advice like “just wait a few months and it will delete itself.” If you need a definite answer, ask through the <a href={"https://telegram.org/support"} target="_blank" rel="noopener noreferrer">Telegram support page</a>.</p>
      <h2 id="ekranda-nima-koryapsiz-holatlar-jadvali">What you see on screen: a situation table</h2>
      <p>Act based on the screen you get after entering the number in Telegram:</p>
      <CompareTable
        headers={["What you see", "What it means", "What to do"]}
        rows={[
          ["A code arrived and unfamiliar chats opened", "The previous owner’s account is linked to the number", "Log out right away, don’t read or change anything"],
          ["A password is requested after the code", "The account has two-step verification turned on", "Don’t try to guess it, move your own account instead"],
          ["The SMS code isn’t arriving", "The SIM may not be active yet, or the code was sent another way", <span key="r2c2">Check that regular SMS come through, then see <Link href="/blog/telegram-sms-kod-kelmayotganda">what to do when the code doesn’t arrive</Link></span>],
          ["Telegram offers to create a new account", "The number is free", "Create a new account or move your existing one"],
          ["You’re told the number is already in use when moving", "Another account may still be on the number", "See the “number in use” section below"],
          ["Someone messages you claiming to be the previous owner and asks for a code", "An attempt to recover the account, or a scam", "Don’t share the code, stop the conversation"],
        ]}
      />
      <p>Menu names and warning texts may differ depending on your app version. The table is a guide based on what you see on screen, not Telegram’s internal rules.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="nega-oldingi-egasining-akkauntiga-kirmaslik">Why you shouldn’t log in to the previous owner’s account</h2>
      <p>Getting an SMS code on your phone doesn’t give you the right to use that account. There are several reasons:</p>
      <ul>
        <li><b>These are someone else’s private messages.</b> The chats, photos, contacts and files belong to the previous owner. Reading or changing them could lead to a dispute later.</li>
        <li><b>If there’s a password, you won’t get in anyway.</b> An account with two-step verification asks for a password after the code. Guessing it is just a waste of time.</li>
        <li><b>The account gives you nothing.</b> Its purchases, channels and gifts belong to the previous owner. What you actually need is to link your own account to this number.</li>
        <li><b>The number may already be free.</b> If the previous owner has moved their account to another number, Telegram will simply offer you a normal sign-up.</li>
      </ul>
      <p>To protect your own account from situations like this, read <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">protecting your Telegram account from theft with 2FA</Link>.</p>
      <h2 id="oz-akkauntingizni-yangi-raqamga-kochirish">Moving your own account to the new number: 6 steps</h2>
      <p>You change the number from inside your own account, without ever logging in to the old account on the new number. Your chats, channels and purchases stay with you; only the login number is updated.</p>
      <Steps>
        <Step title={"Activate the SIM"}>send a regular SMS to the new number from another phone and make sure it arrives.</Step>
        <Step title={"Open your own account"}>on a phone or computer where you’re logged in with your current number.</Step>
        <Step title={"Find the change number option"}>it’s in Settings, in the profile and phone number section; its name may vary by app version.</Step>
        <Step title={"Enter the new number"}>with the country code, in full and without typos.</Step>
        <Step title={"Type the code only into the app"}>never tell anyone the SMS code, even someone who introduces themselves as “Telegram staff” or “the carrier.”</Step>
        <Step title={"Check the result"}>if the new number shows in your profile, the move is complete.</Step>
      </Steps>
      <p>Read the on-screen text to the end before confirming. If you don’t understand what it says, don’t tap the button.</p>
      <p>Once the move is done, turn on or update your two-step verification password. That way, even if your number later passes to someone else, they won’t be able to get into your account with an SMS code alone.</p>
      <h2 id="raqam-band-bolsa-yoki-kimdir">What if the number is in use or someone asks for a code?</h2>
      <p>If the previous owner’s account is still on the number, Telegram may refuse to link it to your account. Which message Telegram shows in this case and what options it offers has not been verified against an official source. Safe steps:</p>
      <ul>
        <li><b>Don’t try to delete the old account yourself.</b> That would require logging in, which means interfering with someone else’s account.</li>
        <li><b>Contact Telegram support yourself.</b> Explain briefly: when and where you got the number and what you want to do. Send your request via <a href={"https://telegram.org/support"} target="_blank" rel="noopener noreferrer">telegram.org</a>.</li>
        <li><b>Your carrier doesn’t manage Telegram accounts.</b> It handles SIM questions and cannot delete a Telegram account.</li>
        <li><b>Try again from time to time.</b> If the previous owner moves their account to another number, yours becomes free.</li>
      </ul>
      <p>These messages are suspicious when a number changes hands:</p>
      <ul>
        <li>“I’m the previous owner of this number, send me the code you received.”</li>
        <li>“We’re from your carrier’s support, tell us the code to verify the number.”</li>
        <li>“We’ll delete the old account for you, pay in advance.”</li>
        <li>“Follow this link to re-register the number” — a link to an unfamiliar website.</li>
      </ul>
      <p>Any code goes into the app only. Stop talking to anyone who asks for one.</p>
      <h2 id="chiroyli-raqamda-alohida-ikkinchi-akkaunt">Can you open a separate second account on the nice number?</h2>
      <p>Yes, if the number is free. If Telegram offers sign-up, create a new account and use it side by side with your main one in the same app. For example, the old account for family and friends, and the one on the nice number for your shop or customer chats.</p>
      <p>Premium and other purchases are tied to a specific account, not the phone. A subscription bought for one account won’t work on the other. More details: <Link href="/blog/telegram-premium-bir-nechta-akkaunt">does Premium work on multiple accounts</Link>.</p>
      <p>If you only need a number for Telegram, you don’t have to hunt for an expensive number at a carrier auction. Another option: <Link href="/blog/telegram-raqam-sotib-olish">a virtual number for Telegram</Link>.</p>
      <h2 id="operator-auksionidagi-sim-va-fragmentdagi">Carrier auction SIM or Fragment +888: which one did you get?</h2>
      <p>Posts have been circulating in channels saying that ordinary people can also put their mobile numbers up for auction and that a listing fee is charged. These terms were not found in Telegram or Fragment sources. They may apply to mobile carrier auctions, so check prices and fees with the carrier itself.</p>
      <p>Fragment is a different market. In late 2022, Telegram released a limited run of collectible virtual numbers on the TON blockchain (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">about Fragment</a>). Owners can sell them privately or put them up for public auction at any time (<a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Fragment terms</a>).</p>
      <CompareTable
        headers={["Feature", "Carrier auction number", "Fragment +888 number"]}
        rows={[
          ["What you get", "A SIM card", "A collectible number recorded to a wallet"],
          ["Where the Telegram code arrives", "By SMS", "On a Fragment page"],
          ["What you need to log in", "An active SIM", "The wallet that owns the number"],
          ["Calls and SMS", "Yes", "No, according to Fragment"],
          ["“Old account” problem", "The previous owner’s account may still be on the number", "Only the wallet owner sees the code"],
        ]}
      />
      <p>According to the Telegram blog, you can create and log in to an account without a SIM card using such a number (<a href={"https://telegram.org/blog/ultimate-privacy-topics-2-0"} target="_blank" rel="noopener noreferrer">Telegram blog</a>). According to the technical documentation, collectible numbers are used to create Telegram accounts through the usual sign-up and login flow (<a href={"https://core.telegram.org/api/fragment"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>). Don’t count on a +888 number to register with banks or other apps.</p>
      <h2 id="888-raqamga-kirish-kodi-qayerdan">Where do you get the login code for a +888 number?</h2>
      <p>With a +888 number, the code doesn’t come by SMS — only the wallet that owns the number can see it. Here’s how it works:</p>
      <Steps>
        <Step title={"Enter the number"}>type the +888 number in Telegram’s login screen or in the change number option.</Step>
        <Step title={"Connect your wallet to Fragment"}>when asked for a one-time code (OTP).</Step>
        <Step title={"Log in to Fragment with the right wallet"}>the code is visible only when you log in to fragment.com with the exact wallet that owns this number.</Step>
        <Step title={"Enter the code in the app"}>the login completes.</Step>
      </Steps>
      <p>The number page on Fragment suggests creating a Tonkeeper wallet and funding it from a supported exchange or via @wallet in Telegram.</p>
      <p>According to the technical documentation, the Telegram API can return information about a collectible number’s purchase date and price. This is a data source for developers, not a ready-made checking tool for an ordinary buyer.</p>
      <h2 id="888-raqam-olishdan-oldin-fragment">What to read in Fragment’s terms before buying a +888 number</h2>
      <p>Fragment’s terms contain clauses that directly affect buyers (<a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Terms of Service</a>):</p>
      <Notice label={"No refunds"}>Ownership is defined as permanent and cannot be revoked even by the company, so purchases are non-refundable.</Notice>
      <Notice label={"Lose wallet access, lose the number"}>If you lose your credentials, the company cannot restore either the wallet or the collectibles in it.</Notice>
      <Notice label={"No compensation if the account is banned"}>If the account is banned or deleted by Telegram or by the owner and the number becomes unusable, the company is not liable.</Notice>
      <Notice label={"The service may be restricted by country"}>The company can change which services are available in which countries without notice.</Notice>
      <p>Fragment’s commission, auction increments and timelines are not confirmed in this article — check them on the platform itself.</p>
      <h2 id="raqam-almashganda-stars-premium-va">What happens to Stars, Premium and gifts when the number changes?</h2>
      <p>Your Stars balance, Premium subscription and gifts are tied to the account, not the number. If you change the number inside your own account, the account stays the same and they stay put. Stars and gifts on the previous owner’s account don’t pass to you — paying a lot for the number makes no difference.</p>
      <p>The StarsPaymee bot asks only for a @username to place an order: no password, SMS code or account access is needed. So a number change doesn’t get in the way of buying through the bot. The Stars price depends on the payment method: {som(STARS_PER_UNIT_UZS, "en")} each by UzCard/HUMO card transfer or from the bot balance, {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. The minimum order is 50 Stars. More on the <Link href="/stars">Stars</Link> and <Link href="/premium">Premium</Link> pages.</p>
      <p>If you use two accounts, decide which one needs the Stars or subscription before ordering. Each has its own @username, so enter exactly the one you need.</p>
      <p>There’s one Premium limitation: if the account already has an active subscription, the bot won’t open a new Premium order — time is not added on top of an active subscription. Wait until it ends, then choose the 3, 6 or 12 month plan. More details: <Link href="/blog/telegram-premium-muddatini-uzaytirish">extending your Premium subscription</Link>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://telegram.org/blog/ultimate-privacy-topics-2-0", label: "No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More" },
          { href: "https://core.telegram.org/api/fragment", label: "Fragment collectibles" },
          { href: "https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms", label: "auth.sentCodeTypeFragmentSms" },
          { href: "https://fragment.com/terms", label: "Terms of Service" },
          { href: "https://fragment.com/number/88800888000", label: "+888 0088 8000" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "I bought a number at auction and Telegram opened someone else’s chats. Are they mine now?", answer: "No. Only the SIM passed to you; the account and its messages still belong to the previous owner. Log out and use the change number option in your own account." },
  { question: "Now that I have the number, can the previous owner keep using their account?", answer: "If the account is still logged in on their devices, they can keep using it and switch it to another number. New SMS codes, however, now come to your SIM, so don’t share one even if they ask." },
  { question: "The Telegram code isn’t arriving after I got the number. Where do I start?", answer: "First make sure the SIM is active by sending it a regular SMS from another phone. If SMS arrive but the Telegram code doesn’t, it may have been sent another way, so check the options shown in the app." },
  { question: "If I link the number to my own account, will I lose my groups and saved files?", answer: "No. Changing the number inside an account doesn’t create a new one; only the login number is updated." },
  { question: "Telegram won’t move my account because the number is in use. Can my carrier delete the old account?", answer: "The carrier works only with the SIM and has no control over Telegram accounts. Contact Telegram support yourself, or wait for the number to free up and try again later." },
  { question: "Can I buy a Fragment +888 number at a carrier auction?", answer: "They’re two different markets. Carrier auctions sell numbers with a SIM card, while +888 numbers are sold on Fragment by their owners, privately or through public auction." },
  { question: "I only want a nice +888 number for my Telegram profile. Can it replace a SIM?", answer: "It’s enough to log in to Telegram, with the code delivered through Fragment. But according to Fragment, you can’t make calls or send SMS with it, so you’ll still need a regular number for other services." },
  { question: "Can I transfer Stars or gifts from the previous owner’s account to myself?", answer: "No, they belong to their account and don’t come with the number. If you need Stars, buy them separately for your own account." },
  { question: "After changing my number, what do I enter to buy Stars or Premium through StarsPaymee?", answer: "Just the @username of the account that should receive the Stars or subscription. The bot doesn’t ask for a phone number, password or SMS code, so a number change doesn’t affect the order." },
  { question: "Someone offers to “clean up” the old account on my number for an upfront fee. Should I trust them?", answer: "Don’t trust them and don’t share any codes. Nobody can guarantee such a service. If you have questions, contact Telegram support directly." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["sotib olingan raqamda eski telegram akkaunt","auksiondan olingan raqam telegram","yangi raqamda boshqa odamning telegrami","telegram raqamni o‘zgartirish","chiroyli raqam sotib oldim telegram","telegram akkauntni yangi raqamga ko‘chirish","купил номер а там старый телеграм аккаунт","номер с аукциона телеграм чужой аккаунт","как сменить номер в телеграм","анонимный номер +888 fragment","telegram +888 raqam kod qayerga keladi"],
  howToSteps: [
    { name: "SIM’ni faollashtiring", text: "boshqa telefondan yangi raqamga oddiy SMS yuboring va u tushayotganini tekshiring." },
    { name: "O‘z akkauntingizni oching", text: "hozirgi raqamingiz bilan kirilgan telefon yoki kompyuterda." },
    { name: "Raqamni almashtirish bandini toping", text: "u sozlamalarda, profil va telefon raqami qatorida turadi; nomi ilova versiyasiga qarab farq qilishi mumkin." },
    { name: "Yangi raqamni kiriting", text: "mamlakat kodi bilan, to‘liq va xatosiz." },
    { name: "Kodni faqat ilovaga yozing", text: "SMS’dagi kodni hech kimga aytmang, o‘zini «Telegram xodimi» yoki «operator» deb tanishtirgan odamga ham." },
    { name: "Natijani tekshiring", text: "profilda yangi raqam ko‘rinsa, ko‘chirish tugagan." },
  ],
  locales: {
    uz: {
      title: "Sotib olingan raqamda eski Telegram akkaunt chiqdi: nima qilish kerak?",
      excerpt: "Auksionda olingan raqamga bog‘langan eski Telegram akkaunt sizga o‘tmaydi: unga kirmang, o‘z akkauntingizni sozlamalar orqali yangi raqamga ko‘chiring. Raqam band chiqsa yoki +888 bo‘lsa, yo‘l boshqacha.",
      metaTitle: "Sotib olingan raqamda eski Telegram akkaunt chiqdi",
      metaDescription: "Auksionda olingan raqamga bog‘langan eski Telegram akkaunt sizga o‘tmaydi: unga kirmang, o‘z akkauntingizni sozlamalar orqali yangi raqamga ko‘chiring.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "На купленном номере чужой аккаунт Telegram: что делать?",
      excerpt: "Разбираем, почему старый аккаунт Telegram на купленном номере вам не переходит, как перенести на этот номер свой аккаунт, что делать, если номер занят, и чем отличается номер +888 с Fragment.",
      metaTitle: "На купленном номере чужой аккаунт Telegram: что делать?",
      metaDescription: "Разбираем, почему старый аккаунт Telegram на купленном номере вам не переходит, как перенести на этот номер свой аккаунт, что делать, если номер занят, и чем…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Bought a Phone Number With Someone’s Old Telegram Account? What to Do",
      excerpt: "An old Telegram account tied to a number you bought doesn’t pass to you. Don’t log in; move your own account to the new number in Settings. If the number is taken or it’s +888, the steps differ.",
      metaTitle: "Bought a Phone Number With Someone’s Old Telegram Account?",
      metaDescription: "An old Telegram account tied to a number you bought doesn’t pass to you. Don’t log in; move your own account to the new number in Settings.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
