import {
  alert,
  notice,
  info,
  success,
  error,
  defaultModules,
} from "@pnotify/core/dist/PNotify.js";
import "@pnotify/core/dist/BrightTheme.css";

const keys = ["a", "x", "f", "w", "q", "e", "g", "h", "b", "m"];
let curentKeyIndex = 0;

const keyLabel = document.getElementById("keyToPress");
keyLabel.textContent = keys[curentKeyIndex].toUpperCase();

const gameStatus = document.getElementById("gameStatus");

const newGameBtn = document.getElementById("newGameBtn");

document.addEventListener("keydown", (e) => {
  if (e.key === keys[curentKeyIndex]) {
    console.log("the correct key was pressed");
    curentKeyIndex++;
    keyLabel.textContent = keys[curentKeyIndex].toUpperCase();

    const mySucces = success({
      text: "You've pressed the right key!",
    });
    gameStatus.textContent = "Win";
  } else {
    console.log("the wrong key was pressed");

    const myError = error({
      text: "You've pressed the wrong key!",
    });
    gameStatus.textContent = "Loss";
  }
});

document.addEventListener("keypress", (e) => {
  e.preventDefault();
});

newGameBtn.addEventListener("click", () => {
  curentKeyIndex = 0;
  const myInfo = info({
    text: "A new game has just started",
  });
  keyLabel.textContent = keys[curentKeyIndex].toUpperCase();
});
