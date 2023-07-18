// https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before, after) {
    return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}