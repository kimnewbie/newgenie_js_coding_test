// https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A, B) {
    return (B + B).indexOf(A);
}

function solution(A, B) {
    if (A === B) return 0;
    for (let i = 0; i < A.length; i++) {
        A = A.slice(-1) + A.slice(0, -1);
        if (A === B) return i + 1;
    }
    return -1;
}