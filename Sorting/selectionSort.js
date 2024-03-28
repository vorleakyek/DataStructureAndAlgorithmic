const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  //Code Here
  const length = numbers.length;
  let smallest = numbers[0]; //99
  let index = 0;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (numbers[j] < smallest) {
        smallest = numbers[j]; //0
        index = j; //10
      }
    }

    numbers[index] = numbers[i];
    numbers[i] = smallest;
  }

  // console.log(smallest);
  return numbers;
}

console.log(selectionSort(numbers));
