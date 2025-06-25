function countDivisors(n: number): number {
        let divisors = 0;
        const sqrtN = Math.floor(Math.sqrt(n));

        for (let i = 1; i <= sqrtN; i++) {
            if (n % i === 0) {

                divisors += (i === n / i) ? 1 : 2;
            }
        }

        return divisors;
    }


export function highestTriangle(numberOfDivisors: number){
    var notFound:boolean = true;
    
    var triangleNumber:number = 1;
    
    while(notFound)
    {
        let triangle:number = (triangleNumber*(triangleNumber+1)) / 2;

        const a = triangleNumber % 2 == 0? triangleNumber /2 : triangleNumber;

        const b = (triangleNumber+1) %2 ==0? (triangleNumber+1) /2 : triangleNumber+1;

        const totalDivisors:number = countDivisors(a) * countDivisors(b);

        

        if(totalDivisors > numberOfDivisors)
        {
            console.log(triangle);
            notFound = false;
        }else
        {
            triangleNumber++
        }
    }
}