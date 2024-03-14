// 1 den 10 kadar çiftleri yazdır

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 1) {
    console.log("berkan");
  } else {
    console.log("karayel");
  }
}

// 50 den 1 kadar gid ve çiftlerin toplamları yazdır

let toplam = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    toplam = toplam + i;
  }
}
console.log("toplam =" + toplam);
