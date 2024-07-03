const palindromes = function (str) {
    let strLower = str.toLowerCase();
    const arr = Array.from(strLower);
    const forDeletion = [" ", ".", ",", "!"];
    let arrClean = arr.filter((item) => !forDeletion.includes(item));
    let arrCleanReverse = arrClean.reverse();
    let strClean = arrClean.join("");
    let strCleanReverse = arrCleanReverse.join("");
    if (strClean === strCleanReverse) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
