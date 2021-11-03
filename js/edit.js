//parent function
function handleEdit(key) {
  const li = document.getElementById(`${key}`);
  const textForm = li.querySelectorAll("form")[0];
  const amtForm = li.querySelectorAll("form")[1];
  const text = li.querySelectorAll("span")[0];
  const amt = li.querySelectorAll("span")[1];

  edit(text, textForm);
  edit(amt, amtForm);
}

// -------------------------------------

//cb in handleEdit()
function edit(target, form) {
  const inpField = form.children[0];
  //span clicks
  target.addEventListener("click", (e) => {
    //hide/show available in declarations.js
    hide(target);
    show(form);
    //set value
    inpField.value = target.innerText;
    getBalance();
  });
  // form submit listener
  form.addEventListener("submit", (e) => {
    //stop page refresh
    e.preventDefault();
    hide(form);
    show(target);
    //set value
    target.innerText = inpField.value;
    const parentListId = target.parentElement.parentElement.getAttribute("id");
    if (
      parentListId.includes("out") &&
      inpField.getAttribute("type") === "text"
    ) {
      rewriteOutgo(inpField.value);
    }
    getBalance();
  });
  blur(form, inpField, target);
}

// -------------------------------------
//for resetting outgo list based on new input
//make objects from outgo li, pass via iteration to sortOutgo(ob), set in conditional in form submit listener

//parent resorter
function rewriteOutgo() {
  //clear outgoArr
  outgoArr.splice(0);
  //fill with current children
  const chil = outgoUL.children;

  for (let i = 0; i < chil.length; i++) {
    //clear storage
    const key = chil[i].getAttribute("id");
    clearStorage(key);
    //make/push new objects
    const ob = makeObject(chil[i]);
    outgoArr.push(ob);
  }
  sortOutgo(); //writes outgoArr by tag / stores
}

//modular make objects function / gets data from preexisting html / cb in rewriteOutgo()
function makeObject(html) {
  const text = html.children[1].innerText;
  const key = html.getAttribute("id");
  const tag = getTag(text);
  html.setAttribute("data", tag);
  const ob = {
    html: html.outerHTML,
    key,
    tag,
  };
  return ob;
}

// -------------------------------------
//blur event

function blur(form, inpField, target) {
  inpField.addEventListener("blur", (e) => {
    e.preventDefault();
    hide(form);
    show(target);
    //set value
    target.innerText = inpField.value;
    const parentListId = target.parentElement.parentElement.getAttribute("id");
    if (
      parentListId.includes("out") &&
      inpField.getAttribute("type") === "text"
    ) {
      rewriteOutgo(inpField.value);
    } else {
      resetLocalStorage();
    }
    getBalance();
  });
}
