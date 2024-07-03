const fibonacci = function(x) {
    if (x < 0) {
        return "OOPS";
    } else if (x == 1 || x == 2) {
        return 1;
    } else if (x == 0) {
        return 0;
    } else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
