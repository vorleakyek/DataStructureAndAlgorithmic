function increasingTriplet(nums: number[]): boolean {
    let length = nums.length;

    if(length < 3) return false;

    let smallest = nums[0];
    let middle = Number.MAX_SAFE_INTEGER;

    for (let number of nums) {
        if(number <= smallest) {
            smallest = number;
        } else if (number <= middle) {
            middle = number;
        } else {
            return true;
        }
    }
    return false; 
};
