// https://school.programmers.co.kr/learn/courses/30/lessons/181855

function solution(strArr) {
    let arr = Array(strArr.length).fill(0);

    for (let str of strArr) {
        arr[str.length]++
    }

    return Math.max(...arr);
}