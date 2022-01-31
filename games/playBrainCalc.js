import randomNum from '../src/randomNum.js';

const gameRule = 'What is the result of the expression?';
const arr = ['*', '+', '-'];

const checkOperator = (random1, random2, operator) => {
  let answer = 0;

  switch (operator) {
    case '-':
      answer = random1 - random2;
      return answer;
    case '+':
      answer = random1 + random2;
      return answer;
    case '*':
      answer = random1 * random2;
      return answer;
    default: throw new Error(`Unknown order state: '${operator}'!`);
  }
};
const getQuestionAndAnswer = () => {
  const randomOperatorIndex = randomNum(0, 3);
  const random1 = randomNum(0, 10);
  const random2 = randomNum(0, 10);
  const question = `${random1} ${arr[randomOperatorIndex]} ${random2}`;
  const rightAnswer = checkOperator(random1, random2, arr[randomOperatorIndex]).toString();
  return [question, rightAnswer];
};
export { gameRule, getQuestionAndAnswer };
