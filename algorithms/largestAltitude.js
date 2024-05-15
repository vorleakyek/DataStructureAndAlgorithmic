/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxAlt = 0;
    let currentAlt = 0;

    for(let i=0; i<gain.length;i++) {
        currentAlt += gain[i];

        maxAlt = Math.max(maxAlt, currentAlt)
    } 

    return maxAlt
};
