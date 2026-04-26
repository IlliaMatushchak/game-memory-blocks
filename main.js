let size = { rows: 3, cols: 3 };
let appearanceDuration = 1;
let answerDuration = 4;
let boardContainerEl = document.querySelector("#board-container");
let btnStart = document.querySelector("#btn-start");
const scoreEl = document.querySelector("#score");

btnStart.addEventListener("click", startGame);
function startGame() {
  boardContainerEl.innerHTML = "";
  scoreEl.textContent = "0";
  let gameManager = new GameManager(boardContainerEl, scoreEl, {
    size,
    appearanceDuration,
    answerDuration,
  });
  gameManager.startGame();
}
