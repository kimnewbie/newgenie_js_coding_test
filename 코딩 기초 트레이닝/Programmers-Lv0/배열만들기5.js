// https://school.programmers.co.kr/learn/courses/30/lessons/181912

function solution(intStrs, k, s, l) {
    return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
}

function mySolution(intStrs, k, s, l) {
    const answer = []
    for (let i of intStrs) {
        const arr = i.split('');
        const num = arr.slice(s, s + l).join('');
        if (num > k) {
            answer.push(Number(num))
        }
    }
    return answer
}