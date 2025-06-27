"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNumbers = findNumbers;
function findNumbers(power, digits) {
    let finish = false;
    let n = 10;
    let numbers = [];
    let upperBound = digits * (9 ** power);
    let lowerBound = 10 ** (digits - 1);
    while (lowerBound > upperBound) {
        digits--;
        lowerBound = 10 ** (digits - 1);
        upperBound = digits * (9 ** power);
    }
    while (!finish) {
        let array = n.toString().split('').map(c => parseInt(c, 10));
        let sum = array.reduce((acc, cur) => acc += (cur ** power), 0);
        if (n == sum) {
            numbers.push(sum);
        }
        if (n > upperBound) {
            finish = true;
        }
        n++;
    }
    console.log(numbers.reduce((acc, cur) => acc += cur, 0));
}
