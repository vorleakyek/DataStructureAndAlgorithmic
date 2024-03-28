const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  //Code here

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let tempt = numbers[j + 1];
        numbers[j + 1] = numbers[j];
        numbers[j] = tempt;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
//O(n^2) time complexity
//O(1) space complexity
