/**
 * Starts the game by creating a grid of shuffled numbers from 1 to 25. Subsequent clicks resets the game and shuffle numbers.
 * Adds event listener.
 * @param {event} event Mouse Click
 */

const startGame = (event) => {
  //document.getElementById("win").style.visibility = "hidden";
  let btnDiv = document.querySelector("#buttons");
  let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  //First click begins game.
  document.getElementById("start").classList.remove("start");
  document.getElementById("start").classList.add("hidden");
  document.getElementById("refresh").classList.add("start");
  document.getElementById("refresh").classList.remove("hidden");

  for (let i = 0; i < 25; i++) {
    let btn = document.createElement("button");
    btn.innerText = shuffleButtons(numArray);
    btn.setAttribute("class", "tile");
    btn.setAttribute("id", btn.innerText);
    btnDiv.appendChild(btn);
  }
  document.querySelector("#refresh").addEventListener("click", refresh);
};
const refresh = (event) => {
  currentAnswer = 1;
  let numArray2 = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  win = document.querySelector("p");
  win.classList.add("hidden");
  let btnDiv = document.querySelector("#buttons");
  for (let i = 0; i < 25; i++) {
    let btnValue = btnDiv.getElementsByTagName("button")[i];
    btnValue.innerText = shuffleButtons(numArray2);
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
 * Shuffles an array of integers from 1 to 25.
 * @param {number[]} array - An array of numbers.
 * @returns {number} Returns integers in random order.
 */
 

 //Fisher-Yates shuffle
 const shuffleButtons = (array) => {
     let currentIndex = array.length, randomNumber;
     
     while(currentIndex != 0){
         randomNumber = Math.floor(Math.random() * currentIndex);
         currentIndex--;
 
         [array[currentIndex], array[randomNumber]] = [array[randomNumber], array[currentIndex]];
     }
     //Return integers one at a time.
     for(let i = 0; i < array.length; i++){
        return array.pop();
     }
 }
 

// addEventListeners for our 2 functions for the game
document.querySelector("#start").addEventListener("click", startGame);
document.querySelector("#start").addEventListener("click", answer);
document.querySelector("#refresh").addEventListener("click", answer);
