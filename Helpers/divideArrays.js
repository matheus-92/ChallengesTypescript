"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divideArrays = divideArrays;
const compareArrays_1 = require("./compareArrays");
const subtractArrays_1 = require("./subtractArrays");
function divideArrays(a, b) {
    let result = [];
    let remainder = [];
    for (let i = 0; i < a.length; i++) {
        remainder.push(a[i]);
        while (remainder.length > 1 && remainder[0] == 0) {
            remainder.shift();
        }
        let quotientDigit = 0;
        while ((0, compareArrays_1.compareArrays)(remainder, b) >= 0) {
            remainder = (0, subtractArrays_1.subtractArrays)(remainder, b);
            quotientDigit++;
        }
        result.push(quotientDigit);
    }
    while (result.length > 1 && result[0] === 0) {
        result.shift();
    }
    return result;
}
