function findMaxAverage(nums: number[], k: number): number {

    let totalNumbers = nums.length;
    let maxSum = 0;
    let currentSum = 0;

    for (let index =0; index < k; index++) {
        currentSum += nums[index];
    }

    maxSum = currentSum; 

    for (let index = k; index < totalNumbers; index++) {
        currentSum += nums[index] - nums[index-k];
        maxSum = Math.max(maxSum,currentSum)
    }

    return maxSum/k;
    
    
};
