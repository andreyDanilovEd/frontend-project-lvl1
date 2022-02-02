import randomNum from '../randomNum.js';
import gameEngine from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findDivider = (a, b) => {
  const maxDivider = a % b;
  if (a === 0 || b === 0) {
    return a + b;
  }
  return findDivider(b, maxDivider);
};

const getQuestionAndAnswer = () => {
  const random1 = randomNum(50, 100);
  const random2 = randomNum(1, 49);
  const question = `${random1} ${random2}`;
  const rightAnswer = findDivider(random1, random2).toString();
  return [question, rightAnswer];
};
const startGame = () => {
  gameEngine(gameRule, getQuestionAndAnswer);
};
export default startGame;
