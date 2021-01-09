import { playGame, getRandom } from '../core.js';

const gameDescription = 'What number is missing in the progression?';
const minNumber = 1;
const maxNumber = 20;
const progressionLength = 10;

const getRadomIndex = () => Math.round(Math.random() * (progressionLength - 1));

const runGame = () => {
  const gameData = () => {
    const progressionArray = [];
    const startNum = getRandom(minNumber, maxNumber);
    const progressionGap = getRandom(minNumber, maxNumber);
    const hiddenPosition = getRadomIndex();
    let progression = startNum;
    for (let i = 0; i < progressionLength; i += 1) {
      if (i === hiddenPosition) {
        progressionArray.push('..');
      } else {
        progressionArray.push(progression);
      }
      progression += progressionGap;
    }
    const question = progressionArray.join(' ');
    const answer = progressionArray[hiddenPosition - 1]
      ? `${progressionArray[hiddenPosition - 1] + progressionGap}`
      : `${progressionArray[hiddenPosition + 1] - progressionGap}`;
    return { question, answer };
  };
  return playGame(gameDescription, gameData);
};

export default runGame;
