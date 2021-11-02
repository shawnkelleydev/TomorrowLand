function deleteListener(key) {
  const li = document.getElementById(key);
  const btn = li.querySelector(".delete");
  btn.addEventListener("click", () => {
    li.remove();
    localStorage.removeItem(key);
    deleteFromArray(key);
    getBalance();
  });
}

function deleteFromArray(key) {
  for (let i = 0; i < outgoArr.length; i++) {
    if (outgoArr[i].key === key) {
      outgoArr.splice(i, 1);
    }
  }
}
