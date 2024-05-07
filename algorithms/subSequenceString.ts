function isSubsequence(s: string, t: string): boolean {
    const lengthOfT = t.length;
    const lengthOfS = s.length;

    let indexOfS =0;

    for(let indexOfT=0; indexOfS<lengthOfS && indexOfT<lengthOfT; indexOfT++) {
        if(t[indexOfT] === s[indexOfS]) {
            indexOfS++;
        }
    }

    return indexOfS === lengthOfS;
};
