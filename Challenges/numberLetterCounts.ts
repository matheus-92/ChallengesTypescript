import { numberToWords } from "./numberToWords";

export function getLetterCount(){

    let sum:number = 0;
    for(let i=0; i<=1000;i++)
    {
        sum += numberToWords(i).join('').replace(' ','').length
    }
    console.log(sum)
}