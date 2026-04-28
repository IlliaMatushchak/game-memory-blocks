const boardContainerEl = document.querySelector("#board-container");
const scoreEl = document.querySelector("#score");
const timeEl = document.querySelector("#time");
const btnStart = document.querySelector("#btn-start");

const settingsEl = document.querySelector(".settings");
const btnShowSettings = document.querySelector("#btn-show-settings");
const btnCloseSettings = document.querySelector("#btn-close-settings");
const formSettings = document.querySelector("#form-settings");

const rowsInput = document.getElementById("rows");
const colsInput = document.getElementById("cols");
const appearanceInput = document.getElementById("appearance");
const answerInput = document.getElementById("answer");

const btnFullscreen = document.querySelector("#btn-fullscreen");

let size = {};
size.rows = Number(rowsInput.value);
size.cols = Number(colsInput.value);
let appearanceDuration = Number(appearanceInput.value);
let answerDuration = Number(answerInput.value);

btnShowSettings.addEventListener("click", () => {
  settingsEl.classList.add("show");
});

btnCloseSettings.addEventListener("click", () => {
  settingsEl.classList.remove("show");
});

formSettings.addEventListener("submit", (e) => {
  e.preventDefault();
  size.rows = Number(rowsInput.value);
  size.cols = Number(colsInput.value);
  appearanceDuration = Number(appearanceInput.value);
  answerDuration = Number(answerInput.value);
});

btnStart.addEventListener("click", startGame);
function startGame() {
  boardContainerEl.innerHTML = "";
  scoreEl.textContent = "0";
  let gameManager = new GameManager(boardContainerEl, scoreEl, timeEl, {
    size,
    appearanceDuration,
    answerDuration,
  });
  gameManager.startGame();
}

btnFullscreen.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      alert(`Error: ${err.message}`);
    });
    btnFullscreen.style.backgroundImage = 'url("./images/smallscreen.png")';
  } else {
    document.exitFullscreen();
    btnFullscreen.style.backgroundImage = 'url("./images/fullscreen.png")';
  }
});
