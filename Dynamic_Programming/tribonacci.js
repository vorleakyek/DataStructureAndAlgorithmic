/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
      if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    const arr = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
    }

    return arr[n];
};
