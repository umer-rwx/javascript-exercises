const repeatString = function(string, reps) {
    if (reps < 0) return "ERROR";

    let returnString = "";
    for (let i = 1; i <= reps; i++) {
       returnString = returnString + string;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
