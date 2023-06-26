// https://school.programmers.co.kr/learn/courses/30/lessons/181864

function solution(myString, pat) {
    return [...myString].map((v) => v === 'A' ? v = 'B' : v = 'A')
        .join('')
        .includes(pat) ? 1 : 0
}