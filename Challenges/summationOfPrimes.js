"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfPrimes = sumOfPrimes;
const isPrime_1 = require("../Helpers/isPrime");
function sumOfPrimes(numberLimiter) {
    let primes = [];
    for (let i = 1; i < numberLimiter; i++) {
        if ((0, isPrime_1.isPrime)(i)) {
            primes.push(i);
        }
    }
    const sumOfPrimes = primes.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);
    console.log(`This is the sum of primes:${sumOfPrimes}`);
}
