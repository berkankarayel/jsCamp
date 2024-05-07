// selecotors ( seçiciler ) - style özellikleri

// bir şeyi yakalmak için 3 yöntem vardır --> classname , id , taga name

// id : unique dir yani eşssizdir.

//! getElementById : id ye göre elementi seçme

const button = document.getElementById("todoAddButton");
console.log(button);
console.log(button.id);
console.log(button.getAttribute("id"));

// console.log(button.classList[2]);
console.log(button.className);
const classList = button.classList;
const classNames = [];

classList.forEach(function (className) {
  classNames.push(className);
});
console.log(classNames[2]);

let buttonText = button.textContent; // html etiketlerini algılayamaz
let buttonText2 = button.innerHTML; // yukarıdakindne farklı html kodları varsa onları html olarak algılar
console.log(buttonText);
console.log(buttonText2);

// Classs İsmine göre yakalama
//! getElementByClass: kullanılır

const todo = Array.from(document.getElementsByClassName("card-body"));
todo.forEach(function (todoo) {
  console.log(todoo.textContent);
});

// etiket ismine göre yakalama

// GetElementByTagName("")

const form = document.getElementsByTagName("form");
console.log(form.id);

// bir metod var 3 ünüde yaptığı işi yapıyor

// querySelector- querySelectorAll

const clearButton = document.querySelector("#todoName"); // idlerde # koyıyıyarız
console.log(clearButton);

// classlarda nokta koyuyuyoruz
const todoListt = Array.from(document.querySelectorAll("li:nth-child(odd"));

todoListt.forEach(function (todo) {
  todo.style.backgroundColor = "ightgrey";
});
console.log(todoListt);
