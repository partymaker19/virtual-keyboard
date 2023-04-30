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
  }

  render(parent) {
    parent.appendChild(this.element);
  }
}
