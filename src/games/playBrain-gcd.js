import randomNum from '../randomNum.js';
import gameEngine from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findDivider = (a, b) => {
  const toNumberA = Number(a);
  const toNumberB = Number(b);
  let maxRandomNumber = 0;
  if (toNumberA > toNumberB) {
    maxRandomNumber = toNumberA;
  } else if (toNumberA < toNumberB) {
    maxRandomNumber = toNumberB;
  } else if (toNumberB === toNumberA) {
    maxRandomNumber = toNumberA;
  }
  let maxDivider = 1;
  for (let counter = maxRandomNumber; counter > 0; counter -= 1) {
    if (toNumberA % counter === 0 && toNumberB % counter === 0) {
      maxDivider = counter;
      return maxDivider;
    }
  }
  return maxDivider;
};

const getQuestionAndAnswer = () => {
  const random1 = randomNum(1, 100);
  const random2 = randomNum(1, 100);
  const question = `${random1} ${random2}`;
  const rightAnswer = findDivider(random1, random2).toString();
  return [question, rightAnswer];
};
const startGame = () => {
  gameEngine(gameRule, getQuestionAndAnswer);
};
export default startGame;