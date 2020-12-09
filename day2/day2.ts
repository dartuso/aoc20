

interface Password{
    minNum: number,
    maxNum: number,
    required: string,
    password: string
}

function findPasswordV2(){
    const fs = require("fs");
    const file = "./day2/input.txt"

    let answer: number = 0;
    const passwords: Array<string> = fs.readFileSync(file).toString('utf-8').split('\r\n')

    passwords.forEach((str) => {
        let entry: Password = {
            minNum: 0,
            maxNum:0,
            required: "",
            password: ""
        }

        let parse = str.split("-")
        entry.minNum = parseInt(parse[0])
        parse = parse[1].split(' ')
        entry.maxNum = parseInt(parse[0])
        entry.password = parse[2]
        parse = parse[1].split(":")
        entry.required = parse[0]

        let count: number = 0;
        let length: number = entry.password.length
        for (let i = 0; i < length; i++) {
            if (entry.required === entry.password[i]){
                count++;
            }
        }

        if (count >=  entry.minNum && count <= entry.maxNum){
            answer++;
        }
    });

    return answer;
}

console.log(findPasswordV2())
module.exports = findValidPassword;