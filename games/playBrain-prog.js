import readlineSync from 'readline-sync';

const playBrainProg = () => {
    console.log('Welcome to Brain games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    console.log('What number is missing in the progression?');

    // функция для наполнения массива
    let firstRandomNumber = Math.floor(Math.random() * 100) + 1;
    let randomStepNumber = Math.floor(Math.random() * 10) + 2;

    const createRandomArr = (number) => {

        const randomArr = [];
        randomArr.push(number);
        for (let counter = 0; counter < 9; counter++) {
            if (counter < 9) {
                randomArr.push(Number(randomArr[counter]) + Number(randomStepNumber));
                //console.log(randomArr);
            } else if (randomArr.length > 8) {
                randomArr.splice(3, 1);
                console.log(randomArr);
            }  
                
            }
            //console.log(randomArr);
            randomArr.splice(randomArr[randomStepNumber], 1);
            return randomArr;
        }
        console.log(createRandomArr(firstRandomNumber));
    }
   
    //let random1 = Math.floor(Math.random() * 10) + 1;
    //let random2 = Math.floor(Math.random() * 10) + 1;
     
     // функция для запуска 3 раундов
 //for (let counter = 0; counter < 3; counter++) {
     

//}
export default playBrainProg;