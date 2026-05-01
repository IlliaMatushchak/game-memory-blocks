export function setupFullscreen(button: HTMLButtonElement): void {
  button.addEventListener("click", async (): Promise<void> => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }

      button.classList.toggle("is-fullscreen", !!document.fullscreenElement);
    } catch (err) {
      alert(`Error: ${(err as Error).message}`);
    }
  });
}
