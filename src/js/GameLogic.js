import createImage from './utils';

export default class GameLogic {
  constructor(container) {
    this.container = container;
    this.count = 0;
    this.clickGame();
  }

  init() {
    //this.container.createGamePlay();
    this.movieImage();
   // this.clickGame();
  }

  listeners() {
    document.addEventListener('click', this.clickGame.bind(this));
  }

  movieImage() {
    setTimeout(() => {
      createImage(4);
      this.movieImage();
    }, 1000);
  }

  clickGame() {
    console.log(this.container.getElementsByTagName('img'))
        if (this.document.getElementsByTagName('img')) {
          return this.count +=1;
          console.log(count)
    };
  }
  onSellClick() {

  }
}
