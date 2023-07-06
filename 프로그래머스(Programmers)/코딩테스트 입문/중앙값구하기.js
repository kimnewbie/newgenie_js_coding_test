// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
    const newArr = array.sort((a, b) => a - b);
    const len = Math.floor(array.length / 2);

    return newArr[len];
} 