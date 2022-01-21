import readlineSync from 'readline-sync';

const playPrime = () => {
    console.log('Welcome to Brain games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    console.log('Answer "yes" if the number is prime, otherwise answer "no".');

    const checkNumber = (num) => {
        
        let result = 0;
        let resultCheck = 'yes';
        for (let counter = num; counter > 0; counter--) {
            if (num % counter === 0) {
                result = result + 1;
            } 
            if (result > 2) {
                resultCheck = 'no';
        }
    }
    return resultCheck;
}

    for (let counter = 0; counter < 3; counter++){
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(`Question:  ${randomNumber}`);
        let rightAnswer = checkNumber(randomNumber);
        const answer = readlineSync.question('Your answer: ');
        if (counter === 2) { 
            return 'Congratulation, ' + name + '!';    
        } 
        else if (rightAnswer === answer) {
            console.log('Correct!');
        }
        else if (answer !== rightAnswer) {
            return "'" + answer + "'" + ' is wrong answer ;(. Correct answer was ' + "'" + rightAnswer + "'" + `\nLet's try again, ` + name;
        }
    }
}
export default playPrime;