export function sumDividors(number:number):number
{
    let totalSum:number = 0;

    for(let i = 1; i <number; i++)
    {
        if(number % i == 0)
        {
            totalSum +=i;
        }
    }

    return totalSum;
}
