/* eslint-disable */
import "bootstrap";
import "./style.css";

function cardGenerator() {
  let suits = ["♦", "♥", "♠", "♣"];
  let ranks = [
    "A",
    "1",
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
    "k"
  ];

  let suitTop = document.querySelector("#suit-top");
  let suitBottom = document.querySelector("#suit-bottom");
  let rank = document.querySelector("#rank");
  let body = document.querySelector("body");

  rank.innerHTML = ranks[Math.floor(Math.random() * 13)];

  let suit = suits[Math.floor(Math.random() * 4)];
  suitTop.innerHTML = suit;
  suitBottom.innerHTML = suit;

  if (suit === "♦" || suit === "♥") {
    body.className = "text-danger";
  } else {
    body.className = "text-dark";
  }
}

window.onload = function() {
  //write your code here
  cardGenerator();

  let button = document.querySelector("button");
  button.addEventListener("click", cardGenerator);

  setInterval(cardGenerator, 10000);
};
