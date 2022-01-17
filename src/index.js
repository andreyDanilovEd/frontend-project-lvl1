
import readlineSync from 'readline-sync';

const gameLogic = () => {

    console.log('Welcome to Brain games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    console.log('What is the result of the expression?');

}
export default gameLogic;
