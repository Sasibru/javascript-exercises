const reverseString = function(string) {
    /* Solution one
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
    */

    // Solution two

    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
