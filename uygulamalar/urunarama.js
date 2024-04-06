let urun1 = {
  name: "ACER SWİFT",
  category: "teknoloji",
  price: 6.219,
};
let urun2 = {
  name: "ACER Nitro5",
  category: "teknoloji",
  price: 15.219,
};
let urun3 = {
  name: "ACER GAMING",
  category: "teknoloji",
  price: 13.999,
};
let urun4 = {
  name: "LENOVA V15",
  category: "teknoloji",
  price: 10.999,
};
let urun5 = {
  name: "LENOVA V14",
  category: "teknoloji",
  price: 14.999,
};
let urun6 = {
  name: "LENOVA Ideapad",
  category: "teknoloji",
  price: 4.15,
};

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Lütfen isim giriniz");

getFiltreliUrunler(urunler);
yazdir(filtreliUrunler);

function getFiltreliUrunler(urunler1) {
  urunler1.forEach(function (urun) {
    if (urun.name.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
      filtreliUrunler.push(urun);
    }
  });
}

function yazdir(urunler) {
  urunler.forEach(function (urun) {
    console.log("---------------------");
    console.log("|" + urun.name + "|" + urun.price + "|" + urun.category);
    console.log("---------------------");
  });
}
