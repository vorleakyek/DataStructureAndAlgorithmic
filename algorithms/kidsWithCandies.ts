function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const result: boolean[] = [];
    const maxValue = Math.max(...candies);

    for(let i=0; i<candies.length; i++) {
        if(candies[i]+extraCandies >= maxValue) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
