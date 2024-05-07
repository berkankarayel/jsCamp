//html elementleri üzerinde gezinmek

const todo1 = document.querySelector(".list-group-item ");
const todolist = document.querySelector(".list-group");
const kart = document.querySelector(".card");

let value;

// ebeveynler çoçuklara erişmek

value = todolist;
value = todolist.children;
value = todolist.children[todolist.children.length - 1];

value = todolist.children[3].textContent = "değişti";
value = Array.from(todolist.children);

value.forEach(function (todo) {
  //console.log(todo.textContent);
});

// çoçuktan ebeveyne erişmek

value = todo1;
value = todo1.parentElement.parentElement.parentElement;
// console.log(value);

// kardeşler aarasında gezinmek

value = todo1;

value = todo1.nextElementSibling;
value = value.nextElementSibling;

// örnek: h5 etikeitini büyükten küçüğe bul sonra değiştir
const row = document.querySelector(".row");

value = row;
value = value.children[0].children[3];
value = value.children[0];
value = value.textContent = "Yeni todo Sayfası";

// console.log(value);

let deger = row;
deger = deger.children[0].children[3].children[2].children[2];
deger.textContent = "todo 3 değişti";
deger.style.backgroundColor = "red";
deger.style.color = "blue";
console.log(deger);
