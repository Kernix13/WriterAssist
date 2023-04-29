import { properToSplit, wordsToSplit } from "./content.js";
const textBox = document.getElementById("text-box");

// Create the li and button for Alpha and Proper Nouns
function createListItems(btnText, btnClass) {
    const li = document.createElement("li");
    li.classList.add("text-btn");
    const liBtn = document.createElement("button");
    liBtn.className = btnClass;
    liBtn.value = btnText;
    const liBtnText = document.createTextNode(btnText);
    liBtn.append(liBtnText);
    li.append(liBtn);
    return li;
}

/* ==== BEGIN ALPHA MANIPULATION & OUTPUT ===== */
// split alphabetical words from content.js
function splitWords(str) {
    const words = str.split(/[^a-zA-Z'-]+/gi);
    return words;
}

/* ====================================================
pageOutput places the words in each alphabet letter div
Need a Fx to toggle .hide to only show submenu when clicked
==================================================== */
function pageOutput(arr) {
    arr.map((item) => {
        const firstLetter = item.charAt(0);
        const id = `letter${firstLetter}`;
        const ul = document.getElementById(id);
        // find matching UL in the DOM and append li elements:
        const domLetterUls = document.querySelectorAll(".top-words");
        domLetterUls.forEach(list => {
            if (id === list.id) {
                ul.append(createListItems(item, "alpha"));
            }
        });
    });
}
pageOutput(splitWords(wordsToSplit));

/* SHOW SUBMENU ON CLICK - I don't like the HTML structure for this section */
const mainNavLi = document.querySelectorAll(".main-nav li");
mainNavLi.forEach(item => {
    item.addEventListener('click', (e) => {
        item.classList.toggle('active');
        // if statement to fix error: Uncaught TypeError ...
        if (item.children[1]) {
            item.children[1].classList.toggle('show');
        }
        else {
            item.classList.toggle('active');
        }
    });
});

/* ===========================
adding ALPHA words to TEXTAREA
============================ */
const [...textBtns] = document.getElementsByClassName("text-btn");
textBtns.map((item) => {
    if (item) {
        item.addEventListener("click", (e) => {
            const w = e.target;
            const word = w.textContent;
            const len = textBox.value.length;
            const punc = textBox.value;
            const first = word.charAt(0);
            // const remainder = word.slice(1);
            const remainder = word.substring(1);
            if ([".", "?", "!", "\n"].includes(punc.charAt(len - 1)) || textBox.value.charAt(0) == "") {
                textBox.value = textBox.value + " " + first.toUpperCase() + remainder;
                textBox.focus();
                return textBox.value;
            }
            else {
                textBox.value = textBox.value + " " + word;
                textBox.focus();
                return textBox.value;
            }
        });
    }
});

/* ==== BEGIN PROPER NOUNS MANIPULATION & OUTPUT ===== */
// split proper nouns from content.js
function properNouns(str) {
    const nouns = str.split(/[^a-zA-Z\s.:?!'-]\s+/gi);
    return nouns;
}

/* ==================================
properNounOutput places the Proper Nouns in the #special-words div
=================================== */
function properNounOutput(arr) {
    arr.map(item => {
        const specialNoun = document.getElementById("special-words");
        specialNoun.append(createListItems(item, "special"));
    });
}
properNounOutput(properNouns(properToSplit));

/* ACCORDIAN FOR PROPER NOUNS, need animation or transition for closing */
const accordian = document.getElementById("accordian");
const panel = document.getElementById("panel");
accordian.addEventListener("click", function () {
    panel.classList.toggle("inactive");
});

/* ==================================
adding PROPER words to TEXTAREA
=================================== */
const [...special] = document.getElementsByClassName("special");
special.map(item => {
    item.addEventListener("click", (e) => {
        panel.classList.toggle("inactive");
        const favs = e.target;
        const userFavs = favs.value;
        textBox.value = textBox.value + " " + userFavs;
        textBox.focus();
        return textBox.value;
    });
});

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
const capsKey = document.getElementById("caps");

// Capitalize letter or not based on various criteria
/*  From a functional programming POV, no parameter, no return!?!
    I also have a lot of repeated code */
function addLetters() {
    keys.map(key => {
        key.addEventListener("click", e => {
            const letter = e.target;
            const letterkey = letter.value;
            if (capsKey.classList.contains("caps-off")) {
                const len = textBox.value.length;
                const punc = textBox.value;
                const x = cursorPosition(textBox);
                if ([".", "?", "!", "\n"].includes(punc.charAt(len - 1)) || textBox.value.charAt(0) == "") {
                    textBox.value = textBox.value.slice(0, x) + " " + letterkey.toUpperCase() + textBox.value.slice(x);
                    textBox.focus();
                    textBox.selectionEnd = x + 2;
                }
                else {
                    textBox.value = textBox.value.slice(0, x) + letterkey.toLowerCase() + textBox.value.slice(x);
                    textBox.focus();
                    textBox.selectionEnd = x + 1;
                }
            }
            else {
                const x = cursorPosition(textBox);
                textBox.value = textBox.value.slice(0, x) + letterkey.toUpperCase() + textBox.value.slice(x);
                textBox.focus();
                textBox.selectionEnd = x + 1;
            }
        });
    });
}
addLetters();

// Add and remove class for highlighting the CAPS key
capsKey.addEventListener("click", function () {
    capsKey.classList.toggle("caps-on");
    capsKey.classList.toggle("caps-off");
});

// Add and remove class for highlighting the SHIFT keys
const shiftl = document.getElementById("shiftl");
const shiftr = document.getElementById("shiftr");

shiftl.addEventListener("click", function () {
    shiftl.classList.toggle("shift-on");
    shiftr.classList.toggle("shift-on");
});
shiftr.addEventListener("click", function () {
    shiftr.classList.toggle("shift-on");
    shiftl.classList.toggle("shift-on");
});

// Grab all Shift Ikey elements
const shiftItemIds = ['backtick', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'dash', 'equals', 'leftsq', 'rtsq', 'backslash', 'semicolon', 'quotes', 'comma', 'period', 'forwardslash'];
const shiftArr = [];

function createShiftItems(arr) {
    arr.forEach((item) => {
        const shiftItem = document.getElementById(item);
        shiftArr.push(shiftItem);
    });
    return shiftArr;
}
createShiftItems(shiftItemIds);

const shiftOffValues = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '=', '[', ']', '\\', ';', '\'', ',', '.', '/',];
const shiftOnValues = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?',];

function changeInner() {
    shiftOnValues.forEach((item, i) => {
        if (shiftl.classList.contains('shift-on') || shiftr.classList.contains('shift-on')) {
            shiftArr[i].textContent = item;
        }
        else {
            shiftArr[i].textContent = shiftOffValues[i];
        }
    });
}
shiftl.addEventListener("click", changeInner);
shiftr.addEventListener("click", changeInner);

// Add NON-ALPHABETIC CHARACTERS (numbers & symbols) to textarea
const [...nonAlpha] = document.getElementsByClassName("nonAlpha");

nonAlpha.map(item => {
    item.addEventListener("click", (e) => {
        const x = cursorPosition(textBox);
        const ch = e.target;
        const char = ch.innerHTML;
        const sliceStart = textBox.value.slice(0, x);
        const sliceEnd = textBox.value.slice(x);
        if (char == "&amp;") {
            textBox.value = sliceStart + "&" + sliceEnd;
        }
        else if (char == "&lt;") {
            textBox.value = sliceStart + "<" + sliceEnd;
        }
        else if (char == "&gt;") {
            textBox.value = sliceStart + ">" + sliceEnd;
        }
        else {
            textBox.value = sliceStart + char + sliceEnd;
        }
        textBox.focus();
        return (textBox.selectionEnd = x + 1);
    });
});

/* ===========================================
  add nonprint keys functionality for textarea
============================================ */
const backspace = document.getElementById("backspace");
const deleteKey = document.getElementById("delete");
const tab = document.getElementById("tab");
const spacebar = document.getElementById("spacebar");
const enter = document.getElementById("enter");

// BACKSPACE
function removeCharBehind() {
    const x = cursorPosition(textBox);
    if (x != 0) {
        textBox.value = textBox.value.slice(0, x - 1) + textBox.value.slice(x);
        textBox.focus();
        textBox.selectionEnd = x - 1;
    }
    else {
        textBox.focus();
    }
}
backspace.addEventListener("click", removeCharBehind);

// DELETE
function removeCharAhead() {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value.slice(0, x) + textBox.value.slice(x + 1);
    textBox.focus();
    textBox.selectionEnd = x;
}
deleteKey.addEventListener("click", removeCharAhead);

// TAB (set to 5 spaces)
tab.addEventListener("click", function () {
    if (tab.classList.contains("tab")) {
        const x = cursorPosition(textBox);
        textBox.value = textBox.value.slice(0, x) + `     ` + textBox.value.slice(x);
        textBox.focus();
        textBox.selectionEnd = x + 5;
    }
});

// SPACEBAR
spacebar.addEventListener("click", function () {
    if (spacebar.classList.contains("spacebar")) {
        const x = cursorPosition(textBox);
        textBox.value = textBox.value.slice(0, x) + " " + textBox.value.slice(x);
        textBox.focus();
        textBox.selectionEnd = x + 1;
    }
});

// ENTER
enter.addEventListener("click", function () {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value.slice(0, x) + "\n" + textBox.value.slice(x);
    textBox.focus();
    textBox.selectionEnd = x + 1;
});

/* ===================================
add navigation keys functionality
===================================== */
const home = document.getElementById("homekey");
const end = document.getElementById("end");
const leftarrow = document.getElementById("leftarrow");
const rightarrow = document.getElementById("rightarrow");

// HOME
function focusAtStart() {
    textBox.value = textBox.value;
    textBox.focus();
    // textBox.selectionEnd = textBox.value[0];
    textBox.selectionEnd = parseInt(textBox.value[0]);
}
home.addEventListener("click", focusAtStart);

// END
function focusAtEnd() {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value;
    textBox.focus();
    const length = textBox.value.length;
    textBox.selectionStart = length;
}
end.addEventListener("click", focusAtEnd);

// LEFT ARROW
function arrowLeft() {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value;
    textBox.focus();
    textBox.selectionEnd = x - 1;
}
leftarrow.addEventListener("click", arrowLeft);

// RIGHT ARROW
function arrowRight() {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value;
    textBox.focus();
    textBox.selectionStart = x + 1;
}
rightarrow.addEventListener("click", arrowRight);

/* ==============================================================
  COPY (Clipboard API) & CLEAR functionality for textarea
=============================================================== */
const copy = document.getElementById("copy");
async function copyTextArea() {
    if (!navigator.clipboard) {
        alert("Copy to clipboard not supported");
        return;
    }
    try {
        await navigator.clipboard.writeText(textBox.value);
        textBox.select();
    }
    catch (err) {
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
const clearText = document.getElementById("clearText");
clearText.addEventListener("click", function () {
    textBox.value = "";
    textBox.focus();
    modal.classList.remove("show-modal");
});