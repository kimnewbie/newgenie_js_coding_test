// https://school.programmers.co.kr/learn/courses/30/lessons/120892

function solution(cipher, code) {
    return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('');
}

function solution(cipher, code) {
    var answer = '';
    for (let i = 1; i <= cipher.length; i++) {
        if (i % code === 0) answer += cipher[i - 1];
    }
    return answer;
}