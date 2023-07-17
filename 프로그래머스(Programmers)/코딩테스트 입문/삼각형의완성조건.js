// https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
    return Math.min(...sides) * 2 - 1
}

function solution(sides) {
    const minSide = Math.min(...sides);
    const maxSide = Math.max(...sides);
    var cnt = 0;
    for (let i = 1; i < minSide + maxSide; i++) {
        if (i <= maxSide && i + minSide > maxSide) cnt++
        if (i > maxSide && i < minSide + maxSide) cnt++

    }
    return cnt;
}