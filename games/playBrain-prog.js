import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
const playBrainProg = () => {
  console.log('Welcome to Brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name} !`);
  console.log('What number is missing in the progression?');

  let rightAnswer = [];

  const createRandomArr = (number, step) => {
    const randomStepNumber = step;

    const randomArr = [];
    randomArr.push(number);
    for (let counter = 0; counter < 9; counter += 1) {
      if (counter < 9) {
        randomArr.push(Number(randomArr[counter]) + Number(randomStepNumber));
      }
    }
    const forGap = '..';
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    rightAnswer = randomArr[randomIndex];
    randomArr.splice(randomIndex, 1, forGap);
    return randomArr;
  };
  for (let counter = 0; counter < 3; counter += 1) {
    const firstRandomNumber = Math.floor(Math.random() * 100) + 1;
    const randomStepNumber = Math.floor(Math.random() * 10) + 2;
    console.log(`Question: ${createRandomArr(firstRandomNumber, randomStepNumber)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (counter === 2) {
      return `Congratulation, ${name}!`;
    } if (Number(userAnswer) === rightAnswer) {
      console.log('Correct!');
    } else if (Number(userAnswer) !== rightAnswer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}\nLet's try again, ${name}`;
    }
  }
};
export default playBrainProg;
