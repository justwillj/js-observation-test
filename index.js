let called = false;
const startGame = (event) => {
  let btnDiv = document.querySelector("#buttons");
  if (!called) {
    for (let i = 0; i < 25; i++) {
      let btn = document.createElement("button");
      btn.innerText = randomNumber(1, 25);
      btn.setAttribute("class", "tile");
      btn.setAttribute("id", btn.innerText);

      btnDiv.appendChild(btn);
      called = true;
    }
  } else if (called === true) {
    for (let i = 0; i <= 25; i++) {
      let btnValue = btnDiv.getElementsByTagName("button")[i];
      btnValue.innerText = randomNumber(1, 25);
    }
  }
};
document.querySelector("#start").addEventListener("click", startGame);

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const checkOrder = (event) => {
  let btnDiv = document.querySelector("#buttons");
  let btn = btnDiv.querySelector("button").innerText;
  let lastBtn = 0;
  console.log(btn);
  if (btn - 1 === lastBtn) {
    console.log("correct");
    lastBtn++;
  } else {
    console.log("wrong");
  }
};
document.querySelector("#buttons").addEventListener("click", checkOrder);
