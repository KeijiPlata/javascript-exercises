const convertToCelsius = function(temp) {
  // Math.round will round number to the nearest int
  // sample 2.49 will be rounded down 2 and 2.5 rounded up to 3
  // since we want the first decimal, we need to multiply it by 10 first
  // to move 1 decimal place, then divide by 10 to have the first decimal
  return Math.round(((temp - 32) * 5/9) *10)/10
};

const convertToFahrenheit = function(temp) {
  return Math.round(((temp * (9/5)) + 32) *10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
