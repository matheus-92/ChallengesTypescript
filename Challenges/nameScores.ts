import { readFile } from  '../Helpers/readFile';

export async function sumNames()
{
    console.log(await readFile("D:\\Downloads\\0022_names.txt"))
}