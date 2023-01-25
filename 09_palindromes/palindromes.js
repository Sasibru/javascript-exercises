const palindromes = function (string) {
        const removeExc = string.replaceAll("!", "");
        const removePunct = removeExc.replaceAll(".", "");
        const removeCharacters = removePunct;
    const charactersRemoved = removeCharacters;
    const lowerCase = charactersRemoved.toLowerCase();
    const arrayValues = lowerCase.split("");
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join("");
    if (lowerCase === reverseString) {
        return true;
    }else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;

