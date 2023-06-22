// https://school.programmers.co.kr/learn/courses/30/lessons/181924 

function solution(arr, queries) {
    queries.forEach(([a, b]) => {
        [arr[a], arr[b]] = [arr[b], arr[a]];
    })
    return arr;
}

function mySolution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        let tmp = arr[queries[i][0]]
        arr[queries[i][0]] = arr[queries[i][1]];
        arr[queries[i][1]] = tmp;
    }
    return arr;
}