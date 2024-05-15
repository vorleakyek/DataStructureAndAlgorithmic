function longestSubarray(nums: number[]): number {
    const size: number = nums.length;

    //Create two arrays to keep track of consecutive 1's to the left and right 
    let left: number[] = new Array(size).fill(0);
    let right: number[] = new Array(size).fill(0); 

    // Fill the left array with the counts of consecutive 1's from the left
    for (let i=1; i<size; i++) {
        if(nums[i-1]===1){
            left[i]= left[i-1]+1;
        }
    }

    // Fill the right array with the counts of consecutive 1's from the right
    for (let i = size - 2 ; i >=0; i--) {
        if(nums[i+1] === 1) {
            right[i] = right[i+1] + 1; 
        }
        
    }

console.log('left', left)
console.log('right', right)
    let maxLength: number = 0;

    for (let i=0; i<size; i++) {
        maxLength = Math.max(maxLength, left[i]+right[i]);
    }

    return maxLength; 

};
