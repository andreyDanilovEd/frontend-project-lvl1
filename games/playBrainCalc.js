import readlineSync from 'readline-sync';


const playCalc = () => {
    console.log('Welcome to Brain games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    console.log('What is the result of the expression?');

    // функция для проверки ответа
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
   }   
   let random1 = Math.floor(Math.random() * 10) + 1;
   let random2 = Math.floor(Math.random() * 10) + 1;
    // цикл для запуска 3 раундов
    const arr = [" ", "*", "+", "-"];
for (let counter = 0; counter < 3; counter++) {
    random1 = Math.floor(Math.random() * 10) + 1;
    random2 = Math.floor(Math.random() * 10) + 1;
    let randomOperatorIndex = Math.floor(Math.random() * 3) + 1;
    let operator = arr[randomOperatorIndex];
    let question = random1 + ' ' + operator + ' ' + random2;
    console.log('Question: ' + question);
    let rightAnswer = checkOperator(operator);
    const userAnswer = readlineSync.question('Your answer: ');
    if (counter === 2) { 
        return 'Congratulation, ' + name + '!';    
    } 
    else if (Number(userAnswer) === rightAnswer) {
        console.log('Correct!');
    } 
    else if (Number(userAnswer) !== rightAnswer) {
        return "'" + userAnswer + "'" + ' is wrong answer ;(. Correct answer was ' + "'" + rightAnswer + "'" + `\nLet's try again, ` + name;
    }
}
}
export default playCalc;
