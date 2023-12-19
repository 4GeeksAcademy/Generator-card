/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const palos = ["&#9824;", "&#9827;", "&#9830;", "&#9829;"];
  const numeros = [
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

  const randomPalo = getRandomElement(palos);
  const randomNumber = getRandomElement(numeros);

  const carta = document.querySelector("#carta");
  const esquinas = Array.from(carta.querySelectorAll(".esquina"));

  esquinas.map(esquina => {
    esquina.innerHTML = randomPalo;
  });

  const numeroElement = carta.querySelector("#number");
  numeroElement.innerHTML = randomNumber;
};
