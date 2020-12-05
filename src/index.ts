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

    const yearValid = (year: string, min: number, max: number) => {
        const nr = Number.parseInt(year);
        // console.log(year, nr, year.length === 4 && nr >= min && nr <= max)
        return year.length === 4 && nr >= min && nr <= max;
    }

    // four digits; at least 1920 and at most 2002
    const byrValid = (byr: string) => {
        return yearValid(byr, 1920, 2002)
    }

    // four digits; at least 2010 and at most 2020.
    const iyrValid = (iyr: string) => {
        return yearValid(iyr, 2010, 2020)
    }

    // four digits; at least 2020 and at most 2030.
    const eyrValid = (eyr: string) => {
        return yearValid(eyr, 2020, 2030)
    }

    // hgt (Height) - a number followed by either cm or in:
    //   If cm, the number must be at least 150 and at most 193.
    //   If in, the number must be at least 59 and at most 76.
    const hgtValid = (hgt: string) => {
        const nrString = hgt.match(/\d+/g)
        const nr = Number.parseInt(nrString?nrString[0]:'0')
        const unit = hgt.match(/cm|in/g);
        // console.log( hgt, !!unit && (unit[0].localeCompare('cm')?(nr >= 59 && nr <= 76):(nr >= 150 && nr <= 193)))
        return !!unit && (unit[0].localeCompare('cm')?(nr >= 59 && nr <= 76):(nr >= 150 && nr <= 193))
    }

    // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
    const hclValid = (hcl: string) => {
        // console.log(hcl, !!hcl.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i))
        return !!hcl.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)
    }

    // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    const eclValid = (ecl: string) => {
        // console.log(ecl, ecl.length === 3 && !!ecl.match(/amb|blu|brn|gry|grn|hzl|oth/))
        return ecl.length === 3 && !!ecl.match(/amb|blu|brn|gry|grn|hzl|oth/);
    }

    // pid (Passport ID) - a nine-digit number, including leading zeroes.
    const pidValid = (pid: string) => {
        // console.log(pid,!!pid.match(/[0-9]{9}/));
        return pid.length === 9 && !!pid.match(/[0-9]{9}/);
    }

    const inputArray = fs.readFileSync('./src/input.txt').toString().split(/\n\n/gm)
        .map((value) => value.split(/\s/gm))
        .map((value) => value
            .map((value) => value.split(':'))
            .map((value) => ({[value[0]]: value[1]} as IPassport)))
        .map((value) => value.reduce((o, value) => Object.assign(o, value), {} as IPassport))
        .filter((value) =>
            iyrValid(value.iyr || '') &&
            byrValid(value.byr || '') &&
            pidValid(value.pid || '') &&
            eclValid(value.ecl || '') &&
            hclValid(value.hcl || '') &&
            hgtValid(value.hgt || '') &&
            eyrValid(value.eyr || ''))

    console.log(inputArray.length);

};

start();


