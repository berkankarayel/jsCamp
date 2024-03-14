//? 1-) Alert

// functiondur . awindow objesinin içinde yer alır window objesi yazmamımza gerek yoktur.
// alert("Nasılısnız");

//? 2-) Prompt : kullanıcıdan değer alma. kullanıcıdan alınan değerler ver tipi her zaman stringdir.

// let isim = prompt("lütfen isminizi girniz : ");
// console.log(isim);

//? 3-) Confirm : evet hayır sçeneği verir.

// let sonuc = confirm("silmek istedğinize eminmisiniz");
// console.log(sonuc);

//! Tür Dönüşümleri

// let a = 5;
// let b = "10";

// string --> int

// let c = Number(b);
// console.log(a + c);

let yas = Number(prompt("lütfen yaşınızı giriniz"));
console.log(yas);

let b = parseInt("12");
let c = parseFloat("12.5");
