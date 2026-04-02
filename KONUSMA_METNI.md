---
title: "Siber Güvenlik Farkındalık Etkinliği — Konuşma Metni"
author: "Öğr. Gör. Osman Can Çetlenbik"
date: "2026"
geometry: margin=2.5cm
fontsize: 12pt
linestretch: 1.4
header-includes:
  - \usepackage{fancyhdr}
  - \pagestyle{fancy}
  - \fancyhead[L]{Siber Güvenlik Farkındalık Etkinliği}
  - \fancyhead[R]{Konuşma Metni}
  - \fancyfoot[C]{\thepage}
---

\newpage

# Genel Bilgiler

- **Sunum adresi:** https://sunum-nu.vercel.app
- **Toplam slide:** 37
- **Tahmini süre:** ~100 dakika + 10 dk soru-cevap
- **Hedef kitle:** 350 üniversite öğrencisi (Simav MYO)
- **Navigasyon:** Sağ ok veya Space = ileri, Sol ok = geri, F = tam ekran, 1-9 = bölüme atla

\newpage

# AÇILIŞ

## Slide 1 — Kapak (3 dk)

Herkese merhaba, hoş geldiniz. Ben Osman Can Çetlenbik. Manisa Celal Bayar Üniversitesi Teknik Bilimler Meslek Yüksekokulu'nda öğretim görevlisiyim ve bugün Simav Meslek Yüksekokulu'nda sizlerle birlikteyim. Bilgisayar mühendisiyim.

Bugün sizinle çok kritik bir konuyu konuşacağız: siber güvenlik farkındalığı. Bu sunum sizi hacker yapmak için değil, hacklenmeyen bireyler yapmak için hazırlandı. Bugün öğreneceğiniz bilgiler sadece sizin değil, ailelerinizin de parasını, kimliğini ve güvenliğini koruyacak.

Bir sorum var — kaçınız bugüne kadar şüpheli bir SMS aldı? Sahte kargo, sahte banka mesajı? Hemen hemen herkes. İşte bunların arkasında ne olduğunu birlikte göreceğiz.

---

## Slide 2 — İstatistikler (3 dk)

Rakamlarla başlayalım ve bu rakamlar sizi şaşırtacak.

Türkiye'de günde 1 milyon 200 bin siber saldırı girişimi yapılıyor. Günde! Bu salonda oturduğunuz sürede bile yüzlerce saldırı gerçekleşti.

Kaspersky'nin 2025 raporuna göre Türkiye'deki kullanıcıların yüzde 26'sı çevrimiçi tehditlerle karşılaşıyor. Bu oran Orta Doğu ve Afrika bölgesinin en yükseği.

Şubat 2026'da IDMerit veri sızıntısında 49 milyon Türk vatandaşının kimlik bilgileri açığa çıktı. Bu salondaki herkesin bilgileri muhtemelen zaten sızdırılmış durumda.

Ve deepfake vakaları — yapay zekayla üretilen sahte ses ve görüntüler — yıllık yüzde 900 arttı. Bu neredeyse 10 kat demek.

---

## Slide 3 — Açılış Sözü (2 dk)

"En güçlü güvenlik duvarı bile, içerideki biri kapıyı açarsa işe yaramaz."

Bu cümle bugünkü sunumun özeti. Saldırganlar sistemi değil, sizi hedef alıyor. Çünkü insan güncellenemeyen tek zafiyettir. Yazılımı güncellersiniz ama insanın korkusunu, açgözlülüğünü, merakını güncelleyemezsiniz. Bugün bu zafiyetleri tanıyacağız ve nasıl korunacağımızı öğreneceğiz.

\newpage

# BÖLÜM 1: OLTALAMA SALDIRILARI

## Slide 4 — Bölüm Kapağı (1 dk)

En yaygın siber saldırı türüyle başlıyoruz: oltalama, İngilizce phishing. Neden buradan başlıyoruz? Çünkü bu salondaki herkes en az bir kez oltalama saldırısıyla karşılaşmıştır. SMS, e-posta, telefon araması... Saldırganların en sevdiği silah budur.

