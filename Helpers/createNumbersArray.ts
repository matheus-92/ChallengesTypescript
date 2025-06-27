export function createArray(number:number):number[]
{
    return number.toString().split('').map(c=> parseInt(c,10));
}