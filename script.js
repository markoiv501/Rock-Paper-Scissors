"use strict";

const scorePlayerEl = document.querySelector(".score--player");
const scoreCompEl = document.querySelector(".score--computer");
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const btnPlayAgain = document.querySelector(".btn--play-again");
const handUser = document.querySelector(".user--hand");
const handComp = document.querySelector(".computer--hand");
const won = document.querySelector(".won");
const lost = document.querySelector(".lost");
const backImgFinish = document.querySelector(".backimage");

let scorePlayer = 0;
let scoreComp = 0;
scorePlayerEl.textContent = scorePlayer;
scoreCompEl.textContent = scoreComp;
let playing = true;

btnRock.addEventListener("click", function () {
  if (playing) {
    const roll = Math.trunc(Math.random() * 3) + 1;
    handUser.classList.remove("hidden");
    handComp.classList.remove("hidden");

    handUser.src = `photo/user-1.png`;

    if (roll === 1) {
      handComp.src = `photo/comp-1.png`;
    } else if (roll === 2) {
      handComp.src = `photo/comp-2.png`;
      scoreComp += 1;
      scoreCompEl.textContent = scoreComp;
    } else {
      handComp.src = `photo/comp-3.png`;
      scorePlayer += 1;
      scorePlayerEl.textContent = scorePlayer;
    }
    if (scorePlayer >= 5) {
      playing = false;
      won.classList.remove("hidden");
      backImgFinish.classList.add("backimage-finish");
    } else if (scoreComp >= 5) {
      playing = false;
      lost.classList.remove("hidden");
    }
  }
});

btnPaper.addEventListener("click", function () {
  if (playing) {
    const roll = Math.trunc(Math.random() * 3) + 1;
    handUser.classList.remove("hidden");
    handComp.classList.remove("hidden");

    handUser.src = `photo/user-2.png`;

    if (roll === 1) {
      handComp.src = `photo/comp-1.png`;
      scorePlayer += 1;
      scorePlayerEl.textContent = scorePlayer;
    } else if (roll === 2) {
      handComp.src = `photo/comp-2.png`;
    } else {
      handComp.src = `photo/comp-3.png`;
      scoreComp += 1;
      scoreCompEl.textContent = scoreComp;
    }
    if (scorePlayer >= 5) {
      playing = false;
      won.classList.remove("hidden");
      backImgFinish.classList.add("backimage-finish");
    } else if (scoreComp >= 5) {
      playing = false;
      lost.classList.remove("hidden");
    }
  }
});

btnScissors.addEventListener("click", function () {
  if (playing) {
    const roll = Math.trunc(Math.random() * 3) + 1;
    handUser.classList.remove("hidden");
    handComp.classList.remove("hidden");
    // handUser.classList.add("show"); // Dodaj klasu za tranziciju
    // handComp.classList.add("show"); // Dodaj klasu za tranziciju
    handUser.src = `photo/user-3.png`;

    if (roll === 1) {
      handComp.src = `photo/comp-1.png`;
      scoreComp += 1;
      scoreCompEl.textContent = scoreComp;
    } else if (roll === 2) {
      handComp.src = `photo/comp-2.png`;
      scorePlayer += 1;
      scorePlayerEl.textContent = scorePlayer;
    } else {
      handComp.src = `photo/comp-3.png`;
    }
    if (scorePlayer >= 5) {
      playing = false;
      won.classList.remove("hidden");
      backImgFinish.classList.add("backimage-finish");
    } else if (scoreComp >= 5) {
      playing = false;
      lost.classList.remove("hidden");
    }
  }
});

btnPlayAgain.addEventListener("click", function () {
  playing = true;
  scorePlayer = 0;
  scoreComp = 0;
  scorePlayerEl.textContent = scorePlayer;
  scoreCompEl.textContent = scoreComp;
  handUser.classList.add("hidden");
  handComp.classList.add("hidden");
  won.classList.add("hidden");
  lost.classList.add("hidden");
  backImgFinish.classList.remove("backimage-finish");
});
