/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const length = nums.length;
    let insertPosition = 0;

    for(let currentIndex = 0; currentIndex <length; currentIndex++) {
        if(nums[currentIndex] !==0) {
            if(currentIndex > insertPosition) {
                nums[insertPosition] = nums[currentIndex];
                nums[currentIndex] = 0;
            }
            insertPosition++;
        }
    }
 
};



// function moveZeroes(nums: number[]): void {
//     let counter = 0;
//     for (let i=0; i<nums.length; i++) {
//         if(nums[i]===0){
//             counter++;
//             nums.splice(i,1);
//             console.log(nums)
//             i--;
//         }
        
//     }

//     for (let j=0; j<counter ; j++){
//         nums.push(0)
//     }
 
// };
