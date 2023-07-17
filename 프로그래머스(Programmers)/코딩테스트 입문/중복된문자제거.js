// https://school.programmers.co.kr/learn/courses/30/lessons/120888

function solution(my_string) {
    const toSet = new Set(my_string);
    var answer = '';
    for (let i of toSet) {
        answer += i;
    }
    return answer;
}


function solution(my_string) {
    return [...new Set(my_string)].join('');
}