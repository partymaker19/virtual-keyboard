export default class Key {
  constructor(key, callback) {
    this.key = key;
    this.callback = callback;

    this.element = document.createElement("div");
    this.element.className = "key";
    this.element.textContent = this.key;
    this.element.addEventListener("click", () => {
      this.callback(this.key);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === this.key) {
        this.element.classList.add("active");
      }
    });

    document.addEventListener("keyup", (event) => {
      if (event.key === this.key) {
        this.element.classList.remove("active");
      }
    });
  }

  render(parent) {
    parent.appendChild(this.element);
  }
}
