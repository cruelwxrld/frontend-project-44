#!/usr/bin/env node
import { getName, getAnswer } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = getName();

console.log(`Hello, ${name}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function isEasyValue(item = 0) {
  for (let j = 0; j !== 3;) {
    const arr = [];
    const newArr = [];
    const answerOptions = ['yes', 'no'];
    let getAnswer1 = '';
    let randomValue = Math.floor(Math.random() * 100);

    while (randomValue === 0) {
      randomValue = Math.floor(Math.random() * 100);
    }

    const term = randomValue;

    arr.push(term);

    for (let i = arr[0]; i !== 1; i -= 1) {
      arr.push(i - 1);
    }

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[0] % arr[i] === 0) {
        newArr.push(arr[i]);
      }
    }

    getAnswer1 = newArr.length !== 2 ? answerOptions[1] : answerOptions[0];

    console.log(`Question: ${randomValue}`);

    const answer = getAnswer();

    if (String(answer) !== String(getAnswer1)) {
      console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${getAnswer1}'.`);
      console.log(`Let's try again, ${name}!`);
      return item;
    }

    console.log('Correct!');
    j += 1;

    if (j === 3) {
      console.log(`Congratulations, ${name}!`);
      return item;
    }
  }

  return item;
}

isEasyValue();
