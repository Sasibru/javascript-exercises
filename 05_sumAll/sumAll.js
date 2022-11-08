const sumAll = function(numberOne, numberTwo) {
    let lowest = Math.min(numberOne, numberTwo);
    let highest = Math.max(numberOne, numberTwo);
    let numbers = [];
    let finalSum = 0;
     for (let i = lowest; i <= highest; i++) {
        numbers.push(i);
      }
      if (lowest < -1 || typeof numberOne === "string" || typeof numberTwo === "string" || Array.isArray(numberOne) || Array.isArray(numberTwo)) {
        return "ERROR";
    } else {
      for (let i = 0; i < numbers.length; i++) {
        finalSum += numbers[i];
      }
    }
      return finalSum;    
};
// Do not edit below this line
module.exports = sumAll;
