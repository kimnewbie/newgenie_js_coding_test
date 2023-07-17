// https://school.programmers.co.kr/learn/courses/30/lessons/120836

function solution(n) {
    var cnt = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) cnt++
    }
    return cnt;
}