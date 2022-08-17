const textBox = document.getElementById("text-box");

/* ==== ALPHABETICAL WORDS was here, now in alpha.js ===== */
/* ==== PROPER NOUNS was here, now in proper.js ===== */

/* ==============================================================
  add KEYBOARD CHARACTERS to text area & get cursor position for 
  ALL keyboard functionality except CAPS and SHIFT keys
=============================================================== */
// GET INDEX POSITION OF CURSOR
function cursorPosition(element) {
  const position = element.selectionStart;
  return position;
}

// LETTERS, CAPS key, SHIFT key
const [...keys] = document.getElementsByClassName("key");

// capitalize letter or not based on various criteria
/*  From a functional programming POV, no parameter, no return!?! 
    I don't see how to "fix" that since each if block have 2 or more calculations */
function addLetters() {
  keys.map(key => {
    key.addEventListener("click", e => {
      const letterkey = e.target.value;
      if (capsKey.classList.contains("caps-off")) {
        const len = textBox.value.length;
        const punc = textBox.value;
        const x = cursorPosition(textBox);
        if ([".", "?", "!", "\n"].includes(punc.charAt(len - 1)) || textBox.value.charAt(0) == "") {
          textBox.value = textBox.value.slice(0, x) + " " + letterkey.toUpperCase() + textBox.value.slice(x);
          textBox.focus();
          textBox.selectionEnd = x + 2;
        } else {
          textBox.value = textBox.value.slice(0, x) + letterkey.toLowerCase() + textBox.value.slice(x);
          textBox.focus();
          textBox.selectionEnd = x + 1;
        }
      } else {
        const x = cursorPosition(textBox);
        textBox.value = textBox.value.slice(0, x) + letterkey.toUpperCase() + textBox.value.slice(x);
        textBox.focus();
        textBox.selectionEnd = x + 1;
      }
    });
  });
}
addLetters();

// add or remove class for highlighting the CAPS & SHIFT keys
const capsKey = document.getElementById("caps");

/*  Same here & for shift(): no parameter, no return */
function capitalize() {
  if (!capsKey.classList.contains("caps-on")) {
    capsKey.classList.add("caps-on");
    capsKey.classList.remove("caps-off");
  } else {
    capsKey.classList.add("caps-off");
    capsKey.classList.remove("caps-on");
  }
}
capsKey.addEventListener("click", capitalize);

const shiftl = document.getElementById("shiftl");
const shiftr = document.getElementById("shiftr");

function shift() {
  if (!shiftl.classList.contains("shift-on") || !shiftr.classList.contains("shift-on")) {
    shiftl.classList.add("shift-on");
    shiftl.classList.remove("shift-off");
    shiftr.classList.add("shift-on");
    shiftr.classList.remove("shift-off");
  } else {
    shiftl.classList.add("shift-off");
    shiftl.classList.remove("shift-on");
    shiftr.classList.add("shift-off");
    shiftr.classList.remove("shift-on");
  }
}
shiftl.addEventListener("click", shift);
shiftr.addEventListener("click", shift);

// output shift key elements based on status of shift key
const shiftKeyL = document.querySelector(".shiftL");
const shiftKeyR = document.querySelector(".shiftR");

const rightSquare = document.getElementById("rtsq");
const leftSquare = document.getElementById("leftsq");
const backslash = document.getElementById("backslash");
const semicolon = document.getElementById("semicolon");
const quotes = document.getElementById("quotes");
const forwardslash = document.getElementById("forwardslash");
const comma = document.getElementById("comma");
const period = document.getElementById("periodpunc");

// Change the value of the shift keys, no parameter or return!
function changeInner() {
  if (shiftl.classList.contains("shift-on") || shiftr.classList.contains("shift-on")) {
    rightSquare.textContent = "{";
    leftSquare.textContent = "}";
    backslash.textContent = "|";
    semicolon.textContent = ":";
    quotes.textContent = '"';
    comma.textContent = "<";
    period.textContent = ">";
    forwardslash.textContent = "?";
  } else {
    rightSquare.textContent = "[";
    leftSquare.textContent = "]";
    backslash.textContent = "\\";
    semicolon.textContent = ";";
    quotes.textContent = "'";
    comma.textContent = ",";
    period.textContent = ".";
    forwardslash.textContent = "/";
  }
}
shiftKeyL.addEventListener("click", changeInner);
shiftKeyR.addEventListener("click", changeInner);

// add NON-ALPHABETIC CHARACTERS (numbers & symbols) to textarea
const [...nonAlpha] = document.getElementsByClassName("nonAlpha");

nonAlpha.map(item => {
  item.addEventListener("click", e => {
    const x = cursorPosition(textBox);
    const char = e.target.innerHTML;
    const sliceStart = textBox.value.slice(0, x);
    const sliceEnd = textBox.value.slice(x);
    if (char == "&amp;") {
      textBox.value = sliceStart + "&" + sliceEnd;
    } else if (char == "&lt;") {
      textBox.value = sliceStart + "<" + sliceEnd;
    } else if (char == "&gt;") {
      textBox.value = sliceStart + ">" + sliceEnd;
    } else {
      textBox.value = sliceStart + char + sliceEnd;
    }

    textBox.focus();
    return (textBox.selectionEnd = x + 1);
  });
});

