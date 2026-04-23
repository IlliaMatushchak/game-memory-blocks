class Block {
  isSelected = false;
  element;

  constructor(isSelected = false) {
    this.isSelected = isSelected;
    this.element = document.createElement("div");
    this.element.className = `block ${isSelected ? "selected" : ""}`;
  }
}

class ExampleBlock extends Block {
  constructor(isSelected) {
    super(isSelected);
  }
}

class InteractiveBlock extends Block {
  constructor(isSelected) {
    super(isSelected);
    this.element.blockInstance = this;
  }

  switch() {
    this.isSelected = !this.isSelected;
    this.element.classList.toggle("selected");
  }

  showError() {
    this.element.classList.add("error");
  }
}
