"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinctPowers = distinctPowers;
const mutiplyArrays_1 = require("../Helpers/mutiplyArrays");
function distinctPowers(range, exponencial) {
    let numbers = new Set();
    for (let i = 2; i <= range; i++) {
        let num = i.toString().split('').map(c => parseInt(c), 10);
        let number = [];
        for (let j = 2; j <= exponencial; j++) {
            let ex = i.toString().split('').map(c => parseInt(c), 10);
            num = (0, mutiplyArrays_1.multiplyArrays)(num, ex);
            number.push(num);
        }
        number.forEach(array => {
            let word = array.join('');
            numbers.add(word);
        });
    }
    console.log(numbers.size);
}
