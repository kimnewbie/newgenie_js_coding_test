// https://school.programmers.co.kr/learn/courses/30/lessons/181882

function solution(arr) {
    return arr.map(val => {
        if (val >= 50 && val % 2 === 0) return val = val / 2
        else if (val < 50 && val % 2 !== 0) return val = val * 2
        else return val;
    });
}

function solution(arr) {
    return arr.map(v => v >= 50 && v % 2 === 0 ? v / 2 : v < 50 && v % 2 === 1 ? v * 2 : v);
}