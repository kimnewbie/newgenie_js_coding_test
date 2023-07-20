// https://school.programmers.co.kr/learn/courses/30/lessons/120846

function solution(n) {
    var cnt = 0;
    var arr = [];
    for (let i = 1; i <= n; i++) {
        cnt = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                cnt++;
            }
            if (cnt > 2) arr.push(i)
        }
    }
    return new Set(arr).size;
} 