export function getLettersIndex(name:string):number[]
{
    let indexes:number[] = [];
    indexes = name.split('').map(char=>
    {
        const code = char.charCodeAt(0);

        if(code >=65 && code <=90)
        {
            return code -64;
        }
        return -1;
    })

    return indexes;
}