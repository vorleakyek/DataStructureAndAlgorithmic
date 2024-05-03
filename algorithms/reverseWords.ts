// Reverses the order of words in a given string.
function reverseWords(s: string): string {
    // Trim the input string to remove leading and trailing whitespaces.
    const trimmed : string = s.trim(); 

    // Split the trimmed string into an array of words using regular expression to match one or more spaces.
    const words : string[] = trimmed.split(/\s+/);

    // Reverse the array of words to get the words in reverse order.
    const reverse: string[] = words.reverse();

    return reverse.join(' ');

    
};
