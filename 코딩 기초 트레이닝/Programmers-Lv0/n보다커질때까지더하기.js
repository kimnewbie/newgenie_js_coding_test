// https://school.programmers.co.kr/learn/courses/30/lessons/181884

function solution(numbers, n) {
    return numbers.reduce((acc, curr) => (acc <= n) ? acc + curr : acc)
}