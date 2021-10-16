/* ==== VAR for textarea ===== */
const textBox = document.getElementById("text-box");

/* ==== BEGIN ALPHABETICAL WORDS ===== */
//          in alpha.js
/* ==== END ALPHABETICAL WORDS  ===== */


/* ==== BEGIN PROPER NOUNS AND PHRASES ===== */
//          in proper.js
/* ==== END PROPER NOUNS AND PHRASES  ===== */


/* ==============================================================
=================================================================
  add KEYBOARD CHARACTERS to text area & get cursor position for ALL keyboard functionality except CAPS and SHIFT keys
  ===============================================================
=============================================================== */
// GET INDEX POSITION OF CURSOR
// https://www.webtips.dev/webtips/javascript/how-to-get-caret-position-with-javascript
function cursorPosition() {
  const position = textBox.selectionStart;
  // console.log("position is: " + position);
  return position;
}

// LETTERS, CAPS key, SHIFT key
const keys = document.getElementsByClassName('key');

// capitalize letter or not based on various criteria
function addLetters() {
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', e => {
      let letterkey = e.target.value;
      if (capsKey.classList.contains('caps-off')) {
        let len = textBox.value.length;
        let punc = textBox.value;
        let x = cursorPosition();
        if (['.', '?', '!', '\n'].includes(punc.charAt(len - 1)) || textBox.value.charAt(0) == '') {
          textBox.value = textBox.value.slice(0, x) + " " + letterkey.toUpperCase() + textBox.value.slice(x);
          textBox.focus();
          textBox.selectionEnd = x + 2;
        } else {
          textBox.value = textBox.value.slice(0, x) + letterkey.toLowerCase() + textBox.value.slice(x);
          textBox.focus();
          textBox.selectionEnd = x + 1;
        }
      } else {
        let x = cursorPosition();
        textBox.value = textBox.value.slice(0, x) + letterkey.toUpperCase() + textBox.value.slice(x);
        textBox.focus();
        textBox.selectionEnd = x + 1;
      }
    })
  }
}
addLetters()

// add or remove class for highlighting the CAPS & SHIFT keys
const capsKey = document.getElementById("caps");

