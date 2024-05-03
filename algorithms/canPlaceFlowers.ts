function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    const length = flowerbed.length;
   
    for(let i=0; i<length; i++) {
       const left = i===0? 0 : flowerbed[i-1];
       const right = i===length-1 ? 0: flowerbed[i+1];

       if(left + flowerbed[i] + right === 0) {
        flowerbed[i] =1;
        n--;
       }
    }

    return n<=0 ;
};
