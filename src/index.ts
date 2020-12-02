import fs from 'fs';

interface IInput {
    char: string;
    min: number;
    max: number;
    str: string;
}
const start = () => {
    const inputArray = fs.readFileSync('./src/pwds.txt').toString().split('\n');
    const input: IInput[] = inputArray.map((input) => ({
        char: input.split(' ')[1]?.charAt(0),
        min: Number.parseInt(input.split(' ')[0].split('-')[0]),
        max: Number.parseInt(input.split(' ')[0].split('-')[1]),
        str: input.split(' ')[2]
    }))
        .filter((value) => !!value.char);

    const correctPwds = input.filter((value) => {
        if (value.str.charAt(value.min - 1) !== value.char && value.str.charAt(value.max - 1) !== value.char) {
            return false;
        }

        return !(value.str.charAt(value.min - 1) === value.char && value.str.charAt(value.max - 1) === value.char);


    })

    console.log(correctPwds);
    console.log(correctPwds.length);
};

start();


