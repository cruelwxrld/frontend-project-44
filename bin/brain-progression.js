#!/usr/bin/env node
import { getName, getAnswer } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = getName();

console.log(`Hello, ${name}!`);

console.log('What number is missing in the progression?');

function findElementProgression(item = 0) {
  for (let j = 0; j !== 3;) {
    const arr = [];
    let randomValue = Math.floor(Math.random() * 100);
    let randomValue2 = Math.floor(Math.random() * 10);
    let randomPos = Math.floor(Math.random() * 10);
    let result = '';

    while (randomPos === 0) {
      randomPos = Math.floor(Math.random() * 10);
    }

    while (randomValue2 === 0) {
      randomValue2 = Math.floor(Math.random() * 10);
    }

    while (randomValue === 0) {
      randomValue = Math.floor(Math.random() * 100);
    }

    const missingItem = '..';
    const term = randomValue2;

    arr.push(randomValue);

    for (let i = 1; i !== 10; i += 1) {
      arr.push(arr[0] += term);
    }

    arr[0] = arr[1] - randomValue2;

    const unexpectedValue = arr[randomPos - 1];

    arr[randomPos - 1] = missingItem;

    for (let i = 0; i < arr.length; i += 1) {
      result += arr[i] + ' ';
    }

    console.log(`Question: ${result}`);

    const answer = getAnswer();

    if (Number(answer) !== Number(unexpectedValue)) {
      console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${unexpectedValue}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
      item += 1;
    }

    if (item === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
}

findElementProgression();
