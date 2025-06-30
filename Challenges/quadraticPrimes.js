"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quadraticPrimes = quadraticPrimes;
const isPrime_1 = require("../Helpers/isPrime");
function quadraticPrimes() {
    let a = 0;
    let b = 0;
    let maxCount = 0;
    let limit = 1000;
    for (let i = -999; i < limit; i++) {
        for (let j = -1000; j <= limit; j++) {
            let n = 0;
            while ((0, isPrime_1.isPrime)((n ** 2) + (n * i) + j)) {
                n++;
            }
            if (maxCount < n) {
                maxCount = n;
                a = i;
                b = j;
            }
        }
    }
    console.log(a * b);
}
