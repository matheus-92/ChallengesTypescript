import { sumDividors } from "../Helpers/sumDivisors";

export function amicableNumbers()
{
    let totalSum:number = 0;
    for(let i = 1; i <10000; i++)
    {
        let n1:number = sumDividors(i);

        let n2:number = sumDividors(n1);

        if(n1 != i && i == n2)
        {
            totalSum += i;
        }
    }
    console.log(totalSum)

}