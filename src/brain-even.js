import readlineSync from 'readline-sync';

const playBrainEven = () => {
    console.log('Welcome to Brain games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hi, ' + name + '!');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const brainEvenChecker = (number) => {
        if (number % 2 === 0){
            return 'yes';
        }
        return 'no';
    }
    let questionNumber = 15;
    for (let counter = 0; counter < 3; counter += 1) {
        questionNumber = questionNumber + 1;
        console.log('Question: ' + questionNumber);
        const userAnswer = readlineSync.question('Your answer: ');
        if (counter === 2) { 
            console.log('Congratulation!');    
        } 
        else if (userAnswer === brainEvenChecker(questionNumber)) {
            console.log('Correct!');
        } 
        else if (userAnswer !== brainEvenChecker(questionNumber)) {
            console.log (userAnswer + ' is wrong answer' + '\nTry again, ' + name);
            break;
        }
    }
}       

export default playBrainEven;
