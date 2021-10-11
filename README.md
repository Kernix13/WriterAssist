# WriterAssist (Virtual keyboard)

![Screenshot of the writer app](/writer-assist-github-800.png)

## Table of contents
1. [Overview](#overview)
2. [App Description](#app-description)
3. [General Notes](#general-notes)
4. [Adding your own words](#adding-your-own-words)
5. [Uploading a file versus hardcoding the words](#uploading-a-file-versus-hardcoding-the-words)
6. [Downloading the app](#downloading-the-app-to-desktop-or-laptop)
7. [Credits](#credits)

## Overview 
This single-page app is for people with reduced fine motor controls, assuming they have better control of positioning a mouse pointer than clicking individual keys on a keyboard. Diseases and conditions that often result in a loss of fine motor skills include infection, multiple sclerosis, stroke, cerebral palsy, brain tumors, neuropathy, and spinal injuries.

My motivation was to help my aunt who has cerebral palsy and takes 5-10 seconds to type a single character using her keyboard. Now it should be easier for her to compose emails to friends and family. This is a single-page app that can run on a user's desktop or laptop. 

The idea is to allow users to click on words and phrases to enter them into a text area. They can also use the virtual keyboard to enter words and characters. They can then copy the text area to use in an email program.

## App description
There are 4 main sections
1. Proper Nouns section: A list of common phrases, days of the week, and months of the year.
2. Alphabetical list of common words: hovering over the different letters of the alphabet displays a list of approximately 40-100 common words for that letter.
3. The main text area: All the words, phrases, and character buttons clicked on will appear here. The user also has buttons to copy the text area and also to clear the field when done.
4. Virtual keyboard: Since it would be impractical to include all possible words and phrases, users can use the keyboard to enter their own words, numbers, and characters.

The only technologies used are Vanilla JavaScript and the Clipboard API. I also wanted to use the File API and FileReader for users to upload their own words and phrases but it appears that is not possible for files stored on a user's local machine. I have the words hardcoded in the file content.js. 

I would need the app to be on a server to be able to fetch their word files to populate the DOM. I will be contacting non-profit organizations that may be interested in hosting the app.

Finally, I would like to have a select option to change the language of the virtual keyboard. As of now, it is in English so people who speak other languages will not be able to use it. Assuming there would not be a change in the keyboard keys on each row, then the change would only require the changing of the characters. But then someone would have to manually change the words and phrases in content.js as well unless I can have users upload a file of their words. I would need help with the different language keyboards. Please contact me if you are interested by visiting my website [contact page](https://kernixwebdesign.com/contact/).

## General Notes
It would be nice to put each user's name in the logo position, e.g. ***Jim's Writer***. Each user is going to need a developer or someone familiar with HTML & CSS to make edits such as that. That can be done in the div tag with the class of "logo".

The width of the page is set at 85% to give the user a large area to navigate. Change it as you see fit.

I have the buttons with a class of "numpad" in the section containing the nav and number pad keys set to a flex-direction of column at 1058px in the only media query in the CSS file. Hopefully, no one has a monitor smaller than that. If they do then the numpad / nav section will go below the keyboard.

Another aspect to change is the margin and padding for all buttons. Consider changing those values if you are designing for a user who needs more margin and padding for a bigger target area.

**Note**: I set the tabindex to -1 for EVERYTHING except the header and footer links. This is a mouse-only tool so using a keyboard to tab doesn't make sense. Also, it would take too long to TAB through all the proper nouns, alphabetical words, and keyboard keys.

### Adding your own words
All the proper nouns, phrases and words are in content.js. You will have to change the words and phrases in that file. Ideally, I wanted the user to be able to upload a 3 files:

- 10 to 20,000 words from previous writings, if possible.
- A list of people's names and phrases for the proper nouns sction
Using javascript you could:

- Add the proper nouns and emails to their respective sections
- Filter out all sample words and perform a word count
  - Then you could filter out words below a certain word count
  - Perform an alphabetical sort on the remaining words
  - Output the resulting words into each alphabetical link

I hope to figure out the upload issue and update the app when I do.

### Uploading a file versus hardcoding the words
I used Node.js to pull in the Require module for export/import but there is a problem with that. My aunt will be using a file that has a C:\... address and import/export require either a server or an HTTPS address. Hopefully, a website that assists people with disabilities can host the app with users logging into their accounts to upload their sample text and emails.

If you know of a way to solve the import/export and file upload problems then send me an email from my contact page. Also, contact me if you have any suggestions or edits that would improve the app. I would like anyone with motor control issues to have a high-quality free app to help them communicate.

***
## Downloading the app to desktop or laptop (for USERS)

All you need to do is download the files and open writer-assist.html to start using the app. I have a detailed note and documentation section below the virtual keyboard that will help use the tool.

The app is fine to use as is with the phrases and words I included in the file content.js, although the keyboard and words are for American English. If you would like to download the files and start using the app, then follow these steps:

1. While in the WriterAssist folder/repository, click the Green code button and select Download ZIP

![Download instructions](/dl-code2.PNG)

2. Go to your downloads folder, select the zip file, right-click and choose Extract All...

![Extracting the zip files](/extract.PNG)

3. Click the Extract button on the popup that appears. This will create a folder in your downloads folder with a name like WriterAssist-master

![Extract](/extract2.PNG)

4. Copy or move that folder to a folder such as Documents then delete both the folder and zip file from your downloads folder.

![Copy to folder of choice](/copy-to.PNG)

5. Finally, go into the folder and launch the file named writer-assist.html. You can also delete all of the PNG files since they are just used in this README file.

![Open the main file](/open.PNG)

### Credits
I got answers to questions I had while building the project by posting in the [freeCodeCamp forum](https://forum.freecodecamp.org/). So I would like to thank everyone who helped me and for the resources avaiable on the freeCodeCamp website!
