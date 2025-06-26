"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPaths = findPaths;
const divideArrays_1 = require("../Helpers/divideArrays");
const factorial_1 = require("../Helpers/factorial");
const mutiplyArrays_1 = require("../Helpers/mutiplyArrays");
function findPaths(x, y) {
    let firstFactor = (0, factorial_1.factor)(x + y);
    let secondFactor = (0, factorial_1.factor)(x);
    let thirdFactor = (0, factorial_1.factor)(y);
    let multiOfFactors = (0, mutiplyArrays_1.multiplyArrays)(secondFactor, thirdFactor);
    let paths = (0, divideArrays_1.divideArrays)(firstFactor, multiOfFactors);
    console.log(`This is the number of unique paths: ${paths.join("")}`);
}
