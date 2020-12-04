import fs from 'fs';

interface IPassport {
    byr?: string;
    iyr?: string;
    eyr?: string;
    hgt?: string;
    hcl?: string;
    ecl?: string;
    pid?: string;
    cid?: string;
}

const start = () => {

    const inputArray = fs.readFileSync('./src/input.txt').toString().split(/\n\n/gm)
        .map((value) => value.split(/\s/gm))
        .map((value) => value
            .map((value) => value.split(':'))
            .map((value) => ({[value[0]]: value[1]} as IPassport)))
        .map((value) => value.reduce((o, value) => Object.assign(o, value), {} as IPassport))
        .filter((value) => value.iyr &&
        value.byr && value.pid && value.ecl && value.hcl && value.hgt && value.eyr)


    console.log(inputArray);
    console.log(inputArray.length);

};

start();


