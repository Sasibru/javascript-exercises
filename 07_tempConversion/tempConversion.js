const ftoc = function(input) {
  let fahreinheit = input;
  let toCelsius = (fahreinheit - 32) * 5 / 9;
  let finalTemp = Math.round(toCelsius * 10) / 10
  return finalTemp;;
};

const ctof = function(input) {
  let celsius = input;
  let toFahrenheit = celsius * 9 / 5 + 32;
  let finalTemp = Math.round(toFahrenheit * 10) / 10;
  return finalTemp;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
