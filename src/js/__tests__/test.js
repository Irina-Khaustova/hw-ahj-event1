// import { createImage } from '../utils';
import { createNumber } from '../utils';
// import goblin from '../../img/goblin.png';

test('проверка работы функции createNumber', () => {
  const received = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const expected = createNumber(4);
  expect(received.includes(expected)).toEqual(true);
});

// test('проверка работы функции createImage', () => {
// const received = createImage(3);
// expect(received.includes(3)).toEqual(true);
// });

test('test', () => {
  const received = 1;
  expect(received).toEqual(1);
});
