// let sayac = 1;

// while (true) {
//   console.log(sayac);
//   if (sayac == 7) {
//     break;
//   }
//   sayac++;
// }

// ARMSTRONG SAYI BULMA UYGULAMASI
// ÖRNEK 153-370-407 HER BİR SAYININ KÜPÜNÜN TOPLAMI SAYIYI VERİYORSA ARERMSTORNG SAYDIIR

let sayi = prompt("sayi giriniz");
let toplam = 0;
for (let i = 0; i < sayi.length; i++) {
  let rakam = sayi.charAt(i);
  toplam += rakam ** 3;
}

if (Number(sayi) == toplam) {
  console.log("armstorng sayıdır");
} else {
  console.log("armstorong sayı değildir");
}
