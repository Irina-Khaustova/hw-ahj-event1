import goblin from '../img/goblin.png';

export function createNumber(number) {
  return Math.floor(Math.random() * (number * number));
}

let activeElem;
function createImage(n) {
  if (activeElem) {
    activeElem.innerHTML = '';
  }
  const image = new Image();
  image.src = goblin;
  image.classList.add('image');
  const index = createNumber(n);
  activeElem = document.querySelector(`.element${index}`);
  activeElem.append(image);
}

function removeImage(elem) {
  const activeEl = elem.parentElement;
  activeEl.innerHTML = '';
}
export { createImage, removeImage };
