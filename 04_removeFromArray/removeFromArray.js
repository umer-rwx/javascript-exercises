const removeFromArray = function(array) {
    // Outer loop iterates over all parameters after the array
    // Inner loop iterates over all occurences of any given parameter until
    // indexOf() returns -1 (no occurrence of the parameter)

    for (let i = 1; i < arguments.length; i++) {
        while ( array.indexOf(arguments[i]) !== -1 ) {
            array.splice( array.indexOf(arguments[i]), 1 ) ;
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
