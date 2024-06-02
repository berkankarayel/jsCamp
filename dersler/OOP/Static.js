//!STATİC NEDİR ?

//!Bir function veya özellik static ise CLASS'a özgüdür
//!değilse nesneye özgüdür.

class StringUtil {
  static isNull() {}
  static getCharacterLength() {}
}

class Insan {
  static languagesCount = 10;

  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  writeInfo() {
    console.log(
      this.firstName,
      this.lastName,
      this.salary,
      this.languagesCount
    );
  }
}

const insan1 = new Insan("Enes", "Bayram", "10000");
insan1.writeInfo();

console.log(Insan.languagesCount);

class Matematik {
  topla(a, b) {
    console.log(a + b);
  }

  cikar(a, b) {
    console.log(a - b);
  }

  static carp(a, b) {
    console.log(a * b);
  }

  bol(a, b) {
    console.log(a / b);
  }
}
//TypeScript

const matematik = new Matematik();
matematik.topla(10, 5);
Matematik.carp(5, 7); // static olduğu için sınıf ismiyle çağrılır

//!Static olarak tanımlanmamışsa NESNE üzerinden erişilir.
//!Static ise CLASS İSMİ üzerinden erişilir.

//! const stringUtil = new StringUtil();
