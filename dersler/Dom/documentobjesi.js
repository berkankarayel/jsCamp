// console.log(window);
let value;

console.log(document.location);

//value = document.location.href;
// value = document.location.hostname;
// value = document.location.port;
// value = document.location.pathname;
// value = document.characterSet; // kullanılan dili gösteriri.(türkçe karakterleri destekler)
//value = document.links; // linkleri getirir
value = document.links.item(0).getAttribute("class");
// value = document.links.item(4).classList[2];

value = document.forms.item(1).id;
value = document.forms.item(1).name;
value = document.domain;
value = document.contentType;
var domain = window.location.hostname;
console.log(domain);
console.log(value);
