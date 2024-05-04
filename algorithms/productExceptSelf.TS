//Product of Array Except Self

function productExceptSelf(nums: number[]): number[] {

    const length = nums.length;
    const result: number[] = [];

    // Forward pass: Calculate the product of all elements to the left of each index
    for(let i=0, productToLeft=1; i<length; i++) {
        result[i] = productToLeft; //Set the product (initially 1)
        productToLeft *= nums[i]; // Update the productToLeft for the next index 
    }

    // Backward pass: Calculate the product of all elements to the right of each index
    for(let i=length-1, productToRight =1; i>=0; i--) {
        result[i] *= productToRight; //Multiply with the already stored product to the left
        productToRight *= nums[i];  //Update the productToRight for the previous index 
    }

    return result; 
};



