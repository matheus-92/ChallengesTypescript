export function breakNumbers(n:number):string[]
{
    const numStr = n.toString();
    const result:string[] =[];

    for(let i = numStr.length; i > 0; i -=3)
    {
        result.push(numStr.slice(Math.max(i-3,0),i))
    }

    return result.reverse()
}
