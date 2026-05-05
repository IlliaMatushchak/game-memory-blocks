import { BlockElement } from "../types/index";

export class Block {
  public isSelected: boolean;
  public element: BlockElement;

  constructor(isSelected: boolean = false) {
    this.isSelected = isSelected;
    this.element = document.createElement("div");
    this.element.className = `block ${isSelected ? "selected" : ""}`;
  }
}
