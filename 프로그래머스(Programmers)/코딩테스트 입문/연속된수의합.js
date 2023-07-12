// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
    var min = Math.ceil(total / num - Math.floor(num / 2));
    var max = Math.floor(total / num + Math.floor(num / 2));

    return new Array(max - min + 1).fill(0).map((el, i) => { return i + min; });
}