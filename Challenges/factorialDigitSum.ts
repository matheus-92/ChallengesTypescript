import { factor } from "../Helpers/factorial";

export function factorialDigitSum()
{
    let factorial:number[] = factor(100);

    let sum = factorial.reduce((acc,cur)=> acc+=cur)

    console.log(sum)
}