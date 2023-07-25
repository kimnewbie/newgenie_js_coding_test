// https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1, s2) {
    const answer = s1.filter((v) => s2.includes(v));
    return answer.length;
}