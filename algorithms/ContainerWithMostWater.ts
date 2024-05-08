function maxArea(height: number[]): number {
    let maxArea = 0;
    const length = height.length;
    
    let line1Index = 0; 
    let line2Index = length-1;

    while (line2Index > line1Index) {
        const width = line2Index - line1Index;
        const possibleHeight = Math.min(height[line2Index], height[line1Index]);
        maxArea = Math.max(maxArea, width*possibleHeight);

        if(height[line2Index]> height[line1Index]) {
            line1Index++;
        } else {
            line2Index--;
        }
    }

    return maxArea;
    
};
