// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

/**
    n=6 
    start at n=0  loop through n=number-1
    store values at n-1 and n-2 
    sum of the two numbers 


    notes:
    i=0    a0=0; a1=1 --> a2 = a0+ a1  = 1
    i=1    a0=a1; a1=a2 --> a2 = a0+ a1  = 2 
    i=2    a0=a1; a1=a2 --> a2 = a0+ a1  = 3 
 */

function fibonacciIterative(n) {
  //O(n)
  let a0 = 0;
  let a1 = 1;
  let a2 = null;

  if (n === 0) {
    console.log(0);
    return 0;
  }
  if (n === 1 || n === 2) {
    console.log(1);
    return 1;
  }

  for (let i = 0; i < n - 1; i++) {
    a2 = a0 + a1;
    a0 = a1;
    a1 = a2;
  }

  console.log(a2);
  return a2;
}

fibonacciIterative(8);

function fibonacciRecursive(n) {
  //O(2^n)
  //   if (n === 0) {
  //     return 0;
  //   }
  //   if (n === 1 || n === 2) {
  //     return 1;
  //   }

  if (n < 2) {
    return n;
  }

  const result = fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
  return result;
}
const result = fibonacciRecursive(8);
console.log(result);

//can also use the array

function fibonacciIterative2(n) {
  //O(n)
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

console.log(fibonacciIterative2(8));
