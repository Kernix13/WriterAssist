/* Problems &/or tasks remaining  */
// 1. use local storage to store the text in textarea in case the user gets interrupted or is not finished composing their email or document
// 2. import and export for type="module" is NOT possible if app is running from user's localhost (C:/). Is there a solution for that or do I need to keep a small amount of "common" words in the main.js file?
// 3. I need to have the user upload 1. list of email addresses and corresponding names, 2. list of proper nouns, 3. a very large sample of their past writing. Once I store all that data, I need to generate a new html file with the data from the uploads.
// 4. Once that is possible, have a number input field so that they can fine tune the # of alphabetical words to more or less words for each letter.
// 5. Have the keyboard keys created by JS for different languages, e.g. Greek.

// content.js has all the proper and alpha words

// EMAIL ADDRESSES AND NAMES OUTPUT

// PROPER NOUN SPLIT & SORT PRIOT TO OUTPUT
function properNouns() {
  let nouns = proper.split(/[^a-zA-Z\s.:?!'-]\s+/gi);
  return nouns;
}
let pn = properNouns();

// ALPHABETICAL WORDS SPLIT PRIOT TO OUTPUT
function splitWords(str) {
  let words = str.split(/[^a-zA-Z'-]+/gi);
  for (let i = 0; i < words.length; i++) {
    if (words !== "") {
      return words.sort((a, b) => a.localeCompare(b));
    }
  }
}
// console.log(splitWords(lowerCase));

/* =========== get a count for each word ================
also: https://jsbin.com/vuvosah/edit?js,console
wordCount 
=============================================================*/

const a = splitWords(wordsToSplit);

function wordCount(a) {
  let counts = {}

  for (let i = 0; i < a.length; i++) {
    if (counts[a[i]]) {
      counts[a[i]] += 1
    } else {
      counts[a[i]] = 1
    }
  }
  // console.log(counts);
  return counts;
}
wordCount(a);

/* ============ output creates:
the object with the words as keys and their counts as values
==================== */
let inputWords = wordCount(a);
let output = Object.entries(inputWords).map(([word, count]) => ({ word, count }));
// let outputKeys = Object.entries(inputWords).map(([word, count]) => ({ word, count }));

/* ==================================
properNounOutput places the Proper Nouns in the #special-words div
=================================== */
function properNounOutput(arr) {
  for (let i = 0; i < arr.length; i++) {

    let outputNouns = `<button class="special" value="${arr[i]}" tabindex="-1">${arr[i]}</button>`;
    let nounButton = document.createElement('button');
    nounButton.value = arr[i];
    let specialNoun = document.getElementById("special-words");
    specialNoun.insertAdjacentHTML("beforeend", outputNouns);

  }
}
properNounOutput(pn);

/* ==================================
pageOutput places the words in each alphabet letter div
=================================== */
function pageOutput(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].count > 0 && arr[i].word != "") {

      let outputHTML = `<li class="text-btn" value><a id="${arr[i].word}">${arr[i].word}</a></li>`;

      let textButton = document.createElement('li');
      textButton.value = arr[i].word;
      textButton.classList.add('text-btn');

      let firstLetter = arr[i].word.charAt(0);
      let id = `letter${firstLetter}`;
      let ul = document.getElementById(id);

      // The if statement only prevents possible errors, 
      // caused by the last ul with id letterxyz
      if (ul) {
        ul.insertAdjacentHTML("beforeend", outputHTML);
      }
    }
  }
}
pageOutput(output);

// variables for user favorite words, most used words and textarea element
const special = document.getElementsByClassName('special');
const textBtns = document.getElementsByClassName('text-btn');
const textBox = document.getElementById("text-box");

// add alphabetical megamenu words to textarea on click, and capitalize if following end of sentence punctuation
for (let i = 0; i < textBtns.length; i++) {
  if (textBtns[i]) {
    textBtns[i].addEventListener('click', e => {
      let word = e.target.textContent;
      let len = textBox.value.length;
      let punc = textBox.value;
      let first = word.charAt(0);
      let remainder = word.slice(1)

      if (['.', '?', '!', '\n'].includes(punc.charAt(len - 1)) || textBox.value.charAt(0) == '') {
        textBox.value = textBox.value + " " + first.toUpperCase() + remainder;
        textBox.focus();
      } else {
        textBox.value = textBox.value + " " + word;
        textBox.focus();
      }
    })
  }

}

// add Special Words to text-box, capitalize words if following ., ! or ?
for (let i = 0; i < special.length; i++) {
  special[i].addEventListener('click', e => {
    let userFavs = e.target.value;
    if (e.target.value == 'com' || e.target.value == 'net' || e.target.value == 'org') {
      textBox.value = textBox.value + userFavs;
      textBox.focus();
    } else {
      textBox.value = textBox.value + " " + userFavs;
      textBox.focus();
    }
  })
}

/* === add email addresses to email-box to === */
// for (let i = 0; i < email.length; i++) {
//   email[i].addEventListener('change', e => {
//     let myAddresses = e.target.value;

//     emailBox.value = emailBox.value + " " + myAddresses;
//     emailBox.focus();
//   })
// }
// const email = document.getElementsByClassName('email');
// const emailBox = document.getElementById("email-box");

let checkbox = document.querySelector("input[type=checkbox]");
const email = document.getElementsByClassName('email');
const submitEmail = document.getElementById("submit-email");
const emailBox = document.getElementById("email-box");

function getSelectedCheckboxValues(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(' ' + checkbox.value);
  });
  return values;
}

