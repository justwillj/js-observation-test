/**
 * Starts the game by creating a grid of shuffled numbers from 1 to 25. Subsequent clicks resets the game and shuffle numbers.
 * Adds event listener.
 * @param {event} event Mouse Click
 */

let called = false;

const startGame = (event) => {
  let btnDiv = document.querySelector("#buttons");

  if (!called) {      //First click begins game.
    for (let i = 0; i < 25; i++) {
      let btn = document.createElement("button");
      btn.innerText = generateNumber(25);
      btn.setAttribute("class", "tile");
      btn.setAttribute("id", btn.innerText);
      btnDiv.appendChild(btn);
      called = true;
    }
  } else if (called === true) {    //Subsequent clicks resets the game.
    numberArray = [];
    currentAnswer = 1;
    for (let i = 0; i < 25; i++) {
      let btnValue = btnDiv.getElementsByTagName("button")[i];
      btnValue.innerText = generateNumber(25);
      btnValue.setAttribute("id", btnValue.innerText);
    }
  }
};
document.querySelector("#start").addEventListener("click", startGame);

/**
 * Checks value of clicked button against current answer. Adds event listener.
 * @param {event} event Mouse Click
 */

let currentAnswer = 1;
const checkOrder = (event) => {
  let btn = event.target.getAttribute("id");

  if (btn == currentAnswer && btn <= 24) {    //Button background color changes green if button clicked matches current answer and button value is <= 24.
    document.getElementById(btn).setAttribute("id", "correct");
    currentAnswer += 1;
  } else if (currentAnswer == 25) {     //Determines when the player wins.
    document.getElementById(btn).setAttribute("id", "correct");
    document.getElementById("win").innerHTML = "YOU WIN!";
  }
};
document.querySelector("#buttons").addEventListener("click", checkOrder);

/**
 * Produces integers from 1 to 25 in random order.
 * @param {maxNumber} number - Maximum number is 25.
 * @returns {number} Returns integers in random order.
 */

let numberArray = [];
function generateNumber(maxNumber) {
  let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
  if (!numberArray.includes(randomNumber)) {
    numberArray.push(randomNumber);
    return randomNumber;
  } else {
    if (numberArray.length < maxNumber) {
      return generateNumber(maxNumber);
    }
  }
}
