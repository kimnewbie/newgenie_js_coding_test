// https://school.programmers.co.kr/learn/courses/30/lessons/181883

function solution(arr, queries) {
    queries.map(([a, b]) => {
        for (let i = a; i <= b; i++) {
            arr[i] += 1;
        }
    });
    return arr
}

function solution(arr, queries) {
    queries.forEach(([s, e]) => {
        while (s <= e) arr[s++]++;
    });
    return arr;
}
