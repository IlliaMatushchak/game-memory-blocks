class GameManager {
  #difficultySettings;
  #score = 0;
  #containerEl;
  #scoreEl;
  #timer;

  constructor(containerEl, scoreEl, timeEl, difficultySettings) {
    this.#containerEl = containerEl;
    this.#scoreEl = scoreEl;
    this.#difficultySettings = difficultySettings;
    this.#timer = new CountdownTimer(timeEl);
  }

  startGame() {
    let boardManager = new BoardManager(this.#difficultySettings.size);
    this.#containerEl.innerHTML = "";
    this.#containerEl.append(boardManager.exampleBoardEl);

    let checkAnswer = () => {
      let isCorrect = boardManager.compare();

      setTimeout(() => {
        if (isCorrect) {
          this.#score++;
          this.showResults();
          this.startGame();
        }
      }, 1000);
    };

    this.#timer.start(this.#difficultySettings.appearanceDuration, () => {
      this.#containerEl.innerHTML = "";
      this.#containerEl.append(boardManager.interactiveBoardEl);
      this.#timer.start(this.#difficultySettings.answerDuration, checkAnswer);
    });
  }

  showResults() {
    this.#scoreEl.textContent = this.#score;
  }
}
