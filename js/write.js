function writeLI(text, amt, key, location) {
  // write --------------------------------------
  let io = "";
  if (location === incomeUL) {
    io = "in";
  } else {
    io = "out";
  }
  const tag = getTag(text);
  const html = `
    <li class="grid" id="${io}${key}" data="${tag}">
      <form action="index.html" class="edit-text col-1">
        <input type="text" />
      </form>
      <span class="col-1 text">${text}</span>
      <form action="index.html" class="edit-text col-2">
        <input type="number" />
      </form>
      <span class="col-2 amt">${amt}</span>
      <button class="col-3 delete">X</button>
    </li>
  `;
  key = io + key;
  //write li
  if (location === incomeUL) {
    location.insertAdjacentHTML("beforeend", html);
    localStorage.setItem(key, html);
    deleteListener(key);
    handleEdit(key);
  } else {
    const ob = {
      key,
      tag,
      html,
    };
    outgoArr.push(ob);
    sortOutgo(); //organizes outgoArr / writes to page
  }
}
