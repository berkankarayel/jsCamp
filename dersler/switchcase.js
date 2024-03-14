//! HAFTANIN GÜNLERİ
let yeniSatir = "\r\n";
let metin =
  "1-Pazartesi" +
  yeniSatir +
  "2-Salı" +
  yeniSatir +
  "3-Çarşamba" +
  yeniSatir +
  "4-Perşembe" +
  yeniSatir +
  "5-Cuma" +
  yeniSatir +
  "6-Cumartesi" +
  yeniSatir +
  "7-Pazar" +
  yeniSatir +
  "Lütfen bir seçim yapınız";

let deger = prompt(metin);
switch (deger) {
  case "1":
    console.log("Pazartesi Günü");
    break;
  case "2":
    console.log("Salı Günü");
    break;

  case "3":
    console.log("Çarşamba Günü");
    break;

  case "4":
    console.log("Perşembe Günü");
    break;

  case "5":
    console.log("Cuma Günü");
    break;

  case "6":
    console.log("Cumartesi Günü");
    break;

  case "7":
    console.log("Pazar Günü");
    break;
  default:
    console.log("lütfen geçerli bir değer giriniz!");
}

//! ATM UYGULAMASI

/*
1-Bakiye görüntüleme
2-Para çekme 
3-Para yatırma
4-Çıkış

ATM UYGULAMASI
*/

let bakiye = 1000;

let metin2 =
  "1-Bakiye Görüntüleme " +
  yeniSatir +
  "2-Para Çekme" +
  yeniSatir +
  "3-Para Yatırma" +
  yeniSatir +
  "4-Çıkış" +
  yeniSatir +
  "Lütfen bir değer seçiniz.";

// alert(metin);

let secim = prompt(metin2);
switch (secim) {
  case "1":
    alert("Bakiyeniz : " + bakiye);
    break;

  case "2":
    let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz :"));
    if (cekilecekTutar < bakiye) {
      //başarılıdır
      bakiye = bakiye - cekilecekTutar;
      alert("Kalan bakiye : " + bakiye);
    } else {
      alert(
        "Bakiyenizden fazla para çekemezsiniz!" +
          yeniSatir +
          "Bakiyeniz : " +
          bakiye +
          " " +
          "Cekilecek Tutar : " +
          cekilecekTutar
      );
    }
    break;

  case "3":
    let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz :"));
    bakiye = bakiye + yatirilacakTutar;
    alert("Güncel bakiyeniz : " + bakiye);
    break;

  case "4":
    alert("Sistemden çıkış yapılmıştır...");
    break;

  default:
    alert("Lütfen 1 - 4 arasında değer giriniz !");
    break;
}
