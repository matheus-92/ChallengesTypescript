import { multiplyArrays } from "../Helpers/mutiplyArrays"

export function distinctPowers(range:number,exponencial:number)
{
    let numbers = new Set<string>()
    for(let i=2;i<=range;i++)
    {
        let num = i.toString().split('').map(c=>parseInt(c),10)
        let number:number[][] = [];
        for(let j=2;j<=exponencial;j++)
        {
            let ex = i.toString().split('').map(c=>parseInt(c),10)

            num = multiplyArrays(num,ex); 
                       
            
            number.push(num);
        }

        number.forEach(array =>{
            let word = array.join('')
            numbers.add(word)
        })
    }

    console.log(numbers.size)
}