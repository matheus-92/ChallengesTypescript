"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakNumbers = breakNumbers;
function breakNumbers(n) {
    const numStr = n.toString();
    const result = [];
    for (let i = numStr.length; i > 0; i -= 3) {
        result.push(numStr.slice(Math.max(i - 3, 0), i));
    }
    return result.reverse();
}
