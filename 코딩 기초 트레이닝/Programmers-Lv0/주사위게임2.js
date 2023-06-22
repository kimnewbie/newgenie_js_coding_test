// https://school.programmers.co.kr/learn/courses/30/lessons/181930

// a의 2제곱 === a ** 2, a의 3제곱 === a ** 3 이라 표현

// 잘된 풀이
function solution(a, b, c) {
    const answer = new Set([a, b, c]).size;

    const sqare = a + b + c;
    const twoSqares = a ** 2 + b ** 2 + c ** 2;
    const cubic = a ** 3 + b ** 3 + c ** 3;

    switch (answer) {
        case 3: return sqare;
        case 2: return sqare * twoSqares;
        case 1: return sqare * twoSqares * cubic;
    }
}

// 내꺼
function mySolution(a, b, c) {
    let cnt = 0;
    const arr = [a, b, c];
    const sqare = a + b + c;
    const twoSqares = a * a + b * b + c * c
    const cubic = a * a * a + b * b * b + c * c * c;


    for (let i = 0; i < arr.length; i++) {
        const currElem = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (currElem === arr[j]) {
                cnt++
                break;
            }
        }
    }
    if (cnt === 0) {
        return sqare;
    } else if (cnt === 1) {
        return sqare * twoSqares
    } else {
        return sqare * twoSqares * cubic
    }
}