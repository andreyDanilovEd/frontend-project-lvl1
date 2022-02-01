import randomNum from '../randomNum.js';

const gameRule = 'What number is missing in the progression?';
const createRandomArr = (number, step, size) => {
  const randomStepNumber = step;

  const randomArr = [];
  randomArr.push(number);
  for (let counter = 0; counter < size; counter += 1) {
    randomArr.push(Number(randomArr[counter]) + Number(randomStepNumber));
  }
  return randomArr;
};
const getQuestionAndAnswer = () => {
  const firstRandomNumber = randomNum(0, 100);
  const randomStepNumber = randomNum(1, 10);
  const randomSizeArr = randomNum(5, 10);
  const fullArr = createRandomArr(firstRandomNumber, randomStepNumber, randomSizeArr);
  const forGap = '..';
  const randomIndex = randomNum(1, randomSizeArr);
  const rightAnswer = fullArr[randomIndex];
  fullArr.splice(randomIndex, 1, forGap);
  const question = fullArr.join(' ');
  return [question, rightAnswer.toString()];
};
export { gameRule, getQuestionAndAnswer };
