let called = false;

const startGame = (event) => {
  let btnDiv = document.querySelector("#buttons");

  if (!called) {
    for (let i = 0; i < 25; i++) {
      let btn = document.createElement("button");
      btn.innerText = generateNumber(25);
      btn.setAttribute("class", "tile");
      btn.setAttribute("id", btn.innerText);
      btnDiv.appendChild(btn);
      called = true;
    }
  } else if (called === true) {
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

let currentAnswer = 1;
const checkOrder = (event) => {
  let btnDiv = document.querySelector("#buttons");
  let btn = event.target.getAttribute("id");
  console.log(currentAnswer);

  if (btn == currentAnswer && btn <= 24) {
    console.log("correct");
    document.getElementById(btn).setAttribute("id", "correct");
    currentAnswer += 1;
  } else if (currentAnswer == 25) {
    console.log("YOU WIN");
    document.getElementById(btn).setAttribute("id", "correct");
    document.getElementById("win").innerHTML = "YOU WIN!";
  }
};
document.querySelector("#buttons").addEventListener("click", checkOrder);

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
