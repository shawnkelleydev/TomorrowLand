//listen for submit, write
function inputListener(form, ul) {
  const formUL = form.parentElement.parentElement;
  const err = formUL.querySelector(".err");
  const errmsg = formUL.querySelector(".err-msg");
  //----------------------------------------------
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = form.children[0].value; //name enterred
    const amt = form.children[1].value; //amount enterred
    const refocus = form.children[0]; //for focus() after submission
    let key = (Math.random() * 1000000).toFixed(0); //barcode
    //callback for writing li
    if (text !== "" && amt !== "") {
      writeLI(text, amt, key, ul); //writes li on page and handles the plethora of things that happen as a result
      refocus.focus(); //sets focus on input text for easy additions
      resetInputs(form); //blanks inputs
      err.style.display = "none"; //turns off error messages if any
      getBalance(); //resets balance
    } else {
      //error msg
      err.style.display = "block";
      if (ul === incomeUL) {
        //relative vertical position based on ul
        errmsg.style.top = "40px";
      } else {
        errmsg.style.bottom = "40px";
      }
    }
  });
}

function resetInputs(form) {
  const text = form.querySelectorAll("input")[0];
  const amt = form.querySelectorAll("input")[1];
  text.value = "";
  amt.value = "";
}

inputListener(incomeForm, incomeUL);
inputListener(outgoForm, outgoUL);