submitEmail.addEventListener('click', (event) => {
  let myAddresses = getSelectedCheckboxValues('email');
  emailBox.value = emailBox.value + myAddresses + ",";

  function clearCheckboxes() {
    document.querySelectorAll('input[type="checkbox"]')
      .forEach(box => box.checked = false);
  }
  clearCheckboxes();
});

// not sure about all of this https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
function check(checked = true) {
  const cbs = document.querySelectorAll('input[name="email"]');
  cbs.forEach((cb) => {
    cb.checked = checked;
  });
}

const uncheck = document.getElementById("uncheck");
uncheck.onclick = checkAll;

function checkAll() {
  check();
  // reassign click event handler
  this.onclick = uncheckAll;
}

function uncheckAll() {
  check(false);
  // reassign click event handler
  this.onclick = checkAll;
}

// ========== end uncheck here

/* ==============================================================
  add keyboard chars to page in "text-area" on click
====================== */
// GET INDEX POSITION OF CURSOR
// https://www.webtips.dev/webtips/javascript/how-to-get-caret-position-with-javascript
function cursorPosition() {
  const position = textBox.selectionStart;
  // console.log("position is: " + position);
  return position;
}
// cursorPosition()

// letters, CAPS key, SHIFT key
const keys = document.getElementsByClassName('key');
const capsKey = document.getElementById("caps");

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

// add or remove class for highlighting the CAPS key & SHIFT key
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

const shiftKeyL = document.querySelector(".shiftL");
const shiftKeyR = document.querySelector(".shiftR");
let rightSquare = document.getElementById("rtsq");
let leftSquare = document.getElementById("leftsq");
let backslash = document.getElementById("backslash");
let semicolon = document.getElementById("semicolon");
let quotes = document.getElementById("quotes");
let forwardslash = document.getElementById("forwardslash");
let comma = document.getElementById("comma");
let period = document.getElementById("period");

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

// non-alphabetic (numbers & symbols)
const nonAlpha = document.getElementsByClassName("nonAlpha");
const amp = document.getElementById("amp");

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

// get cursor X & Y coordinates
// const navBtn = document.getElementsByClassName("navBtn");
const pageUp = document.getElementById("page-up");
const pageDown = document.getElementById("page-down");
const arrowUp = document.getElementById("uparrow");
const arrowDown = document.getElementById("downarrow");

function coords() {
  document.addEventListener('mousemove', (e) => {
    let XnY = [e.clientX, e.clientY]
    let x = XnY[0];
    let y = XnY[1];
    // console.log(y);
    return y;
  });
}
// coords();
// function cursorUp(pos) {
//   let x = cursorPosition();
//   pos = coords();
//   // x = pos[0];
//   // y = pos[1];
//   textBox.value = textBox.value;
//   textBox.focus();
//   textBox.selectionEnd = x;
// }
// arrowUp.addEventListener("click", cursorUp);

