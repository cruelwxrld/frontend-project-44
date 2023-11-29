import {getName, getAnswer} from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = getName();

console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getEven(result = 1) {
    for (let i = 0; i !== 3;) {
        var randomValue = Math.floor(Math.random() * 100);
    
        console.log(`Question: ${randomValue}`);
    
        const answer = getAnswer();
    
        var isEvenOdd = ['yes', 'no'];
    
        if (answer !== isEvenOdd[0] && answer !== isEvenOdd[1]) {
            console.log(`'${answer}' is wrong answer ;(. Possible answer was 'yes' or 'no'.`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
    
        if (randomValue % 2 === 0 && answer === 'yes') {
            console.log('Correct!')
            i += 1;
            result += 1;
        } else if (randomValue % 2 === 0 && answer === 'no') {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`);
            console.log(`Let's try again, ${name}!`);
            break;
        } else if (randomValue % 2 !== 0 && answer === 'no') {
            console.log('Correct!')
            i += 1;
            result += 1;
        } else if (randomValue % 2 !== 0 && answer === 'yes') {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
    }

    if (result !== 1) {
        console.log(`Congratulations, ${name}!`)
    }
        
}

getEven();
















