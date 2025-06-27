"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumDividors = sumDividors;
function sumDividors(number) {
    let totalSum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            totalSum += i;
        }
    }
    return totalSum;
}
