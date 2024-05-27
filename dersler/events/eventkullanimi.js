// türkçesi olaylar anlamına gelir

// örneğin butonun üstüne gelindiğinde meydana gelecek olan değişikliklerdir.

function changetitle() {
  document.querySelectorAll(".card-title")[1].textContent =
    "Tıklama olayı gerçekleşti";
}

const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click", changetitle);
