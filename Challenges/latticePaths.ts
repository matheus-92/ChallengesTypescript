import { divideArrays } from "../Helpers/divideArrays";
import { factor } from "../Helpers/factorial";
import { multiplyArrays } from "../Helpers/mutiplyArrays";

export function findPaths(x:number, y:number)
{
    let firstFactor:number[] = factor(x + y);
    let secondFactor:number[] = factor(x);
    let thirdFactor:number[] = factor(y);

    let multiOfFactors:number[] = multiplyArrays(secondFactor,thirdFactor);

    let paths:number[] = divideArrays(firstFactor,multiOfFactors);


    console.log(`This is the number of unique paths: ${paths.join("")}`)
}