"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacciNumber = fibonacciNumber;
const sumArrays_1 = require("../Helpers/sumArrays");
function fibonacciNumber() {
    let found = false;
    let numbers = [[1], [1]];
    while (!found) {
        let length = numbers.length;
        numbers.push((0, sumArrays_1.sumArray)(numbers[length - 2], numbers[length - 1]));
        found = numbers[length - 1].length == 1000;
    }
    console.log(numbers.length - 1);
}
