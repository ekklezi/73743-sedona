var link = document.querySelector(".searchBtn");
var popup = document.querySelector(".mainForm");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("mainFormShow");
});


