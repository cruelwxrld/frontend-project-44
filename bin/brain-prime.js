#!/usr/bin/env node
import {getName, getAnswer} from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = getName();

console.log(`Hello, ${name}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function isEasyValue(item = 0) {
    for (let j = 0; j !== 3;) {
        var arr = [];
        var newArr = [];
        var answer1 = ['yes', 'no']
        var getAnswer1 = '';
        var randomValue = Math.floor(Math.random() * 100);

        while (randomValue === 0) {
            var randomValue = Math.floor(Math.random() * 100);
        }

        const term = randomValue;

        arr.push(term);

        for (let i = arr[0]; i !== 1; i -= 1) {
            arr.push(i - 1);
        }

        for (let i = 0; i <= arr.length; i += 1) {
            if (arr[0] % arr[i] === 0) {
                newArr.push(arr[i]);
            } 
        }

        if (newArr.length !== 2) {
            getAnswer1 += answer1[1];
        } else {
            getAnswer1 += answer1[0];
        }

        console.log(`Question: ${randomValue}`);

        const answer = getAnswer();

        if (String(answer) !== String(getAnswer1)) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getAnswer1}'.`)
            console.log(`Let's try again, ${name}!`);
            break;
        } else {
            console.log(`Correct!`);
            item += 1;
        }

        if (item === 3) {
            console.log(`Congratulations, ${name}!`)
            break;
        }
    }
}

isEasyValue();


