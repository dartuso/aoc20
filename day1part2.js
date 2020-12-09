const file = "day1.txt"
const year = 2020;
const fs = require("fs");

function findDay1Part2() {
    let a = 0, b = 0, c = 0, product = 0;
    let number = fs.readFileSync(file).toString('utf-8').split('\r\n').map(x => {
        return parseInt(x)
    }).sort(function(a, b){return a-b})
    let length = number.length


    for (let i = 0, l, r; i < length; i++) {
        l = i + 1;
        r = length - 1;
        while (l < r) {
            if (number[i] + number[l] + number[r] === year) {
                a = number[i];
                b = number[l];
                c = number[r];
                product = a * b * c;
                break;
            }
            else if (number[i] + number[l] + number[r] < year)
                l++;
            else // A[i] + A[l] + A[r] > sum
                r--;
        }
    }
        return [a, b, c, product];
}
console.log(findDay1Part2())

module.exports = findDay1Part2;