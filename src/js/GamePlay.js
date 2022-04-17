export default class GamePlay {
  constructor() {
    this.container = null;
    this.activeElem = null;
    this.boardSize = 4;
  }

  createGamePlay() {
    this.container = document.createElement('div');
    this.container.classList.add('container');
    document.body.append(this.container);
    for (let i = 1; i <= this.boardSize * this.boardSize; i += 1) {
      const elem = document.createElement('div');
      elem.classList.add('element', `element${i}`);
      this.container.append(elem);
    }
  }

  createPopup() {
    this.popup = document.createElement('div');
    this.popup.classList.add('popup');
    this.popup.textContent = 'Вы проиграли!';
    document.body.append(this.popup);
  }
}
