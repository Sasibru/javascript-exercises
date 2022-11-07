const sumAll = function(numberOne, numberTwo) {
    let lowest = Math.min(numberOne, numberTwo);
    let highest = Math.max(numberOne, numberTwo);
    let numbers = [];
    let finalSum;
     for (let i = lowest; i <= highest; i++) {
        numbers.push(i);
      }
      return finalSum;    
};
// Do not edit below this line
module.exports = sumAll;
