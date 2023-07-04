// https://school.programmers.co.kr/learn/courses/30/lessons/181932

function solution(code) {
    let ret = '';
    let mode = 0;

    for (let i = 0; i < code.length; i++) {
        if (Number(code[i]) === 1) mode = mode === 1 ? 0 : 1;
        if (Number(code[i]) !== 1 && i % 2 === mode) {
            ret += code[i]
        }
    }
    return ret.length > 0 ? ret : "EMPTY";
}