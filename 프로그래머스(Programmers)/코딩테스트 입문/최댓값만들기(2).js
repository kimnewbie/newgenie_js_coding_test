// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
    const N = numbers.length;

    numbers.sort((a, b) => a - b);

    return Math.max(
        numbers[N - 1] * numbers[N - 2],
        numbers[0] * numbers[1]
    )
}

function solution(numbers) {
    const sortNum = [...numbers].sort((a, b) => b - a);
    const N = sortNum.length;
    return Math.abs(sortNum[0] * sortNum[1] > sortNum[N - 1] * sortNum[N - 2]) ? sortNum[0] * sortNum[1] : sortNum[N - 1] * sortNum[N - 2]
}