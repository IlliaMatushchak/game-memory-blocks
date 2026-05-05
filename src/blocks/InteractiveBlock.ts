import { Block } from "./Block";

export class InteractiveBlock extends Block {
  constructor(isSelected: boolean) {
    super(isSelected);
    this.element.blockInstance = this;
  }

  switch(): void {
    this.isSelected = !this.isSelected;
    this.element.classList.toggle("selected");
  }

  showError(): void {
    this.element.classList.add("error");
  }
}
