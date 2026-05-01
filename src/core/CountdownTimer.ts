export class CountdownTimer {
  private displayEl: HTMLSpanElement;
  private interval: number | null = null;
  private timeLeft: number = 0;

  constructor(displayEl: HTMLSpanElement) {
    this.displayEl = displayEl;
  }

  start(duration: number, onFinish?: () => void): void {
    this.stop();

    this.timeLeft = duration;
    this.render();

    this.interval = window.setInterval(() => {
      this.timeLeft--;
      this.render();

      if (this.timeLeft <= 0) {
        this.stop();
        onFinish?.();
      }
    }, 1000);
  }

  stop(): void {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  private render(): void {
    this.displayEl.textContent = String(this.timeLeft);
  }
}
