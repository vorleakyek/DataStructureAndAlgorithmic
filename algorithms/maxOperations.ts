function maxOperations(nums: number[], k: number): number {

    const sortedArr = nums.sort((a,b)=>a-b);
    const length = nums.length;

    let l = 0;
    let r = length-1;
    let count = 0;

    console.log(sortedArr)

    while (l < r ) {
        const sum = nums[l] + nums[r]

        if( sum === k) {
            count++;
        } 

        if(sum < k) {
            l++
        } else if(sum>k) {
            r--
        } else {
            l++;
            r--;
        }

    }

    return count;

};
