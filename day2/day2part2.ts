
interface Password{
    minNum: number,
    maxNum: number,
    required: string,
    password: string
}

function findValidPassword(){
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

        entry.minNum--
        entry.maxNum--
        let a: boolean = false
        let b: boolean = false

        if(entry.password[entry.minNum] === entry.required){
            a = true;
        }
        if(entry.password[entry.maxNum] === entry.required){
            b = true;
        }

        if (a != b){
            answer++;
        }
    });

    return answer;
}

console.log(findValidPassword())
module.exports = findValidPassword;