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
    const outputNouns = `<button class="special" value="${item}" tabindex="-1">${item}</button>`;
    const nounButton = document.createElement("button");
    nounButton.value = item;
    const specialNoun = document.getElementById("special-words");
    return specialNoun.insertAdjacentHTML("beforeend", outputNouns);
  });
}
properNounOutput(properNouns(properToSplit));

// ACCORDIAN FOR PROPER NOUNS - https://codepen.io/craigwarren-dev/pen/vzdeoy
const accordian = document.getElementById("accordian");

// add & remove class for showing PROPER NOUNS
function displaypanel() {
  const panel = document.getElementById("panel");
  if (!panel.classList.contains("panel-active")) {
    panel.classList.add("panel-active");
    panel.classList.remove("panel-inactive");
  } else {
    panel.classList.add("panel-inactive");
    panel.classList.remove("panel-active");
  }
}
accordian.addEventListener("click", displaypanel);

/* ==================================
adding PROPER words to TEXTAREA
=================================== */
const [...special] = document.getElementsByClassName("special");

special.map(item => {
  item.addEventListener("click", e => {
    const userFavs = e.target.value;
    textBox.value = textBox.value + " " + userFavs;
    textBox.focus();
    return textBox.value;
  });
});
// /* ==== END PROPER output to textarea ==== */
