// https://school.programmers.co.kr/learn/courses/30/lessons/181921

function solution(l, r) {
    var answer = [];
    for (let i = l; i <= r; i++) {
        let arr = String(i)
        if ([...arr].every(x => x === '5' || x === '0')) answer.push(i);
    }
    return answer.length ? answer : [-1];
}