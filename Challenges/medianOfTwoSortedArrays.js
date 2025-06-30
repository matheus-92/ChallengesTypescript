"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMedianSortedArrays = findMedianSortedArrays;
function findMedianSortedArrays(nums1, nums2) {
    let mergedArray = [...nums1, ...nums2];
    let size = mergedArray.length;
    let median = 0;
    mergedArray.sort();
    if (size % 2 == 0 && size < 1) {
        let halfSize = size / 2;
        console.log(mergedArray);
        median = (mergedArray[halfSize - 1] + mergedArray[size - halfSize]) / 2;
    }
    else {
        let middleIndex = Math.floor(size / 2);
        median = mergedArray[middleIndex];
    }
    console.log(median);
    return median;
}
;
