// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
    let answer = [];
    const arr = polynomial.split(" + ");
    const xNum = arr
        .filter(n => n.includes("x"))
        .map(n => n.replace('x', '') || '1') // [ '3', '1' ]
        .reduce((acc, cur) => acc + parseInt(cur), 0);
    const num = arr
        .filter((n) => !n.includes('x'))
        .reduce((acc, cur) => acc + parseInt(cur), 0);

    if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    if (num) answer.push(num);

    return answer.join(" + ");
}