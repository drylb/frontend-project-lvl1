import { playGame, getRandom } from '../core.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const runGame = () => {
  const gameData = () => {
    const randomNum1 = getRandom(minNumber, maxNumber);
    const randomNum2 = getRandom(minNumber, maxNumber);
    const answer = `${getGcd(randomNum1, randomNum2)}`;
    const question = `${randomNum1} ${randomNum2}`;
    return { question, answer };
  };
  return playGame(gameDescription, gameData);
};

export default runGame;
