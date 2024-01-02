 // ! 1 den 10 e kadar yazdır
// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// //!  2 adet bo dizi oluştur sonra tekleri ve çiftleri atayn kodu yaz

/// Boş dizileri tanımlama
//  let ciftDizi = [];
//  let tekDizi = [];

// // 1'den 10'a kadar olan sayıları değerlendirme
//  for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
// // Çift sayıları "ciftDizi" dizisine ekleme
//      ciftDizi.push(i);
//    } else {
// // Tek sayıları "tekDizi" dizisine ekleme
//      tekDizi.push(i);
//    }


//  console.log("Çift Sayılar Dizisi:", ciftDizi);
//   console.log("Tek Sayılar Dizisi:", tekDizi);

// //!  50 den 1 e kadar git ve toplamlarını bul

//  let toplam = 0;
//  for (let x = 50; x >= 1; x--) {
//    toplam = toplam + x;
//   console.log(x);
//  }
//  console.log("toplamları", toplam);

// // 1 den 10 a kadar sayıları while ile yazdır
// // break : 8 a kadar gelir 8 den sonrasını keser
// // contiune: sadece 8 i yazmaz
// // ! 1 den 10 a kadar sayıları yazdır 8 geldiğimizde döngüden çıkalım

//  let sayac = 1;

//  while (sayac <= 10) {
//    console.log(sayac);
//    if (sayac == 8) {
//      break;
//    }
//    sayac++;
//  }

// //? continue

//  let sayac = 0;
//  while (sayac < 10) {
//    sayac++;

//    if (sayac == 8) {
//     continue;
//   }
//    console.log(sayac);
//  }

// //? Çarpım tablosu

//  for (let i = 1; i <= 10; i++) {
//    for (let j = 1; j <= 10; j++) {
//      console.log(i + "x" + j + "=" + i * j);
//   }
//  }

// //? Asal sayı bulma uygulamasııı

//  let sayi = Number(prompt("lütfen bir sayı giriniz"));
//  let sonuc = true;
//  for (let i = 2; i < Math.floor(sayi / 2); i++) {
//    if (sayi % i == 0) {
//      sonuc = false;
//      break;
//    }
//  }
//  if (sonuc == false) {
//    console.log("sayi asal değildir");
//  } else {
//    console.log("sayi asaldir");
//  }

// //? Faktoriyel bulma

//  let sayi = Number(prompt("lütfen sayi giriniz"));
//  let carpim = 1;
//  for (let i = 1; i <= sayi; i++) {
//    carpim = carpim * i;
//  }
//  console.log(carpim);

// //? ARmsstrong sayi
// let sayi = prompt("lütfen sayi griniz");
// let toplam = 0;

// for (let i = 0; i < sayi.length; i++) {
//   sayi.charAt(i);
//   let rakam = sayi.charAt(i);
//   toplam += rakam * rakam * rakam;
// }

// if (Number(sayi) == toplam) {
//   alert("armstog sayisidir");
// } else {
//   alert("armstrong sayisi değildir");
// }
