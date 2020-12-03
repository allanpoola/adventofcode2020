import fs from 'fs';

const start = () => {

    const makeAnswerArray = (inputArray: string[], right: number, down: number) => {
        return inputArray
            .filter((value, index) => Math.floor(index/down) === index/down)
            .map((value, index) => {
                const length = value.length;
                const x = (index * right) - Math.floor((index * right) / length) * length;
                return value.slice(x)
            });
    }

    const inputArray = fs.readFileSync('./src/input.txt').toString().split('\n').filter((value) => !!value?.length);

    const answer1 = makeAnswerArray(inputArray, 1, 1).filter((value) => value.charAt(0) === '#').length;
    const answer2 = makeAnswerArray(inputArray, 3, 1).filter((value) => value.charAt(0) === '#').length;
    const answer3 = makeAnswerArray(inputArray, 5, 1).filter((value) => value.charAt(0) === '#').length;
    const answer4 = makeAnswerArray(inputArray, 7, 1).filter((value) => value.charAt(0) === '#').length;
    const answer5 = makeAnswerArray(inputArray, 1, 2).filter((value) => value.charAt(0) === '#').length;

    console.log(answer1 * answer2 * answer3 * answer4 * answer5);

};

start();


