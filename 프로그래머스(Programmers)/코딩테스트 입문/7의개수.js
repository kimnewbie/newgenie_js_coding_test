// https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array) {
    var answer = '';
    var cnt = 0;
    array.map(val => answer += val);
    [...answer].map(val => val === '7' ? cnt++ : cnt)
    return cnt;
}

function solution(array) {
    return array.join('').split('7').length - 1;
} 