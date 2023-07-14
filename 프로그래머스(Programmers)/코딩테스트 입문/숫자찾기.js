// https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num, k) {
    const result = num.toString().indexOf(k);
    return result === -1 ? -1 : result + 1;
}