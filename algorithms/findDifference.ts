function findDifference(nums1: number[], nums2: number[]): number[][] {

    const s1 = new Set<number>(nums1.filter(value=>!nums2.includes(value)));
    const s2 = new Set<number>(nums2.filter(value=>!nums1.includes(value)));

    const uniqueInFirst = [...s1]
    const uniqueInSecond = [...s2];

    return [uniqueInFirst, uniqueInSecond]
    
    
};
