"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArray = createArray;
function createArray(number) {
    return number.toString().split('').map(c => parseInt(c, 10));
}
