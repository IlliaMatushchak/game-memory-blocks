import { DOM, show, hide } from "./ui/dom";
import { setupFullscreen } from "./ui/fullscreen";
import { GameManager } from "./game/GameManager";
import { Size } from "./types/index";

let size: Size = {
  rows: 3,
  cols: 3,
};
let appearanceDuration = 1;
let answerDuration = 5;

DOM.rowsInput.value = String(size.rows);
DOM.colsInput.value = String(size.cols);
DOM.appearanceInput.value = String(appearanceDuration);
DOM.answerInput.value = String(answerDuration);

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

let game: GameManager | null = null;

DOM.btnStart.addEventListener("click", (): void => {
  DOM.score.textContent = "0";

  if (game !== null) {
    game.stop();
  }

  game = new GameManager(DOM.boardContainer, DOM.score, DOM.time, {
    size,
    appearanceDuration,
    answerDuration,
  });

  game.start();
});
