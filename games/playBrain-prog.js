const gameRule = 'What number is missing in the progression?';
const createRandomArr = (number, step) => {
  const randomStepNumber = step;

  const randomArr = [];
  randomArr.push(number);
  for (let counter = 0; counter < 9; counter += 1) {
    if (counter < 9) {
      randomArr.push(Number(randomArr[counter]) + Number(randomStepNumber));
    }
  }
  return randomArr;
};
const getQuestionAndAnswer = () => {
  const firstRandomNumber = Math.floor(Math.random() * 100) + 1;
  const randomStepNumber = Math.floor(Math.random() * 10) + 2;
  const fullArr = createRandomArr(firstRandomNumber, randomStepNumber);
  const forGap = '..';
  const randomIndex = Math.floor(Math.random() * 9) + 1;
  const rightAnswer = fullArr[randomIndex].toString();
  fullArr.splice(randomIndex, 1, forGap);
  const question = fullArr;
  return [question, rightAnswer];
};
export { gameRule, getQuestionAndAnswer };
