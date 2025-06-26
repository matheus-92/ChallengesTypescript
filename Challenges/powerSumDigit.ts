import { multiplyArrays } from "../Helpers/mutiplyArrays";

const number: number = 2;


export function powerDigitSum()
{
    let exponent = 50

    const iterations:number = 1000 / 50;

    let exponencialList:number[][]= [] 

    for(let i = 1; i <= iterations; i++)
    {
       let exponencial = number**exponent;

       let result = exponencial.toString().split('').map(c=> parseInt(c,10));

       exponencialList.push(result)
    }

    let powerDigit:number[] = exponencialList.reduce((acc,next) => multiplyArrays(acc,next))

    let powerDigitSum:number = powerDigit.reduce((acc,next) => acc += next)

    console.log(powerDigitSum)
}