/* ==== BEGIN ALPHA MANIPULATION & OUTPUT ===== */

// split alphabetical words from content.js
function splitWords(str) {
  const words = str.split(/[^a-zA-Z'-]+/gi);
  return words;
}

/* ====================================================
pageOutput places the words in each alphabet letter div
==================================================== */
function pageOutput(arr) {
  arr.map(item => {
    const outputHTML = `<li class="text-btn" value><a class="${item}">${item}</a></li>`;
    const textButton = document.createElement("li");
    textButton.value = item;
    textButton.classList.add("text-btn");

    const firstLetter = item.charAt(0);
    const id = `letter${firstLetter}`;
    const ul = document.getElementById(id);

    // Prevent possible errors caused by combo ul's like id letterxyz
    if (ul) {
      return ul.insertAdjacentHTML("beforeend", outputHTML);
    }
  });
}
pageOutput(splitWords(wordsToSplit));

/* ===========================
adding ALPHA words to TEXTAREA
============================ */
const [...textBtns] = document.getElementsByClassName("text-btn");

textBtns.map(item => {
  if (item) {
    item.addEventListener("click", e => {
      const word = e.target.textContent;
      const len = textBox.value.length;
      const punc = textBox.value;
      const first = word.charAt(0);
      // const remainder = word.slice(1);
      const remainder = word.substr(1);

      if ([".", "?", "!", "\n"].includes(punc.charAt(len - 1)) || textBox.value.charAt(0) == "") {
        textBox.value = textBox.value + " " + first.toUpperCase() + remainder;
        textBox.focus();
        return textBox.value;
      } else {
        textBox.value = textBox.value + " " + word;
        textBox.focus();
        return textBox.value;
      }
    });
  }
});
/* ==== END ALPHA output to textarea ==== 
  Changing for loops to arr.map didn't shorten the code any?
*/
