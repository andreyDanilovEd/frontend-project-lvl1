import randomNum from '../src/randomNum.js';

const gameRule = 'Answer "yes" if the number is prime, otherwise answer "no".';

const checkNumber = (num) => {
  let result = 0;
  let resultCheck = 'yes';
  for (let counter = num; counter > 0; counter -= 1) {
    if (num % counter === 0) {
      result += 1;
    }
    if (result > 2 || num === 1) {
      resultCheck = 'no';
    }
  }
  return resultCheck;
};
const getQuestionAndAnswer = () => {
  const randomNumber = randomNum(0, 100);
  const rightAnswer = checkNumber(randomNumber);
  const question = randomNumber;
  return [question, rightAnswer];
};
export { gameRule, getQuestionAndAnswer };
