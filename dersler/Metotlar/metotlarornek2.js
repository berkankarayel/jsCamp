// Mukemmel sayı bulma uygulaması : o sayıuy bölen sayıların toplamı sayının katına eşitse
// mükemmel sayı denir

// 6  - 28 - 496
// örnek 6 --> 1,2,3,6 = 12 6 nın bir katıdır.

isPerfectNumber(498);

function isPerfectNumber(number) {
  let toplam = 0;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      toplam += i;
    }
  }

  toplam += 1 + number;

  if (toplam == number * 2) {
    console.log("Mükemmel sayı");
  } else {
    console.log("mükemmel sayı değildir");
  }
}