---

## Slide 5 — Oltalama Türleri (3 dk)

Dört ana tür var.

Birincisi e-posta oltalama. CEO'dan geliyormuş gibi sahte e-postalar. "Acil ödeme yapın, kimseye söylemeyin." Korku ve aciliyet yaratarak sizi düşünmeden hareket ettirmeye çalışıyorlar.

İkincisi smishing — SMS ile oltalama. "Kargonuz bekliyor, linke tıklayın." Bu en yaygın olanı. Birazdan gerçek bir örneğini göreceğiz.

Üçüncüsü typosquatting — alan adı sahteciliği. garantibbva.com.tr yerine garanti-bbva-giris.com yazıyorlar. Gözle farkı göremezsiniz.

Dördüncüsü vishing — telefon ile oltalama. Sahte polis, sahte savcı, sahte banka müdürü. Bu Türkiye'de en çok para kaybettiren yöntem.

---

## Slide 6 — Sahte Mesaj Örnekleri (3 dk)

Gerçek örneklere bakalım.

Solda sahte CEO e-postası. Gönderen adresi "ceo@hoIding-onay.xyz" — şirketin gerçek domaini değil. "Beni sakın aramayın" diyor çünkü ararsanız gerçek CEO'nun haberi olmadığını anlarsınız. Teyit almayı engelliyor.

Sağda sahte kargo SMS'i. 24.90 TL gümrük vergisi. Linke tıklarsanız birebir PTT'ye benzeyen sahte siteye gidersiniz. Kart bilgilerinizi girersiniz, 24 TL yerine 24 bin TL çekilir.

Kural basit: Kargo firmaları SMS ile ödeme linki göndermez. Gerçek PTT sitesi ptt.gov.tr'dir.

---

## Slide 7 — Sahte Banka Sayfası (3 dk)

Gördüğünüz sayfa gerçek bankanın birebir kopyası. Adres çubuğundaki "garanti-bbva-giris.com" sahte. Yeşil kilit simgesi bile var çünkü SSL sertifikası almak bedava. Kilit sitenin güvenli olduğu anlamına gelmez, sadece bağlantının şifreli olduğu anlamına gelir.

TC Kimlik numaranızı ve şifrenizi buraya girerseniz o bilgiler doğrudan saldırganın sunucusuna gider.

Altın kural: Banka sitesine her zaman kendiniz yazarak girin. SMS'teki linke asla tıklamayın. Uygulamayı kullanın.

---

## Slide 8 — Canlı Deney (2 dk)

Şimdi bir deney yapacağız. Telefonlarınızı çıkarın. Bir sonraki ekranda bir QR kod göreceksiniz. Hepiniz tarayın. Bakalım ne olacak...

