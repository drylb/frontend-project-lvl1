import { getRandom, playGame } from '../core.js';

const gameDescription = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 30;

const calculateOperation = (num1, num2, sign) => {
  if (sign === '+') {
    return num1 + num2;
  }
  if (sign === '-') {
    return num1 - num2;
  }
  if (sign === '*') {
    return num1 * num2;
  }
  return null;
};

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * signs.length);
  return signs[randomIndex];
};

const runGame = () => {
  const gameData = () => {
    const randomNum1 = getRandom(minNumber, maxNumber);
    const randomNum2 = getRandom(minNumber, maxNumber);
    const sign = getRandomSign();
    const question = `${randomNum1} ${sign} ${randomNum2}`;
    const answer = `${calculateOperation(randomNum1, randomNum2, sign)}`;
    return { question, answer };
  };
  return playGame(gameDescription, gameData);
};

export default runGame;
