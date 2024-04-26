/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
   if(!nums.length) return 0;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0],nums[1]);
    
    for(let i=2; i<nums.length; i++) {
        nums[i] = Math.max(nums[i-2]+nums[i], (nums[i-3] || 0) + nums[i]);
    }
    console.log(nums)
    return Math.max(nums[nums.length-1],nums[nums.length-2]);
};

//[1,2,3,1,3,5]
//[1,2,4,3,7,9]
