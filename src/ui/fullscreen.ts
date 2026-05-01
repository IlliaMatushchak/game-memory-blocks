export function setupFullscreen(button: HTMLButtonElement): void {
  button.addEventListener("click", async (): Promise<void> => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        button.style.backgroundImage = 'url("./images/smallscreen.png")';
      } else {
        await document.exitFullscreen();
        button.style.backgroundImage = 'url("./images/fullscreen.png")';
      }
    } catch (err) {
      alert(`Error: ${(err as Error).message}`);
    }
  });
}
