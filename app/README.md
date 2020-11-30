# Note Taker App

The following app uses express to maintain a json database through get, patch, post, and delete. This results in the user being able to create, edit, update, and delete notes via the interface.

## Main Interface

![overview](https://raw.githubusercontent.com/Valborg1/11-note-taker/master/app/assets/note%20overview.png)

When the app is loaded, the main interface loads any existing notes. Here you have the ability to create a new note by clicking the "New Note" button.

---

## Adding a New Note

![new-note](https://raw.githubusercontent.com/Valborg1/11-note-taker/master/app/assets/note%20new%20note.png)

When a new note is created, the user has the ability to give the note a title and then enter any text. Once the note information is added, the user can click "Save Note" to add the note to the main interface. In the backend, opting to save a note pushes an ID, a timestamp, a title, and the text to a db.json file which reads the new information to dynamically populate the saved notes.

---

## Hovering on an Exisitng Note

![hover](https://raw.githubusercontent.com/Valborg1/11-note-taker/master/app/assets/note%20hover.png)

The user is able to hover over any existing notes to either click the note and access the text and other information, or click the red "x" that appears in order to delete the note.

---

## Viewing a Saved Note

![review](https://raw.githubusercontent.com/Valborg1/11-note-taker/master/app/assets/note%20review.png)

If the user chooses to review an existing note, a modal open that displays the existing title and text from the note. Here, the user can choose to edit the note by clicking "Edit Note".

---

## Editing a Saved Note

![edit](https://raw.githubusercontent.com/Valborg1/11-note-taker/master/app/assets/note%20edit.png)

Once a user selects the "Edit Note" option, a new modal opens with the note title and text, but now in a format that can be edited by the user. After the user makes changes to the existing note, they can click the "Save Note" button to update the db.json file with the new information which will then be read on the main interface as a saved note.

---
Heroku Link:


Github Repository:
https://github.com/Valborg1/11-note-taker
