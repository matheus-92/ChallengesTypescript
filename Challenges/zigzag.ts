export function convert(s: string, numRows: number): string {
    let size:number = s.length;
    
    let row:number = 0;
    
    let col:number = 0;
    
    let matrix:string[][]=[];
    
    let n:number=0;

    let result:string = '';

    for(let i= 0; i < numRows; i++)
    {
        matrix[i] = [];
    }
    let goingDown = true;
    while(n < size)
    {
        matrix[row][col] = s[n];
        if(goingDown)
        {
            if(row <numRows-1)
            {
                row++;
            }else{
                goingDown=false;
                row--;
                col++;
            }
        }else
        {
            if(row>0)
            {
                row--;
                col++;
            }else
            {
                goingDown = true;
                row++;
            }
        }

        n++;
    }

    for(let i=0; i<numRows; i++)
    {
        for(let j=0; j<=col;j++)
        {
            if(matrix[i][j])
            {
                result += matrix[i][j];
            }
        }
    }
    return result;
};