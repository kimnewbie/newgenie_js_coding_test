// https://school.programmers.co.kr/learn/courses/30/lessons/181923

function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        return arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1
    });
}