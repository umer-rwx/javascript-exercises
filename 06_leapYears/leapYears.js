const leapYears = function(year) {
    // Getting the weird century numbers out of the way first
    if ( year % 100 === 0 && year % 400 !== 0 ) {
        return false;
    }
    // Now for the standard condition
    if ( year % 4 == 0 ) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
