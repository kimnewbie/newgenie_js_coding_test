// https://school.programmers.co.kr/learn/courses/30/lessons/181865

function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    return eval(Number(a) + op + Number(b))
}