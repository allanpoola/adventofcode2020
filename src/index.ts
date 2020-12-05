import fs from 'fs';

const start = () => {

    const rows: number[] = [];
    rows.length = 128;
    for (let i = 0; i < rows.length; i++) {
        rows[i] = i;
    }
    const cols: number[] = [];
    cols.length = 8;
    for (let i = 0; i < cols.length; i++) {
        cols[i] = i;
    }

    const keepHalf = (input: number[], part: string): number[] => {
        const len = input.length;
        if (part === 'R' || part === 'B') {
            return input.slice(len/2);
        }
        return input.slice(0, (len/2));
    }

    const inputArray = fs.readFileSync('./src/input.txt').toString().split(/\n/gm)
        .map((value) => [value.substring(0, 6), value.substring(7)]);


    const result = inputArray.map((value) => {
        const rowValue = value[0].split('').reduce((keepHalf), rows)[0];
        const colValue = value[1].split('').reduce((keepHalf), cols)[0];
        return rowValue * 8 + colValue;
    })

     console.log(Math.max(...result));

};

start();


