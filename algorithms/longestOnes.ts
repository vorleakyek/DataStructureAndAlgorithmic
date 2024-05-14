// The function finds the maximum number of consecutive 1's in the array if you
// can flip at most k 0's to 1's.

function longestOnes(nums: number[], k: number): number {

    const length = nums.length;

    let leftPointer = 0;

    for (const num of nums) {
        if(num === 0) {
            k--;
        }

        if(k<0 && nums[leftPointer++] === 0) {
            k++
        }
    }
    
    return length - leftPointer;
};
