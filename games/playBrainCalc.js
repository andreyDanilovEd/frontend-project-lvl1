const gameRule = 'What is the result of the expression?';
const arr = [' ', '*', '+', '-'];

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
    default:
  }
  return answer;
};
const getQuestionAndAnswer = () => {
  const randomOperatorIndex = Math.floor(Math.random() * 3) + 1;
  const random1 = Math.floor(Math.random() * 10) + 1;
  const random2 = Math.floor(Math.random() * 10) + 1;
  const question = `${random1} ${arr[randomOperatorIndex]} ${random2}`;
  const rightAnswer = checkOperator(random1, random2, arr[randomOperatorIndex]).toString();
  return [question, rightAnswer];
};
export { gameRule, getQuestionAndAnswer };
