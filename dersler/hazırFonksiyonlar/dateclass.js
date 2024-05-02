// DATE Kullanımı

// let tarih = new Date(1999,08,07,10,40,50);
// console.log(typeof tarih);

let tarih = new Date(); // şuanki tarihi adında obje oluşturduk
// console.log(tarih.toString());
// console.log(typeof tarih.toString());
// console.log(tarih);

console.log(tarih.getFullYear()); // get metotoları tarihin içinden değer alır. yıl alır
console.log(tarih.getDate()); // ayın kaçıncı günü olduğunu veirir.
console.log(tarih.getDay()); // haftanın gününü alır sayı olarak verir.
console.log(tarih.getHours()); // saatin kaç olduğunu söylüyor
console.log(tarih.getMilliseconds());
console.log(tarih.getMinutes());
console.log(tarih.getMonth() + 1); // aylar  0 dan başlıyor o yüzden attı 1 yaparız
console.log(tarih.getSeconds());
console.log(tarih.toLocaleDateString()); // tarıhi gün ay yıl olarak verir
console.log(tarih.toLocaleTimeString()); // saat gün dakika veririyor
console.log(tarih.toLocaleString()); // iksiinide birleşimi

//SET METOTLARI
console.log(tarih);
tarih.setHours(15); // tarıhin saatini değişitrdik
tarih.setDate(24); // tarihin günü dewğişştirk
tarih.setMonth(11); // tarihn ayını değiştiridk
tarih.setMinutes(50); // tarihin dakikasını değiştridik

tarih.setHours(tarih.getHours() + 2);
console.log(tarih);
