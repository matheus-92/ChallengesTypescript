export function sumArray(a:number[], b:number[]):number[]
{
    const result:number[] = [];
    let carry = 0;

    const maxLength = Math.max(a.length, b.length);

    for (let i = 0; i < maxLength; i++) {
        const indexA = a.length - 1 - i;
        const indexB = b.length - 1 - i;

        const digitA = indexA >= 0 ? a[indexA] : 0;
        const digitB = indexB >= 0 ? b[indexB] : 0;

        const sum = digitA + digitB + carry;

        result.unshift(sum % 10);

        carry = Math.floor(sum / 10);
    }

    
    if (carry > 0) {
        result.unshift(carry);
    }

    return result;
}