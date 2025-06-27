function sumDividors(number:number):number
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