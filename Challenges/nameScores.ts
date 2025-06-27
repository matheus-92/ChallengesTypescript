import { createArray } from '../Helpers/createNumbersArray';
import { getLettersIndex } from '../Helpers/getIndexLetters';
import { readFile } from  '../Helpers/readFile';
import { sumArray } from '../Helpers/sumArrays';



export async function sumNames()
{
    let name:string = await readFile("D:\\Downloads\\0022_names.txt");

    let array:string[] = name.replace(/"/g,'').split(",");
    
    let scores:number[][] = [] 
    array.sort();

    for(let i=0; i< array.length;i++)
    {
        let sumOfLetters = getLettersIndex(array[i]).reduce((acc,cur)=>acc +=cur ,0)

        let result = sumOfLetters * (i+1);

        let number:number[] = createArray(result)

        scores.push(number);
    }

    let sumResult:number[]=scores.reduce((acc,cur)=> sumArray(acc,cur))
    
    console.log(sumResult)

}