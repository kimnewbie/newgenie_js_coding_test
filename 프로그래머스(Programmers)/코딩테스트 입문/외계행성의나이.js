// https://school.programmers.co.kr/learn/courses/30/lessons/120834

function solution(age) {
    return age
        .toString()
        .split("")
        .map((v) => "abcdefghij"[v])
        .join("");
} 