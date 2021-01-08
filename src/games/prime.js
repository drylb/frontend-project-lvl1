import { playGame, getRandom } from '../core.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const runGame = () => {
  const gameData = () => {
    const randomNumber = getRandom(minNumber, maxNumber);
    const question = `${randomNumber}`;
    const answer = isPrime(randomNumber) ? 'yes' : 'no';
    return { question, answer };
  };
  return playGame(gameDescription, gameData);
};

export default runGame;
