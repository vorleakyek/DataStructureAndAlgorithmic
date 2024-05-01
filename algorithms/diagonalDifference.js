//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]; 
    
let diag1 = 0;
let diag2 = 0; 


for (let i=0; i<arr.length; i++) {
  diag1 = diag1 + arr[i][i];
  diag2 = diag2 + arr[i][arr.length-1-i];
}
  
const differnce = Math.abs(diag1-diag2);

