const file = "./day1/day1.txt"
const year = 2020;
const fs = require("fs");

function findDay1Part2() {
    let product = 0, answer = [];
    let number = fs.readFileSync(file).toString('utf-8').split('\r\n').map(x => {
        return parseInt(x)
    }).sort(function (a, b) {
        return a - b
    })
    let length = number.length

    for (let i = 0, l, r; i < length; i++) {
        l = i + 1;
        r = length - 1;
        while (l < r) {
            if (number[i] + number[l] + number[r] === year) {
                product = number[i] * number[l] * number[r];
                answer = [number[i],number[l],number[r],product]
                console.log(answer)
                return answer;
            } else if (number[i] + number[l] + number[r] < year)
                l++;
            else // sum > year
                r--;
        }
    }

}

module.exports = findDay1Part2;