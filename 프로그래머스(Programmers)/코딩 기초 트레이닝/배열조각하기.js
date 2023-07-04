// https://school.programmers.co.kr/learn/courses/30/lessons/181893

function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        const curr = query[i];

        if (i % 2 === 0) {
            arr.splice(curr + 1, arr.length - curr + 1);
        } else {
            arr.splice(0, curr);
        }
    }
    return arr;
}