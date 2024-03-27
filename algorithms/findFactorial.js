// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// 1. Identify the base case - when to stop the recursive
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually we have 2 returns.

const number = 5;
let answer = number;
let counter = 1;

function findFactorialRecursive(number) {
  //code here

  if (counter === number - 1) {
    return answer;
  }

  answer = answer * (number - counter);
  counter++;
  //   console.log(answer);

  findFactorialRecursive(number);

  return answer;
}

findFactorialRecursive(number);

function findFactorialIterative(number) {
  //code here
  // 5! = 5 * 4 * 3 * 2 * 1
  let answer = number;

  //1st -> a = 5 * 4 = 20
  // 2nd -> a = 20 * 3 = 60
  // 3rd -> a = 60 * 2 = 12
  // 4th -> a = 120 * 1 = 120
  // 5th -> return answer
  if (number === 0) {
    return 1;
  }

  for (let i = 1; i < number; i++) {
    answer = answer * (number - i);
  }

  //   console.log(answer);
  return answer;
}

findFactorialIterative(number);

// simpler solutions

function findFactorialIterative2(number) {
  let answer = 1;

  if (number === 2) {
    answer = 2;
  }

  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }

  //   console.log(answer);
  return answer;
}

findFactorialIterative2(number);

function findFactorialRecursive2(number) {
  //code here
  if (number < 2) {
    return 1;
  }

  if (number === 2) {
    return 2;
  }

  const answer = number * findFactorialRecursive2(number - 1);
  console.log(answer);
  return answer;
}

findFactorialRecursive2(5);
