# WriterAssist (Virtual keyboard)

![Screenshot of the writer app](/writer-assist-github-800.png)
<br>
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Kernix13/WriterAssist?style=flat-square)
![GitHub contributors](https://img.shields.io/github/contributors/Kernix13/WriterAssist?style=flat-square)
![GitHub all releases](https://img.shields.io/github/downloads/Kernix13/WriterAssist/total?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/Kernix13/WriterAssist?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/Kernix13/WriterAssist?style=flat-square)
![GitHub](https://img.shields.io/github/license/Kernix13/WriterAssist?style=flat-square)

<img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/Kernix13/WriterAssist?style=flat-square">
<img alt="GitHub closed pull requests" src="https://img.shields.io/github/issues-pr-closed/Kernix13/WriterAssist?style=flat-square">

## Important Notes

REFACTOR START: 8-16-2022

As of August 16th 2022, I will be refactoring this project. This note is to show the date when I started the refactoring and to provide a link to the [commit](https://github.com/Kernix13/WriterAssist/commit/fcf1a8b393c6f33a70fe868c99ad4491fe987a43) before the refactoring. This is for employers so that they can review the code before and after that commit.

I will be focusing on **Functional Programming** first, followed by **Object Oriented Programming** where applicable.

## Table of contents

1. [Overview](#overview)
2. [App Description](#app-description)
3. [General Notes](#general-notes)
4. [Adding your own words](#adding-your-own-words)
5. [Credits](#credits)

## Overview

Check out the [Live Demo](https://kernixwebdesign.com/writer-assist.html) on my website or view my [Portfolio page](https://kernixwebdesign.com/resume-portfolio.html) for links to my other projects.

This single-page app is for anyone with reduced fine motor controls, assuming they have better control of positioning a mouse pointer than clicking individual keys on a keyboard. Diseases and conditions that often result in a loss of fine motor skills include infection, head trauma, multiple sclerosis, stroke, cerebral palsy, Parkinson's, brain tumors, neuropathy, and spinal injuries.

Ideally, a friend or family can create a file of text to populate the Writing Assistant page for someone who could benefit from the app. This file should contain the most used words and phrases for someone who has reduced motor control. This way they will be able to communicate with loved ones much easier, especially if they also have trouble speaking.

If you would like to load your own words and phrases then you have to add your words to two text files in the main folder. See each respective section below for details.

### App description

There are 4 main sections

1. **Proper Nouns section**: A list of common phrases, days of the week, and months of the year.
2. **Alphabetical list of common words**: hovering over the different letters of the alphabet displays a list of approximately 40-100 common words for each letter.
3. **The main text area**: Clicking on any of the buttons for the words, phrases, and/or keyboard characters will appear in the textarea box. The user also has buttons to copy the text area and also to clear the field when done.
4. **Virtual keyboard**: Since it would be impractical to include all possible words and phrases, users can use the keyboard to enter their own words, numbers, and characters.

The only technologies used are Vanilla JavaScript and the Clipboard API. I also wanted to use the File API and FileReader for users to upload their own words and phrases but it appears that is not possible for files stored on a user's local machine. I have the words hardcoded in the file content.js though there is a way to add your own words and phrases (see the Adding your own words section).

Finally, I would like to have a select option to change the language of the virtual keyboard. As of now, it is in English so people who speak other languages will not be able to use it. Assuming there would not be a change in the keyboard keys on each row, then the change would only require the changing of the characters. But then someone would have to manually change the words and phrases in content.js. I would need help with the different language keyboards. Please contact me if you are interested by visiting my website [contact page](https://kernixwebdesign.com/contact/).

### General Notes

It would be nice to put each user's name in the logo position, e.g. **_Jim's Writer_**. Each user is going to need a developer or someone familiar with HTML & CSS to make edits such as that. That can be done in the div tag with the class of "logo".

The width of the page is set at 85% to give the user a large area to navigate. Change it as you see fit.

I have the buttons with a class of "numpad" in the section containing the navigation keys and number pad keys set to a flex-direction of column to sit alongside the main keyboard. That change tales place at 1058px in the only media query in the CSS file. Hopefully, no one has a monitor smaller than that. If they do then the numpad / nav section will go below the keyboard.

Another aspect to change is the margin and padding for all buttons. Consider changing those values if you are designing for a user who needs more margin and padding for a bigger target area.

**Note**: I set the tabindex to -1 for EVERYTHING except the header and footer links. This is a mouse-only tool so using a keyboard to tab doesn't make sense. Also, it would take too long to TAB through all the proper nouns, alphabetical words, and keyboard keys.

---

## Adding your own words

I wanted the user to upload thie words and phrases from a different page. I used Node.js to pull in the Require module for export/import but there is a problem with that. My aunt, and other users, will be using a file that has a C:\\... address and import/export require either a server or an HTTPS address.

Hopefully, a website that assists people with disabilities can host the app with users logging into their accounts to upload their preferred words and phrases. I contacted 39 organizations so far and none of them were interested.

All the default proper nouns, phrases and words are in content.js.

### Adding alphabetical words

Follow these steps to add youw own list of words for each alphabet letter:

1. Make sure your words are all lowercase and sorted alphabetically.
2. You can separate each word with either a space, or a comma followed by a space.
3. Copy all the words into your clipboard. Then go into the root folder and open the file called **text-alpha.txt**. Use notepad on Windows to open the file or TextEdit if on macOS.
4. That file will be completely empty. Paste in your words and save the file to the same location.
5. You should now see your list of words. If you do not then hit the Refresh button, or close the writer-assist.html file and relaunch for the changes to show.
6. If you prefer the original default list then delete everything you added to text-alpha.txt. Save and close the file.
7. You can also do a combination. If you like most of my words, you can use the default list as a starting point. Open **text-default.txt** to get a copy of the default words. Copy the default list into text-alpha.txt. Add additional words and remove those you don't want. Then save text-alpha.txt for the changes to take to show. You may have to refresh the page.

### Adding proper nouns and phrases

Follow these steps to add youw own list of phrases:

1. Arrange your words in the order you would like them to appear.
2. You MUST separate each word with a comma followed by a space. If you have a phrase that ends with a comma, then you need two commas (e.g. "Sincerely,," will output as "Sincerely,").
3. Copy all your phrases into your clipboard. Then go into the root folder and open the file called text-proper.txt. Use notepad on Windows to open the file or TextEdit if on macOS.
4. That file will be completely empty. Paste in your phrases and save the file to the same location.
5. You should now see your list of phrases. If you do not then hit the Refresh button, or close the writer-assist.html file and relaunch for the changes to show.
6. If you prefer the original default list then delete everything you added to text-proper.txt. Save and close the file.
7. You can also do a combination. If you like most of my phrases, you can use the default list as a starting point. Open text-default.txt to get a copy of the default phrases. Copy the default list into text-proper.txt. Add additional phrases and remove those you don't want. Then save text-proper.txt for the changes to take to show. You may have to refresh the page.

#### Credits

I got answers to questions I had while building the project by posting in the [freeCodeCamp forum](https://forum.freecodecamp.org/). So I would like to thank everyone who helped me and for the resources avaiable on the freeCodeCamp website!

## License

Copyright © 2021 [Jim Kernicky](https://github.com/Kernix13). <br />
This project is [MIT](https://github.com/Kernix13/WriterAssist/blob/master/LICENSE.txt) licensed.
