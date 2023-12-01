#!/usr/bin/env node
import {getName, getAnswer} from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = getName();

console.log(`Hello, ${name}!`);

console.log('Find the greatest common divisor of given numbers.');

function findNOD(item = 0) {
    for (let j = 0; j !== 3;) {
        var randomValue = Math.floor(Math.random() * 100);
        var randomValue2 = Math.floor(Math.random() * 100);
        var arr = [];
        var arr1 = [];
        var min = 0;
        var max = 0;
        var result = 0;

        console.log(`Question: ${randomValue} ${randomValue2}`);

        arr.push(randomValue, randomValue2);

        if (arr[0] > arr[1]) {
            min += arr[1];
            max += arr[0];
        } else {
            min += arr[0];
            max += arr[1];
        }

        for (let i = 1; i <= min; i += 1) {
            if (min % i === 0) {
                arr1.push(i);
            }
        }

        for (let i = arr1.length - 1; i => 0; i -= 1) {
            if (max % arr1[i] === 0) {
                result += arr1[i];
                break;
            }
        }
        
        const answer = getAnswer();
        const value = result;

        if (Number(result) === Number(answer)) {
            console.log('Correct!')
            j += 1;
            item += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
            console.log(`Let's try again, ${name}!`)
            break;
        }

        if (item === 3) {
            console.log(`Congratulations, ${name}!`)
        }
    }
}

findNOD();


