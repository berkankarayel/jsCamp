//For in  - For of Döngüleri

let names = ["Enes", "Ali", "Yusuf", "Betül", "Ceyda"];

names.forEach(function (name) {
  console.log(name);
});
names.forEach((name) => console.log(name)); // arrow function ile gösterimi

// For in Döngüsü;

// degiskenTanimlama ,in , diziİsmi
for (let a in names) {
  console.log(a, names[a]);
}

// For of Döngüsü

for (let isim of names) {
  console.log(isim, names.indexOf(isim));
}
