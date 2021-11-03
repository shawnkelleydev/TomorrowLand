const incomeForm = document.querySelector("#income-input");
const outgoForm = document.querySelector("#outgo-input");
const incomeUL = document.querySelector("#income-list");
const outgoUL = document.querySelector("#outgo-list");
const balance = document.querySelector("#balance");
const outgoArr = [];

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "flex";
}
