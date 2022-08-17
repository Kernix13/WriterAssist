# Notes on refactoring this project

I attempted to adhere as closely as possible to the main aspects of Functional Programming. The problem is that I have event listeners for every button.

## Functional Programming changes

I followed these guidelines (my over-simplified definitions):

- Functions take parameters and return a value or a function
- No mutations or limited and controlled mutation
- No use of array methods that mutate the calling array
- No mutating of objects
- No `for` or `while` loops
- No `console.log`, `addEventListener`, `Math.random`, `Date.now`, etc.
- Follow _Pareto's Law_: 80% pure functions, 20% impure

### alpha.js file

1. Converted two `for` loops into `map` methods.
1. Passed a parameter into the function `splitWords()`
1. Changed 9 `let` keywords to `const`
1. Added the `return` keyword to all the functions
1. Removed all `console.log()` statements

Notes:

Using `getElementsByClassName` returns an `HTMLCollection` and is iterable with a `for` loop. However, I was getting errors when I switched to `map()`. I had to use the **spread operator** for the variable name tied to `getElementsByClassName` to get `map` to work.

HTMLCollection to an array:

```js
// Original
const textBtns = document.getElementsByClassName("text-btn");
// Current
const [...textBtns] = document.getElementsByClassName("text-btn");
```

### proper.js file

1. Converted two `for` loops into `map` methods.
1. Passed a parameter into the function `properNouns()`
1. Changed 5 `let` keywords to `const`
1. Added the `return` keyword to 2 of 3 functions
1. Removed all `console.log()` statements
1. Same need to use the **spread operator** because of the use of `getElementsByClassName`

### main.js

Not so good adhereing to Functional Programming priniciples in this file:

1. Converted two `for` loops into `map` methods.
1. Only the functions `cursorPosition()` and `copyTextArea()` have a parameter.
1. Changed 19 `let` keywords to `const`
1. Not many uses of the `return` keyword. There are many `if` blocks where I am calculating multiple values, adding/removing classes, or manipulating the DOM.
1. Removed all `console.log()` statements except the one in the `catch` block that uses the _Clipboard API_.
1. Same need to use the **spread operator** because of the use of `getElementsByClassName`

This is the best I can do right now for functional programming.

## Object Oreiented Programming

I will definitely use objects and classes when I output the keyboard values via JavaScript instead of hard-coding the values in the HTML. That way I will be able to create alternate language keywboards.

But what do I do with the _alpha_ and _proper nouns_ sections for languages I don't know?

- File upload? (maybe)
- Contributors? (YES!)
