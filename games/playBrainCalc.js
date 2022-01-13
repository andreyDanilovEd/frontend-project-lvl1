import readlineSync from 'readline-sync';


const playCalc = () => {
    console.log('Welcome to Brain games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    console.log('What is the result of the expression?');

    // функция для проверки ответа

   
    // функция для запуска 3 раундов
for (let counter = 0; counter < 3; counter++) {
    let random1 = Math.floor(Math.random() * 10) + 1;
    let random2 = Math.floor(Math.random() * 10) + 1;
    const arr = ["*", "+", "-"];
    let question = random1 + ' ' + arr[counter] + ' ' + random2
    console.log('Question: ' + question);
    let operator = Array.reduce(arr);
    console.log(operator);
    let rightAnswer = Number(random1 + random2);
    console.log(rightAnswer);

}



}
export default playCalc;
