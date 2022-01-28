const gameRule = 'What number is missing in the progression?';
const createRandomArr = (number, step, size) => {
  const randomStepNumber = step;

  const randomArr = [];
  randomArr.push(number);
  for (let counter = 0; counter < size; counter += 1) {
    if (counter < 9) {
      randomArr.push(Number(randomArr[counter]) + Number(randomStepNumber));
    }
  }
  return randomArr;
};
const getQuestionAndAnswer = () => {
  const firstRandomNumber = Math.floor(Math.random() * 100) + 1;
  const randomStepNumber = Math.floor(Math.random() * 10) + 2;
  const randomSizeArr = Math.floor(Math.random() * 3) + 4;
  const fullArr = createRandomArr(firstRandomNumber, randomStepNumber, randomSizeArr);
  const forGap = '..';
  const randomIndex = randomSizeArr - 1;
  console.log(randomIndex);
  const rightAnswer = fullArr[randomIndex];
  fullArr.splice(randomIndex, 1, forGap);
  const question = fullArr.join(' ');
  return [question, rightAnswer.toString()];
};
export { gameRule, getQuestionAndAnswer };
