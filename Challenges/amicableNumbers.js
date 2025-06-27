"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amicableNumbers = amicableNumbers;
function sumDividors(number) {
    let totalSum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            totalSum += i;
        }
    }
    return totalSum;
}
function amicableNumbers() {
    let totalSum = 0;
    for (let i = 1; i < 10000; i++) {
        let n1 = sumDividors(i);
        let n2 = sumDividors(n1);
        if (n1 != i && i == n2) {
            totalSum += i;
        }
    }
    console.log(totalSum);
}
