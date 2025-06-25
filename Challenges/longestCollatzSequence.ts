const cache: Record<number,number>={}

function ride(number:number) : number
{
    if (number === 1) return 1;
    if (cache[number]) return cache[number];

    const next = number % 2 === 0 ? number / 2 : 3 * number + 1;
    cache[number] = 1 + ride(next);
    return cache[number];
}

export function longestRide(startingNumber:number)
{
    let maxSteps = 0;
    let resultNumber = startingNumber;

    for (let i = startingNumber; i < 1000000; i++) {
        const steps = ride(i);
        if (steps > maxSteps) {
            maxSteps = steps;
            resultNumber = i;
        }
    }

    console.log(resultNumber);
}