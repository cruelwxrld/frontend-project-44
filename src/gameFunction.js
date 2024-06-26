import readlineSync from 'readline-sync';

const count = 3;

const gameFunction = (description, playFunction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  let iteration = count;

  for (let i = 0; i < count; i += 1) {
    const [question, correctAnswer] = playFunction();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      iteration -= 1;
    } else {
      console.log(`${answer} is the wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (iteration === 0) console.log(`Congratulations, ${name}!`);
  }
};

export default gameFunction;
