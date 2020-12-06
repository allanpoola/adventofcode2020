import fs from 'fs';

const start = () => {

    const inputArray = fs.readFileSync('./src/input.txt').toString().trimEnd().split(/\n\n/gm)
        .map((value) => value.split(/\n/g))
        .map((value) => ({gr_size: value.length, str: value
                .join('')
                .split('')
                .sort()
        }))
        .map((main_value) => ({...main_value, str: main_value.str
                .filter((value, i, array) => array
                    .filter((sub_value) => sub_value == value)?.length == main_value.gr_size)
                .filter((value, i, array) => value != array[i+1])
        }))
        .reduce((prev, current) => prev + current.str.length, 0);

    console.log(inputArray)


};

start();


