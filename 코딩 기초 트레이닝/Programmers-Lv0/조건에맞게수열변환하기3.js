// https://school.programmers.co.kr/learn/courses/30/lessons/181835

function solution(arr, k) {
    return arr.map((v, i) => k % 2 === 0 ? v + k : v * k);
}