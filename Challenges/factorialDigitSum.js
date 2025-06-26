"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorialDigitSum = factorialDigitSum;
const factorial_1 = require("../Helpers/factorial");
function factorialDigitSum() {
    let factorial = (0, factorial_1.factor)(100);
    let sum = factorial.reduce((acc, cur) => acc += cur);
    console.log(sum);
}
