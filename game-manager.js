class GameManager {
  #difficultySettings;
  #score = 0;
  #containerEl;
  #scoreEl;

  constructor(containerEl, scoreEl, difficultySettings) {
    this.#containerEl = containerEl;
    this.#scoreEl = scoreEl;
    this.#difficultySettings = difficultySettings;
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

    setTimeout(() => {
      this.#containerEl.innerHTML = "";
      this.#containerEl.append(boardManager.interactiveBoardEl);
      setTimeout(checkAnswer, this.#difficultySettings.answerDuration * 1000);
    }, this.#difficultySettings.appearanceDuration * 1000);
  }

  showResults() {
    this.#scoreEl.textContent = this.#score;
  }
}
