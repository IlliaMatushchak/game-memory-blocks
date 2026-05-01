import { InteractiveBlock } from "../blocks/InteractiveBlock.js";

export interface Size {
  rows: number;
  cols: number;
}

export interface DifficultySettings {
  size: Size;
  appearanceDuration: number;
  answerDuration: number;
}

export interface Coords {
  x: number;
  y: number;
}

export interface BlockElement extends HTMLDivElement {
  blockInstance?: InteractiveBlock;
}
