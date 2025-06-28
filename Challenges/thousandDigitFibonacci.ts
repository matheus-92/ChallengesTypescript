import { sumArray } from "../Helpers/sumArrays";

export function fibonacciNumber()
{
    let found:boolean=false;
    
    let numbers:number[][]=[[1],[1]]
    
    
    while(!found)
    {
        let length:number = numbers.length
        numbers.push(sumArray(numbers[length-2],numbers[length-1]))

        found = numbers[length-1].length == 1000; 

    }

    console.log(numbers.length-1)
}