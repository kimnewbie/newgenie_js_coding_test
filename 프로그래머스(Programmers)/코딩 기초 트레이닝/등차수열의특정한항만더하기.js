// https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a, d, included) {
    var answer = 0;
    // an = a + d(n - 1);
    for (let i = 0; i < included.length; i++) {
        if (included[i]) {
            answer += (a + (d * i))
        }
    }
    return answer;
}