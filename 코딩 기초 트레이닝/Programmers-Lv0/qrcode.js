// https://school.programmers.co.kr/learn/courses/30/lessons/181903

// for문 사용
function solution(q, r, code) {
    let answer = ''
    for (let i = 0; i < code.length; i++) {
        if (i % q === r) {
            answer += code[i]
        }
    }
    return answer;
}

// map 사용
function solution(q, r, code) {
    var answer = '';
    [...code].map((v, i) => i % q === r ? answer += v : answer)
    return answer;
}

// filter 사용
function solution(q, r, code) {
    return [...code].filter((_, i) => i % q === r).join('');
}