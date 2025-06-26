"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factor = factor;
function multiplication(a, b) {
    let carry = 0;
    const result = [];
    for (let i = a.length - 1; i >= 0; i--) {
        const m = a[i] * b + carry;
        result.unshift(m % 10);
        carry = Math.floor(m / 10);
    }
    while (carry > 0) {
        result.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return result;
}
function factor(n) {
    let result = [1];
    for (let i = 2; i <= n; i++) {
        result = multiplication(result, i);
    }
    return result;
}
