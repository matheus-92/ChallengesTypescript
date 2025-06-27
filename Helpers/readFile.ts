import * as fs from 'fs';

export async function readFile(path:string)
{
    fs.readFile(path,'utf-8', (err,data)=>
    {
        if(err)
        {
            throw new Error("Something went wrong");
        }
        console.log(data)
        return data;
    })
    
}