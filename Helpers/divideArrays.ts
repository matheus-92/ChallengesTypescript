import { compareArrays } from "./compareArrays";
import { subtractArrays } from "./subtractArrays";

export function divideArrays(a:number[], b:number[]):number[]
{
    let result:number[] = [];
    let remainder: number[] = [];

    for(let i=0; i <a.length; i++)
    {
        remainder.push(a[i]);

        while(remainder.length >1 && remainder[0]==0)
        {
            remainder.shift();
        }

        let quotientDigit = 0;

        while(compareArrays(remainder,b) >=0)
        {
            remainder = subtractArrays(remainder,b);
            quotientDigit++
        }

        result.push(quotientDigit);
    }

     while (result.length > 1 && result[0] === 0) {
        result.shift();
    }

    return result;
}