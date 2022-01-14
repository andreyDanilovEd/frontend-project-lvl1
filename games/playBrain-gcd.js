import readlineSync from 'readline-sync';

const playBrainGcd = () => {

    console.log('Welcome to Brain games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    console.log('Find the greatest common divisor of given numbers.');
    // цикл для поиска делителя
    const findDivider = (a, b) => {
        const toNumberA = Number(a);
        const toNumberB = Number(b);
        let maxRandomNumber = 0;
        if (toNumberA > toNumberB) {
            maxRandomNumber = toNumberA;
        }
        else if (toNumberA < toNumberB) {
            maxRandomNumber = toNumberB;
        }
        for (let counter = maxRandomNumber; counter > 0; counter--) {
            let maxDivider = 1;
            if (random1 % counter === 0 && random2 % counter === 0) {
                maxDivider = counter;
                return maxDivider;
            }
        }
    }
    let random1 = Math.floor(Math.random() * 50) + 1;
    let random2 = Math.floor(Math.random() * 10) + 1;
// цикл для 3 раундов
for (let counter = 0; counter < 3 ; counter++) {
    random1 = Math.floor(Math.random() * 50) + 1;
    random2 = Math.floor(Math.random() * 10) + 1;
    console.log('Question: ' + random1 + ' ' + random2);
    let rightDivider = findDivider(random1, random2);
    const userAnswer = readlineSync.question('Your answer: ');
    if (counter === 2) { 
        return 'Congratulation, ' + name + '!';    
    } 
    else if (Number(userAnswer) === rightDivider) {
        console.log('Correct!');
    } 
    else if (Number(userAnswer) !== rightDivider) {
        return "'" + userAnswer + "'" + ' is wrong answer ;(. Correct answer was ' + "'" + rightDivider + "'" + `\nLet's try again, ` + name;
    }
}
}
export default playBrainGcd;