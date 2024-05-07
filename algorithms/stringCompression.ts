function compress(chars: string[]): number {
    let writeIndex = 0;
    let size = chars.length;

    for(let readStart=0; readStart <size;) {
        let readEnd = readStart+1;

        while(readEnd < size && chars[readEnd] === chars[readStart]) {
            readEnd++;
        }

        chars[writeIndex++] = chars[readStart];

        let runLength = readEnd - readStart;
        if(runLength > 1) {
            let runLengthStr = runLength.toString();
            for(let i=0; i<runLengthStr.length; i++) {
                chars[writeIndex++] = runLengthStr[i];
            }
        }

        readStart = readEnd;
    }

    return writeIndex; 
};
