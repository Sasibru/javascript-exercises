"use strict";

const repeatString = function(string, num) {
let words = "";
if (num >= 0) {
for (let i = 0; i < num; i++) {
    words += string;
    }
    return words
}else{
    return "ERROR"
}
};
repeatString();
// Do not edit below this line
module.exports = repeatString;