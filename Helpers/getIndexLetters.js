"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLettersIndex = getLettersIndex;
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
