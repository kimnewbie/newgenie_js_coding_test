// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n) {
    var answer = 1;
    var i = 1;
    while (answer <= n) {
        answer *= i;
        if (answer > n) {
            answer = answer / i
            break;
        }
        i++;
    }
    return i - 1;
}

function solution(n) {
    let i = 1;
    let f = 1;
    while (f * i < n) {
        f *= ++i;
    }
    return i;
} 