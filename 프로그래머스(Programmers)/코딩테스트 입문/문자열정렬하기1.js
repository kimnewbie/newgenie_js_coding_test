// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
    return my_string.replace(/[^0-9]/g, '').split('').sort().map(v => +v);
}