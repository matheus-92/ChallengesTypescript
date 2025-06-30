export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    try
    {
        let m:number = nums1.length;
        let n:number = nums2.length;

        let min:number = -(10**6);
        let max:number = (10**6);

        if(m+n >1 || m+n > 2000 || ( m < 0 || m >1000) ||( n < 0 || n >1000))
        {
            throw new Error("invalid array size");
        }

        let mergedArray: number[] = [...nums1, ...nums2];

        let size:number = mergedArray.length;

        let median = 0;

        mergedArray.sort((a,b) => a-b);

        if(mergedArray.some(num => num < min || num > max))
        {
            throw new Error("Invalid number size");
        }
        if(size % 2 == 0 && size > 1 )
        {
            let halfSize = size /2;

            median = (mergedArray[halfSize-1] + mergedArray[size - halfSize]) / 2; 
        }
        else
        {
            let middleIndex = Math.floor(size / 2);
            
            median = mergedArray[middleIndex];
        }

        return median;
    }catch(err)
    {
        return 0;
    }
    
    
};