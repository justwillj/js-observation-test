/**
 * Starts the game by creating a grid of shuffled numbers from 1 to 25. Subsequent clicks resets the game and shuffle numbers.
 * Adds event listener.
 * @param {event} event Mouse Click
 */

const startGame = (event) => {
  //document.getElementById("win").style.visibility = "hidden";
  let btnDiv = document.querySelector("#buttons");
  //First click begins game.
  document.getElementById("start").classList.remove("start");
  document.getElementById("start").classList.add("hidden");
  document.getElementById("refresh").classList.add("start");
  document.getElementById("refresh").classList.remove("hidden");

  for (let i = 0; i < 25; i++) {
    let btn = document.createElement("button");
    btn.innerText = generateNumber(25);
    btn.setAttribute("class", "tile");
    btn.setAttribute("id", btn.innerText);
    btnDiv.appendChild(btn);
  }
  document.querySelector("#refresh").addEventListener("click", refresh);
};
const refresh = (event) => {
  numberArray = [];
  win = document.querySelector("p");
  win.classList.add("hidden");
  let btnDiv = document.querySelector("#buttons");
  for (let i = 0; i < 25; i++) {
    let btnValue = btnDiv.getElementsByTagName("button")[i];
    btnValue.innerText = generateNumber(25);
    btnValue.setAttribute("id", btnValue.innerText);
  }
};
/**
 * Checks value of clicked button against current answer. Adds event listener.
 * @param {event} event Mouse Click
 */
const answer = () => {
  let currentAnswer = 1;

  const checkOrder = (event) => {
    let btn = event.target.getAttribute("id");
    if (btn == currentAnswer && btn <= 24) {
      //Button background color changes green if button clicked matches current answer and button value is <= 24.
      document.getElementById(btn).setAttribute("id", "correct");
      currentAnswer += 1;
    } else if (currentAnswer == 25) {
      //Determines when the player wins and displays win message.
      document.getElementById(btn).setAttribute("id", "correct");
      win = document.querySelector("p");
      win.classList.remove("hidden");
      document.getElementById("win").innerHTML = "YOU WIN!";
      currentAnswer = 1;
    }
  };
  document.querySelector("#buttons").addEventListener("click", checkOrder);
};

/**
 * Produces integers from 1 to 25 in random order.
 * @param {maxNumber} number - Maximum number is 25.
 * @returns {number} Returns integers in random order.
 */
let numberArray = [];
const generateNumber = (maxNumber) => {
  let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
  if (!numberArray.includes(randomNumber)) {
    numberArray.push(randomNumber);
    return randomNumber;
  } else {
    if (numberArray.length < maxNumber) {
      return generateNumber(maxNumber);
    }
  }
};

// addEventListeners for our 2 functions for the game
document.querySelector("#start").addEventListener("click", startGame);
document.querySelector("#start").addEventListener("click", answer);
document.querySelector("#refresh").addEventListener("click", answer);
