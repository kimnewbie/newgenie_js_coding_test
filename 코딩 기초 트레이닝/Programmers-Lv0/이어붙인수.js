// https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list) {
    var even = '';
    var odd = '';

    for (let i of num_list) {
        if (i % 2 !== 0) {
            even += i;
        } else {
            odd += i;
        }
    }
    return +even + +odd;
}