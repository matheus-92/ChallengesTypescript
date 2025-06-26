"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareArrays = compareArrays;
function compareArrays(a, b) {
    if (a.length != b.length) {
        return a.length - b.length;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return a[i] - b[i];
        }
    }
    return 0;
}
