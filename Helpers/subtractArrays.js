"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractArrays = subtractArrays;
function subtractArrays(a, b) {
    let result = [];
    let borrow = 0;
    a = [...a];
    b = Array(a.length - b.length).fill(0).concat(b);
    for (let i = a.length - 1; i >= 0; i--) {
        let diff = a[i] - b[i] - borrow;
        if (diff < 0) {
            diff += 10;
            borrow = 1;
        }
        else {
            borrow = 0;
        }
        result.unshift(diff);
    }
    while (result.length > 1 && result[0] == 0) {
        result.shift();
    }
    return result;
}
