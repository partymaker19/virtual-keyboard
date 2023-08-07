// export default class Key {
//   constructor(key, callback) {
//     this.key = key;
//     this.callback = callback;

//     this.element = document.createElement('div');
//     this.element.className = 'key';
//     this.element.textContent = this.key;
//     this.element.addEventListener('mousedown', () => {
//       this.element.classList.add('active');
//     });

//     this.element.addEventListener('mouseup', () => {
//       this.element.classList.remove('active');
//     });
//     this.element.addEventListener('click', () => {
//       this.callback(this.key);
//     });

//     document.addEventListener('keydown', (event) => {
//       if (event.key === this.key) {
//         this.element.classList.add('active');
//       }
//     });

//     document.addEventListener('keyup', (event) => {
//       if (event.key === this.key) {
//         this.element.classList.remove('active');
//       }
//     });
//   }

//   render(parent) {
//     parent.appendChild(this.element);
//   }
// }

export default class Key {
  constructor(key, rowIndex, keyIndex, callback) { // Добавили параметры rowIndex и keyIndex
    this.key = key;
    this.rowIndex = rowIndex; // Сохраняем индекс строки
    this.keyIndex = keyIndex; // Сохраняем индекс клавиши в строке
    this.callback = callback;

    this.element = document.createElement('div');
    this.element.className = 'key';
    this.element.textContent = this.key;
    this.element.addEventListener('mousedown', () => {
      this.element.classList.add('active');
    });

    this.element.addEventListener('mouseup', () => {
      this.element.classList.remove('active');
    });
    this.element.addEventListener('click', () => {
      this.callback(this.key);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === this.key) {
        this.element.classList.add('active');
      }
    });

    document.addEventListener('keyup', (event) => {
      if (event.key === this.key) {
        this.element.classList.remove('active');
      }
    });
  }

  render(parent) {
    parent.appendChild(this.element);
  }
}
