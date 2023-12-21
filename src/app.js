/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomCard() {
  let suits = ["&#9824;", "&#9827;", "&#9830;", "&#9829;"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const getRandomElement = Array =>
    Array[Math.floor(Math.random() * Array.length)];

  let randomSuits = getRandomElement(suits);
  let randomNumbers = getRandomElement(numbers);

  const cornerTElement = document.querySelector("#corner-top");
  const cornerBElement = document.querySelector("#corner-bot");
  const numberElement = document.querySelector("#number");

  cornerTElement.innerHTML = randomSuits;
  cornerBElement.innerHTML = randomSuits;
  numberElement.innerHTML = randomNumbers;

  let cambiaColor =
    randomSuits == suits[2] || randomSuits == suits[3]
      ? "text-danger"
      : "text-dark";
  cornerBElement.className = cambiaColor;
  cornerTElement.className = cambiaColor;
  numberElement.className = cambiaColor;
}

window.onload = function() {
  randomCard();
};
// En codespaces funciona y en vscode no
let btn = document.querySelector("#btn");
btn.addEventListener("click", () => randomCard());

// solución para vscode
/*document.addEventListener("DOMContentLoaded", function() {
  let btn = document.querySelector("#btn");
  btn.addEventListener("click", randomCard);
});*/
