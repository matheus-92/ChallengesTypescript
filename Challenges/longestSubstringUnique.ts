export function lengthOfLongestSubstring(s: string): number {

    let letters:Record<string, number> = {};
    let size:number = s.length;
    let maxLength:number = 0;
    let start:number = 0;

    for(let i =0; i <size; i++)
    {
        const letter  = s[i];

        if(letters[letter] != undefined && letters[letter] >= start) 
            start = letters[letter]+1;
        
        letters[letter] = i;

        maxLength = Math.max(maxLength, i -start +1);
    }

    return maxLength;
};