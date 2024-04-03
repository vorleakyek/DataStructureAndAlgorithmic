// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

// More than 2 arrays as the input

function symmetric(arr1, arr2, arr3) {
  const result1 = sym(arr1, arr2);
  const result2 = sym(result1, arr3);
  console.log(result2);
  return result2;
}

symmetric([1, 2, 5], [2, 3, 5], [3, 4, 5]);

// Two arrays as the input
function sym(arr1, arr2) {
  const uniqueValues = new Set([...arr1, ...arr2]);
  const result = [];

  for (let value of uniqueValues) {
    let count1 = arr1.filter((x) => x === value).length;

    if (count1 > 1) {
      count1 = 1;
    }
    let count2 = arr2.filter((x) => x === value).length;

    if (count2 > 1) {
      count2 = 1;
    }

    if (count1 + count2 === 1) {
      result.push(value);
    }
  }

  //   console.log(result);
  return result;
}

sym([1, 2, 3], [5, 2, 1, 4, 5]);
// ******************************************************** //

// function sym(arr1, arr2) {

//     const result = [];
//     const arr2Hash = new Map();
//     const arr1Hash = new Map();

//     for (let i=0; i<arr2.length; i++) {
//       if (!arr2Hash.has(arr2[i])) {
//         arr2Hash.set(arr2[i],i)
//       }
//     }

//     for (let j=0; j<arr1.length; j++) {
//       if(!arr1Hash.has(arr1[j])) {
//         arr1Hash.set(arr1[j],j);
//       }
//     }

//     for (let j=0; j<arr1.length; j++) {
//       if(!arr2Hash.has(arr1[j]) && !result.includes(arr1[j])) {
//         result.push(arr1[j])
//       }
//     }

//    for (let j=0; j<arr2.length; j++) {
//       if(!arr1Hash.has(arr2[j]) && !result.includes(arr2[j])) {
//         result.push(arr2[j])
//       }
//     }

//     console.log(result)
//     return result;
//   };

//   sym([1, 2, 3, 3], [5, 2, 1, 4])
