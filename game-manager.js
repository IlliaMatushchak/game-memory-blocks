class GameManager {
  #difficultySettings;
  #score = 0;
  #containerEl;

  constructor(containerEl, difficultySettings) {
    this.#containerEl = containerEl;
    this.#difficultySettings = difficultySettings;
  }

  startGame() {
    let boardManager = new BoardManager(this.#difficultySettings.size);
    this.#containerEl.innerHTML = "";
    this.#containerEl.append(boardManager.exampleBoardEl);

    setTimeout(() => {
      this.#containerEl.innerHTML = "";
      this.#containerEl.append(boardManager.interactiveBoardEl);
    }, this.#difficultySettings.appearanceDuration * 1000);

    let checkAnswer = () => {
      let isCorrect = boardManager.compare();

      setTimeout(() => {
        if (isCorrect) {
          this.#score++;
          this.startGame();
        } else {
          this.showResults();
        }
      }, 1000);
    };

    setTimeout(checkAnswer, this.#difficultySettings.answerDuration * 1000);
  }

  showResults() {
    this.#containerEl.innerHTML = `<h2>Score: ${this.#score}</h2>`;
  }
}
