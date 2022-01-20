import readlineSync from 'readline-sync';

const playBrainProg = () => {
    console.log('Welcome to Brain games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    console.log('What number is missing in the progression?');

    // функция для наполнения массива
    
    
    let rightAnswer = [];

    const createRandomArr = (number, step) => {
        let randomStepNumber = step;
        
        const randomArr = [];
        randomArr.push(number);
        for (let counter = 0; counter < 9; counter++) {
            
            if (counter < 9) {
                randomArr.push(Number(randomArr[counter]) + Number(randomStepNumber));
            }   
            }
            let forGap = `..`;
            let randomIndex = Math.floor(Math.random() * 9) + 1;
            rightAnswer = randomArr[randomIndex];
            randomArr.splice(randomIndex, 1, forGap);
            return randomArr;
        }
             // функция для запуска 3 раундов
 for (let counter = 0; counter < 3; counter++) {
    let firstRandomNumber = Math.floor(Math.random() * 100) + 1;
    let randomStepNumber = Math.floor(Math.random() * 10) + 2;
    console.log('Question: ' + createRandomArr(firstRandomNumber, randomStepNumber));
    let userAnswer = readlineSync.question('Your answer: ');
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
export default playBrainProg;