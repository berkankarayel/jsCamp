//! 1-) Senkron programlama :

// işlemleri sırayla yapar

//! 2-) İşler birbirinin bitmesini beklemez

// aynı anda çalışır. zamandan tasarruf sağlar

//? javascript senkron çalışan bir programlama dilidir.

//1-) Timing --> zamanlama
// 2-) Event --> click işlemleri
// 3-) Http İstekleri bunlar asenkron çalışır -->

console.log("berkan"); // senkron

setTimeout(() => {
  console.log("süre doldu ve çalıştı"); // asenkron 1 saniye bekler yazar
}, 1000);

setTimeout(() => {
  console.log("deneme "); // asenkron 0.5 saniye bekler yazar
}, 500);
console.log("karayel"); // senkron
