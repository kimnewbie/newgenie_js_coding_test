// https://school.programmers.co.kr/learn/courses/30/lessons/181901

function solution(n, k) {
    const answer = [];
    for (let i = 1; i <= n / k; i++) {
        answer.push(i * k)
    }
    return answer
}