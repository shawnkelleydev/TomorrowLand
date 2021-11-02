//returns number - 10% of total income
function getTithe() {
  let income = 0;
  const ichil = incomeUL.children;
  for (let i = 0; i < ichil.length; i++) {
    const n = parseInt(ichil[i].children[3].innerText);
    income += n;
  }
  const tithe = parseInt((income * 0.1).toFixed(0));
  return tithe;
}
//-------------------------------------------------------------------

//tithe autofill
const inp = document.querySelector("#outgo-input").children[0];
const inpamt = document.querySelector("#outgo-input").children[1];
inp.addEventListener("input", () => {
  if (inp.value.toLowerCase().includes("tith")) {
    inpamt.value = getTithe();
  } else {
    inpamt.value = "";
  }
});
