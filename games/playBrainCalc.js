import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
const playCalc = () => {
  console.log('Welcome to Brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name} !`);
  console.log('What is the result of the expression?');
  let random1 = Math.floor(Math.random() * 10) + 1;
  let random2 = Math.floor(Math.random() * 10) + 1;

  // eslint-disable-next-line consistent-return
  const checkOperator = (operator) => {
    let answer = 0;
    let answer2 = 0;
    let answer3 = 0;

    switch (operator) {
      case '-':
        answer = random1 - random2;
        return answer;
      case '+':
        answer2 = random1 + random2;
        return answer2;
      case '*':
        answer3 = random1 * random2;
        return answer3;
      default:
    }
  };

  const arr = [' ', '*', '+', '-'];
  for (let counter = 0; counter < 3; counter += 1) {
    random1 = Math.floor(Math.random() * 10) + 1;
    random2 = Math.floor(Math.random() * 10) + 1;
    const randomOperatorIndex = Math.floor(Math.random() * 3) + 1;
    const operator = arr[randomOperatorIndex];
    const question = `${random1} ${operator} ${random2}`;
    console.log(`Question: ${question}`);
    const rightAnswer = checkOperator(operator);
    const userAnswer = readlineSync.question('Your answer: ');
    if (counter === 2) {
      return `Congratulation, ${name}!`;
    } if (Number(userAnswer) === rightAnswer) {
      console.log('Correct!');
    } else if (Number(userAnswer) !== rightAnswer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}' \nLet's try again, ${name}`;
    }
  }
};
export default playCalc;
