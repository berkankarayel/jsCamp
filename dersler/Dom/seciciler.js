// selecotors ( seçiciler ) - style özellikleri

// bir şeyi yakalmak için 3 yöntem vardır --> classname , id , taga name

// id : unique dir yani eşssizdir.

// getElementById : id ye göre elementi seçme

const button = document.getElementById("todoAddButton");
console.log(button);
console.log(button.id);
console.log(button.getAttribute("id"));
console.log(button.className);
console.log(button.getAttribute("class"));

// const classListesi = button.classList[3];
const classListesi = button.classList;

classListesi.forEach(function (className) {
  console.log(className);
});

// console.log(classListesi);

let buttonText = button.textContent; // html etiketlerini algılayamaz
let buttonText2 = button.innerHTML; // yukarıdakindne farklı html kodları varsa onları html olarak algılar
console.log(buttonText);
console.log(buttonText2);

// Classs İsmine göre yakalama
// getElementByClass: kullanılır

const todoList = document.getElementsByClassName("card-body");
console.log(todoList.textContent);

// etiket ismine göre yakalama

// GetElementByTagName("")

const form = document.getElementsByTagName("from");
console.log(form.id);

// bir metod var 3 ünüde yaptığı işi yapıyor

// querySelector- querySelectorAll

const clearButton = document.querySelector("#todoName"); // idlerde # koyıyıyarız
console.log(clearButton);

// classlarda nokta koyuyuyoruz
