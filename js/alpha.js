/* ==== BEGIN ALPHA MANIPULATION & OUTPUT ===== */
/* can't split the output for ALPHA when using the async function below */

// async function userWords() {
//   const response = await fetch('text-alpha.txt')
//   const data = await response.text()
//   console.log("This is asunc userWords:" + data)
//   return data;
// }
// let localAlpha = userWords()

// let localAlpha = "";
fetch('text-alpha.txt')
  .then((response => response.text()))
  .then((data) => {
    // I REALLY hate using local storage
    localStorage.setItem("alphaWords", data);
    return data;
  })
let localAlpha = window.localStorage.getItem('alphaWords');
// window.localStorage.clear();

function splitWords() {
  let y = localAlpha;
  if (y) {
    // if words in text-alpha.txt, then output; BUT if text-alpha.txt is empty, wordsToSplit loads - only solution I could find!?!?
    let words = y.split(/[^a-zA-Z'-]+/gi);
    return words;
  } else {
    let words = wordsToSplit.split(/[^a-zA-Z'-]+/gi);
    return words;
  }
}
let output = splitWords();

/* ==================================
pageOutput places the words in each alphabet letter div
=================================== */
function pageOutput(arr) {
  for (let i = 0; i < arr.length; i++) {

    let outputHTML = `<li class="text-btn" value><a class="${arr[i]}">${arr[i]}</a></li>`;
    let textButton = document.createElement('li');

    textButton.value = arr[i];
    textButton.classList.add('text-btn');

    let firstLetter = arr[i].charAt(0);
    let id = `letter${firstLetter}`;
    let ul = document.getElementById(id);

    // if statement prevents possible errors caused by combo ul's like id letterxyz
    if (ul) {
      ul.insertAdjacentHTML("beforeend", outputHTML);
    }
  }
}
pageOutput(output);

/* ==================================
adding ALPHA words to TEXTAREA
=================================== */
/* ==== VAR for alpha words ===== */
const textBtns = document.getElementsByClassName('text-btn');

// add ALPHABETICAL megamenu words to textarea on click, and capitalize if following end of sentence punctuation
for (let i = 0; i < textBtns.length; i++) {
  if (textBtns[i]) {
    textBtns[i].addEventListener('click', e => {
      let word = e.target.textContent;
      let len = textBox.value.length;
      let punc = textBox.value;
      let first = word.charAt(0);
      // let remainder = word.slice(1);
      let remainder = word.substr(1);

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
/* ==== END ALPHA output to textarea ==== */