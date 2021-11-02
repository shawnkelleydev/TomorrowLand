function writeLoadLI() {
  let keys = Object.keys(localStorage);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const li = localStorage.getItem(key);
    if (key[0] === "i") {
      incomeUL.insertAdjacentHTML("beforeend", li);
    } else {
      outgoUL.insertAdjacentHTML("beforeend", li);
    }
    deleteListener(key);
    if (key.includes("out")) {
      const ob = makeObjects(key, li);
      sortOutgo(ob);
    }
  }
  getBalance();
}

writeLoadLI();

//needed for outgo sorting
function makeObjects(key, html) {
  //need object with key, tag, and html
  const burst = html.split(" ");
  const data = burst.filter((x) => x.includes("data="));
  const tag = data[0].split('"')[1];
  //return ob
  const ob = {
    key,
    tag,
    html,
  };

  return ob;
}
