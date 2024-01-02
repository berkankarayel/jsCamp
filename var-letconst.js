// function scope sadece foknsiyon içinde tanımlanır.
// global scope ise her yerden tanımlanabilir
var degiskenismi = 10;
let deger = 20;

if (true) {
  console.log(degiskenismi);
  console.log(deger);
}

function method1() {
  console.log(degiskenismi);
}
method1();

// var : function scope. varla tanımladiğimiz herşey function scope olur . ram bellekte çok fazla yer kaplar.var iki kere tanımlanabilir sondakini referans alır .
// let : block scope özelliğine sahiptir.let iki kere tanımlanmaz.
// const :block scope özeliğine sahipir.

function selamVer() {
  var selam = "herkese selam"; // function scope

  if (true) {
    var b = 10;
    let c = 35;
  }
  // console.log(c);  burdan erişelemez çünkü let block scope dur.
  console.log(b);
  console.log(selam);
}
selamVer();

/*
let a = 5;   bu çalışmaz 
let a =10;

var a =5;
var a =10; bu çalışır.

*/

// Const ve let arasındaki fark :

/*
  const sabit değişmez 
  let değiştirelebilir 

  örnek :


  const a =10;
  a = 5;
  console.log(a); hata verir


  let a =15;
  a=22;
  console.log(a);çalışır

*/

const user = {
  username: "berkan",
  password: "123",
};

user.username = "berkan karayel"; // bu şekilde değiştirebiliriz
console.log(user);

/*
 ! DİYALOG KUTULARI 
  
 ALERT : uyarı 
 PROMPT : kullancııdan değer al 
 CONFİRM : true veya false 

 bunlar window objesi içinde yer alır .

 */

console.log(window);
alert("lütfen isminizi girniz");

// kullanıcdan değer alma

let isim = prompt("isminizi girniz"); // kullancıı ekrana isim girer.
console.log(isim);

// kullanıcıdan alınan değerlerinin tipi her zaman stringdir.
console.log(typeof isim);
console.log(typeof yas);

let yas = prompt("yaşınızı giriniz");

confirm("silmek istedğinize eminmisiniz"); // tamama basarsak true diğeri false olarak yazdırır consolda .

let a = 5;
let b = Number("10");

// strinden -->numbera dönüşüm

let c = Number(b);
console.log(a + b);
console.log(typeof c);

let e = parseInt("10");
let t = parseFloat("12.5");
// number --> string

let x = String(55);
console.log(typeof x);
console.log(x);
// deneme

console.log("deneme yazılım");
let d = Number(b);
console.log(a + b);
console.log(typeof c);

let f = parseInt("10");
let g = parseFloat("12.5");
// number --> string

let h = String(55);
console.log(typeof x);
console.log(x);
// deneme
