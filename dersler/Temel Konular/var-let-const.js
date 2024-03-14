// Var - let - const
// es6 ile beraber let ve const geldi. önceden 'var' vardı.
/*

--> global scope : heryerden erişelebilen scopedur.ram bellekte fazladan yer kaplar 
--> function scope : sadece tanımladığımız yerde kullanabilriz.
--> block scope : sadece bloğun içinde çalışabilen scopedur.


*/
// var: Herşey function scopedur. yani blok içinde tanımlayıp
// functuon da erişebilriz.
// ram bellekte çok yer kaplar dejavantajı budur.

function Selamver() {
  var selam = "Herkese selam ";

  console.log(selam);
}

Selamver();

//! let/const : blok scope özlelliği vardır.

var c = 5;
var c = 10;

console.log(c);

//!  let ile aynı değişkenden birdaha oluşmaz
//let b = 5;
//let b = 5;

//? let ve const farkı
// cons ile bir değşişkenin değeri tekrara güncellenmez değiştirelemz

// const x = 16;
// x = 21;
// console.log(x);

let e = 21;
e = 22;
console.log(e);

const user = {
  username: "berkan",
  passqord: "123",
};

console.log(user);
