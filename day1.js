const file = "day1.txt"
const year = 2020;
const fs = require("fs");

function findDay1(){
    let a = 0, b = 0, product = 0;
    const number = fs.readFileSync(file).toString('utf-8').split('\r\n').map(x => {
        return parseInt(x)
    });

    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            if(year === (number[i] + number[j])){
                a = number[i];
                b = number[j];
                product = a * b;
                break;
            }
        }
    }
    return [a,b,product];
}
console.log(findDay1())

module.exports = findDay1;