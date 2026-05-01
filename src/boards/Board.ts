export class Board {
  protected createBoardEl(): HTMLDivElement {
    const el: HTMLDivElement = document.createElement("div");
    el.className = "board";
    return el;
  }
}