function capitalize() {
  if (!capsKey.classList.contains('caps-on')) {
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
  if (!shiftl.classList.contains('shift-on') || !shiftr.classList.contains('shift-on')) {
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
let rightSquare = document.getElementById("rtsq");
let leftSquare = document.getElementById("leftsq");
let backslash = document.getElementById("backslash");
let semicolon = document.getElementById("semicolon");
let quotes = document.getElementById("quotes");
let forwardslash = document.getElementById("forwardslash");
let comma = document.getElementById("comma");
let period = document.getElementById("periodpunc");

// Change the value of the shift keys with a class of shiftItem though the id is being selected
function changeInner() {
  if (shiftl.classList.contains('shift-on') || shiftr.classList.contains('shift-on')) {
    rightSquare.innerHTML = "{";
    leftSquare.innerHTML = "}";
    backslash.innerHTML = "|";
    semicolon.innerHTML = ":";
    quotes.innerHTML = "\"";
    comma.innerHTML = "&lt;";
    period.innerHTML = "&gt;";
    forwardslash.innerHTML = "?";
  } else {
    rightSquare.innerHTML = "[";
    leftSquare.innerHTML = "]";
    backslash.innerHTML = "\\";
    semicolon.innerHTML = ";";
    quotes.innerHTML = "'";
    comma.innerHTML = ",";
    period.innerHTML = ".";
    forwardslash.innerHTML = "/";
  }
};
shiftKeyL.addEventListener("click", changeInner);
shiftKeyR.addEventListener("click", changeInner);

// add NON-ALPHABETIC CHARACTERS (numbers & symbols) to textarea
const nonAlpha = document.getElementsByClassName("nonAlpha");
// const amp = document.getElementById("amp");

for (let i = 0; i < nonAlpha.length; i++) {
  nonAlpha[i].addEventListener('click', e => {
    let x = cursorPosition();
    let char = e.target.innerHTML;
    if (char == '&amp;') {
      textBox.value = textBox.value.slice(0, x) + '&' + textBox.value.slice(x);
    } else if (char == '&lt;') {
      textBox.value = textBox.value.slice(0, x) + '<' + textBox.value.slice(x);
    } else if (char == '&gt;') {
      textBox.value = textBox.value.slice(0, x) + '>' + textBox.value.slice(x);
    } else {
      textBox.value = textBox.value.slice(0, x) + char + textBox.value.slice(x);
    }

    textBox.focus();
    textBox.selectionEnd = x + 1;
  })
}

// get cursor X & Y coordinates - couldn't get this to work for up and down keys

// const pageUp = document.getElementById("page-up");
// const pageDown = document.getElementById("page-down");
// const arrowUp = document.getElementById("uparrow");
// const arrowDown = document.getElementById("downarrow");

// function coords() {
//   document.addEventListener('mousemove', (e) => {
//     let XnY = [e.clientX, e.clientY]
//     let x = XnY[0];
//     let y = XnY[1];
//     console.log(y);
//     return y;
//   });
// }

/* ===========================================
  add nonprint keys functionality for textarea
============================================ */
const backspace = document.getElementById('backspace');
const deleteKey = document.getElementById('delete');

// BACKSPACE
function removeCharBehind(x) {
  x = cursorPosition();
  if (x != 0) {
    textBox.value = textBox.value.slice(0, x - 1) + textBox.value.slice(x);
    textBox.focus();
    textBox.selectionEnd = x - 1;
  } else {
    textBox.focus();
  }
}
backspace.addEventListener("click", removeCharBehind);

// DELETE
function removeCharAhead(x) {
  x = cursorPosition();
  textBox.value = textBox.value.slice(0, x) + textBox.value.slice(x + 1);
  textBox.focus();
  textBox.selectionEnd = x;
}
deleteKey.addEventListener("click", removeCharAhead);

// TAB (set to 5 spaces)
document
  .getElementById("tab")
  .addEventListener("click", function () {
    if (tab.classList.contains('tab')) {
      let x = cursorPosition();
      textBox.value = textBox.value.slice(0, x) + `     ` + textBox.value.slice(x);
      textBox.focus();
      textBox.selectionEnd = x + 5;
    }
  });

// SPACEBAR
document
  .getElementById("spacebar")
  .addEventListener("click", function () {
    if (spacebar.classList.contains('spacebar')) {
      let x = cursorPosition();
      textBox.value = textBox.value.slice(0, x) + " " + textBox.value.slice(x);
      textBox.focus();
      textBox.selectionEnd = x + 1;
    }
  });

// ENTER
document
  .getElementById("enter")
  .addEventListener("click", function () {
    let x = cursorPosition();
    textBox.value = textBox.value.slice(0, x) + "\n" + textBox.value.slice(x);
    textBox.focus();
    textBox.selectionEnd = x + 1;
  });

/* ===================================
add nvaigation keys functionality 
===================================== */
const home = document.getElementById('homekey');
const end = document.getElementById('end');
const leftarrow = document.getElementById('leftarrow');
const rightarrow = document.getElementById('rightarrow');

// HOME
function focusAtStart(x) {
  textBox.value = textBox.value;
  textBox.focus();
  textBox.selectionEnd = textBox.value[0];
}
home.addEventListener("click", focusAtStart);

// END
function focusAtEnd(x) {
  x = cursorPosition();
  textBox.value = textBox.value;
  textBox.focus();
  let length = textBox.value.length;
  textBox.selectionStart = length;
}
end.addEventListener("click", focusAtEnd);

// LEFT ARROW
function arrowLeft(x) {
  x = cursorPosition();
  textBox.value = textBox.value;
  textBox.focus();
  textBox.selectionEnd = x - 1;
}
leftarrow.addEventListener("click", arrowLeft);

// RIGHT  ARROW
function arrowRight(x) {
  x = cursorPosition();
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

async function copyToClipboard(e) {
  if (!navigator.clipboard) {
    e.target.textContent = 'Copy to clipboard not supported'
    return
  }
  const textToCopy = textBox;
  try {
    await navigator.clipboard.writeText(textToCopy.value);
    textToCopy.select();
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
copy.addEventListener("click", copyToClipboard);

// Clear out the text area and open modal for confirmation
const close2 = document.getElementById('close2');
const open2 = document.getElementById('open2');
const modal2 = document.getElementById('modal2');

open2.addEventListener('click', () => modal2.classList.add('show-modal'));
close2.addEventListener('click', () => modal2.classList.remove('show-modal'));

window.addEventListener('click', e =>
  e.target == modal2 ? modal2.classList.remove('show-modal') : false
);

// clear textarea
document
  .getElementById("clearText")
  .addEventListener("click", function () {
    textBox.value = '';
    textBox.focus();
    modal2.classList.remove('show-modal')
  });

/* ==== FILE UPLOAD: Decided against this approach ===== */


/* Notes, problems &/or tasks remaining  */
// 1. use local storage to store the text in textarea in case the user gets interrupted or is not finished composing their email or document
// 2. Have the keyboard layouts created by JS via a select element for different languages, e.g. Greek, French, Russian...
// 3. figure out a better way for user input files than local storage
// 4. content.js has all the proper nouns / phrases and alphabetical default words - or the file text-proper.txt and text-alpha.txt both of which are empty. The user would have to load all the proper nouns and phrases into those files, separated by a comma and space for phrases, and same or just a space for alpha . If a phrase ends with a comma, then it needs 2 commas. The text-alpha file should already be sorted and in lowercase.
// 5. If test-proper & text-alpha are empty of text or don't exist it defaults to content.js, though if the file is not present it throws an error (try catch?). User needs to refresh the page after populating the text file - same for text-alpha.txt