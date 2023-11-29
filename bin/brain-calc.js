#!/usr/bin/env node
import {getName, getAnswer} from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = getName();

console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');

function arrayRandElement(arr = ['*', '+', '-']) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function getCalc(result = 0) {
    for (let i = 0; i !== 3;) {

        var randomValue = Math.floor(Math.random() * 100);
        var randomValue2 = Math.floor(Math.random() * 100);
        var randomElement = arrayRandElement();
    
        console.log(`Question: ${randomValue} ${randomElement} ${randomValue2}`);
    
        const answer = Number(getAnswer());
    
        if (randomElement === '*') {
            let mult = Number(randomValue * randomValue2);
                if (answer !== mult) {
                    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${mult}'.`)
                    console.log(`Let's try again, ${name}!`)
                    break;
                } else {
                    console.log('Correct!');
                    result += 1;
                    i += 1;
                }
        } else if (randomElement === '+') {
            let sum = Number(randomValue + randomValue2);
                if (answer !== sum) {
                    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${sum}'.`)
                    console.log(`Let's try again, ${name}!`)
                    break;
                } else {
                    console.log('Correct!');
                    result += 1;
                    i += 1;
                }
        } else if (randomElement === '-') {
            let minus = Number(randomValue - randomValue2);
                if (answer !== minus) {
                    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${minus}'.`)
                    console.log(`Let's try again, ${name}!`)
                    break;
                } else {
                    console.log('Correct!');
                    result += 1;
                    i += 1;
                }
        }  
    }

    if (result === 3) {
        console.log(`Congratulations, ${name}!`)
    }
        
}

getCalc();