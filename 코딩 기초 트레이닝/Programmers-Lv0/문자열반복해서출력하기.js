// https://school.programmers.co.kr/learn/courses/30/lessons/181950

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    // str, n이 공백을 기준으로 입력되기 때문에
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    // console.log(Array(n+1).join(str))
    console.log(str.repeat(n))
});