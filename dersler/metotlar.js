//! Parametresiz ve geriye değer döndürmeyen metot

// function yazdir() {
//   console.log("berkan");
// }

// yazdir();

// function topla() {
//   console.log(5 + 8);
// }
// topla();

//! Parametreli metot tanımlama

function yazdir(isim, soyisim) {
  console.log(isim + soyisim);
}

yazdir("berkan", "karayel");

function cube(sayi) {
  console.log(Math.pow(sayi, 3)); // math.pow fonksiyonu küp alır.
}
cube(5);

let yas = Number(prompt("Lütfen yasınızı giriniz"));

function kontrolEt(yas) {
  if (yas >= 18) {
    console.log("ehliyet alabilir");
  } else {
    console.log("ehliyet alamaz");
  }
}

kontrolEt(yas21);
