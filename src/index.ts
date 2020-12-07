import fs from 'fs';

const start = () => {

    const normalize = (str: string): string[] => {
        const count = Number.parseInt(str.slice(0, str.indexOf(' ')));
        if (isNaN(count)) {
            return []
        }
        const ret: string[]  = []
        ret.length = count
        ret.fill(str.slice(str.indexOf(' ') + 1), 0, count)
        return ret
    }

    const inputArray = fs.readFileSync('./src/input.txt').toString().trimEnd().split(/\n/gm)
        .map((value) => value.split('contain'))
        .map((value) => [value[0].slice(0, value[0].lastIndexOf(' b')).trim(),
            value[1].split(',').map((value) => value.slice(0, value.lastIndexOf(' b')).trim())])

    let tmpArray = [
        'shiny gold'
    ]
    let count = 0
    do {
        tmpArray = tmpArray.map((value) => inputArray
            .filter((inputValue) => inputValue[0].includes(value))
            .map((value) => (value[1] as string[]).map((value) => normalize(value)))
        )
            .reduce((prev, current) => [...prev, ...current])
            .reduce((prev, current) => [...prev, ...current])
            .reduce((prev, current) => [...prev, ...current])
        count = count + tmpArray.length
    } while (!!tmpArray.length)

    console.log(count)
};

start();


