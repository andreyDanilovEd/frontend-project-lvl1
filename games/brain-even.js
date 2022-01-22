import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
const playBrainEven = () => {
  console.log('Welcome to Brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const brainEvenChecker = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  let random = Math.floor(Math.random() * 10) + 1;
  for (let counter = 0; counter < 3; counter += 1) {
    random = Math.floor(Math.random() * 10) + 1;
    console.log(`Question: ${random}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (counter === 2) {
      return `Congratulation, ${name}!`;
    } if (userAnswer === brainEvenChecker(random)) {
      console.log('Correct!');
    } else if (userAnswer !== brainEvenChecker(random)) {
      return `${userAnswer} is wrong answer \nTry again,  ${name}`;
    }
  }
};
export default playBrainEven;
