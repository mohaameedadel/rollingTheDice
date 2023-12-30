// wrong soll ===========================================================================
// let player = document.querySelectorAll(".player")
// let activePlayer = document.querySelectorAll(".player--active")
// let currentPlayer = document.querySelectorAll(".current-score")
// let scorePlayer = document.querySelectorAll(".score")

// let imgDice = document.querySelector(".dice");

// let newGame = document.querySelector(".btn--new");
// let newRoll = document.querySelector(".btn--roll");
// let hold = document.querySelector(".btn--hold");

// let imgArray = [
//   "dice-1.png",
//   "dice-2.png",
//   "dice-3.png",
//   "dice-4.png",
//   "dice-5.png",
//   "dice-6.png",
// ];

// let result = 0;
// function displayImage() {
//   //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
//   let num = Math.floor(Math.random() * 6);
//   //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
//   imgDice.src = imgArray[num];
//   let r = ++num;
//   result += r;
//   if (r == 1) {
//     result = 0;
//   }
// }

// for(let i = 0;i<player.length;i++){

// hold.addEventListener("click", function () {
//   player[i].classList.toggle("player--active");
//   scorePlayer[i].textContent = currentPlayer[i].textContent;
//   currentPlayer[i].textContent = 0;
// });

// newGame.addEventListener("click", function () {
//   player[0].classList.add("player--active");
//   player[1].classList.remove("player--active");
//   scorePlayer[i].textContent = "0";
//   currentPlayer[i].textContent = "0";
// });

// newRoll.addEventListener("click", function () {
//   displayImage();
//   currentPlayer[i].textContent = result;
// });

// }

// let imgArray = [
//   "dice-1.png",
//   "dice-2.png",
//   "dice-3.png",
//   "dice-4.png",
//   "dice-5.png",
//   "dice-6.png",
// ];
// wrong soll ===========================================================================
// let result = 0;
// function displayImage() {
//   let num = Math.trunc(Math.random() * 6);
//   imgDice.src = imgArray[num];
//   let r = ++num;
//   result += r;
//   if (r == 1) {
//     player1.classList.toggle("player--active");
//     player2.classList.toggle("player--active");
//     scorePlayer1.textContent = currentPlayer1.textContent;
//     result = 0;
//     currentPlayer1.textContent = result;
//   }
// }

// newRoll.addEventListener("click", function () {
//   imgDice.classList.remove("hidden");
//   displayImage();
//   currentPlayer1.textContent = result;
// });

// newGame.addEventListener("click", function () {
//   imgDice.classList.add("hidden");
//   player1.classList.add("player--active");
//   player2.classList.remove("player--active");
//   currentPlayer1.textContent = "0";
//   currentPlayer2.textContent = "0";
//   scorePlayer1.textContent = "0";
//   scorePlayer2.textContent = "0";
// });

// hold.addEventListener("click", function () {
//   player1.classList.toggle("player--active");
//   player2.classList.toggle("player--active");
//   scorePlayer1.textContent = currentPlayer1.textContent;
//   result = 0;
//   currentPlayer1.textContent = result;
// });
// ========================================= right solution ==========================================================
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");

let currentPlayer1 = document.querySelector("#current--0");
let currentPlayer2 = document.querySelector("#current--1");

let scorePlayer1 = document.querySelector("#score--0");
let scorePlayer2 = document.querySelector("#score--1");
let imgDice = document.querySelector(".dice");

let newRoll = document.querySelector(".btn--roll");
let newGame = document.querySelector(".btn--new");
let hold = document.querySelector(".btn--hold");

scorePlayer1.textContent = "0";
scorePlayer2.textContent = "0";
imgDice.classList.add("hidden");

let score = [0, 0];
let result = 0;
let activePlayer = 0;

newRoll.addEventListener("click", function () {
  imgDice.classList.remove("hidden");
  let dice = Math.trunc(Math.random() * 6) + 1;
  imgDice.src = `dice-${dice}.png`;
  if (dice != 1) {
    result += dice;
    document.getElementById(`current--${activePlayer}`).textContent = result;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    if (activePlayer === 0) {
      score[1] += 0;
      document.getElementById(`score--${1}`).textContent = score[1];
      player1.classList.add("player--active");
      player2.classList.remove("player--active");
      currentPlayer2.textContent = 0;
    } else {
      score[0] += 0;
      document.getElementById(`score--${0}`).textContent = score[0];
      player1.classList.remove("player--active");
      player2.classList.add("player--active");
      currentPlayer1.textContent = 0;
    }
    result = 0;
  }
});

hold.addEventListener("click", function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log(activePlayer);
  if (activePlayer === 0) {
    score[1] += result;
    document.getElementById(`score--${1}`).textContent = score[1];
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
    if (document.getElementById(`score--${1}`).textContent >= 100) {
      player2.classList.add("player--winner");
      newRoll.classList.add("hidden");
      hold.classList.add("hidden");
      player1.classList.remove("player--active");
      imgDice.classList.add("hidden");
    }
    currentPlayer2.textContent = 0;
  } else {
    score[0] += result;
    document.getElementById(`score--${0}`).textContent = score[0];
    player1.classList.remove("player--active");
    player2.classList.add("player--active");
    if (document.getElementById(`score--${0}`).textContent >= 100) {
      player1.classList.add("player--winner");
      newRoll.classList.add("hidden");
      hold.classList.add("hidden");
      player2.classList.remove("player--active");
      imgDice.classList.add("hidden");
    }
    currentPlayer1.textContent = 0;
  }
  result = 0;
});

newGame.addEventListener("click", function () {
  score = [0, 0];
  result = 0;
  activePlayer = 0;
  imgDice.classList.add("hidden");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
  scorePlayer1.textContent = "0";
  scorePlayer2.textContent = "0";
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  newRoll.classList.remove("hidden");
  hold.classList.remove("hidden");
});
