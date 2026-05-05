import { Board } from "./Board";
import { ExampleBlock } from "../blocks/ExampleBlock";

export class ExampleBoard extends Board {
  public exampleBlocks: ExampleBlock[][] = [];
  public exampleBoardEl: HTMLDivElement;

  constructor() {
    super();
    this.exampleBoardEl = this.createBoardEl();
  }
}
