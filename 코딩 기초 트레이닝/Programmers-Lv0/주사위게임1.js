// https://school.programmers.co.kr/learn/courses/30/lessons/181839

function solution(a, b) {
    if (a % 2 === 1 && b % 2 === 1) return a ** 2 + b ** 2;
    else if (a % 2 === 1 || b % 2 === 1) return 2 * (a + b);
    else return Math.abs(a - b);
}

function solution(a, b) {
    const isOdd = (num) => num % 2 === 1;

    return isOdd(a) && isOdd(b)
        ? a ** 2 + b ** 2
        : isOdd(a) || isOdd(b)
            ? 2 * (a + b)
            : Math.abs(a - b);
}