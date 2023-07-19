// https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string) {
    const answer = my_string.replace(/[^0-9]/g, '')
        .split('')
        .reduce((acc, curr) => acc + Number(curr), 0);
    return answer;
}

function solution(my_string) {
    return [...my_string].reduce((acc, cur) => Number(cur) ? +acc + +cur : acc, 0);
}

function solution(my_string) {
    var answer = '';
    const extract = my_string.split(/\D+/).filter(c => c !== '');
    for (let i of extract) {
        answer += i;
    }
    return [...answer].reduce((acc, curr) => acc + +curr, 0)
}