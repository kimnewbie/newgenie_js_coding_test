// https://school.programmers.co.kr/learn/courses/30/lessons/181908

function solution(my_string, is_suffix) {
    const arr = [];
    for (let i in my_string) {
        arr.push(my_string.slice(-i));
    }
    return arr.filter(v => v === is_suffix).length;
}

const solution = (str, suff) => str.endsWith(suff) ? 1 : 0


