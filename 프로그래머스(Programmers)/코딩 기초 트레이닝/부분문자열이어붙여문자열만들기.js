// https://school.programmers.co.kr/learn/courses/30/lessons/181911

function solution(my_strings, parts) {
    return parts.map(([s, e], i) => {
        return my_strings[i].slice(s, e + 1)
    }).join('')
}

function solution(my_strings, parts) {
    var answer = '';
    parts.forEach(([a, b], i) => {
        answer += my_strings[i].slice(a, b + 1)
    });
    return answer;
}