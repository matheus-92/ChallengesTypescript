"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powerDigitSum = powerDigitSum;
const mutiplyArrays_1 = require("../Helpers/mutiplyArrays");
const number = 2;
function powerDigitSum() {
    let exponent = 50;
    const iterations = 1000 / 50;
    let exponencialList = [];
    for (let i = 1; i <= iterations; i++) {
        let exponencial = number ** exponent;
        let result = exponencial.toString().split('').map(c => parseInt(c, 10));
        exponencialList.push(result);
    }
    let powerDigit = exponencialList.reduce((acc, next) => (0, mutiplyArrays_1.multiplyArrays)(acc, next));
    let powerDigitSum = powerDigit.reduce((acc, next) => acc += next);
    console.log(powerDigitSum);
}
