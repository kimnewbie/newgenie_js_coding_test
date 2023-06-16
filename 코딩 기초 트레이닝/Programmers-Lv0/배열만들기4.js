// https://school.programmers.co.kr/learn/courses/30/lessons/181918

function solution(arr) {
    var stk = [];
    for (let i = 0; i < arr.length; i++) {
        if (stk.length === 0) stk.push(arr[i]);
        else if (stk[stk.length - 1] < arr[i]) stk.push(arr[i]);
        else {
            stk.pop()
            i-- // i에 1을 더하지 않으므로
        }
    }
    return stk;
}