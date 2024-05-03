function reverseVowels(s: string): string {
    //Create a set of vowels fro easy access 
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O','U']);

    //Convert the string to an array to manipulate characters 
    const chars = s.split('');

    //initialize two pointers
    let leftPointer = 0;
    let rightPointer = chars.length-1; 

    //Process the characters until two pointers meet 
    while(leftPointer < rightPointer) {
        //Move the left pointer towards the right until it points to a vowel
        while (leftPointer < rightPointer && !vowels.has(chars[leftPointer])) {
            leftPointer++;
        }

        //Move the right pointer towards the left until it points to a vowel
        while (leftPointer < rightPointer && !vowels.has(chars[rightPointer])) {
            rightPointer--;
        }

        //Swap the vowels at the left and right pointers 
        [chars[leftPointer],chars[rightPointer]] =[chars[rightPointer], chars[leftPointer]];

        //Move the pointer closer towards the center 
        leftPointer++;
        rightPointer--;

    }

    //Join the characters back to a string and retun the result
    return chars.join('');
};
