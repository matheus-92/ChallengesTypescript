"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amicableNumbers = amicableNumbers;
const sumDivisors_1 = require("../Helpers/sumDivisors");
function amicableNumbers() {
    let totalSum = 0;
    for (let i = 1; i < 10000; i++) {
        let n1 = (0, sumDivisors_1.sumDividors)(i);
        let n2 = (0, sumDivisors_1.sumDividors)(n1);
        if (n1 != i && i == n2) {
            totalSum += i;
        }
    }
    console.log(totalSum);
}
