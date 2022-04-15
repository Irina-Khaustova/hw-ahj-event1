import goblin from '../img/goblin.png';

export function createNumber(number) {
  return Math.floor(Math.random() * (number * number));
}

let activeElem;
export default function createImage(n) {
  // let activeElem;
  if (activeElem) {
    activeElem.innerHTML = '';
  }
  const image = new Image();
  image.src = goblin;
  const index = createNumber(n);
  console.log(index);
  activeElem = document.querySelector(`.element${index}`);
  activeElem.append(image);
}
