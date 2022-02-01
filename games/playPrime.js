import randomNum from '../src/randomNum.js';

const gameRule = 'Answer "yes" if the number is prime, otherwise answer "no".';

const checkNumber = (num) => {
  let result = 0;
  for (let counter = num; counter > 0; counter -= 1) {
    if (num % counter === 0) {
      result += 1;
    }
    if (result > 2 || num === 1) {
      return false;
    }
  }
  return true;
};
const getQuestionAndAnswer = () => {
  const randomNumber = randomNum(1, 100);
  const question = randomNumber;
  const resultCheck = checkNumber(randomNumber);
  let rightAnswer;
  if (resultCheck === true) {
    rightAnswer = 'yes';
    return [question, rightAnswer];
  }
  rightAnswer = 'no';
  return [question, rightAnswer];
};
export { gameRule, getQuestionAndAnswer };
