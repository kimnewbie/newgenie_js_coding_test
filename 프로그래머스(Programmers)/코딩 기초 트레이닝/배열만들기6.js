// https://school.programmers.co.kr/learn/courses/30/lessons/181859

function solution(arr, idx = 0) {
    var stk = [];
    for (let i in arr) {
        // 빈 배열 초기값 설정
        if (stk.length === 0) {
            stk.push(arr[idx]);
            idx++;
        }
        else if (arr[idx] === stk[stk.length - 1]) {
            stk.pop();
            idx++;
        } else {
            stk.push(arr[idx])
            idx++;
        }
    }
    if (stk.length === 0) {
        return [-1];
    } else {
        return stk;
    }
}