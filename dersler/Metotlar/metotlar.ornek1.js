//! Bir cümledeki harf sayısnı bulma uygulaması

let metin = "Şuanda Yalova 'da Javascript eğitimi çekmekteyim.";

let harf = prompt("harfi giriniz");

let sonuc = bul(harf);

console.log("harf sayisi:a" + sonuc);

function bul(harfsayisi) {
  let toplam = 0;
  for (let i = 0; i < metin.length; i++) {
    if (metin.charAt(i).toLowerCase() == harf.toLowerCase()) {
      toplam++;
    }
  }
  return toplam;
}
