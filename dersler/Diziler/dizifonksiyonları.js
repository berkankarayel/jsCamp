// push: dizinin sonuna eleman ekler
// unshift : dizinin başına eleman ekler
// pop : dizinin sondaki elemanı siler,silinen eleman döner
// shift : dizinin başından eleman siler,silinen elemanı döner
// splice : hem eleman eklemek hem eleman silmek için kullanılır
// string : diziyi stringe çevirir
// join : diziyi stringe çevirir araya eleman ekleyebirliz
// concat : dizileri birleştirmek için kullanılır
// reverse : dziyi ters çevirir

let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
arabalar.push("lada");
arabalar.unshift("hyundai");
arabalar.pop();
arabalar.shift();
arabalar.splice(0, 0, "porsche");
arabalar.splice(0, 1, "bugatii"); // 0 indeksine gider onu 1 eleman siler ve bugattiyi yazar
arabalar.toString();
arabalar.join("-");
console.log(arabalar);
