import { expansionMethod } from "../Helpers/expandFromMIddle";

function longestPalindrome(s: string): string {
    const size:number = s.length;

    let maxCount = 0;

    let biggest:string ='';

    let start:number=0, end:number=0;

    for(let i = 0; i < size; i++)
    {
        let lengthOdd:number=0,lengthEven:number=0;

        lengthOdd = expansionMethod(s, i, i);
        lengthEven = expansionMethod(s, i, i+1);

        let length:number = Math.max(lengthOdd, lengthEven); 

        if(length > (end - start))
        {
            start = i - Math.floor((length -1) /2);
            end = i + Math.floor(length /2);
        }

        
    }
    biggest = s.slice(start, end+1);

    return biggest;
};