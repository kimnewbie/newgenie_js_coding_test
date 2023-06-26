// https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr) {
    const multiArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i]; j++) {
            multiArr.push(arr[i])
        }
    }
    return multiArr;
}

function solution(arr) {
    return arr.reduce((acc, curr) => [...acc, ...new Array(curr).fill(curr)], []);
} 