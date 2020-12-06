import fs from 'fs';

const start = () => {

    const inputArray = fs.readFileSync('./src/input.txt').toString().trimEnd().split(/\n\n/gm)
        .map((value) => value.split(/\n/g))
        .map((value) => [value
            .join('')
            .split('')
            .sort()
            .filter((value, i, array) => value !== array[i+1])
            .join('')
        ])
        .map((value) => value[0].length)
        .reduce((prev, current) => prev + current)



    console.log(inputArray)


};

start();


