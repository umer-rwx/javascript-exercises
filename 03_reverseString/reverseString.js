const reverseString = function(string) {
    if (typeof string !== 'string') return 'ERROR';
    let lastIndex = string.length - 1;
    let returnString = "";

    for (let i = lastIndex; i >= 0; i--) {
        returnString = returnString + string.at(i);
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
