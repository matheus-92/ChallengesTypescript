export function findNumbers(numberToBeFound: number): void {
    let m = 2;
    let found = false;

    while (!found) {
        for (let n = 1; n < m; n++) {
            let sum = 2 * m * (m + n); 

            if (sum === numberToBeFound) {
                const product = (2 * m ** 5 * n) - (2 * n ** 5 * m); 

                console.log(`Triplet found using m=${m}, n=${n}`);
                console.log(`Product a*b*c = ${product}`);
                found = true;
                break;
            }
        }

        if (!found) {
            m++;
            
            if (2 * m * (m + 1) > numberToBeFound) {
                console.log("No triplet found.");
                break;
            }
        }
    }
}
