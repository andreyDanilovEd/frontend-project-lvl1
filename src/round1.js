
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
console.log('Hello, ' + name + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
// round 1
console.log('Question: 15');
export const getAnswer = readlineSync.question('Your answer: ');
const checker = (getAnswer) => {
    if (getAnswer === 'no') {
        return 'Correct!';
    }
    let winCount = 1;
    return '"yes" is wrong answer ;(. Correct answer was "no". \n "Lets" try again, ' + name;
} 

// round 2
console.log('Question: 6');
export const getAnswer2 = readlineSync.question('Your answer: ');
const checker2 = (getAnswer2) => {
    const toNumber = Number(getAnswer2);
    if (getAnswer2 === 'yes') {
        return 'Correct!';
    }
    return '"no" is wrong answer ;(. Correct answer was "yes". \n "Lets" try again, ' + name;;
} 
console.log(checker2(getAnswer2));

// round 3
console.log('Question: 7');
export const getAnswer3 = readlineSync.question('Your answer: ');
const checker3 = (getAnswer3) => {
    const toNumber = Number(getAnswer3);
    if (getAnswer3 === 'no') {
        return 'Correct!\nCongratulations, ' + name + '!';
    }
    return '"yes" is wrong answer ;(. Correct answer was "no". \n "Lets" try again, ' + name;;
} 
console.log(checker3(getAnswer3));