/*
how can i define textBox[0] = 0, 0? or can make position = 0, did that for position above and it output zero. For up and down arrows it's about 18px but change text-box font sixe to test that; for right and left arrows, how do I get the size of the character to the right if cursor position is zero - is that textBox[0], and is behind textBox[-1]?
let textBoxEmpty = []

*/

/* ==============================================================
  add nonprint keys functionality to #text-box .text-area on click
====================== */
// BACKSPACE
const backspace = document.getElementById('backspace');
const deleteKey = document.getElementById('delete');

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


// TAB
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

// HOME
const home = document.getElementById('homekey');

function focusAtStart(x) {
  // x = cursorPosition();
  // textBox.value = textBox.value.slice(0, x) + textBox.value.slice(x + 1);
  textBox.value = textBox.value;
  textBox.focus();
  textBox.selectionEnd = textBox.value[0];
  // console.log(x);
}
home.addEventListener("click", focusAtStart);

// END
const end = document.getElementById('end');

function focusAtEnd(x) {
  x = cursorPosition();
  textBox.value = textBox.value;
  textBox.focus();
  let length = textBox.value.length;
  textBox.selectionStart = length;
}
end.addEventListener("click", focusAtEnd);

// LEFT ARROW
const leftarrow = document.getElementById('leftarrow');

function arrowLeft(x) {
  x = cursorPosition();
  textBox.value = textBox.value;
  textBox.focus();
  textBox.selectionEnd = x - 1;
}
leftarrow.addEventListener("click", arrowLeft);

// RIGHT  ARROW
const rightarrow = document.getElementById('rightarrow');

function arrowRight(x) {
  x = cursorPosition();
  textBox.value = textBox.value;
  textBox.focus();
  textBox.selectionStart = x + 1;
}
rightarrow.addEventListener("click", arrowRight);

/* COPY the text area, Clipboard API, (2nd example Permission API) - WORKS
from https://codepen.io/mornir0/pen/LgLPjo */
const copy = document.getElementById("copy");
const emailCopy = document.getElementById("email-copy");

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

async function copyEmails(e) {
  if (!navigator.clipboard) {
    e.target.textContent = 'Copy to clipboard not supported'
    return
  }
  const emailToCopy = emailBox;
  try {
    await navigator.clipboard.writeText(emailToCopy.value);
    emailToCopy.select();
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
emailCopy.addEventListener("click", copyEmails);

// Clear out the e-mail-text box
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
// show modal:
open.addEventListener('click', () => modal.classList.add('show-modal'));
// hide modal clicking on X icon:
close.addEventListener('click', () => modal.classList.remove('show-modal'));
// hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);

// Clear out the main-text box
const close2 = document.getElementById('close2');
const open2 = document.getElementById('open2');
const modal2 = document.getElementById('modal2');
// show modal:
open2.addEventListener('click', () => modal2.classList.add('show-modal'));
// hide modal:
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

// clear email field
document
  .getElementById("clearEmail")
  .addEventListener("click", function () {
    emailBox.value = '';
    emailBox.focus();
    modal.classList.remove('show-modal')
  });


// accordians for proper nouns and emails
// https://codepen.io/craigwarren-dev/pen/vzdeoy
const accordian1 = document.getElementById("accordian1")

// add or remove class for displaying PROPER NOUNS
function displayPanel1() {
  const panel1 = document.getElementById("panel1");
  if (!panel1.classList.contains('panel1-active')) {
    panel1.classList.add("panel1-active");
    panel1.classList.remove("panel1-inactive");
  } else {
    panel1.classList.add("panel1-inactive");
    panel1.classList.remove("panel1-active");
  }
}
accordian1.addEventListener("click", displayPanel1);

const accordian2 = document.getElementById("accordian2")

// add or remove class for displaying EMAILS
function displayPanel2() {
  const panel2 = document.getElementById("panel2");
  if (!panel2.classList.contains('panel2-active')) {
    panel2.classList.add("panel2-active");
    panel2.classList.remove("panel2-inactive");
  } else {
    panel2.classList.add("panel2-inactive");
    panel2.classList.remove("panel2-active");
  }
}
accordian2.addEventListener("click", displayPanel2);

/* ====== FILE UPLOAD - HOW TO PLACE CONTENT IN  VARIABLE ======= */