*[Sonraki slide'a geçin]*

---

## Slide 9 — QR Tam Ekran (5 dk)

*[Sessizce bekleyin. Öğrenciler QR'ı tarıyor. Telefonlarında sahte "cihazınız ele geçirildi" ekranı beliriyor...]*

Bakın telefonlarınıza! Ne görüyorsunuz? "Cihazınız ele geçirildi! Tüm verileriniz çalındı!" Panik yaptınız mı?

*[Geri sayım bittikten sonra "RAHAT OLUN" ekranı çıkıyor]*

İşte tam da bu! O 10 saniyelik panik — dolandırıcıların istediği tam olarak bu. Bir QR kodu taradınız, ne olacağını bilmeden tıkladınız.

2025'te QR kodlu oltalama saldırıları 5 kat arttı. Restoranlarda, otoparklarda, duraklarda gerçek QR'ın üzerine sahte sticker yapıştırılıyor. QR taramadan önce URL'yi mutlaka kontrol edin.

---

## Slide 10 — Quiz (3 dk)

Dört e-posta adresinden hangisi sahte? Düşünün...

*[5 saniye bekleyin, cevap otomatik gösterilir]*

Cevap C: guvenlik@garanti-bbva-destek.com. Gerçek adres garantibbva.com.tr'dir. Birkaç harf fark — ama bu fark hesabınızın boşaltılması demek.

---

## Slide 11 — Kargo SMS Simülasyonu (3 dk)

*[Simülasyon otomatik oynuyor]*

Bakın: SMS geldi, 24 TL kargo borcu. Linke tıklandı, sahte site açıldı. Ödeme yapılıyor... Ama 3D Secure SMS'inde "24 TL" değil "24.500 TL" yazıyor! Onay kodunu okumadan girildi ve 24 bin 500 TL çekildi.

Ders çok basit: Bankadan gelen onay SMS'indeki tutarı mutlaka okuyun. Sadece şifreye bakmayın, tutara bakın.

\newpage

# BÖLÜM 2: ŞİFRE GÜVENLİĞİ

## Slide 12 — Bölüm Kapağı (1 dk)

Kaçınız birden fazla hesapta aynı şifreyi kullanıyor? Dürüst olun. Tek şifre kullanmak domino etkisi yaratır. Bir site hacklenirse o şifreyle girebildiğiniz tüm hesaplar düşer — e-posta, banka, sosyal medya, e-Devlet.

---

## Slide 13 — Şifre Kırma Simülasyonu (3 dk)

*[Simülasyon otomatik oynuyor — şifreler sırayla test ediliyor]*

Ekranda brute-force saldırı simülasyonu izliyorsunuz.

"123456" — anında kırıldı. Türkiye'de en çok kullanılan şifre. "ankara06" — yarım saniye bile sürmedi. "Kalem42!" — 7 dakika, bir kahve molası kadar.

Ama bakın: 12 karakterli karışık şifre — "Tr#n85_kL!m2" — 3 bin yıl! Kırılamadı! Ve cümle şifre — "BenSimavdaYasiyorum!" — sonsuz! Kırılması matematiksel olarak imkansız!

Çözüm: 12 karakter üstü, harf-rakam-sembol karışık. Ya da daha iyisi cümle şifre kullanın. Hatırlaması kolay, kırılması imkansız.

---

## Slide 14 — İki Faktörlü Doğrulama (3 dk)

Güçlü şifre yetmez, iki faktörlü doğrulama şart. Ama dikkat: SMS ile 2FA riskli. SIM Swap saldırısında saldırgan TC bilgilerinizle operatöre gidip yeni SIM çıkartıyor. Artık SMS'leriniz ona gidiyor. Banka onay kodunuz dahil.

Güvenli olan Authenticator uygulaması. Google veya Microsoft Authenticator. Kod cihazınızdan çıkmaz, SIM Swap'a karşı bağışık, 30 saniyede değişiyor.

Bu akşam — evet bugün akşam — tüm hesaplarınıza Authenticator kurun.

\newpage

# BÖLÜM 3: SOSYAL MÜHENDİSLİK

## Slide 15 — Bölüm Kapağı (1 dk)

Sosyal mühendislik: insanları kandırma sanatı. Saldırganlar sistemi hacklemez, sizi hackler. En zayıf halka her zaman insandır. Ve insanın korkusu, açgözlülüğü, merakı — bunlar güncellenemeyen zafiyetlerdir.

---

## Slide 16 — Saldırganın Silahları (3 dk)

Dört silah var.

Otorite baskısı: "Ben komiserim, hesabınız terör soruşturmasında." Kim bir komisere hayır diyebilir? Ama gerçek komiser sizi telefonda para transferi yapmaya zorlamaz.

Aciliyet: "Son 15 dakika! Hemen işlem yapın!" Aciliyet mantığınızı devre dışı bırakır. Düşünmenize fırsat vermezler.

Korku: "Eşiniz tutuklanacak, derhal parayı poşete koyun." Korku beyninizin otopilot modunu tetikler.

Açgözlülük: "Tebrikler! 50 bin TL kazandınız!" Bedava bir şey yok. Kazandığınızı iddia eden her mesaj tuzaktır.

Bu dört silahı tanıyın — tanıdığınız an etkisiz hale gelirler.

---

## Slide 17 — Altın Kural (2 dk)

Bu cümleyi lütfen bir yere yazın. Telefonunuzun notlarına, masanıza, buzdolabınıza:

**DEVLET ASLA TELEFONDA PARA, ALTIN VEYA ŞİFRE İSTEMEZ.**

Bu kadar basit. Savcı aramaz ve para istemez. Komiser aramaz ve altınlarınızı poşete koymanızı söylemez.

Ailenize öğretin. Özellikle annelerinize, babalarınıza, büyükannelerinize. Mart 2026'da Gaziantep'te bir vatandaş sahte savcıya 6 milyon TL değerinde altın ve mücevher verdi. Bu cümleyi bilseydi vermezdi.

---

## Slide 18 — Güncel Örnekler (3 dk)

Bunlar hayal ürünü değil, son ayların gerçek olayları.

Mart 2026, Gaziantep: Sahte savcı "adınız terör soruşturmasına karıştı" diyerek 6 milyon TL değerinde altın aldı. Otorite baskısı ve korku kombinasyonu.

Aralık 2025, Sakarya: Telefonda polis ve savcı rolü yapan dolandırıcılar tek günde 3.5 milyon TL çekti.

Deepfake ses klonlama vakaları yüzde 900 arttı. Artık 3 saniyelik bir ses kaydıyla — mesela Instagram hikayenizden — sesiniz birebir kopyalanabiliyor.

Ve Şubat 2026'da IDMerit veri sızıntısı ile 49 milyon kişinin TC kimlik bilgileri açığa çıktı. Muhtemelen sizinki de dahil.

\newpage

# BÖLÜM 4: YAPAY ZEKA TEHDİTLERİ

## Slide 19 — Bölüm Kapağı (1 dk)

Yapay zeka devrimi sadece ChatGPT'den ibaret değil. Saldırganlar da yapay zekayı kullanıyor ve çok etkili kullanıyor. Deepfake, ses klonlama, kişiye özel otomatik dolandırıcılık mesajları... Artık "yazım hatası varsa sahtedir" kuralı geçersiz. Yapay zeka kusursuz Türkçe yazıyor.

---

## Slide 20 — WhatsApp Simülasyonu (3 dk)

*[Simülasyon otomatik oynuyor — WhatsApp mesajları tek tek beliriyor]*

Yabancı numaradan mesaj geliyor: "Google şirketinden arıyoruz, video beğenerek para kazanın." İlk görev ücretsiz.

Mesajlaşma devam ediyor... 250 TL "kazandınız." Ama çekmek için 5 bin TL teminat isteniyor.

Ve bakın — linke tıklandığı an GhostPairing saldırısı! WhatsApp hesabınız ele geçirildi. Şifre bile gerekmedi. Rehberinizdeki herkese aynı mesaj gönderilmeye başlıyor.

WhatsApp 2025'in ilk 6 ayında 6.8 milyon dolandırıcılık hesabını kapattı. Yabancı numaralardan gelen mesajlara asla yanıt vermeyin.

\newpage

# BÖLÜM 5: BAHİS VE VERİ PANELLERİ

## Slide 21 — Bölüm Kapağı (1 dk)

Bu bölüm özellikle sizin yaş grubunuz için çok önemli. Üniversitelilerin yüzde 40'ı yasadışı bahis sitelerini kullanıyor. Bu rakam gerçek ve çok üzücü. "Kolay para" vaadi her zaman pahalı bir dersle sonuçlanır.

---

## Slide 22 — Yasadışı Bahis ve Kripto (3 dk)

Instagram ve TikTok'ta "garantili kupon", "bedava bonus" reklamları görüyorsunuz. Bunların hepsi tuzak.

İlk başta kazandırırlar — ufak miktarlar. Güveninizi kazanmak için. Sonra büyük miktarlar yatırmanızı isterler. Ve kazandığınızı çekemezsiniz. Sahte bonuslar, çekim engelleri, hesap dondurma.

Mart 2026'da Gaziantep'te sahte yatırım sitesiyle 2.3 milyar TL'lik vurgun yapıldı. 2.3 milyar!

Ve IBAN kiralama — "hesabınızı kiraya verin, 500 TL kazanın" diyen teklifler. Bunu yaparsanız kara para aklama suçunun faili SİZ olursunuz. 3-7 yıl hapis cezası.

---

## Slide 23 — Bahis İstatistikleri (2 dk)

Rakamlar konuşsun:

Tek bir operasyonda 26 milyar TL ciro tespit edildi. Uzun vadede bahis oynayanların yüzde 94'ü kaybeder. Kasa her zaman kazanır, bu matematiksel bir gerçek.

Hapis cezası: 7258 sayılı kanuna göre 3 ila 7 yıl. Sadece oynamak bile suç.

Bu salonda 350 kişi var. İstatistiksel olarak 140'ınız en az bir kere denemiş.

---

## Slide 24 — Veri Panelleri (3 dk)

Veri sorgulama panelleri Telegram gruplarında aylık abonelikle satılıyor. TC kimlik numaranızı giriyorsunuz, karşınıza isim, adres, telefon, aile bilgileri çıkıyor.

Bu veriler nereden geliyor? Sızıntılardan. 2026'da IDMerit'ten 49 milyon, Şikayetvar'dan 212 bin, Baydöner'den 1.5 milyon, TurkNet'ten 2.8 milyon kayıt sızdırıldı.

Sizi arayan biri bilgilerinizi biliyorsa — bu onun gerçek olduğu anlamına gelmez. Bu bilgiler herkesin satın alabileceği panellerden alınmıştır. Bilgilerinizi bilen biri "gerçek" demek değildir.

---

## Slide 25 — Ponzi Simülasyonu (3 dk)

*[Simülasyon otomatik oynuyor]*

WhatsApp'tan "video beğen, para kazan" teklifi geldi. Katıldınız. Bakiye yükseliyor: 50, 100, 150, 200, 250 TL. Gerçekten kazanıyor gibisiniz!

Ve tuzak: "250 TL kazandınız! Çekmek için 20 bin TL teminat yatırın."

Klasik Ponzi tuzağı. İlk 250 TL olta yemidir. Asıl hedef sizden 20 bin TL almak. Unutmayın: iş veren para istemez, öder.

\newpage

# BÖLÜM 6: SİBER ZORBALIK

## Slide 26 — Bölüm Kapağı (1 dk)

Çok önemli ve hassas bir konuya geçiyoruz: siber zorbalık. Ekranın arkasında da gerçek insanlar var. Yazdığınız her kelime, paylaştığınız her görsel bir insanın hayatını etkileyebilir.

---

## Slide 27 — İstatistikler (2 dk)

TÜBİTAK destekli TAÇEP araştırmasına göre — Türkiye çapında 5 bin çocuk ve ergenle yapılan bir araştırma:

Her 2 çocuktan biri zorbalık yapıyor. Her 4 çocuktan 3'ü zorbalığa uğruyor.

7/24 devam ediyor. Eskiden zorbalık okul çıkışında biterdi. Şimdi evde bile devam ediyor. Sosyal medya, WhatsApp grupları, oyun içi chat.

Hapis cezası: 5 yıl ve üzeri. İzinsiz fotoğraf paylaşmak, sürekli taciz mesajları göndermek, sahte hesapla karalama kampanyası — bunların hepsi suç.

---

## Slide 28 — Ne Yapmalı? (3 dk)

İki senaryo var — ya mağdursunuz ya tanıksınız.

Mağdursanız: İlk iş ekran görüntüsü alın, bu delildir. Sonra engelleyin ve platforma şikayet edin. ALO 182'yi arayın — Siber Suç İhbar hattı. Ve psikolojik destek almaktan çekinmeyin. Bu bir zayıflık değil, güçtür.

Tanıksanız: Sessiz kalmayın. Sessizlik onay demektir. Mağdura destek olun. Zorbalığı paylaşmayın, beğenmeyin — paylaşmak zorbalığı büyütmek demektir. Ve yetkiliye bildirin.

Bir gün siz de mağdur olabilirsiniz. Bugün sessiz kalırsanız yarın sizin için de kimse konuşmaz.

\newpage

# BÖLÜM 7: KENDİNİZİ KORUYUN

## Slide 29 — Bölüm Kapağı (1 dk)

Son bölüm ve en önemlisi. Bilmek yetmez, uygulamak lazım. Bugün uygulayabileceğiniz, 5 dakikanızı alacak somut adımlar vereceğim.

---

## Slide 30 — Wi-Fi ve SIM Swap (3 dk)

İki büyük tehlike.

Birincisi halka açık Wi-Fi. Kafe, otel, havaalanı — bu ağlara bağlanınca tüm trafiğiniz izlenebilir. "Şeytani İkiz" saldırısı: saldırgan "Starbucks_WiFi" adında sahte bir ağ kuruyor. Bağlanıyorsunuz ve şifreleriniz çalınıyor. Halka açık ağda banka uygulaması açmak demek kredi kartı bilgilerinizi teslim etmek demek.

İkincisi SIM Swap. Telefonunuz aniden "SIM kayıtlı değil" derse alarm verin. Saldırgan TC bilgilerinizle operatörden yeni SIM çıkarmış demek. SMS'leriniz artık ona gidiyor.

Çözüm: VPN kullanın. Hassas işlemleri mobil veriyle yapın. SMS yerine Authenticator kullanın.

---

## Slide 31 — Cihaz Kontrolü (3 dk)

Şimdi telefonlarınızı çıkarın — gerçekten çıkarın.

Sol tarafta konum geçmişinize bakın. iPhone'da Ayarlar, Gizlilik, Konum Servisleri, Önemli Konumlar. Android'de Google Maps, Zaman Tüneli. Ne görüyorsunuz? Google ve Apple son 2 yılda gittiğiniz her yeri kaydetmiş. Her restoran, her ev, her otel.

Sağ tarafta uygulama izinlerini kontrol edin. Fener uygulamanız kameraya, mikrofona, konuma erişiyor mu? Neden?! Hesap makineniz rehberinizi ve SMS'lerinizi okuyor mu? Bu casus yazılım belirtisi.

Ayarlar, Uygulamalar, İzinler. Şimdi hemen bakın.

---

## Slide 32 — 5 Dakikada 5 Adım (3 dk)

Bu akşam — evet bugün akşam — yapmanız gereken 5 şey:

Bir: Tüm hesaplarınıza 2FA açın. Google Authenticator indirin, e-posta, Instagram, banka hepsini bağlayın.

İki: Aynı şifreyi kullanan hesapları değiştirin. Bitwarden veya KeePass gibi ücretsiz şifre yöneticisi kurun.

Üç: e-Devlet'e girin — turkiye.gov.tr — adınıza açılmış şirket veya telefon hattı var mı kontrol edin. IDMerit sızıntısından sonra çok kişinin adına şirket açıldı.

Dört: Sosyal medya gizliliğinizi Private yapın. Konum paylaşımını kapatın.

Beş: Ailenize bir güvenlik parolası belirleyin. Telefonda para isteyen biri ararsa "parolamız ne?" diye sorun.

---

## Slide 33 — 3 Saniye Kuralı (2 dk)

Bugünün en önemli mesajı:

3 SANİYE KURALI.

Bir link tıklamadan, bir bilgi vermeden, bir QR taramadan önce 3 saniye durun ve kendinize sorun: "Bu benim düşüncem mi, yoksa birisi bana bunu düşündürtüyor mu?"

Aciliyet mi hissediyorum? Kim yarattı bu aciliyeti? Korku mu? Kim yarattı? Heyecan mı? Gerçek mi?

3 saniye. Sadece 3 saniye. Bu kadar basit. Ama bu 3 saniye, binlerce lira ile kimliğiniz arasındaki farktır.

\newpage

# KAPANIŞ

## Slide 34 — Simülasyonlar Tanıtım (2 dk)

Sizin için 30 tane interaktif dolandırıcılık simülasyonu hazırladım. Sahte banka, e-Devlet, kargo, QR tuzakları... Hepsini güvenli ortamda deneyimleyebilirsiniz. Bir sonraki ekrandaki QR kodu tarayın.

---

## Slide 35 — Simülasyonlar QR (2 dk)

*[Sessiz bekleyin, öğrenciler tarasın]*

Bu QR sizi hackleme-sanati.vercel.app adresine götürecek. 30 simülasyonun hepsini orada deneyebilirsiniz. Arkadaşlarınızla, ailelerinizle paylaşın. Özellikle büyüklerinizle.

---

## Slide 36 — Teşekkürler (2 dk)

Bugün oltalama, şifre güvenliği, sosyal mühendislik, yapay zeka tehditleri, yasadışı bahis, siber zorbalık ve korunma yöntemlerini konuştuk.

En önemli üç şeyi tekrar edeyim:

1. Devlet asla telefonda para istemez.
2. Her hesaba farklı şifre artı Authenticator 2FA.
3. 3 saniye kuralı: dur, düşün, sonra tıkla.

Beni takip etmek için son ekrandaki QR kodları tarayın.

---

## Slide 37 — Takip QR'ları (3 dk)

*[QR kodları gösterin, öğrenciler tarasın]*

LinkedIn, Instagram ve simülasyonlar sitesi. Sorularınız varsa hazırım. Teşekkür ederim!

*[Soru-cevap için 10 dakika ayırın]*

\newpage

# ZAMANLAMA REHBERİ

| Bölüm | Slide'lar | Süre |
|-------|-----------|------|
| Açılış | 1-3 | 8 dk |
| Oltalama | 4-11 | 24 dk |
| Şifreler | 12-14 | 7 dk |
| Sosyal Mühendislik | 15-18 | 9 dk |
| Yapay Zeka | 19-20 | 4 dk |
| Bahis ve Veri | 21-25 | 12 dk |
| Siber Zorbalık | 26-28 | 6 dk |
| Korunma | 29-33 | 12 dk |
| Kapanış | 34-37 | 9 dk |
| Soru-Cevap | — | 10 dk |
| **Toplam** | **37** | **~101 dk** |

# SUNUM İPUÇLARI

1. **QR Tuzağı (Slide 8-9):** En etkili an. "Telefonlarınızı çıkarın" deyin, sonraki slide'a geçin, sessizce bekleyin. Telefonlarda panik başlayınca gülümseyin ama açıklamayı hemen yapmayın. Tam etkiyi hissettirin.

2. **Altın Kural (Slide 17):** Hep bir ağızdan tekrar ettirin: "DEVLET ASLA TELEFONDA PARA İSTEMEZ." En az 2 kez söyletin.

3. **5 Adım (Slide 32):** Her maddede "bu akşam" vurgusunu yapın. Somut ve acil olduğunu hissettirin.

4. **Simülasyonlar:** Otomatik oynuyor, tıklamaya gerek yok. Sadece anlatın ve izleyin. Öğrencilerin yüzlerini gözlemleyin.

5. **İstatistikler:** Rakamları yavaş söyleyin. "49 milyon" dedikten sonra 2 saniye bekleyin. Sindirin.

6. **Keyboard:** F tuşu tam ekran yapar. 1-9 tuşları bölümlere atlar. Space ileri gider.

7. **Enerji:** Son slayta kadar enerjiyi düşürmeyin. Kapanış cümlesi güçlü olsun.
