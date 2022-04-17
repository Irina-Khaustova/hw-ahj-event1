export default class Popup {
  constructor() {
    this.popup = null;
  }

  createPopup() {
    this.popup = document.createElement('div');
    this.popup.classList.add('popup');
    this.popup.innerHTML = '<div class="popup-text">Вы проиграли!</div>';
    document.body.append(this.popup);
  }
}
