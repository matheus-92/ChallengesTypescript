"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = isPrime;
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    if (number == 2 || number == 3) {
        return true;
    }
    if (number % 2 == 0 || number % 3 == 0) {
        return false;
    }
    let numberLimit = Math.sqrt(number);
    for (let i = 5; i <= numberLimit; i += 6) {
        if (number % i == 0 || number % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}
