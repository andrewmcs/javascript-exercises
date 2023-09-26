const repeatString = function (stringToRepeat, numRepeats) {
    if (numRepeats >= 0) {
        return stringToRepeat.repeat(numRepeats);
    }
    else return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
