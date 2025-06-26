"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLetterCount = getLetterCount;
const numberToWords_1 = require("./numberToWords");
function getLetterCount() {
    let sum = 0;
    for (let i = 0; i <= 1000; i++) {
        sum += (0, numberToWords_1.numberToWords)(i).join('').replace(' ', '').length;
    }
    console.log(sum);
}
