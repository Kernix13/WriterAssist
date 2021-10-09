# WriterAssist
Virtual keyboard

Overview 
This single-page app is for anyone with reduced fine motor controls, assuming they have better control of positioning a mouse pointer than clicking individual keys on a keyboard. Diseases and conditions that often result in a loss of fine motor skills include infection, multiple sclerosis, stroke, cerebral palsy, brain tumors, neuropathy, and spinal injuries.

My motivation was to help my aunt who has cerebral palsy and takes 5-10 seconds to type a single character using her keyboard. Now it should be easier for her to compose emails to friends and family. This is a single-page app that can run on a user's desktop or laptop. 

The idea is to allow users to click on words and phrases to enter them into a text area. They can also use the virtual keyboard to enter words and characters. They can then copy the text area to use in an email program.

Description
There are 4 main sections
1. Proper Nouns section: A list of common phrases, days of the week, and months of the year.
2. Alphabetical list of common words: hovering over the different letters of the alphabet displays a list of approximately 40-100 common words for that letter.
3. The main text area: All the words, phrases, and character buttons clicked on will appear here. The user also has buttons to copy the text area and also to clear the field when done.
4. Virtual keyboard: Since it would be impractical to include all possible words and phrases, users can use the keyboard to enter their own words, numbers, and characters.

The only technologies used are Vanilla JavaScript and the Clipboard API. I also wanted to use the File API and FileReader for users to upload their own words and phrases but it appears that is not possible for files stored on a user's local machine. I have the words hardcoded in the file content.js. 

I would need the app to be on a server to be able to fetch their word files to populate the DOM. I will be contacting non-profit organizations that may be interested in hosting the app.

Finally, I would like to have a select option to change the language of the virtual keyboard. As of now, it is in English so people who speak other languages will not be able to use it. Assuming there would not be a change in the keyboard keys on each row, then the change would only require the changing of the characters. But then someone would have to manually change the words and phrases in content.js as well unless I can have users upload a file of their words. I would need help with the different language keyboards. Please contact me if you are interested by visiting my website contact page: https://kernixwebdesign.com/contact/

Installation
All you need to do is download the files and open writer-assist.html to start using the app. I have a detailed note and documentation section below the virtual keyboard.