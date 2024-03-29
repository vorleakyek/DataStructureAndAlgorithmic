const numbersArr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(numbers) {
  //Code Here
  const length = numbers.length;

  for (let i = 0; i < length - 1; i++) {
    let smallest = numbers[i];
    let index = i;

    for (let j = i + 1; j < length; j++) {
      if (numbers[j] < smallest) {
        smallest = numbers[j];
        index = j;
      }
    }

    numbers[index] = numbers[i];
    numbers[i] = smallest;
  }

  return numbers;
}

console.log(selectionSort(numbersArr));
