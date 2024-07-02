const sumAll = function(a, b) {
    // Entry Checks
    if ( a < 0 || b < 0 ) return 'ERROR'; 
    if ( typeof a !== 'number' || typeof b !== 'number' ) return 'ERROR';

    let sum = 0; 
    let smaller = ( a < b ) ? a : b;
    let larger = ( a > b ) ? a : b;

    for ( let i = smaller; i <= larger; i++ ) {
        sum = sum + i;        
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
