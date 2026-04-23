class Board {
  createBoardEl() {
    let boardEl = document.createElement("div");
    boardEl.className = "board";
    return boardEl;
  }
}

class ExampleBoard extends Board {
  exampleBlocks = [];
  exampleBoardEl;

  constructor() {
    super();
    this.exampleBoardEl = this.createBoardEl();
  }
}

class InteractiveBoard extends Board {
  userBlocks = [];
  userBoardEl;

  constructor() {
    super();
    this.userBoardEl = this.createBoardEl();
    this.userBoardEl.addEventListener("click", this.#handleBlockClick);
  }

  #handleBlockClick(e) {
    if (e.target.blockInstance) {
      e.target.blockInstance.switch();
    }
  }

  setSuccess() {
    this.userBoardEl.removeEventListener("click", this.#handleBlockClick);
    this.userBoardEl.classList.add("success");
  }

  setError(blockCoords) {
    let { x, y } = blockCoords;
    this.userBoardEl.removeEventListener("click", this.#handleBlockClick);
    this.userBlocks[x][y].showError();
  }
}

class BoardManager {
  #size;
  #exampleBoard;
  #interactiveBoard;

  constructor(size) {
    this.#size = size;
    this.createNewBoards();

    document.documentElement.style.setProperty(
      "--board-size-cols",
      `${size.cols}`,
    );
    document.documentElement.style.setProperty(
      "--board-size-rows",
      `${size.rows}`,
    );
  }

  get interactiveBoardEl() {
    return this.#interactiveBoard.userBoardEl;
  }

  get exampleBoardEl() {
    return this.#exampleBoard.exampleBoardEl;
  }

  #getRandomBoolean() {
    return Math.round(Math.random()) === 1;
  }

  createNewBoards() {
    this.#exampleBoard = new ExampleBoard();
    this.#interactiveBoard = new InteractiveBoard();

    for (let x = 0; x < this.#size.rows; x++) {
      this.#exampleBoard.exampleBlocks[x] = [];
      this.#interactiveBoard.userBlocks[x] = [];
      for (let y = 0; y < this.#size.cols; y++) {
        let exampleBlock = new ExampleBlock(this.#getRandomBoolean());
        let interactiveBlock = new InteractiveBlock(false);
        this.#exampleBoard.exampleBlocks[x][y] = exampleBlock;
        this.#interactiveBoard.userBlocks[x][y] = interactiveBlock;
        this.#exampleBoard.exampleBoardEl.append(exampleBlock.element);
        this.#interactiveBoard.userBoardEl.append(interactiveBlock.element);
      }
    }
  }

  compare() {
    let isCorrect = true;

    for (let x = 0; x < this.#size.rows; x++) {
      for (let y = 0; y < this.#size.cols; y++) {
        let isSimilar =
          this.#exampleBoard.exampleBlocks[x][y].isSelected ===
          this.#interactiveBoard.userBlocks[x][y].isSelected;
        if (!isSimilar) {
          isCorrect = false;
          this.#interactiveBoard.setError({ x, y });
        }
      }
    }

    if (isCorrect) {
      this.#interactiveBoard.setSuccess();
    }

    return isCorrect;
  }
}
