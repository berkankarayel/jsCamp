let a = 7;

let b = a;

console.log(a); // a = 7
console.log(b); // b = 7

console.log("....................");

b = 10;
console.log("b" + b); // --> b =10
console.log("a" + a); // --> a =7

let dizi1 = [1, 2, 3];
let dizi2 = [1, 2, 3];

if (dizi1 == dizi2) {
  console.log("eşittir");
} else {
  console.log("eşit değildir");
}

let dizi3 = [1, 2, 3];
let dizi4 = dizi3;

dizi4.push(12);

console.log(dizi3); // referans veri tipi olduğu için diğerini değiştirersek öbürüde değişir.
// ikisdie aynı yere bakıyor . biz buna refereans tip deriz.
console.log(dizi4);
