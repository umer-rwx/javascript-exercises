const convertToCelsius = function(fahrenheit) {
  let celsius = ( fahrenheit - 32 ) * 5 / 9;
  return Math.round( celsius * 10 ) / 10; // Rounds to one decimal place;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = ( celsius * 9 / 5 ) + 32;
  return Math.round( fahrenheit * 10 ) / 10; // Rounds to one decimal place;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
