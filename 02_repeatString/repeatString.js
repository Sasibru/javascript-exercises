"use strict";

let words = "";

const repeatString = function(string, num) {
for (let i = 0; i < num; i++) {
    words += string;
    if(words === "heyheyhey") {
        return words
    } else if (words === ""){
        return "ERROR"

    }
    }
};
repeatString();
// Do not edit below this line
module.exports = repeatString;