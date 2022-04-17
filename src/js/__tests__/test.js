// import createImage from '../utils';
import { createNumber } from '../utils';
// import goblin from '../../img/goblin.png';

test('проверка работы функции createNumber', () => {
  const received = Array(16).fill().map((e, i) => i + 1);
  const expected = createNumber(4);
  expect(received.includes(expected)).toEqual(true);
});

// test('проверка работы функции createImage', () => {
// const received = createImage(3);
// expect(received.includes(3)).toEqual(true);
// });
