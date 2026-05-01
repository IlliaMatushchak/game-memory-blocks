import { Board } from "./Board.js";
import { InteractiveBlock } from "../blocks/InteractiveBlock.js";
import { BlockElement, Coords } from "../types/index.js";

export class InteractiveBoard extends Board {
  public userBlocks: InteractiveBlock[][] = [];
  public userBoardEl: HTMLDivElement;

  constructor() {
    super();
    this.userBoardEl = this.createBoardEl();
    this.userBoardEl.addEventListener("click", this.handleClick);
  }

  private handleClick = (e: Event): void => {
    const target = e.target as BlockElement;
    if (target?.blockInstance) {
      target.blockInstance.switch();
    }
  };

  setSuccess(): void {
    this.userBoardEl.removeEventListener("click", this.handleClick);
    this.userBoardEl.classList.add("success");
  }

  setError({ x, y }: Coords): void {
    this.userBoardEl.removeEventListener("click", this.handleClick);
    this.userBlocks[x][y].showError();
  }
}
