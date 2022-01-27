const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEvenChecker = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const getQuestionAndAnswer = () => {
  const question = Math.floor(Math.random() * 10) + 1;
  const rightAnswer = brainEvenChecker(question);
  return [question, rightAnswer];
};
export { gameRule, getQuestionAndAnswer };
