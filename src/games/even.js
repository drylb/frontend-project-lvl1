import { getRandom, playGame } from '../core.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 300;

const isEven = (number) => number % 2 === 0;

const runGame = () => {
  const gameData = () => {
    const question = getRandom(minNumber, maxNumber);
    const answer = isEven(question) ? 'yes' : 'no';
    return { question, answer };
  };
  playGame(gameDescription, gameData);
};

export default runGame;
