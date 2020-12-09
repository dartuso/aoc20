const file = "day1.txt"
const year = 2020;
const fs = require("fs");

function sortNumbers(a, b) {
    return a - b;
}

function findNumbers() {
    let a = 0, b = 0, c = 0, product = 0;
    let number = fs.readFileSync(file).toString('utf-8').split('\r\n').map(x => {
        return parseInt(x)
    });
    let length = number.length

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            for (let k = j + 1; k < length; k++) {
                if (year === (number[i] + number[j] + number[k])) {
                    a = number[i];
                    b = number[j];
                    c = number[k];
                    product = a * b * c;
                }
            }
        }
    }
    return [a, b, c, product];
}

console.log(findNumbers())