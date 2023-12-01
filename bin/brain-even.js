#!/usr/bin/env node
import { getName, getAnswer } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = getName();

console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getEven(maxQuestions = 3) {
  for (let i = 0; i !== maxQuestions;) {
    const randomValue = Math.floor(Math.random() * 100);

    console.log(`Question: ${randomValue}`);

    const answer = getAnswer();

    const isEvenOdd = ['yes', 'no'];

    if (!isEvenOdd.includes(answer)) {
      console.log(`'${answer}' is the wrong answer ;(. Possible answers were 'yes' or 'no'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    const isCorrect = (randomValue % 2 === 0 && answer === 'yes')
                      || (randomValue % 2 !== 0 && answer === 'no');

    if (isCorrect) {
      console.log('Correct!');
      i += 1;
    } else {
      const correctAnswer = randomValue % 2 === 0 ? 'yes' : 'no';
      console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (i === maxQuestions) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

getEven();
