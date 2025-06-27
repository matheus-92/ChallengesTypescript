"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumNames = sumNames;
const createNumbersArray_1 = require("../Helpers/createNumbersArray");
const readFile_1 = require("../Helpers/readFile");
const sumArrays_1 = require("../Helpers/sumArrays");
function getLettersIndex(name) {
    let indexes = [];
    indexes = name.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return code - 64;
        }
        return -1;
    });
    return indexes;
}
function sumNames() {
    return __awaiter(this, void 0, void 0, function* () {
        let name = yield (0, readFile_1.readFile)("D:\\Downloads\\0022_names.txt");
        let array = name.replace(/"/g, '').split(",");
        let scores = [];
        array.sort();
        for (let i = 0; i < array.length; i++) {
            let sumOfLetters = getLettersIndex(array[i]).reduce((acc, cur) => acc += cur, 0);
            let result = sumOfLetters * (i + 1);
            let number = (0, createNumbersArray_1.createArray)(result);
            scores.push(number);
        }
        let sumResult = scores.reduce((acc, cur) => (0, sumArrays_1.sumArray)(acc, cur));
        console.log(sumResult);
    });
}
