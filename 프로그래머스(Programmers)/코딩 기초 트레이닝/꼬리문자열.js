// https://school.programmers.co.kr/learn/courses/30/lessons/181841

const solution = (str_list, ex) => str_list.filter(v => !v.includes(ex)).join('')

function solution(str_list, ex) {
    var answer = '';
    str_list.forEach((v) => answer += v.includes(ex) ? '' : v)
    return answer
}