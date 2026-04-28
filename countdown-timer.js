class CountdownTimer {
  constructor(displayEl) {
    this.displayEl = displayEl;
    this.interval = null;
    this.timeLeft = 0;
  }

  start(duration, onFinish) {
    this.stop();

    this.timeLeft = duration;
    this.render();

    this.interval = setInterval(() => {
      this.timeLeft--;
      this.render();

      if (this.timeLeft <= 0) {
        this.stop();
        onFinish?.();
      }
    }, 1000);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  render() {
    this.displayEl.textContent = this.timeLeft;
  }
}
