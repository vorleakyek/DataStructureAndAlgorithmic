/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    const length = nums.length;
    const sumLeft = new Array(length).fill(0);
    const sumRight = new Array(length).fill(0);

    for (let i=1, sum=0; i<length; i++) {
        sum += nums[i-1];
        sumLeft[i]=sum
    }

    for (let j=length-2, sum=0; j>=0; j--) {
        sum += nums[j+1];
        sumRight[j]=sum
    }

    for (let k=0; k<length; k++) {
        if(sumLeft[k]===sumRight[k]) {
            return k
        }

        
    }

    return -1
    
};
