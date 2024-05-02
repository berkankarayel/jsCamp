// String Sınıfının Metotları

let kurs = "Modern Web Geliştirme Kursu";
let tarih = "2022";
// charAt()
// concat()
// indexof()
// lastindexof()
// toUpperCase()
// toLowerCase()
// trim()
// slice()
// substring()
// replace()
// split()
// valueOf()
// startsWith()
// endsWith();

// CHARTAT METOT KULLANIMI:indeks numarasına göre karakteri verir
let karakter = kurs.charAt(1);
console.log(karakter);

//CONCAT METOT: birleştirmek için kullanılır. birden fazla string ifade eklenebilir.
let sonuc = kurs.concat(" ", tarih, " Enes");
console.log(sonuc);

//INDEXOF METOT: verdiğimiz değerin indeks numarasını verir.
let index = kurs.indexOf("W");
console.log(index);

let index1 = kurs.lastIndexOf("K");
console.log(index1);

//TOUPPERCASE METOT : kelimelerin hepsini büyük harfe çevirir.geriye sitring döner.orjineli değişmez
let sonuc1 = kurs.toUpperCase();
console.log(kurs);
console.log(sonuc1);

//TOLOWERCASE METOT: hepsini küçük harfe çevirir.
let sonuc2 = kurs.toLowerCase();
console.log(sonuc2);

//TRİM METOT: boşluk karakterlerini görmezden geliniz(temizler). !!!! Önemliii
console.log(kurs.trim());

//SLİCE METOT: dilimleme işlemi yapar. (başlangıç ve bitiş indeksini ister)
console.log(kurs);
console.log(kurs.slice(22, 28));

//SUBSTRİNG METOT: slice ile aynı işlevi görür.
console.log(kurs);
console.log(kurs.substring(0, 6));

//REPLACE METOT: yer değiştirmek.değiştirmek istedğimizi yazıyoruz. sonra ne koymak isityorsak onu yazıyoruz
console.log(kurs);
console.log(kurs.replace("Modern", "Güncel"));

//SPLİT METOT : ayırma işlevi görürür.kelimeleri neye göre ayıracağımızı belirler.dizi yapar.
console.log(kurs);
let dizi = kurs.split(",");
console.log(dizi);

//VALUEOF METOT
console.log(kurs.valueOf());

//STARTSWITH METOT:bir değer veriyoruz o isteiğdimiz harf ile başlıyor veya baişlamıyorsa ture veya false döner
console.log(kurs);
console.log(kurs.startsWith("M"));
if (kurs.startsWith("M")) {
  console.log("M harfi ile başlamaktadır.");
}

// ENDSWITH METOT : sonu neyle bitiyor. ture veya false döner
console.log(kurs);
console.log(kurs.endsWith("Geliştirme Kursu"));
