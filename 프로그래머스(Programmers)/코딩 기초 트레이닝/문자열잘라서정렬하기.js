// https://school.programmers.co.kr/learn/courses/30/lessons/181866

const solution = myString => myString.match(/[^x]+/g).sort();

function solution(myString) {
    return myString.split('x').filter(v => v !== "").sort();
}