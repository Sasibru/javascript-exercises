const palindromes = function (string) {
    const removeCharactersAndToLower = string
    .toLowerCase()
    .replace(/[^a-z]/g, "");
    const stringProcessing = removeCharactersAndToLower
    .split("")
    .reverse()
    .join("");
    if (removeCharactersAndToLower === stringProcessing) {
        return true;
    }else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;

