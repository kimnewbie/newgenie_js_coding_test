// https://school.programmers.co.kr/learn/courses/30/lessons/181914

function solution(number) {
    const str = number.split('');
    return str.reduce((acc, curr) => Number(acc) + Number(curr)) % 9;
}