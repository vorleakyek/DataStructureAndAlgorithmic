function maxVowels(s: string, k: number): number {
    let length = s.length;
    let maxVow = 0;
    let currentVow = 0; 

  //count the number of vowels in the intial window 
    for(let i=0; i<k; i++) {
        
      if(s[i]==='a' || s[i]=== 'e'|| s[i]=== 'i'|| s[i]=== 'o'|| s[i]=== 'u') { 
        currentVow++; 
      }  
    }

  //update the max value when sliding the window 
   maxVow = currentVow; 

   for (let i=k; i<length; i++) {
    if(s[i]==='a' || s[i]=== 'e'|| s[i]=== 'i'|| s[i]=== 'o'|| s[i]=== 'u') { 
        currentVow++; 
    }
    if(s[i-k]==='a' || s[i-k]==='e' || s[i-k]==='i'|| s[i-k]==='o'|| s[i-k]==='u') {
        currentVow--;
    }

    maxVow = Math.max(maxVow, currentVow);

   }
    
    return maxVow;

};
