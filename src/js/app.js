import GameLogic from './GameLogic';

import GamePlay from './GamePlay';

const gamePlay = new GamePlay();
gamePlay.createGamePlay();
const gameLogic = new GameLogic(document.querySelector('.container'));
gameLogic.init();
