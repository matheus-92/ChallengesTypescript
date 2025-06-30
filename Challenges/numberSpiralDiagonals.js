"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diagonalSum = diagonalSum;
function diagonalSum() {
    const limit = 1001;
    var totalSum = 1;
    for (let i = 3; i <= limit; i += 2) {
        let sumOfCorners = 4 * (i ** 2) - 6 * (i - 1);
        totalSum += sumOfCorners;
    }
    console.log(totalSum);
}
