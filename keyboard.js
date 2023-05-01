import Key from "./key.js";

const container = document.createElement("div");
container.id = "conteiner";
container.classList.add("container");
document.body.append(container);

const textArea = document.createElement("textarea");
textArea.id = "text";
textArea.cols = "100";
textArea.rows = "20";
document.body.append(textArea);
container.appendChild(textArea);

const keyboardWrapper = document.createElement("div");
keyboardWrapper.id = "keyboard";
document.body.append(keyboardWrapper);
container.appendChild(keyboardWrapper);

const myKeyboard = document.getElementById("keyboard");
const mytext = document.getElementById("text");

const keyboardLayout = [
  [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
  ],
  [
    "Tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
    "Del",
  ],
  ["CapsLk", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"],
  ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"],
];

class Keyboard {
  constructor(parent, textarea) {
    this.parent = parent;
    this.textarea = textarea;
    this.keys = [];
    document.addEventListener("keydown", this.handleKeyDown.bind(this));

    keyboardLayout.forEach((row) => {
      const rowElem = document.createElement("div");
      rowElem.className = "row";
      row.forEach((key) => {
        const keyObj = new Key(key, this.handleKey.bind(this));
        this.keys.push(keyObj);
        keyObj.render(rowElem);
        if (keyObj.key === "Backspace") {
          keyObj.element.classList.add("backspace");
        } else if (keyObj.key === "Tab") {
          keyObj.element.classList.add("tab");
        } else if (keyObj.key === "Enter") {
          keyObj.element.classList.add("enter");
        } else if (keyObj.key === "CapsLk") {
          keyObj.element.classList.add("capslock");
        } else if (keyObj.key === "") {
          keyObj.element.classList.add("space");
        } else if (keyObj.key === "Shift") {
          keyObj.element.classList.add("shift");
        } else if (keyObj.key === "Alt") {
          keyObj.element.classList.add("alt");
        } else if (keyObj.key === "Ctrl") {
          keyObj.element.classList.add("ctrl");
        } else if (keyObj.key === "Del") {
          keyObj.element.classList.add("del");
        } else if (keyObj.key === "Win") {
          keyObj.element.classList.add("win");
        }
      });

      this.parent.appendChild(rowElem);
    });
  }

  handleKeyDown(event) {
    const key = event.key;
    this.textarea.value += key;
  }

  handleKey(key) {
    this.textarea.value += key;
  }
}

const keyb = new Keyboard(myKeyboard, mytext);
