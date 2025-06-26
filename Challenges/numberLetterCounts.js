"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLetterCount = getLetterCount;
const ones = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen', 'nineteen'
];
const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];
function breakNumbers(n) {
    const numStr = n.toString();
    const result = [];
    for (let i = numStr.length; i > 0; i -= 3) {
        result.push(numStr.slice(Math.max(i - 3, 0), i));
    }
    return result.reverse();
}
function numberToWords(n) {
    let numberParts = breakNumbers(n);
    let control = 0;
    let phrase = [];
    for (let i = numberParts.length - 1; i >= 0; i--) {
        let part = numberParts[i];
        let brokenNumber = part.split('').reverse().map((e, i) => e + '0'.repeat(i));
        if (parseInt(part) != 0) {
            if (control == 1) {
                phrase.unshift('thousand');
            }
        }
        for (let j = 0; j < brokenNumber.length; j++) {
            let match = brokenNumber[j].match(/0+$/);
            let number = parseInt(brokenNumber[j], 10);
            let zeros = match ? match[0].length : 0;
            let index = 0;
            if (number == 0 && j == 2) {
                phrase.unshift('and');
            }
            if (number == 0)
                continue;
            switch (zeros) {
                case 2:
                    index = Math.floor(number / 100);
                    if (parseInt(brokenNumber[0]) !== 0 || parseInt(brokenNumber[1]) !== 0) {
                        phrase.unshift(`and`);
                    }
                    phrase.unshift(`${ones[index]} hundred`);
                    break;
                case 1:
                    index = Math.floor(number / 10);
                    if (index === 1) {
                        let teenValue = parseInt(brokenNumber[0]) + 10;
                        phrase.unshift(ones[teenValue]);
                    }
                    else {
                        phrase.unshift(tens[index]);
                    }
                    break;
                default:
                    if (brokenNumber[j + 1] != '10') {
                        phrase.unshift(ones[number]);
                    }
                    break;
            }
        }
        control++;
    }
    if (phrase[phrase.length - 1] == 'and') {
        phrase.pop();
    }
    return phrase;
}
function getLetterCount() {
    let sum = 0;
    for (let i = 0; i <= 1000; i++) {
        sum += numberToWords(i).join('').replace(' ', '').length;
        console.log(sum);
    }
}
