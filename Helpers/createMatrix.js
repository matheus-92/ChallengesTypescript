"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMatrixNumbers = createMatrixNumbers;
function createMatrixNumbers(numbersList) {
    const matrix = numbersList.trim()
        .split('\n')
        .map(line => line.trim().split(' ').map(num => parseInt(num, 10)));
    return matrix;
}
