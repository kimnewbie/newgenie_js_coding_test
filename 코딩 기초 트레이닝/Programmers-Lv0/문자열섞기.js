// https://school.programmers.co.kr/learn/courses/30/lessons/181942

function solution(str1, str2) {
    return [...str1].reduce((prev, curr, i) => prev + curr + str2[i], '');
}