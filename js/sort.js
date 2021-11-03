function sortOutgo() {
  outgoUL.innerHTML = ``;
  for (let i = 0; i < outgoArr.length; i++) {
    if (outgoArr[i].tag.includes("giv")) {
      write(outgoArr[i].key, outgoArr[i].html);
    }
  }
  for (let i = 0; i < outgoArr.length; i++) {
    if (outgoArr[i].tag.includes("debt")) {
      write(outgoArr[i].key, outgoArr[i].html);
    }
  }
  for (let i = 0; i < outgoArr.length; i++) {
    if (outgoArr[i].tag.includes("util")) {
      write(outgoArr[i].key, outgoArr[i].html);
    }
  }
  for (let i = 0; i < outgoArr.length; i++) {
    if (outgoArr[i].tag.includes("wall")) {
      write(outgoArr[i].key, outgoArr[i].html);
    }
  }
  for (let i = 0; i < outgoArr.length; i++) {
    if (outgoArr[i].tag.includes("sub")) {
      write(outgoArr[i].key, outgoArr[i].html);
    }
  }
  for (let i = 0; i < outgoArr.length; i++) {
    if (outgoArr[i].tag.includes("oth")) {
      write(outgoArr[i].key, outgoArr[i].html);
    }
  }
}

function write(key, html) {
  outgoUL.insertAdjacentHTML("beforeend", html);
  localStorage.setItem(key, html); //add to local storage
  deleteListener(key); //see delete.js
  handleEdit(key); //see edit.js
}
