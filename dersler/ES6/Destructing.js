let langs = ["zeynep", "ayşe", "fenerbahçe"];
let lang1, lang2, lang3;

lang1 = langs[0];
lang2 = langs[1];
lang3 = langs[2];

//! Destructing ile yaparsak

[lang1, lang2, lang3] = langs;

const hesapla = (a, b) => {
  const topla = a + b;
  const cikar = a - b;
  const carp = a * b;
  const bol = a / b;

  const dizi = [toplam, cikar, carp, bol];
  return dizi;
};

let [a, b, c, d] = hesapla(10, 2);
console.log(a, b, c, d);

const person = () => {
  firstName = "berkan";
  lastName = "karayel";
  salary = "120000";
  age = 24;
};

// let [firstName: isim, lastName: soyisim, salary: ucretcret, age: yas] = person;
console.log(isim, soyisim, ucret, yas);
