import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const playGame = (gameDescription, gameData) => {
  console.log('Welcome to the brain games');
  console.log(gameDescription);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const { question, answer } = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

export {
  playGame,
  getRandom,
};
