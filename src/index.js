import readlineSync from 'readline-sync';

const gameEngine = (gameRule, getRoundData) => {
  console.log('Welcome to Brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name} !`);
  console.log(gameRule);

  for (let counter = 0; counter < 3; counter += 1) {
    const [question, rightAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameEngine;
