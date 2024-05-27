// storage verileri depolamak için kullanılır

// session storage ve local storage arasındaki fark local storage bilgisayarı kapattığımızda silinmez hep kalır. session tarayıcı kapandığında silinir.

sessionStorage.setItem("350", "Berkan");
sessionStorage.setItem("250", "yasin");

sessionStorage.removeItem("350");

let value = sessionStorage.getItem("250");
if (value == null) {
  console.log("değer bulunamadı");
} else {
  console.log("değer bulundu");
}

sessionStorage.clear();
