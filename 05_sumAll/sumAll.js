const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof(num1)!='number' || typeof(num2)!='number' ) {
        return "ERROR";
    }
    let sum = 0;

    // loop from smaller number to larger number
    let baseNum = (num1 <= num2) ? num1 : num2;
    let largerNum = (num1 >= num2) ? num1 : num2;

    for (let i = baseNum; i <= largerNum; i++) {
        // add each number to a running sum
        sum += i;
    }

    // return the sum
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