/* Couldn't get X & Y coordinates for up & down keys */
// const pageUp = document.getElementById("page-up");
// const pageDown = document.getElementById("page-down");
// const arrowUp = document.getElementById("uparrow");
// const arrowDown = document.getElementById("downarrow");

// function coords() {
//   document.addEventListener('mousemove', (e) => {
//     let XnY = [e.clientX, e.clientY]
//     let x = XnY[0];
//     let y = XnY[1];
//     return y;
//   });
// }

/* ===========================================
  add nonprint keys functionality for textarea
============================================ */
const backspace = document.getElementById("backspace");
const deleteKey = document.getElementById("delete");

// BACKSPACE (no parameter, no return)
function removeCharBehind() {
  x = cursorPosition(textBox);
  if (x != 0) {
    textBox.value = textBox.value.slice(0, x - 1) + textBox.value.slice(x);
    textBox.focus();
    textBox.selectionEnd = x - 1;
  } else {
    textBox.focus();
  }
}
backspace.addEventListener("click", removeCharBehind);

// DELETE (no parameter, no return)
function removeCharAhead() {
  x = cursorPosition(textBox);
  textBox.value = textBox.value.slice(0, x) + textBox.value.slice(x + 1);
  textBox.focus();
  textBox.selectionEnd = x;
}
deleteKey.addEventListener("click", removeCharAhead);

// TAB (set to 5 spaces)
document.getElementById("tab").addEventListener("click", function () {
  if (tab.classList.contains("tab")) {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value.slice(0, x) + `     ` + textBox.value.slice(x);
    textBox.focus();
    textBox.selectionEnd = x + 5;
  }
});

// SPACEBAR
document.getElementById("spacebar").addEventListener("click", function () {
  if (spacebar.classList.contains("spacebar")) {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value.slice(0, x) + " " + textBox.value.slice(x);
    textBox.focus();
    textBox.selectionEnd = x + 1;
  }
});

// ENTER
document.getElementById("enter").addEventListener("click", function () {
  const x = cursorPosition(textBox);
  textBox.value = textBox.value.slice(0, x) + "\n" + textBox.value.slice(x);
  textBox.focus();
  textBox.selectionEnd = x + 1;
});

/* ===================================
add nvaigation keys functionality 
===================================== */
const home = document.getElementById("homekey");
const end = document.getElementById("end");
const leftarrow = document.getElementById("leftarrow");
const rightarrow = document.getElementById("rightarrow");

// HOME (no parameter, no return)
function focusAtStart() {
  textBox.value = textBox.value;
  textBox.focus();
  textBox.selectionEnd = textBox.value[0];
}
home.addEventListener("click", focusAtStart);

// END (no parameter, no return)
function focusAtEnd() {
  x = cursorPosition(textBox);
  textBox.value = textBox.value;
  textBox.focus();
  const length = textBox.value.length;
  textBox.selectionStart = length;
}
end.addEventListener("click", focusAtEnd);

// LEFT ARROW (no parameter, no return)
function arrowLeft() {
  x = cursorPosition(textBox);
  textBox.value = textBox.value;
  textBox.focus();
  textBox.selectionEnd = x - 1;
}
leftarrow.addEventListener("click", arrowLeft);

// RIGHT ARROW (no parameter, no return)
function arrowRight() {
  x = cursorPosition(textBox);
  textBox.value = textBox.value;
  textBox.focus();
  textBox.selectionStart = x + 1;
}
rightarrow.addEventListener("click", arrowRight);

/* ==============================================================
  end KEYBOARD CHARACTERS
=============================================================== */

/* ==============================================================
  COPY & CLEAR functionality for textarea
=============================================================== */
/* COPY the text area using the Clipboard API */
const copy = document.getElementById("copy");

async function copyTextArea(e) {
  if (!navigator.clipboard) {
    e.target.textContent = "Copy to clipboard not supported";
    return;
  }
  try {
    await navigator.clipboard.writeText(textBox.value);
    textBox.select();
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
copy.addEventListener("click", copyTextArea);

// Open modal for confirmation and clear the text area
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

open.addEventListener("click", () => modal.classList.add("show-modal"));
close.addEventListener("click", () => modal.classList.remove("show-modal"));

window.addEventListener("click", e => (e.target == modal ? modal.classList.remove("show-modal") : false));

// clear textarea
document.getElementById("clearText").addEventListener("click", function () {
  textBox.value = "";
  textBox.focus();
  modal.classList.remove("show-modal");
});

/* ==== FILE UPLOAD: Decided against this approach ===== */

/* Notes, problems &/or tasks remaining  */
// 1. use local storage to store the text in textarea in case the user gets interrupted or is not finished composing their email or document
// 2. Have the keyboard layouts created by JS via a select element for different languages, e.g. Greek, French, Spanish, ...
// 3. figure out a better way for user input files than local storage
// 4. content.js has all the proper nouns / phrases and alphabetical default words. How would I get the user to be able to upload their own words and phrases? File upload option?
