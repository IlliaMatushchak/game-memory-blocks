import { DOM, show, hide } from "./ui/dom.js";
import { setupFullscreen } from "./ui/fullscreen.js";
import { GameManager } from "./game/GameManager.js";
import { Size } from "./types/index.js";

let size: Size = {
  rows: Number(DOM.rowsInput.value),
  cols: Number(DOM.colsInput.value),
};
let appearanceDuration: number = Number(DOM.appearanceInput.value);
let answerDuration: number = Number(DOM.answerInput.value);

setupFullscreen(DOM.btnFullscreen);

DOM.btnShowSettings.addEventListener("click", (): void => {
  show(DOM.settings);
});

DOM.btnCloseSettings.addEventListener("click", (): void => {
  hide(DOM.settings);
});

DOM.formSettings.addEventListener("submit", (e: Event): void => {
  e.preventDefault();
  size.rows = Number(DOM.rowsInput.value);
  size.cols = Number(DOM.colsInput.value);
  appearanceDuration = Number(DOM.appearanceInput.value);
  answerDuration = Number(DOM.answerInput.value);
});

DOM.btnStart.addEventListener("click", (): void => {
  DOM.score.textContent = "0";
  const game: GameManager = new GameManager(
    DOM.boardContainer,
    DOM.score,
    DOM.time,
    {
      size,
      appearanceDuration,
      answerDuration,
    },
  );

  game.startGame();
});
