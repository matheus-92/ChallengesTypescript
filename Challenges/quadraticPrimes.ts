import { isPrime } from "../Helpers/isPrime";

export function quadraticPrimes()
{
    let a:number = 0;
    let b:number = 0;

    let maxCount:number = 0;
    
    let limit = 1000;
    
    for(let i = -999; i < limit; i++)
    {
        for( let j = -1000; j <= limit; j++)
        {
            let n = 0;

            while(isPrime((n**2) + (n*i) + j))
            {
                n++;
            }

            if(maxCount < n)
            {
                maxCount = n;

                a = i;

                b = j;
            }
        }

    }

    console.log(a *b);
}