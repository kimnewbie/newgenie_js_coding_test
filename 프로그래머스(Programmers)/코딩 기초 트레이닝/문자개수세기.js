// https://school.programmers.co.kr/learn/courses/30/lessons/181902

function solution(my_string) {
    // 대문자 + 소문자
    const alphabetArr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65)).concat(Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97)));
    // 0으로 채워진 52칸 배열 생성
    const arr = Array(52).fill(0);
    for (let i = 0; i < my_string.length; i++) {
        for (let j = 0; j < alphabetArr.length; j++) {
            if (my_string[i] === alphabetArr[j]) {
                arr[j]++;
            }
        }
    }
    return arr;
}

function solution(my_string) {
    let answer = Array(58).fill(0);
    for (let c of my_string) {
        answer[c.charCodeAt() - 65]++;
    }
    answer.splice(26, 6);
    return answer;
}
