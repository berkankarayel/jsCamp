console.log("Hello world");

var dolarBugun = 9.3;
var dolarDun = 9.2;

{
  let dolarDun = 9.1;
  console.log(dolarDun);
}
console.log(dolarDun);

/*
-- const bir tek değişken tanımlanabbilir.
const eD = 11.2;
const eD = 11.1;
*/

// array(diziler)
// camelCasing : ilk harf küçük sonraki harf büyük
//PascalCasing : ilk harfleri büyük
let konutKredileri = [
  "konut kredisi",
  "emlak konut kredisi",
  "kamu konut kredisi",
  "özel traktör kredisi",
];

console.log("</ul>");

for (let i = 0; i < konutKredileri.length; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}

console.log("</ul>");
