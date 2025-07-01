export function reverse(x: number): number {

    const isNetagitve:boolean = x <0;
    let n:number = 0;
    let number:string[] = x.toString().split('').reverse();

    
    if(isNetagitve)
    {
        number.pop();
        number.unshift('-');
    }

    n = parseInt(number.join(''));

    if(n < -(2**31) || n >( 2**31) -1)
    {
        return 0;
    }

    return n;
};