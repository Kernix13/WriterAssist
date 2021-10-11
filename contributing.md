# Overview

This is a tool for people with reduced motor skills who find using a technology assisted mouse easier than using a keyboard. It is mostly complete though I have a few items that I would like to incorporate into the code.

## Wish list items
1. [Up and down arrow keys](#up-and-down-arrow-keys)
2. [User supplied file uploads](#user-supplied-file-uploads)
3. [Choose alphabetical word count output](#choose-alphabetical-word-count-output)
4. [Keyboard layouts by language](#keyboard-layouts-by-language)

### Up and down arrow keys

This is not essential but it would be nice to have. They would be used when a user notices a mis-spelling and click near the word to make a correction but click the wrong row of text. The right and left arrows can be used to get to the part of the word that needs to be replaced or removed.

### User supplied file uploads

I can not figure out how to get a file of words into the JavaScript file for the final output of the words. Since the files are on the users' harddrive, there is no HTTPS address for the export/import functionality to work. 

I was able to upload a file from a different HTML page, output the content to the page, log the content to the console, and to store the content in localStorage. However, I have yet to figure out how to pull the content down from localStorage and save it as a variable in main.js. I also haven't figured out how to extract the content from the other HTML page to use in main.js. 

This is where I could use some help. It would be ideal for users to use words that they prefer o use. This aspect would also be absolutely necessary for people whose native language is not English.

### Choose alphabetical word count output

In my opinion 15-20 words per letter of the alphabet and 100+ is too many. I don't know what the optimum number is, and that may change for each user. It would be nice for the user to view the output of their file upload, and then increase or decrease the amount of words by choosing a character count output. For example, I chose not to include and words with 3 or less characters with a ffew exceptions. 

### Keyboard layouts by language

Once I have the file upload issue solved, I would like to involve developers from other countries who could contribute to building a keyboard for people from their country. I would then have to creeate a select list of possible keyboard layouts to choose from. I suppose I would also need a translator for the Notes section. 
