export function expansionMethod(s: string, positionLeft:number, positionRight:number) :number
{
    while(positionLeft >=0 && positionRight <s.length && s[positionLeft] === s[positionRight])
    {
        positionLeft--;
        positionRight++;
    }

    let growthSize:number = positionRight - positionLeft -1;

    return growthSize;
}
