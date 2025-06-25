export function createMatrixNumbers(numbersList:String){
    const matrix: number[][] = numbersList.trim()
    .split('\n')
    .map(line => 
        line.trim().split(' ').map(num=> parseInt(num,10))
    );

    return matrix;
}