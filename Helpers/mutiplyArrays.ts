export function multiplyArrays(a:number[], b:number[]):number[]
{
    const result = Array(a.length + b.length).fill(0);

    for(let i = a.length-1; i >=0; i--)
    {
        for(let j = b.length-1; j>=0; j--)
        {
            const mul = a[i] * b[j]
            const pos = i + j + 1;

            result[pos] += mul;

            result[pos -1] += Math.floor(result[pos]/10);

            result[pos] %= 10;
        }
    }

    while(result[0]==0 && result.length > 1)
    {
        result.shift();
    }

    return result;
}