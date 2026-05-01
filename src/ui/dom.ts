function getElement<T extends HTMLElement>(selector: string): T {
  const el = document.querySelector(selector);
  if (!el) {
    throw new Error(`Element not found: ${selector}`);
  }
  return el as T;
}

export const DOM = {
  boardContainer: getElement<HTMLDivElement>("#board-container"),
  score: getElement<HTMLSpanElement>("#score"),
  time: getElement<HTMLSpanElement>("#time"),

  btnStart: getElement<HTMLButtonElement>("#btn-start"),
  btnFullscreen: getElement<HTMLButtonElement>("#btn-fullscreen"),

  settings: getElement<HTMLDivElement>(".settings"),
  btnShowSettings: getElement<HTMLButtonElement>("#btn-show-settings"),
  btnCloseSettings: getElement<HTMLButtonElement>("#btn-close-settings"),
  formSettings: getElement<HTMLFormElement>("#form-settings"),

  rowsInput: getElement<HTMLInputElement>("#rows"),
  colsInput: getElement<HTMLInputElement>("#cols"),
  appearanceInput: getElement<HTMLInputElement>("#appearance"),
  answerInput: getElement<HTMLInputElement>("#answer"),
};

export function show(el: HTMLElement): void {
  el.classList.add("show");
}

export function hide(el: HTMLElement): void {
  el.classList.remove("show");
}
