import {promises as fs} from 'fs';

export async function readFile(path: string): Promise<string> {
    try {
        const data = await fs.readFile(path, 'utf-8');
        return data;
    } catch (err) {
        throw new Error("Something went wrong");
    }
}