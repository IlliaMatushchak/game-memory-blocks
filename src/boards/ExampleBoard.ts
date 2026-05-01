import { Board } from "./Board.js";
import { ExampleBlock } from "../blocks/ExampleBlock.js";

export class ExampleBoard extends Board {
  public exampleBlocks: ExampleBlock[][] = [];
  public exampleBoardEl: HTMLDivElement;

  constructor() {
    super();
    this.exampleBoardEl = this.createBoardEl();
  }
}
