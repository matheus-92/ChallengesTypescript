export function isPrime(number:number){

    if(number == 2 ||number == 3 || number == 5)
    {
        return true;
    } 
    
    if(number% 2 == 0 || number % 3 ==0)
    {
        return false;
    }
    else 
    {
        let numberLimit = Math.sqrt(number);

        for(let i = 5; i <= numberLimit; i+=6)
        {
            if(number % i ==0 || number % (i+2)==0)
            {
                return false;
            }

        }

        return true;
    }
        
}