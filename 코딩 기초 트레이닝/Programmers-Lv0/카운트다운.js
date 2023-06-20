// https://school.programmers.co.kr/learn/courses/30/lessons/181899

function solution(start, end) {
    const arr = []
    for (let i = start; i >= end; i--) {
        arr.push(i)
    }
    return arr;
}