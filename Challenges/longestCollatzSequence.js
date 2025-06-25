"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestRide = longestRide;
const cache = {};
function ride(number) {
    if (number === 1)
        return 1;
    if (cache[number])
        return cache[number];
    const next = number % 2 === 0 ? number / 2 : 3 * number + 1;
    cache[number] = 1 + ride(next);
    return cache[number];
}
function longestRide(startingNumber) {
    let maxSteps = 0;
    let resultNumber = startingNumber;
    for (let i = startingNumber; i < 1000000; i++) {
        const steps = ride(i);
        if (steps > maxSteps) {
            maxSteps = steps;
            resultNumber = i;
        }
    }
    console.log(resultNumber);
}
