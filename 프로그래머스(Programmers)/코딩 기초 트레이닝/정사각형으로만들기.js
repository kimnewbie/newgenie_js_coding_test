// https://school.programmers.co.kr/learn/courses/30/lessons/181830

function solution(arr) {
    const len = arr.length > arr[0].length ? arr.length : arr[0].length;
    const newArr = Array.from(Array(len), () => Array(len).fill(0));
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            newArr[i][j] = arr[i][j]
        }
    }
    return newArr;
}