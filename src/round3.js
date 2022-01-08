import readlineSync from 'readline-sync';

const brainEvenChecker = (number) => {
    if (number % 2 === 0){
        return 'yes';
    }
    return 'no';
}
    console.log('Welcome to Brain games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hi, ' + name + '!');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    

export const brainEven = () => {

    for (let counter = 0; counter < 3; counter += 1) {
        const questionNumber = 15;
        console.log('Question: ' + questionNumber);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === brainEvenChecker(questionNumber)){
            return console.log('Correct!');
        } else {
            return console.log('Try again, ' + name);
        }
    }
    return console.log(brainEven());
}
