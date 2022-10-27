const startGame = (event) => {
  let btnDiv = document.querySelector("#buttons");
  for (let i = 0; i <= 25; i++) {
    let btn = document.createElement("button");
    btn.innerText = randomNumber(1, 25);
    btn.className = 'tile';
    btnDiv.appendChild(btn);
  }
};
document.querySelector("#start").addEventListener("click", startGame);

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};