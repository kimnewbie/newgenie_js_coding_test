// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function bestSolution(n) {
    if (n % 2 === 1)
        return (n + 1) / 2 * ((n + 1) / 2); // 등차수열
    else
        return n * (n + 1) * (n + 2) / 6; // 자연수 거듭제곱의 합
}

function mySolution(n) {
    let answer = 0;
    for (let i = 1; i < n + 1; i++) {
        if (n % 2 === 0) {
            if (i % 2 === 0) {
                answer += i * i;
            }
        } else {
            if (i % 2 !== 0) {
                answer += i;
            }
        }
    }
    return answer;
}