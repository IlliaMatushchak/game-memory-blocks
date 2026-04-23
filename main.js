let size = { rows: 3, cols: 3 };
let appearanceDuration = 1;
let answerDuration = 4;
let boardContainerEl = document.querySelector("#board-container");
let btnStart = document.querySelector("#btn-start");

btnStart.addEventListener("click", startGame);
function startGame() {
  boardContainerEl.innerHTML = "";
  let gameManager = new GameManager(boardContainerEl, {
    size,
    appearanceDuration,
    answerDuration,
  });
  gameManager.startGame();
}
