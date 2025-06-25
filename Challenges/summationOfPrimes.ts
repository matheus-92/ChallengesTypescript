import { isPrime } from "../Helpers/isPrime";

export function sumOfPrimes(numberLimiter:number){
    
    let primes:number[] = [];
    
    for(let i=1; i< numberLimiter; i++){
        if(isPrime(i))
        {
            primes.push(i)
        }
    }

    const sumOfPrimes: number = primes.reduce((accumulator, currentvalue)=> accumulator +currentvalue, 0);

    console.log(`This is the sum of primes:${sumOfPrimes}`)
}