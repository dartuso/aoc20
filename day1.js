const file = "day1.txt"
const year = 2020;
const fs = require("fs");

function findDay1() {
    const number = fs.readFileSync(file).toString('utf-8').split('\r\n').map(x => {
        return parseInt(x)
    });
    let set = new Set();
    for (let i = 0; i < number.length; i++) {
        let temp = year - number[i];
        if (set.has(temp)) {
            let product = temp * number[i];
            const answer = [temp, number[i], product];
            console.log(answer);
            return answer;
        } else {
            set.add(number[i])
        }
    }
}


module.exports = findDay1;

/* slow way to find - O(n^2)?
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            if (year === (number[i] + number[j])) {
                a = number[i];
                b = number[j];
                product = a * b;
                break;
            }
        }
    }
    return [a, b, product];*/