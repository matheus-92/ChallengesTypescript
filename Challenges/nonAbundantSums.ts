import { sumDividors } from "../Helpers/sumDivisors";

export function sumOfIntegers()
{
    let abundantN:number[] = [];
    let isAbundant:boolean[]=[]
    const limit = 28124;

    for(let i = 1; i < limit; i++)
    {
        let n:number = sumDividors(i);
        
        if( i < n)
        {
            abundantN.push(i)
        }
    }

    for(let i =0; i< abundantN.length; i++)
    {
        for(let j =i; j< abundantN.length; j++)
        {
            const sum = abundantN[i] + abundantN[j];

            if( sum < limit)
            {
                isAbundant[sum] = true
            }
        }
    }

    let nonAbundantSum = 0;
    for(let k=1; k <limit; k++)
    {        
        if(!isAbundant[k])
        {
            nonAbundantSum +=k;
        }
    }
    
    console.log(nonAbundantSum)
}