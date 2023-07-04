// https://school.programmers.co.kr/learn/courses/30/lessons/181831

function solution(arr) {
    const test = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            test.push(arr[i][j] === arr[j][i] ? 1 : 0)
        }
    }
    return test.includes(0) ? 0 : 1;
} 