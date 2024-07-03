const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(arr) {
	const initialValue = 0;
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
};

const multiply = function(arr) {
  let initialValue = 1;
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue, initialValue);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
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
