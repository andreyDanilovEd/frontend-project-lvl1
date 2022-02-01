import randomNum from '../src/randomNum.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
const getQuestionAndAnswer = () => {
  const question = randomNum(0, 100) + 1;
  const resultCheck = isEven(question);
  let rightAnswer;
  if (resultCheck === true) {
    rightAnswer = 'yes';
    return [question, rightAnswer];
  }
  rightAnswer = 'no';
  return [question, rightAnswer];
};
export { gameRule, getQuestionAndAnswer };
