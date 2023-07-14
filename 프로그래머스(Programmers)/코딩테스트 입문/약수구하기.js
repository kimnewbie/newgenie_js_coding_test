// https://school.programmers.co.kr/learn/courses/30/lessons/120897

function solution(n) {
    // v는 0, index = 1 ~ n-1 까지
    return Array(n).fill(0).map((_, index) => index + 1).filter((v) => n % v === 0);
}

function solution(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) arr.push(i);
    }
    return arr;
}