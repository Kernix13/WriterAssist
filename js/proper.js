/* ==== BEGIN PROPER MANIPULATION & OUTPUT ===== */
// let fileNouns = "";
fetch('text-proper.txt')
  .then((res => res.text()))
  .then((data) => {
    // I hate having to use local storage
    localStorage.setItem("wordsNounsPhrases", data);
    let fileNouns = data;
    return fileNouns;
    // return data;
  })

// split proper nouns from local storage (instead of FETCH) or content.js
function properNouns() {
  let x = window.localStorage.getItem('wordsNounsPhrases');
  // let x = fileNouns;
  if (x) {
    let nouns = x.split(/[^a-zA-Z\s.:?!'-]\s+/gi);
    console.log("This is filenouns from fetch: " + nouns)
    return nouns;
  } else {
    let nouns = properToSplit.split(/[^a-zA-Z\s.:?!'-]\s+/gi);
    console.log("This is properToSplit from content.js: " + nouns)
    return nouns;
  }
}
let pn = properNouns();

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

// ACCORDIAN FOR PROPER NOUNS - https://codepen.io/craigwarren-dev/pen/vzdeoy
const accordian1 = document.getElementById("accordian1")

// add & remove class for showing PROPER NOUNS
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

/* ==================================
adding PROPER words to TEXTAREA
=================================== */
/* ==== VAR for proper nouns ===== */
const special = document.getElementsByClassName('special');

// add PROPER NOUNS AND PHRASES to text-box
for (let i = 0; i < special.length; i++) {
  special[i].addEventListener('click', e => {
    let userFavs = e.target.value;
    textBox.value = textBox.value + " " + userFavs;
    textBox.focus();
  })
}
/* ==== END PROPER & ALPHA output to textarea ==== */