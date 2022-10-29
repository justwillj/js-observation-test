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
    for (let i = 0; i < 25; i++) {
      let btnValue = btnDiv.getElementsByTagName("button")[i];
      btnValue.innerText = generateNumber(25);
    }
  }
};
document.querySelector("#start").addEventListener("click", startGame);

let currentAnswer = 1;
const checkOrder = (event) => {
  let btnDiv = document.querySelector("#buttons");
  let btn = event.target.getAttribute("id");
  console.log(btn);

  if (btn == currentAnswer) {
      console.log("correct");
      document.getElementById(btn).setAttribute("id", "correct");
      currentAnswer += 1;
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
