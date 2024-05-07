const todo = document.querySelectorAll(".list-group-item")[0];
const todoList = document.querySelector(".list-group");

const clearButton = document.querySelector("#todoClearButton");

console.log(clearButton);

todo.style.color = "white"; // yazının rengi
todo.style.backgroundColor = "blue"; // arkalan rengi
todo.style.fontWeight = "bold"; //yazının kalınlığı
todo.style.paddingTop = "20px"; // üsten boşluk
todo.style.paddingLeft = "50px";

todoList.style.marginTop = "60px";
// todoList.style.marginLeft = "100px";

clearButton.style.backgroundColor = "red";
clearButton.style.fontWeight = "bold";
clearButton.style.padding = "10px";
// clearButton.style.marginTop="100px";
clearButton.style.borderRadius = "10px";
