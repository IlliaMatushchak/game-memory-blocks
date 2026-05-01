import { Size } from "../types/index.js";
import { ExampleBoard } from "./ExampleBoard.js";
import { InteractiveBoard } from "./InteractiveBoard.js";
import { ExampleBlock } from "../blocks/ExampleBlock.js";
import { InteractiveBlock } from "../blocks/InteractiveBlock.js";

export class BoardManager {
  private size: Size;
  private _exampleBoard!: ExampleBoard;
  private _interactiveBoard!: InteractiveBoard;

  constructor(size: Size) {
    this.size = size;
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

  get exampleBoardEl() {
    return this._exampleBoard.exampleBoardEl;
  }

  get interactiveBoardEl() {
    return this._interactiveBoard.userBoardEl;
  }

  private getRandomBoolean(): boolean {
    return Math.random() > 0.5;
  }

  createNewBoards(): void {
    this._exampleBoard = new ExampleBoard();
    this._interactiveBoard = new InteractiveBoard();

    for (let x = 0; x < this.size.rows; x++) {
      this._exampleBoard.exampleBlocks[x] = [];
      this._interactiveBoard.userBlocks[x] = [];

      for (let y = 0; y < this.size.cols; y++) {
        const exampleBlock = new ExampleBlock(this.getRandomBoolean());
        const interactiveBlock = new InteractiveBlock(false);

        this._exampleBoard.exampleBlocks[x][y] = exampleBlock;
        this._interactiveBoard.userBlocks[x][y] = interactiveBlock;

        this._exampleBoard.exampleBoardEl.append(exampleBlock.element);
        this._interactiveBoard.userBoardEl.append(interactiveBlock.element);
      }
    }
  }

  compare(): boolean {
    let isCorrect = true;

    for (let x = 0; x < this.size.rows; x++) {
      for (let y = 0; y < this.size.cols; y++) {
        const isSimilar =
          this._exampleBoard.exampleBlocks[x][y].isSelected ===
          this._interactiveBoard.userBlocks[x][y].isSelected;

        if (!isSimilar) {
          isCorrect = false;
          this._interactiveBoard.setError({ x, y });
        }
      }
    }

    if (isCorrect) {
      this._interactiveBoard.setSuccess();
    }

    return isCorrect;
  }
}
