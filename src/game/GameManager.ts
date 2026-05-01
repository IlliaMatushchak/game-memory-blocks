import { CountdownTimer } from "../core/CountdownTimer.js";
import { DifficultySettings } from "../types/index.js";
import { BoardManager } from "../boards/BoardManager.js";

export class GameManager {
  private settings: DifficultySettings;
  private score: number = 0;
  private containerEl: HTMLDivElement;
  private scoreEl: HTMLSpanElement;
  private timer: CountdownTimer;

  constructor(
    containerEl: HTMLDivElement,
    scoreEl: HTMLSpanElement,
    timeEl: HTMLSpanElement,
    settings: DifficultySettings,
  ) {
    this.containerEl = containerEl;
    this.scoreEl = scoreEl;
    this.settings = settings;
    this.timer = new CountdownTimer(timeEl);
  }

  startGame(): void {
    const boardManager: BoardManager = new BoardManager(this.settings.size);

    this.containerEl.innerHTML = "";
    this.containerEl.append(boardManager.exampleBoardEl);

    const checkAnswer = (): void => {
      const isCorrect: boolean = boardManager.compare();

      setTimeout(() => {
        if (isCorrect) {
          this.updateScore();
          this.startGame();
        } else {
          this.containerEl.append("Click 'Start' to try again!");
        }
      }, 1000);
    };

    this.timer.start(this.settings.appearanceDuration, (): void => {
      this.containerEl.innerHTML = "";
      this.containerEl.append(boardManager.interactiveBoardEl);

      this.timer.start(this.settings.answerDuration, checkAnswer);
    });
  }

  private updateScore(): void {
    this.score++;
    this.scoreEl.textContent = String(this.score);
  }
}
