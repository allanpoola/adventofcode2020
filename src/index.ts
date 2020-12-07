import fs from 'fs';

const start = () => {


    const input2Array = fs.readFileSync('./src/input.txt').toString().trimEnd().split(/\n/gm)
        .map((value) => value.split('contain'))

    console.log(input2Array)
    let tmp2Array = ['shiny gold']
    let resArray: string[] = []

    do {
        tmp2Array = [...input2Array
            .filter((value) => !!tmp2Array.find((value2) => value[1].includes(value2)))
            .map((value) => value[0].trimEnd().slice(0, value[0].lastIndexOf(' b')))]
        resArray = [...resArray, ...tmp2Array]
    } while (tmp2Array.length)
    console.log(resArray.sort().filter((value, i, array) => value.localeCompare(array[i+1])).length)
};

start();


