const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  const newArr = [...arr];
  let finalSum = 0;
  for(let i = 0; i < newArr.length; i++){
    finalSum += newArr[i];
  }
	return finalSum;
};

const multiply = function(arr) {
const newArr = [...arr];
const arrMultiplied = newArr.reduce((arrMultiplied, b) => arrMultiplied * b, 1);
return arrMultiplied;
};

const power = function(num, power) {
  let total = 1;
  for (let i = 1; i <= power; i++) { 
    total = total * num;
  }
  return total;
	
};


const factorial = function(num) {
  if (num === 0) {
    return 1;
  }else {
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total *= i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};