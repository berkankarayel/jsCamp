//! 1-) Ehliyet alma şartı

let yas = Number(prompt("Lütfen yaşınızı giriniz : "));
let para = Number(prompt("Paranızı giriniz"));
if (yas >= 18 && para >= 3000) {
  alert("Ehliyet sınavına girebilrisiniz");
} else {
  alert("ehliyet sınavına katılamazsınız");
}

//! 2-) Ders ortalaması bulma

// vize 1 , vize2 , ve final notlarını bulan uygulama

let vize1 = Number(prompt("vize1 notunuz : "));
let vize2 = Number(prompt("vize2 notunuz : "));
let final = Number(prompt("final notunuz : "));
let ortalama = (vize1 * 3 + vize2 * 3 + final * 4) / 10;

if (ortalama >= 50) {
  alert("geçtiniz" + " " + " ortalamanız: " + ortalama);
} else {
  alert("kaldınız");
}

//! 3-) Beden Kitle Endeksi Bulma

let kilo = Number(prompt("kilonuzu giriniz"));
let boy = Number(prompt("Boyunuzu giriniz"));
let sonuc = kilo / (boy * boy);

if (sonuc < 18.5) {
  console.log("ideal kilonuz altında ");
} else if (sonuc >= 18.5 && sonuc < 24.5) {
  console.log("ideal kilo");
} else if (sonuc >= 25 && sonuc <= 29.9) {
  console.log("obezsiniz");
}

//! 4-) Benzin Uygulaması

let dizel = 36.45,
  benzin = 46.4,
  lpg = 17.4;
const yeniSatir = "\r\n";

const yakitMetni =
  "1-)Dizel" +
  yeniSatir +
  "2-)Benzin" +
  yeniSatir +
  "3-)Lpg" +
  yeniSatir +
  "Yakit türü Seçiniz";

let yakitTipi = prompt(yakitMetni);
if (yakitTipi == "1") {
  let dizelLitre = Number(prompt("kaç litre aldınız"));
  let bakiye = Number(prompt("bakiyenizi girniz"));
  let tutardizel = dizelLitre * dizel;
  if (bakiye >= tutardizel) {
    alert("işlem başarılı ve tutar " + tutardizel);
  } else {
    alert("bakiyeniz yetersiz");
  }
}
if (yakitTipi == "2") {
  let BenzinLitre = Number(prompt("kaç litre aldınız"));
  let bakiye = Number(prompt("bakiyenizi girniz"));
  let tutarbenzin = BenzinLitre * benzin;
  if (bakiye >= tutarbenzin) {
    alert("işlem başarılı ve tutar " + tutarbenzin);
  } else {
    alert("bakiyeniz yetersiz");
  }
}
