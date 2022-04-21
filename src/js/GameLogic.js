// import createImage from './utils';
import { createImage, removeImage } from './utils';
import Popup from './popup';

export default class GameLogic {
  constructor(container) {
    this.container = container;
    this.countWin = 0;
    this.countLose = 0;
    this.listeners();
    this.flag = true;
    this.popup = new Popup();
    this.hit = document.querySelector('.hit');
    this.miss = document.querySelector('.miss');
  }

  init() {
    this.movieImage();
  }

  listeners() {
    this.container.addEventListener('click', this.clickGame.bind(this));
  }

  movieImage() {
    setTimeout(() => {
      if (this.countLose >= 5) {
        this.popup.createPopup();
      } else {
        createImage(4);
        this.movieImage();
      }
    }, 1000);
  }

  clickGame(e) {
    if (e.target.classList.contains('image')) {
      this.countWin += 1;
      this.hit.innerHTML = `Попаданий: ${this.countWin}`;
      removeImage(e.target);
    } else {
      this.countLose += 1;
      this.miss.innerHTML = `Промахов: ${this.countLose}`;
    }
  }
}
