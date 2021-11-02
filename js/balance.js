// console.log(parseInt(outgoUL.children[0].children[3].innerText)); //path to amt n

function getBalance() {
  let income = 0;
  let outgo = 0;
  const ichil = incomeUL.children;
  const ochil = outgoUL.children;
  for (let i = 0; i < ichil.length; i++) {
    const n = parseInt(ichil[i].children[3].innerText);
    income += n;
  }

  for (let i = 0; i < ochil.length; i++) {
    const n = parseInt(ochil[i].children[3].innerText);
    outgo += n;
  }
  const bal = income - outgo;
  const balanceSpan = balance.querySelectorAll("span")[1];
  balanceSpan.innerText = bal;
}
