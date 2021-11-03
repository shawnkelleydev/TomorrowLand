function deleteListener(key) {
  const li = document.getElementById(key);
  const btn = li.querySelector(".delete");
  btn.addEventListener("click", () => {
    li.remove(); //remove the list item
    clearStorage(key); //delete from local storage
    deleteFromArray(key); //remove from outgoArr
    getBalance(); //get new balance
  });
}

function deleteFromArray(key) {
  for (let i = 0; i < outgoArr.length; i++) {
    if (outgoArr[i].key === key) {
      outgoArr.splice(i, 1);
    }
  }
}

function clearStorage(key) {
  localStorage.removeItem(key);
}
