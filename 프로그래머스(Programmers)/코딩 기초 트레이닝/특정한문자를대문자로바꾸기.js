// https://school.programmers.co.kr/learn/courses/30/lessons/181873

function solution(my_string, alp) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        !my_string[i].indexOf(alp) ? answer += my_string[i].toUpperCase() : answer += my_string[i].toLowerCase();
    }
    return answer
}

function solution(my_string, alp) {
    return my_string.replaceAll(alp, alp.toUpperCase());
}